import{r as t,h as i}from"./p-25a9e68f.js";const e=":host{display:inline-block}.cc-logo{border-radius:var(--sc-cc-border-radius, 4px);line-height:0;overflow:hidden}";const s=class{constructor(i){t(this,i);this.brand=undefined}renderLogo(){if(["visa","mastercard","amex","discover","diners","jcb","unionpay"].includes(this.brand)){return i("sc-icon",{name:this.brand,style:{"--height":"0.63em"}})}return i("sc-icon",{name:"creditcard",style:{"--height":"0.63em"}})}render(){return i("div",{class:"cc-logo",part:"base"},this.renderLogo())}};s.style=e;const n=":host{display:block}.payment-method{display:flex;align-items:center;justify-content:flex-start;gap:var(--sc-spacing-x-small)}";const o=class{constructor(i){t(this,i);this.paymentMethod=undefined;this.full=undefined;this.externalLink=undefined;this.externalLinkTooltipText=undefined}renderBankAccountType(t){if(t==="checking"){return wp.i18n.__("Checking","surecart")}if(t==="savings"){return wp.i18n.__("Savings","surecart")}}renderExternalLink(){return!!this.externalLink&&i("sc-tooltip",{text:this.externalLinkTooltipText,type:"text"},i("sc-button",{style:{color:"var(--sc-color-gray-500)"},type:"text",size:"small",href:this.externalLink,target:"_blank"},i("sc-icon",{name:"external-link",style:{fontSize:"16px"}})))}render(){var t,e,s,n,o,a,l,r,d,c,p,h,v,u,m,y,f,g;if((e=(t=this.paymentMethod)===null||t===void 0?void 0:t.bank_account)===null||e===void 0?void 0:e.id){const t=(s=this.paymentMethod)===null||s===void 0?void 0:s.bank_account;return i("div",{class:"payment-method",part:"bank"},i("span",null,this.renderBankAccountType(t===null||t===void 0?void 0:t.account_type)),"**** ",t===null||t===void 0?void 0:t.last4,this.renderExternalLink())}if((o=(n=this===null||this===void 0?void 0:this.paymentMethod)===null||n===void 0?void 0:n.payment_instrument)===null||o===void 0?void 0:o.instrument_type){const t=(l=(a=this===null||this===void 0?void 0:this.paymentMethod)===null||a===void 0?void 0:a.payment_instrument)===null||l===void 0?void 0:l.instrument_type;if(["applepay","bancontact","banktransfer","belfius","creditcard","directdebit","eps","giftcard","giropay","ideal","in3","kbc","klarna","mybank","paysafecard","przelewy24","sofort","Voucher"].includes(t)){return i("div",{class:"payment-method",part:"instrument"},i("sc-icon",{style:{fontSize:"36px"},name:t}),i("span",{style:{textTransform:"capitalize"}},t),this.renderExternalLink())}if(t==="paypal"){return i("div",{class:"payment-method",part:"instrument"},i("sc-icon",{style:{fontSize:"56px",lineHeight:"1",height:"28px"},name:"paypal"}))}return i("div",{class:"payment-method",part:"instrument"},i("sc-tag",{exportparts:"base:payment_instrument",type:"info",pill:true},i("span",{style:{textTransform:"capitalize"}},t," ")),this.renderExternalLink())}if((d=(r=this.paymentMethod)===null||r===void 0?void 0:r.card)===null||d===void 0?void 0:d.brand){return i("div",{class:"payment-method",part:"card"},i("sc-cc-logo",{style:{fontSize:"36px"},brand:(p=(c=this.paymentMethod)===null||c===void 0?void 0:c.card)===null||p===void 0?void 0:p.brand}),i("sc-text",{style:{whiteSpace:"nowrap",paddingRight:"6px"}},"**** ",(v=(h=this.paymentMethod)===null||h===void 0?void 0:h.card)===null||v===void 0?void 0:v.last4),this.renderExternalLink())}if((m=(u=this.paymentMethod)===null||u===void 0?void 0:u.paypal_account)===null||m===void 0?void 0:m.id){return i("div",{class:"payment-method",part:"base",style:{gap:"var(--sc-spacing-small)"}},i("sc-icon",{style:{fontSize:"56px",lineHeight:"1",height:"28px"},name:"paypal"}),this.full&&i("sc-text",{style:{"--font-size":"var(--sc-font-size-small)"},truncate:true},(f=(y=this.paymentMethod)===null||y===void 0?void 0:y.paypal_account)===null||f===void 0?void 0:f.email),this.renderExternalLink())}return(g=this===null||this===void 0?void 0:this.paymentMethod)===null||g===void 0?void 0:g.processor_type}};o.style=n;export{s as sc_cc_logo,o as sc_payment_method};
//# sourceMappingURL=p-40f557c3.entry.js.map