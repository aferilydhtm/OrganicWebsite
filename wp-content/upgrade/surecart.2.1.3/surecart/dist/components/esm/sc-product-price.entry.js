import { r as registerInstance, h } from './index-eabde489.js';
import { s as state } from './watchers-7bf44f71.js';
import './index-aabdbcfe.js';

const scProductPriceCss = ":host{display:block}.price{display:inline-flex;align-items:center;gap:var(--sc-spacing-x-small)}.scratch-price{text-decoration:line-through;opacity:0.65}.sale-badge{font-size:min(1em, 14px)}";

const ScProductPrice = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.prices = undefined;
    this.saleText = undefined;
  }
  renderRange() {
    if (state.prices.length === 1) {
      return this.renderPrice(state.prices[0]);
    }
    return h("sc-price-range", { prices: state.prices });
  }
  renderPrice(price) {
    if (price === null || price === void 0 ? void 0 : price.ad_hoc) {
      return wp.i18n.__('Custom Amount', 'surecart');
    }
    if ((price === null || price === void 0 ? void 0 : price.amount) === 0) {
      return wp.i18n.__('Free', 'surecart');
    }
    return (h("div", { class: "price" }, !!(price === null || price === void 0 ? void 0 : price.scratch_amount) && (h("sc-format-number", { class: "scratch-price", part: "price__scratch", type: "currency", currency: price.currency, value: price.scratch_amount })), h("sc-format-number", { type: "currency", value: price === null || price === void 0 ? void 0 : price.amount, currency: price === null || price === void 0 ? void 0 : price.currency }), !!(price === null || price === void 0 ? void 0 : price.scratch_amount) && (h("sc-tag", { type: "primary", pill: true, class: "sale-badge" }, this.saleText || wp.i18n.__('Sale', 'surecart')))));
  }
  render() {
    if (state.selectedPrice) {
      return this.renderPrice(state.selectedPrice);
    }
    if (state.prices.length) {
      return this.renderRange();
    }
    return h("slot", null);
  }
};
ScProductPrice.style = scProductPriceCss;

export { ScProductPrice as sc_product_price };

//# sourceMappingURL=sc-product-price.entry.js.map