"use strict";const isValidURL=r=>{let t;try{t=new URL(r)}catch(r){return!1}return"http:"===t.protocol||"https:"===t.protocol},getValueFromUrl=r=>{const t=window.location.search;return new URLSearchParams(t).get(r)},sortByArray=(r,t,o)=>(r||[]).sort(((r,e)=>-1===o.indexOf(null==r?void 0:r[t])?1:-1===o.indexOf(null==e?void 0:e[t])?-1:o.indexOf(null==r?void 0:r[t])-o.indexOf(null==e?void 0:e[t])));exports.getValueFromUrl=getValueFromUrl,exports.isValidURL=isValidURL,exports.sortByArray=sortByArray;