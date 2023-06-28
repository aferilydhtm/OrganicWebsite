import{h}from"@stencil/core";import{getOrder}from"@store/checkouts";import uiStore from"@store/ui";export class ScCartIcon{constructor(){this.icon="shopping-bag",this.count=0,this.formId=void 0,this.mode="live"}order(){return getOrder(this.formId,this.mode)}getItemsCount(){var t,e;const r=null===(e=null===(t=this.order())||void 0===t?void 0:t.line_items)||void 0===e?void 0:e.data;let o=0;return(r||[]).forEach((t=>{o+=null==t?void 0:t.quantity})),o}render(){return this.order()?h("div",{class:{cart:!0},part:"base",onClick:()=>uiStore.set("cart",{...uiStore.state.cart,open:!uiStore.state.cart.open})},h("div",{class:"cart__container",part:"container"},h("div",{class:{cart__counter:!0}},this.getItemsCount()),h("slot",null,h("sc-icon",{exportparts:"base:icon__base",name:this.icon})))):null}static get is(){return"sc-cart-icon"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-cart-icon.scss"]}}static get styleUrls(){return{$:["sc-cart-icon.css"]}}static get properties(){return{icon:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The icon to show."},attribute:"icon",reflect:!1,defaultValue:"'shopping-bag'"},count:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The count to show in the cart icon."},attribute:"count",reflect:!1,defaultValue:"0"},formId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The form id to use for the cart."},attribute:"form-id",reflect:!0},mode:{type:"string",mutable:!1,complexType:{original:"'test' | 'live'",resolved:'"live" | "test"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"Are we in test or live mode."},attribute:"mode",reflect:!1,defaultValue:"'live'"}}}}