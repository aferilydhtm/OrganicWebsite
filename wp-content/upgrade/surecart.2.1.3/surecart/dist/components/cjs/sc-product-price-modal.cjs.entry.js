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

const scProductPriceModalCss = ":host{display:block}sc-dialog{--body-spacing:var(--sc-spacing-xx-large);color:var(--sc-color-gray-600);text-decoration:none;font-size:16px}.dialog__header{display:flex;align-items:center;gap:var(--sc-spacing-medium)}.dialog__header-text{line-height:var(--sc-line-height-dense)}.dialog__image img{width:60px;height:60px;display:block}.dialog__action{font-weight:var(--sc-font-weight-bold)}.dialog__product-name{font-size:var(--sc-font-size-small)}";

const ScProductPriceModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.buttonText = undefined;
  }
  componentWillLoad() {
    // focus on price input when opened.
    watchers.onChange('dialog', val => {
      if (val === 'ad_hoc') {
        setTimeout(() => {
          var _a;
          (_a = this.priceInput) === null || _a === void 0 ? void 0 : _a.triggerFocus();
        }, 50);
      }
    });
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (!((_a = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.selectedPrice) === null || _a === void 0 ? void 0 : _a.ad_hoc)) {
      return null;
    }
    return (index.h("sc-dialog", { open: watchers.state.dialog === 'ad_hoc', onScRequestClose: () => (watchers.state.dialog = null) }, index.h("span", { class: "dialog__header", slot: "label" }, !!((_b = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.product) === null || _b === void 0 ? void 0 : _b.image_url) && (index.h("div", { class: "dialog__image" }, index.h("img", { src: (_c = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.product) === null || _c === void 0 ? void 0 : _c.image_url }))), index.h("div", { class: "dialog__header-text" }, index.h("div", { class: "dialog__action" }, wp.i18n.__('Enter An Amount', 'surecart')), index.h("div", { class: "dialog__product-name" }, (_d = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.product) === null || _d === void 0 ? void 0 : _d.name))), index.h("sc-form", { onScSubmit: e => {
        e.stopImmediatePropagation();
        mutations.submitCartForm();
      }, onScFormSubmit: e => e.stopImmediatePropagation() }, index.h("sc-price-input", { ref: el => (this.priceInput = el), value: (_f = (_e = watchers.state.adHocAmount) === null || _e === void 0 ? void 0 : _e.toString) === null || _f === void 0 ? void 0 : _f.call(_e), "currency-code": (_g = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.selectedPrice) === null || _g === void 0 ? void 0 : _g.currency, min: (_h = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.selectedPrice) === null || _h === void 0 ? void 0 : _h.ad_hoc_min_amount, max: (_j = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.selectedPrice) === null || _j === void 0 ? void 0 : _j.ad_hoc_max_amount, onScInput: e => (watchers.state.adHocAmount = parseInt(e.target.value)), required: true }), index.h("sc-button", { type: "primary", full: true, submit: true, busy: watchers.state.busy }, this.buttonText || wp.i18n.__('Add To Cart', 'surecart')))));
  }
  get el() { return index.getElement(this); }
};
ScProductPriceModal.style = scProductPriceModalCss;

exports.sc_product_price_modal = ScProductPriceModal;

//# sourceMappingURL=sc-product-price-modal.cjs.entry.js.map