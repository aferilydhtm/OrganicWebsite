'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const price = require('./price-5efc931a.js');
const getters = require('./getters-52a52d79.js');
const getters$1 = require('./getters-6f3470fb.js');
const watchers = require('./watchers-503cdd2a.js');
require('./currency-2733c607.js');
require('./store-79bafee3.js');
require('./index-261b56ec.js');
require('./add-query-args-17c551b6.js');

const scProductSelectedPriceCss = ":host{display:block}sc-form{width:100%}.selected-price{display:flex;align-items:center;gap:var(--sc-spacing-small);flex-wrap:wrap}.selected-price__wrap{display:flex;align-items:baseline;flex-wrap:wrap;gap:var(--sc-spacing-xx-small);color:var(--sc-selected-price-color, var(--sc-color-gray-800));line-height:1}.selected-price__price{font-size:var(--sc-font-size-xxx-large);font-weight:var(--sc-font-weight-bold);white-space:nowrap}.selected-price__interval{font-weight:var(--sc-font-weight-bold);opacity:0.65;white-space:nowrap}.selected-price__scratch-price{opacity:0.65;font-weight:var(--sc-font-weight-normal);text-decoration:line-through}";

const ScProductSelectedPrice = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scUpdateLineItem = index.createEvent(this, "scUpdateLineItem", 7);
    this.productId = undefined;
    this.showInput = undefined;
    this.adHocAmount = undefined;
  }
  /** The line item from state. */
  lineItem() {
    return getters.getLineItemByProductId(this.productId);
  }
  componentWillLoad() {
    watchers.onChange('checkout', () => {
      var _a, _b, _c;
      this.adHocAmount = ((_a = this.lineItem()) === null || _a === void 0 ? void 0 : _a.ad_hoc_amount) || ((_c = (_b = this.lineItem()) === null || _b === void 0 ? void 0 : _b.price) === null || _c === void 0 ? void 0 : _c.amount);
    });
  }
  updatePrice() {
    var _a, _b, _c;
    this.showInput = false;
    if (!this.adHocAmount && this.adHocAmount !== 0)
      return;
    if (this.adHocAmount === ((_a = this.lineItem()) === null || _a === void 0 ? void 0 : _a.ad_hoc_amount))
      return;
    this.scUpdateLineItem.emit({ price_id: (_c = (_b = this.lineItem()) === null || _b === void 0 ? void 0 : _b.price) === null || _c === void 0 ? void 0 : _c.id, quantity: 1, ad_hoc_amount: this.adHocAmount });
  }
  handleShowInputChange(val) {
    if (val) {
      setTimeout(() => {
        this.input.triggerFocus();
      }, 50);
    }
  }
  render() {
    var _a, _b, _c, _d, _e;
    const price$1 = (_a = this.lineItem()) === null || _a === void 0 ? void 0 : _a.price;
    if (!price$1)
      return index.h(index.Host, { style: { display: 'none' } });
    return (index.h("div", { class: { 'selected-price': true } }, this.showInput ? (index.h("sc-form", { onScSubmit: e => {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.updatePrice();
      }, onScFormSubmit: e => {
        e.preventDefault();
        e.stopImmediatePropagation();
      } }, index.h("sc-price-input", { ref: el => (this.input = el), size: "large", "currency-code": (price$1 === null || price$1 === void 0 ? void 0 : price$1.currency) || 'usd', min: price$1 === null || price$1 === void 0 ? void 0 : price$1.ad_hoc_min_amount, max: price$1 === null || price$1 === void 0 ? void 0 : price$1.ad_hoc_max_amount, placeholder: '0.00', required: true, value: (_c = (_b = this.adHocAmount) === null || _b === void 0 ? void 0 : _b.toString) === null || _c === void 0 ? void 0 : _c.call(_b), onScInput: e => (this.adHocAmount = parseFloat(e.target.value)) }, index.h("sc-button", { slot: "suffix", type: "link", submit: true }, wp.i18n.__('Update', 'surecart'))))) : (index.h(index.Fragment, null, index.h("div", { class: "selected-price__wrap" }, index.h("span", { class: "selected-price__price" }, (price$1 === null || price$1 === void 0 ? void 0 : price$1.scratch_amount) > price$1.amount && (index.h(index.Fragment, null, index.h("sc-format-number", { class: "selected-price__scratch-price", part: "price__scratch", type: "currency", currency: price$1 === null || price$1 === void 0 ? void 0 : price$1.currency, value: price$1 === null || price$1 === void 0 ? void 0 : price$1.scratch_amount }), ' ')), index.h("sc-format-number", { type: "currency", currency: price$1 === null || price$1 === void 0 ? void 0 : price$1.currency, value: ((_d = this.lineItem()) === null || _d === void 0 ? void 0 : _d.ad_hoc_amount) !== null ? (_e = this.lineItem()) === null || _e === void 0 ? void 0 : _e.ad_hoc_amount : price$1 === null || price$1 === void 0 ? void 0 : price$1.amount })), index.h("span", { class: "selected-price__interval" }, price.intervalString(price$1, {
      labels: {
        interval: '/',
        period: 
        /** translators: used as in time period: "for 3 months" */
        wp.i18n.__('for', 'surecart'),
      },
    }))), (price$1 === null || price$1 === void 0 ? void 0 : price$1.ad_hoc) && !getters$1.formBusy() && (index.h("sc-button", { class: "selected-price__change-amount", type: "primary", size: "small", onClick: () => (this.showInput = true) }, index.h("sc-icon", { name: "edit", slot: "prefix" }), wp.i18n.__('Change Amount', 'surecart')))))));
  }
  static get watchers() { return {
    "showInput": ["handleShowInputChange"]
  }; }
};
ScProductSelectedPrice.style = scProductSelectedPriceCss;

exports.sc_product_selected_price = ScProductSelectedPrice;

//# sourceMappingURL=sc-product-selected-price.cjs.entry.js.map