import{r as t,c as s,h as o,a as r}from"./p-25a9e68f.js";function n(t){const s=new FormData(t);const o={};s.forEach(((t,s)=>{o[s]=t}));return o}const i="sc-form{display:block}:host{display:block}::slotted(*:not(:last-child)),sc-form form>*:not(:last-child){margin-bottom:var(--sc-form-row-spacing, 0.75em)}::slotted(*:not(:last-child)).wp-block-spacer,sc-form form>*:not(:last-child).wp-block-spacer{margin-bottom:0}";const a=class{constructor(o){t(this,o);this.scSubmit=s(this,"scSubmit",7);this.scFormSubmit=s(this,"scFormSubmit",7);this.scFormChange=s(this,"scFormChange",7);this.novalidate=false}async getFormData(){return new FormData(this.formElement)}async getFormJson(){return n(this.formElement)}async handleChange(){this.scFormChange.emit(n(this.formElement))}async submit(){return this.submitForm()}getFormControls(){return[...this.form.querySelectorAll("*")]}async validate(){console.log("validate");const t=this.getFormControls();const s=t.filter((t=>typeof t.reportValidity==="function"));if(!this.novalidate){for(const t of s){if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)){continue}const s=await t.reportValidity();if(!s){console.log(t);return false}}}return true}submitForm(){const t=document.createElement("button");if(this.formElement){t.type="submit";t.style.position="absolute";t.style.width="0";t.style.height="0";t.style.clip="rect(0 0 0 0)";t.style.clipPath="inset(50%)";t.style.overflow="hidden";t.style.whiteSpace="nowrap";this.formElement.append(t);t.click();t.remove()}}render(){return o("div",{part:"base",class:"form",role:"form"},o("form",{part:"form",ref:t=>this.formElement=t,class:"test",onSubmit:async t=>{console.log("submitted");t.preventDefault();const s=await this.validate();if(!s){return false}this.scSubmit.emit();this.scFormSubmit.emit()},novalidate:this.novalidate},o("slot",null)))}get form(){return r(this)}};a.style=i;export{a as sc_form};
//# sourceMappingURL=p-f165307f.entry.js.map