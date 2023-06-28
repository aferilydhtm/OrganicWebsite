import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{o as openWormhole}from"./consumer.js";import{d as defineCustomElement$a}from"./sc-block-ui2.js";import{d as defineCustomElement$9}from"./sc-button2.js";import{d as defineCustomElement$8}from"./sc-choices2.js";import{d as defineCustomElement$7}from"./sc-form-control2.js";import{d as defineCustomElement$6}from"./sc-input2.js";import{d as defineCustomElement$5}from"./sc-price-input2.js";import{d as defineCustomElement$4}from"./sc-skeleton2.js";import{d as defineCustomElement$3}from"./sc-spinner2.js";import{d as defineCustomElement$2}from"./sc-tooltip2.js";const scDonationChoicesCss=":host{display:block}.sc-donation-choices{display:grid;gap:var(--sc-spacing-small);position:relative}.sc-donation-choices__form{display:grid;gap:var(--sc-spacing-small)}",ScDonationChoices$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scRemoveLineItem=createEvent(this,"scRemoveLineItem",7),this.scUpdateLineItem=createEvent(this,"scUpdateLineItem",7),this.scAddLineItem=createEvent(this,"scAddLineItem",7),this.priceId=void 0,this.defaultAmount=void 0,this.currencyCode="usd",this.lineItems=[],this.loading=void 0,this.busy=void 0,this.removeInvalid=!0,this.label=void 0,this.lineItem=void 0,this.error=void 0,this.showCustomAmount=void 0}async reportValidity(){return!this.input||this.input.shadowRoot.querySelector("sc-input").reportValidity()}handleChange(){const e=Array.from(this.getChoices()).find((e=>e.checked));this.showCustomAmount="ad_hoc"===e.value,isNaN(parseInt(e.value))||this.scUpdateLineItem.emit({price_id:this.priceId,quantity:1,ad_hoc_amount:parseInt(e.value)})}handleCustomAmountToggle(e){e&&setTimeout((()=>{var e,t;null===(t=null===(e=this.input)||void 0===e?void 0:e.triggerFocus)||void 0===t||t.call(e)}),50)}handleLineItemsChange(){var e;(null===(e=this.lineItems)||void 0===e?void 0:e.length)&&(this.lineItem=(this.lineItems||[]).find((e=>e.price.id===this.priceId)))}handleLineItemChange(e){this.removeInvalid&&this.removeInvalidPrices();const t=this.getChoices();let i=!1;t.forEach((t=>{isNaN(parseInt(t.value))||t.disabled||(parseInt(t.value)===(null==e?void 0:e.ad_hoc_amount)?(t.checked=!0,i=!0):t.checked=!1)})),this.showCustomAmount=!i,i||(this.el.querySelector('sc-choice[value="ad_hoc"]').checked=!0)}componentWillLoad(){this.handleLineItemsChange()}selectDefaultChoice(){const e=this.getChoices();e.length&&(e[0].checked=!0)}getChoices(){return this.el.querySelectorAll("sc-choice")||[]}removeInvalidPrices(){this.lineItem&&this.getChoices().forEach((e=>{var t,i,s,o,n,c,l,a;return(null===(i=null===(t=this.lineItem)||void 0===t?void 0:t.price)||void 0===i?void 0:i.ad_hoc_max_amount)&&parseInt(e.value)>(null===(o=null===(s=this.lineItem)||void 0===s?void 0:s.price)||void 0===o?void 0:o.ad_hoc_max_amount)||(null===(c=null===(n=this.lineItem)||void 0===n?void 0:n.price)||void 0===c?void 0:c.ad_hoc_min_amount)&&parseInt(e.value)<(null===(a=null===(l=this.lineItem)||void 0===l?void 0:l.price)||void 0===a?void 0:a.ad_hoc_min_amount)?(e.style.display="none",void(e.disabled=!0)):(e.style.display="flex",void(e.disabled=!1))}))}updateCustomAmount(){var e,t,i;this.input.value!==(null===(i=null===(t=null===(e=this.lineItem)||void 0===e?void 0:e.ad_hoc_amount)||void 0===t?void 0:t.toString)||void 0===i?void 0:i.call(t))&&(this.input.value?this.scUpdateLineItem.emit({price_id:this.priceId,quantity:1,ad_hoc_amount:parseInt(this.input.value)}):this.scRemoveLineItem.emit({price_id:this.priceId,quantity:1}))}render(){var e,t,i;return this.loading?h("div",{class:"sc-donation-choices"},h("sc-skeleton",{style:{width:"20%",display:"inline-block"}}),h("sc-skeleton",{style:{width:"60%",display:"inline-block"}}),h("sc-skeleton",{style:{width:"40%",display:"inline-block"}})):h("div",{class:"sc-donation-choices"},h("sc-choices",{label:this.label,"auto-width":!0},h("slot",null)),this.showCustomAmount&&h("div",{class:"sc-donation-choices__form"},h("sc-price-input",{ref:e=>this.input=e,required:!0,currencyCode:this.currencyCode,label:"Enter an amount",value:null===(i=null===(t=null===(e=this.lineItem)||void 0===e?void 0:e.ad_hoc_amount)||void 0===t?void 0:t.toString)||void 0===i?void 0:i.call(t)}),h("sc-button",{type:"primary",onClick:()=>this.updateCustomAmount(),full:!0,busy:this.busy},wp.i18n.__("Update","surecart"))),this.busy&&h("sc-block-ui",{style:{zIndex:"9"}}))}get el(){return this}static get watchers(){return{showCustomAmount:["handleCustomAmountToggle"],lineItems:["handleLineItemsChange"],lineItem:["handleLineItemChange"]}}static get style(){return scDonationChoicesCss}},[1,"sc-donation-choices",{priceId:[513,"price-id"],defaultAmount:[1,"default-amount"],currencyCode:[1,"currency-code"],lineItems:[16],loading:[4],busy:[4],removeInvalid:[4,"remove-invalid"],label:[1],lineItem:[32],error:[32],showCustomAmount:[32],reportValidity:[64]},[[0,"scChange","handleChange"]]]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-donation-choices","sc-block-ui","sc-button","sc-choices","sc-form-control","sc-input","sc-price-input","sc-skeleton","sc-spinner","sc-tooltip"].forEach((e=>{switch(e){case"sc-donation-choices":customElements.get(e)||customElements.define(e,ScDonationChoices$1);break;case"sc-block-ui":customElements.get(e)||defineCustomElement$a();break;case"sc-button":customElements.get(e)||defineCustomElement$9();break;case"sc-choices":customElements.get(e)||defineCustomElement$8();break;case"sc-form-control":customElements.get(e)||defineCustomElement$7();break;case"sc-input":customElements.get(e)||defineCustomElement$6();break;case"sc-price-input":customElements.get(e)||defineCustomElement$5();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$4();break;case"sc-spinner":customElements.get(e)||defineCustomElement$3();break;case"sc-tooltip":customElements.get(e)||defineCustomElement$2()}}))}openWormhole(ScDonationChoices$1,["lineItems","loading","busy","currencyCode"],!1);const ScDonationChoices=ScDonationChoices$1,defineCustomElement=defineCustomElement$1;export{ScDonationChoices,defineCustomElement};