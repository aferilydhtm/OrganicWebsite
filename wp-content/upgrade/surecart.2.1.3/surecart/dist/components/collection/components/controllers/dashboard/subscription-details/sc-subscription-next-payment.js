import{h,Host}from"@stencil/core";import{__}from"@wordpress/i18n";import{addQueryArgs}from"@wordpress/url";import apiFetch from"../../../../functions/fetch";import{intervalString,translateRemainingPayments}from"../../../../functions/price";import{formatTaxDisplay}from"../../../../functions/tax";export class ScSubscriptionNextPayment{constructor(){this.subscription=void 0,this.period=void 0,this.loading=!0,this.error=void 0,this.details=void 0}componentWillLoad(){this.fetch()}handleSubscriptionChange(){this.fetch()}async fetch(){var t,e,i;if((null===(t=this.subscription)||void 0===t?void 0:t.cancel_at_period_end)&&this.subscription.current_period_end_at)this.loading=!1;else if("canceled"!==(null===(e=this.subscription)||void 0===e?void 0:e.status))try{this.loading=!0,this.period=await apiFetch({method:"PATCH",path:addQueryArgs(`surecart/v1/subscriptions/${null===(i=this.subscription)||void 0===i?void 0:i.id}/upcoming_period`,{skip_product_group_validation:!0,expand:["period.checkout","checkout.line_items","checkout.payment_method","payment_method.card","payment_method.payment_instrument","payment_method.paypal_account","payment_method.bank_account","line_item.price","price.product","period.subscription"]}),data:{purge_pending_update:!1}})}catch(t){console.error(t),this.error=t}finally{this.loading=!1}else this.loading=!1}render(){var t,e,i,n;if(this.loading)return h("sc-toggle",{borderless:!0,disabled:!0},h("sc-flex",{slot:"summary",flexDirection:"column"},h("sc-skeleton",{style:{width:"200px"}}),h("sc-skeleton",{style:{width:"400px"}}),h("sc-skeleton",{style:{width:"300px"}})));const r=null===(t=null==this?void 0:this.period)||void 0===t?void 0:t.checkout;return r?h(Host,null,h("sc-toggle",{borderless:!0,shady:!0},h("span",{slot:"summary"},h("sc-subscription-details",{subscription:this.subscription},h("div",{style:{fontSize:"var(--sc-font-size-small)"}},__("Your next payment is","surecart")," ",h("strong",null,h("sc-format-number",{type:"currency",currency:null==r?void 0:r.currency,value:null==r?void 0:r.amount_due}))," ",!!(null===(e=this.subscription)||void 0===e?void 0:e.finite)&&" - "+translateRemainingPayments(null===(i=this.subscription)||void 0===i?void 0:i.remaining_period_count)))),h("sc-card",{noPadding:!0,borderless:!0},null===(n=null==r?void 0:r.line_items)||void 0===n?void 0:n.data.map((t=>{var e,i,n,r,o;return h("sc-product-line-item",{imageUrl:null===(i=null===(e=t.price)||void 0===e?void 0:e.product)||void 0===i?void 0:i.image_url,name:null===(r=null===(n=t.price)||void 0===n?void 0:n.product)||void 0===r?void 0:r.name,editable:!1,removable:!1,quantity:null==t?void 0:t.quantity,amount:null==t?void 0:t.total_amount,currency:null===(o=null==t?void 0:t.price)||void 0===o?void 0:o.currency,interval:intervalString(null==t?void 0:t.price)})})),h("sc-line-item",null,h("span",{slot:"description"},__("Subtotal","surecart")),h("sc-format-number",{slot:"price",type:"currency",currency:null==r?void 0:r.currency,value:null==r?void 0:r.subtotal_amount})),!!r.proration_amount&&h("sc-line-item",null,h("span",{slot:"description"},__("Proration Credit","surecart")),h("sc-format-number",{slot:"price",type:"currency",currency:null==r?void 0:r.currency,value:-(null==r?void 0:r.proration_amount)})),!!r.applied_balance_amount&&h("sc-line-item",null,h("span",{slot:"description"},__("Applied Balance","surecart")),h("sc-format-number",{slot:"price",type:"currency",currency:null==r?void 0:r.currency,value:-(null==r?void 0:r.applied_balance_amount)})),!!r.trial_amount&&h("sc-line-item",null,h("span",{slot:"description"},__("Free Trial","surecart")),h("sc-format-number",{slot:"price",type:"currency",currency:null==r?void 0:r.currency,value:null==r?void 0:r.trial_amount})),!!(null==r?void 0:r.discount_amount)&&h("sc-line-item",null,h("span",{slot:"description"},__("Discounts","surecart")),h("sc-format-number",{slot:"price",type:"currency",currency:null==r?void 0:r.currency,value:null==r?void 0:r.discount_amount})),!!r.tax_amount&&h("sc-line-item",null,h("span",{slot:"description"},formatTaxDisplay(null==r?void 0:r.tax_label)),h("sc-format-number",{slot:"price",type:"currency",currency:null==r?void 0:r.currency,value:null==r?void 0:r.tax_amount})),h("sc-divider",{style:{"--spacing":"0"}}),h("sc-line-item",null,h("span",{slot:"description"},__("Payment","surecart")),h("a",{href:addQueryArgs(window.location.href,{action:"update_payment_method"}),slot:"price-description"},h("sc-flex",{"justify-content":"flex-start","align-items":"center",style:{"--spacing":"0.5em"}},h("sc-payment-method",{paymentMethod:null==r?void 0:r.payment_method}),h("sc-icon",{name:"edit-3"})))),h("sc-line-item",{style:{"--price-size":"var(--sc-font-size-x-large)"}},h("span",{slot:"title"},__("Total Due","surecart")),h("sc-format-number",{slot:"price",type:"currency",currency:null==r?void 0:r.currency,value:null==r?void 0:r.amount_due}),h("span",{slot:"currency"},r.currency))))):h("div",{style:{padding:"var(--sc-spacing-medium)"}},h("sc-subscription-details",{slot:"summary",subscription:this.subscription}))}static get is(){return"sc-subscription-next-payment"}static get encapsulation(){return"shadow"}static get properties(){return{subscription:{type:"unknown",mutable:!1,complexType:{original:"Subscription",resolved:"Subscription",references:{Subscription:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""}}}}static get states(){return{period:{},loading:{},error:{},details:{}}}static get watchers(){return[{propName:"subscription",methodName:"handleSubscriptionChange"}]}}