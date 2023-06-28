import{h}from"@stencil/core";import{openWormhole}from"stencil-wormhole";export class ScCard{constructor(){this.noDivider=void 0,this.borderless=void 0,this.noPadding=void 0,this.href=void 0,this.loading=void 0,this.hasTitleSlot=void 0}componentWillLoad(){this.handleSlotChange()}handleSlotChange(){this.hasTitleSlot=!!this.el.querySelector('[slot="title"]')}render(){const e=this.href?"a":"div";return h(e,{part:"base",class:{card:!0,"card--borderless":this.borderless,"card--no-padding":this.noPadding}},h("slot",null))}static get is(){return"sc-card"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-card.scss"]}}static get styleUrls(){return{$:["sc-card.css"]}}static get properties(){return{noDivider:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Eliminate the divider"},attribute:"no-divider",reflect:!1},borderless:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is this card borderless."},attribute:"borderless",reflect:!1},noPadding:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Remove padding"},attribute:"no-padding",reflect:!1},href:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"A link for the card."},attribute:"href",reflect:!1},loading:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is this card loading."},attribute:"loading",reflect:!1}}}static get states(){return{hasTitleSlot:{}}}static get elementRef(){return"el"}}openWormhole(ScCard,["loading"],!1);