import{r as s,h as t,H as n}from"./p-25a9e68f.js";import{o as e}from"./p-c728334f.js";const i=":host{display:block}";const r=class{constructor(t){s(this,t);this.manualPaymentTitle=undefined;this.manualPaymentInstructions=undefined}render(){if(!this.manualPaymentInstructions||!this.manualPaymentTitle){return t(n,{style:{display:"none"}})}return t("sc-alert",{type:"info",open:true},t("span",{slot:"title"},this.manualPaymentTitle),this.manualPaymentInstructions.split("\n").map((s=>t("p",null,s))))}};e(r,["manualPaymentTitle","manualPaymentInstructions"],false);r.style=i;export{r as sc_order_manual_instructions};
//# sourceMappingURL=p-a1b58da8.entry.js.map