import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{a as state}from"./watchers2.js";import{l as lockCheckout,u as unLockCheckout}from"./mutations2.js";import{c as createOrUpdateCheckout}from"./index3.js";import{o as openWormhole}from"./consumer.js";import{d as defineCustomElement$a}from"./sc-button2.js";import{d as defineCustomElement$9}from"./dropdown.js";import{d as defineCustomElement$8}from"./sc-form-control2.js";import{d as defineCustomElement$7}from"./sc-icon2.js";import{d as defineCustomElement$6}from"./sc-input2.js";import{d as defineCustomElement$5}from"./sc-menu2.js";import{d as defineCustomElement$4}from"./sc-menu-item2.js";import{d as defineCustomElement$3}from"./sc-spinner2.js";import{d as defineCustomElement$2}from"./sc-tax-id-input2.js";import{d as defineCustomElement$1}from"./sc-tooltip2.js";const scOrderTaxIdInputCss=":host{display:block}",ScOrderTaxIdInput=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scUpdateOrder=createEvent(this,"scUpdateOrder",7),this.scError=createEvent(this,"scError",7),this.order=void 0,this.show=!1,this.taxIdentifier=void 0,this.taxProtocol=void 0,this.busy=!1,this.otherLabel=void 0,this.caGstLabel=void 0,this.auAbnLabel=void 0,this.gbVatLabel=void 0,this.euVatLabel=void 0}getStatus(){var e,t,s;return"eu_vat"!==(null===(e=this.taxIdentifier)||void 0===e?void 0:e.number_type)||"apply_reverse_charge"===(null===(t=this.taxProtocol)||void 0===t?void 0:t.eu_vat_unverified_behavior)?"unknown":(null===(s=this.taxIdentifier)||void 0===s?void 0:s.eu_vat_verified)?"valid":"invalid"}async maybeUpdateOrder(e){try{lockCheckout("tax_identifier"),state.checkout=await createOrUpdateCheckout({id:state.checkout.id,data:{tax_identifier:e}})}catch(e){console.error(e),this.scError.emit(e)}finally{unLockCheckout("tax_identifier")}}render(){var e,t,s,o,i,n;return h("sc-tax-id-input",{show:this.show,number:null===(t=null===(e=this.order)||void 0===e?void 0:e.tax_identifier)||void 0===t?void 0:t.number,type:null===(o=null===(s=this.order)||void 0===s?void 0:s.tax_identifier)||void 0===o?void 0:o.number_type,country:null===(n=null===(i=null==this?void 0:this.order)||void 0===i?void 0:i.shipping_address)||void 0===n?void 0:n.country,status:this.getStatus(),loading:this.busy,onScChange:e=>{e.stopImmediatePropagation(),this.maybeUpdateOrder(e.detail)},otherLabel:this.otherLabel,caGstLabel:this.caGstLabel,auAbnLabel:this.auAbnLabel,gbVatLabel:this.gbVatLabel,euVatLabel:this.euVatLabel})}static get style(){return scOrderTaxIdInputCss}},[1,"sc-order-tax-id-input",{order:[16],show:[4],taxIdentifier:[16],taxProtocol:[16],busy:[4],otherLabel:[1,"other-label"],caGstLabel:[1,"ca-gst-label"],auAbnLabel:[1,"au-abn-label"],gbVatLabel:[1,"gb-vat-label"],euVatLabel:[1,"eu-vat-label"]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-order-tax-id-input","sc-button","sc-dropdown","sc-form-control","sc-icon","sc-input","sc-menu","sc-menu-item","sc-spinner","sc-tax-id-input","sc-tooltip"].forEach((e=>{switch(e){case"sc-order-tax-id-input":customElements.get(e)||customElements.define(e,ScOrderTaxIdInput);break;case"sc-button":customElements.get(e)||defineCustomElement$a();break;case"sc-dropdown":customElements.get(e)||defineCustomElement$9();break;case"sc-form-control":customElements.get(e)||defineCustomElement$8();break;case"sc-icon":customElements.get(e)||defineCustomElement$7();break;case"sc-input":customElements.get(e)||defineCustomElement$6();break;case"sc-menu":customElements.get(e)||defineCustomElement$5();break;case"sc-menu-item":customElements.get(e)||defineCustomElement$4();break;case"sc-spinner":customElements.get(e)||defineCustomElement$3();break;case"sc-tax-id-input":customElements.get(e)||defineCustomElement$2();break;case"sc-tooltip":customElements.get(e)||defineCustomElement$1()}}))}openWormhole(ScOrderTaxIdInput,["draft","order","tax_status","taxIdentifier","taxProtocol","busy"],!1);export{ScOrderTaxIdInput as S,defineCustomElement as d};