import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{g as getOrder,d as clearOrder}from"./watchers2.js";import{s as store}from"./ui.js";const scCartLoaderCss=":host{position:absolute;z-index:var(--sc-cart-z-index, 999999);font-family:var(--sc-font-sans)}",ScCartLoader$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.formId=void 0,this.mode="live",this.template=void 0}render(){var e,t,o,r;if(document.querySelector("sc-checkout"))return;const s=getOrder(this.formId,this.mode);return"paid"===(null==s?void 0:s.status)?(clearOrder(this.formId,this.mode),null):h("div",{innerHTML:(null===(t=null===(e=null==s?void 0:s.line_items)||void 0===e?void 0:e.pagination)||void 0===t?void 0:t.count)||(null===(r=null===(o=null==store?void 0:store.state)||void 0===o?void 0:o.cart)||void 0===r?void 0:r.open)?this.template:""})}static get style(){return scCartLoaderCss}},[0,"sc-cart-loader",{formId:[513,"form-id"],mode:[1],template:[1]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-cart-loader"].forEach((e=>{"sc-cart-loader"===e&&(customElements.get(e)||customElements.define(e,ScCartLoader$1))}))}const ScCartLoader=ScCartLoader$1,defineCustomElement=defineCustomElement$1;export{ScCartLoader,defineCustomElement};