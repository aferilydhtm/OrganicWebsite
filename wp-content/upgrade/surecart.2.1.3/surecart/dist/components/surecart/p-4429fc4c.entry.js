import{r as i,c as s,h as e,F as t,a as c}from"./p-25a9e68f.js";import{o}from"./p-c728334f.js";import{g as r}from"./p-afcbd440.js";const l="sc-price-choices{display:block;position:relative}sc-block-ui{z-index:9}";const n=class{constructor(e){i(this,e);this.scRemoveLineItem=s(this,"scRemoveLineItem",7);this.scUpdateLineItem=s(this,"scUpdateLineItem",7);this.label=undefined;this.columns=1;this.required=true;this.order=undefined}handleChange(){this.el.querySelectorAll("sc-price-choice").forEach((i=>{var s;const e=i.querySelector("sc-choice")||i.querySelector("sc-choice-container");if(!(e===null||e===void 0?void 0:e.checked)){this.scRemoveLineItem.emit({price_id:i.priceId,quantity:i.quantity})}else{const t=r((s=this.order)===null||s===void 0?void 0:s.line_items,e.value);this.scUpdateLineItem.emit({price_id:i.priceId,quantity:(t===null||t===void 0?void 0:t.quantity)||(i===null||i===void 0?void 0:i.quantity)||1})}}))}render(){return e(t,null,e("sc-choices",{label:this.label,required:this.required,class:"loaded price-selector",style:{"--columns":this.columns.toString()}},e("slot",null)))}get el(){return c(this)}};o(n,["order"],false);n.style=l;export{n as sc_price_choices};
//# sourceMappingURL=p-4429fc4c.entry.js.map