import{Host,h}from"@stencil/core";export class ScPriceRange{constructor(){this.prices=void 0,this.minPrice=void 0,this.maxPrice=void 0}handlePricesChange(){let e,r;(this.prices||[]).filter((e=>!(null==e?void 0:e.archived))).forEach((t=>{(!r||t.amount>r.amount)&&(r=t),(!e||t.amount<e.amount)&&(e=t)})),this.minPrice=e,this.maxPrice=r}componentWillLoad(){this.handlePricesChange()}render(){return this.maxPrice&&this.minPrice?h(Host,null,this.maxPrice.amount==this.minPrice.amount?h("span",null,h("sc-format-number",{type:"currency",currency:this.maxPrice.currency,value:this.maxPrice.amount})):h("span",null,h("sc-format-number",{type:"currency",currency:this.minPrice.currency,value:this.minPrice.amount})," "," - ",h("sc-format-number",{type:"currency",currency:this.maxPrice.currency,value:this.maxPrice.amount}))):h(Host,null)}static get is(){return"sc-price-range"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-price-range.css"]}}static get styleUrls(){return{$:["sc-price-range.css"]}}static get properties(){return{prices:{type:"unknown",mutable:!1,complexType:{original:"Price[]",resolved:"Price[]",references:{Price:{location:"import",path:"../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"The array of price objects"}}}}static get states(){return{minPrice:{},maxPrice:{}}}static get watchers(){return[{propName:"prices",methodName:"handlePricesChange"}]}}