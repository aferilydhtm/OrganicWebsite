"use strict";const watchers=require("./watchers-503cdd2a.js");require("./watchers-bce289f5.js");const getters=require("./getters-f0455d23.js"),fetch=require("./fetch-b673a242.js"),addQueryArgs=require("./add-query-args-17c551b6.js"),getQueryArg=require("./get-query-arg-53bf21e2.js"),baseUrl="surecart/v1/checkouts/",expand=["line_items","line_item.price","line_item.fees","price.product","customer","customer.shipping_address","payment_intent","discount","discount.promotion","recommended_bumps","bump.price","discount.coupon","shipping_address","staged_payment_intents","tax_identifier","manual_payment_method"],withDefaultData=(e={})=>{var t,a,d,r;return{live_mode:"test"!==watchers.state.mode,group_key:watchers.state.groupId,abandoned_checkout_return_url:watchers.state.abandonedCheckoutReturnUrl||null,abandoned_checkout_enabled:watchers.state.abandonedCheckoutEnabled&&!!watchers.state.abandonedCheckoutReturnUrl,metadata:{...(null==e?void 0:e.metadata)||{},...(null===(t=null===window||void 0===window?void 0:window.scData)||void 0===t?void 0:t.page_id)&&{page_id:null===(a=null===window||void 0===window?void 0:window.scData)||void 0===a?void 0:a.page_id},...(null===(d=null===watchers.state||void 0===watchers.state?void 0:watchers.state.product)||void 0===d?void 0:d.id)&&{buy_page_product_id:null===(r=null===watchers.state||void 0===watchers.state?void 0:watchers.state.product)||void 0===r?void 0:r.id},page_url:window.location.href},...e}},withDefaultQuery=(e={})=>{var t,a;return{...!!(null===watchers.state||void 0===watchers.state?void 0:watchers.state.formId)&&{form_id:null===watchers.state||void 0===watchers.state?void 0:watchers.state.formId},...!!(null===(t=null===watchers.state||void 0===watchers.state?void 0:watchers.state.product)||void 0===t?void 0:t.id)&&{product_id:null===(a=null===watchers.state||void 0===watchers.state?void 0:watchers.state.product)||void 0===a?void 0:a.id},...!!getters.state.config.stripe.paymentElement&&{stage_processor_type:"stripe"},...e}},findInitialCheckoutId=()=>{var d,r;return getQueryArg.getQueryArg(window.location.href,"checkout_id")||((null===(e=null===watchers.state||void 0===watchers.state?void 0:watchers.state.checkout)||void 0===e?void 0:e.id)?null===(t=null===watchers.state||void 0===watchers.state?void 0:watchers.state.checkout)||void 0===t?void 0:t.id:null)},parsePath=(e,t="")=>{let a=e?`${baseUrl}${e}`:baseUrl;return a=`${a}${t}`,addQueryArgs.addQueryArgs(a,{expand:expand})},fetchCheckout=async({id:e,query:t={}})=>await fetch.apiFetch({path:addQueryArgs.addQueryArgs(parsePath(e),withDefaultQuery(t))}),createOrUpdateCheckout=async({id:e=null,data:t={},query:a={}})=>{return e=e||getQueryArg.getQueryArg(window.location.href,"checkout_id")||((null===(d=null===watchers.state||void 0===watchers.state?void 0:watchers.state.checkout)||void 0===d?void 0:d.id)?null===(r=null===watchers.state||void 0===watchers.state?void 0:watchers.state.checkout)||void 0===r?void 0:r.id:null),await fetch.apiFetch({method:e?"PATCH":"POST",path:addQueryArgs.addQueryArgs(parsePath(e),withDefaultQuery(a)),data:withDefaultData(t)});var d,r},updateCheckout=async({id:e,data:t={},query:a={}})=>await fetch.apiFetch({method:"PATCH",path:addQueryArgs.addQueryArgs(parsePath(e),withDefaultQuery(a)),data:withDefaultData(t)}),finalizeCheckout=async({id:e,data:t={},query:a={},processor:d})=>await fetch.apiFetch({method:"POST",path:addQueryArgs.addQueryArgs(parsePath(e,"/finalize"),withDefaultQuery({...(null==d?void 0:d.manual)?{manual_payment:!0,manual_payment_method_id:null==d?void 0:d.id}:{processor_type:null==d?void 0:d.id},...a})),data:withDefaultData(t)}),addLineItem=async({checkout:e,data:t,live_mode:a=!1})=>{if(!(null==e?void 0:e.id))return await fetch.apiFetch({method:"POST",path:addQueryArgs.addQueryArgs(parsePath(null)),data:{line_items:[t],live_mode:a}});const d=await fetch.apiFetch({path:addQueryArgs.addQueryArgs("surecart/v1/line_items",{consolidate:!0,expand:[...(expand||[]).map((e=>e.includes(".")?e:`checkout.${e}`)),"checkout"]}),method:"POST",data:{...t,checkout:e.id}});return null==d?void 0:d.checkout};exports.addLineItem=addLineItem,exports.baseUrl=baseUrl,exports.createOrUpdateCheckout=createOrUpdateCheckout,exports.expand=expand,exports.fetchCheckout=fetchCheckout,exports.finalizeCheckout=finalizeCheckout,exports.updateCheckout=updateCheckout;