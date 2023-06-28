'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const watchers = require('./watchers-503cdd2a.js');
require('./watchers-bce289f5.js');
const getters = require('./getters-f0455d23.js');
const store$1 = require('./store-79bafee3.js');
const store = require('./store-a92c3e74.js');
const universe = require('./universe-874f42bb.js');
require('./index-261b56ec.js');
require('./add-query-args-17c551b6.js');
require('./watchers-437b71fb.js');
require('./util-872b1a55.js');

const scCheckoutCss = "sc-checkout{display:block;font-family:var(--sc-font-sans);font-size:var(--sc-checkout-font-size, 16px);position:relative}sc-checkout h3{font-size:var(--sc-input-label-font-size-medium)}sc-alert{margin-bottom:var(--sc-form-row-spacing)}.sc-checkout-container.sc-align-center{max-width:500px;margin-left:auto;margin-right:auto}.sc-checkout-container.sc-align-wide{max-width:800px;margin-left:auto;margin-right:auto}::slotted(*){font-family:var(--sc-font-sans)}";

const ScCheckout = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scOrderUpdated = index.createEvent(this, "scOrderUpdated", 7);
    this.scOrderFinalized = index.createEvent(this, "scOrderFinalized", 7);
    this.scOrderError = index.createEvent(this, "scOrderError", 7);
    this.prices = [];
    this.product = undefined;
    this.mode = 'live';
    this.formId = undefined;
    this.modified = undefined;
    this.currencyCode = 'usd';
    this.persistSession = true;
    this.successUrl = '';
    this.customer = undefined;
    this.alignment = undefined;
    this.taxProtocol = undefined;
    this.loggedIn = undefined;
    this.disableComponentsValidation = undefined;
    this.processors = undefined;
    this.manualPaymentMethods = undefined;
    this.editLineItems = true;
    this.removeLineItems = true;
    this.abandonedCheckoutReturnUrl = undefined;
    this.stripePaymentElement = false;
    this.loadingText = undefined;
    this.successText = undefined;
    this.pricesEntities = {};
    this.productsEntities = {};
    this.checkoutState = 'idle';
    this.error = undefined;
    this.processor = 'stripe';
    this.method = undefined;
    this.isManualProcessor = undefined;
    this.paymentIntents = {};
    this.isDuplicate = undefined;
  }
  handleOrderStateUpdate(e) {
    watchers.state.checkout = e.detail;
  }
  handleMethodChange(e) {
    this.method = e.detail;
  }
  handleAddEntities(e) {
    const { products, prices } = e.detail;
    // add products.
    if (Object.keys((products === null || products === void 0 ? void 0 : products.length) || {})) {
      this.productsEntities = {
        ...this.productsEntities,
        ...products,
      };
    }
    // add prices.
    if (Object.keys((prices === null || prices === void 0 ? void 0 : prices.length) || {})) {
      this.pricesEntities = {
        ...this.pricesEntities,
        ...prices,
      };
    }
  }
  /**
   * Submit the form
   */
  async submit({ skip_validation } = { skip_validation: false }) {
    if (!skip_validation) {
      await this.validate();
    }
    return await this.sessionProvider.finalize();
  }
  /**
   * Validate the form.
   */
  async validate() {
    const form = this.el.querySelector('sc-form');
    return await form.validate();
  }
  componentWillLoad() {
    var _a, _b;
    const checkout = document.querySelector('sc-checkout');
    this.isDuplicate = !!checkout && checkout !== this.el;
    if (this.isDuplicate)
      return;
    universe.Universe.create(this, this.state());
    getters.state.processors = this.processors;
    getters.state.manualPaymentMethods = this.manualPaymentMethods;
    getters.state.config.stripe.paymentElement = this.stripePaymentElement;
    watchers.state.formId = this.formId;
    watchers.state.mode = this.mode;
    watchers.state.product = this.product || null;
    watchers.state.currencyCode = this.currencyCode;
    watchers.state.groupId = this.el.id;
    watchers.state.abandonedCheckoutReturnUrl = this.abandonedCheckoutReturnUrl;
    store.state.loggedIn = this.loggedIn;
    store.state.email = (_a = this.customer) === null || _a === void 0 ? void 0 : _a.email;
    store.state.name = (_b = this.customer) === null || _b === void 0 ? void 0 : _b.name;
  }
  state() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    return {
      processor: this.processor,
      method: this.method,
      selectedProcessorId: this.processor,
      manualPaymentMethods: this.manualPaymentMethods,
      processor_data: (_a = watchers.state.checkout) === null || _a === void 0 ? void 0 : _a.processor_data,
      state: this.checkoutState,
      formState: store$1.state.formState.value,
      paymentIntents: this.paymentIntents,
      successUrl: this.successUrl,
      bumps: (_c = (_b = watchers.state.checkout) === null || _b === void 0 ? void 0 : _b.recommended_bumps) === null || _c === void 0 ? void 0 : _c.data,
      order: watchers.state.checkout,
      abandonedCheckoutEnabled: (_d = watchers.state.checkout) === null || _d === void 0 ? void 0 : _d.abandoned_checkout_enabled,
      checkout: watchers.state.checkout,
      shippingEnabled: (_e = watchers.state.checkout) === null || _e === void 0 ? void 0 : _e.shipping_enabled,
      lineItems: ((_g = (_f = watchers.state.checkout) === null || _f === void 0 ? void 0 : _f.line_items) === null || _g === void 0 ? void 0 : _g.data) || [],
      editLineItems: this.editLineItems,
      removeLineItems: this.removeLineItems,
      // checkout states
      loading: store$1.state.formState.value === 'loading',
      busy: ['updating', 'finalizing', 'paying', 'confirming'].includes(store$1.state.formState.value),
      paying: ['finalizing', 'paying', 'confirming'].includes(store$1.state.formState.value),
      empty: !['loading', 'updating'].includes(store$1.state.formState.value) && !((_k = (_j = (_h = watchers.state.checkout) === null || _h === void 0 ? void 0 : _h.line_items) === null || _j === void 0 ? void 0 : _j.pagination) === null || _k === void 0 ? void 0 : _k.count),
      // checkout states
      // stripe.
      stripePaymentElement: this.stripePaymentElement,
      stripePaymentIntent: (((_m = (_l = watchers.state.checkout) === null || _l === void 0 ? void 0 : _l.staged_payment_intents) === null || _m === void 0 ? void 0 : _m.data) || []).find(intent => intent.processor_type === 'stripe'),
      error: this.error,
      customer: this.customer,
      tax_status: (_o = watchers.state.checkout) === null || _o === void 0 ? void 0 : _o.tax_status,
      taxEnabled: (_p = watchers.state.checkout) === null || _p === void 0 ? void 0 : _p.tax_enabled,
      customerShippingAddress: typeof ((_q = watchers.state.checkout) === null || _q === void 0 ? void 0 : _q.customer) !== 'string' ? (_s = (_r = watchers.state.checkout) === null || _r === void 0 ? void 0 : _r.customer) === null || _s === void 0 ? void 0 : _s.shipping_address : {},
      shippingAddress: (_t = watchers.state.checkout) === null || _t === void 0 ? void 0 : _t.shipping_address,
      taxStatus: (_u = watchers.state.checkout) === null || _u === void 0 ? void 0 : _u.tax_status,
      taxIdentifier: (_v = watchers.state.checkout) === null || _v === void 0 ? void 0 : _v.tax_identifier,
      totalAmount: (_w = watchers.state.checkout) === null || _w === void 0 ? void 0 : _w.total_amount,
      taxProtocol: this.taxProtocol,
      lockedChoices: this.prices,
      products: this.productsEntities,
      prices: this.pricesEntities,
      country: 'US',
      loggedIn: this.loggedIn,
      emailExists: (_x = watchers.state.checkout) === null || _x === void 0 ? void 0 : _x.email_exists,
      formId: this.formId,
      mode: this.mode,
      currencyCode: this.currencyCode,
    };
  }
  render() {
    var _a, _b, _c, _d;
    if (this.isDuplicate) {
      return index.h("sc-alert", { open: true }, wp.i18n.__('Due to processor restrictions, only one checkout form is allowed on the page.', 'surecart'));
    }
    return (index.h("div", { class: {
        'sc-checkout-container': true,
        'sc-align-center': this.alignment === 'center',
        'sc-align-wide': this.alignment === 'wide',
        'sc-align-full': this.alignment === 'full',
      } }, index.h("sc-checkout-unsaved-changes-warning", { state: this.checkoutState }), index.h(universe.Universe.Provider, { state: this.state() }, index.h("sc-login-provider", { loggedIn: this.loggedIn, onScSetCustomer: e => (this.customer = e.detail), onScSetLoggedIn: e => (this.loggedIn = e.detail), order: watchers.state.checkout }, index.h("sc-form-state-provider", { onScSetCheckoutFormState: e => (this.checkoutState = e.detail) }, index.h("sc-form-error-provider", { checkoutState: store$1.state.formState.value, onScUpdateError: e => (this.error = e.detail) }, index.h("sc-form-components-validator", { order: watchers.state.checkout, disabled: this.disableComponentsValidation, taxProtocol: this.taxProtocol }, index.h("sc-order-confirm-provider", { "success-url": this.successUrl, successText: this.successText }, index.h("sc-session-provider", { ref: el => (this.sessionProvider = el), prices: this.prices, persist: this.persistSession, onScError: e => (this.error = e.detail) }, index.h("slot", null))))))), this.state().busy && index.h("sc-block-ui", { class: "busy-block-ui", "z-index": 30 }), store$1.state.formState.value === 'finalizing' && (index.h("sc-block-ui", { "z-index": 30, spinner: true, style: { '--sc-block-ui-opacity': '0.75' } }, ((_a = this.loadingText) === null || _a === void 0 ? void 0 : _a.finalizing) || wp.i18n.__('Submitting order...', 'surecart'))), store$1.state.formState.value === 'paying' && (index.h("sc-block-ui", { "z-index": 30, spinner: true, style: { '--sc-block-ui-opacity': '0.75' } }, ((_b = this.loadingText) === null || _b === void 0 ? void 0 : _b.paying) || wp.i18n.__('Processing payment...', 'surecart'))), store$1.state.formState.value === 'confirming' && (index.h("sc-block-ui", { "z-index": 30, spinner: true, style: { '--sc-block-ui-opacity': '0.75' } }, ((_c = this.loadingText) === null || _c === void 0 ? void 0 : _c.confirming) || wp.i18n.__('Finalizing order...', 'surecart'))), store$1.state.formState.value === 'redirecting' && (index.h("sc-block-ui", { "z-index": 30, spinner: true, style: { '--sc-block-ui-opacity': '0.75' } }, ((_d = this.loadingText) === null || _d === void 0 ? void 0 : _d.confirmed) || wp.i18n.__('Success! Redirecting...', 'surecart'))))));
  }
  get el() { return index.getElement(this); }
};
ScCheckout.style = scCheckoutCss;

exports.sc_checkout = ScCheckout;

//# sourceMappingURL=sc-checkout.cjs.entry.js.map