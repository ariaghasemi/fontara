import { STORAGE_KEYS } from "../config/storage"
import {
  createSyncedSettings,
  FONTARA_SETTINGS_UPDATED_AT_KEY,
  FONTARA_SYNCED_STORAGE_KEYS,
  getLocalStorageReadDefaults,
  getSettingsSyncDefaults,
  getSettingsSyncReadDefaults,
  getSettingsUpdatedAt,
  hasSyncedSettingsValues,
  mergeSyncedSettingsWithLocalOnlyValues
} from "../utils/settings-sync"
import {
  getLocalValues,
  getSyncValues,
  setLocalValues,
  setSyncValues
} from "../utils/storage"
import {
  mergeWebsiteLists,
  normalizeCustomFontList,
  normalizeStorageValues
} from "../utils/storage-normalization"
import { migrateLegacyCustomFontStorage } from "./custom-font-migration"
import { runBackgroundSettingsStorageOperation } from "./settings-manager"

export { mergeWebsiteLists, normalizeCustomFontList }

const SYNC_SAVE_DELAY_MS = 3000

let syncSaveTimeout: ReturnType<typeof setTimeout> | null = null
let applyingSyncToLocal = false
let syncWriteQueue: Promise<void> = Promise.resolve()

function enqueueSyncWrite(operation: () => Promise<void>): Promise<void> {
  const run = () => runBackgroundSettingsStorageOperation(operation)
  const result = syncWriteQueue.then(run, run)
  syncWriteQueue = result.catch(() => {})
  return result
}

function isSyncSettingsEnabled(value: unknown): boolean {
  return value !== false
}

/**
 * A fresh profile reads every synced key as its default value (storage
 * `get(defaults)` fills them in), while a pre-existing profile with user
 * changes diverges from the defaults on at least one synced key. That
 * divergence is what separates "old user state without a timestamp stamp"
 * from "fresh install that should accept the synced state".
 */
function hasDivergedSyncedSettings(
  localValues: Record<string, unknown>
): boolean {
  const defaults = getSettingsSyncDefaults()

  return FONTARA_SYNCED_STORAGE_KEYS.some((key) => {
    if (key === STORAGE_KEYS.SYNC_SETTINGS) {
      return false
    }
    const localValue = localValues[key]
    if (localValue === undefined) {
      return false
    }

    return !valuesAreEqual(localValue, defaults[key])
  })
}

function valuesAreEqual(first: unknown, second: unknown): boolean {
  return JSON.stringify(first) === JSON.stringify(second)
}

function pickChangedValues(
  currentValues: Record<string, unknown>,
  nextValues: Record<string, unknown>
): Record<string, unknown> {
  const changedValues: Record<string, unknown> = {}

  for (const [key, value] of Object.entries(nextValues)) {
    if (!valuesAreEqual(currentValues[key], value)) {
      changedValues[key] = value
    }
  }

  return changedValues
}

function logSyncError(message: string, error: unknown): void {
  if (typeof __DEBUG__ !== "undefined" && __DEBUG__) {
    console.warn(message, error)
  }
}

function preserveRawCustomFontCatalog(
  currentValues: Record<string, unknown>,
  nextValues: Record<string, unknown>
): Record<string, unknown> {
  const rawCatalog = currentValues[STORAGE_KEYS.CUSTOM_FONT_LIST]
  if (rawCatalog === undefined) return nextValues
  if (valuesAreEqual(rawCatalog, nextValues[STORAGE_KEYS.CUSTOM_FONT_LIST])) {
    return nextValues
  }

  // Custom fonts are local-only and may contain forward-version or recoverable
  // metadata that the current normalizer cannot safely interpret. Automatic
  // startup/sync repair must not rewrite that source catalog with a lossy
  // normalized view. Keep dependent selections too, so a newer version can
  // restore the complete relationship. Explicit font mutations still replace
  // these values through the background settings manager.
  const preservedValues: Record<string, unknown> = {
    ...nextValues,
    [STORAGE_KEYS.CUSTOM_FONT_LIST]: rawCatalog
  }
  for (const key of [STORAGE_KEYS.SELECTED_FONT, STORAGE_KEYS.SITE_PROFILES]) {
    if (currentValues[key] !== undefined) {
      preservedValues[key] = currentValues[key]
    }
  }
  return preservedValues
}

