import { r as registerInstance, c as createEvent, h, a as getElement } from './index-eabde489.js';
import { a as state } from './watchers-9ca21ceb.js';
import './watchers-9fc91d25.js';
import { s as state$1 } from './getters-7ea74c9e.js';
import { s as state$3 } from './store-c50410dc.js';
import { s as state$2 } from './store-9fe5ada0.js';
import { U as Universe } from './universe-3fa8aba0.js';
import './index-aabdbcfe.js';
import './add-query-args-f4c5962b.js';
import './watchers-4d606b62.js';
import './util-c1d762c0.js';

const scCheckoutCss = "sc-checkout{display:block;font-family:var(--sc-font-sans);font-size:var(--sc-checkout-font-size, 16px);position:relative}sc-checkout h3{font-size:var(--sc-input-label-font-size-medium)}sc-alert{margin-bottom:var(--sc-form-row-spacing)}.sc-checkout-container.sc-align-center{max-width:500px;margin-left:auto;margin-right:auto}.sc-checkout-container.sc-align-wide{max-width:800px;margin-left:auto;margin-right:auto}::slotted(*){font-family:var(--sc-font-sans)}";

const ScCheckout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scOrderUpdated = createEvent(this, "scOrderUpdated", 7);
    this.scOrderFinalized = createEvent(this, "scOrderFinalized", 7);
    this.scOrderError = createEvent(this, "scOrderError", 7);
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
    state.checkout = e.detail;
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
    Universe.create(this, this.state());
    state$1.processors = this.processors;
    state$1.manualPaymentMethods = this.manualPaymentMethods;
    state$1.config.stripe.paymentElement = this.stripePaymentElement;
    state.formId = this.formId;
    state.mode = this.mode;
    state.product = this.product || null;
    state.currencyCode = this.currencyCode;
    state.groupId = this.el.id;
    state.abandonedCheckoutReturnUrl = this.abandonedCheckoutReturnUrl;
    state$2.loggedIn = this.loggedIn;
    state$2.email = (_a = this.customer) === null || _a === void 0 ? void 0 : _a.email;
    state$2.name = (_b = this.customer) === null || _b === void 0 ? void 0 : _b.name;
  }
  state() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    return {
      processor: this.processor,
      method: this.method,
      selectedProcessorId: this.processor,
      manualPaymentMethods: this.manualPaymentMethods,
      processor_data: (_a = state.checkout) === null || _a === void 0 ? void 0 : _a.processor_data,
      state: this.checkoutState,
      formState: state$3.formState.value,
      paymentIntents: this.paymentIntents,
      successUrl: this.successUrl,
      bumps: (_c = (_b = state.checkout) === null || _b === void 0 ? void 0 : _b.recommended_bumps) === null || _c === void 0 ? void 0 : _c.data,
      order: state.checkout,
      abandonedCheckoutEnabled: (_d = state.checkout) === null || _d === void 0 ? void 0 : _d.abandoned_checkout_enabled,
      checkout: state.checkout,
      shippingEnabled: (_e = state.checkout) === null || _e === void 0 ? void 0 : _e.shipping_enabled,
      lineItems: ((_g = (_f = state.checkout) === null || _f === void 0 ? void 0 : _f.line_items) === null || _g === void 0 ? void 0 : _g.data) || [],
      editLineItems: this.editLineItems,
      removeLineItems: this.removeLineItems,
      // checkout states
      loading: state$3.formState.value === 'loading',
      busy: ['updating', 'finalizing', 'paying', 'confirming'].includes(state$3.formState.value),
      paying: ['finalizing', 'paying', 'confirming'].includes(state$3.formState.value),
      empty: !['loading', 'updating'].includes(state$3.formState.value) && !((_k = (_j = (_h = state.checkout) === null || _h === void 0 ? void 0 : _h.line_items) === null || _j === void 0 ? void 0 : _j.pagination) === null || _k === void 0 ? void 0 : _k.count),
      // checkout states
      // stripe.
      stripePaymentElement: this.stripePaymentElement,
      stripePaymentIntent: (((_m = (_l = state.checkout) === null || _l === void 0 ? void 0 : _l.staged_payment_intents) === null || _m === void 0 ? void 0 : _m.data) || []).find(intent => intent.processor_type === 'stripe'),
      error: this.error,
      customer: this.customer,
      tax_status: (_o = state.checkout) === null || _o === void 0 ? void 0 : _o.tax_status,
      taxEnabled: (_p = state.checkout) === null || _p === void 0 ? void 0 : _p.tax_enabled,
      customerShippingAddress: typeof ((_q = state.checkout) === null || _q === void 0 ? void 0 : _q.customer) !== 'string' ? (_s = (_r = state.checkout) === null || _r === void 0 ? void 0 : _r.customer) === null || _s === void 0 ? void 0 : _s.shipping_address : {},
      shippingAddress: (_t = state.checkout) === null || _t === void 0 ? void 0 : _t.shipping_address,
      taxStatus: (_u = state.checkout) === null || _u === void 0 ? void 0 : _u.tax_status,
      taxIdentifier: (_v = state.checkout) === null || _v === void 0 ? void 0 : _v.tax_identifier,
      totalAmount: (_w = state.checkout) === null || _w === void 0 ? void 0 : _w.total_amount,
      taxProtocol: this.taxProtocol,
      lockedChoices: this.prices,
      products: this.productsEntities,
      prices: this.pricesEntities,
      country: 'US',
      loggedIn: this.loggedIn,
      emailExists: (_x = state.checkout) === null || _x === void 0 ? void 0 : _x.email_exists,
      formId: this.formId,
      mode: this.mode,
      currencyCode: this.currencyCode,
    };
  }
  render() {
    var _a, _b, _c, _d;
    if (this.isDuplicate) {
      return h("sc-alert", { open: true }, wp.i18n.__('Due to processor restrictions, only one checkout form is allowed on the page.', 'surecart'));
    }
    return (h("div", { class: {
        'sc-checkout-container': true,
        'sc-align-center': this.alignment === 'center',
        'sc-align-wide': this.alignment === 'wide',
        'sc-align-full': this.alignment === 'full',
      } }, h("sc-checkout-unsaved-changes-warning", { state: this.checkoutState }), h(Universe.Provider, { state: this.state() }, h("sc-login-provider", { loggedIn: this.loggedIn, onScSetCustomer: e => (this.customer = e.detail), onScSetLoggedIn: e => (this.loggedIn = e.detail), order: state.checkout }, h("sc-form-state-provider", { onScSetCheckoutFormState: e => (this.checkoutState = e.detail) }, h("sc-form-error-provider", { checkoutState: state$3.formState.value, onScUpdateError: e => (this.error = e.detail) }, h("sc-form-components-validator", { order: state.checkout, disabled: this.disableComponentsValidation, taxProtocol: this.taxProtocol }, h("sc-order-confirm-provider", { "success-url": this.successUrl, successText: this.successText }, h("sc-session-provider", { ref: el => (this.sessionProvider = el), prices: this.prices, persist: this.persistSession, onScError: e => (this.error = e.detail) }, h("slot", null))))))), this.state().busy && h("sc-block-ui", { class: "busy-block-ui", "z-index": 30 }), state$3.formState.value === 'finalizing' && (h("sc-block-ui", { "z-index": 30, spinner: true, style: { '--sc-block-ui-opacity': '0.75' } }, ((_a = this.loadingText) === null || _a === void 0 ? void 0 : _a.finalizing) || wp.i18n.__('Submitting order...', 'surecart'))), state$3.formState.value === 'paying' && (h("sc-block-ui", { "z-index": 30, spinner: true, style: { '--sc-block-ui-opacity': '0.75' } }, ((_b = this.loadingText) === null || _b === void 0 ? void 0 : _b.paying) || wp.i18n.__('Processing payment...', 'surecart'))), state$3.formState.value === 'confirming' && (h("sc-block-ui", { "z-index": 30, spinner: true, style: { '--sc-block-ui-opacity': '0.75' } }, ((_c = this.loadingText) === null || _c === void 0 ? void 0 : _c.confirming) || wp.i18n.__('Finalizing order...', 'surecart'))), state$3.formState.value === 'redirecting' && (h("sc-block-ui", { "z-index": 30, spinner: true, style: { '--sc-block-ui-opacity': '0.75' } }, ((_d = this.loadingText) === null || _d === void 0 ? void 0 : _d.confirmed) || wp.i18n.__('Success! Redirecting...', 'surecart'))))));
  }
  get el() { return getElement(this); }
};
ScCheckout.style = scCheckoutCss;

export { ScCheckout as sc_checkout };

//# sourceMappingURL=sc-checkout.entry.js.map