import{n as ft,s as ce,G as le}from"./scheduler.BL8a4QiN.js";new URL("sveltekit-internal://");function fe(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function ue(t){return t.split("%25").map(decodeURI).join("%25")}function de(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function ut({href:t}){return t.split("#")[0]}const he=["href","pathname","search","toString","toJSON"];function pe(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of he)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const ge="/__data.json",me=".html__data.json";function _e(t){return t.endsWith(".html")?t.replace(/\.html$/,me):t.replace(/\/$/,"")+ge}function ye(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function we(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const Ft=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&q.delete(yt(t)),Ft(t,n));const q=new Map;function ve(t,n){const e=yt(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&q.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=we(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function be(t,n,e){if(q.size>0){const r=yt(t,e),a=q.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);q.delete(r)}}return window.fetch(n,e)}function yt(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${ye(...a)}"]`}return r}const Ee=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ke(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ae(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return dt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return dt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=Ee.exec(c),[,h,g,d,m]=u;return n.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return dt(c)}).join("")}).join("")}/?$`),params:n}}function Se(t){return!/^\([^)]+\)$/.test(t)}function Ae(t){return t.slice(1).split("/").filter(Se)}function Re(t,n,e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function dt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ie({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=ke(s),d={id:s,exec:m=>{const f=h.exec(m);if(f)return Re(f,g,r)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function qt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function xt(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const N=[];function wt(t,n=ft){let e;const r=new Set;function a(s){if(ce(t,s)&&(t=s,e)){const c=!N.length;for(const l of r)l[1](),N.push(l,t);if(c){for(let l=0;l<N.length;l+=2)N[l][0](N[l+1]);N.length=0}}}function o(s){a(s(t))}function i(s,c=ft){const l=[s,c];return r.add(l),r.size===1&&(e=n(a,o)||ft),s(t),()=>{r.delete(l),r.size===0&&e&&(e(),e=null)}}return{set:a,update:o,subscribe:i}}var Ct;const I=((Ct=globalThis.__sveltekit_1uxoyb5)==null?void 0:Ct.base)??"";var Vt;const Le=((Vt=globalThis.__sveltekit_1uxoyb5)==null?void 0:Vt.assets)??I,Pe="1711282246479",Gt="sveltekit:snapshot",Mt="sveltekit:scroll",Ht="sveltekit:states",Ue="sveltekit:pageurl",$="sveltekit:history",G="sveltekit:navigation",Y={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},K=location.origin;function Bt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function vt(){return{x:pageXOffset,y:pageYOffset}}function O(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Tt={...Y,"":Y.hover};function Kt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function zt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Kt(t)}}function gt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||nt(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===K&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function J(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=O(s,"preload-code")),a===null&&(a=O(s,"preload-data")),n===null&&(n=O(s,"keepfocus")),e===null&&(e=O(s,"noscroll")),o===null&&(o=O(s,"reload")),i===null&&(i=O(s,"replacestate")),s=Kt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Tt[r??"off"],preload_data:Tt[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Nt(t){const n=wt(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function xe(){const{set:t,subscribe:n}=wt(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${Le}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Pe;return i&&(t(!0),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function nt(t,n){return t.origin!==K||!t.pathname.startsWith(n)}const Te=-1,Ne=-2,Oe=-3,je=-4,$e=-5,De=-6;function Ce(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,i=!1){if(o===Te)return;if(o===Oe)return NaN;if(o===je)return 1/0;if(o===$e)return-1/0;if(o===De)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==Ne&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const Yt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Yt];const Ve=new Set([...Yt]);[...Ve];function Fe(t){return t.filter(n=>n!=null)}class at{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Jt{constructor(n,e){this.status=n,this.location=e}}class bt extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const qe="x-sveltekit-invalidated",Ge="x-sveltekit-trailing-slash";function W(t){return t instanceof at||t instanceof bt?t.status:500}function Me(t){return t instanceof bt?t.text:"Internal Error"}const T=qt(Mt)??{},M=qt(Gt)??{},U={url:Nt({}),page:Nt({}),navigating:wt(null),updated:xe()};function Et(t){T[t]=vt()}function He(t,n){let e=t+1;for(;T[e];)delete T[e],e+=1;for(e=n+1;M[e];)delete M[e],e+=1}function D(t){return location.href=t.href,new Promise(()=>{})}function Ot(){}let rt,mt,X,L,_t,V;const Z=[],Q=[];let P=null;const Wt=[],Be=[];let j=[],y={branch:[],error:null,url:null},kt=!1,tt=!1,jt=!0,H=!1,F=!1,Xt=!1,St=!1,ot,k,R,A,C,ht;async function nn(t,n,e){var a,o;document.URL!==location.href&&(location.href=location.href),V=t,rt=Ie(t),L=document.documentElement,_t=n,mt=t.nodes[0],X=t.nodes[1],mt(),X(),k=(a=history.state)==null?void 0:a[$],R=(o=history.state)==null?void 0:o[G],k||(k=R=Date.now(),history.replaceState({...history.state,[$]:k,[G]:R},""));const r=T[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await Qe(_t,e):Xe(location.href,{replaceState:!0}),Ze()}async function Ke(){if(await(ht||(ht=Promise.resolve())),!ht)return;ht=null;const t=it(y.url,!0);P=null;const n=C={},e=t&&await Lt(t);if(!(!e||n!==C)){if(e.type==="redirect")return At(new URL(e.location,y.url).href,{},1,n);e.props.page&&(A=e.props.page),y=e.state,Zt(),ot.$set(e.props)}}function Zt(){Z.length=0,St=!1}function Qt(t){Q.some(n=>n==null?void 0:n.snapshot)&&(M[t]=Q.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function te(t){var n;(n=M[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=Q[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function $t(){Et(k),xt(Mt,T),Qt(R),xt(Gt,M)}async function At(t,n,e,r){return z({type:"goto",url:Bt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(St=!0)}})}async function ze(t){return P={id:t.id,promise:Lt(t).then(n=>(n.type==="loaded"&&n.state.error&&(P=null),n))},P.promise}async function pt(t){const n=rt.find(e=>e.exec(ne(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function ee(t,n){var a;y=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),A=t.props.page,ot=new V.root({target:n,props:{...t.props,stores:U,components:Q},hydrate:!0}),te(R);const r={from:null,to:{params:y.params,route:{id:((a=y.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(o=>o(r)),tt=!0}async function et({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(I&&(t.pathname===I||t.pathname===I+"/"))s="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);t.pathname=fe(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:Fe(e).map(d=>d.node.component),page:A}};i!==void 0&&(c.props.form=i);let l={},u=!A,h=0;for(let d=0;d<Math.max(e.length,y.branch.length);d+=1){const m=e[d],f=y.branch[d];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||t.href!==y.url.href||y.error!==a||i!==void 0&&i!==A.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?l:A.data}),c}async function Rt({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){const{href:v}=new URL(_,e);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(f,_)=>(s&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(s&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:pe(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,_){let v;f instanceof Request?(v=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):v=f;const S=new URL(v,e);return s&&d(S.href),S.origin===e.origin&&(v=S.href.slice(e.origin.length)),tt?be(v,S.href,_):ve(v,_)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Dt(t,n,e,r,a,o){if(St)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==y.params[i])return!0;for(const i of a.dependencies)if(Z.some(s=>s(new URL(i))))return!0;return!1}function It(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function Ye(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}async function Lt({id:t,invalidating:n,url:e,params:r,route:a}){if((P==null?void 0:P.id)===t)return P.promise;const{errors:o,layouts:i,leaf:s}=a,c=[...i,s];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let l=null;const u=y.url?t!==y.url.pathname+y.url.search:!1,h=y.route?a.id!==y.route.id:!1,g=Ye(y.url,e);let d=!1;const m=c.map((p,w)=>{var x;const b=y.branch[w],E=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||Dt(d,h,u,g,(x=b.server)==null?void 0:x.uses,r));return E&&(d=!0),E});if(m.some(Boolean)){try{l=await oe(e,m)}catch(p){return st({status:W(p),error:await B(p,{url:e,params:r,route:{id:a.id}}),url:e,route:a})}if(l.type==="redirect")return l}const f=l==null?void 0:l.nodes;let _=!1;const v=c.map(async(p,w)=>{var ct;if(!p)return;const b=y.branch[w],E=f==null?void 0:f[w];if((!E||E.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!Dt(_,h,u,g,(ct=b.universal)==null?void 0:ct.uses,r))return b;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return Rt({loader:p[1],url:e,params:r,route:a,parent:async()=>{var Ut;const Pt={};for(let lt=0;lt<w;lt+=1)Object.assign(Pt,(Ut=await v[lt])==null?void 0:Ut.data);return Pt},server_data_node:It(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const S=[];for(let p=0;p<c.length;p+=1)if(c[p])try{S.push(await v[p])}catch(w){if(w instanceof Jt)return{type:"redirect",location:w.location};let b=W(w),E;if(f!=null&&f.includes(w))b=w.status??b,E=w.error;else if(w instanceof at)E=w.body;else{if(await U.updated.check())return await D(e);E=await B(w,{params:r,url:e,route:{id:a.id}})}const x=await Je(p,S,o);return x?await et({url:e,params:r,branch:S.slice(0,x.idx).concat(x.node),status:b,error:E,route:a}):await re(e,{id:a.id},E,b)}else S.push(void 0);return await et({url:e,params:r,branch:S,status:200,error:null,route:a,form:n?void 0:null})}async function Je(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function st({status:t,error:n,url:e,route:r}){const a={};let o=null;if(V.server_loads[0]===0)try{const l=await oe(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==K||e.pathname!==location.pathname||kt)&&await D(e)}const s=await Rt({loader:mt,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:It(o)}),c={node:await X(),loader:X,universal:null,server:null,data:null};return await et({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}function it(t,n){if(!t||nt(t,I))return;let e;try{e=V.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=ne(e);for(const a of rt){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:de(o),url:t}}}function ne(t){return ue(t.slice(I.length)||"/")}function ae({url:t,type:n,intent:e,delta:r}){let a=!1;const o=ie(y,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return H||Wt.forEach(s=>s(i)),a?null:o}async function z({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ot,block:u=Ot}){const h=it(n,!1),g=ae({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=k,m=R;l(),H=!0,tt&&U.navigating.set(g.navigation),C=c;let f=h&&await Lt(h);if(!f){if(nt(n,I))return await D(n);f=await re(n,{id:null},await B(new bt(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,C!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await st({status:500,error:await B(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return At(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await U.updated.check()&&await D(n);if(Zt(),Et(d),Qt(m),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const p=o?0:1,w={[$]:k+=p,[G]:R+=p,[Ht]:i};(o?history.replaceState:history.pushState).call(history,w,"",n),o||He(k,R)}if(P=null,f.props.page.state=i,tt){y=f.state,f.props.page&&(f.props.page.url=n);const p=(await Promise.all(Be.map(w=>w(g.navigation)))).filter(w=>typeof w=="function");if(p.length>0){let w=function(){j=j.filter(b=>!p.includes(b))};p.push(w),j.push(...p)}ot.$set(f.props),Xt=!0}else ee(f,_t);const{activeElement:_}=document;await le();const v=e?e.scroll:a?vt():null;if(jt){const p=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==_&&document.activeElement!==document.body;!r&&!S&&tn(),jt=!0,f.props.page&&(A=f.props.page),H=!1,t==="popstate"&&te(R),g.fulfil(void 0),j.forEach(p=>p(g.navigation)),U.navigating.set(null)}async function re(t,n,e,r){return t.origin===K&&t.pathname===location.pathname&&!kt?await st({status:r,error:e,url:t,route:n}):await D(t)}function We(){let t;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(pt(i.target.href),e.unobserve(i.target))},{threshold:0});function r(o,i){const s=zt(o,L);if(!s)return;const{url:c,external:l,download:u}=gt(s,I);if(l||u)return;const h=J(s);if(!h.reload)if(i<=h.preload_data){const g=it(c,!1);g&&ze(g)}else i<=h.preload_code&&pt(c.pathname)}function a(){e.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=gt(o,I);if(s||c)continue;const l=J(o);l.reload||(l.preload_code===Y.viewport&&e.observe(o),l.preload_code===Y.eager&&pt(i.pathname))}}j.push(a),a()}function B(t,n){if(t instanceof at)return t.body;const e=W(t),r=Me(t);return V.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function Xe(t,n={}){return t=Bt(t),t.origin!==K?Promise.reject(new Error("goto: invalid URL")):At(t,n,0)}function an(t){if(typeof t=="function")Z.push(t);else{const{href:n}=new URL(t,location.href);Z.push(e=>e.href===n)}return Ke()}function Ze(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if($t(),!H){const a=ie(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Wt.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&$t()}),(n=navigator.connection)!=null&&n.saveData||We(),L.addEventListener("click",e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=zt(e.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:i,download:s}=gt(r,I);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=J(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){ae({url:a,type:"link"})?H=!0:e.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===ut(location)){const[,d]=y.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(F=!0,Et(k),t(a),!c.replace_state)return;F=!1}e.preventDefault(),z({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(nt(i,I))return;const s=e.target,c=J(s);if(c.reload)return;e.preventDefault(),e.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),z({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[$]){const a=e.state[$];if(C={},a===k)return;const o=T[a],i=e.state[Ht]??{},s=new URL(e.state[Ue]??location.href),c=e.state[G],l=ut(location)===ut(y.url);if(c===R&&(Xt||l)){t(s),T[k]=vt(),o&&scrollTo(o.x,o.y),i!==A.state&&(A={...A,state:i},ot.$set({page:A})),k=a;return}const h=a-k;await z({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{k=a,R=c},block:()=>{history.go(-h)},nav_token:C})}else if(!F){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{F&&(F=!1,history.replaceState({...history.state,[$]:++k,[G]:R},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&U.navigating.set(null)});function t(e){y.url=e,U.page.set({...A,url:e}),U.page.notify()}}async function Qe(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){kt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=it(c,!1)||{});let l;try{const u=r.map(async(d,m)=>{const f=i[m];return f!=null&&f.uses&&(f.uses=se(f.uses)),Rt({loader:V.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let v=0;v<m;v+=1)Object.assign(_,(await u[v]).data);return _},server_data_node:It(f)})}),h=await Promise.all(u),g=rt.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let m=0;m<d.length;m++)d[m]||h.splice(m,0,void 0)}l=await et({url:c,params:a,branch:h,status:n,error:e,form:s,route:g??null})}catch(u){if(u instanceof Jt){await D(new URL(u.location,location.href));return}l=await st({status:W(u),error:await B(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),ee(l,t)}async function oe(t,n){var a;const e=new URL(t);e.pathname=_e(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(Ge,"1"),e.searchParams.append(qe,n.map(o=>o?"1":"0").join(""));const r=await Ft(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new at(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(g){return Ce(g,{Promise:d=>new Promise((m,f)=>{i.set(d,{fulfil:m,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const m=u.indexOf(`
`);if(m===-1)break;const f=JSON.parse(u.slice(0,m));if(u=u.slice(m+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=se(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:v,error:S}=f,p=i.get(_);i.delete(_),S?p.reject(l(S)):p.fulfil(l(v))}}}})}function se(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function tn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ie(t,n,e,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{nn as a,I as b,Xe as g,an as i,U as s};
