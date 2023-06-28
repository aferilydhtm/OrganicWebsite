import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{i as isRtl}from"./page-align.js";import{d as defineCustomElement$1}from"./sc-icon2.js";const scQuantitySelectCss=":host{--focus-ring:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary);--border-radius:var(--sc-quantity-border-radius, var(--sc-input-border-radius-small));display:inline-block}.input__control{text-align:center;line-height:1;border:none;flex:1;max-width:35px;background-color:var(--sc-input-control-background-color, var(--sc-color-white));color:var(--sc-input-control-color, var(--sc-color-black));-moz-appearance:textfield}.input__control::-webkit-outer-spin-button,.input__control::-webkit-inner-spin-button{-webkit-appearance:none}.input__control::-webkit-search-decoration,.input__control::-webkit-search-cancel-button,.input__control::-webkit-search-results-button,.input__control::-webkit-search-results-decoration{-webkit-appearance:none}.input__control:-webkit-autofill,.input__control:-webkit-autofill:hover,.input__control:-webkit-autofill:focus,.input__control:-webkit-autofill:active{box-shadow:0 0 0 var(--sc-input-height-large) var(--sc-input-background-color-hover) inset !important;-webkit-text-fill-color:var(--sc-input-color)}.input__control::placeholder{color:var(--sc-input-placeholder-color);user-select:none}.input__control:focus{outline:none}.quantity--trigger{cursor:pointer;white-space:nowrap}.quantity{position:relative;display:inline-block;width:100px;height:var(--sc-quantity-control-height, var(--sc-input-height-small));display:flex;align-items:stretch;font-family:var(--sc-input-font-family);font-weight:var(--sc-input-font-weight);letter-spacing:var(--sc-input-letter-spacing);background-color:var(--sc-input-background-color);border:var(--sc-input-border);border-radius:var(--border-radius);vertical-align:middle;box-shadow:var(--sc-input-box-shadow);transition:var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) border, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.quantity:hover:not(.quantity--disabled){background-color:var(--sc-input-background-color-hover);border-color:var(--sc-input-border-color-hover)}.quantity:hover:not(.quantity--disabled) .quantity__control{color:var(--sc-input-color-hover)}.quantity.quantity--focused:not(.quantity--disabled){background-color:var(--sc-input-background-color-focus);border-color:var(--sc-input-border-color-focus);box-shadow:var(--focus-ring)}.quantity.quantity--focused:not(.quantity--disabled) .quantity__control{color:var(--sc-input-color-focus)}.quantity.quantity--disabled{background-color:var(--sc-input-background-color-disabled);border-color:var(--sc-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.quantity.quantity--disabled .input__control{color:var(--sc-input-color-disabled)}.quantity.quantity--disabled .input__control::placeholder{color:var(--sc-input-placeholder-color-disabled)}.button__decrease,.button__increase{display:flex;justify-content:center;align-items:center;height:auto;top:1px;bottom:1px;width:32px;background:var(--sc-input-background-color);color:var(--sc-input-color);cursor:pointer;font-size:13px;user-select:none}.button__decrease:hover:not(.button--disabled) .quantity__control,.button__increase:hover:not(.button--disabled) .quantity__control{color:var(--sc-input-color-hover)}.button__decrease.button--disabled,.button__increase.button--disabled{background-color:var(--sc-input-background-color-disabled);border-color:var(--sc-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.button__decrease{left:1px;border-radius:var(--border-radius) 0 0 var(--border-radius);border-right:var(--sc-input-border)}.button__increase{right:1px;border-radius:0 var(--border-radius) var(--border-radius) 0;border-left:var(--sc-input-border)}.quantity--is-rtl .button__decrease{right:1px;border-left:var(--sc-input-border);border-right:0}.quantity--is-rtl .button__increase{left:1px;border-right:var(--sc-input-border);border-left:0}",ScQuantitySelect=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scChange=createEvent(this,"scChange",7),this.scInput=createEvent(this,"scInput",7),this.scFocus=createEvent(this,"scFocus",7),this.scBlur=createEvent(this,"scBlur",7),this.clickEl=void 0,this.disabled=void 0,this.max=1/0,this.min=1,this.quantity=0,this.size="medium",this.hasFocus=void 0}componentWillLoad(){this.quantity||(this.quantity=this.min)}decrease(){this.disabled||(this.quantity=Math.max(this.quantity-1,this.min),this.scChange.emit(this.quantity),this.scInput.emit(this.quantity))}increase(){this.disabled||(this.quantity=Math.min(this.quantity+1,this.max),this.scChange.emit(this.quantity),this.scInput.emit(this.quantity))}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}handleFocus(){this.hasFocus=!0,this.scFocus.emit()}handleChange(){this.quantity=parseInt(this.input.value)>this.max?this.max:parseInt(this.input.value),this.scChange.emit(this.quantity)}handleInput(){this.quantity=parseInt(this.input.value),this.scInput.emit(this.quantity)}render(){return h("div",{part:"base",class:{quantity:!0,"quantity--focused":this.hasFocus,"quantity--disabled":this.disabled,"quantity--is-rtl":isRtl()}},h("span",{part:"minus",role:"button","aria-label":wp.i18n.__("decrease number","surecart"),class:{button__decrease:!0,"button--disabled":this.quantity<=this.min&&this.min>1},onClick:()=>this.quantity>this.min&&this.decrease()},h("sc-icon",{name:"minus",exportparts:"base:minus__icon"})),h("input",{part:"input",class:"input__control",ref:t=>this.input=t,step:"1",type:"number",max:this.max,min:this.min,value:this.quantity,autocomplete:"off",tabindex:"0",role:"spinbutton","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.quantity,"aria-disabled":this.disabled,onChange:()=>this.handleChange(),onInput:()=>this.handleInput(),onFocus:()=>this.handleFocus(),onBlur:()=>this.handleBlur()}),h("span",{part:"plus",role:"button","aria-label":wp.i18n.__("increase number","surecart"),class:{button__increase:!0,"button--disabled":this.quantity>=this.max},onClick:()=>this.quantity<this.max&&this.increase()},h("sc-icon",{name:"plus",exportparts:"base:plus__icon"})))}get el(){return this}static get style(){return scQuantitySelectCss}},[1,"sc-quantity-select",{clickEl:[16],disabled:[4],max:[2],min:[2],quantity:[1538],size:[513],hasFocus:[1540,"has-focus"]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-quantity-select","sc-icon"].forEach((t=>{switch(t){case"sc-quantity-select":customElements.get(t)||customElements.define(t,ScQuantitySelect);break;case"sc-icon":customElements.get(t)||defineCustomElement$1()}}))}export{ScQuantitySelect as S,defineCustomElement as d};