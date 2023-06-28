'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const watchers = require('./watchers-ff56b91c.js');
require('./index-261b56ec.js');

const scProductPriceCss = ":host{display:block}.price{display:inline-flex;align-items:center;gap:var(--sc-spacing-x-small)}.scratch-price{text-decoration:line-through;opacity:0.65}.sale-badge{font-size:min(1em, 14px)}";

const ScProductPrice = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.prices = undefined;
    this.saleText = undefined;
  }
  renderRange() {
    if (watchers.state.prices.length === 1) {
      return this.renderPrice(watchers.state.prices[0]);
    }
    return index.h("sc-price-range", { prices: watchers.state.prices });
  }
  renderPrice(price) {
    if (price === null || price === void 0 ? void 0 : price.ad_hoc) {
      return wp.i18n.__('Custom Amount', 'surecart');
    }
    if ((price === null || price === void 0 ? void 0 : price.amount) === 0) {
      return wp.i18n.__('Free', 'surecart');
    }
    return (index.h("div", { class: "price" }, !!(price === null || price === void 0 ? void 0 : price.scratch_amount) && (index.h("sc-format-number", { class: "scratch-price", part: "price__scratch", type: "currency", currency: price.currency, value: price.scratch_amount })), index.h("sc-format-number", { type: "currency", value: price === null || price === void 0 ? void 0 : price.amount, currency: price === null || price === void 0 ? void 0 : price.currency }), !!(price === null || price === void 0 ? void 0 : price.scratch_amount) && (index.h("sc-tag", { type: "primary", pill: true, class: "sale-badge" }, this.saleText || wp.i18n.__('Sale', 'surecart')))));
  }
  render() {
    if (watchers.state.selectedPrice) {
      return this.renderPrice(watchers.state.selectedPrice);
    }
    if (watchers.state.prices.length) {
      return this.renderRange();
    }
    return index.h("slot", null);
  }
};
ScProductPrice.style = scProductPriceCss;

exports.sc_product_price = ScProductPrice;

//# sourceMappingURL=sc-product-price.cjs.entry.js.map