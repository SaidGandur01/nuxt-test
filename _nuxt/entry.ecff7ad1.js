import{r as j1,h as E8,g as a4,i as Q,n as T1,a as C1,w as yn,b as e4,o as kn,c as wn,d as An,u as B,v as Pn,t as D8,e as Tn,s as Z1,f as q2,j as v1,k as G,l as K,p as y1,m as Rn,K as Fn,S as r4,T as _8,q as Bn,x as H1,y as u1,z as q8,A as En,B as Dn,C as _n,D as y6,E as qn,F as On,G as $n,H as Un}from"./swiper-vue.d875c6a4.js";const Gn=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,In=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Wn=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function jn(c,a){if(c==="__proto__"||c==="constructor"&&a&&typeof a=="object"&&"prototype"in a){Zn(c);return}return a}function Zn(c){console.warn(`[destr] Dropping "${c}" key to prevent prototype pollution.`)}function Kn(c,a={}){if(typeof c!="string")return c;const e=c.trim();if(c[0]==='"'&&c[c.length-1]==='"')return e.slice(1,-1);if(e.length<=9){const r=e.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!Wn.test(c)){if(a.strict)throw new SyntaxError("[destr] Invalid JSON");return c}try{if(Gn.test(c)||In.test(c)){if(a.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(c,jn)}return JSON.parse(c)}catch(r){if(a.strict)throw r;return c}}const Xn=/#/g,Yn=/&/g,Qn=/=/g,i4=/\+/g,Jn=/%5e/gi,cf=/%60/gi,af=/%7c/gi,ef=/%20/gi;function rf(c){return encodeURI(""+c).replace(af,"|")}function y3(c){return rf(typeof c=="string"?c:JSON.stringify(c)).replace(i4,"%2B").replace(ef,"+").replace(Xn,"%23").replace(Yn,"%26").replace(cf,"`").replace(Jn,"^")}function u3(c){return y3(c).replace(Qn,"%3D")}function k2(c=""){try{return decodeURIComponent(""+c)}catch{return""+c}}function sf(c){return k2(c.replace(i4," "))}function nf(c){return k2(c.replace(i4," "))}function ff(c=""){const a={};c[0]==="?"&&(c=c.slice(1));for(const e of c.split("&")){const r=e.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const i=sf(r[1]);if(i==="__proto__"||i==="constructor")continue;const s=nf(r[2]||"");a[i]===void 0?a[i]=s:Array.isArray(a[i])?a[i].push(s):a[i]=[a[i],s]}return a}function lf(c,a){return(typeof a=="number"||typeof a=="boolean")&&(a=String(a)),a?Array.isArray(a)?a.map(e=>`${u3(c)}=${y3(e)}`).join("&"):`${u3(c)}=${y3(a)}`:u3(c)}function of(c){return Object.keys(c).filter(a=>c[a]!==void 0).map(a=>lf(a,c[a])).filter(Boolean).join("&")}const tf=/^\w{2,}:([/\\]{1,2})/,mf=/^\w{2,}:([/\\]{2})?/,zf=/^([/\\]\s*){2,}[^/\\]/;function a2(c,a={}){return typeof a=="boolean"&&(a={acceptRelative:a}),a.strict?tf.test(c):mf.test(c)||(a.acceptRelative?zf.test(c):!1)}const vf=/\/$|\/\?/;function k3(c="",a=!1){return a?vf.test(c):c.endsWith("/")}function O8(c="",a=!1){if(!a)return(k3(c)?c.slice(0,-1):c)||"/";if(!k3(c,!0))return c||"/";const[e,...r]=c.split("?");return(e.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function w3(c="",a=!1){if(!a)return c.endsWith("/")?c:c+"/";if(k3(c,!0))return c||"/";const[e,...r]=c.split("?");return e+"/"+(r.length>0?`?${r.join("?")}`:"")}function hf(c=""){return c.startsWith("/")}function k6(c=""){return hf(c)?c:"/"+c}function Hf(c,a){if(U8(a)||a2(c))return c;const e=O8(a);return c.startsWith(e)?c:e2(e,c)}function w6(c,a){if(U8(a))return c;const e=O8(a);if(!c.startsWith(e))return c;const r=c.slice(e.length);return r[0]==="/"?r:"/"+r}function $8(c,a){const e=O2(c),r={...ff(e.search),...a};return e.search=of(r),Mf(e)}function U8(c){return!c||c==="/"}function uf(c){return c&&c!=="/"}const Vf=/^\.?\//;function e2(c,...a){let e=c||"";for(const r of a.filter(i=>uf(i)))if(e){const i=r.replace(Vf,"");e=w3(e)+i}else e=r;return e}function pf(c,a,e={}){return e.trailingSlash||(c=w3(c),a=w3(a)),e.leadingSlash||(c=k6(c),a=k6(a)),e.encoding||(c=k2(c),a=k2(a)),c===a}function O2(c="",a){if(!a2(c,{acceptRelative:!0}))return a?O2(a+c):A6(c);const[e="",r,i=""]=(c.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[s="",n=""]=(i.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:f,search:o,hash:l}=A6(n.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:e,auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:s,pathname:f,search:o,hash:l}}function A6(c=""){const[a="",e="",r=""]=(c.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:a,search:e,hash:r}}function Mf(c){const a=c.pathname+(c.search?(c.search.startsWith("?")?"":"?")+c.search:"")+c.hash;return c.protocol?c.protocol+"//"+(c.auth?c.auth+"@":"")+c.host+a:a}class Cf extends Error{constructor(){super(...arguments),this.name="FetchError"}}function df(c,a,e){let r="";a&&(r=a.message),c&&e?r=`${r} (${e.status} ${e.statusText} (${c.toString()}))`:c&&(r=`${r} (${c.toString()})`);const i=new Cf(r);return Object.defineProperty(i,"request",{get(){return c}}),Object.defineProperty(i,"response",{get(){return e}}),Object.defineProperty(i,"data",{get(){return e&&e._data}}),Object.defineProperty(i,"status",{get(){return e&&e.status}}),Object.defineProperty(i,"statusText",{get(){return e&&e.statusText}}),Object.defineProperty(i,"statusCode",{get(){return e&&e.status}}),Object.defineProperty(i,"statusMessage",{get(){return e&&e.statusText}}),i}const Lf=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function P6(c="GET"){return Lf.has(c.toUpperCase())}function gf(c){if(c===void 0)return!1;const a=typeof c;return a==="string"||a==="number"||a==="boolean"||a===null?!0:a!=="object"?!1:Array.isArray(c)?!0:c.constructor&&c.constructor.name==="Object"||typeof c.toJSON=="function"}const xf=new Set(["image/svg","application/xml","application/xhtml","application/html"]),bf=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Nf(c=""){if(!c)return"json";const a=c.split(";").shift()||"";return bf.test(a)?"json":xf.has(a)||a.startsWith("text/")?"text":"blob"}function Sf(c,a,e=globalThis.Headers){const r={...a,...c};if(a!=null&&a.params&&(c!=null&&c.params)&&(r.params={...a==null?void 0:a.params,...c==null?void 0:c.params}),a!=null&&a.query&&(c!=null&&c.query)&&(r.query={...a==null?void 0:a.query,...c==null?void 0:c.query}),a!=null&&a.headers&&(c!=null&&c.headers)){r.headers=new e((a==null?void 0:a.headers)||{});for(const[i,s]of new e((c==null?void 0:c.headers)||{}))r.headers.set(i,s)}return r}const yf=new Set([408,409,425,429,500,502,503,504]);function G8(c){const{fetch:a,Headers:e}=c;function r(n){const f=n.error&&n.error.name==="AbortError"||!1;if(n.options.retry!==!1&&!f){let l;typeof n.options.retry=="number"?l=n.options.retry:l=P6(n.options.method)?0:1;const t=n.response&&n.response.status||500;if(l>0&&yf.has(t))return i(n.request,{...n.options,retry:l-1})}const o=df(n.request,n.error,n.response);throw Error.captureStackTrace&&Error.captureStackTrace(o,i),o}const i=async function(f,o={}){const l={request:f,options:Sf(o,c.defaults,e),response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=Hf(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=$8(l.request,{...l.options.params,...l.options.query})),l.options.body&&P6(l.options.method)&&gf(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new e(l.options.headers||{}),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json")));try{l.response=await a(l.request,l.options)}catch(m){return l.error=m,l.options.onRequestError&&await l.options.onRequestError(l),await r(l)}const t=(l.options.parseResponse?"json":l.options.responseType)||Nf(l.response.headers.get("content-type")||"");if(t==="json"){const m=await l.response.text(),z=l.options.parseResponse||Kn;l.response._data=z(m)}else t==="stream"?l.response._data=l.response.body:l.response._data=await l.response[t]();return l.options.onResponse&&await l.options.onResponse(l),!l.options.ignoreResponseError&&l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),await r(l)):l.response},s=async function(f,o){return(await i(f,o))._data};return s.raw=i,s.native=a,s.create=(n={})=>G8({...c,defaults:{...c.defaults,...n}}),s}const I8=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),kf=I8.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),wf=I8.Headers,Af=G8({fetch:kf,Headers:wf}),Pf=Af,Tf=()=>{var c;return((c=window==null?void 0:window.__NUXT__)==null?void 0:c.config)||{}},w2=Tf().app,Rf=()=>w2.baseURL,Ff=()=>w2.buildAssetsDir,Bf=(...c)=>e2(W8(),Ff(),...c),W8=(...c)=>{const a=w2.cdnURL||w2.baseURL;return c.length?e2(a,...c):a};globalThis.__buildAssetsURL=Bf,globalThis.__publicAssetsURL=W8;function A3(c,a={},e){for(const r in c){const i=c[r],s=e?`${e}:${r}`:r;typeof i=="object"&&i!==null?A3(i,a,s):typeof i=="function"&&(a[s]=i)}return a}const Ef={run:c=>c()},Df=()=>Ef,j8=typeof console.createTask<"u"?console.createTask:Df;function _f(c,a){const e=a.shift(),r=j8(e);return c.reduce((i,s)=>i.then(()=>r.run(()=>s(...a))),Promise.resolve())}function qf(c,a){const e=a.shift(),r=j8(e);return Promise.all(c.map(i=>r.run(()=>i(...a))))}function V3(c,a){for(const e of[...c])e(a)}class Of{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(a,e,r={}){if(!a||typeof e!="function")return()=>{};const i=a;let s;for(;this._deprecatedHooks[a];)s=this._deprecatedHooks[a],a=s.to;if(s&&!r.allowDeprecated){let n=s.message;n||(n=`${i} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(n)||(console.warn(n),this._deprecatedMessages.add(n))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+a.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[a]=this._hooks[a]||[],this._hooks[a].push(e),()=>{e&&(this.removeHook(a,e),e=void 0)}}hookOnce(a,e){let r,i=(...s)=>(typeof r=="function"&&r(),r=void 0,i=void 0,e(...s));return r=this.hook(a,i),r}removeHook(a,e){if(this._hooks[a]){const r=this._hooks[a].indexOf(e);r!==-1&&this._hooks[a].splice(r,1),this._hooks[a].length===0&&delete this._hooks[a]}}deprecateHook(a,e){this._deprecatedHooks[a]=typeof e=="string"?{to:e}:e;const r=this._hooks[a]||[];delete this._hooks[a];for(const i of r)this.hook(a,i)}deprecateHooks(a){Object.assign(this._deprecatedHooks,a);for(const e in a)this.deprecateHook(e,a[e])}addHooks(a){const e=A3(a),r=Object.keys(e).map(i=>this.hook(i,e[i]));return()=>{for(const i of r.splice(0,r.length))i()}}removeHooks(a){const e=A3(a);for(const r in e)this.removeHook(r,e[r])}removeAllHooks(){for(const a in this._hooks)delete this._hooks[a]}callHook(a,...e){return e.unshift(a),this.callHookWith(_f,a,...e)}callHookParallel(a,...e){return e.unshift(a),this.callHookWith(qf,a,...e)}callHookWith(a,e,...r){const i=this._before||this._after?{name:e,args:r,context:{}}:void 0;this._before&&V3(this._before,i);const s=a(e in this._hooks?[...this._hooks[e]]:[],r);return s instanceof Promise?s.finally(()=>{this._after&&i&&V3(this._after,i)}):(this._after&&i&&V3(this._after,i),s)}beforeEach(a){return this._before=this._before||[],this._before.push(a),()=>{if(this._before!==void 0){const e=this._before.indexOf(a);e!==-1&&this._before.splice(e,1)}}}afterEach(a){return this._after=this._after||[],this._after.push(a),()=>{if(this._after!==void 0){const e=this._after.indexOf(a);e!==-1&&this._after.splice(e,1)}}}}function Z8(){return new Of}function $f(c={}){let a,e=!1;const r=n=>{if(a&&a!==n)throw new Error("Context conflict")};let i;if(c.asyncContext){const n=c.AsyncLocalStorage||globalThis.AsyncLocalStorage;n?i=new n:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(i&&a===void 0){const n=i.getStore();if(n!==void 0)return n}return a};return{use:()=>{const n=s();if(n===void 0)throw new Error("Context is not available");return n},tryUse:()=>s(),set:(n,f)=>{f||r(n),a=n,e=!0},unset:()=>{a=void 0,e=!1},call:(n,f)=>{r(n),a=n;try{return i?i.run(n,f):f()}finally{e||(a=void 0)}},async callAsync(n,f){a=n;const o=()=>{a=n},l=()=>a===n?o:void 0;P3.add(l);try{const t=i?i.run(n,f):f();return e||(a=void 0),await t}finally{P3.delete(l)}}}}function Uf(c={}){const a={};return{get(e,r={}){return a[e]||(a[e]=$f({...c,...r})),a[e],a[e]}}}const A2=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},T6="__unctx__",Gf=A2[T6]||(A2[T6]=Uf()),If=(c,a={})=>Gf.get(c,a),R6="__unctx_async_handlers__",P3=A2[R6]||(A2[R6]=new Set);function P2(c){const a=[];for(const i of P3){const s=i();s&&a.push(s)}const e=()=>{for(const i of a)i()};let r=c();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(i=>{throw e(),i})),[r,e]}const K8=If("nuxt-app"),Wf="__nuxt_plugin";function jf(c){let a=0;const e={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.6.5"},get vue(){return e.vueApp.version}},payload:j1({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:i=>Xf(e,i),isHydrating:!0,deferHydration(){if(!e.isHydrating)return()=>{};a++;let i=!1;return()=>{if(!i&&(i=!0,a--,a===0))return e.isHydrating=!1,e.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...c};e.hooks=Z8(),e.hook=e.hooks.hook,e.callHook=e.hooks.callHook,e.provide=(i,s)=>{const n="$"+i;H2(e,n,s),H2(e.vueApp.config.globalProperties,n,s)},H2(e.vueApp,"$nuxt",e),H2(e.vueApp.config.globalProperties,"$nuxt",e);{window.addEventListener("nuxt.preloadError",s=>{e.callHook("app:chunkError",{error:s.payload})}),window.useNuxtApp=window.useNuxtApp||_;const i=e.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});e.hook("app:mounted",i)}const r=j1(e.payload.config);return e.provide("config",r),e}async function Zf(c,a){if(a.hooks&&c.hooks.addHooks(a.hooks),typeof a=="function"){const{provide:e}=await c.runWithContext(()=>a(c))||{};if(e&&typeof e=="object")for(const r in e)c.provide(r,e[r])}}async function Kf(c,a){const e=[],r=[];for(const i of a){const s=Zf(c,i);i.parallel?e.push(s.catch(n=>r.push(n))):await s}if(await Promise.all(e),r.length)throw r[0]}/*! @__NO_SIDE_EFFECTS__ */function h1(c){return typeof c=="function"?c:(delete c.name,Object.assign(c.setup||(()=>{}),c,{[Wf]:!0}))}function Xf(c,a,e){const r=()=>e?a(...e):a();return K8.set(c),c.vueApp.runWithContext(r)}/*! @__NO_SIDE_EFFECTS__ */function _(){var a;let c;if(E8()&&(c=(a=a4())==null?void 0:a.appContext.app.$nuxt),c=c||K8.tryUse(),!c)throw new Error("[nuxt] instance unavailable");return c}/*! @__NO_SIDE_EFFECTS__ */function s4(){return _().$config}function H2(c,a,e){Object.defineProperty(c,a,{get:()=>e})}const Yf="modulepreload",Qf=function(c,a){return c.startsWith(".")?new URL(c,a).href:c},F6={},Jf=function(a,e,r){if(!e||e.length===0)return a();const i=document.getElementsByTagName("link");return Promise.all(e.map(s=>{if(s=Qf(s,r),s in F6)return;F6[s]=!0;const n=s.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!r)for(let t=i.length-1;t>=0;t--){const m=i[t];if(m.href===s&&(!n||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${f}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":Yf,n||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),n)return new Promise((t,m)=>{l.addEventListener("load",t),l.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>a())},I=(...c)=>Jf(...c).catch(a=>{const e=new Event("nuxt.preloadError");throw e.payload=a,window.dispatchEvent(e),a}),cl=-1,al=-2,el=-3,rl=-4,il=-5,sl=-6;function nl(c,a){return fl(JSON.parse(c),a)}function fl(c,a){if(typeof c=="number")return i(c,!0);if(!Array.isArray(c)||c.length===0)throw new Error("Invalid input");const e=c,r=Array(e.length);function i(s,n=!1){if(s===cl)return;if(s===el)return NaN;if(s===rl)return 1/0;if(s===il)return-1/0;if(s===sl)return-0;if(n)throw new Error("Invalid input");if(s in r)return r[s];const f=e[s];if(!f||typeof f!="object")r[s]=f;else if(Array.isArray(f))if(typeof f[0]=="string"){const o=f[0],l=a==null?void 0:a[o];if(l)return r[s]=l(i(f[1]));switch(o){case"Date":r[s]=new Date(f[1]);break;case"Set":const t=new Set;r[s]=t;for(let H=1;H<f.length;H+=1)t.add(i(f[H]));break;case"Map":const m=new Map;r[s]=m;for(let H=1;H<f.length;H+=2)m.set(i(f[H]),i(f[H+1]));break;case"RegExp":r[s]=new RegExp(f[1],f[2]);break;case"Object":r[s]=Object(f[1]);break;case"BigInt":r[s]=BigInt(f[1]);break;case"null":const z=Object.create(null);r[s]=z;for(let H=1;H<f.length;H+=2)z[f[H]]=i(f[H+1]);break;default:throw new Error(`Unknown type ${o}`)}}else{const o=new Array(f.length);r[s]=o;for(let l=0;l<f.length;l+=1){const t=f[l];t!==al&&(o[l]=i(t))}}else{const o={};r[s]=o;for(const l in f){const t=f[l];o[l]=i(t)}}return r[s]}return i(0)}function ll(c){return Array.isArray(c)?c:[c]}const X8=["title","script","style","noscript"],Y8=["base","meta","link","style","script","noscript"],ol=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],tl=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],B6=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Q8(c){let a=9;for(let e=0;e<c.length;)a=Math.imul(a^c.charCodeAt(e++),9**9);return((a^a>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function T3(c){return Q8(`${c.tag}:${c.textContent||c.innerHTML||""}:${Object.entries(c.props).map(([a,e])=>`${a}:${String(e)}`).join(",")}`)}function ml(c){let a=9;for(const e of c)for(let r=0;r<e.length;)a=Math.imul(a^e.charCodeAt(r++),9**9);return((a^a>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function J8(c,a){const{props:e,tag:r}=c;if(tl.includes(r))return r;if(r==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";const i=["id"];r==="meta"&&i.push("name","property","http-equiv");for(const s of i)if(typeof e[s]<"u"){const n=String(e[s]);return a&&!a(n)?!1:`${r}:${s}:${n}`}return!1}function E6(c,a){return c==null?a||null:typeof c=="function"?c(a):c}function u2(c,a=!1,e){const{tag:r,$el:i}=c;i&&(Object.entries(r.props).forEach(([s,n])=>{n=String(n);const f=`attr:${s}`;if(s==="class"){if(!n)return;for(const o of n.split(" ")){const l=`${f}:${o}`;e&&e(c,l,()=>i.classList.remove(o)),i.classList.contains(o)||i.classList.add(o)}return}e&&!s.startsWith("data-h-")&&e(c,f,()=>i.removeAttribute(s)),(a||i.getAttribute(s)!==n)&&i.setAttribute(s,n)}),X8.includes(r.tag)&&(r.textContent&&r.textContent!==i.textContent?i.textContent=r.textContent:r.innerHTML&&r.innerHTML!==i.innerHTML&&(i.innerHTML=r.innerHTML)))}let D1=!1;async function zl(c,a={}){var z,H;const e={shouldRender:!0};if(await c.hooks.callHook("dom:beforeRender",e),!e.shouldRender)return;const r=a.document||c.resolvedOptions.document||window.document,i=(await c.resolveTags()).map(f);if(c.resolvedOptions.experimentalHashHydration&&(D1=D1||c._hash||!1,D1)){const V=ml(i.map(p=>p.tag._h));if(D1===V)return;D1=V}const s=c._popSideEffectQueue();c.headEntries().map(V=>V._sde).forEach(V=>{Object.entries(V).forEach(([p,x])=>{s[p]=x})});const n=(V,p,x)=>{p=`${V.renderId}:${p}`,V.entry&&(V.entry._sde[p]=x),delete s[p]};function f(V){const p=c.headEntries().find(v=>v._i===V._e),x={renderId:V._d||T3(V),$el:null,shouldRender:!0,tag:V,entry:p,markSideEffect:(v,h)=>n(x,v,h)};return x}const o=[],l={body:[],head:[]},t=V=>{c._elMap[V.renderId]=V.$el,o.push(V),n(V,"el",()=>{var p;(p=V.$el)==null||p.remove(),delete c._elMap[V.renderId]})};for(const V of i){if(await c.hooks.callHook("dom:beforeRenderTag",V),!V.shouldRender)continue;const{tag:p}=V;if(p.tag==="title"){r.title=p.textContent||"",o.push(V);continue}if(p.tag==="htmlAttrs"||p.tag==="bodyAttrs"){V.$el=r[p.tag==="htmlAttrs"?"documentElement":"body"],u2(V,!1,n),o.push(V);continue}if(V.$el=c._elMap[V.renderId],!V.$el&&p.key&&(V.$el=r.querySelector(`${(z=p.tagPosition)!=null&&z.startsWith("body")?"body":"head"} > ${p.tag}[data-h-${p._h}]`)),V.$el){V.tag._d&&u2(V),t(V);continue}l[(H=p.tagPosition)!=null&&H.startsWith("body")?"body":"head"].push(V)}const m={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(l).forEach(([V,p])=>{var v;if(!p.length)return;const x=(v=r==null?void 0:r[V])==null?void 0:v.children;if(x){for(const h of[...x].reverse()){const g=h.tagName.toLowerCase();if(!Y8.includes(g))continue;const N=h.getAttributeNames().reduce((E,O)=>({...E,[O]:h.getAttribute(O)}),{}),S={tag:g,props:N};h.innerHTML&&(S.innerHTML=h.innerHTML);const w=T3(S);let A=p.findIndex(E=>(E==null?void 0:E.renderId)===w);if(A===-1){const E=J8(S);A=p.findIndex(O=>(O==null?void 0:O.tag._d)&&O.tag._d===E)}if(A!==-1){const E=p[A];E.$el=h,u2(E),t(E),delete p[A]}}p.forEach(h=>{const g=h.tag.tagPosition||"head";m[g]=m[g]||r.createDocumentFragment(),h.$el||(h.$el=r.createElement(h.tag.tag),u2(h,!0)),m[g].appendChild(h.$el),t(h)})}}),m.head&&r.head.appendChild(m.head),m.bodyOpen&&r.body.insertBefore(m.bodyOpen,r.body.firstChild),m.bodyClose&&r.body.appendChild(m.bodyClose);for(const V of o)await c.hooks.callHook("dom:renderTag",V);Object.values(s).forEach(V=>V())}let p3=null;async function vl(c,a={}){function e(){return p3=null,zl(c,a)}const r=a.delayFn||(i=>setTimeout(i,10));return p3=p3||new Promise(i=>r(()=>i(e())))}function hl(c){return{hooks:{"entries:updated":function(a){if(typeof(c==null?void 0:c.document)>"u"&&typeof window>"u")return;let e=c==null?void 0:c.delayFn;!e&&typeof requestAnimationFrame<"u"&&(e=requestAnimationFrame),vl(a,{document:(c==null?void 0:c.document)||window.document,delayFn:e})}}}}function Hl(c){var a;return((a=c==null?void 0:c.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:a.getAttribute("content"))||!1}const D6={base:-1,title:1},_6={critical:-8,high:-1,low:2};function T2(c){let a=10;const e=c.tagPriority;return typeof e=="number"?e:(c.tag==="meta"?(c.props.charset&&(a=-2),c.props["http-equiv"]==="content-security-policy"&&(a=0)):c.tag=="link"&&c.props.rel==="preconnect"?a=2:c.tag in D6&&(a=D6[c.tag]),typeof e=="string"&&e in _6?a+_6[e]:a)}const ul=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Vl(){return{hooks:{"tags:resolve":c=>{const a=e=>{var r;return(r=c.tags.find(i=>i._d===e))==null?void 0:r._p};for(const{prefix:e,offset:r}of ul)for(const i of c.tags.filter(s=>typeof s.tagPriority=="string"&&s.tagPriority.startsWith(e))){const s=a(i.tagPriority.replace(e,""));typeof s<"u"&&(i._p=s+r)}c.tags.sort((e,r)=>e._p-r._p).sort((e,r)=>T2(e)-T2(r))}}}}function pl(){return{hooks:{"tags:resolve":c=>{const{tags:a}=c;let e=a.findIndex(i=>i.tag==="titleTemplate");const r=a.findIndex(i=>i.tag==="title");if(r!==-1&&e!==-1){const i=E6(a[e].textContent,a[r].textContent);i!==null?a[r].textContent=i||a[r].textContent:delete a[r]}else if(e!==-1){const i=E6(a[e].textContent);i!==null&&(a[e].textContent=i,a[e].tag="title",e=-1)}e!==-1&&delete a[e],c.tags=a.filter(Boolean)}}}}function Ml(){return{hooks:{"tag:normalise":function({tag:c}){typeof c.props.body<"u"&&(c.tagPosition="bodyClose",delete c.props.body)}}}}const Cl=["link","style","script","noscript"];function dl(){return{hooks:{"tag:normalise":({tag:c,resolvedOptions:a})=>{a.experimentalHashHydration===!0&&(c._h=T3(c)),c.key&&Cl.includes(c.tag)&&(c._h=Q8(c.key),c.props[`data-h-${c._h}`]="")}}}}const q6=["script","link","bodyAttrs"];function Ll(){const c=(a,e)=>{const r={},i={};Object.entries(e.props).forEach(([n,f])=>{n.startsWith("on")&&typeof f=="function"?i[n]=f:r[n]=f});let s;return a==="dom"&&e.tag==="script"&&typeof r.src=="string"&&typeof i.onload<"u"&&(s=r.src,delete r.src),{props:r,eventHandlers:i,delayedSrc:s}};return{hooks:{"ssr:render":function(a){a.tags=a.tags.map(e=>(!q6.includes(e.tag)||!Object.entries(e.props).find(([r,i])=>r.startsWith("on")&&typeof i=="function")||(e.props=c("ssr",e).props),e))},"dom:beforeRenderTag":function(a){if(!q6.includes(a.tag.tag)||!Object.entries(a.tag.props).find(([s,n])=>s.startsWith("on")&&typeof n=="function"))return;const{props:e,eventHandlers:r,delayedSrc:i}=c("dom",a.tag);Object.keys(r).length&&(a.tag.props=e,a.tag._eventHandlers=r,a.tag._delayedSrc=i)},"dom:renderTag":function(a){const e=a.$el;if(!a.tag._eventHandlers||!e)return;const r=a.tag.tag==="bodyAttrs"&&typeof window<"u"?window:e;Object.entries(a.tag._eventHandlers).forEach(([i,s])=>{const n=`${a.tag._d||a.tag._p}:${i}`,f=i.slice(2).toLowerCase(),o=`data-h-${f}`;if(a.markSideEffect(n,()=>{}),e.hasAttribute(o))return;const l=s;e.setAttribute(o,""),r.addEventListener(f,l),a.entry&&(a.entry._sde[n]=()=>{r.removeEventListener(f,l),e.removeAttribute(o)})}),a.tag._delayedSrc&&e.setAttribute("src",a.tag._delayedSrc)}}}}const gl=["templateParams","htmlAttrs","bodyAttrs"];function xl(){return{hooks:{"tag:normalise":function({tag:c}){["hid","vmid","key"].forEach(r=>{c.props[r]&&(c.key=c.props[r],delete c.props[r])});const e=J8(c)||(c.key?`${c.tag}:${c.key}`:!1);e&&(c._d=e)},"tags:resolve":function(c){const a={};c.tags.forEach(r=>{const i=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,s=a[i];if(s){let f=r==null?void 0:r.tagDuplicateStrategy;if(!f&&gl.includes(r.tag)&&(f="merge"),f==="merge"){const o=s.props;["class","style"].forEach(l=>{r.props[l]&&o[l]&&(l==="style"&&!o[l].endsWith(";")&&(o[l]+=";"),r.props[l]=`${o[l]} ${r.props[l]}`)}),a[i].props={...o,...r.props};return}else if(r._e===s._e){s._duped=s._duped||[],r._d=`${s._d}:${s._duped.length+1}`,s._duped.push(r);return}else if(T2(r)>T2(s))return}const n=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(Y8.includes(r.tag)&&n===0){delete a[i];return}a[i]=r});const e=[];Object.values(a).forEach(r=>{const i=r._duped;delete r._duped,e.push(r),i&&e.push(...i)}),c.tags=e}}}}function _1(c,a){if(typeof c!="string")return c;function e(n){if(["s","pageTitle"].includes(n))return a.pageTitle;let f;return n.includes(".")?f=n.split(".").reduce((o,l)=>o&&o[l]||void 0,a):f=a[n],typeof f<"u"?f||"":!1}let r=c;try{r=decodeURI(c)}catch{}(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(n=>{const f=e(n.slice(1));typeof f=="string"&&(c=c.replace(new RegExp(`\\${n}(\\W|$)`,"g"),(o,l)=>`${f}${l}`).trim())});const s=a.separator;return c.includes(s)&&(c.endsWith(s)&&(c=c.slice(0,-s.length).trim()),c.startsWith(s)&&(c=c.slice(s.length).trim()),c=c.replace(new RegExp(`\\${s}\\s*\\${s}`,"g"),s)),c}function bl(){return{hooks:{"tags:resolve":c=>{var s;const{tags:a}=c,e=(s=a.find(n=>n.tag==="title"))==null?void 0:s.textContent,r=a.findIndex(n=>n.tag==="templateParams"),i=r!==-1?a[r].props:{};i.separator=i.separator||"|",i.pageTitle=_1(i.pageTitle||e||"",i);for(const n of a)if(["titleTemplate","title"].includes(n.tag)&&typeof n.textContent=="string")n.textContent=_1(n.textContent,i);else if(n.tag==="meta"&&typeof n.props.content=="string")n.props.content=_1(n.props.content,i);else if(n.tag==="link"&&typeof n.props.href=="string")n.props.href=_1(n.props.href,i);else if(n.tag==="script"&&["application/json","application/ld+json"].includes(n.props.type)&&typeof n.innerHTML=="string")try{n.innerHTML=JSON.stringify(JSON.parse(n.innerHTML),(f,o)=>typeof o=="string"?_1(o,i):o)}catch{}c.tags=a.filter(n=>n.tag!=="templateParams")}}}}const Nl=typeof window<"u";let c0;function Sl(c){return c0=c}function yl(){return c0}async function kl(c,a,e){const r={tag:c,props:{}};return a instanceof Promise&&(a=await a),c==="templateParams"?(r.props=a,r):["title","titleTemplate"].includes(c)?(a&&typeof a=="object"?(r.textContent=a.textContent,a.tagPriority&&(r.tagPriority=a.tagPriority)):r.textContent=a,r):typeof a=="string"?["script","noscript","style"].includes(c)?(c==="script"&&(/^(https?:)?\/\//.test(a)||a.startsWith("/"))?r.props.src=a:r.innerHTML=a,r):!1:(r.props=await Al(c,{...a}),r.props.children&&(r.props.innerHTML=r.props.children),delete r.props.children,Object.keys(r.props).filter(i=>B6.includes(i)).forEach(i=>{(!["innerHTML","textContent"].includes(i)||X8.includes(r.tag))&&(r[i]=r.props[i]),delete r.props[i]}),B6.forEach(i=>{!r[i]&&e[i]&&(r[i]=e[i])}),["innerHTML","textContent"].forEach(i=>{if(r.tag==="script"&&typeof r[i]=="string"&&["application/ld+json","application/json"].includes(r.props.type))try{r[i]=JSON.parse(r[i])}catch{r[i]=""}typeof r[i]=="object"&&(r[i]=JSON.stringify(r[i]))}),r.props.class&&(r.props.class=wl(r.props.class)),r.props.content&&Array.isArray(r.props.content)?r.props.content.map(i=>({...r,props:{...r.props,content:i}})):r)}function wl(c){return typeof c=="object"&&!Array.isArray(c)&&(c=Object.keys(c).filter(a=>c[a])),(Array.isArray(c)?c.join(" "):c).split(" ").filter(a=>a.trim()).filter(Boolean).join(" ")}async function Al(c,a){for(const e of Object.keys(a)){const r=e.startsWith("data-");a[e]instanceof Promise&&(a[e]=await a[e]),String(a[e])==="true"?a[e]=r?"true":"":String(a[e])==="false"&&(r?a[e]="false":delete a[e])}return a}const Pl=10;async function Tl(c){const a=[];return Object.entries(c.resolvedInput).filter(([e,r])=>typeof r<"u"&&ol.includes(e)).forEach(([e,r])=>{const i=ll(r);a.push(...i.map(s=>kl(e,s,c)).flat())}),(await Promise.all(a)).flat().filter(Boolean).map((e,r)=>(e._e=c._i,e._p=(c._i<<Pl)+r,e))}function Rl(){return[xl(),Vl(),bl(),pl(),dl(),Ll(),Ml()]}function Fl(c={}){return[hl({document:c==null?void 0:c.document,delayFn:c==null?void 0:c.domDelayFn})]}function Bl(c={}){const a=El({...c,plugins:[...Fl(c),...(c==null?void 0:c.plugins)||[]]});return c.experimentalHashHydration&&a.resolvedOptions.document&&(a._hash=Hl(a.resolvedOptions.document)),Sl(a),a}function El(c={}){let a=[],e={},r=0;const i=Z8();c!=null&&c.hooks&&i.addHooks(c.hooks),c.plugins=[...Rl(),...(c==null?void 0:c.plugins)||[]],c.plugins.forEach(f=>f.hooks&&i.addHooks(f.hooks)),c.document=c.document||(Nl?document:void 0);const s=()=>i.callHook("entries:updated",n),n={resolvedOptions:c,headEntries(){return a},get hooks(){return i},use(f){f.hooks&&i.addHooks(f.hooks)},push(f,o){const l={_i:r++,input:f,_sde:{},...o},t=(l==null?void 0:l.mode)||c.mode;return t&&(l.mode=t),a.push(l),s(),{dispose(){a=a.filter(m=>m._i!==l._i?!0:(e={...e,...m._sde||{}},m._sde={},s(),!1))},patch(m){a=a.map(z=>(z._i===l._i&&(l.input=z.input=m,s()),z))}}},async resolveTags(){const f={tags:[],entries:[...a]};await i.callHook("entries:resolve",f);for(const o of f.entries){const l=o.resolvedInput||o.input;if(o.resolvedInput=await(o.transform?o.transform(l):l),o.resolvedInput)for(const t of await Tl(o)){const m={tag:t,entry:o,resolvedOptions:n.resolvedOptions};await i.callHook("tag:normalise",m),f.tags.push(m.tag)}}return await i.callHook("tags:beforeResolve",f),await i.callHook("tags:resolve",f),f.tags},_popSideEffectQueue(){const f={...e};return e={},f},_elMap:{}};return n.hooks.callHook("init",n),n}function Dl(c){return typeof c=="function"?c():B(c)}function R2(c,a=""){if(c instanceof Promise)return c;const e=Dl(c);return!c||!e?e:Array.isArray(e)?e.map(r=>R2(r,a)):typeof e=="object"?Object.fromEntries(Object.entries(e).map(([r,i])=>r==="titleTemplate"||r.startsWith("on")?[r,B(i)]:[r,R2(i,r)])):e}const _l=Pn.startsWith("3"),ql=typeof window<"u",a0="usehead";function n4(){return a4()&&Q(a0)||yl()}function Ol(c){return{install(e){_l&&(e.config.globalProperties.$unhead=c,e.config.globalProperties.$head=c,e.provide(a0,c))}}.install}function $l(c={}){const a=Bl({...c,domDelayFn:e=>setTimeout(()=>T1(()=>e()),10),plugins:[Ul(),...(c==null?void 0:c.plugins)||[]]});return a.install=Ol(a),a}function Ul(){return{hooks:{"entries:resolve":function(c){for(const a of c.entries)a.resolvedInput=R2(a.input)}}}}function Gl(c,a={}){const e=n4(),r=C1(!1),i=C1({});yn(()=>{i.value=r.value?{}:R2(c)});const s=e.push(i.value,a);return e4(i,f=>{s.patch(f)}),a4()&&(kn(()=>{s.dispose()}),wn(()=>{r.value=!0}),An(()=>{r.value=!1})),s}function Il(c,a={}){return n4().push(c,a)}function fQ(c,a={}){var r;const e=n4();if(e){const i=ql||!!((r=e.resolvedOptions)!=null&&r.document);return a.mode==="server"&&i||a.mode==="client"&&!i?void 0:i?Gl(c,a):Il(c,a)}}const Wl={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"}],style:[],script:[{integrity:"sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug==",src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",crossorigin:"anonymous",referrerpolicy:"no-referrer"},{src:"https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js"}],noscript:[],title:"Draft project"},jl=!1,R3=!1,Zl=!1,Kl="__nuxt",Xl=!0;function O6(c,a={}){const e=Yl(c,a),r=_(),i=r._payloadCache=r._payloadCache||{};return i[e]||(i[e]=e0(e).then(s=>s||(delete i[e],null))),i[e]}const $6="json";function Yl(c,a={}){const e=new URL(c,"http://localhost");if(e.search)throw new Error("Payload URL cannot contain search params: "+c);if(e.host!=="localhost"||a2(e.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+c);const r=a.hash||(a.fresh?Date.now():"");return e2(s4().app.baseURL,e.pathname,r?`_payload.${r}.${$6}`:`_payload.${$6}`)}async function e0(c){try{return Xl?r0(await fetch(c).then(a=>a.text())):await I(()=>import(c),[],import.meta.url).then(a=>a.default||a)}catch(a){console.warn("[nuxt] Cannot load payload ",c,a)}return null}function Ql(){return!!_().payload.prerenderedAt}let V2=null;async function Jl(){if(V2)return V2;const c=document.getElementById("__NUXT_DATA__");if(!c)return{};const a=r0(c.textContent||""),e=c.dataset.src?await e0(c.dataset.src):void 0;return V2={...a,...e,...window.__NUXT__},V2}function r0(c){return nl(c,_()._payloadRevivers)}function co(c,a){_()._payloadRevivers[c]=a}function M3(c){return c!==null&&typeof c=="object"}function F3(c,a,e=".",r){if(!M3(a))return F3(c,{},e,r);const i=Object.assign({},a);for(const s in c){if(s==="__proto__"||s==="constructor")continue;const n=c[s];n!=null&&(r&&r(i,s,n,e)||(Array.isArray(n)&&Array.isArray(i[s])?i[s]=[...n,...i[s]]:M3(n)&&M3(i[s])?i[s]=F3(n,i[s],(e?`${e}.`:"")+s.toString(),r):i[s]=n))}return i}function ao(c){return(...a)=>a.reduce((e,r)=>F3(e,r,"",c),{})}const eo=ao();class B3 extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1}toJSON(){const a={message:this.message,statusCode:D3(this.statusCode,500)};return this.statusMessage&&(a.statusMessage=i0(this.statusMessage)),this.data!==void 0&&(a.data=this.data),a}}B3.__h3_error__=!0;function E3(c){if(typeof c=="string")return new B3(c);if(ro(c))return c;const a=new B3(c.message??c.statusMessage??"",c.cause?{cause:c.cause}:void 0);if("stack"in c)try{Object.defineProperty(a,"stack",{get(){return c.stack}})}catch{try{a.stack=c.stack}catch{}}if(c.data&&(a.data=c.data),c.statusCode?a.statusCode=D3(c.statusCode,a.statusCode):c.status&&(a.statusCode=D3(c.status,a.statusCode)),c.statusMessage?a.statusMessage=c.statusMessage:c.statusText&&(a.statusMessage=c.statusText),a.statusMessage){const e=a.statusMessage;i0(a.statusMessage)!==e&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return c.fatal!==void 0&&(a.fatal=c.fatal),c.unhandled!==void 0&&(a.unhandled=c.unhandled),a}function ro(c){var a;return((a=c==null?void 0:c.constructor)==null?void 0:a.__h3_error__)===!0}const io=/[^\u0009\u0020-\u007E]/g;function i0(c=""){return c.replace(io,"")}function D3(c,a=200){return!c||(typeof c=="string"&&(c=Number.parseInt(c,10)),c<100||c>999)?a:c}const so="$s";function no(...c){const a=typeof c[c.length-1]=="string"?c.pop():void 0;typeof c[0]!="string"&&c.unshift(a);const[e,r]=c;if(!e||typeof e!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+e);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const i=so+e,s=_(),n=D8(s.payload.state,i);if(n.value===void 0&&r){const f=r();if(Tn(f))return s.payload.state[i]=f,f;n.value=f}return n}const s0=Symbol("layout-meta"),r2=Symbol("route"),R1=()=>{var c;return(c=_())==null?void 0:c.$router},n0=()=>E8()?Q(r2,_()._route):_()._route;/*! @__NO_SIDE_EFFECTS__ */const fo=()=>{try{if(_()._processingMiddleware)return!0}catch{return!0}return!1},lQ=(c,a)=>{c||(c="/");const e=typeof c=="string"?c:$8(c.path||"/",c.query||{})+(c.hash||"");if(a!=null&&a.open){{const{target:f="_blank",windowFeatures:o={}}=a.open,l=Object.entries(o).filter(([t,m])=>m!==void 0).map(([t,m])=>`${t.toLowerCase()}=${m}`).join(", ");open(e,f,l)}return Promise.resolve()}const r=(a==null?void 0:a.external)||a2(e,{acceptRelative:!0});if(r&&!(a!=null&&a.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(r&&O2(e).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");const i=fo();if(!r&&i)return c;const s=R1(),n=_();return r?(a!=null&&a.replace?location.replace(e):location.href=e,i?n.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):a!=null&&a.replace?s.replace(c):s.push(c)},$2=()=>D8(_().payload,"error"),b1=c=>{const a=f4(c);try{const e=_(),r=$2();e.hooks.callHook("app:error",a),r.value=r.value||a}catch{throw a}return a},lo=async(c={})=>{const a=_(),e=$2();a.callHook("app:error:cleared",c),c.redirect&&await R1().replace(c.redirect),e.value=null},oo=c=>!!(c&&typeof c=="object"&&"__nuxt_error"in c),f4=c=>{const a=E3(c);return a.__nuxt_error=!0,a},U6={NuxtError:c=>f4(c),EmptyShallowRef:c=>Z1(c==="_"?void 0:c==="0n"?BigInt(0):JSON.parse(c)),EmptyRef:c=>C1(c==="_"?void 0:c==="0n"?BigInt(0):JSON.parse(c)),ShallowRef:c=>Z1(c),ShallowReactive:c=>q2(c),Ref:c=>C1(c),Reactive:c=>j1(c)},to=h1({name:"nuxt:revive-payload:client",order:-30,async setup(c){let a,e;for(const r in U6)co(r,U6[r]);Object.assign(c.payload,([a,e]=P2(()=>c.runWithContext(Jl)),a=await a,e(),a)),window.__NUXT__=c.payload}});/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const x1=typeof window<"u";function mo(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const P=Object.assign;function C3(c,a){const e={};for(const r in a){const i=a[r];e[r]=J(i)?i.map(c):c(i)}return e}const $1=()=>{},J=Array.isArray,zo=/\/$/,vo=c=>c.replace(zo,"");function d3(c,a,e="/"){let r,i={},s="",n="";const f=a.indexOf("#");let o=a.indexOf("?");return f<o&&f>=0&&(o=-1),o>-1&&(r=a.slice(0,o),s=a.slice(o+1,f>-1?f:a.length),i=c(s)),f>-1&&(r=r||a.slice(0,f),n=a.slice(f,a.length)),r=Vo(r??a,e),{fullPath:r+(s&&"?")+s+n,path:r,query:i,hash:n}}function ho(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function G6(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function Ho(c,a,e){const r=a.matched.length-1,i=e.matched.length-1;return r>-1&&r===i&&w1(a.matched[r],e.matched[i])&&f0(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function w1(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function f0(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!uo(c[e],a[e]))return!1;return!0}function uo(c,a){return J(c)?I6(c,a):J(a)?I6(a,c):c===a}function I6(c,a){return J(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function Vo(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=e.length-1,n,f;for(n=0;n<r.length;n++)if(f=r[n],f!==".")if(f==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+r.slice(n-(n===r.length?1:0)).join("/")}var K1;(function(c){c.pop="pop",c.push="push"})(K1||(K1={}));var U1;(function(c){c.back="back",c.forward="forward",c.unknown=""})(U1||(U1={}));function po(c){if(!c)if(x1){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),vo(c)}const Mo=/^[^#]+#/;function Co(c,a){return c.replace(Mo,"#")+a}function Lo(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const U2=()=>({left:window.pageXOffset,top:window.pageYOffset});function go(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),i=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!i)return;a=Lo(i,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function W6(c,a){return(history.state?history.state.position-a:-1)+c}const _3=new Map;function xo(c,a){_3.set(c,a)}function bo(c){const a=_3.get(c);return _3.delete(c),a}let No=()=>location.protocol+"//"+location.host;function l0(c,a){const{pathname:e,search:r,hash:i}=a,s=c.indexOf("#");if(s>-1){let f=i.includes(c.slice(s))?c.slice(s).length:1,o=i.slice(f);return o[0]!=="/"&&(o="/"+o),G6(o,"")}return G6(e,c)+r+i}function So(c,a,e,r){let i=[],s=[],n=null;const f=({state:z})=>{const H=l0(c,location),V=e.value,p=a.value;let x=0;if(z){if(e.value=H,a.value=z,n&&n===V){n=null;return}x=p?z.position-p.position:0}else r(H);i.forEach(v=>{v(e.value,V,{delta:x,type:K1.pop,direction:x?x>0?U1.forward:U1.back:U1.unknown})})};function o(){n=e.value}function l(z){i.push(z);const H=()=>{const V=i.indexOf(z);V>-1&&i.splice(V,1)};return s.push(H),H}function t(){const{history:z}=window;z.state&&z.replaceState(P({},z.state,{scroll:U2()}),"")}function m(){for(const z of s)z();s=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",t)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",t,{passive:!0}),{pauseListeners:o,listen:l,destroy:m}}function j6(c,a,e,r=!1,i=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:i?U2():null}}function yo(c){const{history:a,location:e}=window,r={value:l0(c,e)},i={value:a.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function s(o,l,t){const m=c.indexOf("#"),z=m>-1?(e.host&&document.querySelector("base")?c:c.slice(m))+o:No()+c+o;try{a[t?"replaceState":"pushState"](l,"",z),i.value=l}catch(H){console.error(H),e[t?"replace":"assign"](z)}}function n(o,l){const t=P({},a.state,j6(i.value.back,o,i.value.forward,!0),l,{position:i.value.position});s(o,t,!0),r.value=o}function f(o,l){const t=P({},i.value,a.state,{forward:o,scroll:U2()});s(t.current,t,!0);const m=P({},j6(r.value,o,null),{position:t.position+1},l);s(o,m,!1),r.value=o}return{location:r,state:i,push:f,replace:n}}function o0(c){c=po(c);const a=yo(c),e=So(c,a.state,a.location,a.replace);function r(s,n=!0){n||e.pauseListeners(),history.go(s)}const i=P({location:"",base:c,go:r,createHref:Co.bind(null,c)},a,e);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>a.state.value}),i}function ko(c){return c=location.host?c||location.pathname+location.search:"",c.includes("#")||(c+="#"),o0(c)}function wo(c){return typeof c=="string"||c&&typeof c=="object"}function t0(c){return typeof c=="string"||typeof c=="symbol"}const c1={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},m0=Symbol("");var Z6;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(Z6||(Z6={}));function A1(c,a){return P(new Error,{type:c,[m0]:!0},a)}function e1(c,a){return c instanceof Error&&m0 in c&&(a==null||!!(c.type&a))}const K6="[^/]+?",Ao={sensitive:!1,strict:!1,start:!0,end:!0},Po=/[.+*?^${}()[\]/\\]/g;function To(c,a){const e=P({},Ao,a),r=[];let i=e.start?"^":"";const s=[];for(const l of c){const t=l.length?[]:[90];e.strict&&!l.length&&(i+="/");for(let m=0;m<l.length;m++){const z=l[m];let H=40+(e.sensitive?.25:0);if(z.type===0)m||(i+="/"),i+=z.value.replace(Po,"\\$&"),H+=40;else if(z.type===1){const{value:V,repeatable:p,optional:x,regexp:v}=z;s.push({name:V,repeatable:p,optional:x});const h=v||K6;if(h!==K6){H+=10;try{new RegExp(`(${h})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${V}" (${h}): `+N.message)}}let g=p?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;m||(g=x&&l.length<2?`(?:/${g})`:"/"+g),x&&(g+="?"),i+=g,H+=20,x&&(H+=-8),p&&(H+=-20),h===".*"&&(H+=-50)}t.push(H)}r.push(t)}if(e.strict&&e.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}e.strict||(i+="/?"),e.end?i+="$":e.strict&&(i+="(?:/|$)");const n=new RegExp(i,e.sensitive?"":"i");function f(l){const t=l.match(n),m={};if(!t)return null;for(let z=1;z<t.length;z++){const H=t[z]||"",V=s[z-1];m[V.name]=H&&V.repeatable?H.split("/"):H}return m}function o(l){let t="",m=!1;for(const z of c){(!m||!t.endsWith("/"))&&(t+="/"),m=!1;for(const H of z)if(H.type===0)t+=H.value;else if(H.type===1){const{value:V,repeatable:p,optional:x}=H,v=V in l?l[V]:"";if(J(v)&&!p)throw new Error(`Provided param "${V}" is an array but it is not repeatable (* or + modifiers)`);const h=J(v)?v.join("/"):v;if(!h)if(x)z.length<2&&(t.endsWith("/")?t=t.slice(0,-1):m=!0);else throw new Error(`Missing required param "${V}"`);t+=h}}return t||"/"}return{re:n,score:r,keys:s,parse:f,stringify:o}}function Ro(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function Fo(c,a){let e=0;const r=c.score,i=a.score;for(;e<r.length&&e<i.length;){const s=Ro(r[e],i[e]);if(s)return s;e++}if(Math.abs(i.length-r.length)===1){if(X6(r))return 1;if(X6(i))return-1}return i.length-r.length}function X6(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const Bo={type:0,value:""},Eo=/[a-zA-Z0-9_]/;function Do(c){if(!c)return[[]];if(c==="/")return[[Bo]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(H){throw new Error(`ERR (${e})/"${l}": ${H}`)}let e=0,r=e;const i=[];let s;function n(){s&&i.push(s),s=[]}let f=0,o,l="",t="";function m(){l&&(e===0?s.push({type:0,value:l}):e===1||e===2||e===3?(s.length>1&&(o==="*"||o==="+")&&a(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:t,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):a("Invalid state to consume buffer"),l="")}function z(){l+=o}for(;f<c.length;){if(o=c[f++],o==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:o==="/"?(l&&m(),n()):o===":"?(m(),e=1):z();break;case 4:z(),e=r;break;case 1:o==="("?e=2:Eo.test(o)?z():(m(),e=0,o!=="*"&&o!=="?"&&o!=="+"&&f--);break;case 2:o===")"?t[t.length-1]=="\\"?t=t.slice(0,-1)+o:e=3:t+=o;break;case 3:m(),e=0,o!=="*"&&o!=="?"&&o!=="+"&&f--,t="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${l}"`),m(),n(),i}function _o(c,a,e){const r=To(Do(c.path),e),i=P(r,{record:c,parent:a,children:[],alias:[]});return a&&!i.record.aliasOf==!a.record.aliasOf&&a.children.push(i),i}function qo(c,a){const e=[],r=new Map;a=J6({strict:!1,end:!0,sensitive:!1},a);function i(t){return r.get(t)}function s(t,m,z){const H=!z,V=Oo(t);V.aliasOf=z&&z.record;const p=J6(a,t),x=[V];if("alias"in t){const g=typeof t.alias=="string"?[t.alias]:t.alias;for(const N of g)x.push(P({},V,{components:z?z.record.components:V.components,path:N,aliasOf:z?z.record:V}))}let v,h;for(const g of x){const{path:N}=g;if(m&&N[0]!=="/"){const S=m.record.path,w=S[S.length-1]==="/"?"":"/";g.path=m.record.path+(N&&w+N)}if(v=_o(g,m,p),z?z.alias.push(v):(h=h||v,h!==v&&h.alias.push(v),H&&t.name&&!Q6(v)&&n(t.name)),V.children){const S=V.children;for(let w=0;w<S.length;w++)s(S[w],v,z&&z.children[w])}z=z||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&o(v)}return h?()=>{n(h)}:$1}function n(t){if(t0(t)){const m=r.get(t);m&&(r.delete(t),e.splice(e.indexOf(m),1),m.children.forEach(n),m.alias.forEach(n))}else{const m=e.indexOf(t);m>-1&&(e.splice(m,1),t.record.name&&r.delete(t.record.name),t.children.forEach(n),t.alias.forEach(n))}}function f(){return e}function o(t){let m=0;for(;m<e.length&&Fo(t,e[m])>=0&&(t.record.path!==e[m].record.path||!z0(t,e[m]));)m++;e.splice(m,0,t),t.record.name&&!Q6(t)&&r.set(t.record.name,t)}function l(t,m){let z,H={},V,p;if("name"in t&&t.name){if(z=r.get(t.name),!z)throw A1(1,{location:t});p=z.record.name,H=P(Y6(m.params,z.keys.filter(h=>!h.optional).map(h=>h.name)),t.params&&Y6(t.params,z.keys.map(h=>h.name))),V=z.stringify(H)}else if("path"in t)V=t.path,z=e.find(h=>h.re.test(V)),z&&(H=z.parse(V),p=z.record.name);else{if(z=m.name?r.get(m.name):e.find(h=>h.re.test(m.path)),!z)throw A1(1,{location:t,currentLocation:m});p=z.record.name,H=P({},m.params,t.params),V=z.stringify(H)}const x=[];let v=z;for(;v;)x.unshift(v.record),v=v.parent;return{name:p,path:V,params:H,matched:x,meta:Uo(x)}}return c.forEach(t=>s(t)),{addRoute:s,resolve:l,removeRoute:n,getRoutes:f,getRecordMatcher:i}}function Y6(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function Oo(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:$o(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function $o(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function Q6(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function Uo(c){return c.reduce((a,e)=>P(a,e.meta),{})}function J6(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function z0(c,a){return a.children.some(e=>e===c||z0(c,e))}const v0=/#/g,Go=/&/g,Io=/\//g,Wo=/=/g,jo=/\?/g,h0=/\+/g,Zo=/%5B/g,Ko=/%5D/g,H0=/%5E/g,Xo=/%60/g,u0=/%7B/g,Yo=/%7C/g,V0=/%7D/g,Qo=/%20/g;function l4(c){return encodeURI(""+c).replace(Yo,"|").replace(Zo,"[").replace(Ko,"]")}function Jo(c){return l4(c).replace(u0,"{").replace(V0,"}").replace(H0,"^")}function q3(c){return l4(c).replace(h0,"%2B").replace(Qo,"+").replace(v0,"%23").replace(Go,"%26").replace(Xo,"`").replace(u0,"{").replace(V0,"}").replace(H0,"^")}function ct(c){return q3(c).replace(Wo,"%3D")}function at(c){return l4(c).replace(v0,"%23").replace(jo,"%3F")}function et(c){return c==null?"":at(c).replace(Io,"%2F")}function F2(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function rt(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(h0," "),n=s.indexOf("="),f=F2(n<0?s:s.slice(0,n)),o=n<0?null:F2(s.slice(n+1));if(f in a){let l=a[f];J(l)||(l=a[f]=[l]),l.push(o)}else a[f]=o}return a}function c8(c){let a="";for(let e in c){const r=c[e];if(e=ct(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(J(r)?r.map(s=>s&&q3(s)):[r&&q3(r)]).forEach(s=>{s!==void 0&&(a+=(a.length?"&":"")+e,s!=null&&(a+="="+s))})}return a}function it(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=J(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return a}const st=Symbol(""),a8=Symbol(""),o4=Symbol(""),t4=Symbol(""),O3=Symbol("");function q1(){let c=[];function a(r){return c.push(r),()=>{const i=c.indexOf(r);i>-1&&c.splice(i,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function o1(c,a,e,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((n,f)=>{const o=m=>{m===!1?f(A1(4,{from:e,to:a})):m instanceof Error?f(m):wo(m)?f(A1(2,{from:a,to:m})):(s&&r.enterCallbacks[i]===s&&typeof m=="function"&&s.push(m),n())},l=c.call(r&&r.instances[i],a,e,o);let t=Promise.resolve(l);c.length<3&&(t=t.then(o)),t.catch(m=>f(m))})}function L3(c,a,e,r){const i=[];for(const s of c)for(const n in s.components){let f=s.components[n];if(!(a!=="beforeRouteEnter"&&!s.instances[n]))if(nt(f)){const l=(f.__vccOpts||f)[a];l&&i.push(o1(l,e,r,s,n))}else{let o=f();i.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${s.path}"`));const t=mo(l)?l.default:l;s.components[n]=t;const z=(t.__vccOpts||t)[a];return z&&o1(z,e,r,s,n)()}))}}return i}function nt(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function e8(c){const a=Q(o4),e=Q(t4),r=G(()=>a.resolve(B(c.to))),i=G(()=>{const{matched:o}=r.value,{length:l}=o,t=o[l-1],m=e.matched;if(!t||!m.length)return-1;const z=m.findIndex(w1.bind(null,t));if(z>-1)return z;const H=r8(o[l-2]);return l>1&&r8(t)===H&&m[m.length-1].path!==H?m.findIndex(w1.bind(null,o[l-2])):z}),s=G(()=>i.value>-1&&tt(e.params,r.value.params)),n=G(()=>i.value>-1&&i.value===e.matched.length-1&&f0(e.params,r.value.params));function f(o={}){return ot(o)?a[B(c.replace)?"replace":"push"](B(c.to)).catch($1):Promise.resolve()}return{route:r,href:G(()=>r.value.href),isActive:s,isExactActive:n,navigate:f}}const ft=v1({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:e8,setup(c,{slots:a}){const e=j1(e8(c)),{options:r}=Q(o4),i=G(()=>({[i8(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[i8(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=a.default&&a.default(e);return c.custom?s:K("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:i.value},s)}}}),lt=ft;function ot(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function tt(c,a){for(const e in a){const r=a[e],i=c[e];if(typeof r=="string"){if(r!==i)return!1}else if(!J(i)||i.length!==r.length||r.some((s,n)=>s!==i[n]))return!1}return!0}function r8(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const i8=(c,a,e)=>c??a??e,mt=v1({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=Q(O3),i=G(()=>c.route||r.value),s=Q(a8,0),n=G(()=>{let l=B(s);const{matched:t}=i.value;let m;for(;(m=t[l])&&!m.components;)l++;return l}),f=G(()=>i.value.matched[n.value]);y1(a8,G(()=>n.value+1)),y1(st,f),y1(O3,i);const o=C1();return e4(()=>[o.value,f.value,c.name],([l,t,m],[z,H,V])=>{t&&(t.instances[m]=l,H&&H!==t&&l&&l===z&&(t.leaveGuards.size||(t.leaveGuards=H.leaveGuards),t.updateGuards.size||(t.updateGuards=H.updateGuards))),l&&t&&(!H||!w1(t,H)||!z)&&(t.enterCallbacks[m]||[]).forEach(p=>p(l))},{flush:"post"}),()=>{const l=i.value,t=c.name,m=f.value,z=m&&m.components[t];if(!z)return s8(e.default,{Component:z,route:l});const H=m.props[t],V=H?H===!0?l.params:typeof H=="function"?H(l):H:null,x=K(z,P({},V,a,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(m.instances[t]=null)},ref:o}));return s8(e.default,{Component:x,route:l})||x}}});function s8(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const p0=mt;function zt(c){const a=qo(c.routes,c),e=c.parseQuery||rt,r=c.stringifyQuery||c8,i=c.history,s=q1(),n=q1(),f=q1(),o=Z1(c1);let l=c1;x1&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const t=C3.bind(null,u=>""+u),m=C3.bind(null,et),z=C3.bind(null,F2);function H(u,d){let M,b;return t0(u)?(M=a.getRecordMatcher(u),b=d):b=u,a.addRoute(b,M)}function V(u){const d=a.getRecordMatcher(u);d&&a.removeRoute(d)}function p(){return a.getRoutes().map(u=>u.record)}function x(u){return!!a.getRecordMatcher(u)}function v(u,d){if(d=P({},d||o.value),typeof u=="string"){const y=d3(e,u,d.path),$=a.resolve({path:y.path},d),E1=i.createHref(y.fullPath);return P(y,$,{params:z($.params),hash:F2(y.hash),redirectedFrom:void 0,href:E1})}let M;if("path"in u)M=P({},u,{path:d3(e,u.path,d.path).path});else{const y=P({},u.params);for(const $ in y)y[$]==null&&delete y[$];M=P({},u,{params:m(y)}),d.params=m(d.params)}const b=a.resolve(M,d),T=u.hash||"";b.params=t(z(b.params));const q=ho(r,P({},u,{hash:Jo(T),path:b.path})),k=i.createHref(q);return P({fullPath:q,hash:T,query:r===c8?it(u.query):u.query||{}},b,{redirectedFrom:void 0,href:k})}function h(u){return typeof u=="string"?d3(e,u,o.value.path):P({},u)}function g(u,d){if(l!==u)return A1(8,{from:d,to:u})}function N(u){return A(u)}function S(u){return N(P(h(u),{replace:!0}))}function w(u){const d=u.matched[u.matched.length-1];if(d&&d.redirect){const{redirect:M}=d;let b=typeof M=="function"?M(u):M;return typeof b=="string"&&(b=b.includes("?")||b.includes("#")?b=h(b):{path:b},b.params={}),P({query:u.query,hash:u.hash,params:"path"in b?{}:u.params},b)}}function A(u,d){const M=l=v(u),b=o.value,T=u.state,q=u.force,k=u.replace===!0,y=w(M);if(y)return A(P(h(y),{state:typeof y=="object"?P({},T,y.state):T,force:q,replace:k}),d||M);const $=M;$.redirectedFrom=d;let E1;return!q&&Ho(r,b,M)&&(E1=A1(16,{to:$,from:b}),N6(b,b,!0,!1)),(E1?Promise.resolve(E1):z2($,b)).catch(W=>e1(W)?e1(W,2)?W:v3(W):z3(W,$,b)).then(W=>{if(W){if(e1(W,2))return A(P({replace:k},h(W.to),{state:typeof W.to=="object"?P({},T,W.to.state):T,force:q}),d||$)}else W=x6($,b,!0,k,T);return g6($,b,W),W})}function E(u,d){const M=g(u,d);return M?Promise.reject(M):Promise.resolve()}function O(u){const d=h2.values().next().value;return d&&typeof d.runWithContext=="function"?d.runWithContext(u):u()}function z2(u,d){let M;const[b,T,q]=vt(u,d);M=L3(b.reverse(),"beforeRouteLeave",u,d);for(const y of b)y.leaveGuards.forEach($=>{M.push(o1($,u,d))});const k=E.bind(null,u,d);return M.push(k),g1(M).then(()=>{M=[];for(const y of s.list())M.push(o1(y,u,d));return M.push(k),g1(M)}).then(()=>{M=L3(T,"beforeRouteUpdate",u,d);for(const y of T)y.updateGuards.forEach($=>{M.push(o1($,u,d))});return M.push(k),g1(M)}).then(()=>{M=[];for(const y of q)if(y.beforeEnter)if(J(y.beforeEnter))for(const $ of y.beforeEnter)M.push(o1($,u,d));else M.push(o1(y.beforeEnter,u,d));return M.push(k),g1(M)}).then(()=>(u.matched.forEach(y=>y.enterCallbacks={}),M=L3(q,"beforeRouteEnter",u,d),M.push(k),g1(M))).then(()=>{M=[];for(const y of n.list())M.push(o1(y,u,d));return M.push(k),g1(M)}).catch(y=>e1(y,8)?y:Promise.reject(y))}function g6(u,d,M){f.list().forEach(b=>O(()=>b(u,d,M)))}function x6(u,d,M,b,T){const q=g(u,d);if(q)return q;const k=d===c1,y=x1?history.state:{};M&&(b||k?i.replace(u.fullPath,P({scroll:k&&y&&y.scroll},T)):i.push(u.fullPath,T)),o.value=u,N6(u,d,M,k),v3()}let B1;function Nn(){B1||(B1=i.listen((u,d,M)=>{if(!S6.listening)return;const b=v(u),T=w(b);if(T){A(P(T,{replace:!0}),b).catch($1);return}l=b;const q=o.value;x1&&xo(W6(q.fullPath,M.delta),U2()),z2(b,q).catch(k=>e1(k,12)?k:e1(k,2)?(A(k.to,b).then(y=>{e1(y,20)&&!M.delta&&M.type===K1.pop&&i.go(-1,!1)}).catch($1),Promise.reject()):(M.delta&&i.go(-M.delta,!1),z3(k,b,q))).then(k=>{k=k||x6(b,q,!1),k&&(M.delta&&!e1(k,8)?i.go(-M.delta,!1):M.type===K1.pop&&e1(k,20)&&i.go(-1,!1)),g6(b,q,k)}).catch($1)}))}let m3=q1(),b6=q1(),v2;function z3(u,d,M){v3(u);const b=b6.list();return b.length?b.forEach(T=>T(u,d,M)):console.error(u),Promise.reject(u)}function Sn(){return v2&&o.value!==c1?Promise.resolve():new Promise((u,d)=>{m3.add([u,d])})}function v3(u){return v2||(v2=!u,Nn(),m3.list().forEach(([d,M])=>u?M(u):d()),m3.reset()),u}function N6(u,d,M,b){const{scrollBehavior:T}=c;if(!x1||!T)return Promise.resolve();const q=!M&&bo(W6(u.fullPath,0))||(b||!M)&&history.state&&history.state.scroll||null;return T1().then(()=>T(u,d,q)).then(k=>k&&go(k)).catch(k=>z3(k,u,d))}const h3=u=>i.go(u);let H3;const h2=new Set,S6={currentRoute:o,listening:!0,addRoute:H,removeRoute:V,hasRoute:x,getRoutes:p,resolve:v,options:c,push:N,replace:S,go:h3,back:()=>h3(-1),forward:()=>h3(1),beforeEach:s.add,beforeResolve:n.add,afterEach:f.add,onError:b6.add,isReady:Sn,install(u){const d=this;u.component("RouterLink",lt),u.component("RouterView",p0),u.config.globalProperties.$router=d,Object.defineProperty(u.config.globalProperties,"$route",{enumerable:!0,get:()=>B(o)}),x1&&!H3&&o.value===c1&&(H3=!0,N(i.location).catch(T=>{}));const M={};for(const T in c1)Object.defineProperty(M,T,{get:()=>o.value[T],enumerable:!0});u.provide(o4,d),u.provide(t4,q2(M)),u.provide(O3,o);const b=u.unmount;h2.add(u),u.unmount=function(){h2.delete(u),h2.size<1&&(l=c1,B1&&B1(),B1=null,o.value=c1,H3=!1,v2=!1),b()}}};function g1(u){return u.reduce((d,M)=>d.then(()=>O(M)),Promise.resolve())}return S6}function vt(c,a){const e=[],r=[],i=[],s=Math.max(a.matched.length,c.matched.length);for(let n=0;n<s;n++){const f=a.matched[n];f&&(c.matched.find(l=>w1(l,f))?r.push(f):e.push(f));const o=c.matched[n];o&&(a.matched.find(l=>w1(l,o))||i.push(o))}return[e,r,i]}function ht(){return Q(t4)}const n8=[{name:"apple",path:"/apple",meta:{},alias:[],redirect:void 0,component:()=>I(()=>import("./apple.d1c23844.js"),["./apple.d1c23844.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./apple.985460db.css"],import.meta.url).then(c=>c.default||c)},{name:"architect",path:"/architect",meta:{},alias:[],redirect:void 0,component:()=>I(()=>import("./architect.4edb53cd.js"),["./architect.4edb53cd.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./architect.c2553bfa.css"],import.meta.url).then(c=>c.default||c)},{name:"business",path:"/business",meta:{},alias:[],redirect:void 0,component:()=>I(()=>import("./business.cbbdef91.js"),["./business.cbbdef91.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./business.5b7e022b.css"],import.meta.url).then(c=>c.default||c)},{name:"classic_car",path:"/classic_car",meta:{},alias:[],redirect:void 0,component:()=>I(()=>import("./classic_car.4eef4b0a.js"),["./classic_car.4eef4b0a.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./classic_car.77528d98.css"],import.meta.url).then(c=>c.default||c)},{name:"cool",path:"/cool",meta:{},alias:[],redirect:void 0,component:()=>I(()=>import("./cool.91a9628c.js"),["./cool.91a9628c.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./cool.eb14a0ad.css"],import.meta.url).then(c=>c.default||c)},{name:"creative_design",path:"/creative_design",meta:{},alias:[],redirect:void 0,component:()=>I(()=>import("./creative_design.b186a043.js"),["./creative_design.b186a043.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./creative_design.2bf1b352.css"],import.meta.url).then(c=>c.default||c)},{name:"foods",path:"/foods",meta:{},alias:[],redirect:void 0,component:()=>I(()=>import("./foods.ee016be1.js"),["./foods.ee016be1.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./foods.e502b8e7.css"],import.meta.url).then(c=>c.default||c)},{name:"index",path:"/",meta:{},alias:[],redirect:void 0,component:()=>I(()=>import("./index.bb1d8554.js"),["./index.bb1d8554.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./index.3c4ebcd6.css"],import.meta.url).then(c=>c.default||c)},{name:"paypal",path:"/paypal",meta:{},alias:[],redirect:void 0,component:()=>I(()=>import("./paypal.649042e7.js"),["./paypal.649042e7.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./paypal.e88003a1.css"],import.meta.url).then(c=>c.default||c)},{name:"portafolio",path:"/portafolio",meta:{},alias:[],redirect:void 0,component:()=>I(()=>import("./portafolio.f2b89d08.js"),["./portafolio.f2b89d08.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./portafolio.e0d9e33c.css"],import.meta.url).then(c=>c.default||c)},{name:"road",path:"/road",meta:{},alias:[],redirect:void 0,component:()=>I(()=>import("./road.25220a05.js"),["./road.25220a05.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./road.1eb42817.css"],import.meta.url).then(c=>c.default||c)},{name:"wine",path:"/wine",meta:{},alias:[],redirect:void 0,component:()=>I(()=>import("./wine.dd38b8c0.js"),["./wine.dd38b8c0.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./wine.ca0819bc.css"],import.meta.url).then(c=>c.default||c)}],Ht={scrollBehavior(c,a,e){const r=_();let i=e||void 0;if(!i&&a&&c&&c.meta.scrollToTop!==!1&&ut(a,c)&&(i={left:0,top:0}),c.path===a.path){if(a.hash&&!c.hash)return{left:0,top:0};if(c.hash)return{el:c.hash,top:f8(c.hash)}}const s=f=>!!(f.meta.pageTransition??R3),n=s(a)&&s(c)?"page:transition:finish":"page:finish";return new Promise(f=>{r.hooks.hookOnce(n,async()=>{await T1(),c.hash&&(i={el:c.hash,top:f8(c.hash)}),f(i)})})}};function f8(c){try{const a=document.querySelector(c);if(a)return parseFloat(getComputedStyle(a).scrollMarginTop)}catch{}return 0}function ut(c,a){const e=a.matched.every((r,i)=>{var s,n,f;return((s=r.components)==null?void 0:s.default)===((f=(n=c.matched[i])==null?void 0:n.components)==null?void 0:f.default)});return!!(!e||e&&JSON.stringify(c.params)!==JSON.stringify(a.params))}const Vt={},j={...Vt,...Ht},pt=async c=>{var o;let a,e;if(!((o=c.meta)!=null&&o.validate))return;const r=_(),i=R1();if(([a,e]=P2(()=>Promise.resolve(c.meta.validate(c))),a=await a,e(),a)===!0)return;const n=f4({statusCode:404,statusMessage:`Page Not Found: ${c.fullPath}`}),f=i.beforeResolve(l=>{if(f(),l===c){const t=i.afterEach(async()=>{t(),await r.runWithContext(()=>b1(n)),window.history.pushState({},"",c.fullPath)});return!1}})},Mt=[pt],G1={};function Ct(c,a,e){const{pathname:r,search:i,hash:s}=a,n=c.indexOf("#");if(n>-1){const l=s.includes(c.slice(n))?c.slice(n).length:1;let t=s.slice(l);return t[0]!=="/"&&(t="/"+t),w6(t,"")}const f=w6(r,c),o=!e||pf(f,e,{trailingSlash:!0})?f:e;return o+(o.includes("?")?"":i)+s}const dt=h1({name:"nuxt:router",enforce:"pre",async setup(c){var p,x;let a,e,r=s4().app.baseURL;j.hashMode&&!r.includes("#")&&(r+="#");const i=((p=j.history)==null?void 0:p.call(j,r))??(j.hashMode?ko(r):o0(r)),s=((x=j.routes)==null?void 0:x.call(j,n8))??n8;let n;const f=Ct(r,window.location,c.payload.path),o=zt({...j,scrollBehavior:(v,h,g)=>{var N;if(h===c1){n=g;return}return o.options.scrollBehavior=j.scrollBehavior,(N=j.scrollBehavior)==null?void 0:N.call(j,v,c1,n||g)},history:i,routes:s});c.vueApp.use(o);const l=Z1(o.currentRoute.value);o.afterEach((v,h)=>{l.value=h}),Object.defineProperty(c.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const t=Z1(o.resolve(f)),m=()=>{t.value=o.currentRoute.value};c.hook("page:finish",m),o.afterEach((v,h)=>{var g,N,S,w;((N=(g=v.matched[0])==null?void 0:g.components)==null?void 0:N.default)===((w=(S=h.matched[0])==null?void 0:S.components)==null?void 0:w.default)&&m()});const z={};for(const v in t.value)Object.defineProperty(z,v,{get:()=>t.value[v]});c._route=q2(z),c._middleware=c._middleware||{global:[],named:{}};const H=$2();try{[a,e]=P2(()=>o.isReady()),await a,e()}catch(v){[a,e]=P2(()=>c.runWithContext(()=>b1(v))),await a,e()}const V=no("_layout");return o.beforeEach(async(v,h)=>{var g;v.meta=j1(v.meta),c.isHydrating&&V.value&&!Rn(v.meta.layout)&&(v.meta.layout=V.value),c._processingMiddleware=!0;{const N=new Set([...Mt,...c._middleware.global]);for(const S of v.matched){const w=S.meta.middleware;if(w)if(Array.isArray(w))for(const A of w)N.add(A);else N.add(w)}for(const S of N){const w=typeof S=="string"?c._middleware.named[S]||await((g=G1[S])==null?void 0:g.call(G1).then(E=>E.default||E)):S;if(!w)throw new Error(`Unknown route middleware: '${S}'.`);const A=await c.runWithContext(()=>w(v,h));if(!c.payload.serverRendered&&c.isHydrating&&(A===!1||A instanceof Error)){const E=A||E3({statusCode:404,statusMessage:`Page Not Found: ${f}`});return await c.runWithContext(()=>b1(E)),!1}if(A||A===!1)return A}}}),o.onError(()=>{delete c._processingMiddleware}),o.afterEach(async(v,h,g)=>{delete c._processingMiddleware,!c.isHydrating&&H.value&&await c.runWithContext(lo),v.matched.length===0&&await c.runWithContext(()=>b1(E3({statusCode:404,fatal:!1,statusMessage:`Page not found: ${v.fullPath}`})))}),c.hooks.hookOnce("app:created",async()=>{try{await o.replace({...o.resolve(f),name:void 0,force:!0}),o.options.scrollBehavior=j.scrollBehavior}catch(v){await c.runWithContext(()=>b1(v))}}),{provide:{router:o}}}}),Lt=h1({name:"nuxt:payload",setup(c){Ql()&&(c.hooks.hook("link:prefetch",async a=>{O2(a).protocol||await O6(a)}),R1().beforeResolve(async(a,e)=>{if(a.path===e.path)return;const r=await O6(a.path);r&&Object.assign(c.static.data,r.data)}))}}),gt=h1({name:"nuxt:global-components"}),xt=h1({name:"nuxt:head",setup(c){const e=$l();e.push(Wl),c.vueApp.use(e);{let r=!0;const i=()=>{r=!1,e.hooks.callHook("entries:updated",e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!r}),c.hooks.hook("page:start",()=>{r=!0}),c.hooks.hook("page:finish",i),c.hooks.hook("app:suspense:resolve",i)}}}),V1={},bt=h1({name:"nuxt:prefetch",setup(c){const a=R1();c.hooks.hook("app:mounted",()=>{a.beforeEach(async e=>{var i;const r=(i=e==null?void 0:e.meta)==null?void 0:i.layout;r&&typeof V1[r]=="function"&&await V1[r]()})}),c.hooks.hook("link:prefetch",e=>{var n,f,o,l;if(a2(e))return;const r=a.resolve(e);if(!r)return;const i=(n=r==null?void 0:r.meta)==null?void 0:n.layout;let s=Array.isArray((f=r==null?void 0:r.meta)==null?void 0:f.middleware)?(o=r==null?void 0:r.meta)==null?void 0:o.middleware:[(l=r==null?void 0:r.meta)==null?void 0:l.middleware];s=s.filter(t=>typeof t=="string");for(const t of s)typeof G1[t]=="function"&&G1[t]();i&&typeof V1[i]=="function"&&V1[i]()})}});function Nt(c={}){const a=c.path||window.location.pathname;let e={};try{e=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(c.force||(e==null?void 0:e.path)!==a||(e==null?void 0:e.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:a,expires:Date.now()+(c.ttl??1e4)}))}catch{}if(c.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:_().payload.state}))}catch{}window.location.pathname!==a?window.location.href=a:window.location.reload()}}const St=h1({name:"nuxt:chunk-reload",setup(c){const a=R1(),e=s4(),r=new Set;a.beforeEach(()=>{r.clear()}),c.hook("app:chunkError",({error:i})=>{r.add(i)}),a.onError((i,s)=>{if(r.has(i)){const f="href"in s&&s.href.startsWith("#")?e.app.baseURL+s.href:e2(e.app.baseURL,s.fullPath);Nt({path:f,persistState:!0})}})}});function l8(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function C(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?l8(Object(e),!0).forEach(function(r){U(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):l8(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function B2(c){"@babel/helpers - typeof";return B2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},B2(c)}function yt(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function o8(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function kt(c,a,e){return a&&o8(c.prototype,a),e&&o8(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function U(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function m4(c,a){return At(c)||Tt(c,a)||M0(c,a)||Ft()}function i2(c){return wt(c)||Pt(c)||M0(c)||Rt()}function wt(c){if(Array.isArray(c))return $3(c)}function At(c){if(Array.isArray(c))return c}function Pt(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Tt(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,f;try{for(e=e.call(c);!(i=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));i=!0);}catch(o){s=!0,f=o}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw f}}return r}}function M0(c,a){if(c){if(typeof c=="string")return $3(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return $3(c,a)}}function $3(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function Rt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ft(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var t8=function(){},z4={},C0={},d0=null,L0={mark:t8,measure:t8};try{typeof window<"u"&&(z4=window),typeof document<"u"&&(C0=document),typeof MutationObserver<"u"&&(d0=MutationObserver),typeof performance<"u"&&(L0=performance)}catch{}var Bt=z4.navigator||{},m8=Bt.userAgent,z8=m8===void 0?"":m8,t1=z4,F=C0,v8=d0,p2=L0;t1.document;var f1=!!F.documentElement&&!!F.head&&typeof F.addEventListener=="function"&&typeof F.createElement=="function",g0=~z8.indexOf("MSIE")||~z8.indexOf("Trident/"),M2,C2,d2,L2,g2,i1="___FONT_AWESOME___",U3=16,x0="fa",b0="svg-inline--fa",d1="data-fa-i2svg",G3="data-fa-pseudo-element",Et="data-fa-pseudo-element-pending",v4="data-prefix",h4="data-icon",h8="fontawesome-i2svg",Dt="async",_t=["HTML","HEAD","STYLE","SCRIPT"],N0=function(){try{return!0}catch{return!1}}(),R="classic",D="sharp",H4=[R,D];function s2(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[R]}})}var X1=s2((M2={},U(M2,R,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),U(M2,D,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),M2)),Y1=s2((C2={},U(C2,R,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),U(C2,D,{solid:"fass",regular:"fasr",light:"fasl"}),C2)),Q1=s2((d2={},U(d2,R,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),U(d2,D,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),d2)),qt=s2((L2={},U(L2,R,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),U(L2,D,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),L2)),Ot=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,S0="fa-layers-text",$t=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ut=s2((g2={},U(g2,R,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),U(g2,D,{900:"fass",400:"fasr",300:"fasl"}),g2)),y0=[1,2,3,4,5,6,7,8,9,10],Gt=y0.concat([11,12,13,14,15,16,17,18,19,20]),It=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],p1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},J1=new Set;Object.keys(Y1[R]).map(J1.add.bind(J1));Object.keys(Y1[D]).map(J1.add.bind(J1));var Wt=[].concat(H4,i2(J1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",p1.GROUP,p1.SWAP_OPACITY,p1.PRIMARY,p1.SECONDARY]).concat(y0.map(function(c){return"".concat(c,"x")})).concat(Gt.map(function(c){return"w-".concat(c)})),I1=t1.FontAwesomeConfig||{};function jt(c){var a=F.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Zt(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(F&&typeof F.querySelector=="function"){var Kt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kt.forEach(function(c){var a=m4(c,2),e=a[0],r=a[1],i=Zt(jt(e));i!=null&&(I1[r]=i)})}var k0={styleDefault:"solid",familyDefault:"classic",cssPrefix:x0,replacementClass:b0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};I1.familyPrefix&&(I1.cssPrefix=I1.familyPrefix);var P1=C(C({},k0),I1);P1.autoReplaceSvg||(P1.observeMutations=!1);var L={};Object.keys(k0).forEach(function(c){Object.defineProperty(L,c,{enumerable:!0,set:function(e){P1[c]=e,W1.forEach(function(r){return r(L)})},get:function(){return P1[c]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(a){P1.cssPrefix=a,W1.forEach(function(e){return e(L)})},get:function(){return P1.cssPrefix}});t1.FontAwesomeConfig=L;var W1=[];function Xt(c){return W1.push(c),function(){W1.splice(W1.indexOf(c),1)}}var l1=U3,a1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yt(c){if(!(!c||!f1)){var a=F.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=F.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}return F.head.insertBefore(a,r),c}}var Qt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function c2(){for(var c=12,a="";c-- >0;)a+=Qt[Math.random()*62|0];return a}function F1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function u4(c){return c.classList?F1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function w0(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jt(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(w0(c[e]),'" ')},"").trim()}function G2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function V4(c){return c.size!==a1.size||c.x!==a1.x||c.y!==a1.y||c.rotate!==a1.rotate||c.flipX||c.flipY}function cm(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(s," ").concat(n," ").concat(f)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:o,path:l}}function am(c){var a=c.transform,e=c.width,r=e===void 0?U3:e,i=c.height,s=i===void 0?U3:i,n=c.startCentered,f=n===void 0?!1:n,o="";return f&&g0?o+="translate(".concat(a.x/l1-r/2,"em, ").concat(a.y/l1-s/2,"em) "):f?o+="translate(calc(-50% + ".concat(a.x/l1,"em), calc(-50% + ").concat(a.y/l1,"em)) "):o+="translate(".concat(a.x/l1,"em, ").concat(a.y/l1,"em) "),o+="scale(".concat(a.size/l1*(a.flipX?-1:1),", ").concat(a.size/l1*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var em=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function A0(){var c=x0,a=b0,e=L.cssPrefix,r=L.replacementClass,i=em;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(r))}return i}var H8=!1;function g3(){L.autoAddCss&&!H8&&(Yt(A0()),H8=!0)}var rm={mixout:function(){return{dom:{css:A0,insertCss:g3}}},hooks:function(){return{beforeDOMElementCreation:function(){g3()},beforeI2svg:function(){g3()}}}},s1=t1||{};s1[i1]||(s1[i1]={});s1[i1].styles||(s1[i1].styles={});s1[i1].hooks||(s1[i1].hooks={});s1[i1].shims||(s1[i1].shims=[]);var Y=s1[i1],P0=[],im=function c(){F.removeEventListener("DOMContentLoaded",c),E2=1,P0.map(function(a){return a()})},E2=!1;f1&&(E2=(F.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(F.readyState),E2||F.addEventListener("DOMContentLoaded",im));function sm(c){f1&&(E2?setTimeout(c,0):P0.push(c))}function n2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?w0(c):"<".concat(a," ").concat(Jt(r),">").concat(s.map(n2).join(""),"</").concat(a,">")}function u8(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var nm=function(a,e){return function(r,i,s,n){return a.call(e,r,i,s,n)}},x3=function(a,e,r,i){var s=Object.keys(a),n=s.length,f=i!==void 0?nm(e,i):e,o,l,t;for(r===void 0?(o=1,t=a[s[0]]):(o=0,t=r);o<n;o++)l=s[o],t=f(t,a[l],l,a);return t};function fm(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function I3(c){var a=fm(c);return a.length===1?a[0].toString(16):null}function lm(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function V8(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function W3(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=V8(a);typeof Y.hooks.addPack=="function"&&!i?Y.hooks.addPack(c,V8(a)):Y.styles[c]=C(C({},Y.styles[c]||{}),s),c==="fas"&&W3("fa",a)}var x2,b2,N2,N1=Y.styles,om=Y.shims,tm=(x2={},U(x2,R,Object.values(Q1[R])),U(x2,D,Object.values(Q1[D])),x2),p4=null,T0={},R0={},F0={},B0={},E0={},mm=(b2={},U(b2,R,Object.keys(X1[R])),U(b2,D,Object.keys(X1[D])),b2);function zm(c){return~Wt.indexOf(c)}function vm(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!zm(i)?i:null}var D0=function(){var a=function(s){return x3(N1,function(n,f,o){return n[o]=x3(f,s,{}),n},{})};T0=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var f=s[2].filter(function(o){return typeof o=="number"});f.forEach(function(o){i[o.toString(16)]=n})}return i}),R0=a(function(i,s,n){if(i[n]=n,s[2]){var f=s[2].filter(function(o){return typeof o=="string"});f.forEach(function(o){i[o]=n})}return i}),E0=a(function(i,s,n){var f=s[2];return i[n]=n,f.forEach(function(o){i[o]=n}),i});var e="far"in N1||L.autoFetchSvg,r=x3(om,function(i,s){var n=s[0],f=s[1],o=s[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(i.names[n]={prefix:f,iconName:o}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:f,iconName:o}),i},{names:{},unicodes:{}});F0=r.names,B0=r.unicodes,p4=I2(L.styleDefault,{family:L.familyDefault})};Xt(function(c){p4=I2(c.styleDefault,{family:L.familyDefault})});D0();function M4(c,a){return(T0[c]||{})[a]}function hm(c,a){return(R0[c]||{})[a]}function M1(c,a){return(E0[c]||{})[a]}function _0(c){return F0[c]||{prefix:null,iconName:null}}function Hm(c){var a=B0[c],e=M4("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function m1(){return p4}var C4=function(){return{prefix:null,iconName:null,rest:[]}};function I2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?R:e,i=X1[r][c],s=Y1[r][c]||Y1[r][i],n=c in Y.styles?c:null;return s||n||null}var p8=(N2={},U(N2,R,Object.keys(Q1[R])),U(N2,D,Object.keys(Q1[D])),N2);function W2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},U(a,R,"".concat(L.cssPrefix,"-").concat(R)),U(a,D,"".concat(L.cssPrefix,"-").concat(D)),a),n=null,f=R;(c.includes(s[R])||c.some(function(l){return p8[R].includes(l)}))&&(f=R),(c.includes(s[D])||c.some(function(l){return p8[D].includes(l)}))&&(f=D);var o=c.reduce(function(l,t){var m=vm(L.cssPrefix,t);if(N1[t]?(t=tm[f].includes(t)?qt[f][t]:t,n=t,l.prefix=t):mm[f].indexOf(t)>-1?(n=t,l.prefix=I2(t,{family:f})):m?l.iconName=m:t!==L.replacementClass&&t!==s[R]&&t!==s[D]&&l.rest.push(t),!i&&l.prefix&&l.iconName){var z=n==="fa"?_0(l.iconName):{},H=M1(l.prefix,l.iconName);z.prefix&&(n=null),l.iconName=z.iconName||H||l.iconName,l.prefix=z.prefix||l.prefix,l.prefix==="far"&&!N1.far&&N1.fas&&!L.autoFetchSvg&&(l.prefix="fas")}return l},C4());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&f===D&&(N1.fass||L.autoFetchSvg)&&(o.prefix="fass",o.iconName=M1(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=m1()||"fas"),o}var um=function(){function c(){yt(this,c),this.definitions={}}return kt(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=C(C({},e.definitions[f]||{}),n[f]),W3(f,n[f]);var o=Q1[R][f];o&&W3(o,n[f]),D0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var n=i[s],f=n.prefix,o=n.iconName,l=n.icon,t=l[2];e[f]||(e[f]={}),t.length>0&&t.forEach(function(m){typeof m=="string"&&(e[f][m]=l)}),e[f][o]=l}),e}}]),c}(),M8=[],S1={},k1={},Vm=Object.keys(k1);function pm(c,a){var e=a.mixoutsTo;return M8=c,S1={},Object.keys(k1).forEach(function(r){Vm.indexOf(r)===-1&&delete k1[r]}),M8.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(e[n]=i[n]),B2(i[n])==="object"&&Object.keys(i[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=i[n][f]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(n){S1[n]||(S1[n]=[]),S1[n].push(s[n])})}r.provides&&r.provides(k1)}),e}function j3(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=S1[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function L1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=S1[c]||[];i.forEach(function(s){s.apply(null,e)})}function n1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return k1[c]?k1[c].apply(null,a):void 0}function Z3(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||m1();if(a)return a=M1(e,a)||a,u8(q0.definitions,e,a)||u8(Y.styles,e,a)}var q0=new um,Mm=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,L1("noAuto")},Cm={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return f1?(L1("beforeI2svg",a),n1("pseudoElements2svg",a),n1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,sm(function(){Lm({autoReplaceSvgRoot:e}),L1("watch",a)})}},dm={icon:function(a){if(a===null)return null;if(B2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:M1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=I2(a[0]);return{prefix:r,iconName:M1(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(L.cssPrefix,"-"))>-1||a.match(Ot))){var i=W2(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||m1(),iconName:M1(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=m1();return{prefix:s,iconName:M1(s,a)||a}}}},X={noAuto:Mm,config:L,dom:Cm,parse:dm,library:q0,findIconDefinition:Z3,toHtml:n2},Lm=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?F:e;(Object.keys(Y.styles).length>0||L.autoFetchSvg)&&f1&&L.autoReplaceSvg&&X.dom.i2svg({node:r})};function j2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return n2(r)})}}),Object.defineProperty(c,"node",{get:function(){if(f1){var r=F.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function gm(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(V4(n)&&e.found&&!r.found){var f=e.width,o=e.height,l={x:f/o/2,y:.5};i.style=G2(C(C({},s),{},{"transform-origin":"".concat(l.x+n.x/16,"em ").concat(l.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function xm(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(L.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},i),{},{id:n}),children:r}]}]}function d4(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,n=c.transform,f=c.symbol,o=c.title,l=c.maskId,t=c.titleId,m=c.extra,z=c.watchable,H=z===void 0?!1:z,V=r.found?r:e,p=V.width,x=V.height,v=i==="fak",h=[L.replacementClass,s?"".concat(L.cssPrefix,"-").concat(s):""].filter(function(O){return m.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(m.classes).join(" "),g={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(x)})},N=v&&!~m.classes.indexOf("fa-fw")?{width:"".concat(p/x*16*.0625,"em")}:{};H&&(g.attributes[d1]=""),o&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(t||c2())},children:[o]}),delete g.attributes.title);var S=C(C({},g),{},{prefix:i,iconName:s,main:e,mask:r,maskId:l,transform:n,symbol:f,styles:C(C({},N),m.styles)}),w=r.found&&e.found?n1("generateAbstractMask",S)||{children:[],attributes:{}}:n1("generateAbstractIcon",S)||{children:[],attributes:{}},A=w.children,E=w.attributes;return S.children=A,S.attributes=E,f?xm(S):gm(S)}function C8(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,n=c.extra,f=c.watchable,o=f===void 0?!1:f,l=C(C(C({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});o&&(l[d1]="");var t=C({},n.styles);V4(i)&&(t.transform=am({transform:i,startCentered:!0,width:e,height:r}),t["-webkit-transform"]=t.transform);var m=G2(t);m.length>0&&(l.style=m);var z=[];return z.push({tag:"span",attributes:l,children:[a]}),s&&z.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),z}function bm(c){var a=c.content,e=c.title,r=c.extra,i=C(C(C({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=G2(r.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var b3=Y.styles;function K3(c){var a=c[0],e=c[1],r=c.slice(4),i=m4(r,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(p1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(p1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(p1.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:n}}var Nm={found:!1,width:512,height:512};function Sm(c,a){!N0&&!L.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function X3(c,a){var e=a;return a==="fa"&&L.styleDefault!==null&&(a=m1()),new Promise(function(r,i){if(n1("missingIconAbstract"),e==="fa"){var s=_0(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&b3[a]&&b3[a][c]){var n=b3[a][c];return r(K3(n))}Sm(c,a),r(C(C({},Nm),{},{icon:L.showMissingIcons&&c?n1("missingIconAbstract")||{}:{}}))})}var d8=function(){},Y3=L.measurePerformance&&p2&&p2.mark&&p2.measure?p2:{mark:d8,measure:d8},O1='FA "6.4.2"',ym=function(a){return Y3.mark("".concat(O1," ").concat(a," begins")),function(){return O0(a)}},O0=function(a){Y3.mark("".concat(O1," ").concat(a," ends")),Y3.measure("".concat(O1," ").concat(a),"".concat(O1," ").concat(a," begins"),"".concat(O1," ").concat(a," ends"))},L4={begin:ym,end:O0},S2=function(){};function L8(c){var a=c.getAttribute?c.getAttribute(d1):null;return typeof a=="string"}function km(c){var a=c.getAttribute?c.getAttribute(v4):null,e=c.getAttribute?c.getAttribute(h4):null;return a&&e}function wm(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(L.replacementClass)}function Am(){if(L.autoReplaceSvg===!0)return y2.replace;var c=y2[L.autoReplaceSvg];return c||y2.replace}function Pm(c){return F.createElementNS("http://www.w3.org/2000/svg",c)}function Tm(c){return F.createElement(c)}function $0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Pm:Tm:e;if(typeof c=="string")return F.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild($0(n,{ceFn:r}))}),i}function Rm(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var y2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore($0(i),e)}),e.getAttribute(d1)===null&&L.keepOriginalSource){var r=F.createComment(Rm(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~u4(e).indexOf(L.replacementClass))return y2.replace(a);var i=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(f,o){return o===L.replacementClass||o.match(i)?f.toSvg.push(o):f.toNode.push(o),f},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=r.map(function(f){return n2(f)}).join(`
`);e.setAttribute(d1,""),e.innerHTML=n}};function g8(c){c()}function U0(c,a){var e=typeof a=="function"?a:S2;if(c.length===0)e();else{var r=g8;L.mutateApproach===Dt&&(r=t1.requestAnimationFrame||g8),r(function(){var i=Am(),s=L4.begin("mutate");c.map(i),s(),e()})}}var g4=!1;function G0(){g4=!0}function Q3(){g4=!1}var D2=null;function x8(c){if(v8&&L.observeMutations){var a=c.treeCallback,e=a===void 0?S2:a,r=c.nodeCallback,i=r===void 0?S2:r,s=c.pseudoElementsCallback,n=s===void 0?S2:s,f=c.observeMutationsRoot,o=f===void 0?F:f;D2=new v8(function(l){if(!g4){var t=m1();F1(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!L8(m.addedNodes[0])&&(L.searchPseudoElements&&n(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&L.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&L8(m.target)&&~It.indexOf(m.attributeName))if(m.attributeName==="class"&&km(m.target)){var z=W2(u4(m.target)),H=z.prefix,V=z.iconName;m.target.setAttribute(v4,H||t),V&&m.target.setAttribute(h4,V)}else wm(m.target)&&i(m.target)})}}),f1&&D2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Fm(){D2&&D2.disconnect()}function Bm(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),n=s[0],f=s.slice(1);return n&&f.length>0&&(r[n]=f.join(":").trim()),r},{})),e}function Em(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=W2(u4(c));return i.prefix||(i.prefix=m1()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=hm(i.prefix,c.innerText)||M4(i.prefix,I3(c.innerText))),!i.iconName&&L.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function Dm(c){var a=F1(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return L.autoA11y&&(e?a["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||c2()):(a["aria-hidden"]="true",a.focusable="false")),a}function _m(){return{iconName:null,title:null,titleId:null,prefix:null,transform:a1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function b8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Em(c),r=e.iconName,i=e.prefix,s=e.rest,n=Dm(c),f=j3("parseNodeAttributes",{},c),o=a.styleParser?Bm(c):[];return C({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:a1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:n}},f)}var qm=Y.styles;function I0(c){var a=L.autoReplaceSvg==="nest"?b8(c,{styleParser:!1}):b8(c);return~a.extra.classes.indexOf(S0)?n1("generateLayersText",c,a):n1("generateSvgReplacementMutation",c,a)}var z1=new Set;H4.map(function(c){z1.add("fa-".concat(c))});Object.keys(X1[R]).map(z1.add.bind(z1));Object.keys(X1[D]).map(z1.add.bind(z1));z1=i2(z1);function N8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!f1)return Promise.resolve();var e=F.documentElement.classList,r=function(m){return e.add("".concat(h8,"-").concat(m))},i=function(m){return e.remove("".concat(h8,"-").concat(m))},s=L.autoFetchSvg?z1:H4.map(function(t){return"fa-".concat(t)}).concat(Object.keys(qm));s.includes("fa")||s.push("fa");var n=[".".concat(S0,":not([").concat(d1,"])")].concat(s.map(function(t){return".".concat(t,":not([").concat(d1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=F1(c.querySelectorAll(n))}catch{}if(f.length>0)r("pending"),i("complete");else return Promise.resolve();var o=L4.begin("onTree"),l=f.reduce(function(t,m){try{var z=I0(m);z&&t.push(z)}catch(H){N0||H.name==="MissingIcon"&&console.error(H)}return t},[]);return new Promise(function(t,m){Promise.all(l).then(function(z){U0(z,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),o(),t()})}).catch(function(z){o(),m(z)})})}function Om(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;I0(c).then(function(e){e&&U0([e],a)})}function $m(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:Z3(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:Z3(i||{})),c(r,C(C({},e),{},{mask:i}))}}var Um=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?a1:r,s=e.symbol,n=s===void 0?!1:s,f=e.mask,o=f===void 0?null:f,l=e.maskId,t=l===void 0?null:l,m=e.title,z=m===void 0?null:m,H=e.titleId,V=H===void 0?null:H,p=e.classes,x=p===void 0?[]:p,v=e.attributes,h=v===void 0?{}:v,g=e.styles,N=g===void 0?{}:g;if(a){var S=a.prefix,w=a.iconName,A=a.icon;return j2(C({type:"icon"},a),function(){return L1("beforeDOMElementCreation",{iconDefinition:a,params:e}),L.autoA11y&&(z?h["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(V||c2()):(h["aria-hidden"]="true",h.focusable="false")),d4({icons:{main:K3(A),mask:o?K3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:w,transform:C(C({},a1),i),symbol:n,title:z,maskId:t,titleId:V,extra:{attributes:h,styles:N,classes:x}})})}},Gm={mixout:function(){return{icon:$m(Um)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=N8,e.nodeCallback=Om,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?F:r,s=e.callback,n=s===void 0?function(){}:s;return N8(i,n)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,n=r.titleId,f=r.prefix,o=r.transform,l=r.symbol,t=r.mask,m=r.maskId,z=r.extra;return new Promise(function(H,V){Promise.all([X3(i,f),t.iconName?X3(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var x=m4(p,2),v=x[0],h=x[1];H([e,d4({icons:{main:v,mask:h},prefix:f,iconName:i,transform:o,symbol:l,maskId:m,title:s,titleId:n,extra:z,watchable:!0})])}).catch(V)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.transform,f=e.styles,o=G2(f);o.length>0&&(i.style=o);var l;return V4(n)&&(l=n1("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},Im={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return j2({type:"layer"},function(){L1("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(f){Array.isArray(f)?f.map(function(o){n=n.concat(o.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(i2(s)).join(" ")},children:n}]})}}}},Wm={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,n=r.classes,f=n===void 0?[]:n,o=r.attributes,l=o===void 0?{}:o,t=r.styles,m=t===void 0?{}:t;return j2({type:"counter",content:e},function(){return L1("beforeDOMElementCreation",{content:e,params:r}),bm({content:e.toString(),title:s,extra:{attributes:l,styles:m,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(i2(f))}})})}}}},jm={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?a1:i,n=r.title,f=n===void 0?null:n,o=r.classes,l=o===void 0?[]:o,t=r.attributes,m=t===void 0?{}:t,z=r.styles,H=z===void 0?{}:z;return j2({type:"text",content:e},function(){return L1("beforeDOMElementCreation",{content:e,params:r}),C8({content:e,transform:C(C({},a1),s),title:f,extra:{attributes:m,styles:H,classes:["".concat(L.cssPrefix,"-layers-text")].concat(i2(l))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,n=r.extra,f=null,o=null;if(g0){var l=parseInt(getComputedStyle(e).fontSize,10),t=e.getBoundingClientRect();f=t.width/l,o=t.height/l}return L.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,C8({content:e.innerHTML,width:f,height:o,transform:s,title:i,extra:n,watchable:!0})])}}},Zm=new RegExp('"',"ug"),S8=[1105920,1112319];function Km(c){var a=c.replace(Zm,""),e=lm(a,0),r=e>=S8[0]&&e<=S8[1],i=a.length===2?a[0]===a[1]:!1;return{value:I3(i?a[0]:a),isSecondary:r||i}}function y8(c,a){var e="".concat(Et).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=F1(c.children),n=s.filter(function(A){return A.getAttribute(G3)===a})[0],f=t1.getComputedStyle(c,a),o=f.getPropertyValue("font-family").match($t),l=f.getPropertyValue("font-weight"),t=f.getPropertyValue("content");if(n&&!o)return c.removeChild(n),r();if(o&&t!=="none"&&t!==""){var m=f.getPropertyValue("content"),z=~["Sharp"].indexOf(o[2])?D:R,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?Y1[z][o[2].toLowerCase()]:Ut[z][l],V=Km(m),p=V.value,x=V.isSecondary,v=o[0].startsWith("FontAwesome"),h=M4(H,p),g=h;if(v){var N=Hm(p);N.iconName&&N.prefix&&(h=N.iconName,H=N.prefix)}if(h&&!x&&(!n||n.getAttribute(v4)!==H||n.getAttribute(h4)!==g)){c.setAttribute(e,g),n&&c.removeChild(n);var S=_m(),w=S.extra;w.attributes[G3]=a,X3(h,H).then(function(A){var E=d4(C(C({},S),{},{icons:{main:A,mask:C4()},prefix:H,iconName:g,extra:w,watchable:!0})),O=F.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(O,c.firstChild):c.appendChild(O),O.outerHTML=E.map(function(z2){return n2(z2)}).join(`
`).splice(1).map(m=>({text:m.replace("webpack:/","").replace(".vue",".js").trim(),internal:m.includes("node_modules")&&!m.includes(".cache")||m.includes("internal")||m.includes("new Promise")})).map(m=>`<span class="stack${m.internal?" internal":""}">${m.text}</span>`).join(`
`);const r=Number(e.statusCode||500),i=r===404,s=e.statusMessage??(i?"Page Not Found":"Internal Server Error"),n=e.message||e.toString(),f=void 0,t=i?y6(()=>I(()=>import("./error-404.d627205d.js"),["./error-404.d627205d.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./error-404.7fc72018.css"],import.meta.url).then(m=>m.default||m)):y6(()=>I(()=>import("./error-500.b21a137c.js"),["./error-500.b21a137c.js","./swiper-vue.d875c6a4.js","./swiper-vue.693050bc.css","./error-500.c5df6088.css"],import.meta.url).then(m=>m.default||m));return(m,z)=>(H1(),u1(B(t),Dn(_n({statusCode:B(r),statusMessage:B(s),description:B(n),stack:B(f)})),null,16))}},F8={__name:"nuxt-root",setup(c){const a=()=>null,e=_(),r=e.deferHydration(),i=!1;y1(r2,n0()),e.hooks.callHookWith(f=>f.map(o=>o()),"vue:setup");const s=$2();qn((f,o,l)=>{if(e.hooks.callHook("vue:error",f,o,l).catch(t=>console.error("[nuxt] Error in `vue:error` hook",t)),oo(f)&&(f.fatal||f.unhandled))return e.runWithContext(()=>b1(f)),!1});const{islandContext:n}=!1;return(f,o)=>(H1(),u1(r4,{onResolve:B(r)},{default:q8(()=>[B(s)?(H1(),u1(B(sQ),{key:0,error:B(s)},null,8,["error"])):B(n)?(H1(),u1(B(a),{key:1,context:B(n)},null,8,["context"])):B(i)?(H1(),u1(On(B(i)),{key:2})):(H1(),u1(B(iQ),{key:3}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=Pf.create({baseURL:Rf()}));let B8;{let c;B8=async function(){var s,n;if(c)return c;const r=!!((s=window.__NUXT__)!=null&&s.serverRendered||((n=document.getElementById("__NUXT_DATA__"))==null?void 0:n.dataset.ssr)==="true")?$n(F8):Un(F8),i=jf({vueApp:r});try{await Kf(i,GY)}catch(f){await i.callHook("app:error",f),i.payload.error=i.payload.error||f}try{await i.hooks.callHook("app:created",r),await i.hooks.callHook("app:beforeMount",r),r.mount("#"+Kl),await i.hooks.callHook("app:mounted",r),await T1()}catch(f){await i.callHook("app:error",f),i.payload.error=i.payload.error||f}return r},c=B8().catch(a=>{console.error("Error while mounting app:",a)})}export{aQ as _,R1 as a,ff as b,O8 as c,fQ as d,a2 as h,lQ as n,O2 as p,_ as u,w3 as w};