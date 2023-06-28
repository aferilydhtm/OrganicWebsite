import{h}from"@stencil/core";import{__}from"@wordpress/i18n";export class ScFormComponentsValidator{constructor(){this.disabled=void 0,this.order=void 0,this.taxProtocol=void 0,this.hasAddress=void 0,this.hasTaxIDField=void 0,this.hasBumpsField=void 0,this.hasTaxLine=void 0,this.hasBumpLine=void 0}handleOrderChange(){var e,t,i,s,r,o;this.disabled||(("address_invalid"===(null===(e=null==this?void 0:this.order)||void 0===e?void 0:e.tax_status)||(null===(t=null==this?void 0:this.order)||void 0===t?void 0:t.shipping_enabled))&&this.addAddressField(),(null===(r=null===(s=null===(i=null==this?void 0:this.order)||void 0===i?void 0:i.recommended_bumps)||void 0===s?void 0:s.data)||void 0===r?void 0:r.length)&&this.addBumps(),(null===(o=this.order)||void 0===o?void 0:o.tax_amount)&&this.addTaxLine())}componentWillLoad(){var e,t;this.hasAddress=!!this.el.querySelector("sc-order-shipping-address"),this.hasTaxIDField=!!this.el.querySelector("sc-order-tax-id-input"),this.hasBumpsField=!!this.el.querySelector("sc-order-bumps"),this.hasTaxLine=!!this.el.querySelector("sc-line-item-tax"),(null===(e=this.taxProtocol)||void 0===e?void 0:e.tax_enabled)&&(this.addAddressField(),(null===(t=this.taxProtocol)||void 0===t?void 0:t.eu_vat_required)&&this.addTaxIDField()),this.handleOrderChange()}addAddressField(){if(this.hasAddress)return;const e=this.el.querySelector("sc-payment"),t=document.createElement("sc-order-shipping-address");t.label=__("Address","surecart"),e.parentNode.insertBefore(t,e),this.hasAddress=!0}addTaxIDField(){var e;if(this.hasTaxIDField)return;const t=this.el.querySelector("sc-payment"),i=document.createElement("sc-order-tax-id-input");null===(e=i.taxIdentifier)||void 0===e||e.number_type,t.parentNode.insertBefore(i,t),this.hasTaxIDField=!0}addBumps(){var e,t;if(this.hasBumpsField)return;const i=this.el.querySelector("sc-payment"),s=document.createElement("sc-order-bumps");s.bumps,null===(t=null===(e=this.order)||void 0===e?void 0:e.recommended_bumps)||void 0===t||t.data,i.parentNode.insertBefore(s,i.nextSibling),this.hasBumpsField=!0}addTaxLine(){var e;if(this.hasTaxLine)return;const t=this.el.querySelector("sc-line-item-total[total=total]"),i=document.createElement("sc-line-item-tax");"SC-DIVIDER"===(null===(e=null==t?void 0:t.previousElementSibling)||void 0===e?void 0:e.tagName)?t.parentNode.insertBefore(i,t.previousElementSibling):t.parentNode.insertBefore(i,t),this.hasTaxLine=!0}render(){return h("slot",null)}static get is(){return"sc-form-components-validator"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Disable validation?"},attribute:"disabled",reflect:!1},order:{type:"unknown",mutable:!1,complexType:{original:"Checkout",resolved:"Checkout",references:{Checkout:{location:"import",path:"../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"The order"}},taxProtocol:{type:"unknown",mutable:!1,complexType:{original:"TaxProtocol",resolved:"TaxProtocol",references:{TaxProtocol:{location:"import",path:"../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"The tax protocol"}}}}static get states(){return{hasAddress:{},hasTaxIDField:{},hasBumpsField:{},hasTaxLine:{},hasBumpLine:{}}}static get elementRef(){return"el"}static get watchers(){return[{propName:"order",methodName:"handleOrderChange"}]}}