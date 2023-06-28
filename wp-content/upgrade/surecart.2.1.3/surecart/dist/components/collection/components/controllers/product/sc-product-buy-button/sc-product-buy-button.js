import{h,Host}from"@stencil/core";import{state}from"@store/product";import{submitCartForm}from"@store/product/mutations";export class ScProductBuyButton{handleCartClick(t){var s;if(t.preventDefault(),!state.busy)return(null===(s=null==state?void 0:state.selectedPrice)||void 0===s?void 0:s.ad_hoc)?state.dialog="ad_hoc":void submitCartForm()}render(){return h(Host,{class:{"is-busy":state.busy,"is-disabled":state.disabled},onClick:t=>this.handleCartClick(t)},h("slot",null))}static get is(){return"sc-product-buy-button"}static get originalStyleUrls(){return{$:["sc-product-buy-button.scss"]}}static get styleUrls(){return{$:["sc-product-buy-button.css"]}}static get elementRef(){return"el"}}