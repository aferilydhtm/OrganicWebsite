import{a as state}from"./watchers2.js";import"./watchers3.js";import{s as state$1}from"./getters2.js";import{a as apiFetch}from"./fetch.js";import{a as addQueryArgs}from"./add-query-args.js";import{g as getQueryArg}from"./get-query-arg.js";const baseUrl="surecart/v1/checkouts/",expand=["line_items","line_item.price","line_item.fees","price.product","customer","customer.shipping_address","payment_intent","discount","discount.promotion","recommended_bumps","bump.price","discount.coupon","shipping_address","staged_payment_intents","tax_identifier","manual_payment_method"],withDefaultData=(t={})=>{var e,a,d,i;return{live_mode:"test"!==state.mode,group_key:state.groupId,abandoned_checkout_return_url:state.abandonedCheckoutReturnUrl||null,abandoned_checkout_enabled:state.abandonedCheckoutEnabled&&!!state.abandonedCheckoutReturnUrl,metadata:{...(null==t?void 0:t.metadata)||{},...(null===(e=null===window||void 0===window?void 0:window.scData)||void 0===e?void 0:e.page_id)&&{page_id:null===(a=null===window||void 0===window?void 0:window.scData)||void 0===a?void 0:a.page_id},...(null===(d=null==state?void 0:state.product)||void 0===d?void 0:d.id)&&{buy_page_product_id:null===(i=null==state?void 0:state.product)||void 0===i?void 0:i.id},page_url:window.location.href},...t}},withDefaultQuery=(t={})=>{var e,a;return{...!!(null==state?void 0:state.formId)&&{form_id:null==state?void 0:state.formId},...!!(null===(e=null==state?void 0:state.product)||void 0===e?void 0:e.id)&&{product_id:null===(a=null==state?void 0:state.product)||void 0===a?void 0:a.id},...!!state$1.config.stripe.paymentElement&&{stage_processor_type:"stripe"},...t}},findInitialCheckoutId=()=>{var d,i;return getQueryArg(window.location.href,"checkout_id")||((null===(t=null==state?void 0:state.checkout)||void 0===t?void 0:t.id)?null===(e=null==state?void 0:state.checkout)||void 0===e?void 0:e.id:null)},parsePath=(t,e="")=>{let a=t?`${baseUrl}${t}`:baseUrl;return a=`${a}${e}`,addQueryArgs(a,{expand:expand})},fetchCheckout=async({id:t,query:e={}})=>await apiFetch({path:addQueryArgs(parsePath(t),withDefaultQuery(e))}),createOrUpdateCheckout=async({id:t=null,data:e={},query:a={}})=>{return t=t||getQueryArg(window.location.href,"checkout_id")||((null===(d=null==state?void 0:state.checkout)||void 0===d?void 0:d.id)?null===(i=null==state?void 0:state.checkout)||void 0===i?void 0:i.id:null),await apiFetch({method:t?"PATCH":"POST",path:addQueryArgs(parsePath(t),withDefaultQuery(a)),data:withDefaultData(e)});var d,i},updateCheckout=async({id:t,data:e={},query:a={}})=>await apiFetch({method:"PATCH",path:addQueryArgs(parsePath(t),withDefaultQuery(a)),data:withDefaultData(e)}),finalizeCheckout=async({id:t,data:e={},query:a={},processor:d})=>await apiFetch({method:"POST",path:addQueryArgs(parsePath(t,"/finalize"),withDefaultQuery({...(null==d?void 0:d.manual)?{manual_payment:!0,manual_payment_method_id:null==d?void 0:d.id}:{processor_type:null==d?void 0:d.id},...a})),data:withDefaultData(e)}),addLineItem=async({checkout:t,data:e,live_mode:a=!1})=>{if(!(null==t?void 0:t.id))return await apiFetch({method:"POST",path:addQueryArgs(parsePath(null)),data:{line_items:[e],live_mode:a}});const d=await apiFetch({path:addQueryArgs("surecart/v1/line_items",{consolidate:!0,expand:[...(expand||[]).map((t=>t.includes(".")?t:`checkout.${t}`)),"checkout"]}),method:"POST",data:{...e,checkout:t.id}});return null==d?void 0:d.checkout};export{fetchCheckout as a,baseUrl as b,createOrUpdateCheckout as c,addLineItem as d,expand as e,finalizeCheckout as f,updateCheckout as u};