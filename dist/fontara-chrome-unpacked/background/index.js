"use strict";(()=>{var pl=Object.defineProperty;var p=(t,e,n)=>()=>{if(n)throw n[0];try{return t&&(e=t(t=0)),e}catch(o){throw n=[o],o}};var Fl=(t,e)=>{for(var n in e)pl(t,n,{get:e[n],enumerable:!0})};function Sl(t){return typeof t=="string"&&yl.includes(t)}function er(t){return t===Ne||Sl(t)?t:Ne}var Ne,yl,xn=p(()=>{"use strict";Ne="auto",yl=["fa","en","ar"]});function Re(t){return t.trim().toLowerCase()}function El(t,e){return Re(t)===Re(e)}function wl(t,e){let n=Re(t),o=Re(e);return n===o||n.endsWith(`.${o}`)}function bl(t){return t?hl.find(e=>e.matches.some(n=>El(t,n))||e.wildcardMatches?.some(n=>wl(t,n)))??null:null}function or(t){if(!t)return null;try{return bl(new URL(t).hostname)}catch{return null}}function Pe(t){let e=typeof t=="object"&&t!==null?t:{};return nr.reduce((n,o)=>(n[o]=typeof e[o]=="boolean"?e[o]:ve[o],n),{})}function rr(t,e){return(t??ve)[e]!==!1}var nr,hl,ve,xe=p(()=>{"use strict";nr=["chatgpt","claude","gemini","copilot","perplexity","openrouter","deepseek","notebooklm","aistudio","qwen","arena"],hl=[{id:"chatgpt",url:"https://chatgpt.com",matches:["chatgpt.com","chat.openai.com"],icon:"assets/logos/ChatGPT.svg",siteName:"ChatGPT"},{id:"claude",url:"https://claude.ai",matches:["claude.ai"],icon:"assets/logos/Claude.svg",siteName:"Claude"},{id:"gemini",url:"https://gemini.google.com",matches:["gemini.google.com"],icon:"assets/logos/Gemini.svg",siteName:"Gemini"},{id:"copilot",url:"https://copilot.microsoft.com",matches:["copilot.microsoft.com"],icon:"assets/logos/Copilot.svg",siteName:"Copilot"},{id:"perplexity",url:"https://www.perplexity.ai",matches:["perplexity.ai","www.perplexity.ai"],icon:"assets/logos/Perplexity.svg",siteName:"Perplexity"},{id:"openrouter",url:"https://openrouter.ai",matches:["openrouter.ai"],icon:"assets/logos/openrouter-active.svg",siteName:"OpenRouter"},{id:"deepseek",url:"https://chat.deepseek.com",matches:["chat.deepseek.com","deepseek.com","www.deepseek.com"],icon:"assets/logos/Deepseek.svg",siteName:"DeepSeek"},{id:"notebooklm",url:"https://notebooklm.google.com",matches:["notebooklm.google.com"],icon:"assets/logos/NotebookLM.svg",siteName:"NotebookLM"},{id:"aistudio",url:"https://aistudio.google.com",matches:["aistudio.google.com"],icon:"assets/logos/AIStudio.svg",siteName:"AI Studio"},{id:"qwen",url:"https://chat.qwen.ai",matches:["qwen.ai","chat.qwen.ai"],icon:"assets/logos/Qwen.svg",siteName:"Qwen"},{id:"arena",url:"https://arena.ai",matches:["arena.ai","www.arena.ai"],icon:"assets/logos/Arena.svg",siteName:"Arena"}],ve=nr.reduce((t,e)=>(t[e]=!0,t),{})});function Gn(t,e){let n=t.get(e);if(n!==void 0)return t.delete(e),t.set(e,n),n}function dt(t,e,n){for(t.has(e)&&t.delete(e),t.set(e,n);t.size>_l;){let o=t.keys().next().value;if(o===void 0)return;t.delete(o)}}function Rt(t){return t.startsWith("/")&&t.endsWith("/")&&t.length>2}function Mn(t){if(t.startsWith("[")){let n=t.indexOf("]");return n>0?t.slice(0,n+1):t}let e=t.lastIndexOf(":");return e>0?t.slice(0,e):t}function Cl(t){let e=t.replace(ue,""),n=e.includes("@")?e.slice(e.lastIndexOf("@")+1):e,o=n.indexOf("/"),r=o<0?n:n.slice(0,o);return Mn(r).toLowerCase()}function ur(t){return/^\d{1,3}(?:\.\d{1,3}){3}$/.test(t)||/^\[[0-9a-f:]+\]$/i.test(t)}function Ie(t,e){return!t||t==="*"||t.includes("*")?!1:t==="localhost"||t.endsWith(".localhost")||ur(t)?!0:!(!t.includes(".")||e.includes("..")||e.startsWith("."))}function Al(t){let e=Mn(t).toLowerCase();if(!e||e==="*")return!1;if(!e.includes("*"))return Ie(e,e);let n=e.split(".");if(n.some(r=>r==="*")){let r=n.filter(a=>a!=="*").join(".");return Ie(r,r)}let o=e.slice(e.indexOf("*")+1).replace(/^\./,"");return Ie(o,o)}function fr(t){let e=Gn(ke,t);if(e!==void 0)return e;let n=t;if(n.startsWith("/")&&(n=n.slice(1)),n.endsWith("/")&&(n=n.slice(0,-1)),n.length>Tl)return dt(ke,t,null),null;try{let o=new RegExp(n,"i");return dt(ke,t,o),o}catch{return dt(ke,t,null),null}}function ar(t){return t.replace(/[\\^$.*+?()[\]{}|/]/g,"\\$&")}function Ol(t){return t.replace(/\\(.)/g,"$1")}function Bn(t){return t.replace(/%[a-f\d]{2}/gi,e=>{let n=String.fromCharCode(Number.parseInt(e.slice(1),16));return/^[a-z\d._~-]$/i.test(n)?n:e.toUpperCase()})}function Ll(t){let e=Gn(In,t);if(e!==void 0)return e;try{let n=new URL(t),o=Bn(n.pathname).split("/").slice(1);o[o.length-1]||o.pop();let r={hostParts:n.hostname.toLowerCase().split(".").reverse(),pathParts:o,port:n.port,protocol:n.protocol};return dt(In,t,r),r}catch{return dt(In,t,null),null}}function Nl(t){let e=Gn(kn,t);if(e!==void 0)return e;if(!t)return dt(kn,t,null),null;let n=t,o=n.startsWith("^"),r=n.endsWith("$");o&&(n=n.slice(1)),r&&(n=n.slice(0,-1));let a="",i=n.indexOf("://");i>0&&(a=`${n.slice(0,i)}:`,n=n.slice(i+3));let l=n.indexOf("/"),c=l<0?n:n.slice(0,l),u=c,d=!1,f=-1;c.startsWith("[")&&(f=c.indexOf("]"),d=f>0);let F="*",w=c.lastIndexOf(":");if(w>=0&&(!d||f<w)&&(u=c.slice(0,w),F=c.slice(w+1)),d)try{u=new URL(`http://${u}`).hostname}catch{}let b=(l<0?"":n.slice(l+1)).split("/");b[b.length-1]||b.pop();let _={exactEnd:r,exactStart:o,hostParts:u.toLowerCase().split(".").reverse(),pathParts:b,port:F,protocol:a};return dt(kn,t,_),_}function Rl(t,e){if(!t||!e||e.hostParts.length>t.hostParts.length||e.exactStart&&e.hostParts.length!==t.hostParts.length||e.exactEnd&&e.pathParts.length!==t.pathParts.length||e.port!=="*"&&e.port!==t.port||e.protocol&&e.protocol!==t.protocol)return!1;for(let a=0;a<e.hostParts.length;a+=1){let i=e.hostParts[a],l=t.hostParts[a];if(i!=="*"&&i!==l)return!1}let n=e.hostParts[e.hostParts.length-1],o=t.hostParts[t.hostParts.length-1];if(e.hostParts.length>=2&&n!=="*"&&(e.hostParts.length<t.hostParts.length-1||e.hostParts.length===t.hostParts.length-1&&o!=="www"))return!1;if(e.pathParts.length===0)return!0;if(e.pathParts.length>t.pathParts.length&&e.pathParts.slice(t.pathParts.length).some(i=>i!=="*"))return!1;let r=Math.min(e.pathParts.length,t.pathParts.length);for(let a=0;a<r;a+=1){let i=e.pathParts[a],l=t.pathParts[a];if(i!=="*"&&i!==l)return!1}return!0}function vl(t){let e=t.trim();if(!Rt(e))return null;let n=e.slice(1,-1),o=String.raw`^https?:\/\/`,r=String.raw`\/?(?:[?#].*)?$`;if(!n.startsWith(o)||!n.endsWith(r))return null;let a=n.slice(o.length,-r.length);return a.startsWith(String.raw`(?:www\.)?`)&&(a=a.slice(String.raw`(?:www\.)?`.length)),a?Ol(a):null}function Pl(t){return vl(t)!==null}function xl(t){try{let e=new URL(ue.test(t)?t:`https://${t}`);if(!e.host)return null;let n=e.hostname.toLowerCase(),o=n.startsWith("www.")?n.slice(4):n;if(!o)return null;let a=`${o.includes(".")&&!ur(o)?String.raw`(?:www\.)?`:""}${ar(o)}${e.port?`:${ar(e.port)}`:""}`;return D(String.raw`/^https?:\/\/${a}\/?(?:[?#].*)?$/`)}catch{return null}}function kl(t){let e=t.toLowerCase();if(!e.includes("*"))return e;let n=Mn(e),o=e.slice(n.length);if(n.split(".").some(a=>a==="*"))return e;if(!n.startsWith("*"))return null;let r=n.slice(1).replace(/^\./,"");return r?`*.${r}${o}`:null}function Il(t){try{let e=new URL(t);return e.host?e.host.toLowerCase():e.protocol==="file:"?e.pathname:e.protocol}catch{return t.trim().toLowerCase()}}function Ge(t,e="domain"){try{let n=new URL(ue.test(t)?t:`https://${t.trim()}`);if(n.protocol!=="http:"&&n.protocol!=="https:")return null;let o=n.host.toLowerCase();if(!o)return null;if(e!=="path")return o;let r=n.pathname.replace(/\/{2,}/g,"/").replace(/\/+$/,"");return r&&r!=="/"?`${o}${r}`:o}catch{return null}}function Ue(t,e="domain"){if(e==="path")return Ul(t);let n=Il(t);return D(n)}function Ul(t){try{let e=new URL(t);if(!e.host)return Ue(t);let n=e.pathname&&e.pathname!=="/"?e.pathname.replace(/\/+$/,""):"";return n?D(`${e.host}${n}`):xl(t)}catch{return Ue(t)}}function Gl(t){let e=t.trim();if(!e)return[];let n=e.replace(ue,""),o=n.indexOf("/"),r=o<0?n:n.slice(0,o);if(!r||r==="*")return[];let a=r.replace(/^\*\./,"*.");if(!a.includes("*"))return[a];if(a.split(".").some(u=>u==="*"))return[a];let l=a.indexOf("*");if(l<0)return[a];let c=a.slice(l+1).replace(/^\./,"");return c?[c,`*.${c}`]:[]}function Ml(t){return L([Ue(t.url),...t.pattern?Gl(t.pattern):[]])}function D(t){if(typeof t!="string")return null;let e=t.trim();if(!e)return null;if(e==="*")return e;if(Rt(e))return fr(e)?e:null;if(/\s/.test(e))return null;let n=e.replace(/%2a/gi,"*");if(n.includes("*"))return Bl(n);try{let o=new URL(n.includes("://")?n:`https://${n}`),r=Cl(n);if(o.host&&!Ie(o.hostname,r))return null;let a=o.host||(o.protocol==="file:"?o.pathname:o.protocol),i=o.pathname&&o.pathname!=="/"?o.pathname.replace(/\/+$/,""):"";return`${a.toLowerCase()}${Bn(i)}`||null}catch{return null}}function Bl(t){let e=t.replace(ue,""),n=e.indexOf("/"),o=n<0?e:e.slice(0,n);if(!o||o==="*"||!Al(o))return null;let r=kl(o);if(!r)return null;let a=n<0?"":e.slice(n),i=new URL(`https://fontara.invalid${a||"/"}`).pathname,l=i!=="/"?i.replace(/\/+$/,""):"";return`${r}${Bn(l)}`||null}function L(t){if(!Array.isArray(t))return[];let e=[],n=new Set;for(let o of t){let r=D(o);!r||n.has(r)||(n.add(r),e.push(r))}return Dl(e)}function ir(t){return!Rt(t)&&t!=="*"&&!t.includes("/")}function Dl(t){let e=new Set(t.filter(ir));return t.filter(n=>{if(!ir(n)||!n.startsWith("www."))return!0;let o=n.slice(4);return!e.has(o)&&!e.has(`*.${o}`)})}function vt(t){return L(t)}function Me(t){return t===!0}function mr(t,e){let n=D(e);return n?Rt(n)?fr(n)?.test(t)===!0:Rl(Ll(t),Nl(n)):!1}function sr(t,e){return e.some(n=>mr(t,n))}function Dn(t){let e=t.trim().replace(/%2a/gi,"*");if(e.includes("*")&&!Rt(e))return"custom";let n=D(t);return!n||n==="*"?"custom":Pl(n)?"path":Rt(n)?"regex":n.includes("*")?"custom":n.includes("/")?"path":"domain"}function lr(t){let e=D(t);return e?{custom:1,domain:2,path:3,regex:4}[Dn(e)]*1e3+t.length:0}function gr(t,e){return L(e).filter(n=>mr(t,n)).sort((n,o)=>lr(o)-lr(n))[0]??null}function Be(t,e){let n=vt(e.enabledFor),o=L(e.disabledFor),r=sr(t,n);return e.enabledByDefault?r?!0:!sr(t,o):r}function zl(t){let e=[t];return t.startsWith("www.")&&e.push(t.slice(4)),e}function Hl(t,e){let n=L(t),o=D(e);return!o||n.includes(o)?n:L([...n,o])}function cr(t,e){return e.reduce(Hl,L(t))}function Yl(t,e){let n=D(e);if(!n)return L(t);let o=new Set(zl(n));return L(t).filter(r=>!o.has(r))}function Un(t,e){return e.reduce(Yl,L(t))}function Vl(t,e,n){let o=L(t),r=vt(e.enabledFor),a=L(e.disabledFor);return o.length===0?{disabledFor:a,enabledFor:r}:e.enabledByDefault?{disabledFor:n?Un(a,o):cr(a,o),enabledFor:n?r:Un(r,o)}:{disabledFor:a,enabledFor:n?cr(r,o):Un(r,o)}}function dr(t,e,n){let o=Ue(t);return Vl(o?[o]:[],e,n)}function Pt(t){return L(t.filter(e=>e.isActive!==!1).flatMap(e=>Ml(e)))}var ke,kn,In,_l,Tl,ue,xt=p(()=>{"use strict";ke=new Map,kn=new Map,In=new Map,_l=500,Tl=512,ue=/^[a-z*][a-z0-9+.-]*:\/\//i});function kt(t){if(typeof t!="number"||!Number.isFinite(t))return 0;let e=Math.min(1,Math.max(0,t));return Number((Math.round(e/.1)*.1).toFixed(1))}var fe=p(()=>{"use strict"});function Wl(t){if(typeof t!="string")return;let e=t.trim();return e||void 0}function jl(t){if(!(t==null||t===""))return kt(t)}function pt(t){return t.font!==void 0||t.textStroke!==void 0}function Kl(t){return t.enabled!==!1}function $l(t){if(typeof t!="object"||t===null)return null;let e=t,n=D(e.pattern);if(!n)return null;let o={pattern:n};e.enabled===!1&&(o.enabled=!1);let r=Wl(e.font),a=jl(e.textStroke);return r!==void 0&&(o.font=r),a!==void 0&&(o.textStroke=a),pt(o)?o:null}function nt(t){if(!Array.isArray(t))return zn;let e=[],n=new Map;for(let o of t){let r=$l(o);if(!r)continue;let a=n.get(r.pattern);if(a===void 0){n.set(r.pattern,e.length),e.push(r);continue}let i={...e[a],...r};r.enabled!==!1&&delete i.enabled,e[a]=i}return e}function pr(t,e,n={}){let o=nt(e),r=n.includeDisabled?o:o.filter(Kl),a=gr(t,r.map(i=>i.pattern));return r.find(i=>i.pattern===a)??null}function Fr(t,e){return nt(t).map(n=>{if(!n.font||!e(n.font))return n;let{font:o,...r}=n;return r}).filter(pt)}var zn,It=p(()=>{"use strict";xt();fe();zn=[]});function yr(t,e=Hn){if(!Array.isArray(t))return[...e];let n=new Set,o=[];for(let r of t){if(typeof r!="string")continue;let a=r.trim();!Xl.has(a)||n.has(a)||(n.add(a),o.push(a))}return o}var De,Hn,Xl,Yn=p(()=>{"use strict";De=[{url:"https://chatgpt.com",regex:"^https://chatgpt\\.com/.*$",icon:"assets/logos/ChatGPT.svg",pattern:"https://chatgpt.com/*",siteName:"ChatGPT",customCss:!0,version:"5.0.0"},{url:"https://claude.ai",regex:"^https://claude\\.ai/.*$",icon:"assets/logos/Claude.svg",pattern:"https://claude.ai/*",siteName:"Claude",customCss:!0,version:"5.0.0"},{url:"https://gemini.google.com",regex:"^https://gemini\\.google\\.com/.*$",icon:"assets/logos/Gemini.svg",pattern:"https://gemini.google.com/*",siteName:"Gemini",customCss:!0,version:"5.0.0"},{url:"https://copilot.microsoft.com",regex:"^https://copilot\\.microsoft\\.com/.*$",icon:"assets/logos/Copilot.svg",pattern:"https://copilot.microsoft.com/*",siteName:"Copilot",customCss:!0,version:"5.0.0"},{url:"https://www.perplexity.ai",regex:"^https://www\\.perplexity\\.ai/.*$",icon:"assets/logos/Perplexity.svg",pattern:"https://www.perplexity.ai/*",siteName:"Perplexity",customCss:!0,version:"5.0.0"},{url:"https://poe.com",regex:"^https://poe\\.com/.*$",icon:"assets/logos/poe.svg",pattern:"https://poe.com/*",siteName:"Poe",customCss:!0,version:"5.0.0"},{url:"https://openrouter.ai",regex:"^https://openrouter\\.ai/.*$",icon:"assets/logos/openrouter-active.svg",pattern:"https://openrouter.ai/*",siteName:"OpenRouter",customCss:!0,version:"5.0.0"},{url:"https://chat.deepseek.com",regex:"^https://chat\\.deepseek\\.com/.*$",icon:"assets/logos/Deepseek.svg",pattern:"https://chat.deepseek.com/*",siteName:"DeepSeek",customCss:!0,version:"5.0.0"},{url:"https://chat.qwen.ai",regex:"^https://chat\\.qwen\\.ai/.*$",icon:"assets/logos/Qwen.svg",pattern:"https://chat.qwen.ai/*",siteName:"Qwen",customCss:!0,version:"5.0.0"},{url:"https://notebooklm.google.com",regex:"^https://notebooklm\\.google\\.com/.*$",icon:"assets/logos/NotebookLM.svg",pattern:"https://notebooklm.google.com/*",siteName:"NotebookLM",customCss:!0,version:"5.0.0"},{url:"https://aistudio.google.com",regex:"^https://aistudio\\.google\\.com/.*$",icon:"assets/logos/AIStudio.svg",pattern:"https://aistudio.google.com/*",siteName:"AI Studio",customCss:!0,version:"5.0.0"},{url:"https://arena.ai",regex:"^https://arena\\.ai/.*$",icon:"assets/logos/Arena.svg",pattern:"https://arena.ai/*",siteName:"Arena",customCss:!0,version:"5.0.0"},{url:"https://www.google.com",regex:"^https://www\\.google\\.com/.*$",icon:"assets/logos/google-active.png",pattern:"https://www.google.com/*",siteName:"Google",customCss:!0,version:"5.0.0"},{url:"https://www.youtube.com",regex:"^https://www\\.youtube\\.com/.*$",icon:"assets/logos/youtube-active.png",pattern:"https://www.youtube.com/*",siteName:"YouTube",customCss:!0,version:"5.0.0"},{url:"https://mail.google.com",regex:"^https://mail\\.google\\.com/.*$",icon:"assets/logos/gmail-active.png",pattern:"https://mail.google.com/*",siteName:"Gmail",customCss:!0,version:"5.0.0"},{url:"https://x.com",regex:"^https://x\\.com/.*$",icon:"assets/logos/x-active.svg",pattern:"https://x.com/*",siteName:"X",customCss:!0,version:"5.0.0"},{url:"https://www.linkedin.com",regex:"^https://[^/]*linkedin\\.com/.*$",icon:"assets/logos/linkedin-active.png",pattern:"https://*linkedin.com/*",siteName:"LinkedIn",customCss:!0,version:"5.0.0"},{url:"https://www.instagram.com",regex:"^https://www\\.instagram\\.com/.*$",icon:"assets/logos/instagram-active.png",pattern:"https://www.instagram.com/*",siteName:"Instagram",customCss:!0,version:"5.0.0"},{url:"https://www.facebook.com",regex:"^https://www\\.facebook\\.com/.*$",icon:"assets/logos/facebook-active.png",pattern:"https://www.facebook.com/*",siteName:"Facebook",customCss:!0,version:"5.0.0"},{url:"https://github.com",regex:"^https://github\\.com/.*$",icon:"assets/logos/github-active.png",pattern:"https://github.com/*",siteName:"GitHub",customCss:!0,version:"5.0.0"},{url:"https://web.whatsapp.com",regex:"^https://web\\.whatsapp\\.com/.*$",icon:"assets/logos/whatsapp-active.png",pattern:"https://web.whatsapp.com/*",siteName:"WhatsApp",customCss:!0,version:"5.0.0"},{url:"https://web.telegram.org",regex:"^https://web\\.telegram\\.org/.*$",icon:"assets/logos/telegram-active.png",pattern:"https://web.telegram.org/*",siteName:"Telegram",customCss:!0,version:"5.0.0"},{url:"https://app.slack.com",regex:"^https://app\\.slack\\.com/.*$",icon:"assets/logos/slack-active.png",pattern:"https://app.slack.com/*",siteName:"Slack",customCss:!0,version:"5.0.0"},{url:"https://messages.google.com",regex:"^https://messages\\.google\\.com/.*$",icon:"assets/logos/messagesandroid-active.png",pattern:"https://messages.google.com/*",siteName:"Messages"},{url:"https://ticktick.com",regex:"^https://ticktick\\.com/.*$",icon:"assets/logos/ticktick-active.svg",pattern:"https://ticktick.com/*",siteName:"TickTick",customCss:!0,version:"5.0.0"},{url:"https://trello.com",regex:"^https://trello\\.com/.*$",icon:"assets/logos/trello-active.png",pattern:"https://trello.com/*",siteName:"Trello",customCss:!0,version:"5.0.0"},{url:"https://www.wikipedia.org",regex:"^https://[^/]*\\.wikipedia\\.org/.*$",icon:"assets/logos/wikipedia-active.png",pattern:"https://*.wikipedia.org/*",siteName:"Wikipedia",customCss:!0,version:"5.0.0"},{url:"https://duckduckgo.com",regex:"^https://duckduckgo\\.com/.*$",icon:"assets/logos/duckduckgo-active.png",pattern:"https://duckduckgo.com/*",siteName:"DuckDuckGo",customCss:!0,version:"5.0.0"},{url:"https://medium.com",regex:"^https://medium\\.com/.*$",icon:"assets/logos/medium-active.png",pattern:"https://medium.com/*",siteName:"Medium"},{url:"https://www.goodreads.com",regex:"^https://www\\.goodreads\\.com/.*$",icon:"assets/logos/goodreads-active.png",pattern:"https://www.goodreads.com/*",siteName:"Goodreads"},{url:"https://www.dropbox.com",regex:"^https://www\\.[^/]*dropbox\\.com/.*$",icon:"assets/logos/dropbox-active.png",pattern:"https://*dropbox.com/*",siteName:"Dropbox"}],Hn=["https://chatgpt.com","https://claude.ai","https://gemini.google.com","https://copilot.microsoft.com","https://www.perplexity.ai","https://poe.com","https://openrouter.ai","https://chat.deepseek.com","https://chat.qwen.ai","https://notebooklm.google.com","https://aistudio.google.com","https://arena.ai","https://www.google.com","https://www.youtube.com","https://mail.google.com","https://x.com","https://www.linkedin.com","https://www.instagram.com","https://www.facebook.com","https://github.com"],Xl=new Set(De.map(t=>t.url))});var s,Sr=p(()=>{"use strict";s={EXTENSION_ENABLED:"isExtensionEnabled",SELECTED_FONT:"selectedFont",WEBSITE_LIST:"websiteList",PINNED_WEBSITE_URLS:"pinnedWebsiteUrls",ENABLED_BY_DEFAULT:"enabledByDefault",ENABLED_FOR:"enabledFor",DISABLED_FOR:"disabledFor",SITE_PROFILES:"siteProfiles",CUSTOM_FONT_LIST:"customFontList",GOOGLE_FONTS_ENABLED:"googleFontsEnabled",SYSTEM_FONTS_ENABLED:"systemFontsEnabled",TEXT_STROKE:"textStroke",TEXT_STROKE_ENABLED:"textStrokeEnabled",UI_LANGUAGE:"uiLanguage",RTL_ENABLED:"rtlEnabled",RTL_SITE_SETTINGS:"rtlSiteSettings",CONTEXT_MENUS_ENABLED:"contextMenusEnabled",SYNC_SETTINGS:"syncSettings"}});var m,ze,He,C=p(()=>{"use strict";xn();xe();xt();It();Yn();fe();Sr();m={EXTENSION_ENABLED:!0,SELECTED_FONT:"Vazirmatn-Fontara",WEBSITE_LIST:De.map(t=>({...t,isActive:!0})),PINNED_WEBSITE_URLS:[...Hn],ENABLED_BY_DEFAULT:!1,ENABLED_FOR:Pt(De.map(t=>({...t,isActive:!0}))),DISABLED_FOR:[],SITE_PROFILES:zn,CUSTOM_FONT_LIST:[],GOOGLE_FONTS_ENABLED:!1,SYSTEM_FONTS_ENABLED:!1,TEXT_STROKE:0,UI_LANGUAGE:Ne,RTL_ENABLED:!0,RTL_SITE_SETTINGS:ve,CONTEXT_MENUS_ENABLED:!1,SYNC_SETTINGS:!0},ze={WELCOME_PAGE:"https://mimalef70.github.io/fontara",CHANGELOG:"https://mimalef70.github.io/fontara#changelogs",UNINSTALL_FORM:"https://app.mu.chat/forms/cm7x2dyjo0ajl01lfci211xev"},He={default:{16:"/assets/icon-16.png",32:"/assets/icon-32.png",48:"/assets/icon-48.png"},active:{16:"/assets/icon-active-16.png",32:"/assets/icon-active-32.png",48:"/assets/icon-active-48.png"}}});function Vn(t){return typeof t=="string"&&tc.test(t)}function ic(t){return typeof t!="string"?null:nc[t.toLowerCase()]??null}function sc(t){if(typeof t!="string"||t.length===0||t.length>7340032)return null;let e=/^data:([^;,]*);base64,([A-Za-z0-9+/=]+)$/i.exec(t);if(!e)return null;let n=e[1].toLowerCase(),o=e[2];return!ec.test(o)||o.length%4!==0?null:{base64Data:o,mimeType:n}}function Cr(t,e){let n=sc(t);if(!n)return null;let o=oc[n.mimeType];return o||(rc.has(n.mimeType)?ic(e):null)}function lc(t,e){return e.every((n,o)=>t[o]===n)}function Ye(t,e){return e.split("").every((n,o)=>t[o]===n.charCodeAt(0))}function Tr(t){return lc(t,ac)||Ye(t,"true")}function Ar(t,e){let n=typeof t=="string"?t.toLowerCase():"";if(e.length<4)return!1;switch(n){case"woff2":return Ye(e,"wOF2");case"woff":return Ye(e,"wOFF");case"otf":return Ye(e,"OTTO")||Tr(e);case"ttf":return Tr(e);default:return!1}}var tc,ec,nc,oc,rc,ac,Ve=p(()=>{"use strict";tc=/^[A-Za-z0-9_-]{1,64}-Fontara$/,ec=/^[A-Za-z0-9+/]+={0,2}$/,nc={otf:"opentype",ttf:"truetype",woff:"woff",woff2:"woff2"},oc={"application/font-woff":"woff","application/font-woff2":"woff2","application/x-font-sfnt":"opentype","application/x-font-truetype":"truetype","application/vnd.ms-opentype":"opentype","application/x-font-opentype":"opentype","application/x-font-otf":"opentype","application/x-font-ttf":"truetype","application/x-font-woff":"woff","application/x-font-woff2":"woff2","font/otf":"opentype","font/sfnt":"opentype","font/ttf":"truetype","font/woff":"woff","font/woff2":"woff2"},rc=new Set(["","application/octet-stream","binary/octet-stream"]),ac=[0,1,0,0]});function Ft(t){return typeof t=="string"&&cc.test(t)}function mc(t){return typeof t=="string"&&uc.test(t)}function Lr(t){if(typeof t!="string")return null;let e=t.toLowerCase();return e==="ttf"||e==="otf"||e==="woff"||e==="woff2"?e:e==="truetype"?"ttf":e==="opentype"?"otf":null}function yt(t,e){return Ar(t,e)}function We(t){let e=t.indexOf(",");if(e<0||!/;base64$/i.test(t.slice(0,e)))return null;try{let n=atob(t.slice(e+1)),o=new Uint8Array(n.length);for(let r=0;r<n.length;r+=1)o[r]=n.charCodeAt(r);return o}catch{return null}}function Ut(t){let n="";for(let o=0;o<t.length;o+=32768)n+=String.fromCharCode(...t.subarray(o,o+32768));return btoa(n)}function me(t){try{let e=atob(t),n=new Uint8Array(e.length);for(let o=0;o<e.length;o+=1)n[o]=e.charCodeAt(o);return n}catch{return null}}async function z(t){let e=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n),o=>o.toString(16).padStart(2,"0")).join("")}function Or(t,e){if(!t||typeof t!="object")return!1;let n=t;return typeof n.min=="number"&&Number.isFinite(n.min)&&typeof n.max=="number"&&Number.isFinite(n.max)&&n.min>=e.min&&n.max<=e.max&&n.min<=n.max}function Nr(t){if(!t||typeof t!="object")return!1;let e=t,n=Lr(e.format);return!!(mc(e.id)&&Ft(e.fileHash)&&typeof e.fileName=="string"&&e.fileName.trim()&&n&&Number.isInteger(e.byteLength)&&Number(e.byteLength)>0&&Or(e.weight,{min:1,max:1e3})&&(e.style==="normal"||e.style==="italic"||e.style==="oblique")&&Or(e.stretch,{min:25,max:200})&&Array.isArray(e.axes)&&e.axes.every(o=>o&&typeof o=="object"&&typeof o.tag=="string"&&fc.test(o.tag)&&typeof o.min=="number"&&Number.isFinite(o.min)&&typeof o.default=="number"&&Number.isFinite(o.default)&&typeof o.max=="number"&&Number.isFinite(o.max)&&o.min<=o.default&&o.default<=o.max)&&(e.validation==="verified"||e.validation==="legacy-unverified"||e.validation==="failed"))}function Rr(t){let e=Cr(t.data,t.type);return Lr(e??t.type)}function vr(t){let e=typeof crypto.randomUUID=="function"?crypto.randomUUID().replace(/-/g,""):Math.random().toString(36).slice(2);return`${t.slice(0,16)}-${e}`.slice(0,128)}var cc,uc,fc,Gt=p(()=>{"use strict";Ve();cc=/^[a-f0-9]{64}$/i,uc=/^[A-Za-z0-9_-]{1,128}$/,fc=/^[\x20-\x7e]{4}$/});var Ze,ao=p(()=>{"use strict";Ze=[{value:"Vazirmatn-Fontara",name:"وزیر",author:"زنده یاد صابر راستی کردار",localizedName:{en:"Vazir",ar:"وزير"},localizedAuthor:{en:"Saber Rastikerdar",ar:"الراحل صابر راستي كردار"}},{value:"Samim-Fontara",name:"صمیم",author:"زنده یاد صابر راستی کردار",localizedName:{en:"Samim",ar:"صميم"},localizedAuthor:{en:"Saber Rastikerdar",ar:"الراحل صابر راستي كردار"}},{value:"Shabnam-Fontara",name:"شبنم",author:"زنده یاد صابر راستی کردار",localizedName:{en:"Shabnam",ar:"شبنم"},localizedAuthor:{en:"Saber Rastikerdar",ar:"الراحل صابر راستي كردار"}},{value:"Arad-Fontara",name:"آراد",author:"محمد درویشی",localizedName:{en:"Arad",ar:"آراد"},localizedAuthor:{en:"Mohammad Darvishi",ar:"محمد درويشي"}},{value:"Sahel-Fontara",name:"ساحل",author:"زنده یاد صابر راستی کردار",localizedName:{en:"Sahel",ar:"ساحل"},localizedAuthor:{en:"Saber Rastikerdar",ar:"الراحل صابر راستي كردار"}},{value:"Parastoo-Fontara",name:"پرستو",author:"زنده یاد صابر راستی کردار",localizedName:{en:"Parastoo",ar:"پرستو"},localizedAuthor:{en:"Saber Rastikerdar",ar:"الراحل صابر راستي كردار"}},{value:"Gandom-Fontara",name:"گندم",author:"زنده یاد صابر راستی کردار",localizedName:{en:"Gandom",ar:"گندم"},localizedAuthor:{en:"Saber Rastikerdar",ar:"الراحل صابر راستي كردار"}},{value:"Tanha-Fontara",name:"تنها",author:"زنده یاد صابر راستی کردار",localizedName:{en:"Tanha",ar:"تنها"},localizedAuthor:{en:"Saber Rastikerdar",ar:"الراحل صابر راستي كردار"}},{value:"Nahid-Fontara",name:"ناهید",author:"زنده یاد صابر راستی کردار",localizedName:{en:"Nahid",ar:"ناهيد"},localizedAuthor:{en:"Saber Rastikerdar",ar:"الراحل صابر راستي كردار"}},{value:"Mikhak-Fontara",name:"میخک",author:"امین عابدی",localizedName:{en:"Mikhak",ar:"ميخك"},localizedAuthor:{en:"Amin Abedi",ar:"أمين عابدي"}},{value:"Estedad-Fontara",name:"استعداد",author:"امین عابدی",localizedName:{en:"Estedad",ar:"استعداد"},localizedAuthor:{en:"Amin Abedi",ar:"أمين عابدي"}},{value:"Behdad-Fontara",name:"بهداد",author:"صالح سوزنچی",localizedName:{en:"Behdad",ar:"بهداد"},localizedAuthor:{en:"Saleh Souzanchi",ar:"صالح سوزنجي"}},{value:"Nika-Fontara",name:"نیکا",author:"صالح سوزنچی",localizedName:{en:"Nika",ar:"نيكا"},localizedAuthor:{en:"Saleh Souzanchi",ar:"صالح سوزنجي"}},{value:"Ganjname-Fontara",name:"گنج نامه",author:"صالح سوزنچی",localizedName:{en:"Ganjnameh",ar:"گنج نامه"},localizedAuthor:{en:"Saleh Souzanchi",ar:"صالح سوزنجي"}},{value:"Shahab-Fontara",name:"شهاب",author:"صالح سوزنچی",localizedName:{en:"Shahab",ar:"شهاب"},localizedAuthor:{en:"Saleh Souzanchi",ar:"صالح سوزنجي"}}]});function jt(){let t=chrome.runtime?.lastError;return t?new Error(t.message):null}function vc(){return typeof chrome>"u"?null:chrome.storage?.onChanged??null}function Pc(t){return t instanceof Error||typeof t=="object"&&t!==null&&"message"in t&&typeof t.message=="string"?t.message:String(t)}function Wr(t){return/extension context invalidated|context invalidated|cannot read (?:properties|property) of undefined \(reading ['"]onChanged['"]\)/i.test(Pc(t))}function j(t){return new Promise((e,n)=>{chrome.storage.local.set(t,()=>{let o=jt();if(o){n(o);return}e()})})}function I(t){return new Promise((e,n)=>{let o=new Set(Object.entries(t).filter(([,a])=>a===void 0).map(([a])=>a)),r=Object.fromEntries(Object.entries(t).map(([a,i])=>[a,i===void 0?null:i]));chrome.storage.local.get(r,a=>{let i=jt();if(i){n(i);return}let l={...t,...a};for(let c of o)l[c]===null&&(l[c]=void 0);e(l)})})}function tn(){return typeof chrome>"u"?null:chrome.storage?.sync??null}function xc(){return tn()?.QUOTA_BYTES_PER_ITEM??8192}function kc(){return tn()?.MAX_ITEMS??512}function $r(t,e){return new TextEncoder().encode(JSON.stringify({[t]:e})).byteLength}function en(t,e){return`${t}_${e.toString(36)}`}function jr(t){if(typeof t!="object"||t===null)return 0;let e=t[io];return Number.isInteger(e)&&Number(e)>0?Number(e):0}function Ic(t,e,n){let o=[],r=0;for(;r<e.length;){let a=en(t,o.length),i=r,l=r+1,c=e.length;for(;l<=c;){let u=Math.floor((l+c)/2),d=e.slice(r,u);$r(a,d)<=n?(i=u,l=u+1):c=u-1}if(i===r)throw new Error("sync-storage-item-too-large");o.push(e.slice(r,i)),r=i}return o}function Uc(t){let e={...t};for(let[n,o]of Object.entries(t)){if(typeof o!="object"||o===null)continue;let r=o[io];if(typeof r!="number"||r<=0)continue;let a="";for(let i=0;i<r;i+=1){let l=en(n,i),c=e[l];if(typeof c!="string")return null;a+=c,delete e[l]}try{e[n]=JSON.parse(a)}catch{return null}}return e}function Gc(t){let e={...t},n=xc(),o=kc();for(let r of Object.keys(t)){let a=JSON.stringify(t[r]);if($r(r,t[r])<=n)continue;let i=Ic(r,a,n);for(let l=0;l<i.length;l+=1)e[en(r,l)]=i[l];e[r]={[io]:i.length}}if(Object.keys(e).length>o)throw new Error("sync-storage-too-many-items");return e}function Mc(t,e,n){let o=[];for(let r of n){let a=jr(t[r]);if(a===0)continue;let i=jr(e[r]);for(let l=i;l<a;l+=1)o.push(en(r,l))}return o}function Kr(t){return new Promise((e,n)=>{t.get(null,o=>{let r=jt();if(r){n(r);return}e(o)})})}function Bc(t,e){return new Promise((n,o)=>{t.set(e,()=>{let r=jt();if(r){o(r);return}n()})})}function Dc(t,e){return new Promise((n,o)=>{if(e.length===0){n();return}t.remove(e,()=>{let r=jt();if(r){o(r);return}n()})})}function so(t){return new Promise((e,n)=>{let o=tn();if(!o){e(null);return}o.get(null,r=>{let a=jt();if(a){n(a);return}let i=Uc(r);if(!i){e(null);return}e({...t,...i})})})}async function lo(t){let e=tn();if(!e)throw new Error("sync-storage-unavailable");let n=Gc(t),o=await Kr(e);await Bc(e,n);let r=await Kr(e),a=Mc(o,r,Object.keys(t));await Dc(e,a)}function Xr(t){let e=vc(),n=(o,r)=>{if(r==="local")for(let[a,i]of Object.entries(o)){let l=t[a];l&&Promise.resolve(l(i)).catch(c=>{`${a}`})}};try{e?.addListener(n)}catch(o){return Wr(o)||void 0,()=>{}}return()=>{try{e?.removeListener(n)}catch(o){Wr(o)||void 0}}}var io,Et=p(()=>{"use strict";io="__meta_split_count"});function Wc(t){for(let e=0;e<t.length;e+=1){let n=t.charCodeAt(e);if(n<=31||n===127)return!0}return!1}function nn(t){if(typeof t!="string")return!1;let e=t.trim();return e.length>0&&e.length<=Hc&&!Wc(e)}function wt(t){return nn(t)&&!Vc.some(e=>e.test(t.trim()))}function uo(){return!0}function fo(t){let e=t.trim();return`${co}${encodeURIComponent(e)}`}function H(t){if(typeof t!="string"||!t.startsWith(co))return null;try{let e=decodeURIComponent(t.slice(co.length));return nn(e)?e.trim():null}catch{return null}}function jc(t){if(t==="regular")return{italic:0,weight:400};if(t==="italic")return{italic:1,weight:400};let e=/^(100|200|300|400|500|600|700|800|900)(italic)?$/.exec(t);return e?{italic:e[2]?1:0,weight:Number(e[1])}:null}function Kc(t,e){let n=e.map(jc).filter(a=>a!==null).filter((a,i,l)=>l.findIndex(c=>c.italic===a.italic&&c.weight===a.weight)===i).sort((a,i)=>a.italic-i.italic||a.weight-i.weight),o=[];for(let a of[0,1]){let i=n.filter(u=>u.italic===a);if(i.length===0)continue;let l=[...i].sort((u,d)=>Math.abs(u.weight-400)-Math.abs(d.weight-400)||u.weight-d.weight)[0];o.push(l);let c=i.find(u=>u.weight===700);c&&c.weight!==l.weight&&o.push(c)}if(o.sort((a,i)=>a.italic-i.italic||a.weight-i.weight),o.length===0||o.length===1&&o[0].italic===0&&o[0].weight===400)return t;if(o.some(a=>a.italic===1)){let a=o.map(i=>`${i.italic},${i.weight}`).join(";");return`${t}:ital,wght@${a}`}let r=o.map(a=>a.weight).join(";");return`${t}:wght@${r}`}function mo(t,e=["regular"]){let n=new URL(Yc);return n.searchParams.set("family",Kc(t,e)),n.searchParams.set("display","swap"),n.toString()}var co,Hc,Yc,vg,Pg,Vc,xg,de=p(()=>{"use strict";Ve();Et();co="google-font:",Hc=120,Yc="https://fonts.googleapis.com/css2",vg=1e3*60*60*24*30,Pg=512*1024,Vc=[/^material icons(?:\b|$)/i,/^material symbols(?:\b|$)/i,/^libre barcode\b/i,/^noto (?:color )?emoji$/i,/^noto sans symbols(?: 2)?$/i,/^noto (?:music|znamenny musical notation)$/i],xg=Promise.resolve()});function $c(){let t=chrome.runtime?.lastError;return t?new Error(t.message):null}function qr(){return typeof chrome>"u"?null:chrome.fontSettings??null}function Jr(){return!0}function Xc(t){for(let e=0;e<t.length;e+=1){let n=t.charCodeAt(e);if(n<=31||n===127)return!0}return!1}function Qr(t){if(typeof t!="string")return!1;let e=t.trim();return e.length>0&&e.length<=160&&!Xc(e)}function qc(t){let e=t.trim();if(!Qr(e))return null;try{return`${go}${encodeURIComponent(e)}`}catch{return null}}function po(t){if(typeof t!="string"||!t.startsWith(go))return null;try{let e=decodeURIComponent(t.slice(go.length));return Qr(e)?e.trim():null}catch{return null}}function $t(t){return po(t)!==null}function pe(t){return t.normalize("NFKC").toLocaleLowerCase("en-US")}function Jc(t){let e=t.codePointAt(0);return e===void 0?!1:e<=31||e>=127&&e<=159||e===1564||e>=8203&&e<=8207||e===8288||e>=8234&&e<=8238||e>=8294&&e<=8297||e===65279}function Qc(t,e){let n=a=>Array.from(a,i=>Jc(i)?" ":i).join("").replace(/\s+/gu," ").trim(),o=n(typeof t=="string"?t:e),r=n(e)||"System Font";return Array.from(o||r).slice(0,160).join("").trim()}function Zc(t){if(!Array.isArray(t))return[];let e=new Map;for(let n of t){if(typeof n!="object"||n===null)continue;let{displayName:o,fontId:r}=n;if(typeof r!="string")continue;let a=r.trim(),i=Zr(a,o);if(!i)continue;let l=pe(a);e.has(l)||e.set(l,i)}return Fo([...e.values()])}function Zr(t,e=t){let n=qc(t);if(!n)return null;let o=t.trim();return{value:n,fontFamily:o,name:Qc(e,o)}}function Fo(t){return t.sort((e,n)=>{let o=e.name.localeCompare(n.name,void 0,{sensitivity:"base"});return o!==0?o:e.fontFamily.localeCompare(n.fontFamily,void 0,{sensitivity:"base"})})}function yo(){return Fo(tu.map(([t,e])=>{let n=Zr(t,e);if(!n)throw new Error(`Invalid CSS generic system font: ${t}`);return n}))}function eu(t){let e=new Map;for(let n of[...yo(),...t]){let o=pe(n.fontFamily);e.has(o)||e.set(o,n)}return Fo([...e.values()])}function So(){return Jr()&&typeof qr()?.getFontList=="function"}function ta(){return!0}function nu(){return{error:null,fonts:yo(),status:"ready"}}function ou(t){let e=qr();return!Jr()||typeof e?.getFontList!="function"?Promise.reject(new Error("system-fonts-unsupported")):new Promise((n,o)=>{let r=!1,a=(l,c)=>{r||(r=!0,clearTimeout(i),l(c))},i=setTimeout(()=>a(o,new Error("system-fonts-timeout")),Math.max(0,t));try{e.getFontList(l=>{let c=$c();if(c){a(o,c);return}a(n,eu(Zc(l)))})}catch(l){a(o,l instanceof Error?l:new Error(String(l)))}})}function ea(t={}){if(!So())return G=nu(),Kt=null,Promise.resolve(G);if(Kt)return Kt;let e=t.forceRefresh===!0||t.retry===!0;if(G&&!e)return Promise.resolve(G);let n=G?.fonts.length&&G.fonts.length>0?G.fonts:yo();G={error:null,fonts:n,status:"loading"};let o=Number.isFinite(t.timeoutMs)?t.timeoutMs??5e3:5e3;return Kt=ou(o).then(r=>(G={error:null,fonts:r,status:"ready"},G)).catch(r=>(G={error:r instanceof Error?r:new Error(String(r)),fonts:n,status:"error"},G)).finally(()=>{Kt=null}),Kt}var go,tu,G,Kt,on=p(()=>{"use strict";go="system-font:";tu=[["serif","Serif"],["sans-serif","Sans Serif"],["monospace","Monospace"],["cursive","Cursive"],["fantasy","Fantasy"],["system-ui","System UI"]];G=null,Kt=null});function fa(t,e,n){let o=t[e];return o===void 0?n:o}function yu(t){let e=t[s.WEBSITE_LIST];return Array.isArray(e)?e:m.WEBSITE_LIST}function rn(t){let e=yu(t),n=Me(fa(t,s.ENABLED_BY_DEFAULT,m.ENABLED_BY_DEFAULT));return{disabledFor:t[s.DISABLED_FOR]===void 0?m.DISABLED_FOR:L(t[s.DISABLED_FOR]),enabledByDefault:n,enabledFor:t[s.ENABLED_FOR]===void 0?Pt(e):vt(t[s.ENABLED_FOR]),extensionEnabled:t[s.EXTENSION_ENABLED]!==!1,rtlEnabled:t[s.RTL_ENABLED]!==!1,rtlSiteSettings:Pe(t[s.RTL_SITE_SETTINGS]),siteProfiles:nt(fa(t,s.SITE_PROFILES,m.SITE_PROFILES)),websiteList:e}}function an(t,e){if(!t||!e)return null;for(let n of e)try{if(new RegExp(n.regex,"i").test(t.trim()))return n}catch{}return null}function ma(t,e){if(!e.extensionEnabled)return{active:!1,matchingWebsite:null,siteProfile:null};let n=an(t,e.websiteList),o=Be(t,{disabledFor:e.disabledFor,enabledByDefault:e.enabledByDefault,enabledFor:e.enabledFor});return{active:o,matchingWebsite:n,siteProfile:o?pr(t,e.siteProfiles):null}}function Se(t,e){return ma(t,rn(e))}function Su(t,e){let n=or(t),o=n?rr(e.rtlSiteSettings,n.id):!1;return{active:e.extensionEnabled&&e.rtlEnabled&&o&&n!==null,globalEnabled:e.rtlEnabled,masterEnabled:e.extensionEnabled,matchingSite:n,siteEnabled:o,siteSettings:e.rtlSiteSettings}}function ga(t,e){let n=rn(e);return{font:ma(t,n),rtl:Su(t,n)}}var bt=p(()=>{"use strict";xe();xt();It();C()});function Gu(t){return t.trim().normalize("NFKC").toLocaleLowerCase("en-US")}async function Qt(t){let e=new TextEncoder().encode(Gu(t)),n=new Uint8Array(await crypto.subtle.digest("SHA-256",e));return Array.from(n,o=>o.toString(16).padStart(2,"0")).join("")}function Va(t){return`FontAraGoogle-${t.toLowerCase().slice(0,24)}`}var Mu,S,be=p(()=>{"use strict";Mu=new Set(["google-font-asset-request-failed","google-font-css-request-failed","google-font-network-failed","google-font-request-timeout","google-font-storage-read-failed","google-font-storage-remove-failed","google-font-storage-write-failed"]),S=class extends Error{constructor(e,n,o){super(e),this.name="GoogleFontBinaryError",this.code=e,this.details=n,this.retryable=Mu.has(e),o!==void 0&&Object.defineProperty(this,"cause",{configurable:!0,value:o})}}});function oe(t){let e=Wa.then(t,t);return Wa=e.then(()=>{},()=>{}),e}function X(t){if(!t||typeof t!="object"||Array.isArray(t))return!1;let e=Object.getPrototypeOf(t);return e===Object.prototype||e===null}function ko(){let t=chrome.runtime?.lastError;return t?new Error(t.message):null}function re(t){return new Promise((e,n)=>{chrome.storage.local.get(t,o=>{let r=ko();r?n(new S("google-font-storage-read-failed",void 0,r)):e(o)})})}function yn(t){return new Promise((e,n)=>{chrome.storage.local.set(t,()=>{let o=ko();o?n(new S("google-font-storage-write-failed",void 0,o)):e()})})}function Te(t){return t.length===0?Promise.resolve():new Promise((e,n)=>{chrome.storage.local.remove(t,()=>{let o=ko();o?n(new S("google-font-storage-remove-failed",void 0,o)):e()})})}async function Io(t,e,n){let o=Array.from(new Set(n));await yn({[ee]:t,[Zt]:o,[te]:e}),await Te(o),await Te([Zt])}function Sn(t=0){return{families:{},schemaVersion:1,totalBytes:0,updatedAt:t}}function hn(t=0){return{assets:{},families:{},schemaVersion:1,updatedAt:t}}function q(t,e){return`${xo}${t}:${e}`}function En(t){return`${Po}${t}`}function _e(t){return typeof t=="number"&&Number.isFinite(t)&&t>=0}function zu(t){for(let e=0;e<t.length;e+=1){let n=t.charCodeAt(e);if(n<=31||n===127)return!0}return!1}function ja(t,e,n){if(typeof t!="string")return!1;try{let o=new URL(t);return o.protocol==="https:"&&o.hostname===e&&o.username===""&&o.password===""&&o.port===""&&o.hash===""&&(n===void 0?o.pathname.toLowerCase().endsWith(".woff2"):o.pathname===n)}catch{return!1}}function Hu(t){if(typeof t!="string"||!Xa.test(t))return!1;let e=/^([1-9]\d{0,2}|1000)(?: ([1-9]\d{0,2}|1000))?$/.exec(t);return!!(e&&Number(e[1])<=Number(e[2]??e[1]))}function Yu(t){if(typeof t!="string"||!Xa.test(t))return!1;if(/^(?:normal|condensed|expanded|extra-condensed|extra-expanded|semi-condensed|semi-expanded|ultra-condensed|ultra-expanded)$/.test(t))return!0;let e=/^(\d+(?:\.\d+)?)%(?: (\d+(?:\.\d+)?)%)?$/.exec(t);if(!e)return!1;let n=Number(e[1]),o=Number(e[2]??e[1]);return n>0&&o<=1e3&&n<=o}function Vu(t){if(t===null)return!0;if(typeof t!="string"||t.length>16384)return!1;let e=t.split(",").map(n=>n.trim());return e.length===0||e.length>256||e.some(n=>!n)?!1:e.every(n=>{let o=/^U\+([0-9A-F]{0,5})(\?{1,6})$/i.exec(n);if(o)return o[1].length+o[2].length<=6;let r=/^U\+([0-9A-F]{1,6})(?:-([0-9A-F]{1,6}))?$/i.exec(n);if(!r)return!1;let a=Number.parseInt(r[1],16),i=Number.parseInt(r[2]??r[1],16);return a<=i&&i<=1114111})}function Ae(t){if(!X(t)||t.schemaVersion!==1||!ne.test(String(t.key))||!Number.isInteger(t.revision)||Number(t.revision)<=0||!Ft(t.cssHash)||typeof t.fontFamily!="string"||t.fontFamily.trim().length===0||t.fontFamily.length>120||zu(t.fontFamily)||t.runtimeFamily!==`FontAraGoogle-${t.cssHash.slice(0,24)}`||!ja(t.requestUrl,"fonts.googleapis.com","/css2")||!_e(t.createdAt)||!_e(t.updatedAt)||!_e(t.lastAccessedAt)||typeof t.pinned!="boolean"||!Number.isInteger(t.totalBytes)||Number(t.totalBytes)<=0||Number(t.totalBytes)>Ka||!Array.isArray(t.faces)||t.faces.length===0||t.faces.length>$a)return!1;let e=new Set,n=new Map;for(let o of t.faces){if(!X(o)||typeof o.id!="string"||!Du.test(o.id)||e.has(o.id)||!Ft(o.assetHash)||!Number.isInteger(o.byteLength)||Number(o.byteLength)<=0||Number(o.byteLength)>Ce||!ja(o.sourceUrl,"fonts.gstatic.com")||o.style!=="normal"&&o.style!=="italic"&&o.style!=="oblique"||!Hu(o.weight)||!Yu(o.stretch)||!Vu(o.unicodeRange))return!1;e.add(o.id);let r=n.get(o.assetHash);if(r!==void 0&&r!==o.byteLength)return!1;n.set(o.assetHash,Number(o.byteLength))}return Array.from(n.values()).reduce((o,r)=>o+r,0)===t.totalBytes}function Wu(t){return X(t)&&t.schemaVersion===1&&_e(t.updatedAt)&&Number.isInteger(t.totalBytes)&&Number(t.totalBytes)>=0&&X(t.families)&&Object.entries(t.families).every(([e,n])=>Ae(n)&&n.key===e)}function ju(t){return!X(t)||t.schemaVersion!==1||!_e(t.updatedAt)||!X(t.families)||!X(t.assets)?!1:Object.entries(t.families).every(([e,n])=>ne.test(e)&&X(n)&&Number.isInteger(n.latestRevision)&&Number(n.latestRevision)>0&&Array.isArray(n.revisions)&&n.revisions.length>0&&n.revisions.every(o=>Number.isInteger(o)&&Number(o)>0)&&new Set(n.revisions).size===n.revisions.length&&n.revisions.includes(n.latestRevision))&&Object.entries(t.assets).every(([e,n])=>ne.test(e)&&X(n)&&Number.isInteger(n.byteLength)&&Number(n.byteLength)>0&&Number(n.byteLength)<=Ce&&Number.isInteger(n.refCount)&&Number(n.refCount)>0)}async function ae(){let t=await re([te,ee,Zt]),e=t[Zt];if(e!==void 0){if(!Array.isArray(e)||!e.every(l=>typeof l=="string"&&(l.startsWith(Po)||l.startsWith(xo))))throw new S("google-font-cache-corrupt");await Te(Array.from(new Set(e))),await Te([Zt])}let n=t[te],o=t[ee];if(n===void 0&&o===void 0)return{catalog:hn(),index:Sn()};if(!Wu(n)||!ju(o))throw new S("google-font-cache-corrupt");let r=Object.keys(n.families).sort(),a=Object.keys(o.families).sort(),i=Object.values(o.assets).reduce((l,c)=>l+c.byteLength,0);if(JSON.stringify(r)!==JSON.stringify(a)||n.totalBytes!==i||r.some(l=>n.families[l].revision!==o.families[l].latestRevision))throw new S("google-font-cache-corrupt");return{catalog:o,index:n}}function Ku(t,e,n,o,r=o){let a={...structuredClone(t),createdAt:r,lastAccessedAt:o,pinned:n,revision:e,schemaVersion:1,updatedAt:o};if(!Ae(a))throw new S("google-font-invalid-request");return a}function $u(t){if(!t||!Array.isArray(t.faces)||t.faces.length===0||t.faces.length>$a)throw new S("google-font-face-count-limit");if(t.faces.some(e=>e.byteLength<=0||e.byteLength>Ce))throw new S("google-font-asset-too-large");if(t.totalBytes<=0||t.totalBytes>Ka)throw new S("google-font-family-size-limit")}function Xu(t,e){return t.key===e.key&&t.fontFamily===e.fontFamily&&t.cssHash===e.cssHash&&t.runtimeFamily===e.runtimeFamily&&t.requestUrl===e.requestUrl&&t.totalBytes===e.totalBytes&&JSON.stringify(t.faces)===JSON.stringify(e.faces)}async function qa(t,e,n){if(n.byteLength!==e||n.byteLength>Ce||n[0]!==119||n[1]!==79||n[2]!==70||n[3]!==50||await z(n)!==t)throw new S("google-font-asset-invalid",{assetHash:t})}function qu(t,e){return{byteLength:e.byteLength,data:Ut(e),encoding:"base64",hash:t,mimeType:"font/woff2",schemaVersion:1}}function Ju(t,e,n){if(t===void 0)return null;if(!X(t)||t.schemaVersion!==1||t.encoding!=="base64"||t.mimeType!=="font/woff2"||t.hash!==e||!Number.isInteger(t.byteLength)||Number(t.byteLength)<=0||Number(t.byteLength)>Ce||n!==void 0&&t.byteLength!==n||typeof t.data!="string")throw new S("google-font-asset-invalid",{assetHash:e});let o=me(t.data);if(!o||o.byteLength!==t.byteLength)throw new S("google-font-asset-invalid",{assetHash:e});return o}function Uo(t){return new Map(t.faces.map(e=>[e.assetHash,e.byteLength]))}async function Ja(t,e,n={}){return oe(async()=>{if($u(t),!e||typeof e.size!="number"||typeof e.get!="function"||typeof e.keys!="function")throw new S("google-font-invalid-request");let o=n.now??Date.now(),{catalog:r,index:a}=await ae(),i=a.families[t.key],l=i&&Xu(i,t),c=l?i.revision:(i?.revision??0)+1,u=Ku(t,c,n.pinned??i?.pinned??!1,o,l?i.createdAt:o),d=Uo(u);if(e.size!==d.size||Array.from(e.keys()).some(b=>!d.has(b)))throw new S("google-font-transaction-incomplete");let f={};for(let[b,_]of d){let T=e.get(b);if(!T)throw new S("google-font-transaction-incomplete");await qa(b,_,T),f[En(b)]=qu(b,T)}if(!l&&!r.families[t.key]&&Object.keys(r.families).length>=Fn)throw new S("google-font-cache-family-limit");let F=structuredClone(r),w=structuredClone(a);if(!l){for(let[_,T]of d){let mt=F.assets[_];if(mt&&mt.byteLength!==T)throw new S("google-font-cache-corrupt");F.assets[_]={byteLength:T,refCount:(mt?.refCount??0)+1}}let b=F.families[t.key];F.families[t.key]={latestRevision:c,revisions:[...b?.revisions??[],c]}}let k=Object.values(F.assets).reduce((b,_)=>b+_.byteLength,0);if(k>pn)throw new S("google-font-cache-size-limit");return F.updatedAt=o,w.families[t.key]=u,w.totalBytes=k,w.updatedAt=o,await yn({...f,[q(t.key,c)]:u,[ee]:F,[te]:w}),u})}async function Qu(t){if(!ne.test(t.key)||!Number.isInteger(t.revision)||t.revision<=0)return null;let e=q(t.key,t.revision),n=(await re(e))[e];if(n===void 0)return null;if(!Ae(n)||n.key!==t.key||n.revision!==t.revision)throw new S("google-font-cache-corrupt");return n}async function Zu(t,e={}){return oe(async()=>{let n=await Qu(t);if(!n||e.touch===!1)return n;let o=Date.now(),r={...n,lastAccessedAt:o},{catalog:a,index:i}=await ae();return a.updatedAt=o,i.families[n.key]?.revision===n.revision&&(i.families[n.key]=r,i.updatedAt=o),await yn({[q(n.key,n.revision)]:r,[ee]:a,[te]:i}),r})}async function wn(t,e={}){let{index:n}=await ae(),o=n.families[t];return o?Zu(o,e):Promise.resolve(null)}async function Qa(t,e){if(!ne.test(t))return null;let n=En(t),o=Ju((await re(n))[n],t,e);return o?(await qa(t,e??o.byteLength,o),o):null}async function Za(){let{catalog:t,index:e}=await ae();return{familyCount:Object.keys(t.families).length,pinnedFamilyCount:Object.values(e.families).filter(n=>n.pinned).length,totalBytes:e.totalBytes}}function ti(t){return oe(async()=>{if(!ne.test(t))return;let{catalog:e,index:n}=await ae(),o=e.families[t];if(!o)return;let r=Object.entries(e.families).flatMap(([f,F])=>F.revisions.map(w=>q(f,w))),a=r.length>0?await re(r):{},i=new Map;for(let[f,F]of Object.entries(e.families))for(let w of F.revisions){let k=a[q(f,w)];if(!Ae(k))throw new S("google-font-cache-corrupt");if(f!==t)for(let[b,_]of Uo(k)){let T=i.get(b);if(T&&T.byteLength!==_)throw new S("google-font-cache-corrupt");i.set(b,{byteLength:_,refCount:(T?.refCount??0)+1})}}let l=Date.now(),c=structuredClone(e),u=structuredClone(n);delete c.families[t],delete u.families[t],c.assets=Object.fromEntries(i),c.updatedAt=l,u.totalBytes=Array.from(i.values()).reduce((f,F)=>f+F.byteLength,0),u.updatedAt=l;let d=Object.keys(e.assets).filter(f=>!i.has(f));await Io(c,u,[...o.revisions.map(f=>q(t,f)),...d.map(En)])})}async function ei(t={}){return oe(async()=>{let e=Math.max(0,t.maxFamilies??Fn),n=Math.max(0,t.maxTotalBytes??pn),o=new Set(t.protectedFamilyKeys??[]),{catalog:r,index:a}=await ae(),i=Object.entries(r.families).flatMap(([g,E])=>E.revisions.map(gt=>q(g,gt))),l=i.length>0?await re(i):{},c=new Map;for(let g of i){let E=l[g];if(!Ae(E))throw new S("google-font-cache-corrupt");c.set(g,E)}let u=new Set,d=[],f=new Set(Object.keys(r.families)),F=g=>r.families[g].revisions.some(E=>c.get(q(g,E))?.pinned===!0),w=Object.keys(r.families).filter(g=>!o.has(g)&&!F(g)).sort((g,E)=>(a.families[g]?.lastAccessedAt??0)-(a.families[E]?.lastAccessedAt??0)),k=g=>{f.delete(g),d.push(g);for(let E of r.families[g].revisions)u.add(q(g,E))};for(let g of w){if(f.size<=e)break;k(g)}let b=()=>{let g=new Map;for(let[E,gt]of c)if(!u.has(E))for(let[tr,gl]of Uo(gt)){let dl=g.get(tr);g.set(tr,{byteLength:gl,refs:(dl?.refs??0)+1})}return g},_=b(),T=Array.from(_.values()).reduce((g,E)=>g+E.byteLength,0),mt=Array.from(c.entries()).filter(([,g])=>g.revision!==r.families[g.key].latestRevision&&!g.pinned&&!o.has(g.key)&&f.has(g.key)).sort(([,g],[,E])=>g.lastAccessedAt-E.lastAccessedAt);for(let[g]of mt){if(T<=n)break;u.add(g),_=b(),T=Array.from(_.values()).reduce((E,gt)=>E+gt.byteLength,0)}for(let g of w){if(T<=n)break;f.has(g)&&(k(g),_=b(),T=Array.from(_.values()).reduce((E,gt)=>E+gt.byteLength,0))}let le=Date.now(),Nt=hn(le),ce=Sn(le);for(let g of f)Nt.families[g]={latestRevision:r.families[g].latestRevision,revisions:r.families[g].revisions.filter(E=>!u.has(q(g,E)))},a.families[g]&&(ce.families[g]=a.families[g]);for(let[g,E]of _)Nt.assets[g]={byteLength:E.byteLength,refCount:E.refs};ce.totalBytes=T;let B=Object.keys(r.assets).filter(g=>!_.has(g));return await Io(Nt,ce,[...u,...B.map(En)]),{evictedFamilyKeys:d,removedAssetHashes:B,totalBytes:T}})}async function ni(){return oe(async()=>{let t=await re(null),e=Object.keys(t).filter(o=>o.startsWith(Po)||o.startsWith(xo)||o===Bu),n=Date.now();await Io(hn(n),Sn(n),e)})}function oi(){return oe(async()=>{let t=Date.now();await yn({[ee]:hn(t),[te]:Sn(t)}),await Te([Zt])})}var Po,xo,te,ee,Zt,Bu,Ce,Ka,pn,$a,Fn,ne,Du,Xa,Wa,Go=p(()=>{"use strict";be();Gt();Po="googleFontFace:",xo="googleFontFamily:",te="__fontara_google_font_binary_index__",ee="__fontara_google_font_binary_catalog__",Zt="__fontara_google_font_binary_cleanup__",Bu="googleFontCssCache",Ce=5*1024*1024,Ka=12*1024*1024,pn=24*1024*1024,$a=64,Fn=16,ne=/^[a-f0-9]{64}$/,Du=/^[A-Za-z0-9_-]{1,128}$/,Xa=/^[A-Za-z0-9.%\s-]{1,64}$/,Wa=Promise.resolve()});function nf(t){return wt(t.family)&&!ef.has(t.family)&&!t.subsets.some(e=>tf.has(e))}function of(t){return{...t,fontFamily:t.family,name:t.family,value:fo(t.family)}}function rf(t){if(typeof t!="object"||t===null)return!1;let e=t;return nn(e.family)&&typeof e.category=="string"&&typeof e.fallback=="string"&&typeof e.recommended=="boolean"&&Array.isArray(e.subsets)&&Array.isArray(e.variants)}function af(t){if(typeof t!="object"||t===null)throw new Error("google-fonts-catalog-invalid");let e=t;if(e.source!=="google-fonts-developer-api-v1"||!Array.isArray(e.fonts))throw new Error("google-fonts-catalog-invalid");let n=e.fonts.filter(rf).filter(nf).map(of);if(n.length===0)throw new Error("google-fonts-catalog-empty");return n}function sf(){return typeof chrome<"u"&&chrome.runtime?.getURL?chrome.runtime.getURL(ri):`/${ri}`}function ai(){return Mo?Promise.resolve(Mo):Oe||(Oe=fetch(sf(),{cache:"force-cache",credentials:"omit"}).then(t=>{if(!t.ok)throw new Error("google-fonts-catalog-load-failed");return t.json()}).then(af).then(t=>(Mo=t,t)).finally(()=>{Oe=null}),Oe)}var ri,Mo,Oe,tf,ef,Bo=p(()=>{"use strict";de();de();ri="assets/data/google-fonts.json",Mo=null,Oe=null,tf=new Set(["chinese-hongkong","chinese-simplified","chinese-traditional","japanese","korean"]),ef=new Set(["Google Sans"])});function U(t){return typeof t=="object"&&t!==null}function yi(t){return U(t)}function tt(t){return typeof t=="string"&&t.length>0&&t.length<=128}function Hf(t){return U(t)&&tt(t.clientMutationId)&&yi(t.settings)}function Yf(t){return!("url"in t)||t.url===null||typeof t.url=="string"}function Yo(t){if(!U(t)||typeof t.type!="string"||!Df.has(t.type))return!1;switch(t.type){case h.CHANGE_SETTINGS:case h.IMPORT_SETTINGS:return Hf(t.data);case h.RESET_SETTINGS:return U(t.data)&&tt(t.data.clientMutationId);case h.RUN_COMMAND:return U(t.data)&&typeof t.data.command=="string"&&Yf(t.data);case h.CUSTOM_FONT_BEGIN:return U(t.data)&&tt(t.data.clientMutationId)&&U(t.data.family)&&(!("mode"in t.data)||t.data.mode==="append"||t.data.mode==="replace-library");case h.CUSTOM_FONT_PUT_FACE:return U(t.data)&&tt(t.data.clientMutationId)&&typeof t.data.transactionId=="string"&&typeof t.data.faceId=="string"&&typeof t.data.base64=="string";case h.CUSTOM_FONT_COMMIT:case h.CUSTOM_FONT_ABORT:return U(t.data)&&tt(t.data.clientMutationId)&&typeof t.data.transactionId=="string";case h.CUSTOM_FONT_IMPORT_BATCH:return U(t.data)&&tt(t.data.clientMutationId)&&yi(t.data.settings)&&Array.isArray(t.data.transactionIds)&&t.data.transactionIds.length<=64&&t.data.transactionIds.every(e=>typeof e=="string"&&e.length>0);case h.CUSTOM_FONT_DELETE:return U(t.data)&&tt(t.data.clientMutationId)&&typeof t.data.familyValue=="string";case h.GOOGLE_FONT_PREPARE:return U(t.data)&&tt(t.data.clientMutationId)&&typeof t.data.selectedValue=="string"&&t.data.selectedValue.length>0&&t.data.selectedValue.length<=512;case h.GOOGLE_FONT_CACHE_CLEAR:return U(t.data)&&tt(t.data.clientMutationId);default:return!0}}function _n(t){return U(t)&&(!("pageURL"in t)||typeof t.pageURL=="string")&&typeof t.scriptId=="string"&&typeof t.type=="string"&&zf.has(t.type)}function Si(t){return{data:t}}function hi(t){return{error:t}}function Ei(t){return{data:t,type:Fi.CHANGES}}var h,Fi,J,Ct,Df,Ep,zf,ie=p(()=>{"use strict";h={GET_DATA:"fontara-ui-bg-get-data",SUBSCRIBE_TO_CHANGES:"fontara-ui-bg-subscribe-to-changes",UNSUBSCRIBE_FROM_CHANGES:"fontara-ui-bg-unsubscribe-from-changes",CHANGE_SETTINGS:"fontara-ui-bg-change-settings",IMPORT_SETTINGS:"fontara-ui-bg-import-settings",RESET_SETTINGS:"fontara-ui-bg-reset-settings",RUN_COMMAND:"fontara-ui-bg-run-command",CUSTOM_FONT_BEGIN:"fontara-ui-bg-custom-font-begin",CUSTOM_FONT_PUT_FACE:"fontara-ui-bg-custom-font-put-face",CUSTOM_FONT_COMMIT:"fontara-ui-bg-custom-font-commit",CUSTOM_FONT_IMPORT_BATCH:"fontara-ui-bg-custom-font-import-batch",CUSTOM_FONT_ABORT:"fontara-ui-bg-custom-font-abort",CUSTOM_FONT_DELETE:"fontara-ui-bg-custom-font-delete",GOOGLE_FONT_PREPARE:"fontara-ui-bg-google-font-prepare",GOOGLE_FONT_CACHE_CLEAR:"fontara-ui-bg-google-font-cache-clear",GOOGLE_FONT_CACHE_STATS:"fontara-ui-bg-google-font-cache-stats"},Fi={CHANGES:"fontara-bg-ui-changes"},J={DOCUMENT_CONNECT:"fontara-cs-bg-document-connect",DOCUMENT_FORGET:"fontara-cs-bg-document-forget",DOCUMENT_UPDATE:"fontara-cs-bg-document-update",DOCUMENT_RESUME:"fontara-cs-bg-document-resume"},Ct={APPLY_THEME:"fontara-bg-cs-apply-theme",CLEAN_UP:"fontara-bg-cs-clean-up",SETTINGS_CHANGED:"fontara-bg-cs-settings-changed"},Df=new Set(Object.values(h)),Ep=new Set(Object.values(Fi)),zf=new Set(Object.values(J))});var Hi,Yi=p(()=>{Hi=`:root {
  --fontara-aistudio-inter-ui-fallback: Inter, sans-serif;
}

:root .light-theme .mat-mdc-form-field-infix,
:root .light-theme .mat-mdc-select,
.account-switcher-container .account-switcher-button.v3-container-485387979 .account-switcher-text,
.author-label,
.bottom-actions .command-palette-button .shortcut,
.dragging-overlay,
.enabled-tool .tool-name,
.global-banner,
.global-banner .actions-section,
.glue-cookie-notification-bar .glue-cookie-notification-bar__text,
.group-title,
.header .header-text,
.item-about .item-description-title,
.item-description-title,
.light-theme button,
.light-theme input,
.light-theme textarea:not([ms-input]),
.mat-mdc-form-field,
.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-select,
.mat-mdc-slide-toggle .mat-internal-form-field,
.model-selector-card .subtitle,
.model-selector-card .title,
.ms-slider .slider-number-input,
.overlay-header .header-label,
.search-source,
.sub-item,
.subtitle,
.system-instructions-card .subtitle,
.system-instructions-card .title,
.title,
.v3-font-body,
.v3-token-count-value,
.main-text,
[ms-button],
[ms-button].ms-button-small,
[ms-input],
[ms-input].small,
body,
html,
ms-cmark-node p,
textarea {
  font-family: var(--fontara-font),
    var(--fontara-aistudio-inter-ui-fallback) !important;
}
`});var Vi,Wi=p(()=>{Vi=`:root {
  --fontara-arena-times-root-fallback: Times;
  --fontara-arena-basel-grotesk-ui-fallback: baselGrotesk,
    "baselGrotesk Fallback", ui-sans-serif, system-ui, sans-serif;
  --fontara-arena-martina-heading-fallback: martinaPlantijn,
    "martinaPlantijn Fallback", ui-serif, Georgia, Cambria, "Times New Roman",
    Times, serif;
  --fontara-arena-basel-grotesk-mono-fallback: baselGroteskMono,
    "baselGroteskMono Fallback", ui-monospace, SFMono-Regular, Menlo, Monaco,
    Consolas, "Liberation Mono", "Courier New", monospace;
  --fontara-arena-basel-grotesk-emoji-ui-fallback: baselGrotesk,
    "baselGrotesk Fallback", ui-sans-serif, system-ui, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  --fontara-arena-inter-prose-fallback: Inter, "Inter Fallback", ui-sans-serif,
    system-ui, sans-serif;
}

:root,
html {
  font-family: var(--fontara-font),
    var(--fontara-arena-times-root-fallback) !important;
}

.body-base,
.prose,
html.m-0.h-svh.w-full > body.font-sans.__variable_697da2.__variable_3916eb > textarea {
  font-family: var(--fontara-font),
    var(--fontara-arena-basel-grotesk-ui-fallback) !important;
}

.font-heading,
h2 {
  font-family: var(--fontara-font),
    var(--fontara-arena-martina-heading-fallback) !important;
}

.font-mono {
  font-family: var(--fontara-font),
    var(--fontara-arena-basel-grotesk-mono-fallback) !important;
}

.font-sans {
  font-family: var(--fontara-font),
    var(--fontara-arena-basel-grotesk-emoji-ui-fallback) !important;
}

.prose :where(p, ul, ol, li, blockquote):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  font-family: var(--fontara-font),
    var(--fontara-arena-inter-prose-fallback) !important;
}
`});var ji,Ki=p(()=>{ji=`:root {
  --fontara-chatgpt-body-fallback: var(--font-sans);
  --fontara-chatgpt-html-fallback: var(
    --default-font-family,
    ui-sans-serif,
    system-ui,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji"
  );
  --fontara-chatgpt-kbd-fallback: var(
    --default-mono-font-family,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    "Liberation Mono",
    "Courier New",
    monospace
  );
  --fontara-chatgpt-font-sans-child-fallback: -apple-system-body,
    ui-sans-serif, -apple-system, "system-ui", "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, "sans-serif", "Segoe UI Emoji",
    "Segoe UI Symbol";
  --fontara-chatgpt-header-wordmark-fallback: "OpenAI Sans", sans-serif;
}

body {
  font-family: var(--fontara-font),
    var(--fontara-chatgpt-body-fallback) !important;
}

html {
  font-family: var(--fontara-font),
    var(--fontara-chatgpt-html-fallback) !important;
}

kbd {
  font-family: var(--fontara-font),
    var(--fontara-chatgpt-kbd-fallback) !important;
}

:is(.\\*\\:font-sans > *) {
  font-family: var(--fontara-font),
    var(--fontara-chatgpt-font-sans-child-fallback) !important;
}

.header-wordmark {
  font-family: var(--fontara-font),
    var(--fontara-chatgpt-header-wordmark-fallback) !important;
}
`});var $i,Xi=p(()=>{$i=`:root {
  --fontara-claude-anthropic-sans-root-fallback: "Anthropic Sans", system-ui,
    "Segoe UI", Roboto, Helvetica, Arial, sans-serif, ui-sans-serif, system-ui,
    -apple-system, "Segoe UI", Roboto, sans-serif;
  --fontara-claude-anthropic-sans-ui-fallback: "Anthropic Sans", system-ui,
    "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --fontara-claude-anthropic-serif-display-fallback: "Anthropic Serif",
    Georgia, "Arial Hebrew", "Noto Sans Hebrew", "Times New Roman", Times,
    "Hiragino Sans", "Yu Gothic", Meiryo, "Noto Sans CJK JP", "PingFang TC",
    "Microsoft JhengHei", "Noto Sans CJK TC", "PingFang SC",
    "Microsoft YaHei", "Noto Sans CJK SC", "Apple SD Gothic Neo",
    "Malgun Gothic", "Noto Sans CJK KR", serif;
}

.cds-root[data-font],
.font-sans {
  font-family: var(--fontara-font),
    var(--fontara-claude-anthropic-sans-root-fallback) !important;
}

.font-base,
.font-base-bold,
.font-large,
.font-small,
.font-ui,
.sm\\:font-base,
body,
html {
  font-family: var(--fontara-font),
    var(--fontara-claude-anthropic-sans-ui-fallback) !important;
}

.font-display {
  font-family: var(--fontara-font),
    var(--fontara-claude-anthropic-serif-display-fallback) !important;
}
`});var qi,Ji=p(()=>{qi=`:root {
  --fontara-copilot-ginto-ui-fallback: Ginto, ui-sans-serif, system-ui,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
}

body,
html,
html > body > textarea {
  font-family: var(--fontara-font),
    var(--fontara-copilot-ginto-ui-fallback) !important;
}
`});var Qi,Zi=p(()=>{Qi=`:root {
  --fontara-deepseek-app-ui-fallback: quote-cjk-patch, Inter, system-ui,
    -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
}

._9986c0c .d00ed9c9,
.ds-markdown,
.e37a04e4,
body {
  font-family: var(--fontara-font),
    var(--fontara-deepseek-app-ui-fallback) !important;
}
`});var ts,es=p(()=>{ts=`:root {
  --fontara-duckduckgo-duck-sans-product-ui-fallback: DuckSansProduct,
    -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}

body :where(
  p,
  span,
  div,
  mark,
  a,
  h1, h2, h3, h4, h5, h6,
  li,
  label,
  button,
  input,
  textarea,
  select,
  option,
  em,
  strong,
  b,
  i,
  small,
  time,
  cite,
  q,
  blockquote,
  figcaption,
  summary,
  dt, dd,
  th, td, caption,
  legend,
  [role="heading"],
  [role="button"],
  [role="menuitem"],
  [role="option"],
  [role="tab"]
):not(
  pre,
  pre *,
  code,
  code *,
  [aria-hidden="true"],
  [class*="fa-"],
  .fa,
  .fab,
  .fad,
  .fal,
  .far,
  .fas,
  .fass,
  .fasr,
  .fat,
  .icofont,
  [style*="font-"],
  [class*="icon"],
  [class*="Icon"],
  [class*="symbol"],
  [class*="Symbol"],
  .glyphicon,
  [class*="material-symbol"],
  [class*="material-icon"],
  mu,
  [class*="mu-"],
  .typcn,
  [class*="vjs-"]
) {
  font-family: var(--fontara-font),
    var(--fontara-duckduckgo-duck-sans-product-ui-fallback) !important;
}
`});var ns,os=p(()=>{ns=`:root {
  --fontara-facebook-system-ui-fallback: system-ui, -apple-system,
    "system-ui", ".SFNSText-Regular", sans-serif;
}

body :where(
  p,
  span,
  div,
  mark,
  a,
  h1, h2, h3, h4, h5, h6,
  li,
  label,
  button,
  input,
  textarea,
  select,
  option,
  em,
  strong,
  b,
  i,
  small,
  time,
  cite,
  q,
  blockquote,
  figcaption,
  summary,
  dt, dd,
  th, td, caption,
  legend,
  [role="heading"],
  [role="button"],
  [role="menuitem"],
  [role="option"],
  [role="tab"]
):not(
  pre,
  pre *,
  code,
  code *,
  [aria-hidden="true"],
  [class*="fa-"],
  .fa,
  .fab,
  .fad,
  .fal,
  .far,
  .fas,
  .fass,
  .fasr,
  .fat,
  .icofont,
  [style*="font-"],
  [class*="icon"],
  [class*="Icon"],
  [class*="symbol"],
  [class*="Symbol"],
  .glyphicon,
  [class*="material-symbol"],
  [class*="material-icon"],
  mu,
  [class*="mu-"],
  .typcn,
  [class*="vjs-"]
) {
  font-family: var(--fontara-font),
    var(--fontara-facebook-system-ui-fallback) !important;
}
`});var rs,as=p(()=>{rs=`:root {
  --fontara-gemini-google-sans-flex-ui-fallback: "Google Sans Flex",
    "Google Sans", "Helvetica Neue", sans-serif;
}

body :where(
  p,
  span,
  div,
  mark,
  a,
  h1, h2, h3, h4, h5, h6,
  li,
  label,
  button,
  input,
  textarea,
  select,
  option,
  em,
  strong,
  b,
  i,
  small,
  time,
  cite,
  q,
  blockquote,
  figcaption,
  summary,
  dt, dd,
  th, td, caption,
  legend,
  [role="heading"],
  [role="button"],
  [role="menuitem"],
  [role="option"],
  [role="tab"]
):not(
  pre,
  pre *,
  code,
  code *,
  [aria-hidden="true"],
  [class*="fa-"],
  .fa,
  .fab,
  .fad,
  .fal,
  .far,
  .fas,
  .fass,
  .fasr,
  .fat,
  .icofont,
  [style*="font-"],
  [class*="icon"],
  [class*="Icon"],
  [class*="symbol"],
  [class*="Symbol"],
  .glyphicon,
  [class*="material-symbol"],
  [class*="material-icon"],
  mu,
  [class*="mu-"],
  .typcn,
  [class*="vjs-"]
) {
  font-family: var(--fontara-font),
    var(--fontara-gemini-google-sans-flex-ui-fallback) !important;
}
`});var is,ss=p(()=>{is=`:root {
  --fontara-github-ui-fallback: "Mona Sans VF", -apple-system, "system-ui",
    "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji";
  --fontara-github-root-fallback: sans-serif;
}

html {
  font-family: var(--fontara-font),
    var(--fontara-github-root-fallback) !important;
}

[class*="ControlledTooltip-module__tooltipBase__"]::after,
.markdown-body,
.prc-Tooltip-Tooltip-JLsri::after,
.prc-TooltipV2-Tooltip-tLeuB[popover],
body,
kbd {
  font-family: var(--fontara-font), var(--fontara-github-ui-fallback) !important;
}
`});var ls,cs=p(()=>{ls=`:root {
  --fontara-gmail-message-body-fallback: Arial, Helvetica, sans-serif;
  --fontara-gmail-google-sans-ui-fallback: "Google Sans", Roboto, RobotoDraft,
    Helvetica, Arial, sans-serif;
  --fontara-gmail-google-sans-compact-fallback: "Google Sans", Roboto,
    sans-serif;
  --fontara-gmail-gm3-filled-tonal-button-fallback: var(
    --gm3-button-filled-tonal-label-text-font,
    "Google Sans",
    Roboto,
    Arial,
    sans-serif
  );
  --fontara-gmail-gm3-filled-tonal-flex-button-fallback: var(
    --gm3-button-filled-tonal-label-text-font,
    "Google Sans Flex",
    "Google Sans Text",
    "Google Sans",
    Roboto,
    Arial,
    sans-serif
  );
  --fontara-gmail-roboto-ui-fallback: Roboto, Arial, sans-serif;
  --fontara-gmail-google-sans-header-fallback: "Google Sans", Roboto,
    Helvetica, Arial, sans-serif;
  --fontara-gmail-google-sans-text-header-fallback: "Google Sans Text", Roboto,
    Helvetica, Arial, sans-serif;
  --fontara-gmail-gm3-text-button-fallback: var(
    --gm3-button-text-label-text-font,
    "Google Sans",
    Roboto,
    Arial,
    sans-serif
  );
  --fontara-gmail-gm3-text-flex-button-fallback: var(
    --gm3-button-text-label-text-font,
    "Google Sans Flex",
    "Google Sans Text",
    "Google Sans",
    Roboto,
    Arial,
    sans-serif
  );
  --fontara-gmail-arial-ui-fallback: arial, sans-serif;
}

.a3s {
  font-family: var(--fontara-font),
    var(--fontara-gmail-message-body-fallback) !important;
}

.aAv,
.aeU .ma,
.ah9 > .CJ,
.ahR,
.aiD,
.amH > .Dj,
.amn > .ams,
.aOd.T-I,
.bcA,
.Bn,
.bsU,
.bx0,
.Di > .amH,
.gJ,
.ha > .hP,
.hx .gD,
.hx .hb,
.iv .g3,
.J-M,
.l6,
.T-ays,
.TO .nU > .n0,
.yW,
.z0 > .L3,
.zA > .a4W,
.zA > .xW,
button,
h3.iw {
  font-family: var(--fontara-font),
    var(--fontara-gmail-google-sans-ui-fallback) !important;
}

.d-a8c-OgMUtf {
  font-family: var(--fontara-font),
    var(--fontara-gmail-google-sans-compact-fallback) !important;
}

.FOBRw-anl {
  font-family: var(--fontara-font),
    var(--fontara-gmail-gm3-filled-tonal-button-fallback) !important;
}

.FOBRw-kSE8rc-FoKg4d-a2N-YoZ4jf .FOBRw-anl {
  font-family: var(--fontara-font),
    var(--fontara-gmail-gm3-filled-tonal-flex-button-fallback) !important;
}

.gb_Eb,
.ua {
  font-family: var(--fontara-font),
    var(--fontara-gmail-roboto-ui-fallback) !important;
}

.gb_Ee,
.gb_ud {
  font-family: var(--fontara-font),
    var(--fontara-gmail-google-sans-header-fallback) !important;
}

.gb_Ma {
  font-family: var(--fontara-font),
    var(--fontara-gmail-google-sans-text-header-fallback) !important;
}

.mUIrbf-anl {
  font-family: var(--fontara-font),
    var(--fontara-gmail-gm3-text-button-fallback) !important;
}

.mUIrbf-kSE8rc-FoKg4d-a2N-YoZ4jf .mUIrbf-anl {
  font-family: var(--fontara-font),
    var(--fontara-gmail-gm3-text-flex-button-fallback) !important;
}

.p6,
.T9,
#loading,
body,
input {
  font-family: var(--fontara-font),
    var(--fontara-gmail-arial-ui-fallback) !important;
}
`});var us,fs=p(()=>{us=`:root {
  --fontara-google-arial-ui-fallback: Arial, sans-serif;
  --fontara-google-sans-ui-fallback: "Google Sans", Arial, sans-serif;
}

:where(
  p,
  span,
  div,
  mark,
  a,
  h1, h2, h3, h4, h5, h6,
  li,
  label,
  button,
  input,
  textarea,
  select,
  option,
  em,
  strong,
  b,
  i,
  small,
  time,
  cite,
  q,
  blockquote,
  figcaption,
  summary,
  dt, dd,
  th, td, caption,
  legend,
  [role="heading"],
  [role="button"],
  [role="menuitem"],
  [role="option"],
  [role="tab"]
):not(
  pre,
  pre *,
  code,
  code *,
  [aria-hidden="true"],
  [class*="fa-"],
  .fa,
  .fab,
  .fad,
  .fal,
  .far,
  .fas,
  .fass,
  .fasr,
  .fat,
  .icofont,
  [style*="font-"],
  [class*="icon"],
  [class*="Icon"],
  [class*="symbol"],
  [class*="Symbol"],
  .glyphicon,
  [class*="material-symbol"],
  [class*="material-icon"],
  mu,
  [class*="mu-"],
  .typcn,
  [class*="vjs-"]
) {
  font-family: var(--fontara-font), var(--fontara-google-sans-ui-fallback) !important;
}
`});var ms,gs=p(()=>{ms=`:root {
  --fontara-instagram-system-ui-fallback: -apple-system, "system-ui",
    "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --fontara-instagram-sfns-text-fallback: system-ui, -apple-system,
    "system-ui", ".SFNSText-Regular", sans-serif;
  --fontara-instagram-helvetica-ui-fallback: Helvetica, Arial, sans-serif;
}

:where(
  p,
  span,
  div,
  mark,
  a,
  h1, h2, h3, h4, h5, h6,
  li,
  label,
  button,
  input,
  textarea,
  select,
  option,
  em,
  strong,
  b,
  i,
  small,
  time,
  cite,
  q,
  blockquote,
  figcaption,
  summary,
  dt, dd,
  th, td, caption,
  legend,
  [role="heading"],
  [role="button"],
  [role="menuitem"],
  [role="option"],
  [role="tab"]
):not(
  pre,
  pre *,
  code,
  code *,
  [aria-hidden="true"],
  [class*="fa-"],
  .fa,
  .fab,
  .fad,
  .fal,
  .far,
  .fas,
  .fass,
  .fasr,
  .fat,
  .icofont,
  [style*="font-"],
  [class*="icon"],
  [class*="Icon"],
  [class*="symbol"],
  [class*="Symbol"],
  .glyphicon,
  [class*="material-symbol"],
  [class*="material-icon"],
  mu,
  [class*="mu-"],
  .typcn,
  [class*="vjs-"]
) {
  font-family: var(--fontara-font),
  var(--fontara-instagram-system-ui-fallback) !important;
}

select {
  font-family: var(--fontara-font),
    var(--fontara-instagram-helvetica-ui-fallback) !important;
} 
`});var ds,ps=p(()=>{ds=`:root {
  --fontara-linkedin-ui-fallback: system-ui, -apple-system, "system-ui",
    "Segoe UI", Roboto, Ubuntu, Oxygen, Cantarell, "Fira Sans", "Droid Sans",
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
}


:where(
  p,
  span,
  div,
  mark,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  label,
  button,
  input,
  textarea,
  select,
  option,
  em,
  strong,
  b,
  i,
  small,
  time,
  cite,
  q,
  blockquote,
  figcaption,
  summary,
  dt,
  dd,
  th,
  td,
  caption,
  legend,
  [role="heading"],
  [role="button"],
  [role="menuitem"],
  [role="option"],
  [role="tab"]
):not(
  pre,
  pre *,
  code,
  code *,
  [aria-hidden="true"],
  [class*="fa-"],
  .fa,
  .fab,
  .fad,
  .fal,
  .far,
  .fas,
  .fass,
  .fasr,
  .fat,
  .icofont,
  [style*="font-"],
  [class*="icon"],
  [class*="Icon"],
  [class*="symbol"],
  [class*="Symbol"],
  .glyphicon,
  [class*="material-symbol"],
  [class*="material-icon"],
  mu,
  [class*="mu-"],
  .typcn,
  [class*="vjs-"]
) {
  font-family: var(--fontara-font), var(--fontara-linkedin-ui-fallback) !important;
}
`});var Fs,ys=p(()=>{Fs=`:root {
  --fontara-notebooklm-google-sans-text-fallback: "Google Sans Text";
  --fontara-notebooklm-google-sans-emoji-picker-fallback: "Google Sans",
    sans-serif;
  --fontara-notebooklm-google-sans-text-ui-fallback: "Google Sans Text",
    Roboto, Helvetica, Arial, sans-serif;
  --fontara-notebooklm-google-sans-display-fallback: "Google Sans";
}

.date-separator,
.label-medium-button,
.mat-label-medium,
.mat-mdc-button,
.mat-mdc-checkbox .mat-internal-form-field,
.mat-mdc-form-field,
.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-outlined-button,
.mat-tonal-button,
.query-box-input {
  font-family: var(--fontara-font),
    var(--fontara-notebooklm-google-sans-text-fallback) !important;
}

.emoji-keyboard__grid__title,
.emoji-keyboard__loading-message,
.emoji-keyboard__search input,
.emoji-keyboard__search-text,
.xap-emoji-keyboard .emoji-keyboard__grid__title,
.xap-emoji-keyboard .emoji-keyboard__loading-message,
.xap-emoji-keyboard .emoji-keyboard__search input,
.xap-emoji-keyboard .emoji-keyboard__search-text {
  font-family: var(--fontara-font),
    var(--fontara-notebooklm-google-sans-emoji-picker-fallback) !important;
}

.gb_Eb,
.gb_Jd {
  font-family: var(--fontara-font),
    var(--fontara-notebooklm-google-sans-text-ui-fallback) !important;
}

.mat-headline-medium,
h2 {
  font-family: var(--fontara-font),
    var(--fontara-notebooklm-google-sans-display-fallback) !important;
}
`});var Ss,hs=p(()=>{Ss=`:root {
  --fontara-openrouter-inter-ui-fallback: Inter, "Inter Fallback",
    ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --fontara-openrouter-inter-root-fallback: Inter, -apple-system, system-ui,
    "system-ui", "Helvetica Neue", Helvetica, sans-serif;
  --fontara-openrouter-monospace-fallback: ui-monospace, SFMono-Regular, Menlo,
    Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.font-sans,
body {
  font-family: var(--fontara-font),
    var(--fontara-openrouter-inter-ui-fallback) !important;
}

html {
  font-family: var(--fontara-font),
    var(--fontara-openrouter-inter-root-fallback) !important;
}

kbd {
  font-family: var(--fontara-font),
    var(--fontara-openrouter-monospace-fallback) !important;
}
`});var Es,ws=p(()=>{Es=`:root {
  --fontara-perplexity-sans-ui-fallback: pplxSans, ui-sans-serif, system-ui,
    -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial,
    "Noto Sans", "Hiragino Sans", "Yu Gothic", Meiryo, "PingFang SC",
    "Microsoft YaHei", "PingFang TC", "Microsoft JhengHei", "PingFang HK",
    "Microsoft JhengHei", "PingFang MO", "Microsoft JhengHei",
    "Apple SD Gothic Neo", "Malgun Gothic", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --fontara-perplexity-serif-answer-fallback: pplxSerif, pplxSerif, ui-serif,
    Georgia, Cambria, "Hiragino Mincho ProN", "Yu Mincho", "Songti SC", SimSun,
    "Songti TC", PMingLiU, "Songti TC", MingLiU_HKSCS, "Songti TC", PMingLiU,
    AppleMyungjo, Batang, serif;
}

.font-sans,
.reset,
html {
  font-family: var(--fontara-font),
    var(--fontara-perplexity-sans-ui-fallback) !important;
}

html[data-answer-font="serif"] .prose {
  font-family: var(--fontara-font),
    var(--fontara-perplexity-serif-answer-fallback) !important;
}
`});var bs,_s=p(()=>{bs=`:root {
  --fontara-poe-system-ui-fallback: -apple-system, system-ui, "system-ui",
    "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",
    sans-serif;
}

[class*="BotDescriptionDisclaimerSection_disclaimerText__"],
[class*="BotDescriptionDisclaimerSection_expander__"],
[class*="BotInfoCard_actionBar__"],
[class*="BotInfoCardHeader_botName__"],
[class*="BotInfoCardHeader_creatorHandle__"],
[class*="BotInfoCardHeader_separator__"],
[class*="ChatHeader_subText__"],
[class*="ChatHistoryListItem_formattedDateTime__"],
[class*="ChatHistoryListItem_overflowButton__"],
[class*="ChatHistoryListItem_seenPreviewText__"],
[class*="ChatHistoryListItem_seenTitle__"],
[class*="ChatMessageActionBar_actionBar__"],
[class*="ChatMessageFollowupActions_container__"],
[class*="CommandButton_command_action__"],
[class*="Message_leftSideMessageBubble__"],
[class*="Message_messageMetadataText__"],
[class*="Message_rightSideMessageBubble__"],
[class*="MessageDate_container__"],
[class*="Prose_prose__"],
[class*="SidebarItem_item__"],
[class*="Tag_tag__"],
body {
  font-family: var(--fontara-font),
    var(--fontara-poe-system-ui-fallback) !important;
}
`});var Ts,Cs=p(()=>{Ts=`:root {
  --fontara-qwen-ant-ui-fallback: -apple-system, "system-ui", "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  --fontara-qwen-app-ui-fallback: system-ui, ui-sans-serif, -apple-system,
    "system-ui", Inter, NotoSansHans, sans-serif;
}

:where(.css-mncuj7).ant-select,
:where(.css-mncuj7)[class^="ant-select"] {
  font-family: var(--fontara-font),
    var(--fontara-qwen-ant-ui-fallback) !important;
}

.app,
.qwen-thinking-selector .qwen-select-thinking-label .qwen-select-thinking-label-text,
body {
  font-family: var(--fontara-font),
    var(--fontara-qwen-app-ui-fallback) !important;
}
`});var As,Os=p(()=>{As=`:root {
  --fontara-slack-app-ui-fallback: Slack-Lato, Slack-Fractions, appleLogo,
    sans-serif;
  --fontara-slack-loading-ui-fallback: Slack-Lato, appleLogo, sans-serif;
}

body,
.ql-container {
  font-family: var(--fontara-font),
    var(--fontara-slack-app-ui-fallback) !important;
}

.p-trouble_loading {
  font-family: var(--fontara-font),
    var(--fontara-slack-loading-ui-fallback) !important;
}
`});var Ls,Ns=p(()=>{Ls=`:root {
  --fontara-telegram-roboto-ui-fallback: Roboto, -apple-system,
    "apple color emoji", "system-ui", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, "Helvetica Neue", sans-serif;
}

button,
html,
input {
  font-family: var(--fontara-font),
    var(--fontara-telegram-roboto-ui-fallback) !important;
}
`});var Rs,vs=p(()=>{Rs=`:root {
  --fontara-ticktick-ui-fallback: "Color Emoji", system-ui, -apple-system,
    "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

#root,
body,
html,
html > body.sidebar-focus.tick.webkit > textarea,
pre {
  font-family: var(--fontara-font),
    var(--fontara-ticktick-ui-fallback) !important;
}
`});var Ps,xs=p(()=>{Ps=`:root {
  --fontara-trello-atlassian-ui-fallback: "Atlassian Sans", ui-sans-serif,
    -apple-system, "system-ui", "Segoe UI", Ubuntu, "Helvetica Neue",
    sans-serif;
}

body :where(
  p,
  span,
  div,
  mark,
  a,
  h1, h2, h3, h4, h5, h6,
  li,
  label,
  button,
  input,
  textarea,
  select,
  option,
  em,
  strong,
  b,
  i,
  small,
  time,
  cite,
  q,
  blockquote,
  figcaption,
  summary,
  dt, dd,
  th, td, caption,
  legend,
  [role="heading"],
  [role="button"],
  [role="menuitem"],
  [role="option"],
  [role="tab"]
):not(
  pre,
  pre *,
  code,
  code *,
  [aria-hidden="true"],
  [class*="fa-"],
  .fa,
  .fab,
  .fad,
  .fal,
  .far,
  .fas,
  .fass,
  .fasr,
  .fat,
  .icofont,
  [style*="font-"],
  [class*="icon"],
  [class*="Icon"],
  [class*="symbol"],
  [class*="Symbol"],
  .glyphicon,
  [class*="material-symbol"],
  [class*="material-icon"],
  mu,
  [class*="mu-"],
  .typcn,
  [class*="vjs-"]
) {
  font-family: var(--fontara-font),
    var(--fontara-trello-atlassian-ui-fallback) !important;
}
`});var ks,Is=p(()=>{ks=`:root {
  --fontara-whatsapp-apple-ui-fallback: "SF Pro Text", "SF Pro Icons", system,
    -apple-system, system-ui, "system-ui", "Helvetica Neue", Helvetica, Arial,
    "Lucida Grande", "Kohinoor Devanagari", sans-serif;
  --fontara-whatsapp-segoe-ui-fallback: "Segoe UI", "Helvetica Neue",
    Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans",
    sans-serif;
}

.os-mac.font-fix {
  font-family: var(--fontara-font),
    var(--fontara-whatsapp-apple-ui-fallback) !important;
}

body {
  font-family: var(--fontara-font),
    var(--fontara-whatsapp-segoe-ui-fallback) !important;
}
`});var Us,Gs=p(()=>{Us=`:root {
  --fontara-wikipedia-sans-ui-fallback: system-ui, "Segoe UI",
    "Iranian Sans", "Noto Sans Arabic", "DejaVu Sans", sans-serif;
}

body :where(
  p,
  span,
  div,
  mark,
  a,
  h1, h2, h3, h4, h5, h6,
  li,
  label,
  button,
  input,
  textarea,
  select,
  option,
  em,
  strong,
  b,
  i,
  small,
  time,
  cite,
  q,
  blockquote,
  figcaption,
  summary,
  dt, dd,
  th, td, caption,
  legend,
  [role="heading"],
  [role="button"],
  [role="menuitem"],
  [role="option"],
  [role="tab"]
):not(
  pre,
  pre *,
  code,
  code *,
  [aria-hidden="true"],
  [class*="fa-"],
  .fa,
  .fab,
  .fad,
  .fal,
  .far,
  .fas,
  .fass,
  .fasr,
  .fat,
  .icofont,
  [style*="font-"],
  [class*="icon"],
  [class*="Icon"],
  [class*="symbol"],
  [class*="Symbol"],
  .glyphicon,
  [class*="material-symbol"],
  [class*="material-icon"],
  mu,
  [class*="mu-"],
  .typcn,
  [class*="vjs-"]
) {
  font-family: var(--fontara-font),
    var(--fontara-wikipedia-sans-ui-fallback) !important;
}
`});var Ms,Bs=p(()=>{Ms=`:root,
html,
body {
  --fontara-x-fallback: TwitterChirp, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --fontara-x-monospace: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}

:where(
  p,
  span,
  div,
  mark,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  label,
  button,
  input,
  textarea,
  select,
  option,
  em,
  strong,
  b,
  i,
  small,
  time,
  cite,
  q,
  blockquote,
  figcaption,
  summary,
  dt,
  dd,
  th,
  td,
  caption,
  legend,
  [role="heading"],
  [role="button"],
  [role="menuitem"],
  [role="option"],
  [role="tab"]
):not(
  pre,
  pre *,
  code,
  code *,
  [aria-hidden="true"],
  [class*="fa-"],
  .fa,
  .fab,
  .fad,
  .fal,
  .far,
  .fas,
  .fass,
  .fasr,
  .fat,
  .icofont,
  [style*="font-"],
  [class*="icon"],
  [class*="Icon"],
  [class*="symbol"],
  [class*="Symbol"],
  .glyphicon,
  [class*="material-symbol"],
  [class*="material-icon"],
  mu,
  [class*="mu-"],
  .typcn,
  [class*="vjs-"]
) {
  font-family: var(--fontara-font), var(--fontara-x-fallback) !important;
}
`});var Ds,zs=p(()=>{Ds=`:root {
  --fontara-youtube-roboto-ui-fallback: Roboto, Arial, sans-serif;
}

body :where(
  p,
  span,
  div,
  mark,
  a,
  h1, h2, h3, h4, h5, h6,
  li,
  label,
  button,
  input,
  textarea,
  select,
  option,
  em,
  strong,
  b,
  i,
  small,
  time,
  cite,
  q,
  blockquote,
  figcaption,
  summary,
  dt, dd,
  th, td, caption,
  legend,
  [role="heading"],
  [role="button"],
  [role="menuitem"],
  [role="option"],
  [role="tab"]
):not(
  pre,
  pre *,
  code,
  code *,
  [aria-hidden="true"],
  [class*="fa-"],
  .fa,
  .fab,
  .fad,
  .fal,
  .far,
  .fas,
  .fass,
  .fasr,
  .fat,
  .icofont,
  [style*="font-"],
  [class*="icon"],
  [class*="Icon"],
  [class*="symbol"],
  [class*="Symbol"],
  .glyphicon,
  [class*="material-symbol"],
  [class*="material-icon"],
  mu,
  [class*="mu-"],
  .typcn,
  [class*="vjs-"]
) {
  font-family: var(--fontara-font),
    var(--fontara-youtube-roboto-ui-fallback) !important;
}
`});function Hs(t){return!t.matchingWebsite?.customCss||!t.matchingWebsite.url?null:Lm[t.matchingWebsite.url]??null}var Lm,Ys=p(()=>{"use strict";Yi();Wi();Ki();Xi();Ji();Zi();es();os();as();ss();cs();fs();gs();ps();ys();hs();ws();_s();Cs();Os();Ns();vs();xs();Is();Gs();Bs();zs();Lm={"https://aistudio.google.com":Hi,"https://arena.ai":Vi,"https://chatgpt.com":ji,"https://claude.ai":$i,"https://copilot.microsoft.com":qi,"https://chat.deepseek.com":Qi,"https://duckduckgo.com":ts,"https://www.facebook.com":ns,"https://gemini.google.com":rs,"https://github.com":is,"https://mail.google.com":ls,"https://www.google.com":us,"https://www.instagram.com":ms,"https://www.linkedin.com":ds,"https://notebooklm.google.com":Fs,"https://openrouter.ai":Ss,"https://www.perplexity.ai":Es,"https://poe.com":bs,"https://chat.qwen.ai":Ts,"https://app.slack.com":As,"https://web.telegram.org":Ls,"https://ticktick.com":Rs,"https://trello.com":Ps,"https://web.whatsapp.com":ks,"https://www.wikipedia.org":Us,"https://www.youtube.com":Ds,"https://x.com":Ms}});var Vs,Ws=p(()=>{Vs=`/* ========== Vazirmatn ========== */
@font-face {
  font-family: "Vazirmatn-Fontara";
  src:
    url("assets/fonts/vazir/variable/Vazirmatn[wght].woff2")
      format("woff2 supports variations"),
    url("assets/fonts/vazir/variable/Vazirmatn[wght].woff2")
      format("woff2-variations");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Estedad ========== */
@font-face {
  font-family: "Estedad-Fontara";
  src:
    url("assets/fonts/estedad/variable/Estedad[KSHD,wght].woff2")
      format("woff2 supports variations"),
    url("assets/fonts/estedad/variable/Estedad[KSHD,wght].woff2")
      format("woff2-variations");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Samim ========== */
@font-face {
  font-family: "Samim-Fontara";
  src: url("assets/fonts/samim/Samim.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

@font-face {
  font-family: "Samim-Fontara";
  src: url("assets/fonts/samim/Samim-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

@font-face {
  font-family: "Samim-Fontara";
  src: url("assets/fonts/samim/Samim-Bold.woff2") format("woff2");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Shabnam ========== */
@font-face {
  font-family: "Shabnam-Fontara";
  src: url("assets/fonts/shabnam/Shabnam.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}
@font-face {
  font-family: "Shabnam-Fontara";
  src: url("assets/fonts/shabnam/Shabnam-Thin.woff2") format("woff2");
  font-weight: 100;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}
@font-face {
  font-family: "Shabnam-Fontara";
  src: url("assets/fonts/shabnam/Shabnam-Light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}
@font-face {
  font-family: "Shabnam-Fontara";
  src: url("assets/fonts/shabnam/Shabnam-Medium.woff2")
    format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}
@font-face {
  font-family: "Shabnam-Fontara";
  src: url("assets/fonts/shabnam/Shabnam-Bold.woff2") format("woff2");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Arad ========== */
@font-face {
  font-family: "Arad-Fontara";
  src:
    url("assets/fonts/arad/Arad-VF.woff2")
      format("woff2 supports variations"),
    url("assets/fonts/arad/Arad-VF.woff2")
      format("woff2-variations");
  font-weight: 100 800;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Sahel ========== */
@font-face {
  font-family: "Sahel-Fontara";
  src:
    url("assets/fonts/sahel/variable/Sahel-VF.woff2")
      format("woff2 supports variations"),
    url("assets/fonts/sahel/variable/Sahel-VF.woff2")
      format("woff2-variations");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Parastoo ========== */
@font-face {
  font-family: "Parastoo-Fontara";
  src: url("assets/fonts/parastoo/Parastoo.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}
@font-face {
  font-family: "Parastoo-Fontara";
  src: url("assets/fonts/parastoo/Parastoo-Bold.woff2")
    format("woff2");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Gandom ========== */
@font-face {
  font-family: "Gandom-Fontara";
  src: url("assets/fonts/gandom/Gandom.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Tanha ========== */
@font-face {
  font-family: "Tanha-Fontara";
  src: url("assets/fonts/tanha/Tanha.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Behdad ========== */
@font-face {
  font-family: "Behdad-Fontara";
  src: url("assets/fonts/behdad/Behdad-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Nika ========== */
@font-face {
  font-family: "Nika-Fontara";
  src: url("assets/fonts/nika/Nika-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Ganjname ========== */
@font-face {
  font-family: "Ganjname-Fontara";
  src: url("assets/fonts/ganjname/GanjNamehSans-Regular.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Shahab ========== */
@font-face {
  font-family: "Shahab-Fontara";
  src: url("assets/fonts/shahab/Shahab-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Mikhak ========== */
@font-face {
  font-family: "Mikhak-Fontara";
  src:
    url("assets/fonts/mikhak/variable/Mikhak[DSTY,KSHD,wght].woff2")
      format("woff2 supports variations"),
    url("assets/fonts/mikhak/variable/Mikhak[DSTY,KSHD,wght].woff2")
      format("woff2-variations");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}

/* ========== Nahid ========== */
@font-face {
  font-family: "Nahid-Fontara";
  src: url("assets/fonts/nahid/Nahid.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F;
}
`});function js(t,e){return t.replace(/url\(\s*(["']?)assets\/([^"')]+)\1\s*\)/g,(n,o,r)=>`url("${e(`assets/${r}`)}")`)}var Ks=p(()=>{"use strict"});function Xs(){return $s??=js(Vs,t=>chrome.runtime.getURL(t)),$s}var $s,qs=p(()=>{"use strict";Ws();Ks();$s=null});function Js(t){return Array.isArray(t)?t:[]}async function Qs(t,e){return typeof t=="boolean"?t:await e?.()===!0}async function vm(t){return t.customFontList?Js(t.customFontList):Js(await t.readCustomFontList?.())}function Lt(){return{...Rm}}function Pm(t,e){return t.find(n=>n.value===e)??null}function xm(t){return typeof t=="string"&&Nm.has(t)}async function Zs(t,e={}){if(!t)return Lt();if(xm(t))return{customFontFamilyRevision:null,customFontFamilyValue:null,fontName:t,googleFontCSS:null,localFont:null};let n=H(t);if(n){if(!await Qs(e.googleFontsEnabled,e.readGoogleFontsEnabled)||!uo())return Lt();let i=e.googleFontCSSLoadMode!=="cache-only",l=e.resolveGoogleFontBinary?await e.resolveGoogleFontBinary(t,{allowNetwork:i}):await wn(await Qt(n),{touch:!1});return l?{customFontFamilyRevision:null,customFontFamilyValue:null,fontName:l.runtimeFamily,googleFontCSS:null,localFont:{reference:{key:l.key,revision:l.revision,source:"google"},state:"ready"}}:{...Lt(),localFont:{selectedValue:t,source:"google",state:"pending"}}}let o=po(t);if(o){if(!await Qs(e.systemFontsEnabled,e.readSystemFontsEnabled))return Lt();if(So()){let i=await ea(),l=pe(o),c=i.fonts.some(u=>pe(u.fontFamily)===l);if(i.status==="ready"&&!c)return Lt()}return{customFontFamilyRevision:null,customFontFamilyValue:null,fontName:o,googleFontCSS:null,localFont:null}}let r=Pm(await vm(e),t);return r?{customFontFamilyRevision:r.revision,customFontFamilyValue:r.value,fontName:t,googleFontCSS:null,localFont:{reference:{revision:r.revision,source:"custom",value:r.value},state:"ready"}}:Lt()}var Nm,Rm,tl=p(()=>{"use strict";ao();C();be();Go();Bo();on();Nm=new Set(Ze.map(t=>t.value)),Rm={customFontFamilyRevision:null,customFontFamilyValue:null,fontName:m.SELECTED_FONT,googleFontCSS:null,localFont:null}});var km,el,nl=p(()=>{"use strict";km=['[aria-hidden="true"]','[class*="fa-"]',".fa",".fab",".fad",".fal",".far",".fas",".fass",".fasr",".fat",".icofont",'[class*="icon"]','[class*="Icon"]','[class*="symbol"]','[class*="Symbol"]',".glyphicon",'[class*="material-symbol"]','[class*="material-icon"]',"mu",'[class*="mu-"]',".typcn",'[class*="vjs-"]'],el=["pre","pre *","code",'[style*="font-"]:not([style*="var(--fontara-font)"])',...km]});function ol(t,e,n){return{widthPx:kt(n?.textStroke??t)}}function rl(t){if(t.widthPx<=0)return"";let e=`:is(${el.join(", ")})`;return[`*:not(${e}):not(${e} *) {`,`  -webkit-text-stroke: ${t.widthPx}px !important;`,"}",`${e}, ${e} * {`,"  -webkit-text-stroke: 0 !important;","}"].join(`
`)}var al=p(()=>{"use strict";nl();fe()});function Zo(t,e,n){let o=t[e];return o===void 0?n:o}function Um(t){let e=t[s.CUSTOM_FONT_LIST];return Array.isArray(e)?e:m.CUSTOM_FONT_LIST}async function Gm(t,e,n,o={}){if(!e.active)return{...Im,applyMode:n};let r=e.siteProfile?.font??Zo(t,s.SELECTED_FONT,m.SELECTED_FONT),a=await Zs(r,{customFontList:Um(t),googleFontCSSLoadMode:o.googleFontCSSLoadMode,googleFontsEnabled:Zo(t,s.GOOGLE_FONTS_ENABLED,m.GOOGLE_FONTS_ENABLED),resolveGoogleFontBinary:o.resolveGoogleFontBinary,systemFontsEnabled:Zo(t,s.SYSTEM_FONTS_ENABLED,m.SYSTEM_FONTS_ENABLED)}),i=Hs(e),l=rl(ol(t[s.TEXT_STROKE],e.matchingWebsite,e.siteProfile));return{active:!0,applyMode:n,customCSS:i,customFontFamilyRevision:a.customFontFamilyRevision,customFontFamilyValue:a.customFontFamilyValue,fontFaceCSS:Xs(),fontName:a.fontName,googleFontCSS:a.googleFontCSS,localFont:a.localFont,textStrokeCSS:l}}function Mm(t){return{active:t.active,siteId:t.active&&t.matchingSite?t.matchingSite.id:null}}async function il(t,e,n="full",o={}){let r=ga(t,e),[a,i]=await Promise.all([Gm(e,r.font,n,o),Promise.resolve(Mm(r.rtl))]);return{font:a,rtl:i}}var Im,sl=p(()=>{"use strict";Ys();bt();C();qs();tl();al();Im={active:!1,applyMode:"full",customCSS:null,customFontFamilyRevision:null,customFontFamilyValue:null,fontFaceCSS:"",fontName:m.SELECTED_FONT,googleFontCSS:null,localFont:null,textStrokeCSS:""}});var ll={};Fl(ll,{createFontaraContentCommandMessage:()=>Bm});async function Bm(t,e,n="full",o={}){let r=await il(t,e,n,o);return!r.font.active&&!r.rtl.active?{type:Ct.CLEAN_UP}:{data:r,type:Ct.APPLY_THEME}}var cl=p(()=>{"use strict";sl();ie()});C();var hr="technicalAndInteraction";function Er(){return!1}function Jl(){let t=chrome.runtime?.lastError;return t?new Error(t.message):null}function Ql(){return new Promise((t,e)=>{chrome.permissions.getAll(n=>{let o=Jl();if(o){e(o);return}t(n)})})}async function Zl(){if(!Er())return"granted";if(!chrome.permissions?.getAll)return"unsupported";let t=await Ql();return Array.isArray(t.data_collection)?t.data_collection.includes(hr)?"granted":"not-granted":"unsupported"}async function wr(){return await Zl()==="granted"}function br(t){return Er()&&Array.isArray(t.data_collection)&&t.data_collection?.includes(hr)===!0}C();function _r(t,e){return{[s.GOOGLE_FONTS_ENABLED]:!1}}C();Gt();var jn="U+0600-06FF, U+0750-077F, U+0870-089F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+200B-200F, U+202A-202F";var dg=[{id:"arabic-persian",unicodeRange:jn},{id:"latin",unicodeRange:"U+0000-00FF, U+0100-024F, U+1E00-1EFF, U+2000-206F"},{id:"latin-arabic",unicodeRange:`${jn}, U+0000-00FF, U+0100-024F, U+1E00-1EFF, U+2000-206F`},{id:"cyrillic",unicodeRange:"U+0400-052F, U+2DE0-2DFF, U+A640-A69F"},{id:"greek",unicodeRange:"U+0370-03FF, U+1F00-1FFF"},{id:"hebrew",unicodeRange:"U+0590-05FF, U+FB1D-FB4F"},{id:"devanagari",unicodeRange:"U+0900-097F, U+A8E0-A8FF"},{id:"thai",unicodeRange:"U+0E00-0E7F"},{id:"cjk",unicodeRange:"U+2E80-2EFF, U+3000-303F, U+3040-30FF, U+3400-4DBF, U+4E00-9FFF, U+F900-FAFF, U+FF00-FFEF"},{id:"all",unicodeRange:null}],gc=/^U\+([0-9A-F?]{1,6})(?:-([0-9A-F]{1,6}))?$/i,dc=32,pc=1114111;function Wn(t){return t.toUpperCase().padStart(4,"0")}function Pr(t){let e=Number.parseInt(t,16);return Number.isFinite(e)&&e<=pc?e:null}function Fc(t){let e=t.trim().toUpperCase(),n=gc.exec(e);if(!n)return null;let o=n[1],r=n[2];if(o.includes("?"))return r?null:`U+${o}`;let a=Pr(o);if(a===null)return null;if(!r)return`U+${Wn(o)}`;let i=Pr(r);return i===null||i<a?null:`U+${Wn(o)}-${Wn(r)}`}function yc(t){let e=t.trim().split(/[\s,]+/).filter(Boolean);if(e.length===0)return null;if(e.length>dc)return;let n=[],o=new Set;for(let r of e){let a=Fc(r);if(!a)return;o.has(a)||(o.add(a),n.push(a))}return n.join(", ")}function Kn(t,e=jn){if(t===null)return null;if(typeof t!="string")return e;let n=yc(t);return n===void 0?e:n}Gt();function Sc(t,e){return Array.from(t).slice(0,e).join("")}function hc(t){let e=t.codePointAt(0)??0;return e<=31||e>=127&&e<=159||e===1564||e===8203||e===8206||e===8207||e>=8234&&e<=8238||e>=8294&&e<=8297||e===65279}function ot(t,e=128){if(typeof t!="string"||e<=0)return"";let n=Array.from(t.normalize("NFKC")).filter(o=>!hc(o)).join("");return Sc(n.trim().replace(/\s+/gu," "),e)}function xr(t){let e=ot(t);return/[\p{L}\p{N}\p{P}\p{S}]/u.test(e)}function $n(t){return ot(t,256).toLocaleLowerCase("en")}function Xn(t,e){return ot(t,255)||ot(e,255)||"font"}Ve();var Ec=20;function wc(t){return Nr(t)?{id:t.id,fileHash:t.fileHash.toLowerCase(),fileName:Xn(t.fileName,`font.${t.format}`),format:t.format,byteLength:t.byteLength,weight:{...t.weight},style:t.style,stretch:{...t.stretch},axes:t.axes.map(e=>({...e})),validation:t.validation}:null}function Mt(t){if(!t||typeof t!="object")return null;let e=t,n=ot(e.displayName),o=$n(e.sourceFamilyKey);if(!Vn(e.value)||!xr(n)||!o||!Array.isArray(e.faces))return null;let r=[],a=new Set;for(let i of e.faces.slice(0,Ec)){let l=wc(i);!l||a.has(l.id)||(a.add(l.id),r.push(l))}return r.length===0?null:{value:e.value,displayName:n,sourceFamilyKey:o,unicodeRange:Kn(e.unicodeRange),revision:typeof e.revision=="number"&&Number.isInteger(e.revision)&&e.revision>0?e.revision:1,faces:r}}function ge(t){if(!t||typeof t!="object")return!1;let e=t;return Vn(e.value)&&typeof e.name=="string"&&e.name.trim().length>0&&typeof e.data=="string"&&typeof e.type=="string"}async function je(t){let e=We(t.data),n=qn(t),o=Rr(t),r=o??"ttf",a=await z(n),i=Xn(t.originalFileName,`${ot(t.name)}.${r}`),l=e&&o&&yt(o,e)?"legacy-unverified":"failed";return{value:t.value,displayName:ot(t.name),sourceFamilyKey:$n(t.name),unicodeRange:Kn(t.unicodeRange),revision:1,faces:[{id:vr(a),fileHash:a,fileName:i,format:r,byteLength:n.byteLength,weight:{min:400,max:400},style:"normal",stretch:{min:100,max:100},axes:[],validation:l}]}}function qn(t){let e=We(t.data);return e&&e.byteLength>0?e:new TextEncoder().encode(JSON.stringify(t))}async function Jn(t){if(!Array.isArray(t))return[];let e=[],n=new Set;for(let o of t){let r=ge(o)?await je(o):Mt(o);!r||n.has(r.value)||(n.add(r.value),e.push(r))}return e}Gt();var Ke="customFontFace:",Zn="customFontRecovery:",kr="customFontStaging:",Dt="__fontara_custom_font_transaction_journal__",zt="__fontara_custom_font_transaction_recovery__",at="__fontara_custom_font_storage_schema_version__",Wt=2,it=5*1024*1024,bc=20*1024*1024,Xe=50*1024*1024,eo=20,qe=64,_c=32,Tc=1800*1e3,Cc=1440*60*1e3,Ac=Math.ceil(it/3)*4+4;function Ht(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Qn(t){return typeof t=="number"&&Number.isFinite(t)&&t>=0}function Oc(t,e){if(!Ht(e)||e.id!==t||!Qn(e.createdAt)||!Qn(e.expiresAt)||e.expiresAt<e.createdAt||!Ht(e.family)||!Array.isArray(e.family.faces)||!Array.isArray(e.receivedFaceIds))return null;let n=Mt({...e.family,revision:1});if(!n||n.faces.length!==e.family.faces.length)return null;let o=new Set(n.faces.map(l=>l.id));if(!e.receivedFaceIds.every(l=>typeof l=="string"&&o.has(l)))return null;let r=e.phase===void 0?"uploading":e.phase;if(r!=="uploading"&&r!=="promoted"||r==="promoted"&&(!Number.isInteger(e.committedRevision)||Number(e.committedRevision)<=0||!Qn(e.promotedAt)))return null;let{revision:a,...i}=n;return{id:t,createdAt:e.createdAt,expiresAt:e.expiresAt,family:i,receivedFaceIds:Array.from(new Set(e.receivedFaceIds)),phase:r,...r==="promoted"?{committedRevision:e.committedRevision,promotedAt:e.promotedAt}:{}}}function Ir(t){return!Ht(t)||!Ht(t.entries)?{}:t.entries}function to(t,e,n=0){if(!(n>8||t===null||t===void 0)){if(Array.isArray(t)){for(let o of t)to(o,e,n+1);return}if(Ht(t)){Ft(t.fileHash)&&e.add(t.fileHash.toLowerCase());for(let o of Object.values(t))to(o,e,n+1)}}}function Lc(t,e,n){Qe(t,e);let o=Object.values(n);if(o.some(l=>l.family.value===t.value))throw new Error("custom-font-family-transaction-active");let r=new Set(e.map(l=>l.value));for(let l of o)r.add(l.family.value);if(r.add(t.value),r.size>qe)throw new Error("custom-font-library-family-limit");let a=new Map;for(let l of e)for(let c of l.faces)a.set(c.fileHash,c.byteLength);for(let l of o)for(let c of l.family.faces)a.set(c.fileHash,c.byteLength);for(let l of t.faces)a.set(l.fileHash,l.byteLength);if(Array.from(a.values()).reduce((l,c)=>l+c,0)>Xe)throw new Error("custom-font-library-size-limit")}function no(){let t=chrome.runtime?.lastError;return t?new Error(t.message):null}function Yt(t){return new Promise((e,n)=>{chrome.storage.local.get(t,o=>{let r=no();r?n(r):e(o)})})}function Vt(t){return new Promise((e,n)=>{chrome.storage.local.set(t,()=>{let o=no();o?n(o):e()})})}function rt(t){return new Promise((e,n)=>{chrome.storage.local.remove(t,()=>{let o=no();o?n(o):e()})})}function Je(t){return`${Ke}${t}`}function oo(t){return`${Zn}${t}`}function St(t,e){return`${kr}${t}:${e}`}function Ur(t){return t.faces.map(e=>e.fileHash)}function Gr(t){return new Set(t.flatMap(e=>Ur(e)))}function Mr(t){return new Set(Object.values(t).flatMap(e=>Ur(e.family)))}function Nc(t){return Array.from(t).flatMap(e=>[Je(e),oo(e)])}function Rc(t,e){if(t.phase!=="promoted"||typeof t.committedRevision!="number")return!1;let n=e.find(r=>r.value===t.family.value&&r.revision===t.committedRevision);if(!n||n.faces.length!==t.family.faces.length)return!1;let o=new Map(n.faces.map(r=>[r.id,r.fileHash]));return t.family.faces.every(r=>o.get(r.id)===r.fileHash)}function Br(t){if(!t||typeof t!="object")return!1;let e=t;return e.encoding==="base64"&&typeof e.data=="string"&&typeof e.hash=="string"&&typeof e.byteLength=="number"&&typeof e.format=="string"}async function Z(){let t=await Yt([Dt,zt]),e=t[Dt];if(e==null)return{};let n={},o={};if(Ht(e))for(let[r,a]of Object.entries(e)){let i=Oc(r,a);i?n[r]=i:o[r]=a}else o.__invalid_journal__=e;if(Object.keys(o).length>0){let r={entries:{...Ir(t[zt]),...o},updatedAt:Date.now()};await Vt({[Dt]:n,[zt]:r})}return n}async function Dr(){let t=await Yt(zt),e=new Set;return to(Ir(t[zt]),e),e}async function zr(){await rt(zt)}async function Bt(t){if(Object.keys(t).length===0){await rt(Dt);return}await Vt({[Dt]:t})}async function Hr(t){let e=Je(t),n=oo(t),o=await Yt([e,n]),r=o[e]??o[n];if(!Br(r)||r.hash!==t)return null;let a=me(r.data);return!a||a.byteLength!==r.byteLength?null:await z(a)===t?a:null}async function Yr(t,e){let n=await z(e),o=yt(t.format,e);if(n!==t.fileHash||e.byteLength!==t.byteLength||e.byteLength>it||!o&&t.validation!=="failed")throw new Error("invalid-custom-font-face");let r={encoding:"base64",byteLength:e.byteLength,format:t.format,hash:n,data:Ut(e)};await Vt({[Je(n)]:r})}async function Vr(t,e){let n=await z(e);if(t.validation!=="failed"||n!==t.fileHash||e.byteLength!==t.byteLength)throw new Error("invalid-custom-font-recovery");let o={encoding:"base64",byteLength:e.byteLength,format:t.format,hash:n,data:Ut(e)};await Vt({[oo(n)]:o})}async function ro(t){let e=await Z(),[n,o]=await Promise.all([Dr(),Yt(null)]),r=Gr(t);for(let i of Mr(e))r.add(i);for(let i of n)r.add(i);let a=Object.keys(o).filter(i=>(i.startsWith(Ke)||i.startsWith(Zn))&&!r.has(i.slice(i.startsWith(Ke)?Ke.length:Zn.length)));a.length>0&&await rt(a)}async function ht(t,e){let n=await Z(),o=await Dr(),r=Gr(e);for(let i of Mr(n))r.add(i);for(let i of o)r.add(i);let a=new Set(Array.from(t).filter(i=>!r.has(i)));a.size>0&&await rt(Nc(a))}var $e=class{async collectGarbage(e=Date.now(),n=!1){let o=await Z(),r=n?await Yt(null):null,a=new Set,i=new Set,l=!1;for(let[u,d]of Object.entries(o)){if(d.expiresAt<=e){for(let f of d.family.faces)i.add(St(u,f.id));delete o[u],l=!0;continue}for(let f of d.receivedFaceIds)a.add(St(u,f))}let c=r?Object.keys(r).filter(u=>u.startsWith(kr)&&!a.has(u)):[];for(let u of i)c.push(u);c.length>0&&await rt(c),l&&await Bt(o)}async finalizePublished(e){let n=await Z(),o=[],r=!1;for(let[a,i]of Object.entries(n))Rc(i,e)&&(delete n[a],r=!0,o.push(...i.family.faces.map(l=>St(a,l.id))));r&&(await Bt(n),o.length>0&&await rt(o))}async begin(e,n,o="append",r=Date.now()){await this.finalizePublished(n),await this.collectGarbage(r);let a=await Z();Lc(e,o==="replace-library"?[]:n,a);let i=crypto.randomUUID(),l=r+Tc;return a[i]={id:i,createdAt:r,expiresAt:l,family:e,receivedFaceIds:[],phase:"uploading"},await Bt(a),{transactionId:i,expiresAt:l}}async putFace(e,n,o){if(o.length>Ac)throw new Error("invalid-custom-font-face-size");let r=await Z(),a=r[e];if(!a||a.phase==="promoted"||a.expiresAt<=Date.now())throw new Error("custom-font-transaction-expired");let i=a.family.faces.find(f=>f.id===n);if(!i)throw new Error("custom-font-face-not-in-transaction");let l=me(o);if(!l||l.byteLength!==i.byteLength)throw new Error("invalid-custom-font-face-size");let c=await z(l),u=yt(i.format,l);if(c!==i.fileHash||l.byteLength>it||!u&&i.validation!=="failed")throw new Error("invalid-custom-font-face");let d={encoding:"base64",byteLength:l.byteLength,format:i.format,hash:c,data:o};await Vt({[St(e,n)]:d}),a.receivedFaceIds.includes(n)||(a.receivedFaceIds.push(n),await Bt(r))}async commit(e,n,o=n){let r=await Z(),a=r[e];if(!a)throw new Error("custom-font-transaction-expired");if(a.phase==="promoted"&&typeof a.committedRevision=="number")return{...a.family,revision:a.committedRevision};if(a.expiresAt<=Date.now())throw new Error("custom-font-transaction-expired");if(Qe(a.family,n),a.receivedFaceIds.length!==a.family.faces.length||a.family.faces.some(f=>!a.receivedFaceIds.includes(f.id)))throw new Error("custom-font-transaction-incomplete");let i=a.family.faces.map(f=>St(e,f.id)),l=await Yt(i),c={};for(let[f,F]of a.family.faces.entries()){let w=l[i[f]];if(!Br(w)||w.hash!==F.fileHash)throw new Error("custom-font-transaction-incomplete");c[Je(F.fileHash)]=w}let u={...a.family,revision:(o.find(f=>f.value===a.family.value)?.revision??0)+1},d=Date.now();return a.phase="promoted",a.committedRevision=u.revision,a.promotedAt=d,a.expiresAt=Math.max(a.expiresAt,d+Cc),await Vt({...c,[Dt]:r}),u}async finalize(e){let n=await Z(),o=n[e];if(o){if(o.phase!=="promoted")throw new Error("custom-font-transaction-not-promoted");delete n[e],await Bt(n),await rt(o.family.faces.map(r=>St(e,r.id)))}}async abort(e){let n=await Z(),o=n[e];if(!o)return null;delete n[e];let r=o.family.faces.map(a=>St(e,a.id));return await Bt(n),r.length>0&&await rt(r),{family:o.family,promoted:o.phase==="promoted"}}};function Qe(t,e){if(t.faces.length===0||t.faces.length>eo||t.faces.length>_c)throw new Error("custom-font-family-face-limit");if(t.faces.some(i=>i.byteLength<=0||i.byteLength>it))throw new Error("custom-font-face-size-limit");if(t.faces.reduce((i,l)=>i+l.byteLength,0)>bc)throw new Error("custom-font-family-size-limit");if(!e.find(i=>i.value===t.value)&&e.length>=qe)throw new Error("custom-font-library-family-limit");let r=new Map;for(let i of e)if(i.value!==t.value)for(let l of i.faces)r.set(l.fileHash,l.byteLength);for(let i of t.faces)r.set(i.fileHash,i.byteLength);if(Array.from(r.values()).reduce((i,l)=>i+l,0)>Xe)throw new Error("custom-font-library-size-limit")}ao();xn();xe();xt();It();Yn();C();fe();de();on();var au=new Set(Ze.map(t=>t.value));function na(t,e){return t.regex!==e.regex||t.icon!==e.icon||t.pattern!==e.pattern||t.siteName!==e.siteName||t.customCss!==e.customCss}function oa(t,e){let n=[...t];for(let o of e){let r=n.findIndex(i=>i.url===o.url);if(r===-1){n.push(o);continue}if("version"in o){let i=n[r];(!("version"in i)||i.version!==o.version||na(i,o))&&(n[r]={...o,isActive:i.isActive});continue}let a=n[r];na(a,o)&&(n[r]={...o,isActive:a.isActive})}return n}function iu(t){try{return`^https?://${new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(t)?t:`https://${t}`).host.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}/?.*$`}catch{return t}}function st(t){return typeof t=="string"&&t.trim()?t.trim():void 0}function su(t){if(typeof t!="object"||t===null)return null;let e=t,n=st(e.url);if(!n)return null;let o=m.WEBSITE_LIST.find(l=>l.url.replace(/\/+$/,"")===n.replace(/\/+$/,"")),r=st(e.pattern),a=o?.url??Ge(n,r&&Dn(r)==="path"?"path":"domain");if(!a)return null;let i=o?.regex??iu(a);try{new RegExp(i)}catch{return null}return{url:a,regex:i,...e.isActive===!1?{isActive:!1}:{isActive:!0},...st(e.icon)?{icon:st(e.icon)}:{},...r?{pattern:r}:{},...st(e.siteName)?{siteName:st(e.siteName)}:{},...st(e.version)?{version:st(e.version)}:{},...typeof e.customCss=="boolean"?{customCss:e.customCss}:{}}}function lu(t){if(!Array.isArray(t))return m.WEBSITE_LIST;let e=[],n=new Map;for(let o of t){let r=su(o);if(!r)continue;let a=n.get(r.url);if(a===void 0){n.set(r.url,e.length),e.push(r);continue}e[a]=r}return oa(e,m.WEBSITE_LIST)}async function Fe(t){return Jn(t)}function ra(t,e,n,o){return t===void 0||au.has(t)||e.some(r=>r.value===t)||n&&wt(H(t))||$t(t)}function cu(t,e,n,o){return nt(t).map(r=>{if(!r.font||ra(r.font,e,n,o))return r;let{font:a,...i}=r;return i}).filter(pt)}async function P(t){let e=typeof t[s.GOOGLE_FONTS_ENABLED]=="boolean"?t[s.GOOGLE_FONTS_ENABLED]:m.GOOGLE_FONTS_ENABLED,o=ta()&&(typeof t[s.SYSTEM_FONTS_ENABLED]=="boolean"?t[s.SYSTEM_FONTS_ENABLED]:m.SYSTEM_FONTS_ENABLED),r=lu(t[s.WEBSITE_LIST]),a=await Fe(t[s.CUSTOM_FONT_LIST]),i=typeof t[s.SELECTED_FONT]=="string"?t[s.SELECTED_FONT]:m.SELECTED_FONT,l=t[s.TEXT_STROKE]===void 0&&typeof t[s.TEXT_STROKE_ENABLED]=="boolean"?t[s.TEXT_STROKE_ENABLED]?.3:m.TEXT_STROKE:kt(t[s.TEXT_STROKE]);return{[s.EXTENSION_ENABLED]:t[s.EXTENSION_ENABLED]!==!1,[s.SELECTED_FONT]:ra(i,a,e,o)?i:m.SELECTED_FONT,[s.WEBSITE_LIST]:r,[s.PINNED_WEBSITE_URLS]:t[s.PINNED_WEBSITE_URLS]===void 0?m.PINNED_WEBSITE_URLS:yr(t[s.PINNED_WEBSITE_URLS]),[s.ENABLED_BY_DEFAULT]:Me(t[s.ENABLED_BY_DEFAULT]),[s.ENABLED_FOR]:t[s.ENABLED_FOR]===void 0?Pt(r):vt(t[s.ENABLED_FOR]),[s.DISABLED_FOR]:t[s.DISABLED_FOR]===void 0?m.DISABLED_FOR:L(t[s.DISABLED_FOR]),[s.SITE_PROFILES]:cu(t[s.SITE_PROFILES],a,e,o),[s.CUSTOM_FONT_LIST]:a,[s.GOOGLE_FONTS_ENABLED]:e,[s.SYSTEM_FONTS_ENABLED]:o,[s.TEXT_STROKE]:l,[s.UI_LANGUAGE]:er(t[s.UI_LANGUAGE]),[s.RTL_ENABLED]:t[s.RTL_ENABLED]!==!1,[s.RTL_SITE_SETTINGS]:Pe(t[s.RTL_SITE_SETTINGS]),[s.CONTEXT_MENUS_ENABLED]:t[s.CONTEXT_MENUS_ENABLED]===!0,[s.SYNC_SETTINGS]:t[s.SYNC_SETTINGS]!==!1}}var Zg=qe*eo,td=Math.ceil(it/3)*4+4,ed=Math.ceil(Xe/3)*4+2*1024*1024,uu=[s.EXTENSION_ENABLED,s.SELECTED_FONT,s.WEBSITE_LIST,s.PINNED_WEBSITE_URLS,s.ENABLED_BY_DEFAULT,s.ENABLED_FOR,s.DISABLED_FOR,s.SITE_PROFILES,s.CUSTOM_FONT_LIST,s.GOOGLE_FONTS_ENABLED,s.SYSTEM_FONTS_ENABLED,s.TEXT_STROKE,s.UI_LANGUAGE,s.RTL_ENABLED,s.RTL_SITE_SETTINGS,s.CONTEXT_MENUS_ENABLED,s.SYNC_SETTINGS],fu=[s.TEXT_STROKE_ENABLED];function aa(t,e){return Object.getOwnPropertyDescriptor(t,e)!==void 0}function ia(t){return uu.includes(t)}function mu(t){return ia(t)||fu.includes(t)}function ye(){return{[s.EXTENSION_ENABLED]:m.EXTENSION_ENABLED,[s.SELECTED_FONT]:m.SELECTED_FONT,[s.WEBSITE_LIST]:m.WEBSITE_LIST,[s.PINNED_WEBSITE_URLS]:m.PINNED_WEBSITE_URLS,[s.ENABLED_BY_DEFAULT]:m.ENABLED_BY_DEFAULT,[s.ENABLED_FOR]:m.ENABLED_FOR,[s.DISABLED_FOR]:m.DISABLED_FOR,[s.SITE_PROFILES]:m.SITE_PROFILES,[s.CUSTOM_FONT_LIST]:m.CUSTOM_FONT_LIST,[s.GOOGLE_FONTS_ENABLED]:m.GOOGLE_FONTS_ENABLED,[s.SYSTEM_FONTS_ENABLED]:m.SYSTEM_FONTS_ENABLED,[s.TEXT_STROKE]:m.TEXT_STROKE,[s.UI_LANGUAGE]:m.UI_LANGUAGE,[s.RTL_ENABLED]:m.RTL_ENABLED,[s.RTL_SITE_SETTINGS]:m.RTL_SITE_SETTINGS,[s.CONTEXT_MENUS_ENABLED]:m.CONTEXT_MENUS_ENABLED,[s.SYNC_SETTINGS]:m.SYNC_SETTINGS}}async function ho(t){let n={...ye()},o=0,r=0;for(let[a,i]of Object.entries(t)){if(!mu(a)){r+=1;continue}n[a]=i,ia(a)&&(o+=1)}return aa(t,s.TEXT_STROKE_ENABLED)&&!aa(t,s.TEXT_STROKE)&&delete n[s.TEXT_STROKE],{ignoredKeyCount:r,importedKeyCount:o,settings:await P(n)}}async function sa(){return P(ye())}var Xt={TOGGLE_EXTENSION:"toggle",TOGGLE_SITE:"addSite"},gu=75,la=!1,wo=null,Eo=new Map;function du(){return typeof chrome>"u"?null:chrome.commands??null}function pu(){return typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes("firefox")}async function bo(t,e={}){if(!wo){return}try{await wo(t,e)}catch(n){}}function ca(t){wo=t}function Fu(t,e){let n=Eo.get(t);n&&clearTimeout(n),Eo.set(t,setTimeout(()=>{Eo.delete(t),bo(t,{tab:e})},gu))}function ua(){let t=du();if(!t?.onCommand||la)return;let e=()=>{t.onCommand.addListener((n,o)=>{Fu(n,o)})};if(la=!0,pu()){setTimeout(e);return}e()}xt();bt();C();bt();C();Et();bt();function hu(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function _o(t){try{let e=new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(t)?t:`https://${t}`);return`^https?://${hu(e.host.toLowerCase())}/?.*$`}catch{return t}}function da(t){return{[s.EXTENSION_ENABLED]:t[s.EXTENSION_ENABLED]===!1}}function pa(t,e){let n=rn(e),o={disabledFor:n.disabledFor,enabledByDefault:n.enabledByDefault,enabledFor:n.enabledFor},r=!Be(t,o),a=n.websiteList.findIndex(u=>an(t,[u])!==null),i=dr(t,o,r),l=Ge(t),c=a===-1&&r&&l?[...n.websiteList,{url:l,regex:_o(t),isActive:!0}]:n.websiteList.map((u,d)=>d===a?{...u,...l?{url:l}:{},regex:_o(t),isActive:r}:u);return{[s.DISABLED_FOR]:i.disabledFor,[s.ENABLED_FOR]:i.enabledFor,[s.WEBSITE_LIST]:c}}C();var Fa="ui/options/index.html";function Eu(t){return t?.section?`${Fa}#${t.section}`:Fa}async function wu(t){await chrome.tabs.create({url:chrome.runtime.getURL(Eu(t))})}async function ya(t){try{if(!t?.section&&typeof chrome.runtime.openOptionsPage=="function"){await chrome.runtime.openOptionsPage();return}}catch{}try{await wu(t)}catch(e){}}Et();C();It();C();on();var _t=[s.EXTENSION_ENABLED,s.SELECTED_FONT,s.WEBSITE_LIST,s.PINNED_WEBSITE_URLS,s.ENABLED_BY_DEFAULT,s.ENABLED_FOR,s.DISABLED_FOR,s.SITE_PROFILES,s.GOOGLE_FONTS_ENABLED,s.TEXT_STROKE,s.UI_LANGUAGE,s.RTL_ENABLED,s.RTL_SITE_SETTINGS,s.CONTEXT_MENUS_ENABLED,s.SYNC_SETTINGS],Cd=[s.CUSTOM_FONT_LIST];var Y="__fontara_settings_updated_at__",V="__fontara_settings_revision__";function bu(t,e){return Object.getOwnPropertyDescriptor(t,e)!==void 0}function _u(t){return _t.includes(t)}function A(t){let e=t[Y];return typeof e=="number"&&Number.isFinite(e)&&e>0?e:0}function To(t){let e=t[V];return typeof e=="number"&&Number.isSafeInteger(e)&&e>=0?e:0}function ha(t=Date.now()){return{[Y]:t}}function Ea(t){return new Set(t.map(e=>e.value))}function Tu(t,e){return nt(t).map(n=>{if(!n.font||!e(n.font))return n;let{font:o,...r}=n;return r}).filter(pt)}function Cu(t,e,n){let o=new Map(t.map(r=>[r.pattern,r]));for(let r of e){if(!r.font||!n(r.font))continue;let a={...r,...o.get(r.pattern),font:r.font};r.enabled===!1&&(a.enabled=!1),o.set(r.pattern,a)}return Array.from(o.values()).filter(pt)}function qt(){return{[s.EXTENSION_ENABLED]:m.EXTENSION_ENABLED,[s.SELECTED_FONT]:m.SELECTED_FONT,[s.WEBSITE_LIST]:m.WEBSITE_LIST,[s.PINNED_WEBSITE_URLS]:m.PINNED_WEBSITE_URLS,[s.ENABLED_BY_DEFAULT]:m.ENABLED_BY_DEFAULT,[s.ENABLED_FOR]:m.ENABLED_FOR,[s.DISABLED_FOR]:m.DISABLED_FOR,[s.SITE_PROFILES]:m.SITE_PROFILES,[s.GOOGLE_FONTS_ENABLED]:m.GOOGLE_FONTS_ENABLED,[s.SYSTEM_FONTS_ENABLED]:m.SYSTEM_FONTS_ENABLED,[s.TEXT_STROKE]:m.TEXT_STROKE,[s.UI_LANGUAGE]:m.UI_LANGUAGE,[s.RTL_ENABLED]:m.RTL_ENABLED,[s.RTL_SITE_SETTINGS]:m.RTL_SITE_SETTINGS,[s.CONTEXT_MENUS_ENABLED]:m.CONTEXT_MENUS_ENABLED,[s.SYNC_SETTINGS]:m.SYNC_SETTINGS}}function sn(){return{...Object.fromEntries(_t.map(t=>[t,void 0])),[Y]:void 0,[V]:void 0}}function Tt(){return{...sn(),[s.SYSTEM_FONTS_ENABLED]:void 0,[s.CUSTOM_FONT_LIST]:void 0,[at]:void 0,[s.TEXT_STROKE_ENABLED]:void 0}}function Sa(t){let e=qt(),n={};for(let o of _t)n[o]=bu(t,o)?t[o]:e[o];return n}function Co(t){return _t.some(e=>e!==s.SYNC_SETTINGS&&t[e]!==void 0)}async function wa(t){let e=await Fe(t[s.CUSTOM_FONT_LIST]),n=Ea(e),o=typeof t[s.SELECTED_FONT]=="string"&&(n.has(t[s.SELECTED_FONT])||$t(t[s.SELECTED_FONT])),r={...qt(),...Sa(t),[s.CUSTOM_FONT_LIST]:m.CUSTOM_FONT_LIST};o&&(r[s.SELECTED_FONT]=m.SELECTED_FONT),r[s.SITE_PROFILES]=Tu(r[s.SITE_PROFILES],c=>n.has(c)||$t(c));let a=Sa(await P(r)),i=A(t),l=To(t);return o&&delete a[s.SELECTED_FONT],i>0&&(a[Y]=i),l>0&&(a[V]=l),a}async function Ao(t,e){let n=await Fe(t[s.CUSTOM_FONT_LIST]),o=Ea(n),r=await P({...qt(),...Object.fromEntries(Object.entries(e).filter(([F])=>_u(F))),[s.CUSTOM_FONT_LIST]:n}),a=await P({...qt(),...t,[s.CUSTOM_FONT_LIST]:n}),i=a[s.SELECTED_FONT],l=a[s.SYSTEM_FONTS_ENABLED]===!0,c=F=>o.has(F)||$t(F),u={...r,[s.SYSTEM_FONTS_ENABLED]:l,[s.CUSTOM_FONT_LIST]:n};c(i)&&(u[s.SELECTED_FONT]=i),u[s.SITE_PROFILES]=Cu(r[s.SITE_PROFILES],a[s.SITE_PROFILES],c);let d=Math.max(A(t),A(e));d>0&&(u[Y]=d);let f=Math.max(To(t),To(e));return f>0&&(u[V]=f),u}Et();var K=null,N=0,ba=Promise.resolve();function Au(t,e){return JSON.stringify(t)===JSON.stringify(e)}function Oo(t,e){let n={};for(let[o,r]of Object.entries(e))Au(t[o],r)||(n[o]=r);return n}function Ta(t){return typeof t=="number"&&Number.isSafeInteger(t)&&t>=0?t:0}async function Lo(){let t=await I({...ye(),[V]:0}),e=Ta(t[V]);return delete t[V],{revision:e,settings:await P(t)}}async function Ou(){let t=await Lo();return N=t.revision,t.settings}function Ee(t){let e=ba.then(t,t);return ba=e.then(()=>{},()=>{}),e}function he(t,e){return Object.getOwnPropertyDescriptor(t,e)!==void 0}function _a(t,e){return he(t,"newValue")?t.newValue:e}function ln(){K=null,N=0}function we(t){return Ee(async()=>{try{return await t()}finally{ln()}})}async function Ca(){return K||(K=await Ou()),K}function lt(){return Ee(Ca)}function ct(){return Ee(async()=>({settings:await Ca(),revision:N}))}async function No(t){return Ee(async()=>{let e=await Lo(),n=e.settings,o=await P({...n,...t}),r=Oo(n,o);he(t,s.CUSTOM_FONT_LIST)&&!he(r,s.CUSTOM_FONT_LIST)&&(r[s.CUSTOM_FONT_LIST]=o[s.CUSTOM_FONT_LIST]);let a=Object.keys(r).length>0,i=a?Math.max(N,e.revision)+1:Math.max(N,e.revision),l=a?ha():{};if(K=o,N=i,a)try{await j({...r,...l,[V]:i})}catch(c){throw K=n,N=e.revision,c}return{revision:i,settings:o}})}async function Aa(t){return(await No(t)).settings}async function Oa(t){return Ee(async()=>{let e=ye(),n=Object.keys(t).some(f=>he(e,f)),o=t[V],r=o?Ta(_a(o,N)):N,a=K;if(o&&r<N)return null;if(!n)return N=Math.max(N,r),null;if(!a){let f=await Lo();return K=f.settings,N=f.revision,f.settings}let i={...a};for(let[f,F]of Object.entries(t))he(e,f)&&(i[f]=_a(F,e[f]));let l=await P(i),c=Oo(a,l);if(Object.keys(c).length===0)return N=Math.max(N,r),null;let u=Oo(i,l),d=Math.max(N,r)+1;return K=l,N=d,await j({...u,[V]:d}),K})}var cn="fontara-top",Ra="contextMenus",Jt={OPEN_OPTIONS:"openOptions",TOGGLE_EXTENSION:Xt.TOGGLE_EXTENSION,TOGGLE_SITE:Xt.TOGGLE_SITE},La=!1;function mn(){return typeof chrome>"u"?null:chrome.contextMenus??null}function va(){return typeof chrome>"u"?null:chrome.permissions??null}function Pa(){let t=chrome.runtime?.lastError;return t?new Error(t.message):null}function Lu(t,e){try{return chrome.i18n?.getMessage(t)||e}catch{return e}}function un(t,e){return Lu(t,e)}function Nu(){let t=va();return t?.contains?new Promise(e=>{t.contains({permissions:[Ra]},e)}):Promise.resolve(!0)}function fn(t){let e=mn();return e?new Promise((n,o)=>{e.create(t,()=>{let r=Pa();if(r){o(r);return}n()})}):Promise.resolve()}function Ro(){let t=mn();return t?new Promise(e=>{t.removeAll(()=>{Pa(),e()})}):Promise.resolve()}function xa(){let t=mn();!t||La||(t.onClicked.addListener((e,n)=>{vu(e.menuItemId,e.frameUrl||e.pageUrl||n?.url)}),La=!0)}async function Ru(){if(mn()){if(!await Nu()){return}xa(),await Ro(),await fn({id:cn,title:un("contextMenuTitle","FontAra")}),await fn({id:Jt.TOGGLE_EXTENSION,parentId:cn,title:un("contextMenuToggleEverywhere","Toggle everywhere")}),await fn({id:Jt.TOGGLE_SITE,parentId:cn,title:un("contextMenuToggleSite","Toggle for this site")}),await fn({id:Jt.OPEN_OPTIONS,parentId:cn,title:un("contextMenuOpenSettings","Open settings")})}}async function vu(t,e){try{switch(t){case Jt.TOGGLE_EXTENSION:case Jt.TOGGLE_SITE:await bo(t,{url:e});break;case Jt.OPEN_OPTIONS:await ya();break}}catch(n){}}async function Na(){if((await I({[s.CONTEXT_MENUS_ENABLED]:m.CONTEXT_MENUS_ENABLED}))[s.CONTEXT_MENUS_ENABLED]===!0){await Ru();return}await Ro()}function ka(){xa(),Na().catch(e=>{}),Xr({[s.CONTEXT_MENUS_ENABLED]:()=>Na()}),va()?.onRemoved?.addListener(e=>{e?.permissions?.includes(Ra)&&(Ro(),Aa({[s.CONTEXT_MENUS_ENABLED]:!1}).catch(n=>{}))})}C();Gt();It();C();function Ia(t,e,n,o){let r=t.filter(i=>i.value!==e),a={[s.CUSTOM_FONT_LIST]:r};return n===e&&(a[s.SELECTED_FONT]=m.SELECTED_FONT),o&&(a[s.SITE_PROFILES]=Fr(o,i=>i===e)),a}function $(t){let e=t[s.CUSTOM_FONT_LIST];return Array.isArray(e)?e:[]}function Pu(t){let e=Mt({...t,revision:1});if(!e)throw new Error("invalid-custom-font-family");return e}function gn(t,e){return e.some(n=>n.value!==t.value&&n.displayName.localeCompare(t.displayName,void 0,{sensitivity:"accent"})===0)}function Ga(t,e){let n=e.find(r=>r.value===t.value&&r.revision===t.revision);if(!n||n.faces.length!==t.faces.length)return!1;let o=new Map(n.faces.map(r=>[r.id,r.fileHash]));return t.faces.every(r=>o.get(r.id)===r.fileHash)}function xu(t,e){return t.length===e.length&&t.every(n=>Ga(n,e))}function Ma(t,e){return Object.getOwnPropertyDescriptor(t,e)!==void 0}function vo(t,e){if(Object.is(t,e))return!0;if(Array.isArray(t)||Array.isArray(e))return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((i,l)=>vo(i,e[l]));if(!t||!e||typeof t!="object"||typeof e!="object")return!1;let n=t,o=e,r=Object.keys(n),a=Object.keys(o);return r.length===a.length&&r.every(i=>Ma(o,i)&&vo(n[i],o[i]))}function ku(t,e){return Object.entries(t).every(([n,o])=>Ma(e,n)&&vo(o,e[n]))}var dn=class{constructor(e){this.callbacks=e;this.transactions=new $e;this.operationQueue=Promise.resolve()}enqueue(e){let n=this.operationQueue.then(e,e);return this.operationQueue=n.then(()=>{},()=>{}),n}initialize(){return this.enqueue(async()=>{let e=$(await this.callbacks.readSettings());await this.transactions.finalizePublished(e),await this.transactions.collectGarbage(Date.now())})}collectUnusedAfterCatalogReplacement(){return this.enqueue(async()=>{let e=$(await this.callbacks.readSettings());await this.transactions.finalizePublished(e),await zr(),await ro(e)})}begin(e,n="append"){return this.enqueue(async()=>{let o=Pu(e),r=$(await this.callbacks.readSettings());if(gn(o,n==="replace-library"?[]:r))throw new Error("custom-font-family-name-duplicate");return this.transactions.begin(o,r,n)})}validateLibrary(e){return this.enqueue(async()=>{let n=[],o=new Set;for(let r of e){let a=Mt(r);if(!a||o.has(a.value))throw new Error("invalid-custom-font-library");if(gn(a,n))throw new Error("custom-font-family-name-duplicate");Qe(a,n);for(let i of a.faces){let l=await Hr(i.fileHash);if(!l||l.byteLength!==i.byteLength||await z(l)!==i.fileHash||i.validation!=="failed"&&!yt(i.format,l))throw new Error("invalid-custom-font-library-face")}o.add(a.value),n.push(a)}})}putFace(e,n,o){return this.enqueue(()=>this.transactions.putFace(e,n,o))}commit(e){return this.enqueue(async()=>{let n=await this.callbacks.readSettings(),o=$(n),r=await this.transactions.commit(e,o);if(gn(r,o))throw await this.transactions.abort(e),await ht(r.faces.map(c=>c.fileHash),o),new Error("custom-font-family-name-duplicate");let a=o.some(c=>c.value===r.value)?o.map(c=>c.value===r.value?r:c):[...o,r],i=a;try{await this.callbacks.writeSettings({[s.CUSTOM_FONT_LIST]:a})}catch(c){let u=null;try{u=$(await this.callbacks.readSettings())}catch{throw c}if(!Ga(r,u))throw await this.transactions.abort(e).catch(()=>null),await ht(r.faces.map(d=>d.fileHash),o).catch(()=>{}),c;i=u}await this.transactions.finalize(e).catch(()=>{});let l=o.find(c=>c.value===r.value);return l&&await ht(l.faces.map(c=>c.fileHash),i).catch(()=>{}),r})}commitBatch(e,n){return this.enqueue(async()=>{let o=await this.callbacks.readSettings(),r=$(o),a=$(n),i=[],l=!1,c=null,u=i;try{for(let f of e){let F=await this.transactions.commit(f,i,r);if(gn(F,i))throw new Error("custom-font-family-name-duplicate");i.push(F)}let d=new Set(a.map(f=>f.value));if(a.length!==i.length||i.some(f=>!d.has(f.value)))throw new Error("custom-font-import-batch-mismatch");c={...n,[s.CUSTOM_FONT_LIST]:i},l=!0,await this.callbacks.writeSettings(c)}catch(d){if(l&&c){let f;try{f=await this.callbacks.readSettings()}catch{throw d}let F=$(f);if(ku(c,f))u=F;else{if(xu(i,F)&&e.length>0)throw d;l=!1}}if(!l){for(let f of e)await this.transactions.abort(f).catch(()=>{});throw await ht(i.flatMap(f=>f.faces.map(F=>F.fileHash)),r),d}}for(let d of e)await this.transactions.finalize(d).catch(()=>{});return await ro(u).catch(()=>{}),i})}abort(e){return this.enqueue(async()=>{let n=await this.transactions.abort(e);if(!n?.promoted)return;let o=$(await this.callbacks.readSettings());await ht(n.family.faces.map(r=>r.fileHash),o)})}delete(e){return this.enqueue(async()=>{let n=await this.callbacks.readSettings(),o=$(n);if(!o.some(a=>a.value===e))return;let r=Ia(o,e,n[s.SELECTED_FONT],n[s.SITE_PROFILES]);await this.callbacks.writeSettings(r),await ht(o.find(a=>a.value===e)?.faces.map(a=>a.fileHash)??[],r[s.CUSTOM_FONT_LIST])})}};function Iu(t){if(!t||typeof t!="object")return!1;let e=t;return typeof e.familyValue=="string"&&typeof e.familyRevision=="number"&&Array.isArray(e.loadedFaceIds)&&e.loadedFaceIds.every(n=>typeof n=="string")&&Array.isArray(e.failedFaceIds)&&e.failedFaceIds.every(n=>typeof n=="string")}var Ua=!1;function Ba(){Ua||(chrome.runtime.onMessage.addListener((t,e,n)=>(!t||typeof t!="object"||t.type!=="fontara-cs-bg-custom-font-load-result"||typeof e.tab?.id!="number"||!Iu(t.data)||n({data:!0}),!1)),Ua=!0)}bt();function W(t){if(typeof t!="string"||t.length===0)return null;try{let e=new URL(t);return e.protocol!=="http:"&&e.protocol!=="https:"?null:(e.username="",e.password="",e.search="",e.hash="",e.hostname=e.hostname.toLowerCase(),e.href)}catch{return null}}function Da(){return typeof chrome>"u"||!chrome.tabs?.query?Promise.resolve(null):new Promise(t=>{chrome.tabs.query({active:!0,currentWindow:!0},e=>{t(e[0]??null)})})}function Uu(){return typeof chrome>"u"||!chrome.commands?.getAll?Promise.resolve([]):new Promise(t=>{chrome.commands.getAll(e=>{t(e??[])})})}async function za(t){let e=W(t.url);if(e)return e;let n=W(t.tab?.url);if(n)return n;let o=await Da();return W(o?.url)}async function Ha(){return(await Uu()).reduce((e,n)=>((n.name==="toggle"||n.name==="addSite")&&(e[n.name]=n.shortcut||""),e),{})}async function Ya(t){let e=await Da(),n=W(e?.url),o=n!==null,r=n?Se(n,t).active:!1;return{id:typeof e?.id=="number"?e.id:null,isActive:r,isSupported:o,url:n}}C();be();Go();Bo();be();de();var lf=512*1024,ii=64,cf=5*1024*1024,si=12*1024*1024,uf=8e3,ff=15e3,mf=6e4,gf=4,ci="https://fonts.googleapis.com/css2",df="https://fonts.gstatic.com",pf=new Set(["application/font-woff2","application/x-font-woff2","font/woff2"]),Ff=new Set(["font-display","font-family","font-stretch","font-style","font-weight","src","unicode-range"]),yf=/^(?:regular|italic|(?:100|200|300|400|500|600|700|800|900)(?:italic)?)$/,Sf=new Set(["condensed","expanded","extra-condensed","extra-expanded","normal","semi-condensed","semi-expanded","ultra-condensed","ultra-expanded"]);function y(t,e,n){throw new S(t,e,n)}function Do(t,e){return t===void 0?e:((!Number.isFinite(t)||t<0)&&y("google-font-invalid-request",{timeoutMs:String(t)}),t)}function li(t,e){let n=Math.floor(t-Date.now());return n<=0&&y("google-font-request-timeout",{stage:"family",timeoutMs:e}),Math.min(e,n)}function hf(t){(!t||typeof t.family!="string")&&y("google-font-invalid-request");let e=t.family.trim(),n=t.variants??["regular"];(!wt(e)||!Array.isArray(n)||n.length===0||n.length>32||!n.every(a=>typeof a=="string"&&yf.test(a)))&&y("google-font-invalid-request");let o=mo(e,n),r=new URL(o);return(r.origin!==new URL(ci).origin||r.pathname!=="/css2"||r.username!==""||r.password!==""||r.hash!=="")&&y("google-font-invalid-request"),{family:e,requestUrl:o}}function Ef(t,e){return t===void 0?e:(t!==e&&y("google-font-invalid-request",{reason:"request-url-mismatch"}),t)}function ui(t){return(t.headers.get("content-type")??"").split(";",1)[0].trim().toLowerCase()}function wf(t,e,n){let o=t.headers.get("content-length");if(o===null)return;/^\d+$/.test(o)||y(n==="google-font-css-too-large"?"google-font-css-response-invalid":"google-font-asset-response-invalid",{reason:"invalid-content-length"});let r=Number(o);Number.isSafeInteger(r)||y(n==="google-font-css-too-large"?"google-font-css-response-invalid":"google-font-asset-response-invalid",{reason:"invalid-content-length"}),r>e&&y(n,{byteLength:r,maxBytes:e})}async function fi(t,e,n){if(wf(t,e,n),!t.body){let c=new Uint8Array(await t.arrayBuffer());return c.byteLength>e&&y(n,{byteLength:c.byteLength,maxBytes:e}),c}let o=t.body.getReader(),r=[],a=0;try{for(;;){let c=await o.read();if(c.done)break;let u=c.value;a+=u.byteLength,a>e&&(await o.cancel(),y(n,{byteLength:a,maxBytes:e})),r.push(u)}}finally{o.releaseLock()}let i=new Uint8Array(a),l=0;for(let c of r)i.set(c,l),l+=c.byteLength;return i}function bf(t){return typeof DOMException<"u"&&t instanceof DOMException&&t.name==="AbortError"||t instanceof Error&&t.name==="AbortError"}async function mi(t,e,n,o,r,a){let i=new AbortController,l,c=!1,u,d=new Promise((F,w)=>{if(u=()=>{i.abort(),w(new S("google-font-network-failed",{reason:"request-cancelled",stage:o}))},r?.aborted){u();return}r?.addEventListener("abort",u,{once:!0})}),f=new Promise((F,w)=>{l=setTimeout(()=>{c=!0,i.abort(),w(new S("google-font-request-timeout",{stage:o,timeoutMs:n}))},n)});try{let F=t(e,{cache:"no-store",credentials:"omit",redirect:"error",referrerPolicy:"no-referrer",signal:i.signal}).then(a);return await Promise.race([F,f,d])}catch(F){if(F instanceof S)throw F;return c||bf(F)?y("google-font-request-timeout",{stage:o,timeoutMs:n},F):y("google-font-network-failed",{stage:o},F)}finally{l!==void 0&&clearTimeout(l),u&&r?.removeEventListener("abort",u)}}function gi(t,e){(t.redirected||t.url!==e)&&y(e.startsWith(ci)?"google-font-css-response-invalid":"google-font-asset-response-invalid",{reason:"unexpected-final-url"})}function _f(t){let e="",n=0;for(;n<t.length;){let o=t.indexOf("/*",n);if(o===-1)return e+t.slice(n);e+=t.slice(n,o);let r=t.indexOf("*/",o+2);r===-1&&y("google-font-css-invalid",{reason:"unterminated-comment"}),n=r+2}return e}function Tf(t){let e=t.trim();if(e.length<2)return null;let n=e[0];if(n!=='"'&&n!=="'"||e[e.length-1]!==n)return null;let o=e.slice(1,-1),r="";for(let a=0;a<o.length;a+=1){let i=o[a];if(i===`
`||i==="\r"||i==="\f")return null;if(i!=="\\"){r+=i;continue}if(a+=1,a>=o.length)return null;let l=o[a];if(/[0-9a-f]/i.test(l)){let c=l;for(;c.length<6&&/[0-9a-f]/i.test(o[a+1]??"");)a+=1,c+=o[a];/\s/.test(o[a+1]??"")&&(a+=1);let u=Number.parseInt(c,16);if(u===0||u>1114111)return null;r+=String.fromCodePoint(u);continue}r+=l}return r}function Cf(t){let e=/^url\(\s*(?:"([^"\\]*)"|'([^'\\]*)'|([^\s"'()\\]+))\s*\)\s+format\(\s*(?:"woff2"|'woff2'|woff2)\s*\)$/i.exec(t.trim()),n=e?.[1]??e?.[2]??e?.[3];n||y("google-font-css-invalid",{reason:"invalid-src"});let o;try{o=new URL(n)}catch(r){y("google-font-asset-url-invalid",{reason:"malformed-url"},r)}return(o.origin!==df||o.username!==""||o.password!==""||o.port!==""||o.hash!==""||!o.pathname.endsWith(".woff2")||o.toString()!==n)&&y("google-font-asset-url-invalid"),n}function Af(t){let e=(t??"normal").trim().toLowerCase();if(e==="normal"||e==="italic"||e==="oblique")return e;y("google-font-css-invalid",{reason:"invalid-style"})}function Of(t){let e=(t??"400").trim().toLowerCase();if(e==="normal")return"400";if(e==="bold")return"700";let n=/^(\d{1,4})(?:\s+(\d{1,4}))?$/.exec(e),o=Number(n?.[1]),r=Number(n?.[2]??n?.[1]);return(!n||!Number.isInteger(o)||!Number.isInteger(r)||o<1||r>1e3||o>r)&&y("google-font-css-invalid",{reason:"invalid-weight"}),o===r?String(o):`${o} ${r}`}function Lf(t){let e=(t??"normal").trim().toLowerCase();if(Sf.has(e))return e;let n=/^(\d+(?:\.\d+)?)%(?:\s+(\d+(?:\.\d+)?)%)?$/.exec(e),o=Number(n?.[1]),r=Number(n?.[2]??n?.[1]);return(!n||!Number.isFinite(o)||!Number.isFinite(r)||o<=0||r>1e3||o>r)&&y("google-font-css-invalid",{reason:"invalid-stretch"}),o===r?`${o}%`:`${o}% ${r}%`}function Nf(t){if(t===void 0)return null;t.length>16384&&y("google-font-css-invalid",{reason:"invalid-unicode-range"});let e=t.split(",").map(n=>n.trim().toUpperCase());(e.length===0||e.length>256||e.some(n=>!n))&&y("google-font-css-invalid",{reason:"invalid-unicode-range"});for(let n of e){let o=/^U\+([0-9A-F]{0,5})(\?{1,6})$/.exec(n);if(o&&o[1].length+o[2].length<=6)continue;let r=/^U\+([0-9A-F]{1,6})(?:-([0-9A-F]{1,6}))?$/.exec(n),a=Number.parseInt(r?.[1]??"",16),i=Number.parseInt(r?.[2]??r?.[1]??"",16);(!r||!Number.isFinite(a)||!Number.isFinite(i)||a>i||i>1114111)&&y("google-font-css-invalid",{reason:"invalid-unicode-range"})}return e.join(", ")}function Rf(t,e){let n=new Map;for(let i of t.split(";")){if(!i.trim())continue;let l=i.indexOf(":");l<=0&&y("google-font-css-invalid",{reason:"invalid-declaration"});let c=i.slice(0,l).trim().toLowerCase(),u=i.slice(l+1).trim();(!Ff.has(c)||!u||n.has(c)||/[{}<>]/.test(u)||/(?:@import|expression\s*\(|javascript:)/i.test(u))&&y("google-font-css-invalid",{reason:"unsafe-declaration"}),n.set(c,u)}Tf(n.get("font-family")??"")!==e&&y("google-font-css-invalid",{reason:"unexpected-family"});let r=n.get("font-display");r!==void 0&&!/^(?:auto|block|fallback|optional|swap)$/i.test(r.trim())&&y("google-font-css-invalid",{reason:"invalid-display"});let a=n.get("src");return a||y("google-font-css-invalid",{reason:"missing-src"}),{sourceUrl:Cf(a),stretch:Lf(n.get("font-stretch")),style:Af(n.get("font-style")),unicodeRange:Nf(n.get("unicode-range")),weight:Of(n.get("font-weight"))}}function vf(t,e){wt(e)||y("google-font-invalid-request");let n=_f(t),o=[],r=/@font-face\s*{([^{}]*)}/giy,a=0;for(;a<n.length;){for(;/\s/.test(n[a]??"");)a+=1;if(a>=n.length)break;r.lastIndex=a;let i=r.exec(n);i||y("google-font-css-invalid",{reason:"unexpected-css"}),o.push(Rf(i[1],e)),o.length>ii&&y("google-font-face-count-limit",{faceCount:o.length,maxFaces:ii}),a=r.lastIndex}return o.length===0&&y("google-font-css-invalid",{reason:"missing-faces"}),o}async function zo(t){let e=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n),o=>o.toString(16).padStart(2,"0")).join("")}function Pf(t){return t.byteLength>=4&&t[0]===119&&t[1]===79&&t[2]===70&&t[3]===50}async function xf(t,e,n,o){return mi(n,t,e,"css",o,async r=>(r.ok||y("google-font-css-request-failed",{status:r.status}),gi(r,t),ui(r)!=="text/css"&&y("google-font-css-response-invalid",{reason:"invalid-content-type"}),fi(r,lf,"google-font-css-too-large")))}async function kf(t,e,n,o){let r=await mi(n,t,e,"asset",o,async a=>(a.ok||y("google-font-asset-request-failed",{status:a.status}),gi(a,t),pf.has(ui(a))||y("google-font-asset-response-invalid",{reason:"invalid-content-type"}),fi(a,cf,"google-font-asset-too-large")));return Pf(r)||y("google-font-asset-invalid",{reason:"invalid-signature"}),{bytes:r,hash:await zo(r)}}function If(t){try{return new TextDecoder("utf-8",{fatal:!0}).decode(t)}catch(e){y("google-font-css-invalid",{reason:"invalid-utf8"},e)}}async function Uf(t){let e=JSON.stringify([t.sourceUrl,t.style,t.weight,t.stretch,t.unicodeRange]);return`google-${(await zo(new TextEncoder().encode(e))).slice(0,32)}`}async function di(t,e={}){let n=hf(t),o=Ef(e.requestUrl,n.requestUrl),r=Do(e.cssTimeoutMs,uf),a=Do(e.fontTimeoutMs,ff),i=Do(e.familyTimeoutMs,mf),l=Date.now()+i,c=e.fetch??globalThis.fetch;typeof c!="function"&&y("google-font-invalid-request",{reason:"fetch-unavailable"});let u=await xf(o,li(l,r),c,e.signal),d=await zo(u),f=vf(If(u),n.family),F=new Map,w=new Map,k=0,b=Array.from(new Set(f.map(B=>B.sourceUrl))),_=0,T=null;async function mt(){for(;_<b.length&&!T;){let B=b[_++];try{let g=await kf(B,li(l,a),c,e.signal);if(T)return;F.set(B,{byteLength:g.bytes.byteLength,hash:g.hash}),w.has(g.hash)||(k+=g.bytes.byteLength,k>si&&y("google-font-family-size-limit",{maxBytes:si,totalBytes:k}),w.set(g.hash,g.bytes))}catch(g){T=g}}}if(await Promise.all(Array.from({length:Math.min(gf,b.length)},()=>mt())),T)throw T;let le=[],Nt=new Set;for(let B of f){let g=F.get(B.sourceUrl);g||y("google-font-asset-invalid",{reason:"missing-downloaded-asset"});let E=await Uf(B);Nt.has(E)&&y("google-font-css-invalid",{reason:"duplicate-face"}),Nt.add(E),le.push({...B,assetHash:g.hash,byteLength:g.byteLength,id:E})}let ce=await Qt(n.family);return{assets:w,family:{cssHash:d,faces:le,fontFamily:n.family,key:ce,requestUrl:o,runtimeFamily:Va(d),totalBytes:k}}}var pi=720*60*60*1e3,x=class extends Error{constructor(e,n={}){super(e),this.name="BackgroundGoogleFontManagerError",this.code=e,n.cause!==void 0&&Object.defineProperty(this,"cause",{configurable:!0,value:n.cause})}},Gf={clearCache:ni,createFamilyKey:Qt,deleteFamily:ti,download:di,getLatest:wn,getStats:Za,hasNetworkConsent:wr,loadCatalog:ai,now:Date.now,prune:ei,publish:Ja,readAsset:Qa,recover:oi};function Ho(t){return t instanceof S&&t.code==="google-font-cache-corrupt"}function Mf(t,e){return t.trim().normalize("NFKC").toLocaleLowerCase("en-US")===e.trim().normalize("NFKC").toLocaleLowerCase("en-US")}function Bf(t){let e=[t[s.SELECTED_FONT]],n=t[s.SITE_PROFILES];if(Array.isArray(n))for(let o of n)o&&typeof o=="object"&&e.push(o.font);return e.filter(o=>H(o)!==null)}var bn=class{constructor(e){this.options=e;this.inFlight=new Map;this.cacheReadTasks=new Set;this.verifiedFamilies=new Set;this.verificationTasks=new Map;this.networkAbortController=new AbortController;this.networkPaused=!1;this.clearing=null;this.generation=0;this.dependencies={...Gf,...e.dependencies}}async initialize(){await this.clearing;try{await this.dependencies.getStats()}catch(o){if(!Ho(o))throw o;await this.dependencies.recover()}let e=await this.options.readSettings();e[s.GOOGLE_FONTS_ENABLED]===!0&&await this.hasNetworkConsentSafely()?this.resumeNetwork():this.cancelPendingNetwork();let n=await this.getProtectedFamilyKeys(e);try{await this.dependencies.prune({protectedFamilyKeys:n})}catch(o){if(!Ho(o))throw o;await this.dependencies.recover()}}async resolve(e,n={}){let o=this.generation;if(await this.clearing,o!==this.generation||(await this.options.readSettings())[s.GOOGLE_FONTS_ENABLED]!==!0)return null;let a=H(e);if(!a)return null;let i=await this.dependencies.createFamilyKey(a),l=await this.readLatestRecovering(i,o),c;try{c=await this.resolveCatalogFont(e)}catch(d){if(d instanceof x&&(d.code==="google-font-manager-selection-invalid"||d.code==="google-font-manager-selection-not-in-catalog"||d.code==="google-font-manager-catalog-unavailable"))return o===this.generation?l:null;throw d}if((!l||this.dependencies.now()-l.updatedAt>=pi)&&n.allowNetwork===!0&&!this.networkPaused){let d=this.generation;if(await this.hasNetworkConsentSafely()&&!this.networkPaused&&o===this.generation&&d===this.generation){let F=this.startNetworkPrepare(c,i,l!==null);F.catch(()=>{}),n.track?.(F)}}return o===this.generation?l:null}async prepare(e,n={}){let o=this.generation;if(await this.clearing,this.assertAdmissionGeneration(o),(await this.options.readSettings())[s.GOOGLE_FONTS_ENABLED]!==!0)throw new x("google-font-manager-feature-disabled");let a=await this.resolveCatalogFont(e),i;try{i=await this.dependencies.hasNetworkConsent()}catch(u){throw new x("google-font-manager-consent-unavailable",{cause:u})}if(!i)throw new x("google-font-manager-consent-required");if(this.networkPaused)throw new x("google-font-manager-consent-required");let l=await this.dependencies.createFamilyKey(a.family),c=await this.readLatestRecovering(l,o);return this.assertAdmissionGeneration(o),c&&n.force!==!0&&this.dependencies.now()-c.updatedAt<pi?c:this.startNetworkPrepare(a,l,c!==null)}assertAdmissionGeneration(e){if(e!==this.generation)throw new x("google-font-manager-cache-cleared")}async clear(){if(this.clearing)return this.clearing;let e=Array.from(this.inFlight.values(),r=>r.durable);this.abortPendingNetwork();let n=Array.from(this.cacheReadTasks);this.verifiedFamilies.clear(),this.verificationTasks.clear();let o=(async()=>{await Promise.allSettled([...e,...n]),await this.dependencies.clearCache()})().finally(()=>{this.clearing===o&&(this.clearing=null)});return this.clearing=o,o}cancelPendingNetwork(){this.networkPaused=!0,this.abortPendingNetwork()}abortPendingNetwork(){this.generation+=1,this.networkAbortController.abort(),this.networkAbortController=new AbortController,this.inFlight.clear()}resumeNetwork(){this.networkPaused=!1}getStats(){return this.dependencies.getStats()}async resolveCatalogFont(e){let n=H(e);if(!n)throw new x("google-font-manager-selection-invalid");let o;try{o=await this.dependencies.loadCatalog()}catch(a){throw new x("google-font-manager-catalog-unavailable",{cause:a})}let r=o.find(a=>Mf(a.family,n));if(!r)throw new x("google-font-manager-selection-not-in-catalog");return r}readLatestRecovering(e,n){let o=this.readLatestRecoveringAtGeneration(e,n);this.cacheReadTasks.add(o);let r=()=>{this.cacheReadTasks.delete(o)};return o.then(r,r),o}async readLatestRecoveringAtGeneration(e,n){if(n!==this.generation)return null;try{let o=await this.dependencies.getLatest(e,{touch:!1});return n!==this.generation||!o?null:(await this.verifyFamilyAssets(o),n===this.generation?o:null)}catch(o){if(n!==this.generation)return null;if(Ho(o))return await this.dependencies.recover(),this.verifiedFamilies.clear(),this.verificationTasks.clear(),null;if(o instanceof S&&o.code==="google-font-asset-invalid")return await this.dependencies.deleteFamily(e),this.forgetVerifiedFamily(e),null;if(o instanceof S&&o.code==="google-font-transaction-incomplete")return await this.dependencies.deleteFamily(e),this.forgetVerifiedFamily(e),null;throw o}}verificationKey(e){return`${e.key}:${e.revision}`}forgetVerifiedFamily(e){for(let n of this.verifiedFamilies)n.startsWith(`${e}:`)&&this.verifiedFamilies.delete(n);for(let n of this.verificationTasks.keys())n.startsWith(`${e}:`)&&this.verificationTasks.delete(n)}verifyFamilyAssets(e){let n=this.verificationKey(e);if(this.verifiedFamilies.has(n))return Promise.resolve();let o=this.verificationTasks.get(n);if(o)return o;let r=(async()=>{let a=new Map(e.faces.map(i=>[i.assetHash,i.byteLength]));for(let[i,l]of a)if(!await this.dependencies.readAsset(i,l))throw new S("google-font-transaction-incomplete",{assetHash:i});this.verifiedFamilies.add(n)})().finally(()=>{this.verificationTasks.get(n)===r&&this.verificationTasks.delete(n)});return this.verificationTasks.set(n,r),r}async hasNetworkConsentSafely(){try{return await this.dependencies.hasNetworkConsent()}catch{return!1}}startNetworkPrepare(e,n,o){let r=this.inFlight.get(n);if(r)return r.completion;let a=this.generation,i=this.networkAbortController.signal,l=this.downloadAndPublish(e,n,o,a,i),c=l.then(async u=>{try{await this.options.onFamilyReady?.(u)}catch{}if(a!==this.generation)throw new x("google-font-manager-cache-cleared");return u}).finally(()=>{this.inFlight.get(n)?.completion===c&&this.inFlight.delete(n)});return this.inFlight.set(n,{completion:c,durable:l}),c}async downloadAndPublish(e,n,o,r,a){let i=await this.dependencies.download(e,{signal:a});if(i.family.key!==n)throw new S("google-font-invalid-request",{reason:"family-key-mismatch"});if(r!==this.generation)throw new x("google-font-manager-cache-cleared");let l=await this.getProtectedFamilyKeys(await this.options.readSettings(),n);if(await this.dependencies.prune({maxFamilies:Math.max(0,Fn-(o?0:1)),maxTotalBytes:Math.max(0,pn-i.family.totalBytes),protectedFamilyKeys:l}),r!==this.generation)throw new x("google-font-manager-cache-cleared");let c=await this.dependencies.publish(i.family,i.assets);if(this.verifiedFamilies.add(this.verificationKey(c)),await this.dependencies.prune({protectedFamilyKeys:l}),r!==this.generation)throw new x("google-font-manager-cache-cleared");return c}async getProtectedFamilyKeys(e,n){let o=Bf(e).map(H).filter(a=>a!==null),r=await Promise.all(o.map(a=>this.dependencies.createFamilyKey(a)));return n&&r.push(n),new Set(r)}};bt();C();ie();async function Vf(){return(await chrome.tabs.query({active:!0,currentWindow:!0}))[0]??null}async function wi(t,e){try{return await chrome.action.setIcon({path:t,...typeof e=="number"?{tabId:e}:{}}),!0}catch{return!1}}function Wf(t){return/^https?:\/\//i.test(t)}async function Tn(t){let e=await Vf();await Vo(e?.url||"",t,typeof e?.id=="number"?e.id:null)}async function Vo(t,e,n){try{let o=Wf(t)?Se(t,e??await lt()).active:!1;!await wi(o?He.active:He.default,n)&&o&&await wi(He.default,n)}catch{}}function jf(t,e){return _n(t)&&e.frameId===0&&typeof e.url=="string"&&(t.type===J.DOCUMENT_CONNECT||t.type===J.DOCUMENT_RESUME||t.type===J.DOCUMENT_UPDATE)}function bi(){Tn(),chrome.tabs.onActivated.addListener(()=>{Tn()}),chrome.tabs.onUpdated.addListener((t,e)=>{e.url&&Vo(e.url,void 0,t)}),chrome.runtime.onMessage.addListener((t,e)=>(jf(t,e)&&Vo(e.url,void 0,typeof e.tab?.id=="number"?e.tab.id:null),!1))}ie();ie();var Kf=["ui/options/index.html","ui/popup/index.html"],R=null,_i=!1,Cn=new Map,se=new Map,$f=128;function Xf(t){return t instanceof Error?t.message:String(t)}function qf(t){try{return chrome.runtime.getURL(t)}catch{return null}}function Jf(t,e){return t===e||t.startsWith(`${e}?`)||t.startsWith(`${e}#`)}function Qf(t){return typeof t.url!="string"?!1:Kf.some(e=>{let n=qf(e);return n?Jf(t.url,n):!1})}async function Ti(t){if(!R)throw new Error("fontara-messenger-not-ready");switch(t.type){case h.GET_DATA:return R.collect();case h.SUBSCRIBE_TO_CHANGES:return R.collect();case h.UNSUBSCRIBE_FROM_CHANGES:return!0;case h.CHANGE_SETTINGS:return R.changeSettings(t.data.settings);case h.IMPORT_SETTINGS:return R.importSettings(t.data.settings);case h.RESET_SETTINGS:return R.resetSettings();case h.RUN_COMMAND:return await R.runCommand(t.data.command,{url:t.data.url}),!0;case h.CUSTOM_FONT_BEGIN:return R.beginCustomFontTransaction(t.data.family,t.data.mode);case h.CUSTOM_FONT_PUT_FACE:return await R.putCustomFontFace(t.data.transactionId,t.data.faceId,t.data.base64),!0;case h.CUSTOM_FONT_COMMIT:return R.commitCustomFontTransaction(t.data.transactionId);case h.CUSTOM_FONT_IMPORT_BATCH:return R.importCustomFontBatch(t.data.transactionIds,t.data.settings);case h.CUSTOM_FONT_ABORT:return await R.abortCustomFontTransaction(t.data.transactionId),!0;case h.CUSTOM_FONT_DELETE:return R.deleteCustomFont(t.data.familyValue);case h.GOOGLE_FONT_PREPARE:return R.prepareGoogleFont(t.data.selectedValue);case h.GOOGLE_FONT_CACHE_CLEAR:return R.clearGoogleFontCache();case h.GOOGLE_FONT_CACHE_STATS:return R.getGoogleFontCacheStats()}}function Zf(t){return!("data"in t)||!("clientMutationId"in t.data)?null:t.data.clientMutationId}function tm(t,e){if(se.set(t,e),se.size<=$f)return;let n=se.keys().next().value;typeof n=="string"&&se.delete(n)}function em(t,e){let n=Zf(t);return n?`${[e.id??"",e.url??"",e.tab?.id??"",e.frameId??"",e.documentId??""].join("\0")}\0${t.type}\0${n}`:null}function nm(t,e){let n=em(t,e);if(!n)return Ti(t);if(se.has(n))return Promise.resolve(se.get(n));let o=Cn.get(n);if(o)return o;let r=Ti(t).then(i=>(tm(n,i),i));Cn.set(n,r);let a=()=>{Cn.get(n)===r&&Cn.delete(n)};return r.then(a,a),r}function om(t,e,n){return!Yo(t)||!Qf(e)?!1:(nm(t,e).then(o=>n(Si(o))).catch(o=>n(hi(Xf(o)))),!0)}function Ci(t){R=t,!_i&&(chrome.runtime.onMessage.addListener(om),_i=!0)}function Ai(t){chrome.runtime.sendMessage(Ei(t),()=>{chrome.runtime.lastError})}C();Et();C();Et();async function Oi(t){let e=t[s.CUSTOM_FONT_LIST];if(!Array.isArray(e))return{changed:!1,values:t};if(!e.some(ge))return t[at]===Wt?{changed:!1,values:t}:(await j({[at]:Wt}),{changed:!0,values:{...t,[at]:Wt}});let o=[];for(let a of e){if(!ge(a)){o.push(a);continue}let i=await je(a);if(!i){o.push(a);continue}let l=i.faces[0],c=qn(a);c.byteLength>it?(l.validation="failed",await Vr(l,c)):await Yr(l,c),o.push(i)}let r={...t,[s.CUSTOM_FONT_LIST]:o,[at]:Wt};return await j({[s.CUSTOM_FONT_LIST]:o,[at]:Wt}),{changed:!0,values:r}}var rm=3e3,Ot=null,At=!1,Li=Promise.resolve();function Ni(t){let e=()=>we(t),n=Li.then(e,e);return Li=n.catch(()=>{}),n}function Le(t){return t!==!1}function Ri(t){let e=qt();return _t.some(n=>{if(n===s.SYNC_SETTINGS)return!1;let o=t[n];return o===void 0?!1:!jo(o,e[n])})}function jo(t,e){return JSON.stringify(t)===JSON.stringify(e)}function am(t,e){let n={};for(let[o,r]of Object.entries(e))jo(t[o],r)||(n[o]=r);return n}function im(t,e){let n=t[s.CUSTOM_FONT_LIST];if(n===void 0||jo(n,e[s.CUSTOM_FONT_LIST]))return e;let o={...e,[s.CUSTOM_FONT_LIST]:n};for(let r of[s.SELECTED_FONT,s.SITE_PROFILES])t[r]!==void 0&&(o[r]=t[r]);return o}async function M(t,e){let n=am(t,im(t,e));Object.keys(n).length!==0&&await j(n)}async function Wo(t){(await I({[s.SYNC_SETTINGS]:void 0}))[s.SYNC_SETTINGS]!==t&&await j({[s.SYNC_SETTINGS]:t});try{await lo({[s.SYNC_SETTINGS]:t})}catch(n){t&&await j({[s.SYNC_SETTINGS]:!1})}}async function sm(t){if(!Le(t[s.SYNC_SETTINGS])){await Wo(!1);return}try{await lo(await wa(t))}catch(e){await Wo(!1)}}async function Q(){await sm(await I(Tt()))}function An(){Ot!==null&&clearTimeout(Ot),Ot=setTimeout(()=>{Ot=null,Ni(()=>Q())},rm)}async function vi(){Ot!==null&&(clearTimeout(Ot),Ot=null),await Ni(()=>Q())}function lm(){return we(cm)}async function cm(){let t=await I(Tt());if(!Le(t[s.SYNC_SETTINGS]))return;let e;try{e=await so(sn())}catch(r){return}if(!e){new Error("sync-storage-unreadable");return}if(e[s.SYNC_SETTINGS]===!1){At=!0;try{await M(t,{...t,[s.SYNC_SETTINGS]:!1})}finally{At=!1}return}if(!Co(e)){await Q();return}if(A(t)===0&&Ri(t)&&A(e)>0){At=!0;try{await M(t,{...t,[Y]:Date.now()})}finally{At=!1}await Q();return}if(A(t)>A(e)){await Q();return}let n=await I(Tt());if(!Le(n[s.SYNC_SETTINGS]))return;if(A(n)>A(e)){await Q();return}let o=await Ao(n,e);At=!0;try{await M(n,o)}finally{At=!1}}function Ko(){return we(um)}async function um(){let t=await I(Tt()),{values:e}=await Oi(t),n=await P(e);if(!Le(n[s.SYNC_SETTINGS])){await M(e,n);return}let o;try{o=await so(sn())}catch(i){await M(e,n);return}if(!o){new Error("sync-storage-unreadable"),await M(e,n);return}if(o[s.SYNC_SETTINGS]===!1){await M(e,{...n,[s.SYNC_SETTINGS]:!1});return}if(!Co(o)){let i=await I(Tt()),l=await P(i),c=A(i);await M(i,{...l,...c>0?{[Y]:c}:{}}),await Q();return}if(A(e)===0&&Ri(e)&&A(o)>0){await M(e,{...n,[Y]:Date.now()}),await Q();return}if(A(e)>A(o)){await M(e,{...n,[Y]:A(e)}),await Q();return}let r=await I(Tt());if(A(r)>A(o)){await M(r,{...await P(r),[Y]:A(r)}),await Q();return}let a=await Ao(r,o);await M(r,a)}function Pi(){chrome.storage.onChanged.addListener((t,e)=>{if(e==="sync"){lm().catch(n=>{});return}if(!(e!=="local"||At)){if(t[s.SYNC_SETTINGS]){we(async()=>{let n=await I({[s.SYNC_SETTINGS]:void 0}),o=Le(n[s.SYNC_SETTINGS]);await Wo(o),o&&An()}).catch(n=>{});return}_t.some(n=>n in t)&&An()}})}ie();var et=new Map,fm="__fontara_tab_manager_state__",xi=Number.MAX_SAFE_INTEGER,ki=!1,On=null,Ii=new WeakMap,mm=gm();function gm(){try{if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID()}catch{}return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function dm(){try{chrome.storage?.local?.remove(fm,()=>{chrome.runtime?.lastError})}catch{}}function Jo(t){return typeof t.tab?.id=="number"?t.tab.id:null}function Nn(t){return typeof t.frameId=="number"?t.frameId:null}function Ui(t){return typeof t.documentId=="string"?t.documentId:null}function pm(t,e){let n=Jo(t),o=Nn(t);if(n===null||o===null)return null;let r=et.get(n)?.get(o);return!r||r.scriptId!==e.scriptId||r.documentId!==Ui(t)?null:W(r.url)}function Fm(t,e){let n=W(t.url);if(n)return n;let o=pm(t,e);if(o)return o;let r=W(t.origin);if(r){let a=W(e.pageURL);if(a)try{if(new URL(a).origin===new URL(r).origin)return a}catch{}return r}return Nn(t)===0?W(t.tab?.url):null}function ym(t,e){let n=Jo(t),o=Fm(t,e),r=Nn(t);if(n===null||r===null||!o)return null;let a=et.get(n);a||(a=new Map,et.set(n,a));let i=Ui(t),l=a.get(r);if(l?.scriptId===e.scriptId&&l.documentId===i)return l.isTopFrame=r===0,l.url=o,l;let c={documentId:i,frameId:r,isTopFrame:r===0,scriptId:e.scriptId,url:o};return a.set(r,c),c}function Sm(t,e){let n=et.get(t);n&&(n.delete(e),n.size===0&&et.delete(t))}function Gi(t,e){et.get(t)?.get(e.frameId)?.scriptId===e.scriptId&&Sm(t,e.frameId)}function Qo(t,e){return et.get(t)?.get(e.frameId)===e}function hm(t,e,n,o){let r=e.documentId?[{documentId:e.documentId},{documentId:e.documentId,frameId:e.frameId},{frameId:e.frameId}]:[{frameId:e.frameId}],a=0;return new Promise(i=>{let l=()=>{if(!Qo(t,e)){i();return}let c=r[a];if(!c){Gi(t,e),o?.(),i();return}try{chrome.tabs.sendMessage(t,n,c,()=>{if(!chrome.runtime?.lastError){i();return}a+=1,l()})}catch{a+=1,l()}};l()})}function Ln(){return{type:Ct.SETTINGS_CHANGED}}function Em(t){return typeof t=="object"&&t!==null&&"then"in t&&typeof t.then=="function"}function Xo(t){return typeof t=="object"&&t!==null&&"message"in t&&"settingsRevision"in t}function wm(t){return Number.isSafeInteger(t)&&t>=0?t:0}function bm(t){let e=Ii.get(t);if(e)return e;let n={deliveryRunning:!1,latestRequestId:0,nextSequence:1,pendingDelivery:null};return Ii.set(t,n),n}function _m(t,e,n){return t.type!==Ct.APPLY_THEME&&t.type!==Ct.CLEAN_UP?t:{...t,commandOrder:{dispatcherId:mm,sequence:e,settingsRevision:n}}}function Tm(t){let e=t.nextSequence;return t.nextSequence=e>=xi?xi:e+1,e}function qo(t,e,n){if(n.deliveryRunning)return;let o=n.pendingDelivery;if(n.pendingDelivery=null,!o||!Qo(t,e))return;if(o.requestId!==n.latestRequestId){qo(t,e,n);return}let r=_m(o.message,Tm(n),o.settingsRevision);n.deliveryRunning=!0,hm(t,e,{...r,scriptId:e.scriptId},o.onDeliveryFailure).finally(()=>{n.deliveryRunning=!1,qo(t,e,n)})}function $o(t,e,n,o,r,a){if(o!==n.latestRequestId||!Qo(t,e))return;let{message:i,settingsRevision:l}=Xo(r)?r:{message:r,settingsRevision:0};n.pendingDelivery={message:i,onDeliveryFailure:a,requestId:o,settingsRevision:wm(l)},qo(t,e,n)}function Mi(t,e,n,o){let r=bm(e),a=++r.latestRequestId;try{let i=n(e);if(Em(i))return i.catch(()=>Ln()).then(async l=>{$o(t,e,r,a,l,o),Xo(l)&&await l.keepAlive});if($o(t,e,r,a,i,o),Xo(i))return Promise.resolve(i.keepAlive).then(()=>{})}catch{$o(t,e,r,a,Ln(),o)}return Promise.resolve()}function Cm(t,e,n){if(!_n(t))return!1;let o=Jo(e);if(o===null)return!1;let r=Nn(e);if(r===null)return!1;switch(t.type){case J.DOCUMENT_CONNECT:case J.DOCUMENT_RESUME:case J.DOCUMENT_UPDATE:{let a=ym(e,t);if(a&&On)return Mi(o,a,On).then(()=>n?.(),()=>n?.()),!0;break}case J.DOCUMENT_FORGET:Gi(o,{frameId:r,scriptId:t.scriptId});break}return!1}function Am(t){return typeof t=="string"&&/^https?:\/\//i.test(t)}function Bi(t){try{chrome.tabs.sendMessage(t,Ln(),()=>{chrome.runtime?.lastError})}catch{}}function Om(t){return new Promise(e=>{try{chrome.tabs.query({},n=>{for(let o of n)typeof o.id!="number"||t.has(o.id)||Am(o.url)&&Bi(o.id);e()})}catch{e()}})}function Di(t={}){t.createDocumentMessage&&(On=t.createDocumentMessage),!ki&&(dm(),chrome.runtime.onMessage.addListener(Cm),chrome.tabs.onRemoved.addListener(e=>{et.delete(e)}),ki=!0)}async function zi(t=On??Ln){let e=new Set,n=[];for(let[o,r]of et){e.add(o);for(let a of r.values())n.push(Mi(o,a,t,()=>{Bi(o)}))}await Promise.allSettled(n),await Om(e)}var Dm=25,ul=!1,fl=!1,Rn=null,vn=null,O=null,v=null,ml=Promise.resolve();function ft(t){let e=ml.then(t,t);return ml=e.then(()=>{},()=>{}),e}async function zm(t){t==="install"?await chrome.tabs.create({url:ze.WELCOME_PAGE}):t==="update"&&await chrome.tabs.create({url:ze.CHANGELOG})}var Pn=class t{static init(){ul||(ul=!0,O=new dn({readSettings:lt,writeSettings:t.persistSettingsChange}),v=new bn({onFamilyReady:()=>t.notifyContentScriptsAboutSettingsChange(),readSettings:lt}),Ci({abortCustomFontTransaction:t.abortCustomFontTransaction,beginCustomFontTransaction:t.beginCustomFontTransaction,changeSettings:t.changeSettings,collect:t.collectData,commitCustomFontTransaction:t.commitCustomFontTransaction,deleteCustomFont:t.deleteCustomFont,clearGoogleFontCache:t.clearGoogleFontCache,getGoogleFontCacheStats:t.getGoogleFontCacheStats,importCustomFontBatch:t.importCustomFontBatch,importSettings:t.importSettings,putCustomFontFace:t.putCustomFontFace,prepareGoogleFont:t.prepareGoogleFont,resetSettings:t.resetSettings,runCommand:t.runCommand}),ca(t.runCommand),Pi(),Di({createDocumentMessage:t.createDocumentMessage}),bi(),ua(),ka(),Ba(),chrome.permissions?.onRemoved?.addListener(e=>{br(e)&&t.handleGoogleFontPermissionRemoved().catch(n=>{})}),chrome.storage.onChanged.addListener((e,n)=>{n==="local"&&Object.keys(e).length>0&&t.handleLocalSettingsChange(e)}),chrome.runtime.onInstalled.addListener(e=>{(async()=>{await Ko(),ln(),await zm(e.reason)})().catch(n=>{})}),chrome.runtime.setUninstallURL(ze.UNINSTALL_FORM))}static start(){return t.init(),Rn||(Rn=Ko().then(async()=>{ln();try{await O?.initialize()}catch(e){}try{await v?.initialize()}catch(e){}}).then(()=>{fl=!0,t.scheduleReportChanges()}).catch(e=>{throw e}),Rn)}static async ensureStarted(){fl||await t.start()}static scheduleReportChanges(){vn!==null&&clearTimeout(vn),vn=setTimeout(()=>{vn=null,t.reportChanges().catch(e=>{})},Dm)}static async reportChanges(){let e=await t.collectData();Ai(e),await Tn(e.settings)}static async createDocumentMessage(e){await t.ensureStarted();let{revision:n,settings:o}=await ct(),r=[],a=await t.createContentCommandMessage(e.url,o,r);return{keepAlive:r.length>0?Promise.allSettled(r):void 0,message:a,settingsRevision:n}}static async notifyContentScriptsAboutSettingsChange(e,n){await t.ensureStarted();let o=e,r=n;if(!o||r===void 0){let a=await ct();o=a.settings,r=a.revision}await zi(async a=>{let i=[],l=await t.createContentCommandMessage(a.url,o,i);return{keepAlive:i.length>0?Promise.allSettled(i):void 0,message:l,settingsRevision:r}})}static async handleLocalSettingsChange(e){await t.ensureStarted();let n=e[s.GOOGLE_FONTS_ENABLED];n&&n.newValue!==!0&&v?.cancelPendingNetwork();let o=await Oa(e);if(!o&&!n)return;let r=await ct();n&&(r.settings[s.GOOGLE_FONTS_ENABLED]===!0?v?.resumeNetwork():v?.cancelPendingNetwork()),o&&await t.publishSettingsChange(r.settings,r.revision)}static async publishSettingsChange(e,n){await t.notifyContentScriptsAboutSettingsChange(e,n),t.scheduleReportChanges()}static async persistSettingsChange(e,n={}){await t.ensureStarted(),e[s.GOOGLE_FONTS_ENABLED]===!1&&v?.cancelPendingNetwork();let{revision:o,settings:r}=await No(e);return e[s.GOOGLE_FONTS_ENABLED]===!0&&v?.resumeNetwork(),await t.publishSettingsChange(r,o),n.flushSync?await vi():An(),{revision:o}}static writeSettingsChange(e,n={}){return ft(()=>t.persistSettingsChange(e,n))}static async createContentCommandMessage(e,n,o=[]){let{createFontaraContentCommandMessage:r}=await Promise.resolve().then(()=>(cl(),ll));return r(e,n,"full",{resolveGoogleFontBinary:(a,i)=>v?v.resolve(a,{allowNetwork:i.allowNetwork,track:l=>o.push(l)}):Promise.resolve(null)})}static async handleGoogleFontPermissionRemoved(){await t.ensureStarted(),v?.cancelPendingNetwork();let e=await lt();e[s.GOOGLE_FONTS_ENABLED]===!0&&await t.writeSettingsChange(_r(e[s.SELECTED_FONT],e[s.SITE_PROFILES]))}static async prepareGoogleFont(e){if(await t.ensureStarted(),!v)throw new Error("google-font-manager-not-ready");let n=await v.prepare(e);return{faceCount:n.faces.length,fontFamily:n.fontFamily,reference:{key:n.key,revision:n.revision},totalBytes:n.totalBytes}}static async clearGoogleFontCache(){if(await t.ensureStarted(),!v)throw new Error("google-font-manager-not-ready");return await v.clear(),v.getStats()}static async getGoogleFontCacheStats(){if(await t.ensureStarted(),!v)throw new Error("google-font-manager-not-ready");return v.getStats()}static async collectData(){await t.ensureStarted();let[e,n]=await Promise.all([ct(),Ha()]),{revision:o,settings:r}=e;return{activeTab:await Ya(r),isReady:!0,settings:r,settingsRevision:o,shortcuts:n}}static async changeSettings(e){if(Object.getOwnPropertyDescriptor(e,s.CUSTOM_FONT_LIST)!==void 0)throw new Error("custom-font-list-requires-transaction");return t.writeSettingsChange(e)}static async importSettings(e){return ft(async()=>{let n=Object.getOwnPropertyDescriptor(e,s.CUSTOM_FONT_LIST)!==void 0;if(n&&!Array.isArray(e[s.CUSTOM_FONT_LIST]))throw new Error("invalid-custom-font-backup");let o=await ho(e);n||delete o.settings[s.CUSTOM_FONT_LIST];let r=o.settings[s.CUSTOM_FONT_LIST];if(n&&Array.isArray(r)){if(!O)throw new Error("custom-font-manager-not-ready");await O.validateLibrary(r)}let a=await t.persistSettingsChange(o.settings,{flushSync:!0});if(n)try{await O?.collectUnusedAfterCatalogReplacement()}catch(i){}return{ignoredKeyCount:o.ignoredKeyCount,importedKeyCount:o.importedKeyCount,revision:a.revision}})}static resetSettings(){return ft(async()=>{let e=await t.persistSettingsChange(await sa(),{flushSync:!0});try{await O?.collectUnusedAfterCatalogReplacement()}catch(n){}return e})}static async importCustomFontBatch(e,n){if(await t.ensureStarted(),!O)throw new Error("custom-font-manager-not-ready");let o=O;return ft(async()=>{let r=await ho(n);await o.commitBatch(e,r.settings);let{revision:a}=await ct();return{ignoredKeyCount:r.ignoredKeyCount,importedKeyCount:r.importedKeyCount,revision:a}})}static async beginCustomFontTransaction(e,n){if(await t.ensureStarted(),!O)throw new Error("custom-font-manager-not-ready");return O.begin(e,n)}static async putCustomFontFace(e,n,o){if(await t.ensureStarted(),!O)throw new Error("custom-font-manager-not-ready");await O.putFace(e,n,o)}static async commitCustomFontTransaction(e){if(await t.ensureStarted(),!O)throw new Error("custom-font-manager-not-ready");let n=O;return ft(async()=>{let o=await n.commit(e),{revision:r}=await ct();return{family:o,revision:r}})}static async abortCustomFontTransaction(e){if(await t.ensureStarted(),!O)throw new Error("custom-font-manager-not-ready");await O.abort(e)}static async deleteCustomFont(e){if(await t.ensureStarted(),!O)throw new Error("custom-font-manager-not-ready");let n=O;return ft(async()=>{await n.delete(e);let{revision:o}=await ct();return{revision:o}})}static toggleExtension(){return ft(async()=>{await t.persistSettingsChange(da(await lt()))})}static async toggleCurrentSite(e){let n=await za(e);n&&await ft(async()=>{await t.persistSettingsChange(pa(n,await lt()))})}static async runCommand(e,n={}){switch(await t.ensureStarted(),e){case Xt.TOGGLE_EXTENSION:await t.toggleExtension();break;case Xt.TOGGLE_SITE:await t.toggleCurrentSite(n);break}}};Pn.start().catch(t=>{});})();
