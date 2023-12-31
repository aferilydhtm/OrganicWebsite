import{h}from"@stencil/core";import{state as checkoutState}from"@store/checkout";import{state as processorsState}from"@store/processors";import{state as formState}from"@store/form";import{state as userState}from"@store/user";import{__}from"@wordpress/i18n";import{Universe}from"stencil-wormhole";export class ScCheckout{constructor(){this.prices=[],this.product=void 0,this.mode="live",this.formId=void 0,this.modified=void 0,this.currencyCode="usd",this.persistSession=!0,this.successUrl="",this.customer=void 0,this.alignment=void 0,this.taxProtocol=void 0,this.loggedIn=void 0,this.disableComponentsValidation=void 0,this.processors=void 0,this.manualPaymentMethods=void 0,this.editLineItems=!0,this.removeLineItems=!0,this.abandonedCheckoutReturnUrl=void 0,this.stripePaymentElement=!1,this.loadingText=void 0,this.successText=void 0,this.pricesEntities={},this.productsEntities={},this.checkoutState="idle",this.error=void 0,this.processor="stripe",this.method=void 0,this.isManualProcessor=void 0,this.paymentIntents={},this.isDuplicate=void 0}handleOrderStateUpdate(e){checkoutState.checkout=e.detail}handleMethodChange(e){this.method=e.detail}handleAddEntities(e){const{products:t,prices:o}=e.detail;Object.keys((null==t?void 0:t.length)||{})&&(this.productsEntities={...this.productsEntities,...t}),Object.keys((null==o?void 0:o.length)||{})&&(this.pricesEntities={...this.pricesEntities,...o})}async submit({skip_validation:e}={skip_validation:!1}){return e||await this.validate(),await this.sessionProvider.finalize()}async validate(){const e=this.el.querySelector("sc-form");return await e.validate()}componentWillLoad(){var e,t;const o=document.querySelector("sc-checkout");this.isDuplicate=!!o&&o!==this.el,this.isDuplicate||(Universe.create(this,this.state()),processorsState.processors=this.processors,processorsState.manualPaymentMethods=this.manualPaymentMethods,processorsState.config.stripe.paymentElement=this.stripePaymentElement,checkoutState.formId=this.formId,checkoutState.mode=this.mode,checkoutState.product=this.product||null,checkoutState.currencyCode=this.currencyCode,checkoutState.groupId=this.el.id,checkoutState.abandonedCheckoutReturnUrl=this.abandonedCheckoutReturnUrl,userState.loggedIn=this.loggedIn,userState.email=null===(e=this.customer)||void 0===e?void 0:e.email,userState.name=null===(t=this.customer)||void 0===t?void 0:t.name)}state(){var e,t,o,i,s,r,n,a,c,l,d,u,p,h,m,g,v,f,b,y,k,_x;return{processor:this.processor,method:this.method,selectedProcessorId:this.processor,manualPaymentMethods:this.manualPaymentMethods,processor_data:null===(e=checkoutState.checkout)||void 0===e?void 0:e.processor_data,state:this.checkoutState,formState:formState.formState.value,paymentIntents:this.paymentIntents,successUrl:this.successUrl,bumps:null===(o=null===(t=checkoutState.checkout)||void 0===t?void 0:t.recommended_bumps)||void 0===o?void 0:o.data,order:checkoutState.checkout,abandonedCheckoutEnabled:null===(i=checkoutState.checkout)||void 0===i?void 0:i.abandoned_checkout_enabled,checkout:checkoutState.checkout,shippingEnabled:null===(s=checkoutState.checkout)||void 0===s?void 0:s.shipping_enabled,lineItems:(null===(n=null===(r=checkoutState.checkout)||void 0===r?void 0:r.line_items)||void 0===n?void 0:n.data)||[],editLineItems:this.editLineItems,removeLineItems:this.removeLineItems,loading:"loading"===formState.formState.value,busy:["updating","finalizing","paying","confirming"].includes(formState.formState.value),paying:["finalizing","paying","confirming"].includes(formState.formState.value),empty:!["loading","updating"].includes(formState.formState.value)&&!(null===(l=null===(c=null===(a=checkoutState.checkout)||void 0===a?void 0:a.line_items)||void 0===c?void 0:c.pagination)||void 0===l?void 0:l.count),stripePaymentElement:this.stripePaymentElement,stripePaymentIntent:((null===(u=null===(d=checkoutState.checkout)||void 0===d?void 0:d.staged_payment_intents)||void 0===u?void 0:u.data)||[]).find((e=>"stripe"===e.processor_type)),error:this.error,customer:this.customer,tax_status:null===(p=checkoutState.checkout)||void 0===p?void 0:p.tax_status,taxEnabled:null===(h=checkoutState.checkout)||void 0===h?void 0:h.tax_enabled,customerShippingAddress:"string"!=typeof(null===(m=checkoutState.checkout)||void 0===m?void 0:m.customer)?null===(v=null===(g=checkoutState.checkout)||void 0===g?void 0:g.customer)||void 0===v?void 0:v.shipping_address:{},shippingAddress:null===(f=checkoutState.checkout)||void 0===f?void 0:f.shipping_address,taxStatus:null===(b=checkoutState.checkout)||void 0===b?void 0:b.tax_status,taxIdentifier:null===(y=checkoutState.checkout)||void 0===y?void 0:y.tax_identifier,totalAmount:null===(k=checkoutState.checkout)||void 0===k?void 0:k.total_amount,taxProtocol:this.taxProtocol,lockedChoices:this.prices,products:this.productsEntities,prices:this.pricesEntities,country:"US",loggedIn:this.loggedIn,emailExists:null===(_x=checkoutState.checkout)||void 0===_x?void 0:_x.email_exists,formId:this.formId,mode:this.mode,currencyCode:this.currencyCode}}render(){var e,t,o,i;return this.isDuplicate?h("sc-alert",{open:!0},__("Due to processor restrictions, only one checkout form is allowed on the page.","surecart")):h("div",{class:{"sc-checkout-container":!0,"sc-align-center":"center"===this.alignment,"sc-align-wide":"wide"===this.alignment,"sc-align-full":"full"===this.alignment}},h("sc-checkout-unsaved-changes-warning",{state:this.checkoutState}),h(Universe.Provider,{state:this.state()},h("sc-login-provider",{loggedIn:this.loggedIn,onScSetCustomer:e=>this.customer=e.detail,onScSetLoggedIn:e=>this.loggedIn=e.detail,order:checkoutState.checkout},h("sc-form-state-provider",{onScSetCheckoutFormState:e=>this.checkoutState=e.detail},h("sc-form-error-provider",{checkoutState:formState.formState.value,onScUpdateError:e=>this.error=e.detail},h("sc-form-components-validator",{order:checkoutState.checkout,disabled:this.disableComponentsValidation,taxProtocol:this.taxProtocol},h("sc-order-confirm-provider",{"success-url":this.successUrl,successText:this.successText},h("sc-session-provider",{ref:e=>this.sessionProvider=e,prices:this.prices,persist:this.persistSession,onScError:e=>this.error=e.detail},h("slot",null))))))),this.state().busy&&h("sc-block-ui",{class:"busy-block-ui","z-index":30}),"finalizing"===formState.formState.value&&h("sc-block-ui",{"z-index":30,spinner:!0,style:{"--sc-block-ui-opacity":"0.75"}},(null===(e=this.loadingText)||void 0===e?void 0:e.finalizing)||__("Submitting order...","surecart")),"paying"===formState.formState.value&&h("sc-block-ui",{"z-index":30,spinner:!0,style:{"--sc-block-ui-opacity":"0.75"}},(null===(t=this.loadingText)||void 0===t?void 0:t.paying)||__("Processing payment...","surecart")),"confirming"===formState.formState.value&&h("sc-block-ui",{"z-index":30,spinner:!0,style:{"--sc-block-ui-opacity":"0.75"}},(null===(o=this.loadingText)||void 0===o?void 0:o.confirming)||__("Finalizing order...","surecart")),"redirecting"===formState.formState.value&&h("sc-block-ui",{"z-index":30,spinner:!0,style:{"--sc-block-ui-opacity":"0.75"}},(null===(i=this.loadingText)||void 0===i?void 0:i.confirmed)||__("Success! Redirecting...","surecart"))))}static get is(){return"sc-checkout"}static get originalStyleUrls(){return{$:["sc-checkout.scss"]}}static get styleUrls(){return{$:["sc-checkout.css"]}}static get properties(){return{prices:{type:"unknown",mutable:!1,complexType:{original:"Array<PriceChoice>",resolved:"PriceChoice[]",references:{Array:{location:"global"},PriceChoice:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"An array of prices to pre-fill in the form."},defaultValue:"[]"},product:{type:"unknown",mutable:!1,complexType:{original:"Product",resolved:"Product",references:{Product:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"A product to pre-fill the form."}},mode:{type:"string",mutable:!1,complexType:{original:"'test' | 'live'",resolved:'"live" | "test"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"Are we in test or live mode."},attribute:"mode",reflect:!1,defaultValue:"'live'"},formId:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The checkout form id"},attribute:"form-id",reflect:!1},modified:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"When the form was modified."},attribute:"modified",reflect:!1},currencyCode:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Currency to use for this checkout."},attribute:"currency-code",reflect:!1,defaultValue:"'usd'"},persistSession:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Whether to persist the session in the browser between visits."},attribute:"persist-session",reflect:!1,defaultValue:"true"},successUrl:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Where to go on success"},attribute:"success-url",reflect:!1,defaultValue:"''"},customer:{type:"unknown",mutable:!0,complexType:{original:"Customer",resolved:"Customer",references:{Customer:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"Stores the current customer"}},alignment:{type:"string",mutable:!1,complexType:{original:"'center' | 'wide' | 'full'",resolved:'"center" | "full" | "wide"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"Alignment"},attribute:"alignment",reflect:!1},taxProtocol:{type:"unknown",mutable:!1,complexType:{original:"TaxProtocol",resolved:"TaxProtocol",references:{TaxProtocol:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"The account tax protocol"}},loggedIn:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is this user logged in?"},attribute:"logged-in",reflect:!1},disableComponentsValidation:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Should we disable components validation"},attribute:"disable-components-validation",reflect:!1},processors:{type:"unknown",mutable:!0,complexType:{original:"Processor[]",resolved:"Processor[]",references:{Processor:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"Processors enabled for this form."}},manualPaymentMethods:{type:"unknown",mutable:!1,complexType:{original:"ManualPaymentMethod[]",resolved:"ManualPaymentMethod[]",references:{ManualPaymentMethod:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"Manual payment methods enabled for this form."}},editLineItems:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Can we edit line items?"},attribute:"edit-line-items",reflect:!1,defaultValue:"true"},removeLineItems:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Can we remove line items?"},attribute:"remove-line-items",reflect:!1,defaultValue:"true"},abandonedCheckoutReturnUrl:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The abandoned checkout return url."},attribute:"abandoned-checkout-return-url",reflect:!1},stripePaymentElement:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Use the Stripe payment element."},attribute:"stripe-payment-element",reflect:!1,defaultValue:"false"},loadingText:{type:"unknown",mutable:!1,complexType:{original:"{\n    finalizing: string;\n    paying: string;\n    confirming: string;\n    confirmed: string;\n  }",resolved:"{ finalizing: string; paying: string; confirming: string; confirmed: string; }",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Text for the loading states of the form."}},successText:{type:"unknown",mutable:!1,complexType:{original:"{\n    title: string;\n    description: string;\n    button: string;\n  }",resolved:"{ title: string; description: string; button: string; }",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Success text for the form."}}}}static get states(){return{pricesEntities:{},productsEntities:{},checkoutState:{},error:{},processor:{},method:{},isManualProcessor:{},paymentIntents:{},isDuplicate:{}}}static get events(){return[{method:"scOrderUpdated",name:"scOrderUpdated",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Checkout has been updated."},complexType:{original:"Checkout",resolved:"Checkout",references:{Checkout:{location:"import",path:"../../../../types"}}}},{method:"scOrderFinalized",name:"scOrderFinalized",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Checkout has been finalized."},complexType:{original:"Checkout",resolved:"Checkout",references:{Checkout:{location:"import",path:"../../../../types"}}}},{method:"scOrderError",name:"scOrderError",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Checkout has an error."},complexType:{original:"ResponseError",resolved:"ResponseError",references:{ResponseError:{location:"import",path:"../../../../types"}}}}]}static get methods(){return{submit:{complexType:{signature:"({ skip_validation }?: { skip_validation: boolean; }) => Promise<Checkout | NodeJS.Timeout>",parameters:[{tags:[],text:""}],references:{Promise:{location:"global"},Checkout:{location:"import",path:"../../../../types"},NodeJS:{location:"global"}},return:"Promise<Checkout | Timeout>"},docs:{text:"Submit the form",tags:[]}},validate:{complexType:{signature:"() => Promise<boolean>",parameters:[],references:{Promise:{location:"global"},HTMLScFormElement:{location:"global"}},return:"Promise<boolean>"},docs:{text:"Validate the form.",tags:[]}}}}static get elementRef(){return"el"}static get listeners(){return[{name:"scUpdateOrderState",method:"handleOrderStateUpdate",target:void 0,capture:!1,passive:!1},{name:"scSetMethod",method:"handleMethodChange",target:void 0,capture:!1,passive:!1},{name:"scAddEntities",method:"handleAddEntities",target:void 0,capture:!1,passive:!1}]}}