import{s as sortByArray}from"./util-c1d762c0.js";import{c as createStore}from"./index-aabdbcfe.js";import{a as state$1}from"./watchers-9ca21ceb.js";const{state:state,onChange:onChange,on:on,dispose:dispose}=createStore({processors:[],methods:[],manualPaymentMethods:[],disabled:{processors:[]},sortOrder:{processors:["stripe","paypal"],manualPaymentMethods:[],paymentMethods:{mollie:["creditcard","paypal"]}},config:{stripe:{paymentElement:!1}}},((e,a)=>JSON.stringify(e)!==JSON.stringify(a))),availableProcessors=()=>sortByArray(state.processors,"processor_type",state.sortOrder.processors).filter((e=>(null==e?void 0:e.live_mode)===("live"===(null==state$1?void 0:state$1.mode)))).filter((e=>!(state.disabled.processors||[]).includes(e.processor_type))).filter((e=>{var a;return!(null===(a=null==state$1?void 0:state$1.checkout)||void 0===a?void 0:a.reusable_payment_method_required)||!!(null==e?void 0:e.recurring_enabled)})).filter(((e,a,s)=>!s.some((e=>"mollie"===e.processor_type))||"mollie"===e.processor_type)),getAvailableProcessor=e=>availableProcessors().find((({processor_type:a})=>a===e)),availableManualPaymentMethods=()=>{var e;return(null===(e=null==state$1?void 0:state$1.checkout)||void 0===e?void 0:e.reusable_payment_method_required)?[]:sortByArray(state.manualPaymentMethods,"id",state.sortOrder.manualPaymentMethods).filter((e=>!(state.disabled.processors||[]).includes(null==e?void 0:e.id)))},availableMethodTypes=()=>sortByArray(state.methods,"id",state.sortOrder.paymentMethods.mollie),availableProcessorChoices=()=>[...availableProcessors(),...availableManualPaymentMethods()],hasMultipleProcessorChoices=()=>{var e;return(null===(e=[...availableProcessors(),...availableManualPaymentMethods()])||void 0===e?void 0:e.length)>1},availableMethodChoices=()=>[...availableMethodTypes(),...availableManualPaymentMethods()],hasMultipleMethodChoices=()=>{var e;return(null===(e=[...availableMethodTypes(),...availableManualPaymentMethods()])||void 0===e?void 0:e.length)>1};export{availableProcessors as a,availableManualPaymentMethods as b,availableMethodTypes as c,hasMultipleMethodChoices as d,getAvailableProcessor as g,hasMultipleProcessorChoices as h,onChange as o,state as s};