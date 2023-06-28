import{r as i,c as s,h as t}from"./p-25a9e68f.js";import{s as o}from"./p-ef734fd6.js";import{a as e,o as l}from"./p-b6ef0098.js";import{g as n}from"./p-6c2a2148.js";import{c as d}from"./p-62338837.js";import"./p-db7ede86.js";import"./p-1c2e2695.js";import"./p-61ab3f3a.js";import"./p-4c5e6c8d.js";import"./p-7c27060f.js";import"./p-d8453138.js";import"./p-4d73f82a.js";const a=":host{display:block}";const h=class{constructor(t){i(this,t);this.scInput=s(this,"scInput",7);this.scFocus=s(this,"scFocus",7);this.scBlur=s(this,"scBlur",7);this.loggedIn=undefined;this.size="medium";this.value=null;this.pill=false;this.label=undefined;this.showLabel=true;this.help="";this.placeholder=undefined;this.disabled=false;this.readonly=false;this.required=false;this.invalid=false;this.autofocus=undefined;this.hasFocus=undefined}async reportValidity(){var i,s,t,o,e,l,n;if(!this.required){return await((s=(i=this.input)===null||i===void 0?void 0:i.reportValidity)===null||s===void 0?void 0:s.call(i))}(o=(t=this.input)===null||t===void 0?void 0:t.setCustomValidity)===null||o===void 0?void 0:o.call(t,"");if(!((e=this.input)===null||e===void 0?void 0:e.value.trim().length)){this.input.setCustomValidity(wp.i18n.__("Field must not be empty.","surecart"))}return await((n=(l=this.input)===null||l===void 0?void 0:l.reportValidity)===null||n===void 0?void 0:n.call(l))}async handleChange(){this.value=this.input.value;try{e.checkout=await d({id:e.checkout.id,data:{last_name:this.input.value}})}catch(i){console.error(i)}}handleSessionChange(){var i,s,t,l,d,a;if(this.value)return;const h=n("last_name");if(!o.loggedIn&&!!h){this.value=h;return}if(o.loggedIn){this.value=((s=(i=e===null||e===void 0?void 0:e.checkout)===null||i===void 0?void 0:i.customer)===null||s===void 0?void 0:s.last_name)||((t=e===null||e===void 0?void 0:e.checkout)===null||t===void 0?void 0:t.last_name)}else{this.value=((l=e===null||e===void 0?void 0:e.checkout)===null||l===void 0?void 0:l.last_name)||((a=(d=e===null||e===void 0?void 0:e.checkout)===null||d===void 0?void 0:d.customer)===null||a===void 0?void 0:a.last_name)}}componentWillLoad(){this.handleSessionChange();this.removeCheckoutListener=l("checkout",(()=>this.handleSessionChange()))}disconnectedCallback(){this.removeCheckoutListener()}render(){return t("sc-input",{type:"text",name:"last_name",ref:i=>this.input=i,value:this.value,label:this.label,help:this.help,autocomplete:"last_name",placeholder:this.placeholder,readonly:this.readonly,required:this.required,invalid:this.invalid,autofocus:this.autofocus,hasFocus:this.hasFocus,onScChange:()=>this.handleChange(),onScInput:()=>this.scInput.emit(),onScFocus:()=>this.scFocus.emit(),onScBlur:()=>this.scBlur.emit()})}};h.style=a;export{h as sc_customer_lastname};
//# sourceMappingURL=p-2973daa9.entry.js.map