'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const watchers = require('./watchers-ff56b91c.js');
const mutations = require('./mutations-d15bd3b5.js');
require('./index-261b56ec.js');
require('./index-b901844d.js');
require('./watchers-503cdd2a.js');
require('./add-query-args-17c551b6.js');
require('./watchers-bce289f5.js');
require('./watchers-437b71fb.js');
require('./getters-f0455d23.js');
require('./util-872b1a55.js');
require('./fetch-b673a242.js');
require('./get-query-arg-53bf21e2.js');
require('./ui-c6cc5556.js');

const scProductBuyButtonCss = "sc-product-buy-button{position:relative}sc-product-buy-button a.wp-block-button__link{position:relative;text-decoration:none}sc-product-buy-button sc-spinner::part(base){--indicator-color:currentColor;--spinner-size:12px;position:absolute;top:calc(50% - var(--spinner-size) + var(--spinner-size) / 4);left:calc(50% - var(--spinner-size) + var(--spinner-size) / 4)}sc-product-buy-button [data-text],sc-product-buy-button [data-loader]{transition:opacity var(--sc-transition-fast) ease-in-out, visibility var(--sc-transition-fast) ease-in-out}sc-product-buy-button [data-loader]{opacity:0;visibility:hidden}sc-product-buy-button.is-disabled{pointer-events:none}sc-product-buy-button.is-busy [data-text]{opacity:0;visibility:hidden}sc-product-buy-button.is-busy [data-loader]{opacity:1;visibility:visible}";

const ScProductBuyButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  handleCartClick(e) {
    var _a;
    e.preventDefault();
    // already busy, do nothing.
    if (watchers.state.busy)
      return;
    // ad hoc price, use the dialog.
    if ((_a = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.selectedPrice) === null || _a === void 0 ? void 0 : _a.ad_hoc) {
      return (watchers.state.dialog = 'ad_hoc');
    }
    // submit the cart form.
    mutations.submitCartForm();
  }
  render() {
    return (index.h(index.Host, { class: { 'is-busy': watchers.state.busy, 'is-disabled': watchers.state.disabled }, onClick: e => this.handleCartClick(e) }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
ScProductBuyButton.style = scProductBuyButtonCss;

exports.sc_product_buy_button = ScProductBuyButton;

//# sourceMappingURL=sc-product-buy-button.cjs.entry.js.map