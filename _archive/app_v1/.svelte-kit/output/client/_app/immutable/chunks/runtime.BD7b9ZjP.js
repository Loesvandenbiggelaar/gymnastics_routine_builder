let n;const u="en",o=["en","nl"];let e=()=>u;const l=a=>{typeof a=="function"?e=t(a):e=t(()=>a),n!==void 0&&n(e())};function t(a){return()=>{const g=a();if(!r(g))throw new Error("languageTag() didn't return a valid language tag. Check your setLanguageTag call");return g}}const s=a=>{n=a};function r(a){return o.includes(a)}const c=Object.freeze(Object.defineProperty({__proto__:null,availableLanguageTags:o,isAvailableLanguageTag:r,get languageTag(){return e},onSetLanguageTag:s,setLanguageTag:l,sourceLanguageTag:u},Symbol.toStringTag,{value:"Module"}));export{o as a,e as l,s as o,c as r,l as s};
