"use strict";function _interopNamespace(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(s){if("default"!==s){var n=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,n.get?n:{enumerable:!0,get:function(){return e[s]}})}})),t.default=e,Object.freeze(t)}const NAMESPACE="surecart";let scopeId,contentRef,hostTagName,useNativeShadowDom=!1,checkSlotFallbackVisibility=!1,checkSlotRelocate=!1,isSvgMode=!1,renderingRef=null,queuePending=!1;const createTime=(e,t="")=>()=>{},uniqueTime=(e,t)=>()=>{},HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}",EMPTY_OBJ={},SVG_NS="http://www.w3.org/2000/svg",HTML_NS="http://www.w3.org/1999/xhtml",isDef=e=>null!=e,isComplexType=e=>"object"==(e=typeof e)||"function"===e;function queryNonceMetaTagContent(e){var t,s,n;return null!==(n=null===(s=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===s?void 0:s.getAttribute("content"))&&void 0!==n?n:void 0}const h=(e,t,...s)=>{let n=null,o=null,l=null,a=!1,r=!1;const $=[],c=t=>{for(let s=0;s<t.length;s++)n=t[s],Array.isArray(n)?c(n):null!=n&&"boolean"!=typeof n&&((a="function"!=typeof e&&!isComplexType(n))&&(n=String(n)),a&&r?$[$.length-1].$text$+=n:$.push(a?newVNode(null,n):n),r=a)};if(c(s),t){t.key&&(o=t.key),t.name&&(l=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,$,vdomFnUtils);const i=newVNode(e,null);return i.$attrs$=t,$.length>0&&(i.$children$=$),i.$key$=o,i.$name$=l,i},newVNode=(e,t)=>({$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null}),Host={},isHost=e=>e&&e.$tag$===Host,vdomFnUtils={forEach:(e,t)=>e.map(convertToPublic).forEach(t),map:(e,t)=>e.map(convertToPublic).map(t).map(convertToPrivate)},convertToPublic=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),convertToPrivate=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),h(e.vtag,t,...e.vchildren||[])}const t=newVNode(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},parsePropertyValue=(e,t)=>null==e||isComplexType(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e,getElement=e=>getHostRef(e).$hostElement$,createEvent=(e,t,s)=>{const n=getElement(e);return{emit:e=>emitEvent(n,t,{bubbles:!!(4&s),composed:!!(2&s),cancelable:!!(1&s),detail:e})}},emitEvent=(e,t,s)=>{const n=plt.ce(t,s);return e.dispatchEvent(n),n},rootAppliedStyles=new WeakMap,registerStyle=(e,t,s)=>{let n=styles.get(e);supportsConstructableStylesheets&&s?(n=n||new CSSStyleSheet,"string"==typeof n?n=t:n.replaceSync(t)):n=t,styles.set(e,n)},addStyle=(e,t,s,n)=>{var o;let l=getScopeId(t);const a=styles.get(l);if(e=11===e.nodeType?e:doc,a)if("string"==typeof a){e=e.head||e;let t,s=rootAppliedStyles.get(e);if(s||rootAppliedStyles.set(e,s=new Set),!s.has(l)){{t=doc.createElement("style"),t.innerHTML=a;const s=null!==(o=plt.$nonce$)&&void 0!==o?o:queryNonceMetaTagContent(doc);null!=s&&t.setAttribute("nonce",s),e.insertBefore(t,e.querySelector("link"))}s&&s.add(l)}}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,a]);return l},attachStyles=e=>{const t=e.$cmpMeta$,s=e.$hostElement$,n=t.$flags$,o=(t.$tagName$,()=>{}),l=addStyle(s.shadowRoot?s.shadowRoot:s.getRootNode(),t);10&n&&(s["s-sc"]=l,s.classList.add(l+"-h")),o()},getScopeId=(e,t)=>"sc-"+e.$tagName$,setAccessor=(e,t,s,n,o,l)=>{if(s!==n){let a=isMemberInElement(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,o=parseClassList(s),l=parseClassList(n);t.remove(...o.filter((e=>e&&!l.includes(e)))),t.add(...l.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in s)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)s&&n[t]===s[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(a||"o"!==t[0]||"n"!==t[1]){const r=isComplexType(n);if((a||r&&null!==n)&&!o)try{if(e.tagName.includes("-"))e[t]=n;else{const o=null==n?"":n;"list"===t?a=!1:null!=s&&e[t]==o||(e[t]=o)}}catch(e){}null==n||!1===n?!1===n&&""!==e.getAttribute(t)||e.removeAttribute(t):(!a||4&l||o)&&!r&&(n=!0===n?"":n,e.setAttribute(t,n))}else t="-"===t[2]?t.slice(3):isMemberInElement(win,r)?r.slice(2):r[2]+t.slice(3),s&&plt.rel(e,t,s,!1),n&&plt.ael(e,t,n,!1)}},parseClassListRegex=/\s/,parseClassList=e=>e?e.split(parseClassListRegex):[],updateElement=(e,t,s,n)=>{const o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||EMPTY_OBJ,a=t.$attrs$||EMPTY_OBJ;for(n in l)n in a||setAccessor(o,n,l[n],void 0,s,t.$flags$);for(n in a)setAccessor(o,n,l[n],a[n],s,t.$flags$)},createElm=(e,t,s,n)=>{const o=t.$children$[s];let l,a,r,$=0;if(useNativeShadowDom||(checkSlotRelocate=!0,"slot"===o.$tag$&&(scopeId&&n.classList.add(scopeId+"-s"),o.$flags$|=o.$children$?2:1)),null!==o.$text$)l=o.$elm$=doc.createTextNode(o.$text$);else if(1&o.$flags$)l=o.$elm$=doc.createTextNode("");else{if(isSvgMode||(isSvgMode="svg"===o.$tag$),l=o.$elm$=doc.createElementNS(isSvgMode?SVG_NS:HTML_NS,2&o.$flags$?"slot-fb":o.$tag$),isSvgMode&&"foreignObject"===o.$tag$&&(isSvgMode=!1),updateElement(null,o,isSvgMode),null!=scopeId&&l["s-si"]!==scopeId&&l.classList.add(l["s-si"]=scopeId),o.$children$)for($=0;$<o.$children$.length;++$)a=createElm(e,o,$,l),a&&l.appendChild(a);"svg"===o.$tag$?isSvgMode=!1:"foreignObject"===l.tagName&&(isSvgMode=!0)}return l["s-hn"]=hostTagName,3&o.$flags$&&(l["s-sr"]=!0,l["s-cr"]=contentRef,l["s-sn"]=o.$name$||"",r=e&&e.$children$&&e.$children$[s],r&&r.$tag$===o.$tag$&&e.$elm$&&putBackInOriginalLocation(e.$elm$,!1)),l},putBackInOriginalLocation=(e,t)=>{plt.$flags$|=1;const s=e.childNodes;for(let e=s.length-1;e>=0;e--){const n=s[e];n["s-hn"]!==hostTagName&&n["s-ol"]&&(parentReferenceNode(n).insertBefore(n,referenceNode(n)),n["s-ol"].remove(),n["s-ol"]=void 0,checkSlotRelocate=!0),t&&putBackInOriginalLocation(n,t)}plt.$flags$&=-2},addVnodes=(e,t,s,n,o,l)=>{let a,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===hostTagName&&(r=r.shadowRoot);o<=l;++o)n[o]&&(a=createElm(null,s,o,e),a&&(n[o].$elm$=a,r.insertBefore(a,referenceNode(t))))},removeVnodes=(e,t,s,n,o)=>{for(;t<=s;++t)(n=e[t])&&(o=n.$elm$,callNodeRefs(n),checkSlotFallbackVisibility=!0,o["s-ol"]?o["s-ol"].remove():putBackInOriginalLocation(o,!0),o.remove())},updateChildren=(e,t,s,n)=>{let o,l,a=0,r=0,$=0,c=0,i=t.length-1,d=t[0],p=t[i],m=n.length-1,u=n[0],f=n[m];for(;a<=i&&r<=m;)if(null==d)d=t[++a];else if(null==p)p=t[--i];else if(null==u)u=n[++r];else if(null==f)f=n[--m];else if(isSameVnode(d,u))patch(d,u),d=t[++a],u=n[++r];else if(isSameVnode(p,f))patch(p,f),p=t[--i],f=n[--m];else if(isSameVnode(d,f))"slot"!==d.$tag$&&"slot"!==f.$tag$||putBackInOriginalLocation(d.$elm$.parentNode,!1),patch(d,f),e.insertBefore(d.$elm$,p.$elm$.nextSibling),d=t[++a],f=n[--m];else if(isSameVnode(p,u))"slot"!==d.$tag$&&"slot"!==f.$tag$||putBackInOriginalLocation(p.$elm$.parentNode,!1),patch(p,u),e.insertBefore(p.$elm$,d.$elm$),p=t[--i],u=n[++r];else{for($=-1,c=a;c<=i;++c)if(t[c]&&null!==t[c].$key$&&t[c].$key$===u.$key$){$=c;break}$>=0?(l=t[$],l.$tag$!==u.$tag$?o=createElm(t&&t[r],s,$,e):(patch(l,u),t[$]=void 0,o=l.$elm$),u=n[++r]):(o=createElm(t&&t[r],s,r,e),u=n[++r]),o&&parentReferenceNode(d.$elm$).insertBefore(o,referenceNode(d.$elm$))}a>i?addVnodes(e,null==n[m+1]?null:n[m+1].$elm$,s,n,r,m):r>m&&removeVnodes(t,a,i)},isSameVnode=(e,t)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:e.$key$===t.$key$),referenceNode=e=>e&&e["s-ol"]||e,parentReferenceNode=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,patch=(e,t)=>{const s=t.$elm$=e.$elm$,n=e.$children$,o=t.$children$,l=t.$tag$,a=t.$text$;let r;null===a?(isSvgMode="svg"===l||"foreignObject"!==l&&isSvgMode,"slot"===l||updateElement(e,t,isSvgMode),null!==n&&null!==o?updateChildren(s,n,t,o):null!==o?(null!==e.$text$&&(s.textContent=""),addVnodes(s,null,t,o,0,o.length-1)):null!==n&&removeVnodes(n,0,n.length-1),isSvgMode&&"svg"===l&&(isSvgMode=!1)):(r=s["s-cr"])?r.parentNode.textContent=a:e.$text$!==a&&(s.data=a)},updateFallbackSlotVisibility=e=>{const t=e.childNodes;let s,n,o,l,a,r;for(n=0,o=t.length;n<o;n++)if(s=t[n],1===s.nodeType){if(s["s-sr"])for(a=s["s-sn"],s.hidden=!1,l=0;l<o;l++)if(r=t[l].nodeType,t[l]["s-hn"]!==s["s-hn"]||""!==a){if(1===r&&a===t[l].getAttribute("slot")){s.hidden=!0;break}}else if(1===r||3===r&&""!==t[l].textContent.trim()){s.hidden=!0;break}updateFallbackSlotVisibility(s)}},relocateNodes=[],relocateSlotContent=e=>{let t,s,n,o,l,a,r=0;const $=e.childNodes,c=$.length;for(;r<c;r++){if(t=$[r],t["s-sr"]&&(s=t["s-cr"])&&s.parentNode)for(n=s.parentNode.childNodes,o=t["s-sn"],a=n.length-1;a>=0;a--)s=n[a],s["s-cn"]||s["s-nr"]||s["s-hn"]===t["s-hn"]||(isNodeLocatedInSlot(s,o)?(l=relocateNodes.find((e=>e.$nodeToRelocate$===s)),checkSlotFallbackVisibility=!0,s["s-sn"]=s["s-sn"]||o,l?l.$slotRefNode$=t:relocateNodes.push({$slotRefNode$:t,$nodeToRelocate$:s}),s["s-sr"]&&relocateNodes.map((e=>{isNodeLocatedInSlot(e.$nodeToRelocate$,s["s-sn"])&&(l=relocateNodes.find((e=>e.$nodeToRelocate$===s)),l&&!e.$slotRefNode$&&(e.$slotRefNode$=l.$slotRefNode$))}))):relocateNodes.some((e=>e.$nodeToRelocate$===s))||relocateNodes.push({$nodeToRelocate$:s}));1===t.nodeType&&relocateSlotContent(t)}},isNodeLocatedInSlot=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,callNodeRefs=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(callNodeRefs)},renderVdom=(e,t)=>{const s=e.$hostElement$,n=e.$cmpMeta$,o=e.$vnode$||newVNode(null,null),l=(a=t)&&a.$tag$===Host?t:h(null,null,t);var a;if(hostTagName=s.tagName,n.$attrsToReflect$&&(l.$attrs$=l.$attrs$||{},n.$attrsToReflect$.map((([e,t])=>l.$attrs$[t]=s[e]))),l.$tag$=null,l.$flags$|=4,e.$vnode$=l,l.$elm$=o.$elm$=s.shadowRoot||s,scopeId=s["s-sc"],contentRef=s["s-cr"],useNativeShadowDom=0!=(1&n.$flags$),checkSlotFallbackVisibility=!1,patch(o,l),plt.$flags$|=1,checkSlotRelocate){let e,t,s,n,o,a;relocateSlotContent(l.$elm$);let r=0;for(;r<relocateNodes.length;r++)e=relocateNodes[r],t=e.$nodeToRelocate$,t["s-ol"]||(s=doc.createTextNode(""),s["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=s,t));for(r=0;r<relocateNodes.length;r++)if(e=relocateNodes[r],t=e.$nodeToRelocate$,e.$slotRefNode$){for(n=e.$slotRefNode$.parentNode,o=e.$slotRefNode$.nextSibling,s=t["s-ol"];s=s.previousSibling;)if(a=s["s-nr"],a&&a["s-sn"]===t["s-sn"]&&n===a.parentNode&&(a=a.nextSibling,!a||!a["s-nr"])){o=a;break}(!o&&n!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),n.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}checkSlotFallbackVisibility&&updateFallbackSlotVisibility(l.$elm$),plt.$flags$&=-2,relocateNodes.length=0},attachToAncestor=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},scheduleUpdate=(e,t)=>{if(e.$flags$|=16,!(4&e.$flags$))return attachToAncestor(e,e.$ancestorComponent$),writeTask((()=>dispatchHooks(e,t)));e.$flags$|=512},dispatchHooks=(e,t)=>{const s=(e.$cmpMeta$.$tagName$,()=>{}),n=e.$lazyInstance$;let o;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>safeCall(n,e,t))),e.$queuedListeners$=null),o=safeCall(n,"componentWillLoad")),s(),then(o,(()=>updateComponent(e,n,t)))},updateComponent=async(e,t,s)=>{const n=e.$hostElement$,o=(e.$cmpMeta$.$tagName$,()=>{}),l=n["s-rc"];s&&attachStyles(e);const a=(e.$cmpMeta$.$tagName$,()=>{});callRender(e,t),l&&(l.map((e=>e())),n["s-rc"]=void 0),a(),o();{const t=n["s-p"],s=()=>postUpdateComponent(e);0===t.length?s():(Promise.all(t).then(s),e.$flags$|=4,t.length=0)}},callRender=(e,t,s)=>{try{renderingRef=t,t=t.render&&t.render(),e.$flags$&=-17,e.$flags$|=2,renderVdom(e,t)}catch(t){consoleError(t,e.$hostElement$)}return renderingRef=null,null},getRenderingRef=()=>renderingRef,postUpdateComponent=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$,s=e.$lazyInstance$,n=e.$ancestorComponent$;64&e.$flags$?safeCall(s,"componentDidUpdate"):(e.$flags$|=64,addHydratedFlag(t),safeCall(s,"componentDidLoad"),e.$onReadyResolve$(t),n||appDidLoad()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&nextTick((()=>scheduleUpdate(e,!1))),e.$flags$&=-517},forceUpdate=e=>{{const t=getHostRef(e),s=t.$hostElement$.isConnected;return s&&2==(18&t.$flags$)&&scheduleUpdate(t,!1),s}},appDidLoad=e=>{addHydratedFlag(doc.documentElement),nextTick((()=>emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})))},safeCall=(e,t,s)=>{if(e&&e[t])try{return e[t](s)}catch(e){consoleError(e)}},then=(e,t)=>e&&e.then?e.then(t):t(),addHydratedFlag=e=>e.classList.add("hydrated"),getValue=(e,t)=>getHostRef(e).$instanceValues$.get(t),setValue=(e,t,s,n)=>{const o=getHostRef(e),l=o.$hostElement$,a=o.$instanceValues$.get(t),r=o.$flags$,$=o.$lazyInstance$;var c,i;c=s,i=n.$members$[t][0],s=null==c||isComplexType(c)?c:4&i?"false"!==c&&(""===c||!!c):2&i?parseFloat(c):1&i?String(c):c;const d=Number.isNaN(a)&&Number.isNaN(s);if((!(8&r)||void 0===a)&&s!==a&&!d&&(o.$instanceValues$.set(t,s),$)){if(n.$watchers$&&128&r){const e=n.$watchers$[t];e&&e.map((e=>{try{$[e](s,a,t)}catch(e){consoleError(e,l)}}))}2==(18&r)&&scheduleUpdate(o,!1)}},proxyComponent=(e,t,s)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const n=Object.entries(t.$members$),o=e.prototype;if(n.map((([e,[n]])=>{31&n||2&s&&32&n?Object.defineProperty(o,e,{get(){return t=e,getHostRef(this).$instanceValues$.get(t);var t},set(s){setValue(this,e,s,t)},configurable:!0,enumerable:!0}):1&s&&64&n&&Object.defineProperty(o,e,{value(...t){const s=getHostRef(this);return s.$onInstancePromise$.then((()=>s.$lazyInstance$[e](...t)))}})})),1&s){const s=new Map;o.attributeChangedCallback=function(e,t,n){plt.jmp((()=>{const t=s.get(e);if(this.hasOwnProperty(t))n=this[t],delete this[t];else if(o.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==n)return;this[t]=(null!==n||"boolean"!=typeof this[t])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,n])=>{const o=n[1]||e;return s.set(o,e),512&n[0]&&t.$attrsToReflect$.push([e,o]),o}))}}return e},initializeComponent=async(e,t,s,n,o)=>{if(0==(32&t.$flags$)){{if(t.$flags$|=32,(o=loadModule(s)).then){const e=()=>{};o=await o,e()}o.isProxied||(s.$watchers$=o.watchers,proxyComponent(o,s,2),o.isProxied=!0);const e=(s.$tagName$,()=>{});t.$flags$|=8;try{new o(t)}catch(e){consoleError(e)}t.$flags$&=-9,t.$flags$|=128,e()}if(o.style){let e=o.style;const t=getScopeId(s);if(!styles.has(t)){const n=(s.$tagName$,()=>{});registerStyle(t,e,!!(1&s.$flags$)),n()}}}const l=t.$ancestorComponent$,a=()=>scheduleUpdate(t,!0);l&&l["s-rc"]?l["s-rc"].push(a):a()},connectedCallback=e=>{if(0==(1&plt.$flags$)){const t=getHostRef(e),s=t.$cmpMeta$,n=(s.$tagName$,()=>{});if(1&t.$flags$)addHostEventListeners(e,t,s.$listeners$);else{t.$flags$|=1,12&s.$flags$&&setContentReference(e);{let s=e;for(;s=s.parentNode||s.host;)if(s["s-p"]){attachToAncestor(t,t.$ancestorComponent$=s);break}}s.$members$&&Object.entries(s.$members$).map((([t,[s]])=>{if(31&s&&e.hasOwnProperty(t)){const s=e[t];delete e[t],e[t]=s}})),initializeComponent(0,t,s)}n()}},setContentReference=e=>{const t=e["s-cr"]=doc.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},disconnectedCallback=e=>{if(0==(1&plt.$flags$)){const t=getHostRef(e),s=t.$lazyInstance$;t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0),safeCall(s,"disconnectedCallback")}},bootstrapLazy=(e,t={})=>{var s;const n=[],o=t.exclude||[],l=win.customElements,a=doc.head,r=a.querySelector("meta[charset]"),$=doc.createElement("style"),c=[];let i,d=!0;Object.assign(plt,t),plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href,e.map((e=>{e[1].map((t=>{const s={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};s.$members$=t[2],s.$listeners$=t[3],s.$attrsToReflect$=[],s.$watchers$={};const a=s.$tagName$,r=class extends HTMLElement{constructor(e){super(e),registerHost(e=this,s),1&s.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){i&&(clearTimeout(i),i=null),d?c.push(this):plt.jmp((()=>connectedCallback(this)))}disconnectedCallback(){plt.jmp((()=>disconnectedCallback(this)))}componentOnReady(){return getHostRef(this).$onReadyPromise$}};s.$lazyBundleId$=e[0],o.includes(a)||l.get(a)||(n.push(a),l.define(a,proxyComponent(r,s,1)))}))}));{$.innerHTML=n+HYDRATED_CSS,$.setAttribute("data-styles","");const e=null!==(s=plt.$nonce$)&&void 0!==s?s:queryNonceMetaTagContent(doc);null!=e&&$.setAttribute("nonce",e),a.insertBefore($,r?r.nextSibling:a.firstChild)}d=!1,c.length?c.map((e=>e.connectedCallback())):plt.jmp((()=>i=setTimeout(appDidLoad,30)))},Fragment=(e,t)=>t,addHostEventListeners=(e,t,s,n)=>{s&&s.map((([s,n,o])=>{const l=getHostListenerTarget(e,s),a=hostListenerProxy(t,o),r=hostListenerOpts(s);plt.ael(l,n,a,r),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>plt.rel(l,n,a,r)))}))},hostListenerProxy=(e,t)=>s=>{try{256&e.$flags$?e.$lazyInstance$[t](s):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,s])}catch(e){consoleError(e)}},getHostListenerTarget=(e,t)=>8&t?win:e,hostListenerOpts=e=>0!=(2&e),setNonce=e=>plt.$nonce$=e,hostRefs=new WeakMap,getHostRef=e=>hostRefs.get(e),registerInstance=(e,t)=>hostRefs.set(t.$lazyInstance$=e,t),registerHost=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return s.$onInstancePromise$=new Promise((e=>s.$onInstanceResolve$=e)),s.$onReadyPromise$=new Promise((e=>s.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[],addHostEventListeners(e,s,t.$listeners$),hostRefs.set(e,s)},isMemberInElement=(e,t)=>t in e,consoleError=(e,t)=>(0,console.error)(e,t),cmpModules=new Map,loadModule=(e,t,s)=>{const n=e.$tagName$.replace(/-/g,"_"),o=e.$lazyBundleId$,l=cmpModules.get(o);return l?l[n]:Promise.resolve().then((function(){return _interopNamespace(require(`./${o}.entry.js`))})).then((e=>(cmpModules.set(o,e),e[n])),consoleError)},styles=new Map,win="undefined"!=typeof window?window:{},doc=win.document||{head:{}},plt={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n),ce:(e,t)=>new CustomEvent(e,t)},promiseResolve=e=>Promise.resolve(e),supportsConstructableStylesheets=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),queueDomReads=[],queueDomWrites=[],queueTask=(e,t)=>s=>{e.push(s),queuePending||(queuePending=!0,t&&4&plt.$flags$?nextTick(flush):plt.raf(flush))},consume=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){consoleError(e)}e.length=0},flush=()=>{consume(queueDomReads),consume(queueDomWrites),(queuePending=queueDomReads.length>0)&&plt.raf(flush)},nextTick=e=>promiseResolve().then(e),writeTask=queueTask(queueDomWrites,!0);exports.Fragment=Fragment,exports.Host=Host,exports.bootstrapLazy=bootstrapLazy,exports.createEvent=createEvent,exports.forceUpdate=forceUpdate,exports.getElement=getElement,exports.getRenderingRef=getRenderingRef,exports.h=h,exports.promiseResolve=promiseResolve,exports.registerInstance=registerInstance,exports.setNonce=setNonce;