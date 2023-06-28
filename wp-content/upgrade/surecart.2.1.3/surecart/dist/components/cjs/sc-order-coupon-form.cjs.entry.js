'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const consumer = require('./consumer-51f6d265.js');
const pageAlign = require('./page-align-bf197eb4.js');

const scOrderCouponFormCss = ":host{display:block}.coupon-form{position:relative}.form{opacity:0;visibility:hidden;height:0;transition:opacity var(--sc-transition-fast) ease-in-out}.coupon-form--is-open .form{opacity:1;visibility:visible;height:auto;margin-top:var(--sc-spacing-small);display:grid;gap:var(--sc-spacing-small)}.coupon-form--is-open .trigger{color:var(--sc-input-label-color)}.coupon-form--is-open .trigger:hover{text-decoration:none}.trigger{cursor:pointer;font-size:var(--sc-font-size-small);color:var(--sc-color-gray-500);user-select:none}.trigger:hover{text-decoration:underline}.order-coupon-form--is-rtl .trigger,.order-coupon-form--is-rtl .trigger:hover{text-align:right}";

const ScOrderCouponForm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scApplyCoupon = index.createEvent(this, "scApplyCoupon", 7);
    this.label = undefined;
    this.loading = undefined;
    this.busy = undefined;
    this.error = undefined;
    this.order = undefined;
    this.collapsed = undefined;
    this.placeholder = undefined;
    this.buttonText = undefined;
    this.open = undefined;
    this.value = undefined;
    this.errorMessage = undefined;
  }
  handleErrorsChange() {
    var _a;
    const error = (((_a = this === null || this === void 0 ? void 0 : this.error) === null || _a === void 0 ? void 0 : _a.additional_errors) || []).find(error => { var _a; return ((_a = error === null || error === void 0 ? void 0 : error.data) === null || _a === void 0 ? void 0 : _a.attribute) === 'discount.promotion_code'; });
    this.errorMessage = (error === null || error === void 0 ? void 0 : error.message) ? error === null || error === void 0 ? void 0 : error.message : '';
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    return (index.h("sc-coupon-form", { label: this.label || wp.i18n.__('Add Coupon Code', 'surecart'), collapsed: this.collapsed, placeholder: this.placeholder, loading: this.busy && !((_c = (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.line_items) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.length), busy: this.busy, error: this.errorMessage, discount: (_d = this === null || this === void 0 ? void 0 : this.order) === null || _d === void 0 ? void 0 : _d.discount, currency: (_e = this === null || this === void 0 ? void 0 : this.order) === null || _e === void 0 ? void 0 : _e.currency, "discount-amount": (_f = this === null || this === void 0 ? void 0 : this.order) === null || _f === void 0 ? void 0 : _f.discount_amount, class: {
        'order-coupon-form--is-rtl': pageAlign.isRtl(),
      }, "button-text": this.buttonText || wp.i18n.__('Apply', 'surecart') }));
  }
  static get watchers() { return {
    "error": ["handleErrorsChange"]
  }; }
};
consumer.openWormhole(ScOrderCouponForm, ['loading', 'busy', 'order', 'error'], false);
ScOrderCouponForm.style = scOrderCouponFormCss;

exports.sc_order_coupon_form = ScOrderCouponForm;

//# sourceMappingURL=sc-order-coupon-form.cjs.entry.js.map