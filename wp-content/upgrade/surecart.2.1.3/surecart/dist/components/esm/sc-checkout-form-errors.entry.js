import { r as registerInstance, h, H as Host } from './index-eabde489.js';
import { o as openWormhole } from './consumer-6ea6ff59.js';

const ScCheckoutFormErrors = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkoutState = undefined;
    this.error = undefined;
  }
  /** This filters the error message with some more client friendly error messages. */
  getErrorMessage(error) {
    if (error.code === 'order.line_items.price.blank') {
      return wp.i18n.__('This product is no longer purchasable.', 'surecart');
    }
    return h("span", { innerHTML: error === null || error === void 0 ? void 0 : error.message });
  }
  /** First will display validation error, then main error if no validation errors. */
  errorMessage() {
    var _a, _b, _c, _d, _e, _f;
    if ((_c = (_b = (_a = this.error) === null || _a === void 0 ? void 0 : _a.additional_errors) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.message) {
      return this.getErrorMessage((_e = (_d = this.error) === null || _d === void 0 ? void 0 : _d.additional_errors) === null || _e === void 0 ? void 0 : _e[0]);
    }
    else if ((_f = this === null || this === void 0 ? void 0 : this.error) === null || _f === void 0 ? void 0 : _f.message) {
      return this.getErrorMessage(this === null || this === void 0 ? void 0 : this.error);
    }
    return '';
  }
  render() {
    // don't show component if no error message or is finalizing or updating.
    if (!this.errorMessage() || ['finalizing', 'updating'].includes(this.checkoutState)) {
      return h(Host, { style: { display: 'none' } });
    }
    return (h(Host, null, h("sc-alert", { type: "danger", scrollOnOpen: true, open: !!this.errorMessage() }, h("span", { slot: "title" }, this.errorMessage())), h("slot", null)));
  }
};
openWormhole(ScCheckoutFormErrors, ['checkoutState', 'error'], false);

export { ScCheckoutFormErrors as sc_checkout_form_errors };

//# sourceMappingURL=sc-checkout-form-errors.entry.js.map