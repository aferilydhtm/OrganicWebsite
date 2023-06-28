"use strict";function getQueryString(e){let t;try{t=new URL(e,"http://example.com").search.substring(1)}catch(e){}if(t)return t}function buildQueryString(e){let t="";const r=Object.entries(e);let n;for(;n=r.shift();){let[e,s]=n;if(Array.isArray(s)||s&&s.constructor===Object){const t=Object.entries(s).reverse();for(const[n,s]of t)r.unshift([`${e}[${n}]`,s])}else void 0!==s&&(null===s&&(s=""),t+="&"+[e,s].map(encodeURIComponent).join("="))}return t.substr(1)}function setPath(e,t,r){const n=t.length,s=n-1;for(let i=0;i<n;i++){let n=t[i];!n&&Array.isArray(e)&&(n=e.length.toString());const u=!isNaN(Number(t[i+1]));e[n]=i===s?r:e[n]||(u?[]:{}),Array.isArray(e[n])&&!u&&(e[n]={...e[n]}),e=e[n]}}function getQueryArgs(e){return(getQueryString(e)||"").replace(/\+/g,"%20").split("&").reduce(((e,t)=>{const[r,n=""]=t.split("=").filter(Boolean).map(decodeURIComponent);return r&&setPath(e,r.replace(/\]/g,"").split("["),n),e}),{})}function addQueryArgs(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(!t||!Object.keys(t).length)return e;let r=e;const n=e.indexOf("?");return-1!==n&&(t=Object.assign(getQueryArgs(e),t),r=r.substr(0,n)),r+"?"+buildQueryString(t)}exports.addQueryArgs=addQueryArgs,exports.buildQueryString=buildQueryString,exports.getQueryArgs=getQueryArgs;