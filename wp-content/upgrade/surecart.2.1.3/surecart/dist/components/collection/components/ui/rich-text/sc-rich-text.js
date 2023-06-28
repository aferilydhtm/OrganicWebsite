import{h,Host}from"@stencil/core";import{Editor}from"@tiptap/core";import CharacterCount from"@tiptap/extension-character-count";import Placeholder from"@tiptap/extension-placeholder";import StarterKit from"@tiptap/starter-kit";import{__,sprintf}from"@wordpress/i18n";let id=0;export class ScRichText{constructor(){this.inputId="sc-richtext-"+ ++id,this.helpId=`sc-richtext-help-text-${id}`,this.labelId=`sc-richtext-label-${id}`,this.size="medium",this.name=void 0,this.value="",this.label="",this.showLabel=!0,this.help="",this.placeholder=void 0,this.maxlength=void 0,this.disabled=!1,this.readonly=!1,this.required=!1,this.updatedAt=Date.now(),this.hasFocus=void 0}componentDidLoad(){this.editor||(this.editor=new Editor({element:this.element,extensions:[StarterKit,Placeholder.configure({placeholder:this.placeholder}),...(null==this?void 0:this.maxlength)>0?[CharacterCount.configure({limit:this.maxlength,mode:"nodeSize"})]:[]],content:this.value,onCreate:({editor:e})=>{this.value=e.getHTML()},onUpdate:({editor:e})=>{this.value=e.getHTML(),this.scInput.emit(),this.scChange.emit()},onSelectionUpdate:()=>{this.updatedAt=Date.now()},onFocus:()=>{this.handleFocus()},onBlur:()=>{this.handleBlur()}}))}handleFocus(){this.hasFocus=!0,this.scFocus.emit()}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}isActive(e,t={}){var i,l;return null===(l=null===(i=this.editor)||void 0===i?void 0:i.isActive)||void 0===l?void 0:l.call(i,e,t)}toggleHeading(e){this.editor.chain().toggleHeading(e).focus().run()}toggleBold(){this.editor.chain().toggleBold().focus().run()}toggleItalic(){this.editor.chain().toggleItalic().focus().run()}can(e){var t,i,l,o,a,s,r,n,d;return null===(d=null===(n=null===(r=null===(s=null===(a=null===(o=null===(l=null===(i=null===(t=this.editor)||void 0===t?void 0:t.can())||void 0===i?void 0:i.chain)||void 0===l?void 0:l.call(i))||void 0===o?void 0:o.focus)||void 0===a?void 0:a.call(o))||void 0===s?void 0:s[e])||void 0===r?void 0:r.call(s))||void 0===n?void 0:n.run)||void 0===d?void 0:d.call(n)}run(e){var t,i,l,o,a,s,r,n;return null===(n=null===(r=null===(s=null===(a=null===(o=null===(l=null===(i=null===(t=this.editor)||void 0===t?void 0:t.chain)||void 0===i?void 0:i.call(t))||void 0===l?void 0:l.focus)||void 0===o?void 0:o.call(l))||void 0===a?void 0:a[e])||void 0===s?void 0:s.call(a))||void 0===r?void 0:r.run)||void 0===n?void 0:n.call(r)}remainingCharacters(){var e,t;return this.maxlength?this.maxlength-((null===(t=null===(e=null==this?void 0:this.editor)||void 0===e?void 0:e.storage)||void 0===t?void 0:t.characterCount.characters())||0):1e3}render(){var e,t,i,l,o,a,s,r;return h(Host,null,h("sc-form-control",{exportparts:"label, help-text, form-control",size:this.size,required:this.required,label:this.label,showLabel:this.showLabel,help:this.help,inputId:this.inputId,helpId:this.helpId,labelId:this.labelId,name:this.name},h("div",{part:"base",class:{"editor-base":!0,"editor--focused":this.hasFocus}},h("div",{class:"menu"},h("sc-button",{size:"small",type:(null===(t=null===(e=this.editor)||void 0===e?void 0:e.isActive)||void 0===t?void 0:t.call(e,"bold"))?"default":"text",onClick:()=>this.run("toggleBold"),disabled:!this.can("toggleBold")},h("sc-icon",{name:"bold"})),h("sc-button",{size:"small",type:(null===(l=null===(i=this.editor)||void 0===i?void 0:i.isActive)||void 0===l?void 0:l.call(i,"italic"))?"default":"text",onClick:()=>this.run("toggleItalic"),disabled:!this.can("toggleItalic")},h("sc-icon",{name:"italic"})),h("sc-button",{size:"small",type:(null===(a=null===(o=this.editor)||void 0===o?void 0:o.isActive)||void 0===a?void 0:a.call(o,"bulletList"))?"default":"text",onClick:()=>this.run("toggleBulletList")},h("sc-icon",{name:"list"})),h("sc-button",{size:"small",type:(null===(r=null===(s=this.editor)||void 0===s?void 0:s.isActive)||void 0===r?void 0:r.call(s,"strike"))?"default":"text",onClick:()=>this.run("toggleStrike")},h("sc-icon",{name:"minus"})),h("sc-button",{class:"right",size:"small",type:"text",onClick:()=>this.run("undo"),disabled:!this.can("undo")},h("sc-icon",{name:"corner-up-left"})),h("sc-button",{size:"small",type:"text",onClick:()=>this.run("redo"),disabled:!this.can("redo")},h("sc-icon",{name:"corner-up-right"}))),h("div",{part:"editor",class:{editor:!0},ref:e=>this.element=e})),this.remainingCharacters()<20&&h("div",{class:"textarea__char-limit-warning"},sprintf(__("%d characters remaining","surecart"),this.remainingCharacters()))))}static get is(){return"sc-rich-text"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-rich-text.scss"]}}static get styleUrls(){return{$:["sc-rich-text.css"]}}static get properties(){return{size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The textarea's size."},attribute:"size",reflect:!0,defaultValue:"'medium'"},name:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The textarea's name attribute."},attribute:"name",reflect:!1},value:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The textarea's value attribute."},attribute:"value",reflect:!1,defaultValue:"''"},label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The textarea's label. Alternatively, you can use the label slot."},attribute:"label",reflect:!1,defaultValue:"''"},showLabel:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Should we show the label"},attribute:"show-label",reflect:!1,defaultValue:"true"},help:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The textarea's help text. Alternatively, you can use the help-text slot."},attribute:"help",reflect:!1,defaultValue:"''"},placeholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The textarea's placeholder text."},attribute:"placeholder",reflect:!1},maxlength:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The max length."},attribute:"maxlength",reflect:!1},disabled:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Disables the textarea."},attribute:"disabled",reflect:!0,defaultValue:"false"},readonly:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Makes the textarea readonly."},attribute:"readonly",reflect:!0,defaultValue:"false"},required:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Makes the textarea a required field."},attribute:"required",reflect:!0,defaultValue:"false"}}}static get states(){return{updatedAt:{},hasFocus:{}}}static get events(){return[{method:"scChange",name:"scChange",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"void",resolved:"void",references:{}}},{method:"scInput",name:"scInput",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"void",resolved:"void",references:{}}},{method:"scBlur",name:"scBlur",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"void",resolved:"void",references:{}}},{method:"scFocus",name:"scFocus",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"void",resolved:"void",references:{}}}]}}