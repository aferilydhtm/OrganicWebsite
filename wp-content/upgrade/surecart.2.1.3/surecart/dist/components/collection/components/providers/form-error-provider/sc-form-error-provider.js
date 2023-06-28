import{h}from"@stencil/core";export class ScFormErrorProvider{constructor(){this.checkoutState=void 0,this.error=void 0}handleErrorUpdate(e){this.scUpdateError.emit(e)}handleStateChange(e){["finalizing","updating"].includes(e)&&(this.error=null)}handleErrorEvent(e){this.error=e.detail,Object.keys((null==e?void 0:e.detail)||{}).length&&this.scSetState.emit("REJECT")}handlePayError(e){var t;this.error=(null===(t=e.detail)||void 0===t?void 0:t.message)||{code:"",message:"Something went wrong with your payment."}}componentWillLoad(){this.maybeAddErrorsComponent()}maybeAddErrorsComponent(){if(this.el.querySelector("sc-checkout-form-errors"))return;const e=document.createElement("sc-checkout-form-errors");console.log(this.el.querySelector("sc-form")),this.el.querySelector("sc-form").prepend(e)}render(){return h("slot",null)}static get is(){return"sc-form-error-provider"}static get encapsulation(){return"shadow"}static get properties(){return{checkoutState:{type:"string",mutable:!1,complexType:{original:"FormState",resolved:'"confirmed" | "confirming" | "draft" | "expired" | "failure" | "finalizing" | "idle" | "loading" | "paid" | "paying" | "redirecting" | "updating"',references:{FormState:{location:"import",path:"../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"The current order."},attribute:"checkout-state",reflect:!1}}}static get states(){return{error:{}}}static get events(){return[{method:"scUpdateError",name:"scUpdateError",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Set the state."},complexType:{original:"ResponseError",resolved:"ResponseError",references:{ResponseError:{location:"import",path:"../../../types"}}}},{method:"scSetState",name:"scSetState",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Form state event."},complexType:{original:"FormStateSetter",resolved:'"EXPIRE" | "FETCH" | "FINALIZE" | "PAID" | "PAYING" | "REJECT" | "RESOLVE"',references:{FormStateSetter:{location:"import",path:"../../../types"}}}}]}static get elementRef(){return"el"}static get watchers(){return[{propName:"error",methodName:"handleErrorUpdate"},{propName:"checkoutState",methodName:"handleStateChange"}]}static get listeners(){return[{name:"scError",method:"handleErrorEvent",target:void 0,capture:!1,passive:!1},{name:"scPayError",method:"handlePayError",target:void 0,capture:!1,passive:!1}]}}