async function setLocalValuesIfChanged(
  currentValues: Record<string, unknown>,
  nextValues: Record<string, unknown>
): Promise<void> {
  const changedValues = pickChangedValues(
    currentValues,
    preserveRawCustomFontCatalog(currentValues, nextValues)
  )
  if (Object.keys(changedValues).length === 0) {
    return
  }

  await setLocalValues(changedValues)
}

async function saveSyncSetting(syncSettings: boolean): Promise<void> {
  const localSyncSetting = await getLocalValues({
    [STORAGE_KEYS.SYNC_SETTINGS]: undefined
  })
  if (localSyncSetting[STORAGE_KEYS.SYNC_SETTINGS] !== syncSettings) {
    await setLocalValues({ [STORAGE_KEYS.SYNC_SETTINGS]: syncSettings })
  }

  try {
    await setSyncValues({ [STORAGE_KEYS.SYNC_SETTINGS]: syncSettings })
  } catch (error) {
    if (syncSettings) {
      logSyncError("Settings synchronization was disabled due to error.", error)
      await setLocalValues({ [STORAGE_KEYS.SYNC_SETTINGS]: false })
    }
  }
}

async function saveSyncedSettings(
  values: Record<string, unknown>
): Promise<void> {
  if (!isSyncSettingsEnabled(values[STORAGE_KEYS.SYNC_SETTINGS])) {
    await saveSyncSetting(false)
    return
  }

  try {
    await setSyncValues(await createSyncedSettings(values))
  } catch (error) {
    logSyncError("Settings synchronization was disabled due to error.", error)
    await saveSyncSetting(false)
  }
}

async function saveSyncedSettingsFromLocal(): Promise<void> {
  await saveSyncedSettings(await getLocalValues(getLocalStorageReadDefaults()))
}

/**
 * Schedules a debounced sync flush. The payload is deliberately not captured
 * here: the flush always serializes the current local state at write time so
 * a delayed or coalesced flush can never publish a snapshot that a newer
 * local mutation, a merged sync state, or a sync toggle has already
 * superseded.
 */
export function schedulePendingSettingsSync(): void {
  if (syncSaveTimeout !== null) {
    clearTimeout(syncSaveTimeout)
  }

  syncSaveTimeout = setTimeout(() => {
    syncSaveTimeout = null
    void enqueueSyncWrite(() => saveSyncedSettingsFromLocal())
  }, SYNC_SAVE_DELAY_MS)
}

export async function flushPendingSettingsSync(): Promise<void> {
  if (syncSaveTimeout !== null) {
    clearTimeout(syncSaveTimeout)
    syncSaveTimeout = null
  }

  await enqueueSyncWrite(() => saveSyncedSettingsFromLocal())
}

function applySyncStorageToLocal(): Promise<void> {
  return runBackgroundSettingsStorageOperation(applySyncStorageToLocalUnlocked)
}

