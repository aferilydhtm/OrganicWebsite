import{r as i,c as e,h as t,a as o}from"./p-25a9e68f.js";import{p as l}from"./p-f0bb2283.js";import{o as s}from"./p-c728334f.js";import{s as n}from"./p-4c5e6c8d.js";import{a as d}from"./p-1c2e2695.js";import"./p-112455b1.js";import"./p-db7ede86.js";const r="sc-stripe-payment-element{display:block}sc-stripe-payment-element [hidden]{display:none}.loader{display:grid;height:128px;gap:2em}.loader__row{display:flex;align-items:flex-start;justify-content:space-between;gap:1em}.loader__details{display:grid;gap:0.5em}";const a=class{constructor(t){i(this,t);this.scPaid=e(this,"scPaid",7);this.scPayError=e(this,"scPayError",7);this.scSetState=e(this,"scSetState",7);this.stripePaymentIntent=undefined;this.order=undefined;this.address=undefined;this.successUrl=undefined;this.formState=undefined;this.selectedProcessorId=undefined;this.error=undefined;this.loaded=false;this.confirming=false}async componentDidLoad(){this.initialize()}handleUpdatedChange(i,e){var t,o,l,s;this.error="";if(((o=(t=i===null||i===void 0?void 0:i.processor_data)===null||t===void 0?void 0:t.stripe)===null||o===void 0?void 0:o.client_secret)!==((s=(l=e===null||e===void 0?void 0:e.processor_data)===null||l===void 0?void 0:l.stripe)===null||s===void 0?void 0:s.client_secret)){return this.initialize()}this.elements.fetchUpdates()}async initialize(){var i,e,t,o,s,n,d,r,a,c,h,u;if(!((t=(e=(i=this.stripePaymentIntent)===null||i===void 0?void 0:i.processor_data)===null||e===void 0?void 0:e.stripe)===null||t===void 0?void 0:t.publishable_key)||!((n=(s=(o=this.stripePaymentIntent)===null||o===void 0?void 0:o.processor_data)===null||s===void 0?void 0:s.stripe)===null||n===void 0?void 0:n.account_id))return;if(!this.stripe){try{this.stripe=await l.loadStripe((a=(r=(d=this.stripePaymentIntent)===null||d===void 0?void 0:d.processor_data)===null||r===void 0?void 0:r.stripe)===null||a===void 0?void 0:a.publishable_key,{stripeAccount:(u=(h=(c=this.stripePaymentIntent)===null||c===void 0?void 0:c.processor_data)===null||h===void 0?void 0:h.stripe)===null||u===void 0?void 0:u.account_id})}catch(i){this.error=(i===null||i===void 0?void 0:i.message)||wp.i18n.__("Stripe could not be loaded","surecart");return}}this.loadElement()}handleUpdateElement(){var i,e;if(!this.element)return;if(((i=this.order)===null||i===void 0?void 0:i.status)!=="draft")return;const{name:t,email:o}=this.order;const{line_1:l,line_2:s,city:n,state:d,country:r,postal_code:a}=((e=this.order)===null||e===void 0?void 0:e.shipping_address)||{};this.element.update({defaultValues:{billingDetails:{name:t,email:o,address:{line1:l,line2:s,city:n,state:d,country:r,postal_code:a}}},fields:{billingDetails:{email:"never"}}});this.elements.fetchUpdates()}async maybeConfirmOrder(i){var e,t,o,l,s,d,r,a,c,h;if(i!=="paying")return;if((n===null||n===void 0?void 0:n.id)!=="stripe")return;if(((t=(e=this.order)===null||e===void 0?void 0:e.payment_intent)===null||t===void 0?void 0:t.processor_type)!=="stripe")return;if(!((d=(s=(l=(o=this.order)===null||o===void 0?void 0:o.payment_intent)===null||l===void 0?void 0:l.processor_data)===null||s===void 0?void 0:s.stripe)===null||d===void 0?void 0:d.type))return;return await this.confirm((h=(c=(a=(r=this.order)===null||r===void 0?void 0:r.payment_intent)===null||a===void 0?void 0:a.processor_data)===null||c===void 0?void 0:c.stripe)===null||h===void 0?void 0:h.type)}async confirm(i,e={}){const t={elements:this.elements,confirmParams:{return_url:d(window.location.href,{...this.order.id?{checkout_id:this.order.id}:{}}),payment_method_data:{billing_details:{email:this.order.email}}},redirect:"if_required",...e};if(this.confirming)return;if(!this.stripe)return;try{this.scSetState.emit("PAYING");const e=i==="setup"?await this.stripe.confirmSetup(t):await this.stripe.confirmPayment(t);if(e===null||e===void 0?void 0:e.error){this.error=e.error.message;throw e.error}this.scSetState.emit("PAID");this.scPaid.emit()}catch(i){console.error(i);this.scPayError.emit(i);if(i.message){this.error=i.message}}finally{this.confirming=false}}loadElement(){var i,e,t,o,l,s,n,d,r;if(!this.stripe||!((t=(e=(i=this.stripePaymentIntent)===null||i===void 0?void 0:i.processor_data)===null||e===void 0?void 0:e.stripe)===null||t===void 0?void 0:t.client_secret)||!this.container){console.log("do not have stripe or");return}const a=getComputedStyle(this.el);this.elements=this.stripe.elements({clientSecret:(s=(l=(o=this.stripePaymentIntent)===null||o===void 0?void 0:o.processor_data)===null||l===void 0?void 0:l.stripe)===null||s===void 0?void 0:s.client_secret,appearance:{variables:{colorPrimary:a.getPropertyValue("--sc-color-primary-500"),colorText:a.getPropertyValue("--sc-input-label-color"),borderRadius:a.getPropertyValue("--sc-input-border-radius-medium"),colorBackground:a.getPropertyValue("--sc-input-background-color"),fontSizeBase:a.getPropertyValue("--sc-input-font-size-medium"),colorLogo:a.getPropertyValue("--sc-stripe-color-logo"),colorLogoTab:a.getPropertyValue("--sc-stripe-color-logo-tab"),colorLogoTabSelected:a.getPropertyValue("--sc-stripe-color-logo-tab-selected"),colorTextPlaceholder:a.getPropertyValue("--sc-input-placeholder-color")},rules:{".Input":{border:a.getPropertyValue("--sc-input-border")}}}});const{line_1:c,line_2:h,city:u,state:v,country:m,postal_code:p}=((n=this.order)===null||n===void 0?void 0:n.shipping_address)||{};this.elements.create("payment",{defaultValues:{billingDetails:{name:(d=this.order)===null||d===void 0?void 0:d.name,email:(r=this.order)===null||r===void 0?void 0:r.email,address:{line1:c,line2:h,city:u,state:v,country:m,postal_code:p}}},fields:{billingDetails:{email:"never"}}}).mount(".sc-payment-element-container");this.element=this.elements.getElement("payment");this.element.on("ready",(()=>this.loaded=true))}render(){return t("div",{class:"sc-stripe-payment-element","data-testid":"stripe-payment-element"},!!this.error&&t("sc-text",{style:{color:"var(--sc-color-danger-500)","--font-size":"var(--sc-font-size-small)",marginBottom:"0.5em"}},this.error),t("div",{class:"loader",hidden:this.loaded},t("div",{class:"loader__row"},t("div",{style:{width:"50%"}},t("sc-skeleton",{style:{width:"50%",marginBottom:"0.5em"}}),t("sc-skeleton",null)),t("div",{style:{flex:"1"}},t("sc-skeleton",{style:{width:"50%",marginBottom:"0.5em"}}),t("sc-skeleton",null)),t("div",{style:{flex:"1"}},t("sc-skeleton",{style:{width:"50%",marginBottom:"0.5em"}}),t("sc-skeleton",null))),t("div",{class:"loader__details"},t("sc-skeleton",{style:{height:"1rem"}}),t("sc-skeleton",{style:{height:"1rem",width:"30%"}}))),t("div",{hidden:!this.loaded,class:"sc-payment-element-container",ref:i=>this.container=i}))}get el(){return o(this)}static get watchers(){return{stripePaymentIntent:["handleUpdatedChange"],order:["handleUpdateElement"],error:["handleUpdateElement"],formState:["maybeConfirmOrder"]}}};s(a,["order","selectedProcessorId","stripePaymentIntent","formState"],true);a.style=r;export{a as sc_stripe_payment_element};
//# sourceMappingURL=p-e4ff0fd5.entry.js.map