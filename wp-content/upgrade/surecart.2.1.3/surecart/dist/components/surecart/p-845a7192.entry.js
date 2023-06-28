import{r as i,c as s,h as t,a as e,F as r}from"./p-25a9e68f.js";import{c as o,h as n}from"./p-ea19f1ec.js";import{r as l}from"./p-8617d8eb.js";import{o as d}from"./p-c728334f.js";import{a}from"./p-afcbd440.js";import{i as c}from"./p-2907581f.js";import{s as u}from"./p-35f62a16.js";import{a as h}from"./p-b6ef0098.js";import{l as p,u as v}from"./p-d9c06e90.js";import{c as m}from"./p-62338837.js";import"./p-a586043b.js";import"./p-db7ede86.js";import"./p-1c2e2695.js";import"./p-61ab3f3a.js";import"./p-4c5e6c8d.js";import"./p-7c27060f.js";import"./p-6c2a2148.js";import"./p-d8453138.js";import"./p-4d73f82a.js";const _=":host{display:block}.sc-address{display:block;position:relative}.sc-address [hidden]{display:none}.sc-address--loading{min-height:70px}.sc-address--loading sc-skeleton{display:block;margin-bottom:1em}.sc-address__control{display:block}.sc-address__control>*{margin-bottom:-1px}.sc-address__columns{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-between}.sc-address__columns>*{flex:1;width:50%;margin-left:-1px}.sc-address__columns>*:first-child{margin-left:0}";const f=class{constructor(t){i(this,t);this.scChangeAddress=s(this,"scChangeAddress",7);this.scInputAddress=s(this,"scInputAddress",7);this.address={country:null,city:null,line_1:null,line_2:null,postal_code:null,state:null};this.names={country:"shipping_country",city:"shipping_city",line_1:"shipping_line_1",line_2:"shipping_line_2",postal_code:"shipping_postal_code",state:"shipping_state"};this.placeholders={country:"",postal_code:"",state:""};this.label=wp.i18n.__("Country or region","surecart");this.required=undefined;this.loading=undefined;this.countryChoices=o;this.regions=undefined;this.showState=undefined;this.showPostal=undefined}handleAddressChange(){if(!this.address.country)return;this.setRegions();this.showState=["US","CA"].includes(this.address.country);this.showPostal=["US"].includes(this.address.country);this.scChangeAddress.emit(this.address);this.scInputAddress.emit(this.address)}updateAddress(i){this.address={...this.address,...i}}handleAddressInput(i){this.scInputAddress.emit({...this.address,...i})}clearAddress(){this.address={country:null,line_1:null,line_2:null,city:null,postal_code:null,state:null}}setRegions(){if(n(this.address.country)){import("./p-59916e56.js").then((i=>{this.regions=i===null||i===void 0?void 0:i[this.address.country]}))}else{this.regions=[]}}componentWillLoad(){var i;this.handleAddressChange();const s=(i=this.countryChoices.find((i=>i.value===this.address.country)))===null||i===void 0?void 0:i.value;if(s){this.updateAddress({country:s})}}async reportValidity(){return l(this.el)}getStatePlaceholder(){var i,s;if((i=this.placeholders)===null||i===void 0?void 0:i.state)return this.placeholders.state;if(((s=this.address)===null||s===void 0?void 0:s.country)==="US")return wp.i18n.__("State","surecart");return wp.i18n.__("Province/Region","surecart")}render(){var i,s,e,r,o;return t("div",{class:"sc-address",part:"base"},t("sc-form-control",{exportparts:"label, help-text, form-control",label:this.label,class:"sc-address__control",part:"control",required:this.required},t("sc-select",{exportparts:"base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty",value:(i=this.address)===null||i===void 0?void 0:i.country,onScChange:i=>{this.clearAddress();this.updateAddress({country:i.target.value||null})},choices:this.countryChoices,autocomplete:"country-name",placeholder:((s=this.placeholders)===null||s===void 0?void 0:s.country)||wp.i18n.__("Select Your Country","surecart"),name:this.names.country,search:true,unselect:false,"squared-bottom":this.showState||this.showPostal,required:this.required}),t("div",{class:"sc-address__columns"},this.showState&&t("sc-select",{exportparts:"base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty",placeholder:this.getStatePlaceholder(),name:this.names.state,autocomplete:"address-level1",value:(e=this===null||this===void 0?void 0:this.address)===null||e===void 0?void 0:e.state,onScChange:i=>this.updateAddress({state:i.target.value||null}),choices:this.regions,required:this.required,search:true,"squared-top":true,unselect:false,"squared-right":this.showPostal}),this.showPostal&&t("sc-input",{exportparts:"base:input__base, input, form-control, label, help-text",placeholder:((r=this.placeholders)===null||r===void 0?void 0:r.postal_code)||wp.i18n.__("Postal Code/Zip","surecart"),name:this.names.postal_code,onScChange:i=>this.updateAddress({postal_code:i.target.value||null}),onScInput:i=>this.handleAddressInput({name:i.target.value||null}),autocomplete:"postal-code",required:this.required,value:(o=this===null||this===void 0?void 0:this.address)===null||o===void 0?void 0:o.postal_code,"squared-top":true,maxlength:5,"squared-left":this.showState}))),this.loading&&t("sc-block-ui",{exportparts:"base:block-ui, content:block-ui__content"}))}get el(){return e(this)}static get watchers(){return{address:["handleAddressChange"]}}};f.style=_;const b=":host{display:block}";const g=class{constructor(s){i(this,s);this.order=undefined;this.loading=undefined}renderLabel(){var i,s,e;let o=wp.i18n.sprintf(wp.i18n.__("Estimated %s","surecart"),((i=this===null||this===void 0?void 0:this.order)===null||i===void 0?void 0:i.tax_label)||"");if(((s=this===null||this===void 0?void 0:this.order)===null||s===void 0?void 0:s.tax_status)==="calculated"){o=((e=this.order)===null||e===void 0?void 0:e.tax_label)||""}return t(r,null,`${wp.i18n.__("Tax:","surecart")} ${o}`,this.renderPercent())}renderPercent(){var i;if((i=this.order)===null||i===void 0?void 0:i.tax_percent){return t(r,null,"(",this.order.tax_percent,"%",")")}return""}render(){var i,s,e,r,o,n,l;if(!((i=this===null||this===void 0?void 0:this.order)===null||i===void 0?void 0:i.tax_amount)){return null}return t("sc-line-item",null,t("span",{slot:"description"},this.renderLabel()),((s=this.order)===null||s===void 0?void 0:s.tax_exclusive_amount)&&t("span",{slot:"price"},t("sc-format-number",{type:"currency",currency:((e=this===null||this===void 0?void 0:this.order)===null||e===void 0?void 0:e.currency)||"usd",value:(r=this===null||this===void 0?void 0:this.order)===null||r===void 0?void 0:r.tax_exclusive_amount})),((o=this.order)===null||o===void 0?void 0:o.tax_inclusive_amount)&&t("span",{slot:"price-description"},"(",t("sc-format-number",{type:"currency",currency:((n=this===null||this===void 0?void 0:this.order)===null||n===void 0?void 0:n.currency)||"usd",value:(l=this===null||this===void 0?void 0:this.order)===null||l===void 0?void 0:l.tax_inclusive_amount})," ",wp.i18n.__("included","surecart"),")"))}};d(g,["order","loading"],false);g.style=b;const y=":host{display:block}.bump{display:grid;gap:1em}.bump__text{display:grid;gap:0.25em}.bump__tag{background:var(--sc-color-primary-500);color:var(--sc-color-white);border-radius:var(--sc-input-border-radius-medium);padding:var(--sc-spacing-x-small);font-size:var(--sc-font-size-x-small)}.bump__product{display:flex;align-items:center;gap:var(--sc-choice-padding, 1.3em 1.1em);line-height:var(--sc-line-height-dense)}.bump__product-title{font-weight:var(--sc-font-weight-semibold)}.bump__product-description{color:var(--sc-input-label-color)}.bump__image{width:var(--sc-product-line-item-image-size, 4em);height:var(--sc-product-line-item-image-size, 4em);flex:0 0 var(--sc-product-line-item-image-size, 4em);object-fit:cover;border-radius:4px;border:1px solid var(--sc-color-gray-200);display:block;box-shadow:var(--sc-input-box-shadow)}.bump__price--has-discount .bump__original-price{text-decoration:line-through;color:var(--sc-color-gray-500);font-size:var(--sc-font-size-small)}.bump__price .bump__new-price{font-size:var(--sc-font-size-large);color:var(--sc-color-gray-700)}.bump__price .bump__interval{color:var(--sc-color-gray-500)}.bump__amount{display:flex;align-items:center;gap:var(--sc-spacing-x-small);flex-wrap:wrap;margin-top:var(--sc-spacing-xx-small)}";const w=class{constructor(t){i(this,t);this.scAddLineItem=s(this,"scAddLineItem",7);this.scRemoveLineItem=s(this,"scRemoveLineItem",7);var e;this.bump=undefined;this.checkout=undefined;this.showControl=undefined;this.cdnRoot=(e=window.scData)===null||e===void 0?void 0:e.cdn_root}updateLineItem(i){var s,t,e;const r=((s=this.bump.price)===null||s===void 0?void 0:s.id)||((t=this.bump)===null||t===void 0?void 0:t.price);if(i){this.scAddLineItem.emit({bump:(e=this.bump)===null||e===void 0?void 0:e.id,price_id:r,quantity:1})}else{this.scRemoveLineItem.emit({price_id:r,quantity:1})}}newPrice(){var i,s,t,e,r,o;let n=null;let l=((s=(i=this.bump)===null||i===void 0?void 0:i.price)===null||s===void 0?void 0:s.amount)||0;if((t=this.bump)===null||t===void 0?void 0:t.amount_off){n=Math.max(0,l-((e=this.bump)===null||e===void 0?void 0:e.amount_off))}if((r=this.bump)===null||r===void 0?void 0:r.percent_off){const i=l*(((o=this.bump)===null||o===void 0?void 0:o.percent_off)/100);n=Math.max(0,l-i)}return n}renderInterval(){var i;const s=c((i=this.bump)===null||i===void 0?void 0:i.price,{labels:{interval:"/",period:wp.i18n.__("for","surecart")}});if(!s.trim().length)return null;return t("span",{class:"bump__interval"},s)}renderPrice(){var i,s,e,r,o,n,l;return t("div",{slot:"description",class:{bump__price:true,"bump__price--has-discount":!!((i=this.bump)===null||i===void 0?void 0:i.percent_off)||!!((s=this.bump)===null||s===void 0?void 0:s.amount_off)},part:"price"},t("sc-format-number",{type:"currency",class:"bump__original-price",value:(r=(e=this.bump)===null||e===void 0?void 0:e.price)===null||r===void 0?void 0:r.amount,currency:(n=(o=this.bump)===null||o===void 0?void 0:o.price)===null||n===void 0?void 0:n.currency})," ",this.newPrice()===0&&wp.i18n.__("Free","surecart"),this.newPrice()!==null&&this.newPrice()>0&&t("sc-format-number",{type:"currency",class:"bump__new-price",value:this.newPrice(),currency:((l=this.bump)===null||l===void 0?void 0:l.price).currency}),this.renderInterval())}renderDiscount(){var i,s,e,r,o;if(!!((i=this.bump)===null||i===void 0?void 0:i.amount_off)){return t("div",{class:"bump__tag"},wp.i18n.__("Save","surecart")," ",t("sc-format-number",{type:"currency",value:-((s=this.bump)===null||s===void 0?void 0:s.amount_off),currency:((e=this.bump)===null||e===void 0?void 0:e.price).currency}))}if(!!((r=this.bump)===null||r===void 0?void 0:r.percent_off)){return t("div",{class:"bump__tag"},wp.i18n.sprintf(wp.i18n.__("Save %s%%","surecart"),(o=this.bump)===null||o===void 0?void 0:o.percent_off))}}render(){var i,s,e,r,o,n,l,d,c,h,p,v,m,_;const f=(s=(i=this.bump)===null||i===void 0?void 0:i.price)===null||s===void 0?void 0:s.product;return t("sc-choice",{value:(e=this.bump)===null||e===void 0?void 0:e.id,type:"checkbox",showControl:this.showControl,checked:a(this.bump,this.checkout),onScChange:i=>this.updateLineItem(i.target.checked),exportparts:"base, control, checked-icon, title"},t("div",{part:"base-content",class:"bump"},t("div",{class:"bump__text"},t("div",{class:"bump__title"},((o=(r=this.bump)===null||r===void 0?void 0:r.metadata)===null||o===void 0?void 0:o.cta)||((n=this.bump)===null||n===void 0?void 0:n.name)||(f===null||f===void 0?void 0:f.name)),t("div",{class:"bump__amount"},this.renderPrice()," ",this.renderDiscount()))),((d=(l=this.bump)===null||l===void 0?void 0:l.metadata)===null||d===void 0?void 0:d.description)&&t("div",{slot:"footer"},t("sc-divider",{style:{"--spacing":"var(--sc-spacing-medium)"}}),t("div",{class:"bump__product"},!!(f===null||f===void 0?void 0:f.image_url)&&t("img",{src:u(f===null||f===void 0?void 0:f.image_url,130),class:"bump__image"}),t("div",{class:"bump__product-text"},!!((h=(c=this.bump)===null||c===void 0?void 0:c.metadata)===null||h===void 0?void 0:h.cta)&&t("div",{class:"bump__product-title"},this.bump.name||(f===null||f===void 0?void 0:f.name)),!!((v=(p=this.bump)===null||p===void 0?void 0:p.metadata)===null||v===void 0?void 0:v.description)&&t("div",{class:"bump__product-description"},(_=(m=this.bump)===null||m===void 0?void 0:m.metadata)===null||_===void 0?void 0:_.description)))))}};w.style=y;const x=":host{display:block}.bumps__list{display:grid;gap:10px}";const C=class{constructor(s){i(this,s);this.label=undefined;this.showControl=undefined;this.help=undefined;this.bumps=undefined;this.checkout=undefined}render(){var i;if(!((i=this===null||this===void 0?void 0:this.bumps)===null||i===void 0?void 0:i.length)){return null}return t("sc-form-control",{label:this.label||wp.i18n.__("Recommended","surecart"),help:this.help},t("div",{class:"bumps__list"},(this.bumps||[]).map((i=>t("sc-order-bump",{key:i===null||i===void 0?void 0:i.id,showControl:this.showControl,bump:i,checkout:this.checkout})))))}};d(C,["bumps","checkout"],false);C.style=x;const S=":host{display:block}.sc-order-shipping__loading{display:flex;flex-direction:column;gap:0.5em}";const k=class{constructor(t){i(this,t);this.scUpdateOrder=s(this,"scUpdateOrder",7);this.label=undefined;this.required=false;this.loading=undefined;this.shippingAddress=undefined;this.taxStatus=undefined;this.taxEnabled=undefined;this.shippingEnabled=undefined;this.full=undefined;this.showName=undefined;this.namePlaceholder=wp.i18n.__("Name or Company Name","surecart");this.countryPlaceholder=wp.i18n.__("Country","surecart");this.cityPlaceholder=wp.i18n.__("City","surecart");this.line1Placeholder=wp.i18n.__("Address","surecart");this.line2Placeholder=wp.i18n.__("Address Line 2","surecart");this.postalCodePlaceholder=wp.i18n.__("Postal Code/Zip","surecart");this.statePlaceholder=wp.i18n.__("State/Province/Region","surecart");this.defaultCountry=undefined;this.placeholders={name:wp.i18n.__("Name or Company Name","surecart"),country:wp.i18n.__("Country","surecart"),city:wp.i18n.__("City","surecart"),line_1:wp.i18n.__("Address","surecart"),line_2:wp.i18n.__("Address Line 2","surecart"),postal_code:wp.i18n.__("Postal Code/Zip","surecart"),state:wp.i18n.__("State/Province/Region","surecart")};this.address={country:null,city:null,line_1:null,line_2:null,postal_code:null,state:null}}handleCustomerAddressChange(i,s){if((i===null||i===void 0?void 0:i.id)&&!s){this.address={...this.address,...i}}}async updateAddressState(i){if(JSON.stringify(i)===JSON.stringify(this.address))return;this.address=i;try{p("shipping-address");h.checkout=await m({id:h.checkout.id,data:{shipping_address:this.address}})}catch(i){console.error(i)}finally{v("shipping-address")}}async reportValidity(){return this.input.reportValidity()}componentWillLoad(){if(this.defaultCountry&&!this.address.country){this.address.country=this.defaultCountry}this.handleRequirementChange()}handleRequirementChange(){if(this.shippingEnabled||this.taxEnabled){this.required=true}}render(){if(this.shippingEnabled||this.full){return t("sc-address",{exportparts:"label, help-text, form-control, input__base, select__base, columns, search__base, menu__base",ref:i=>this.input=i,label:this.label||wp.i18n.__("Shipping Address","surecart"),placeholders:{name:this.namePlaceholder,country:this.countryPlaceholder,city:this.cityPlaceholder,line_1:this.line1Placeholder,line_2:this.line2Placeholder,postal_code:this.postalCodePlaceholder,state:this.statePlaceholder},required:this.required,loading:this.loading,address:this.address,"show-name":this.showName,onScChangeAddress:i=>this.updateAddressState(i.detail)})}return t("sc-compact-address",{ref:i=>this.input=i,required:this.required,loading:this.loading,address:this.address,placeholders:{name:this.namePlaceholder,country:this.countryPlaceholder,city:this.cityPlaceholder,line_1:this.line1Placeholder,line_2:this.line2Placeholder,postal_code:this.postalCodePlaceholder,state:this.statePlaceholder},label:this.label,onScChangeAddress:i=>this.updateAddressState(i.detail)})}static get watchers(){return{shippingAddress:["handleCustomerAddressChange"],shippingEnabled:["handleRequirementChange"],taxEnabled:["handleRequirementChange"]}}};d(k,["shippingAddress","loading","taxStatus","taxEnabled","shippingEnabled"],false);k.style=S;const j=":host{display:block}";const A=class{constructor(t){i(this,t);this.scUpdateOrder=s(this,"scUpdateOrder",7);this.scError=s(this,"scError",7);this.order=undefined;this.show=false;this.taxIdentifier=undefined;this.taxProtocol=undefined;this.busy=false;this.otherLabel=undefined;this.caGstLabel=undefined;this.auAbnLabel=undefined;this.gbVatLabel=undefined;this.euVatLabel=undefined}getStatus(){var i,s,t;if(((i=this.taxIdentifier)===null||i===void 0?void 0:i.number_type)!=="eu_vat"){return"unknown"}if(((s=this.taxProtocol)===null||s===void 0?void 0:s.eu_vat_unverified_behavior)==="apply_reverse_charge"){return"unknown"}return((t=this.taxIdentifier)===null||t===void 0?void 0:t.eu_vat_verified)?"valid":"invalid"}async maybeUpdateOrder(i){try{p("tax_identifier");h.checkout=await m({id:h.checkout.id,data:{tax_identifier:i}})}catch(i){console.error(i);this.scError.emit(i)}finally{v("tax_identifier")}}render(){var i,s,e,r,o,n;return t("sc-tax-id-input",{show:this.show,number:(s=(i=this.order)===null||i===void 0?void 0:i.tax_identifier)===null||s===void 0?void 0:s.number,type:(r=(e=this.order)===null||e===void 0?void 0:e.tax_identifier)===null||r===void 0?void 0:r.number_type,country:(n=(o=this===null||this===void 0?void 0:this.order)===null||o===void 0?void 0:o.shipping_address)===null||n===void 0?void 0:n.country,status:this.getStatus(),loading:this.busy,onScChange:i=>{i.stopImmediatePropagation();this.maybeUpdateOrder(i.detail)},otherLabel:this.otherLabel,caGstLabel:this.caGstLabel,auAbnLabel:this.auAbnLabel,gbVatLabel:this.gbVatLabel,euVatLabel:this.euVatLabel})}};d(A,["draft","order","tax_status","taxIdentifier","taxProtocol","busy"],false);A.style=j;export{f as sc_compact_address,g as sc_line_item_tax,w as sc_order_bump,C as sc_order_bumps,k as sc_order_shipping_address,A as sc_order_tax_id_input};
//# sourceMappingURL=p-845a7192.entry.js.map