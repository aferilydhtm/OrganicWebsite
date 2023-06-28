import{r as i,c as e,h as n,F as t}from"./p-25a9e68f.js";import{i as c}from"./p-2907581f.js";import"./p-a586043b.js";const s=":host {\n  display: block;\n  min-width: 0;\n  width: 100%;\n}\n\nsc-choice-container {\n  container-type: inline-size;\n}\n\n.price-choice {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  line-height: var(--sc-line-height-dense);\n  gap: var(--sc-spacing-small);\n}\n.price-choice__name {\n  display: inline-block;\n  font-size: var(--sc-price-choice-name-size, var(--sc-input-label-font-size-medium));\n  font-weight: var(--sc-price-choice-name-font-weight, var(--sc-font-weight-bold));\n  text-transform: var(--sc-price-choice-text-transform, var(--sc-input-label-text-transform, none));\n}\n.price-choice > *:not(:first-child):last-child {\n  text-align: right;\n}\n.price-choice__details {\n  flex: 1 0 50%;\n  display: grid;\n  gap: var(--sc-spacing-xxx-small);\n}\n.price-choice__trial, .price-choice__setup-fee, .price-choice__price {\n  font-size: var(--sc-font-size-small);\n  opacity: 0.8;\n}\n.price-choice__price {\n  font-weight: var(--sc-price-choice-price-font-weight, var(--sc-font-weight-normal));\n}\n\n@container (max-width: 325px) {\n  .price-choice {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--sc-spacing-xx-small);\n  }\n  .price-choice > *:not(:first-child):last-child {\n    text-align: initial;\n  }\n}";const r=class{constructor(n){i(this,n);this.scChange=e(this,"scChange",7);this.price=undefined;this.loading=false;this.label=undefined;this.showLabel=true;this.showPrice=true;this.showControl=false;this.description=undefined;this.type=undefined;this.checked=false;this.priceData=undefined}handlePriceChange(){this.priceData=typeof this.price==="string"?JSON.parse(this.price):this.price}componentWillLoad(){this.handlePriceChange()}renderPrice(){var i,e;return n(t,null,n("sc-format-number",{type:"currency",value:(i=this.priceData)===null||i===void 0?void 0:i.amount,currency:(e=this.priceData)===null||e===void 0?void 0:e.currency}),c(this.priceData,{showOnce:true,abbreviate:true,labels:{interval:"/",period:wp.i18n.__("for","surecart")}}))}render(){var i,e,s,r,a,o,l,h,d;if(this.loading){return n("sc-choice-container",{showControl:this.showControl,name:"loading",disabled:true},n("div",{class:"price-choice"},n("sc-skeleton",{style:{width:"60px",display:"inline-block"}}),n("sc-skeleton",{style:{width:"80px",display:"inline-block"}})))}return n("sc-choice-container",{value:(i=this.priceData)===null||i===void 0?void 0:i.id,type:this.type,showControl:this.showControl,checked:this.checked,onScChange:()=>this.scChange.emit()},n("div",{class:"price-choice"},this.showLabel&&n("div",{class:"price-choice__title"},n("div",{class:"price-choice__name"},this.label||this.priceData.name),!!this.description&&n("div",{class:"price-choice__description"},this.description)),this.showPrice&&n("div",{class:"price-choice__details"},n("div",{class:"price-choice__price"},((e=this.priceData)===null||e===void 0?void 0:e.ad_hoc)?wp.i18n.__("Custom Amount","surecart"):n(t,null,n("sc-format-number",{type:"currency",value:(s=this.priceData)===null||s===void 0?void 0:s.amount,currency:(r=this.priceData)===null||r===void 0?void 0:r.currency}),c(this.priceData,{showOnce:true,abbreviate:true,labels:{interval:"/",period:wp.i18n.__("for","surecart")}}))),!!((a=this.priceData)===null||a===void 0?void 0:a.trial_duration_days)&&n("div",{class:"price-choice__trial"},wp.i18n.sprintf(wp.i18n._n("Starting in %s day","Starting in %s days",this.priceData.trial_duration_days,"surecart"),this.priceData.trial_duration_days)),!!((o=this.priceData)===null||o===void 0?void 0:o.setup_fee_enabled)&&((l=this.priceData)===null||l===void 0?void 0:l.setup_fee_amount)&&n("div",{class:"price-choice__setup-fee"},n("sc-format-number",{type:"currency",value:this.priceData.setup_fee_amount,currency:(h=this.priceData)===null||h===void 0?void 0:h.currency})," ",((d=this.priceData)===null||d===void 0?void 0:d.setup_fee_name)||wp.i18n.__("Setup Fee","surecart")))))}static get watchers(){return{price:["handlePriceChange"]}}};r.style=s;export{r as sc_price_choice_container};
//# sourceMappingURL=p-39d69779.entry.js.map