'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const watchers = require('./watchers-503cdd2a.js');
require('./watchers-bce289f5.js');
const getters = require('./getters-f0455d23.js');
const watchers$1 = require('./watchers-437b71fb.js');
const ManualPaymentMethods = require('./ManualPaymentMethods-e5dcf410.js');
require('./index-261b56ec.js');
require('./add-query-args-17c551b6.js');
require('./util-872b1a55.js');

const scPaymentCss = ":host{display:flex !important;flex-direction:column;gap:var(--sc-input-label-margin);position:relative;font-family:var(--sc-font-sans)}.sc-payment-toggle-summary{line-height:1;display:flex;align-items:center;gap:0.5em;font-weight:var(--sc-font-weight-semibold)}.sc-payment-label{display:flex;justify-content:space-between}.sc-payment-instructions{color:var(--sc-color-gray-600);font-size:var(--sc-font-size-small);line-height:var(--sc-line-height-dense)}.sc-payment__stripe-card-element{display:flex !important;flex-direction:column;gap:var(--sc-input-label-margin);position:relative}";

const ScPayment = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.stripePaymentElement = undefined;
    this.disabledProcessorTypes = undefined;
    this.secureNotice = undefined;
    this.label = undefined;
    this.hideTestModeBadge = undefined;
  }
  componentWillLoad() {
    getters.state.disabled.processors = this.disabledProcessorTypes;
  }
  renderStripe(processor) {
    return (index.h("sc-payment-method-choice", { key: processor === null || processor === void 0 ? void 0 : processor.id, "processor-id": "stripe", card: this.stripePaymentElement }, index.h("span", { slot: "summary", class: "sc-payment-toggle-summary" }, index.h("sc-icon", { name: "credit-card", style: { fontSize: '24px' } }), index.h("span", null, wp.i18n.__('Credit Card', 'surecart'))), index.h("div", { class: "sc-payment__stripe-card-element" }, index.h("slot", { name: "stripe" }))));
  }
  renderPayPal(processor) {
    const stripe = getters.getAvailableProcessor('stripe');
    return (index.h(index.Fragment, null, index.h("sc-payment-method-choice", { key: processor === null || processor === void 0 ? void 0 : processor.id, "processor-id": "paypal" }, index.h("span", { slot: "summary", class: "sc-payment-toggle-summary" }, index.h("sc-icon", { name: "paypal", style: { width: '80px', fontSize: '24px' } })), index.h("sc-card", null, index.h("sc-payment-selected", { label: wp.i18n.__('PayPal selected for check out.', 'surecart') }, index.h("sc-icon", { slot: "icon", name: "paypal", style: { width: '80px' } }), wp.i18n.__('Another step will appear after submitting your order to complete your purchase details.', 'surecart')))), !stripe && (index.h("sc-payment-method-choice", { key: processor === null || processor === void 0 ? void 0 : processor.id, "processor-id": "paypal", "method-id": "card" }, index.h("span", { slot: "summary", class: "sc-payment-toggle-summary" }, index.h("sc-icon", { name: "credit-card", style: { fontSize: '24px' } }), index.h("span", null, wp.i18n.__('Credit Card', 'surecart'))), index.h("sc-card", null, index.h("sc-payment-selected", { label: wp.i18n.__('Credit Card selected for check out.', 'surecart') }, index.h("sc-icon", { name: "credit-card", slot: "icon", style: { fontSize: '24px' } }), wp.i18n.__('Another step will appear after submitting your order to complete your purchase details.', 'surecart')))))));
  }
  render() {
    var _a, _b, _c;
    // payment is not required for this order.
    if (((_a = watchers.state.checkout) === null || _a === void 0 ? void 0 : _a.payment_method_required) === false) {
      return null;
    }
    const Tag = getters.hasMultipleProcessorChoices() || (watchers$1.state === null || watchers$1.state === void 0 ? void 0 : watchers$1.state.id) === 'paypal' ? 'sc-toggles' : 'div';
    const mollie = getters.getAvailableProcessor('mollie');
    return (index.h(index.Host, null, index.h("sc-form-control", { label: this.label, exportparts: "label, help-text, form-control" }, index.h("div", { class: "sc-payment-label", slot: "label" }, index.h("div", null, this.label), watchers.state.mode === 'test' && !this.hideTestModeBadge && (index.h("sc-tag", { type: "warning", size: "small", exportparts: "base:test-badge__base, content:test-badge__content" }, wp.i18n.__('Test Mode', 'surecart')))), (mollie === null || mollie === void 0 ? void 0 : mollie.id) ? (index.h("sc-checkout-mollie-payment", { "processor-id": mollie === null || mollie === void 0 ? void 0 : mollie.id })) : (index.h(Tag, { collapsible: false, theme: "container" }, !((_b = getters.availableProcessors()) === null || _b === void 0 ? void 0 : _b.length) && !((_c = getters.availableManualPaymentMethods()) === null || _c === void 0 ? void 0 : _c.length) && (index.h("sc-alert", { type: "info", open: true }, wp.i18n.__('You do not have any processors enabled for this mode and cart. Please configure your processors.', 'surecart'))), (getters.availableProcessors() || []).map(processor => {
      switch (processor === null || processor === void 0 ? void 0 : processor.processor_type) {
        case 'stripe':
          return this.renderStripe(processor);
        case 'paypal':
          return this.renderPayPal(processor);
      }
    }), index.h(ManualPaymentMethods.ManualPaymentMethods, { methods: getters.availableManualPaymentMethods() }))))));
  }
  get el() { return index.getElement(this); }
};
ScPayment.style = scPaymentCss;

exports.sc_payment = ScPayment;

//# sourceMappingURL=sc-payment.cjs.entry.js.map