let n;const u="en",r=["en","nl"];let a=()=>u;const l=e=>{typeof e=="function"?a=t(e):a=t(()=>e),n!==void 0&&n(a())};function t(e){return()=>{const g=e();if(!o(g))throw new Error("languageTag() didn't return a valid language tag. Check your setLanguageTag call");return g}}const s=e=>{n=e};function o(e){return r.includes(e)}const c=Object.freeze(Object.defineProperty({__proto__:null,availableLanguageTags:r,isAvailableLanguageTag:o,get languageTag(){return a},onSetLanguageTag:s,setLanguageTag:l,sourceLanguageTag:u},Symbol.toStringTag,{value:"Module"}));export{r as a,a as l,c as r,l as s};