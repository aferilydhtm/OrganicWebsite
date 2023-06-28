import{r as i,c as t,h as s,a as e}from"./p-25a9e68f.js";import{o as n}from"./p-c728334f.js";const o=":host{display:block}.sc-donation-choices{display:grid;gap:var(--sc-spacing-small);position:relative}.sc-donation-choices__form{display:grid;gap:var(--sc-spacing-small)}";const l=class{constructor(s){i(this,s);this.scRemoveLineItem=t(this,"scRemoveLineItem",7);this.scUpdateLineItem=t(this,"scUpdateLineItem",7);this.scAddLineItem=t(this,"scAddLineItem",7);this.priceId=undefined;this.defaultAmount=undefined;this.currencyCode="usd";this.lineItems=[];this.loading=undefined;this.busy=undefined;this.removeInvalid=true;this.label=undefined;this.lineItem=undefined;this.error=undefined;this.showCustomAmount=undefined}async reportValidity(){if(!this.input)return true;return this.input.shadowRoot.querySelector("sc-input").reportValidity()}handleChange(){const i=Array.from(this.getChoices()).find((i=>i.checked));this.showCustomAmount=i.value==="ad_hoc";if(!isNaN(parseInt(i.value))){this.scUpdateLineItem.emit({price_id:this.priceId,quantity:1,ad_hoc_amount:parseInt(i.value)})}}handleCustomAmountToggle(i){if(i){setTimeout((()=>{var i,t;(t=(i=this.input)===null||i===void 0?void 0:i.triggerFocus)===null||t===void 0?void 0:t.call(i)}),50)}}handleLineItemsChange(){var i;if(!((i=this.lineItems)===null||i===void 0?void 0:i.length))return;this.lineItem=(this.lineItems||[]).find((i=>i.price.id===this.priceId))}handleLineItemChange(i){this.removeInvalid&&this.removeInvalidPrices();const t=this.getChoices();let s=false;t.forEach((t=>{if(isNaN(parseInt(t.value))||t.disabled)return;if(parseInt(t.value)===(i===null||i===void 0?void 0:i.ad_hoc_amount)){t.checked=true;s=true}else{t.checked=false}}));this.showCustomAmount=!s;if(!s){this.el.querySelector('sc-choice[value="ad_hoc"]').checked=true}}componentWillLoad(){this.handleLineItemsChange()}selectDefaultChoice(){const i=this.getChoices();if(!i.length)return;i[0].checked=true}getChoices(){return this.el.querySelectorAll("sc-choice")||[]}removeInvalidPrices(){if(!this.lineItem)return;this.getChoices().forEach((i=>{var t,s,e,n,o,l,d,h;if(((s=(t=this.lineItem)===null||t===void 0?void 0:t.price)===null||s===void 0?void 0:s.ad_hoc_max_amount)&&parseInt(i.value)>((n=(e=this.lineItem)===null||e===void 0?void 0:e.price)===null||n===void 0?void 0:n.ad_hoc_max_amount)){i.style.display="none";i.disabled=true;return}if(((l=(o=this.lineItem)===null||o===void 0?void 0:o.price)===null||l===void 0?void 0:l.ad_hoc_min_amount)&&parseInt(i.value)<((h=(d=this.lineItem)===null||d===void 0?void 0:d.price)===null||h===void 0?void 0:h.ad_hoc_min_amount)){i.style.display="none";i.disabled=true;return}i.style.display="flex";i.disabled=false}))}updateCustomAmount(){var i,t,s;if(this.input.value===((s=(t=(i=this.lineItem)===null||i===void 0?void 0:i.ad_hoc_amount)===null||t===void 0?void 0:t.toString)===null||s===void 0?void 0:s.call(t)))return;this.input.value?this.scUpdateLineItem.emit({price_id:this.priceId,quantity:1,ad_hoc_amount:parseInt(this.input.value)}):this.scRemoveLineItem.emit({price_id:this.priceId,quantity:1})}render(){var i,t,e;if(this.loading){return s("div",{class:"sc-donation-choices"},s("sc-skeleton",{style:{width:"20%",display:"inline-block"}}),s("sc-skeleton",{style:{width:"60%",display:"inline-block"}}),s("sc-skeleton",{style:{width:"40%",display:"inline-block"}}))}return s("div",{class:"sc-donation-choices"},s("sc-choices",{label:this.label,"auto-width":true},s("slot",null)),this.showCustomAmount&&s("div",{class:"sc-donation-choices__form"},s("sc-price-input",{ref:i=>this.input=i,required:true,currencyCode:this.currencyCode,label:"Enter an amount",value:(e=(t=(i=this.lineItem)===null||i===void 0?void 0:i.ad_hoc_amount)===null||t===void 0?void 0:t.toString)===null||e===void 0?void 0:e.call(t)}),s("sc-button",{type:"primary",onClick:()=>this.updateCustomAmount(),full:true,busy:this.busy},wp.i18n.__("Update","surecart"))),this.busy&&s("sc-block-ui",{style:{zIndex:"9"}}))}get el(){return e(this)}static get watchers(){return{showCustomAmount:["handleCustomAmountToggle"],lineItems:["handleLineItemsChange"],lineItem:["handleLineItemChange"]}}};n(l,["lineItems","loading","busy","currencyCode"],false);l.style=o;export{l as sc_donation_choices};
//# sourceMappingURL=p-55a9bf31.entry.js.map