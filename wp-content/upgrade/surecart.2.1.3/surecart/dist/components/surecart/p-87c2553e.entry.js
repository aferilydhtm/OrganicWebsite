import{r as i,c as t,h as s,a as e}from"./p-25a9e68f.js";import{a as o}from"./p-b6ef0098.js";import"./p-61ab3f3a.js";import{s as n}from"./p-7c27060f.js";import{s as r}from"./p-00c08221.js";import{s as d}from"./p-ef734fd6.js";import{U as c}from"./p-8dcbcebb.js";import"./p-db7ede86.js";import"./p-1c2e2695.js";import"./p-4c5e6c8d.js";import"./p-6c2a2148.js";const l="sc-checkout{display:block;font-family:var(--sc-font-sans);font-size:var(--sc-checkout-font-size, 16px);position:relative}sc-checkout h3{font-size:var(--sc-input-label-font-size-medium)}sc-alert{margin-bottom:var(--sc-form-row-spacing)}.sc-checkout-container.sc-align-center{max-width:500px;margin-left:auto;margin-right:auto}.sc-checkout-container.sc-align-wide{max-width:800px;margin-left:auto;margin-right:auto}::slotted(*){font-family:var(--sc-font-sans)}";const a=class{constructor(s){i(this,s);this.scOrderUpdated=t(this,"scOrderUpdated",7);this.scOrderFinalized=t(this,"scOrderFinalized",7);this.scOrderError=t(this,"scOrderError",7);this.prices=[];this.product=undefined;this.mode="live";this.formId=undefined;this.modified=undefined;this.currencyCode="usd";this.persistSession=true;this.successUrl="";this.customer=undefined;this.alignment=undefined;this.taxProtocol=undefined;this.loggedIn=undefined;this.disableComponentsValidation=undefined;this.processors=undefined;this.manualPaymentMethods=undefined;this.editLineItems=true;this.removeLineItems=true;this.abandonedCheckoutReturnUrl=undefined;this.stripePaymentElement=false;this.loadingText=undefined;this.successText=undefined;this.pricesEntities={};this.productsEntities={};this.checkoutState="idle";this.error=undefined;this.processor="stripe";this.method=undefined;this.isManualProcessor=undefined;this.paymentIntents={};this.isDuplicate=undefined}handleOrderStateUpdate(i){o.checkout=i.detail}handleMethodChange(i){this.method=i.detail}handleAddEntities(i){const{products:t,prices:s}=i.detail;if(Object.keys((t===null||t===void 0?void 0:t.length)||{})){this.productsEntities={...this.productsEntities,...t}}if(Object.keys((s===null||s===void 0?void 0:s.length)||{})){this.pricesEntities={...this.pricesEntities,...s}}}async submit({skip_validation:i}={skip_validation:false}){if(!i){await this.validate()}return await this.sessionProvider.finalize()}async validate(){const i=this.el.querySelector("sc-form");return await i.validate()}componentWillLoad(){var i,t;const s=document.querySelector("sc-checkout");this.isDuplicate=!!s&&s!==this.el;if(this.isDuplicate)return;c.create(this,this.state());n.processors=this.processors;n.manualPaymentMethods=this.manualPaymentMethods;n.config.stripe.paymentElement=this.stripePaymentElement;o.formId=this.formId;o.mode=this.mode;o.product=this.product||null;o.currencyCode=this.currencyCode;o.groupId=this.el.id;o.abandonedCheckoutReturnUrl=this.abandonedCheckoutReturnUrl;d.loggedIn=this.loggedIn;d.email=(i=this.customer)===null||i===void 0?void 0:i.email;d.name=(t=this.customer)===null||t===void 0?void 0:t.name}state(){var i,t,s,e,n,d,c,l,a,h,u,p,v,f,m,g,b,y,k,x,S,w;return{processor:this.processor,method:this.method,selectedProcessorId:this.processor,manualPaymentMethods:this.manualPaymentMethods,processor_data:(i=o.checkout)===null||i===void 0?void 0:i.processor_data,state:this.checkoutState,formState:r.formState.value,paymentIntents:this.paymentIntents,successUrl:this.successUrl,bumps:(s=(t=o.checkout)===null||t===void 0?void 0:t.recommended_bumps)===null||s===void 0?void 0:s.data,order:o.checkout,abandonedCheckoutEnabled:(e=o.checkout)===null||e===void 0?void 0:e.abandoned_checkout_enabled,checkout:o.checkout,shippingEnabled:(n=o.checkout)===null||n===void 0?void 0:n.shipping_enabled,lineItems:((c=(d=o.checkout)===null||d===void 0?void 0:d.line_items)===null||c===void 0?void 0:c.data)||[],editLineItems:this.editLineItems,removeLineItems:this.removeLineItems,loading:r.formState.value==="loading",busy:["updating","finalizing","paying","confirming"].includes(r.formState.value),paying:["finalizing","paying","confirming"].includes(r.formState.value),empty:!["loading","updating"].includes(r.formState.value)&&!((h=(a=(l=o.checkout)===null||l===void 0?void 0:l.line_items)===null||a===void 0?void 0:a.pagination)===null||h===void 0?void 0:h.count),stripePaymentElement:this.stripePaymentElement,stripePaymentIntent:(((p=(u=o.checkout)===null||u===void 0?void 0:u.staged_payment_intents)===null||p===void 0?void 0:p.data)||[]).find((i=>i.processor_type==="stripe")),error:this.error,customer:this.customer,tax_status:(v=o.checkout)===null||v===void 0?void 0:v.tax_status,taxEnabled:(f=o.checkout)===null||f===void 0?void 0:f.tax_enabled,customerShippingAddress:typeof((m=o.checkout)===null||m===void 0?void 0:m.customer)!=="string"?(b=(g=o.checkout)===null||g===void 0?void 0:g.customer)===null||b===void 0?void 0:b.shipping_address:{},shippingAddress:(y=o.checkout)===null||y===void 0?void 0:y.shipping_address,taxStatus:(k=o.checkout)===null||k===void 0?void 0:k.tax_status,taxIdentifier:(x=o.checkout)===null||x===void 0?void 0:x.tax_identifier,totalAmount:(S=o.checkout)===null||S===void 0?void 0:S.total_amount,taxProtocol:this.taxProtocol,lockedChoices:this.prices,products:this.productsEntities,prices:this.pricesEntities,country:"US",loggedIn:this.loggedIn,emailExists:(w=o.checkout)===null||w===void 0?void 0:w.email_exists,formId:this.formId,mode:this.mode,currencyCode:this.currencyCode}}render(){var i,t,e,n;if(this.isDuplicate){return s("sc-alert",{open:true},wp.i18n.__("Due to processor restrictions, only one checkout form is allowed on the page.","surecart"))}return s("div",{class:{"sc-checkout-container":true,"sc-align-center":this.alignment==="center","sc-align-wide":this.alignment==="wide","sc-align-full":this.alignment==="full"}},s("sc-checkout-unsaved-changes-warning",{state:this.checkoutState}),s(c.Provider,{state:this.state()},s("sc-login-provider",{loggedIn:this.loggedIn,onScSetCustomer:i=>this.customer=i.detail,onScSetLoggedIn:i=>this.loggedIn=i.detail,order:o.checkout},s("sc-form-state-provider",{onScSetCheckoutFormState:i=>this.checkoutState=i.detail},s("sc-form-error-provider",{checkoutState:r.formState.value,onScUpdateError:i=>this.error=i.detail},s("sc-form-components-validator",{order:o.checkout,disabled:this.disableComponentsValidation,taxProtocol:this.taxProtocol},s("sc-order-confirm-provider",{"success-url":this.successUrl,successText:this.successText},s("sc-session-provider",{ref:i=>this.sessionProvider=i,prices:this.prices,persist:this.persistSession,onScError:i=>this.error=i.detail},s("slot",null))))))),this.state().busy&&s("sc-block-ui",{class:"busy-block-ui","z-index":30}),r.formState.value==="finalizing"&&s("sc-block-ui",{"z-index":30,spinner:true,style:{"--sc-block-ui-opacity":"0.75"}},((i=this.loadingText)===null||i===void 0?void 0:i.finalizing)||wp.i18n.__("Submitting order...","surecart")),r.formState.value==="paying"&&s("sc-block-ui",{"z-index":30,spinner:true,style:{"--sc-block-ui-opacity":"0.75"}},((t=this.loadingText)===null||t===void 0?void 0:t.paying)||wp.i18n.__("Processing payment...","surecart")),r.formState.value==="confirming"&&s("sc-block-ui",{"z-index":30,spinner:true,style:{"--sc-block-ui-opacity":"0.75"}},((e=this.loadingText)===null||e===void 0?void 0:e.confirming)||wp.i18n.__("Finalizing order...","surecart")),r.formState.value==="redirecting"&&s("sc-block-ui",{"z-index":30,spinner:true,style:{"--sc-block-ui-opacity":"0.75"}},((n=this.loadingText)===null||n===void 0?void 0:n.confirmed)||wp.i18n.__("Success! Redirecting...","surecart"))))}get el(){return e(this)}};a.style=l;export{a as sc_checkout};
//# sourceMappingURL=p-87c2553e.entry.js.map