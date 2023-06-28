import { r as registerInstance, h, F as Fragment, H as Host, a as getElement } from './index-eabde489.js';
import { a as state$1 } from './watchers-9ca21ceb.js';
import './watchers-9fc91d25.js';
import { s as state, g as getAvailableProcessor, h as hasMultipleProcessorChoices, a as availableProcessors, b as availableManualPaymentMethods } from './getters-7ea74c9e.js';
import { s as state$2 } from './watchers-4d606b62.js';
import { M as ManualPaymentMethods } from './ManualPaymentMethods-e61f06cb.js';
import './index-aabdbcfe.js';
import './add-query-args-f4c5962b.js';
import './util-c1d762c0.js';

const scPaymentCss = ":host{display:flex !important;flex-direction:column;gap:var(--sc-input-label-margin);position:relative;font-family:var(--sc-font-sans)}.sc-payment-toggle-summary{line-height:1;display:flex;align-items:center;gap:0.5em;font-weight:var(--sc-font-weight-semibold)}.sc-payment-label{display:flex;justify-content:space-between}.sc-payment-instructions{color:var(--sc-color-gray-600);font-size:var(--sc-font-size-small);line-height:var(--sc-line-height-dense)}.sc-payment__stripe-card-element{display:flex !important;flex-direction:column;gap:var(--sc-input-label-margin);position:relative}";

const ScPayment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.stripePaymentElement = undefined;
    this.disabledProcessorTypes = undefined;
    this.secureNotice = undefined;
    this.label = undefined;
    this.hideTestModeBadge = undefined;
  }
  componentWillLoad() {
    state.disabled.processors = this.disabledProcessorTypes;
  }
  renderStripe(processor) {
    return (h("sc-payment-method-choice", { key: processor === null || processor === void 0 ? void 0 : processor.id, "processor-id": "stripe", card: this.stripePaymentElement }, h("span", { slot: "summary", class: "sc-payment-toggle-summary" }, h("sc-icon", { name: "credit-card", style: { fontSize: '24px' } }), h("span", null, wp.i18n.__('Credit Card', 'surecart'))), h("div", { class: "sc-payment__stripe-card-element" }, h("slot", { name: "stripe" }))));
  }
  renderPayPal(processor) {
    const stripe = getAvailableProcessor('stripe');
    return (h(Fragment, null, h("sc-payment-method-choice", { key: processor === null || processor === void 0 ? void 0 : processor.id, "processor-id": "paypal" }, h("span", { slot: "summary", class: "sc-payment-toggle-summary" }, h("sc-icon", { name: "paypal", style: { width: '80px', fontSize: '24px' } })), h("sc-card", null, h("sc-payment-selected", { label: wp.i18n.__('PayPal selected for check out.', 'surecart') }, h("sc-icon", { slot: "icon", name: "paypal", style: { width: '80px' } }), wp.i18n.__('Another step will appear after submitting your order to complete your purchase details.', 'surecart')))), !stripe && (h("sc-payment-method-choice", { key: processor === null || processor === void 0 ? void 0 : processor.id, "processor-id": "paypal", "method-id": "card" }, h("span", { slot: "summary", class: "sc-payment-toggle-summary" }, h("sc-icon", { name: "credit-card", style: { fontSize: '24px' } }), h("span", null, wp.i18n.__('Credit Card', 'surecart'))), h("sc-card", null, h("sc-payment-selected", { label: wp.i18n.__('Credit Card selected for check out.', 'surecart') }, h("sc-icon", { name: "credit-card", slot: "icon", style: { fontSize: '24px' } }), wp.i18n.__('Another step will appear after submitting your order to complete your purchase details.', 'surecart')))))));
  }
  render() {
    var _a, _b, _c;
    // payment is not required for this order.
    if (((_a = state$1.checkout) === null || _a === void 0 ? void 0 : _a.payment_method_required) === false) {
      return null;
    }
    const Tag = hasMultipleProcessorChoices() || (state$2 === null || state$2 === void 0 ? void 0 : state$2.id) === 'paypal' ? 'sc-toggles' : 'div';
    const mollie = getAvailableProcessor('mollie');
    return (h(Host, null, h("sc-form-control", { label: this.label, exportparts: "label, help-text, form-control" }, h("div", { class: "sc-payment-label", slot: "label" }, h("div", null, this.label), state$1.mode === 'test' && !this.hideTestModeBadge && (h("sc-tag", { type: "warning", size: "small", exportparts: "base:test-badge__base, content:test-badge__content" }, wp.i18n.__('Test Mode', 'surecart')))), (mollie === null || mollie === void 0 ? void 0 : mollie.id) ? (h("sc-checkout-mollie-payment", { "processor-id": mollie === null || mollie === void 0 ? void 0 : mollie.id })) : (h(Tag, { collapsible: false, theme: "container" }, !((_b = availableProcessors()) === null || _b === void 0 ? void 0 : _b.length) && !((_c = availableManualPaymentMethods()) === null || _c === void 0 ? void 0 : _c.length) && (h("sc-alert", { type: "info", open: true }, wp.i18n.__('You do not have any processors enabled for this mode and cart. Please configure your processors.', 'surecart'))), (availableProcessors() || []).map(processor => {
      switch (processor === null || processor === void 0 ? void 0 : processor.processor_type) {
        case 'stripe':
          return this.renderStripe(processor);
        case 'paypal':
          return this.renderPayPal(processor);
      }
    }), h(ManualPaymentMethods, { methods: availableManualPaymentMethods() }))))));
  }
  get el() { return getElement(this); }
};
ScPayment.style = scPaymentCss;

export { ScPayment as sc_payment };

//# sourceMappingURL=sc-payment.entry.js.map