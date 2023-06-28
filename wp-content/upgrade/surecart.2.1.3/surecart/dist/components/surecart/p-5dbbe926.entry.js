import{r as e,h as s,F as t,H as a,a as o}from"./p-25a9e68f.js";import{a as r}from"./p-b6ef0098.js";import"./p-61ab3f3a.js";import{s as i,g as l,h as n,a as c,b as p}from"./p-7c27060f.js";import{s as d}from"./p-4c5e6c8d.js";import{M as m}from"./p-45c8a84f.js";import"./p-db7ede86.js";import"./p-1c2e2695.js";import"./p-6c2a2148.js";const u=":host{display:flex !important;flex-direction:column;gap:var(--sc-input-label-margin);position:relative;font-family:var(--sc-font-sans)}.sc-payment-toggle-summary{line-height:1;display:flex;align-items:center;gap:0.5em;font-weight:var(--sc-font-weight-semibold)}.sc-payment-label{display:flex;justify-content:space-between}.sc-payment-instructions{color:var(--sc-color-gray-600);font-size:var(--sc-font-size-small);line-height:var(--sc-line-height-dense)}.sc-payment__stripe-card-element{display:flex !important;flex-direction:column;gap:var(--sc-input-label-margin);position:relative}";const y=class{constructor(s){e(this,s);this.stripePaymentElement=undefined;this.disabledProcessorTypes=undefined;this.secureNotice=undefined;this.label=undefined;this.hideTestModeBadge=undefined}componentWillLoad(){i.disabled.processors=this.disabledProcessorTypes}renderStripe(e){return s("sc-payment-method-choice",{key:e===null||e===void 0?void 0:e.id,"processor-id":"stripe",card:this.stripePaymentElement},s("span",{slot:"summary",class:"sc-payment-toggle-summary"},s("sc-icon",{name:"credit-card",style:{fontSize:"24px"}}),s("span",null,wp.i18n.__("Credit Card","surecart"))),s("div",{class:"sc-payment__stripe-card-element"},s("slot",{name:"stripe"})))}renderPayPal(e){const a=l("stripe");return s(t,null,s("sc-payment-method-choice",{key:e===null||e===void 0?void 0:e.id,"processor-id":"paypal"},s("span",{slot:"summary",class:"sc-payment-toggle-summary"},s("sc-icon",{name:"paypal",style:{width:"80px",fontSize:"24px"}})),s("sc-card",null,s("sc-payment-selected",{label:wp.i18n.__("PayPal selected for check out.","surecart")},s("sc-icon",{slot:"icon",name:"paypal",style:{width:"80px"}}),wp.i18n.__("Another step will appear after submitting your order to complete your purchase details.","surecart")))),!a&&s("sc-payment-method-choice",{key:e===null||e===void 0?void 0:e.id,"processor-id":"paypal","method-id":"card"},s("span",{slot:"summary",class:"sc-payment-toggle-summary"},s("sc-icon",{name:"credit-card",style:{fontSize:"24px"}}),s("span",null,wp.i18n.__("Credit Card","surecart"))),s("sc-card",null,s("sc-payment-selected",{label:wp.i18n.__("Credit Card selected for check out.","surecart")},s("sc-icon",{name:"credit-card",slot:"icon",style:{fontSize:"24px"}}),wp.i18n.__("Another step will appear after submitting your order to complete your purchase details.","surecart")))))}render(){var e,t,o;if(((e=r.checkout)===null||e===void 0?void 0:e.payment_method_required)===false){return null}const i=n()||(d===null||d===void 0?void 0:d.id)==="paypal"?"sc-toggles":"div";const u=l("mollie");return s(a,null,s("sc-form-control",{label:this.label,exportparts:"label, help-text, form-control"},s("div",{class:"sc-payment-label",slot:"label"},s("div",null,this.label),r.mode==="test"&&!this.hideTestModeBadge&&s("sc-tag",{type:"warning",size:"small",exportparts:"base:test-badge__base, content:test-badge__content"},wp.i18n.__("Test Mode","surecart"))),(u===null||u===void 0?void 0:u.id)?s("sc-checkout-mollie-payment",{"processor-id":u===null||u===void 0?void 0:u.id}):s(i,{collapsible:false,theme:"container"},!((t=c())===null||t===void 0?void 0:t.length)&&!((o=p())===null||o===void 0?void 0:o.length)&&s("sc-alert",{type:"info",open:true},wp.i18n.__("You do not have any processors enabled for this mode and cart. Please configure your processors.","surecart")),(c()||[]).map((e=>{switch(e===null||e===void 0?void 0:e.processor_type){case"stripe":return this.renderStripe(e);case"paypal":return this.renderPayPal(e)}})),s(m,{methods:p()}))))}get el(){return o(this)}};y.style=u;export{y as sc_payment};
//# sourceMappingURL=p-5dbbe926.entry.js.map