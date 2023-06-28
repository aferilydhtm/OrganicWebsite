import { r as registerInstance, h, a as getElement } from './index-eabde489.js';
import { o as onChange, s as state } from './watchers-7bf44f71.js';
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

const scProductPriceModalCss = ":host{display:block}sc-dialog{--body-spacing:var(--sc-spacing-xx-large);color:var(--sc-color-gray-600);text-decoration:none;font-size:16px}.dialog__header{display:flex;align-items:center;gap:var(--sc-spacing-medium)}.dialog__header-text{line-height:var(--sc-line-height-dense)}.dialog__image img{width:60px;height:60px;display:block}.dialog__action{font-weight:var(--sc-font-weight-bold)}.dialog__product-name{font-size:var(--sc-font-size-small)}";

const ScProductPriceModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonText = undefined;
  }
  componentWillLoad() {
    // focus on price input when opened.
    onChange('dialog', val => {
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
    if (!((_a = state === null || state === void 0 ? void 0 : state.selectedPrice) === null || _a === void 0 ? void 0 : _a.ad_hoc)) {
      return null;
    }
    return (h("sc-dialog", { open: state.dialog === 'ad_hoc', onScRequestClose: () => (state.dialog = null) }, h("span", { class: "dialog__header", slot: "label" }, !!((_b = state === null || state === void 0 ? void 0 : state.product) === null || _b === void 0 ? void 0 : _b.image_url) && (h("div", { class: "dialog__image" }, h("img", { src: (_c = state === null || state === void 0 ? void 0 : state.product) === null || _c === void 0 ? void 0 : _c.image_url }))), h("div", { class: "dialog__header-text" }, h("div", { class: "dialog__action" }, wp.i18n.__('Enter An Amount', 'surecart')), h("div", { class: "dialog__product-name" }, (_d = state === null || state === void 0 ? void 0 : state.product) === null || _d === void 0 ? void 0 : _d.name))), h("sc-form", { onScSubmit: e => {
        e.stopImmediatePropagation();
        submitCartForm();
      }, onScFormSubmit: e => e.stopImmediatePropagation() }, h("sc-price-input", { ref: el => (this.priceInput = el), value: (_f = (_e = state.adHocAmount) === null || _e === void 0 ? void 0 : _e.toString) === null || _f === void 0 ? void 0 : _f.call(_e), "currency-code": (_g = state === null || state === void 0 ? void 0 : state.selectedPrice) === null || _g === void 0 ? void 0 : _g.currency, min: (_h = state === null || state === void 0 ? void 0 : state.selectedPrice) === null || _h === void 0 ? void 0 : _h.ad_hoc_min_amount, max: (_j = state === null || state === void 0 ? void 0 : state.selectedPrice) === null || _j === void 0 ? void 0 : _j.ad_hoc_max_amount, onScInput: e => (state.adHocAmount = parseInt(e.target.value)), required: true }), h("sc-button", { type: "primary", full: true, submit: true, busy: state.busy }, this.buttonText || wp.i18n.__('Add To Cart', 'surecart')))));
  }
  get el() { return getElement(this); }
};
ScProductPriceModal.style = scProductPriceModalCss;

export { ScProductPriceModal as sc_product_price_modal };

//# sourceMappingURL=sc-product-price-modal.entry.js.map