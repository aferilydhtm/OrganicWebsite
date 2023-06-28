export function pick(e,...t){return Object.assign({},...t.map((t=>({[t]:e[t]}))))}export function deepEqual(e,t){return"object"==typeof e&&Object.keys(e).length>0?Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every((n=>deepEqual(e[n],t[n]))):e===t}export function closestElement(e,t){return function t(n){if(!n||n===document||n===window)return null;return n.closest(e)||t(n.getRootNode().host)}(t)}export function findElements(e,t){return function t(n){if(!n)return null;let o=n.querySelectorAll(e);return o&&(null==o?void 0:o.length)?o:t(null==n?void 0:n.shadowRoot)}(t)}export const capitalize=e=>e&&e[0].toUpperCase()+e.slice(1);export const isValidURL=e=>{let t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol};export const getValueFromUrl=e=>{const t=window.location.search;return new URLSearchParams(t).get(e)};export const sortByArray=(e,t,n)=>(e||[]).sort(((e,o)=>-1===n.indexOf(null==e?void 0:e[t])?1:-1===n.indexOf(null==o?void 0:o[t])?-1:n.indexOf(null==e?void 0:e[t])-n.indexOf(null==o?void 0:o[t])));