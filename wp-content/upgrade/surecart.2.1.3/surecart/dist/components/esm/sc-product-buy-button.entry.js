import { r as registerInstance, h, H as Host, a as getElement } from './index-eabde489.js';
import { s as state } from './watchers-7bf44f71.js';
import { s as submitCartForm } from './mutations-0b46d7f7.js';
import './index-aabdbcfe.js';
import './index-813122a4.js';
import './watchers-9ca21ceb.js';
import './add-query-args-f4c5962b.js';
import './watchers-9fc91d25.js';
import './watchers-4d606b62.js';
import './getters-7ea74c9e.js';
import './util-c1d762c0.js';
import './fetch-34712ac6.js';
import './get-query-arg-cb6b8763.js';
import './ui-92b56372.js';

const scProductBuyButtonCss = "sc-product-buy-button{position:relative}sc-product-buy-button a.wp-block-button__link{position:relative;text-decoration:none}sc-product-buy-button sc-spinner::part(base){--indicator-color:currentColor;--spinner-size:12px;position:absolute;top:calc(50% - var(--spinner-size) + var(--spinner-size) / 4);left:calc(50% - var(--spinner-size) + var(--spinner-size) / 4)}sc-product-buy-button [data-text],sc-product-buy-button [data-loader]{transition:opacity var(--sc-transition-fast) ease-in-out, visibility var(--sc-transition-fast) ease-in-out}sc-product-buy-button [data-loader]{opacity:0;visibility:hidden}sc-product-buy-button.is-disabled{pointer-events:none}sc-product-buy-button.is-busy [data-text]{opacity:0;visibility:hidden}sc-product-buy-button.is-busy [data-loader]{opacity:1;visibility:visible}";

const ScProductBuyButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  handleCartClick(e) {
    var _a;
    e.preventDefault();
    // already busy, do nothing.
    if (state.busy)
      return;
    // ad hoc price, use the dialog.
    if ((_a = state === null || state === void 0 ? void 0 : state.selectedPrice) === null || _a === void 0 ? void 0 : _a.ad_hoc) {
      return (state.dialog = 'ad_hoc');
    }
    // submit the cart form.
    submitCartForm();
  }
  render() {
    return (h(Host, { class: { 'is-busy': state.busy, 'is-disabled': state.disabled }, onClick: e => this.handleCartClick(e) }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
ScProductBuyButton.style = scProductBuyButtonCss;

export { ScProductBuyButton as sc_product_buy_button };

//# sourceMappingURL=sc-product-buy-button.entry.js.map