async function applySyncStorageToLocalUnlocked(): Promise<void> {
  const localValues = await getLocalValues(getLocalStorageReadDefaults())
  if (!isSyncSettingsEnabled(localValues[STORAGE_KEYS.SYNC_SETTINGS])) {
    return
  }

  let syncedValues: Record<string, unknown> | null
  try {
    syncedValues = await getSyncValues(getSettingsSyncReadDefaults())
  } catch (error) {
    logSyncError(
      "Synced settings could not be read; keeping local settings until the next event.",
      error
    )
    return
  }

  if (!syncedValues) {
    // The sync area is unreadable right now (unavailable, or holding a
    // partially written chunked state). That is not "empty": acting on it
    // would let a transient condition flip the user's sync preference or
    // overwrite local state. Keep local untouched and retry on the next
    // event; a real failure surfaces when the next sync write attempts it.
    logSyncError(
      "Sync storage is unreadable; keeping local settings.",
      new Error("sync-storage-unreadable")
    )
    return
  }

  if (syncedValues[STORAGE_KEYS.SYNC_SETTINGS] === false) {
    applyingSyncToLocal = true
    try {
      await setLocalValuesIfChanged(localValues, {
        ...localValues,
        [STORAGE_KEYS.SYNC_SETTINGS]: false
      })
    } finally {
      applyingSyncToLocal = false
    }
    return
  }

  if (!hasSyncedSettingsValues(syncedValues)) {
    await saveSyncedSettingsFromLocal()
    return
  }

  // Local state that predates revisioned settings (no updatedAt stamp) but
  // contains user changes is pre-existing state, not a fresh install: a
  // timestamped sync payload must not overwrite it. Adopt the local state,
  // stamp it, and push it to sync so the next comparison has a valid local
  // baseline. A fresh profile (every synced key still at its default) keeps
  // accepting the synced state through the merge below.
  if (
    getSettingsUpdatedAt(localValues) === 0 &&
    hasDivergedSyncedSettings(localValues) &&
    getSettingsUpdatedAt(syncedValues) > 0
  ) {
    applyingSyncToLocal = true
    try {
      await setLocalValuesIfChanged(localValues, {
        ...localValues,
        [FONTARA_SETTINGS_UPDATED_AT_KEY]: Date.now()
      })
    } finally {
      applyingSyncToLocal = false
    }
    await saveSyncedSettingsFromLocal()
    return
  }

  if (getSettingsUpdatedAt(localValues) > getSettingsUpdatedAt(syncedValues)) {
    await saveSyncedSettingsFromLocal()
    return
  }

  const latestLocalValues = await getLocalValues(getLocalStorageReadDefaults())
  if (!isSyncSettingsEnabled(latestLocalValues[STORAGE_KEYS.SYNC_SETTINGS])) {
    return
  }
  if (
    getSettingsUpdatedAt(latestLocalValues) > getSettingsUpdatedAt(syncedValues)
  ) {
    await saveSyncedSettingsFromLocal()
    return
  }

  const mergedValues = await mergeSyncedSettingsWithLocalOnlyValues(
    latestLocalValues,
    syncedValues
  )

  applyingSyncToLocal = true
  try {
    await setLocalValuesIfChanged(latestLocalValues, mergedValues)
  } finally {
    applyingSyncToLocal = false
  }
}

export function ensureStorageValues(): Promise<void> {
  return runBackgroundSettingsStorageOperation(ensureStorageValuesUnlocked)
}

