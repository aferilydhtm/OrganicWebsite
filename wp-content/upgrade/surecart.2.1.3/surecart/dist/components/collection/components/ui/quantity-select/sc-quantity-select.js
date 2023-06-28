import{h}from"@stencil/core";import{__}from"@wordpress/i18n";import{isRtl}from"../../../functions/page-align";export class ScQuantitySelect{constructor(){this.clickEl=void 0,this.disabled=void 0,this.max=1/0,this.min=1,this.quantity=0,this.size="medium",this.hasFocus=void 0}componentWillLoad(){this.quantity||(this.quantity=this.min)}decrease(){this.disabled||(this.quantity=Math.max(this.quantity-1,this.min),this.scChange.emit(this.quantity),this.scInput.emit(this.quantity))}increase(){this.disabled||(this.quantity=Math.min(this.quantity+1,this.max),this.scChange.emit(this.quantity),this.scInput.emit(this.quantity))}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}handleFocus(){this.hasFocus=!0,this.scFocus.emit()}handleChange(){this.quantity=parseInt(this.input.value)>this.max?this.max:parseInt(this.input.value),this.scChange.emit(this.quantity)}handleInput(){this.quantity=parseInt(this.input.value),this.scInput.emit(this.quantity)}render(){return h("div",{part:"base",class:{quantity:!0,"quantity--focused":this.hasFocus,"quantity--disabled":this.disabled,"quantity--is-rtl":isRtl()}},h("span",{part:"minus",role:"button","aria-label":__("decrease number","surecart"),class:{button__decrease:!0,"button--disabled":this.quantity<=this.min&&this.min>1},onClick:()=>this.quantity>this.min&&this.decrease()},h("sc-icon",{name:"minus",exportparts:"base:minus__icon"})),h("input",{part:"input",class:"input__control",ref:e=>this.input=e,step:"1",type:"number",max:this.max,min:this.min,value:this.quantity,autocomplete:"off",tabindex:"0",role:"spinbutton","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.quantity,"aria-disabled":this.disabled,onChange:()=>this.handleChange(),onInput:()=>this.handleInput(),onFocus:()=>this.handleFocus(),onBlur:()=>this.handleBlur()}),h("span",{part:"plus",role:"button","aria-label":__("increase number","surecart"),class:{button__increase:!0,"button--disabled":this.quantity>=this.max},onClick:()=>this.quantity<this.max&&this.increase()},h("sc-icon",{name:"plus",exportparts:"base:plus__icon"})))}static get is(){return"sc-quantity-select"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-quantity-select.scss"]}}static get styleUrls(){return{$:["sc-quantity-select.css"]}}static get properties(){return{clickEl:{type:"unknown",mutable:!1,complexType:{original:"HTMLElement",resolved:"HTMLElement",references:{HTMLElement:{location:"global"}}},required:!1,optional:!0,docs:{tags:[],text:""}},disabled:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"disabled",reflect:!1},max:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"max",reflect:!1,defaultValue:"Infinity"},min:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"min",reflect:!1,defaultValue:"1"},quantity:{type:"number",mutable:!0,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"quantity",reflect:!0,defaultValue:"0"},size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"size",reflect:!0,defaultValue:"'medium'"},hasFocus:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Inputs focus"},attribute:"has-focus",reflect:!0}}}static get events(){return[{method:"scChange",name:"scChange",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"number",resolved:"number",references:{}}},{method:"scInput",name:"scInput",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control receives input."},complexType:{original:"number",resolved:"number",references:{}}},{method:"scFocus",name:"scFocus",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control gains focus."},complexType:{original:"void",resolved:"void",references:{}}},{method:"scBlur",name:"scBlur",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control loses focus."},complexType:{original:"void",resolved:"void",references:{}}}]}static get elementRef(){return"el"}}