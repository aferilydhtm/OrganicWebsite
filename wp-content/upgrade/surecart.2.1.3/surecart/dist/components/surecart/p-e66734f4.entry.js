import{r as t,h as o,a as s}from"./p-25a9e68f.js";const n=":host{display:inline-block;--gap:var(--sc-spacing-small)}.button-group{display:flex;flex-wrap:wrap}.button-group--separate{gap:var(--gap)}";const u=class{constructor(o){t(this,o);this.label=undefined;this.separate=undefined}findButton(t){return["sc-button"].includes(t.tagName.toLowerCase())?t:t.querySelector(["sc-button"].join(","))}handleFocus(t){const o=this.findButton(t.target);o===null||o===void 0?void 0:o.classList.add("sc-button-group__button--focus")}handleBlur(t){const o=this.findButton(t.target);o===null||o===void 0?void 0:o.classList.remove("sc-button-group__button--focus")}handleMouseOver(t){const o=this.findButton(t.target);o===null||o===void 0?void 0:o.classList.add("sc-button-group__button--hover")}handleMouseOut(t){const o=this.findButton(t.target);o===null||o===void 0?void 0:o.classList.remove("sc-button-group__button--hover")}handleSlotChange(){if(this.separate)return;const t=this.el.shadowRoot.querySelector("slot").assignedElements({flatten:true});t.forEach((o=>{const s=this.el.shadowRoot.querySelector("slot");const n=s.assignedNodes().indexOf(o);const u=this.findButton(o);if(u!==null||!this.separate){u.classList.add("sc-button-group__button");u.classList.toggle("sc-button-group__button--first",n===0);u.classList.toggle("sc-button-group__button--inner",n>0&&n<t.length-1);u.classList.toggle("sc-button-group__button--last",n===t.length-1)}}))}render(){return o("sc-form-control",{part:"base",class:{"button-group":true,"button-group--separate":this.separate},role:"group","aria-label":this.label,onFocusout:t=>this.handleBlur(t),onFocusin:t=>this.handleFocus(t),onMouseOver:t=>this.handleMouseOver(t),onMouseOut:t=>this.handleMouseOut(t),label:this.label},o("slot",{onSlotchange:()=>this.handleSlotChange()}))}get el(){return s(this)}};u.style=n;export{u as sc_button_group};
//# sourceMappingURL=p-e66734f4.entry.js.map