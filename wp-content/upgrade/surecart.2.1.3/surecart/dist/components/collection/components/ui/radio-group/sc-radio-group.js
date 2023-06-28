import{h}from"@stencil/core";import{isRtl}from"../../../functions/page-align";export class ScRadioGroup{constructor(){this.label="",this.invalid=void 0,this.value="",this.required=void 0}async reportValidity(){return this.invalid=!this.input.checkValidity(),this.input.reportValidity()}handleRadioClick(e){const t=e.target;t.disabled||(this.value=t.value)}render(){return h("fieldset",{part:"base",class:{"radio-group":!0,"radio-group--invalid":this.invalid,"radio-group--is-required":this.required,"radio-group--is-rtl":isRtl()},"aria-invalid":this.invalid,role:"radiogroup"},h("legend",{part:"label",class:"radio-group__label"},h("slot",{name:"label"},this.label)),h("input",{type:"text",class:"radio-group__hidden-input",ref:e=>this.input=e,required:this.required,value:this.value,tabindex:"-1"}),h("slot",null))}static get is(){return"sc-radio-group"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-radio-group.scss"]}}static get styleUrls(){return{$:["sc-radio-group.css"]}}static get properties(){return{label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The radio group label. Required for proper accessibility."},attribute:"label",reflect:!1,defaultValue:"''"},invalid:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"This will be true when the control is in an invalid state. Validity is determined by props such as `type`,\n`required`, `minlength`, `maxlength`, and `pattern` using the browser's constraint validation API."},attribute:"invalid",reflect:!0},value:{type:"string",mutable:!0,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The selected value of the control."},attribute:"value",reflect:!0,defaultValue:"''"},required:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is one of these items required."},attribute:"required",reflect:!1}}}static get methods(){return{reportValidity:{complexType:{signature:"() => Promise<boolean>",parameters:[],references:{Promise:{location:"global"}},return:"Promise<boolean>"},docs:{text:"Checks for validity and shows the browser's validation message if the control is invalid.",tags:[]}}}}static get listeners(){return[{name:"click",method:"handleRadioClick",target:void 0,capture:!1,passive:!1}]}}