import{r,h as t,F as a,a as e}from"./p-25a9e68f.js";const s=":host{display:block}.breadcrumb{display:flex;align-items:center;flex-wrap:wrap}";const n=class{constructor(t){r(this,t);this.label="Breadcrumb"}getSeparator(){const r=this.el.shadowRoot.querySelector("slot[name=separator]");const t=r.assignedElements({flatten:true})[0];const a=t.cloneNode(true);[a,...a.querySelectorAll("[id]")].forEach((r=>r.removeAttribute("id")));a.slot="separator";return a}handleSlotChange(){const r=this.el.shadowRoot.querySelector(".breadcrumb slot");const t=r.assignedElements().filter((r=>r.nodeName==="CE-BREADCRUMB"));t.forEach(((r,a)=>{const e=r.querySelector('[slot="separator"]');if(e===null){r.append(this.getSeparator())}if(a===t.length-1){r.setAttribute("aria-current","page")}else{r.removeAttribute("aria-current")}}))}render(){return t(a,null,t("nav",{part:"base",class:"breadcrumb","aria-label":this.label},t("slot",{onSlotchange:()=>this.handleSlotChange()})),t("div",{part:"separator",hidden:true,"aria-hidden":"true"},t("slot",{name:"separator"},t("sc-icon",{name:"chevron-right"}))))}get el(){return e(this)}};n.style=s;export{n as sc_breadcrumbs};
//# sourceMappingURL=p-8625c379.entry.js.map