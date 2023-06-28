import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{a as state}from"./watchers2.js";import{f as formBusy,a as formLoading}from"./getters4.js";import{s as setDefaultAnimation,b as stopAnimations,g as getAnimation,a as animateTo,c as shimKeyframesHeightAuto}from"./animation-registry.js";import{d as defineCustomElement$5}from"./sc-format-number2.js";import{d as defineCustomElement$4}from"./sc-line-item2.js";import{d as defineCustomElement$3}from"./sc-skeleton2.js";import{d as defineCustomElement$2}from"./sc-total2.js";const scOrderSummaryCss=":host{display:block;font-family:var(--sc-font-sans);font-size:var(--sc-checkout-font-size, 16px)}.collapse-link{display:flex;align-items:center;gap:0.35em}.summary__content--empty{display:none}.collapse-link__icon{width:18px;height:18px;color:var(--sc-order-collapse-link-icon-color, var(--sc-color-gray-500))}.item__product+.item__product{margin-top:20px}.empty{color:var(--sc-order-summary-color, var(--sc-color-gray-500))}.price{display:inline-block;opacity:0;visibility:hidden;transform:translateY(5px);transition:var(--sc-input-transition, var(--sc-transition-medium)) visibility ease, var(--sc-input-transition, var(--sc-transition-medium)) opacity ease, var(--sc-input-transition, var(--sc-transition-medium)) transform ease}.price--collapsed{opacity:1;visibility:visible;transform:translateY(0)}.summary{position:relative;user-select:none;cursor:pointer}.summary .collapse-link__icon{transition:transform 0.25s ease-in-out}.summary .scratch-price{text-decoration:line-through;color:var(--sc-color-gray-500);font-size:var(--sc-font-size-small);margin-right:var(--sc-spacing-xx-small)}.summary--open .collapse-link__icon{transform:rotate(180deg)}::slotted(*){margin:4px 0 !important}::slotted(sc-divider){margin:16px 0 !important}sc-line-item~sc-line-item{margin-top:14px}.total-price{white-space:nowrap}",ScOrderSummary$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scShow=createEvent(this,"scShow",7),this.scHide=createEvent(this,"scHide",7),this.order=void 0,this.busy=void 0,this.closedText=wp.i18n.__("Show Summary","surecart"),this.openText=wp.i18n.__("Summary","surecart"),this.collapsible=!1,this.collapsedOnMobile=!1,this.collapsed=void 0}componentWillLoad(){var e;if(this.collapsedOnMobile){const t=document.body.getClientRects();t.length&&(this.collapsed=(null===(e=t[0])||void 0===e?void 0:e.width)<781)}this.handleOpenChange()}handleClick(e){e.preventDefault(),this.empty()&&!formBusy()||(this.collapsed=!this.collapsed)}empty(){var e,t,s,o;return!(null===(s=null===(t=null===(e=state.checkout)||void 0===e?void 0:e.line_items)||void 0===t?void 0:t.pagination)||void 0===s?void 0:s.count)||((null===(o=null==state?void 0:state.checkout)||void 0===o?void 0:o.live_mode)?"test"===(null==state?void 0:state.mode):"live"===(null==state?void 0:state.mode))}renderHeader(){var e,t,s,o,i,a,n,l,r,c,m;return!formBusy()&&!formLoading()||(null===(s=null===(t=null===(e=state.checkout)||void 0===e?void 0:e.line_items)||void 0===t?void 0:t.data)||void 0===s?void 0:s.length)?h("sc-line-item",{style:{"--price-size":"var(--sc-font-size-x-large)"}},h("span",{class:"collapse-link",slot:"title",onClick:e=>this.handleClick(e)},this.collapsed?this.closedText||wp.i18n.__("Order Summary","surecart"):this.openText||wp.i18n.__("Order Summary","surecart"),h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"collapse-link__icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},h("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}))),h("span",{slot:"description"},h("slot",{name:"description"})),(null===(o=state.checkout)||void 0===o?void 0:o.total_amount)!==(null===(i=state.checkout)||void 0===i?void 0:i.amount_due)?h("span",{slot:"price",class:{price:!0,"price--collapsed":this.collapsed}},h("sc-format-number",{class:"total-price",type:"currency",currency:null===(a=state.checkout)||void 0===a?void 0:a.currency,value:null===(n=state.checkout)||void 0===n?void 0:n.amount_due})):h("span",{slot:"price",class:{price:!0,"price--collapsed":this.collapsed}},!!(null===(l=state.checkout)||void 0===l?void 0:l.total_savings_amount)&&h("sc-format-number",{class:"total-price scratch-price",type:"currency",value:-(null===(r=state.checkout)||void 0===r?void 0:r.total_savings_amount)+(null===(c=state.checkout)||void 0===c?void 0:c.total_amount),currency:(null===(m=state.checkout)||void 0===m?void 0:m.currency)||"usd"}),h("sc-total",{class:"total-price",total:"total",order:state.checkout}))):h("sc-line-item",null,h("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),h("sc-skeleton",{slot:"price",style:{width:"70px",display:"inline-block","--border-radius":"6px"}}),h("sc-skeleton",{slot:"currency",style:{width:"30px",display:"inline-block"}}))}async handleOpenChange(){if(this.collapsed){this.scHide.emit(),await stopAnimations(this.body),this.body.style.overflow="hidden";const{keyframes:e,options:t}=getAnimation(this.el,"summary.hide");await animateTo(this.body,shimKeyframesHeightAuto(e,this.body.scrollHeight),t),this.body.hidden=!0,this.body.style.height="auto",this.body.style.overflow="visible"}else{this.scShow.emit(),await stopAnimations(this.body),this.body.hidden=!1,this.body.style.overflow="hidden";const{keyframes:e,options:t}=getAnimation(this.el,"summary.show");await animateTo(this.body,shimKeyframesHeightAuto(e,this.body.scrollHeight),t),this.body.style.height="auto",this.body.style.overflow="visible"}}render(){return h("div",{class:{summary:!0,"summary--open":!this.collapsed}},this.collapsible&&this.renderHeader(),h("div",{ref:e=>this.body=e,class:{summary__content:!0,"summary__content--empty":this.empty()&&!formBusy()}},h("slot",null)),this.empty()&&!formBusy()&&h("p",{class:"empty"},wp.i18n.__("Your cart is empty.","surecart")))}get el(){return this}static get watchers(){return{collapsed:["handleOpenChange"]}}static get style(){return scOrderSummaryCss}},[1,"sc-order-summary",{order:[16],busy:[4],closedText:[1,"closed-text"],openText:[1,"open-text"],collapsible:[4],collapsedOnMobile:[4,"collapsed-on-mobile"],collapsed:[1028]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-order-summary","sc-format-number","sc-line-item","sc-skeleton","sc-total"].forEach((e=>{switch(e){case"sc-order-summary":customElements.get(e)||customElements.define(e,ScOrderSummary$1);break;case"sc-format-number":customElements.get(e)||defineCustomElement$5();break;case"sc-line-item":customElements.get(e)||defineCustomElement$4();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$3();break;case"sc-total":customElements.get(e)||defineCustomElement$2()}}))}setDefaultAnimation("summary.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"ease"}}),setDefaultAnimation("summary.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"ease"}});const ScOrderSummary=ScOrderSummary$1,defineCustomElement=defineCustomElement$1;export{ScOrderSummary,defineCustomElement};