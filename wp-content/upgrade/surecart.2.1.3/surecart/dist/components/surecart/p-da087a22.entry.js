import{r as t,h as i,H as s,a as o}from"./p-25a9e68f.js";import{s as r}from"./p-b141815b.js";import{s as a}from"./p-86ef9d03.js";import"./p-db7ede86.js";import"./p-62338837.js";import"./p-b6ef0098.js";import"./p-1c2e2695.js";import"./p-61ab3f3a.js";import"./p-4c5e6c8d.js";import"./p-7c27060f.js";import"./p-6c2a2148.js";import"./p-d8453138.js";import"./p-4d73f82a.js";import"./p-ffdee0af.js";const e="sc-product-buy-button{position:relative}sc-product-buy-button a.wp-block-button__link{position:relative;text-decoration:none}sc-product-buy-button sc-spinner::part(base){--indicator-color:currentColor;--spinner-size:12px;position:absolute;top:calc(50% - var(--spinner-size) + var(--spinner-size) / 4);left:calc(50% - var(--spinner-size) + var(--spinner-size) / 4)}sc-product-buy-button [data-text],sc-product-buy-button [data-loader]{transition:opacity var(--sc-transition-fast) ease-in-out, visibility var(--sc-transition-fast) ease-in-out}sc-product-buy-button [data-loader]{opacity:0;visibility:hidden}sc-product-buy-button.is-disabled{pointer-events:none}sc-product-buy-button.is-busy [data-text]{opacity:0;visibility:hidden}sc-product-buy-button.is-busy [data-loader]{opacity:1;visibility:visible}";const n=class{constructor(i){t(this,i)}handleCartClick(t){var i;t.preventDefault();if(r.busy)return;if((i=r===null||r===void 0?void 0:r.selectedPrice)===null||i===void 0?void 0:i.ad_hoc){return r.dialog="ad_hoc"}a()}render(){return i(s,{class:{"is-busy":r.busy,"is-disabled":r.disabled},onClick:t=>this.handleCartClick(t)},i("slot",null))}get el(){return o(this)}};n.style=e;export{n as sc_product_buy_button};
//# sourceMappingURL=p-da087a22.entry.js.map