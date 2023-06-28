import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{U as Universe}from"./universe.js";import{d as defineCustomElement$6}from"./sc-alert2.js";import{d as defineCustomElement$5}from"./sc-heading2.js";import{d as defineCustomElement$4}from"./sc-icon2.js";import{d as defineCustomElement$3}from"./sc-order-confirm-components-validator2.js";import{d as defineCustomElement$2}from"./sc-order-manual-instructions2.js";import{g as getQueryArg}from"./get-query-arg.js";import{a as addQueryArgs}from"./add-query-args.js";const scOrderConfirmationCss=":host{display:block;max-width:800px;margin:auto}::slotted(*:not(:last-child)),sc-form form>*:not(:last-child){margin-bottom:var(--sc-form-row-spacing-large)}.order-confirmation__content{color:var(--sc-order-confirmation-color, var(--sc-color-gray-500))}.order-confirmation__content.hidden{display:none}::part(line-items){display:grid;gap:0.5em}",ScOrderConfirmation$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.order=void 0,this.loading=!1,this.error=void 0}componentWillLoad(){Universe.create(this,this.state()),this.getSession()}getSessionId(){var e;return(null===(e=this.order)||void 0===e?void 0:e.id)?this.order.id:getQueryArg(window.location.href,"order")}async getSession(){var e;if(this.getSessionId()&&!(null===(e=this.order)||void 0===e?void 0:e.id))try{this.loading=!0,this.order=await await apiFetch({path:addQueryArgs(`surecart/v1/checkouts/${this.getSessionId()}`,{expand:["line_items","line_item.price","line_item.fees","price.product","customer","customer.shipping_address","payment_intent","discount","manual_payment_method","discount.promotion","billing_address","shipping_address"],refresh_status:!0})})}catch(e){(null==e?void 0:e.message)?this.error=e.message:this.error=wp.i18n.__("Something went wrong","surecart")}finally{this.loading=!1}}state(){var e,t;const o=null===(e=this.order)||void 0===e?void 0:e.manual_payment_method;return{processor:"stripe",loading:this.loading,orderId:this.getSessionId(),order:this.order,customer:null===(t=this.order)||void 0===t?void 0:t.customer,manualPaymentTitle:null==o?void 0:o.name,manualPaymentInstructions:null==o?void 0:o.instructions}}renderOnHold(){var e,t,o;return"processing"!==(null===(e=this.order)||void 0===e?void 0:e.status)?null:"paypal"===(null===(o=null===(t=null==this?void 0:this.order)||void 0===t?void 0:t.payment_intent)||void 0===o?void 0:o.processor_type)?h("sc-alert",{type:"warning",open:!0},wp.i18n.__("Paypal is taking a closer look at this payment. It’s required for some payments and normally takes up to 3 business days.","surecart")):void 0}renderManualInstructions(){var e;const t=null===(e=this.order)||void 0===e?void 0:e.manual_payment_method;if(null==t?void 0:t.instructions)return h("sc-alert",{type:"info",open:!0},h("span",{slot:"title"},null==t?void 0:t.name),null==t?void 0:t.instructions)}render(){var e,t;return h(Universe.Provider,{state:this.state()},h("div",{class:{"order-confirmation":!0}},h("div",{class:{"order-confirmation__content":!0,hidden:!(null===(e=this.order)||void 0===e?void 0:e.id)&&!this.loading}},h("sc-order-confirm-components-validator",{checkout:this.order},h("slot",null))),!(null===(t=this.order)||void 0===t?void 0:t.id)&&!this.loading&&h("sc-heading",null,wp.i18n.__("Order not found.","surecart"),h("span",{slot:"description"},wp.i18n.__("This order could not be found. Please try again.","surecart")))))}static get style(){return scOrderConfirmationCss}},[1,"sc-order-confirmation",{order:[1040],loading:[32],error:[32]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-order-confirmation","sc-alert","sc-heading","sc-icon","sc-order-confirm-components-validator","sc-order-manual-instructions"].forEach((e=>{switch(e){case"sc-order-confirmation":customElements.get(e)||customElements.define(e,ScOrderConfirmation$1);break;case"sc-alert":customElements.get(e)||defineCustomElement$6();break;case"sc-heading":customElements.get(e)||defineCustomElement$5();break;case"sc-icon":customElements.get(e)||defineCustomElement$4();break;case"sc-order-confirm-components-validator":customElements.get(e)||defineCustomElement$3();break;case"sc-order-manual-instructions":customElements.get(e)||defineCustomElement$2()}}))}const ScOrderConfirmation=ScOrderConfirmation$1,defineCustomElement=defineCustomElement$1;export{ScOrderConfirmation,defineCustomElement};