async function ensureStorageValuesUnlocked(): Promise<void> {
  const initialLocalValues = await getLocalValues(getLocalStorageReadDefaults())
  const { values: localValues } =
    await migrateLegacyCustomFontStorage(initialLocalValues)
  const normalizedLocalValues = await normalizeStorageValues(localValues)

  if (
    !isSyncSettingsEnabled(normalizedLocalValues[STORAGE_KEYS.SYNC_SETTINGS])
  ) {
    await setLocalValuesIfChanged(localValues, normalizedLocalValues)
    return
  }

  let syncedValues: Record<string, unknown> | null
  try {
    syncedValues = await getSyncValues(getSettingsSyncReadDefaults())
  } catch (error) {
    logSyncError(
      "Synced settings could not be read; keeping local settings.",
      error
    )
    await setLocalValuesIfChanged(localValues, normalizedLocalValues)
    return
  }

  if (!syncedValues) {
    // Unreadable (unavailable or transient partially chunked state) is not
    // "empty". Normalize local only: never flip the sync preference or
    // pull/push based on a transient condition.
    logSyncError(
      "Sync storage is unreadable; keeping local settings.",
      new Error("sync-storage-unreadable")
    )
    await setLocalValuesIfChanged(localValues, normalizedLocalValues)
    return
  }

  if (syncedValues[STORAGE_KEYS.SYNC_SETTINGS] === false) {
    await setLocalValuesIfChanged(localValues, {
      ...normalizedLocalValues,
      [STORAGE_KEYS.SYNC_SETTINGS]: false
    })
    return
  }

  if (!hasSyncedSettingsValues(syncedValues)) {
    const latestLocalValues = await getLocalValues(
      getLocalStorageReadDefaults()
    )
    const latestNormalizedLocalValues =
      await normalizeStorageValues(latestLocalValues)
    const latestUpdatedAt = getSettingsUpdatedAt(latestLocalValues)

    await setLocalValuesIfChanged(latestLocalValues, {
      ...latestNormalizedLocalValues,
      ...(latestUpdatedAt > 0
        ? { [FONTARA_SETTINGS_UPDATED_AT_KEY]: latestUpdatedAt }
        : {})
    })
    await saveSyncedSettingsFromLocal()
    return
  }

  // Same protection as the sync event path: pre-existing local state without
  // a revision stamp must not be overwritten by a timestamped sync payload.
  // A fresh profile (every synced key still at its default) keeps accepting
  // the synced state through the merge below.
  if (
    getSettingsUpdatedAt(localValues) === 0 &&
    hasDivergedSyncedSettings(localValues) &&
    getSettingsUpdatedAt(syncedValues) > 0
  ) {
    await setLocalValuesIfChanged(localValues, {
      ...normalizedLocalValues,
      [FONTARA_SETTINGS_UPDATED_AT_KEY]: Date.now()
    })
    await saveSyncedSettingsFromLocal()
    return
  }

  if (getSettingsUpdatedAt(localValues) > getSettingsUpdatedAt(syncedValues)) {
    await setLocalValuesIfChanged(localValues, {
      ...normalizedLocalValues,
      [FONTARA_SETTINGS_UPDATED_AT_KEY]: getSettingsUpdatedAt(localValues)
    })
    await saveSyncedSettingsFromLocal()
    return
  }

  const latestLocalValues = await getLocalValues(getLocalStorageReadDefaults())
  if (
    getSettingsUpdatedAt(latestLocalValues) > getSettingsUpdatedAt(syncedValues)
  ) {
    await setLocalValuesIfChanged(latestLocalValues, {
      ...(await normalizeStorageValues(latestLocalValues)),
      [FONTARA_SETTINGS_UPDATED_AT_KEY]: getSettingsUpdatedAt(latestLocalValues)
    })
    await saveSyncedSettingsFromLocal()
    return
  }

  const mergedValues = await mergeSyncedSettingsWithLocalOnlyValues(
    latestLocalValues,
    syncedValues
  )
  await setLocalValuesIfChanged(latestLocalValues, mergedValues)
}

export function registerSettingsSyncListeners(): void {
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "sync") {
      void applySyncStorageToLocal().catch((error) => {
        logSyncError("Failed to apply synchronized settings.", error)
      })
      return
    }

    if (areaName !== "local" || applyingSyncToLocal) {
      return
    }

    if (changes[STORAGE_KEYS.SYNC_SETTINGS]) {
      void runBackgroundSettingsStorageOperation(async () => {
        // The event can wait behind a newer UI mutation. Mirror the current
        // preference instead of writing its obsolete newValue back to local.
        const localValues = await getLocalValues({
          [STORAGE_KEYS.SYNC_SETTINGS]: undefined
        })
        const syncSettings = isSyncSettingsEnabled(
          localValues[STORAGE_KEYS.SYNC_SETTINGS]
        )
        await saveSyncSetting(syncSettings)
        if (syncSettings) schedulePendingSettingsSync()
      }).catch((error) => {
        logSyncError("Failed to synchronize the sync preference.", error)
      })
      return
    }

    if (FONTARA_SYNCED_STORAGE_KEYS.some((key) => key in changes)) {
      schedulePendingSettingsSync()
    }
  })
}
