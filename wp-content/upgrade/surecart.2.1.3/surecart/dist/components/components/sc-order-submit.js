import{proxyCustomElement,HTMLElement,h,Fragment}from"@stencil/core/internal/client";import{c as checkoutIsLocked}from"./getters3.js";import{a as availableProcessors}from"./getters2.js";import{s as state}from"./watchers4.js";import{o as openWormhole}from"./consumer.js";import{d as defineCustomElement$9}from"./sc-button2.js";import{d as defineCustomElement$8}from"./sc-format-number2.js";import{d as defineCustomElement$7}from"./sc-icon2.js";import{d as defineCustomElement$6}from"./paypal-buttons.js";import{d as defineCustomElement$5}from"./sc-secure-notice2.js";import{d as defineCustomElement$4}from"./sc-skeleton2.js";import{d as defineCustomElement$3}from"./sc-spinner2.js";import{d as defineCustomElement$2}from"./sc-total2.js";const getProcessorData=(e=[],t,s)=>{var o;return(null===(o=(e||[]).find((e=>(null==e?void 0:e.processor_type)===t&&(null==e?void 0:e.live_mode)===!("live"!==s))))||void 0===o?void 0:o.processor_data)||{}},scOrderSubmitCss="sc-order-submit{display:block;width:auto;display:grid;gap:var(--sc-form-row-spacing)}.sc-secure-notice{display:flex;justify-content:center}",ScOrderSubmit$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.busy=void 0,this.loading=void 0,this.paying=void 0,this.type="primary",this.size="medium",this.full=!0,this.icon=void 0,this.showTotal=void 0,this.mode="live",this.processors=void 0,this.order=void 0,this.currencyCode="usd",this.processor=void 0,this.secureNoticeText=void 0,this.secureNotice=!0}renderPayPalButton(e){const{client_id:t,account_id:s,merchant_initiated_enabled:o}=getProcessorData(availableProcessors(),"paypal",this.mode);return t||s?h("sc-paypal-buttons",{buttons:e,busy:this.busy||checkoutIsLocked(),mode:this.mode,order:this.order,merchantInitiated:o,"currency-code":this.currencyCode,"client-id":t,"merchant-id":s,label:"checkout",color:"blue"}):null}render(){return h(Fragment,null,"paypal"===state.id&&!(null==state?void 0:state.method)&&this.renderPayPalButton(["paypal"]),"paypal"===state.id&&"card"===(null==state?void 0:state.method)&&this.renderPayPalButton(["card"]),h("sc-button",{hidden:["paypal","paypal-card"].includes(state.id),submit:!0,type:this.type,size:this.size,full:this.full,loading:this.loading||this.paying,disabled:this.loading||this.paying||this.busy||checkoutIsLocked()},!!this.icon&&h("sc-icon",{name:this.icon,slot:"prefix"}),h("slot",null,wp.i18n.__("Purchase","surecart")),this.showTotal&&h("span",null," ",h("sc-total",null))),this.secureNotice&&"https:"===location.protocol&&h("div",{class:"sc-secure-notice"},h("sc-secure-notice",null,this.secureNoticeText||wp.i18n.__("This is a secure, encrypted payment.","surecart"))))}static get style(){return scOrderSubmitCss}},[4,"sc-order-submit",{busy:[4],loading:[4],paying:[4],type:[513],size:[513],full:[4],icon:[1],showTotal:[4,"show-total"],mode:[1],processors:[16],order:[16],currencyCode:[1,"currency-code"],processor:[1],secureNoticeText:[1,"secure-notice-text"],secureNotice:[4,"secure-notice"]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-order-submit","sc-button","sc-format-number","sc-icon","sc-paypal-buttons","sc-secure-notice","sc-skeleton","sc-spinner","sc-total"].forEach((e=>{switch(e){case"sc-order-submit":customElements.get(e)||customElements.define(e,ScOrderSubmit$1);break;case"sc-button":customElements.get(e)||defineCustomElement$9();break;case"sc-format-number":customElements.get(e)||defineCustomElement$8();break;case"sc-icon":customElements.get(e)||defineCustomElement$7();break;case"sc-paypal-buttons":customElements.get(e)||defineCustomElement$6();break;case"sc-secure-notice":customElements.get(e)||defineCustomElement$5();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$4();break;case"sc-spinner":customElements.get(e)||defineCustomElement$3();break;case"sc-total":customElements.get(e)||defineCustomElement$2()}}))}openWormhole(ScOrderSubmit$1,["busy","loading","paying","processors","processor","mode","currencyCode","order"],!1);const ScOrderSubmit=ScOrderSubmit$1,defineCustomElement=defineCustomElement$1;export{ScOrderSubmit,defineCustomElement};