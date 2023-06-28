'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const store = require('./store-79bafee3.js');
const fetch = require('./fetch-b673a242.js');
const index$1 = require('./index-b901844d.js');
const watchers = require('./watchers-503cdd2a.js');
const mutations = require('./mutations-b8d54585.js');
const currency = require('./currency-2733c607.js');
const addQueryArgs = require('./add-query-args-17c551b6.js');
const watchers$1 = require('./watchers-437b71fb.js');
const formData = require('./form-data-69000afe.js');
const getQueryArg = require('./get-query-arg-53bf21e2.js');
require('./index-261b56ec.js');
require('./watchers-bce289f5.js');
require('./getters-f0455d23.js');
require('./util-872b1a55.js');

const ScCheckoutUnsavedChangesWarning = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.state = undefined;
  }
  /**
   * Add event listener for beforeunload.
   */
  componentDidLoad() {
    window.addEventListener('beforeunload', e => this.warnIfUnsavedChanges(e), { capture: true });
  }
  /**
   * Warn if status is updaing, finalizing, paying or confirming.
   */
  warnIfUnsavedChanges(e) {
    if (['updating', 'finalizing', 'confirming'].includes(this.state)) {
      console.log({ e });
      e.preventDefault();
      e.returnValue = wp.i18n.__('Your payment is processing. Exiting this page could cause an error in your order. Please do not navigate away from this page.', 'surecart');
      return e.returnValue;
    }
  }
};

const ScFormComponentsValidator = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.disabled = undefined;
    this.order = undefined;
    this.taxProtocol = undefined;
    this.hasAddress = undefined;
    this.hasTaxIDField = undefined;
    this.hasBumpsField = undefined;
    this.hasTaxLine = undefined;
    this.hasBumpLine = undefined;
  }
  handleOrderChange() {
    var _a, _b, _c, _d, _e, _f;
    // bail if we don't have address invalid error or disabled.
    if (this.disabled)
      return;
    // make sure to add the address field if it's not there.
    if (((_a = this === null || this === void 0 ? void 0 : this.order) === null || _a === void 0 ? void 0 : _a.tax_status) === 'address_invalid' || ((_b = this === null || this === void 0 ? void 0 : this.order) === null || _b === void 0 ? void 0 : _b.shipping_enabled)) {
      this.addAddressField();
    }
    // add order bumps.
    if ((_e = (_d = (_c = this === null || this === void 0 ? void 0 : this.order) === null || _c === void 0 ? void 0 : _c.recommended_bumps) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.length) {
      this.addBumps();
    }
    if (!!((_f = this.order) === null || _f === void 0 ? void 0 : _f.tax_amount)) {
      this.addTaxLine();
    }
  }
  componentWillLoad() {
    var _a, _b;
    this.hasAddress = !!this.el.querySelector('sc-order-shipping-address');
    this.hasTaxIDField = !!this.el.querySelector('sc-order-tax-id-input');
    this.hasBumpsField = !!this.el.querySelector('sc-order-bumps');
    this.hasTaxLine = !!this.el.querySelector('sc-line-item-tax');
    // automatically add address field if tax is enabled.
    if ((_a = this.taxProtocol) === null || _a === void 0 ? void 0 : _a.tax_enabled) {
      this.addAddressField();
      // if eu vat is required, add the tax id field.
      if ((_b = this.taxProtocol) === null || _b === void 0 ? void 0 : _b.eu_vat_required) {
        this.addTaxIDField();
      }
    }
    // make sure to check order on load.
    this.handleOrderChange();
  }
  addAddressField() {
    if (this.hasAddress)
      return;
    const payment = this.el.querySelector('sc-payment');
    const address = document.createElement('sc-order-shipping-address');
    address.label = wp.i18n.__('Address', 'surecart');
    payment.parentNode.insertBefore(address, payment);
    this.hasAddress = true;
  }
  addTaxIDField() {
    if (this.hasTaxIDField)
      return;
    const payment = this.el.querySelector('sc-payment');
    const taxInput = document.createElement('sc-order-tax-id-input');
    payment.parentNode.insertBefore(taxInput, payment);
    this.hasTaxIDField = true;
  }
  addBumps() {
    if (this.hasBumpsField)
      return;
    const payment = this.el.querySelector('sc-payment');
    const bumps = document.createElement('sc-order-bumps');
    payment.parentNode.insertBefore(bumps, payment.nextSibling);
    this.hasBumpsField = true;
  }
  addTaxLine() {
    var _a;
    if (this.hasTaxLine)
      return;
    const total = this.el.querySelector('sc-line-item-total[total=total]');
    const tax = document.createElement('sc-line-item-tax');
    if (((_a = total === null || total === void 0 ? void 0 : total.previousElementSibling) === null || _a === void 0 ? void 0 : _a.tagName) === 'SC-DIVIDER') {
      total.parentNode.insertBefore(tax, total.previousElementSibling);
    }
    else {
      total.parentNode.insertBefore(tax, total);
    }
    this.hasTaxLine = true;
  }
  render() {
    return index.h("slot", null);
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "order": ["handleOrderChange"]
  }; }
};

const ScFormErrorProvider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scUpdateError = index.createEvent(this, "scUpdateError", 7);
    this.scSetState = index.createEvent(this, "scSetState", 7);
    this.checkoutState = undefined;
    this.error = undefined;
  }
  /** Trigger the error event when an error happens  */
  handleErrorUpdate(val) {
    this.scUpdateError.emit(val);
  }
  handleStateChange(val) {
    if (['finalizing', 'updating'].includes(val)) {
      this.error = null;
    }
  }
  /** Listen for error events in component. */
  handleErrorEvent(e) {
    this.error = e.detail;
    if (Object.keys((e === null || e === void 0 ? void 0 : e.detail) || {}).length) {
      this.scSetState.emit('REJECT'); // make sure we are rejecting the current state.
    }
  }
  /** Listen for pay errors. */
  handlePayError(e) {
    var _a;
    this.error = ((_a = e.detail) === null || _a === void 0 ? void 0 : _a.message) || {
      code: '',
      message: 'Something went wrong with your payment.',
    };
  }
  componentWillLoad() {
    this.maybeAddErrorsComponent();
  }
  maybeAddErrorsComponent() {
    if (!!this.el.querySelector('sc-checkout-form-errors'))
      return;
    const errorsComponent = document.createElement('sc-checkout-form-errors');
    console.log(this.el.querySelector('sc-form'));
    this.el.querySelector('sc-form').prepend(errorsComponent);
  }
  render() {
    return index.h("slot", null);
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "error": ["handleErrorUpdate"],
    "checkoutState": ["handleStateChange"]
  }; }
};

// Start state machine.
const service = store.v(store.checkoutMachine);
service.subscribe(stateService => (store.state.formState = stateService));
service.start();

const { send } = service;
const updateFormState = action => send(action);

const ScFormStateProvider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scSetCheckoutFormState = index.createEvent(this, "scSetCheckoutFormState", 7);
    /** Holds our state machine service */
    this._stateService = store.v(store.checkoutMachine);
    this.checkoutState = store.checkoutMachine.initialState;
  }
  /** Set the state. */
  setState(name) {
    const { send } = this._stateService;
    updateFormState(name);
    return send(name);
  }
  /** Watch for checkout state changes and emit to listeners. */
  handleCheckoutStateChange(state) {
    this.scSetCheckoutFormState.emit(state.value);
  }
  /** Init the state service. */
  componentWillLoad() {
    // Start state machine.
    this._stateService.subscribe(state => (this.checkoutState = state));
    this._stateService.start();
  }
  /** Remove state machine on disconnect. */
  disconnectedCallback() {
    this._stateService.stop();
  }
  /** Allow children to set the form state. */
  handleSetStateEvent(e) {
    this.setState(e.detail);
  }
  /** Update the state when the order is paid. */
  async handlePaid() {
    this.setState('PAID');
  }
  render() {
    // handle expired.
    if (this.checkoutState.value === 'expired') {
      return (index.h("sc-block-ui", null, index.h("div", null, wp.i18n.__('Please refresh the page.', 'surecart'))));
    }
    return index.h("slot", null);
  }
  static get watchers() { return {
    "checkoutState": ["handleCheckoutStateChange"]
  }; }
};

const scLoginProviderCss = ":host{display:block}";

const ScLoginProvider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scSetLoggedIn = index.createEvent(this, "scSetLoggedIn", 7);
    this.scSetCustomer = index.createEvent(this, "scSetCustomer", 7);
    this.loggedIn = undefined;
    this.order = undefined;
    this.notice = undefined;
    this.open = undefined;
    this.loading = undefined;
    this.error = undefined;
  }
  /** Listen for open event. */
  handleLoginPrompt() {
    this.open = true;
  }
  /** Focus on first input. */
  handleLoginDialogChange(val) {
    if (val) {
      setTimeout(() => {
        this.loginForm.querySelector('sc-input').triggerFocus();
      }, 100);
    }
  }
  handleLoggedInChange(val, prev) {
    if (prev === false && val) {
      this.notice = true;
    }
  }
  handleOrderChange(val, prev) {
    if ((val === null || val === void 0 ? void 0 : val.updated_at) !== (prev === null || prev === void 0 ? void 0 : prev.updated_at)) {
      this.notice = false;
    }
  }
  /** Handle form submit. */
  async handleFormSubmit(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    this.error = null;
    const { login, password } = await e.target.getFormJson();
    try {
      this.loading = true;
      const { name, email } = (await fetch.apiFetch({
        method: 'POST',
        path: 'surecart/v1/login',
        data: {
          login,
          password,
        },
      }));
      this.scSetLoggedIn.emit(true);
      this.scSetCustomer.emit({ name, email });
      this.open = false;
    }
    catch (e) {
      console.error(e);
      this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
    }
    finally {
      this.loading = false;
    }
  }
  render() {
    return (index.h(index.Host, null, !!this.notice && (index.h("sc-alert", { type: "success", open: true, style: { marginBottom: 'var(--sc-form-row-spacing)' }, closable: true }, index.h("span", { slot: "title" }, wp.i18n.__('Welcome back!', 'surecart')), wp.i18n.__('You have logged in successfully.', 'surecart'))), index.h("slot", null), !this.loggedIn && (index.h("sc-dialog", { label: wp.i18n.__('Login to your account', 'surecart'), open: this.open, onScRequestClose: () => (this.open = false) }, index.h("sc-form", { ref: el => (this.loginForm = el), onScFormSubmit: e => {
        e.preventDefault();
        e.stopImmediatePropagation();
      }, onScSubmit: e => this.handleFormSubmit(e) }, !!this.error && (index.h("sc-alert", { type: "danger", open: !!this.error }, this.error)), index.h("sc-input", { label: wp.i18n.__('Email or Username', 'surecart'), type: "text", name: "login", required: true, autofocus: this.open }), index.h("sc-input", { label: wp.i18n.__('Password', 'surecart'), type: "password", name: "password", required: true }), index.h("sc-button", { type: "primary", full: true, loading: this.loading, submit: true }, wp.i18n.__('Login', 'surecart')))))));
  }
  static get watchers() { return {
    "open": ["handleLoginDialogChange"],
    "loggedIn": ["handleLoggedInChange"],
    "order": ["handleOrderChange"]
  }; }
};
ScLoginProvider.style = scLoginProviderCss;

const scOrderConfirmProviderCss = ".confirm__icon{margin-bottom:var(--sc-spacing-medium);display:flex;justify-content:center}.confirm__icon-container{background:var(--sc-color-primary-500);width:55px;height:55px;border-radius:999999px;display:flex;align-items:center;justify-content:center;font-size:26px;line-height:1;color:white}sc-dialog::part(overlay){backdrop-filter:blur(4px)}";

const ScOrderConfirmProvider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scOrderPaid = index.createEvent(this, "scOrderPaid", 7);
    this.scSetState = index.createEvent(this, "scSetState", 7);
    this.scError = index.createEvent(this, "scError", 7);
    this.showSuccessModal = false;
    this.confirmedCheckout = undefined;
    this.successUrl = undefined;
    this.successText = undefined;
  }
  /** Listen for paid event. This is triggered by Stripe or Paypal elements when payment succeeds. */
  handlePaidEvent() {
    this.confirmOrder();
  }
  /** Confirm the order. */
  async confirmOrder() {
    var _a, _b, _c;
    try {
      this.confirmedCheckout = (await fetch.apiFetch({
        method: 'PATCH',
        path: addQueryArgs.addQueryArgs(`surecart/v1/checkouts/${(_a = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _a === void 0 ? void 0 : _a.id}/confirm`, { expand: index$1.expand }),
      }));
      this.scSetState.emit('CONFIRMED');
      // emit the order paid event for tracking scripts.
      this.scOrderPaid.emit(this.confirmedCheckout);
      this.doGoogleAnalytics();
    }
    catch (e) {
      console.error(e);
      this.scError.emit(e);
    }
    finally {
      // always clear the checkout.
      mutations.clearCheckout();
      // get success url.
      const successUrl = ((_c = (_b = this.confirmedCheckout) === null || _b === void 0 ? void 0 : _b.metadata) === null || _c === void 0 ? void 0 : _c.success_url) || this.successUrl;
      if (successUrl) {
        // set state to redirecting.
        this.scSetState.emit('REDIRECT');
        setTimeout(() => { var _a; return window.location.assign(addQueryArgs.addQueryArgs(successUrl, { order: (_a = this.confirmedCheckout) === null || _a === void 0 ? void 0 : _a.id })); }, 50);
      }
      else {
        this.showSuccessModal = true;
      }
    }
  }
  doGoogleAnalytics() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    if (!(window === null || window === void 0 ? void 0 : window.dataLayer) && !(window === null || window === void 0 ? void 0 : window.gtag))
      return;
    const data = {
      transaction_id: (_a = this.confirmedCheckout) === null || _a === void 0 ? void 0 : _a.id,
      value: currency.maybeConvertAmount((_b = this.confirmedCheckout) === null || _b === void 0 ? void 0 : _b.total_amount, ((_c = this.confirmedCheckout) === null || _c === void 0 ? void 0 : _c.currency) || 'USD'),
      currency: (this.confirmedCheckout.currency || '').toUpperCase(),
      ...(((_f = (_e = (_d = this.confirmedCheckout) === null || _d === void 0 ? void 0 : _d.discount) === null || _e === void 0 ? void 0 : _e.promotion) === null || _f === void 0 ? void 0 : _f.code) ? { coupon: (_j = (_h = (_g = this.confirmedCheckout) === null || _g === void 0 ? void 0 : _g.discount) === null || _h === void 0 ? void 0 : _h.promotion) === null || _j === void 0 ? void 0 : _j.code } : {}),
      ...(((_k = this.confirmedCheckout) === null || _k === void 0 ? void 0 : _k.tax_amount) ? { tax: currency.maybeConvertAmount((_l = this.confirmedCheckout) === null || _l === void 0 ? void 0 : _l.tax_amount, ((_m = this.confirmedCheckout) === null || _m === void 0 ? void 0 : _m.currency) || 'USD') } : {}),
      items: (((_p = (_o = this.confirmedCheckout) === null || _o === void 0 ? void 0 : _o.line_items) === null || _p === void 0 ? void 0 : _p.data) || []).map(item => {
        var _a, _b, _c, _d, _e;
        return ({
          item_name: ((_b = (_a = item === null || item === void 0 ? void 0 : item.price) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.name) || '',
          discount: (item === null || item === void 0 ? void 0 : item.discount_amount) ? currency.maybeConvertAmount((item === null || item === void 0 ? void 0 : item.discount_amount) || 0, ((_c = this.confirmedCheckout) === null || _c === void 0 ? void 0 : _c.currency) || 'USD') : 0,
          price: currency.maybeConvertAmount(((_d = item === null || item === void 0 ? void 0 : item.price) === null || _d === void 0 ? void 0 : _d.amount) || 0, ((_e = this.confirmedCheckout) === null || _e === void 0 ? void 0 : _e.currency) || 'USD'),
          quantity: (item === null || item === void 0 ? void 0 : item.quantity) || 1,
        });
      }),
    };
    // handle gtag (analytics script.)
    if (window === null || window === void 0 ? void 0 : window.gtag) {
      window.gtag('event', 'purchase', data);
    }
    // handle dataLayer (google tag manager).
    if (window === null || window === void 0 ? void 0 : window.dataLayer) {
      window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
      window.dataLayer.push({
        event: 'purchase',
        ecommerce: data,
      });
    }
  }
  getSuccessUrl() {
    var _a, _b, _c, _d, _e;
    const url = ((_b = (_a = this.confirmedCheckout) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.success_url) || this.successUrl;
    return url ? addQueryArgs.addQueryArgs(url, { order: (_c = this.confirmedCheckout) === null || _c === void 0 ? void 0 : _c.id }) : (_e = (_d = window === null || window === void 0 ? void 0 : window.scData) === null || _d === void 0 ? void 0 : _d.pages) === null || _e === void 0 ? void 0 : _e.dashboard;
  }
  render() {
    var _a, _b, _c, _d;
    const manualPaymentMethod = (_a = this.confirmedCheckout) === null || _a === void 0 ? void 0 : _a.manual_payment_method;
    return (index.h(index.Host, null, index.h("slot", null), index.h("sc-dialog", { open: !!this.showSuccessModal, style: { '--body-spacing': 'var(--sc-spacing-xxx-large)' }, noHeader: true, onScRequestClose: e => e.preventDefault() }, index.h("div", { class: "confirm__icon" }, index.h("div", { class: "confirm__icon-container" }, index.h("sc-icon", { name: "check" }))), index.h("sc-dashboard-module", { heading: ((_b = this.successText) === null || _b === void 0 ? void 0 : _b.title) || wp.i18n.__('Thanks for your order!', 'surecart'), style: { '--sc-dashboard-module-spacing': 'var(--sc-spacing-x-large)', 'textAlign': 'center' } }, index.h("span", { slot: "description" }, ((_c = this.successText) === null || _c === void 0 ? void 0 : _c.description) || wp.i18n.__('Your payment was successful, and your order is complete. A receipt is on its way to your inbox.', 'surecart')), !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name) && !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions) && (index.h("sc-alert", { type: "info", open: true, style: { 'text-align': 'left' } }, index.h("span", { slot: "title" }, manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name), manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 :
      manualPaymentMethod.instructions.split('\n').map(i => {
        return index.h("p", null, i);
      }))), index.h("sc-button", { href: this.getSuccessUrl(), size: "large", type: "primary" }, ((_d = this.successText) === null || _d === void 0 ? void 0 : _d.button) || wp.i18n.__('Continue', 'surecart'), index.h("sc-icon", { name: "arrow-right", slot: "suffix" }))))));
  }
  get el() { return index.getElement(this); }
};
ScOrderConfirmProvider.style = scOrderConfirmProviderCss;

const ScSessionProvider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scUpdateOrderState = index.createEvent(this, "scUpdateOrderState", 7);
    this.scUpdateDraftState = index.createEvent(this, "scUpdateDraftState", 7);
    this.scPaid = index.createEvent(this, "scPaid", 7);
    this.scError = index.createEvent(this, "scError", 7);
    this.scSetState = index.createEvent(this, "scSetState", 7);
    this.prices = [];
    this.persist = true;
  }
  handlePricesChange() {
    let line_items = this.addInitialPrices() || [];
    line_items = this.addPriceChoices(line_items);
    if (!(line_items === null || line_items === void 0 ? void 0 : line_items.length)) {
      return;
    }
    return this.loadUpdate({ line_items });
  }
  /**
   * Finalize the order.
   *
   * @returns {Promise<Order>}
   */
  async finalize() {
    return await this.handleFormSubmit();
  }
  async getFormData() {
    let data = {};
    const form = this.el.querySelector('sc-form');
    if (form) {
      const json = await form.getFormJson();
      data = formData.parseFormData(json);
    }
    return data;
  }
  /**
   * Handles the form submission.
   * @param e
   */
  async handleFormSubmit() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    this.scError.emit({});
    updateFormState('FINALIZE');
    // Get current form state.
    let data = await this.getFormData();
    if (((_a = window === null || window === void 0 ? void 0 : window.scData) === null || _a === void 0 ? void 0 : _a.recaptcha_site_key) && (window === null || window === void 0 ? void 0 : window.grecaptcha)) {
      try {
        data['grecaptcha'] = await window.grecaptcha.execute(window.scData.recaptcha_site_key, { action: 'surecart_checkout_submit' });
      }
      catch (e) {
        console.error(e);
        updateFormState('REJECT');
        this.handleErrorResponse(e);
        return;
      }
    }
    // first lets make sure the session is updated before we process it.
    try {
      await this.update(data);
    }
    catch (e) {
      console.error(e);
      updateFormState('REJECT');
      this.handleErrorResponse(e);
    }
    // first validate server-side and get key
    try {
      watchers.state.checkout = await index$1.finalizeCheckout({
        id: (_b = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _b === void 0 ? void 0 : _b.id,
        query: {
          ...((watchers$1.state === null || watchers$1.state === void 0 ? void 0 : watchers$1.state.method) ? { payment_method_type: watchers$1.state === null || watchers$1.state === void 0 ? void 0 : watchers$1.state.method } : {}),
          return_url: addQueryArgs.addQueryArgs(window.location.href, {
            ...(((_c = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _c === void 0 ? void 0 : _c.id) ? { checkout_id: (_d = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _d === void 0 ? void 0 : _d.id } : {}),
            is_surecart_payment_redirect: true,
          }),
        },
        data,
        processor: {
          id: watchers$1.state.id,
          manual: watchers$1.state.manual,
        },
      });
      // the checkout is paid.
      if (['paid', 'processing'].includes((_e = watchers.state.checkout) === null || _e === void 0 ? void 0 : _e.status)) {
        this.scPaid.emit();
      }
      if ((_j = (_h = (_g = (_f = watchers.state.checkout) === null || _f === void 0 ? void 0 : _f.payment_intent) === null || _g === void 0 ? void 0 : _g.processor_data) === null || _h === void 0 ? void 0 : _h.mollie) === null || _j === void 0 ? void 0 : _j.checkout_url) {
        updateFormState('PAYING');
        return setTimeout(() => { var _a, _b, _c, _d; return window.location.assign((_d = (_c = (_b = (_a = watchers.state.checkout) === null || _a === void 0 ? void 0 : _a.payment_intent) === null || _b === void 0 ? void 0 : _b.processor_data) === null || _c === void 0 ? void 0 : _c.mollie) === null || _d === void 0 ? void 0 : _d.checkout_url); }, 50);
      }
      setTimeout(() => {
        updateFormState('PAYING');
      }, 50);
      return watchers.state.checkout;
    }
    catch (e) {
      console.error(e);
      this.handleErrorResponse(e);
    }
  }
  /**
   * Handle paid event and update the
   */
  async handlePaid() {
    updateFormState('PAID');
  }
  async handlePayError() {
    updateFormState('REJECT');
  }
  async handleAbandonedCartUpdate(e) {
    const abandoned_checkout_enabled = e.detail;
    this.loadUpdate({
      abandoned_checkout_enabled,
    });
  }
  /** Handles coupon updates. */
  async handleCouponApply(e) {
    const promotion_code = e.detail;
    this.scError.emit({});
    this.loadUpdate({
      discount: {
        ...(promotion_code ? { promotion_code } : {}),
      },
    });
  }
  /** Find or create session on load. */
  componentDidLoad() {
    this.findOrCreateOrder();
  }
  /** Find or create an order */
  async findOrCreateOrder() {
    var _a;
    // get URL params.
    const { redirect_status, checkout_id, line_items, coupon, is_surecart_payment_redirect } = addQueryArgs.getQueryArgs(window.location.href);
    // remove params we don't want.
    window.history.replaceState({}, document.title, watchers.removeQueryArgs(window.location.href, 'redirect_status', 'coupon', 'line_items', 'confirm_checkout_id', 'checkout_id'));
    // handle abandoned checkout.
    if (!!is_surecart_payment_redirect && !!checkout_id) {
      updateFormState('FINALIZE');
      updateFormState('PAYING');
      return this.handleCheckoutIdFromUrl(checkout_id, coupon);
    }
    // handle redirect status.
    if (!!redirect_status) {
      return this.handleRedirectStatus(redirect_status, checkout_id);
    }
    // handle abandoned checkout.
    if (!!checkout_id) {
      return this.handleCheckoutIdFromUrl(checkout_id, coupon);
    }
    // handle initial line items.
    if (!!line_items) {
      return this.handleInitialLineItems(line_items, coupon);
    }
    // we have an existing saved checkout id in the session, and we are persisting.
    const id = (_a = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _a === void 0 ? void 0 : _a.id;
    if (id && this.persist) {
      return this.handleExistingCheckout(id, coupon);
    }
    return this.handleNewCheckout(coupon);
  }
  /** Handle payment instrument redirect status */
  async handleRedirectStatus(status, id) {
    var _a, _b;
    console.info('Handling payment redirect.');
    // status failed.
    if (status === 'failed') {
      return this.scError.emit({
        message: wp.i18n.__('Payment unsuccessful. Please try again.', 'surecart'),
      });
    }
    // get the
    if (!id) {
      return this.scError.emit({
        message: wp.i18n.__('Could not find checkout. Please contact us before attempting to purchase again.', 'surecart'),
      });
    }
    // success, refetch the checkout
    try {
      updateFormState('FINALIZE');
      updateFormState('PAID');
      watchers.state.checkout = (await index$1.fetchCheckout({
        id,
        query: {
          refresh_status: true,
        },
      }));
      // TODO: should we even check this?
      if (((_a = watchers.state.checkout) === null || _a === void 0 ? void 0 : _a.status) && ['paid', 'processing'].includes((_b = watchers.state.checkout) === null || _b === void 0 ? void 0 : _b.status)) {
        setTimeout(() => {
          this.scPaid.emit();
        }, 100);
      }
    }
    catch (e) {
      this.handleErrorResponse(e);
    }
  }
  /** Handle abandoned checkout from URL */
  async handleCheckoutIdFromUrl(id, promotion_code = '') {
    var _a;
    console.info('Handling existing checkout from url.', promotion_code, id);
    // if coupon code, load the checkout with the code.
    if (promotion_code) {
      return this.loadUpdate({
        id,
        discount: { promotion_code },
        refresh_price_versions: true,
      });
    }
    try {
      updateFormState('FETCH');
      watchers.state.checkout = (await index$1.fetchCheckout({
        id,
        query: {
          refresh_status: true,
        },
      }));
      updateFormState('RESOLVE');
    }
    catch (e) {
      this.handleErrorResponse(e);
    }
    // handle status.
    switch ((_a = watchers.state.checkout) === null || _a === void 0 ? void 0 : _a.status) {
      case 'paid':
      case 'processing':
        return setTimeout(() => {
          updateFormState('FINALIZE');
          updateFormState('PAID');
          this.scPaid.emit();
        }, 100);
      case 'payment_failed':
        mutations.clearCheckout();
        return this.scError.emit({
          message: wp.i18n.__('Payment unsuccessful. Please try again.', 'surecart'),
        });
      case 'payment_intent_canceled':
      case 'canceled':
        mutations.clearCheckout();
        return this.scError.emit({
          message: wp.i18n.__('Payment canceled. Please try again.', 'surecart'),
        });
      case 'finalized':
        this.scError.emit({
          message: wp.i18n.__('Payment unsuccessful. Please try again.', 'surecart'),
        });
        updateFormState('REJECT');
    }
  }
  /** Handle line items (and maybe ) */
  async handleInitialLineItems(line_items, promotion_code) {
    console.info('Handling initial line items.');
    // TODO: move this to central store.
    const address = this.el.querySelector('sc-order-shipping-address');
    mutations.clearCheckout();
    return this.loadUpdate({
      line_items,
      refresh_price_versions: true,
      ...(promotion_code ? { discount: { promotion_code } } : {}),
      ...((address === null || address === void 0 ? void 0 : address.defaultCountry)
        ? {
          shipping_address: {
            country: address === null || address === void 0 ? void 0 : address.defaultCountry,
          },
        }
        : {}),
    });
  }
  /** Handle a brand new checkout. */
  async handleNewCheckout(promotion_code) {
    console.info('Handling new checkout.');
    // get existing form data from defaults (default country selection, etc).
    const data = this.getFormData();
    const line_items = this.addPriceChoices(this.addInitialPrices() || []);
    const address = this.el.querySelector('sc-order-shipping-address');
    try {
      updateFormState('FETCH');
      watchers.state.checkout = (await index$1.createOrUpdateCheckout({
        data: {
          ...data,
          ...(promotion_code ? { discount: { promotion_code } } : {}),
          ...((address === null || address === void 0 ? void 0 : address.defaultCountry)
            ? {
              shipping_address: {
                country: address === null || address === void 0 ? void 0 : address.defaultCountry,
              },
            }
            : {}),
          line_items,
        },
      }));
      updateFormState('RESOLVE');
    }
    catch (e) {
      console.error(e);
      this.handleErrorResponse(e);
    }
  }
  /** Handle existing checkout */
  async handleExistingCheckout(id, promotion_code) {
    if (!id)
      return this.handleNewCheckout(promotion_code);
    console.info('Handling existing checkout.');
    try {
      updateFormState('FETCH');
      watchers.state.checkout = (await index$1.createOrUpdateCheckout({
        id,
        data: {
          ...(promotion_code ? { discount: { promotion_code } } : {}),
          refresh_price_versions: true,
        },
      }));
      updateFormState('RESOLVE');
    }
    catch (e) {
      console.error(e);
      this.handleErrorResponse(e);
    }
  }
  /** Handle the error response. */
  async handleErrorResponse(e) {
    var _a, _b, _c, _d;
    // reinitalize if order not found.
    if (['checkout.not_found'].includes(e === null || e === void 0 ? void 0 : e.code)) {
      window.history.replaceState({}, document.title, watchers.removeQueryArgs(window.location.href, 'checkout_id'));
      mutations.clearCheckout();
      return this.handleNewCheckout(false);
    }
    if (((_b = (_a = e === null || e === void 0 ? void 0 : e.additional_errors) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.code) === 'order.line_items.old_price_versions') {
      await this.loadUpdate({
        id: (_c = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _c === void 0 ? void 0 : _c.id,
        data: {
          status: 'draft',
          refresh_price_versions: true,
        },
      });
      return;
    }
    if (['order.invalid_status_transition'].includes(e === null || e === void 0 ? void 0 : e.code)) {
      await this.loadUpdate({
        id: (_d = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _d === void 0 ? void 0 : _d.id,
        data: {
          status: 'draft',
        },
      });
      this.handleFormSubmit();
      return;
    }
    // expired
    if ((e === null || e === void 0 ? void 0 : e.code) === 'rest_cookie_invalid_nonce') {
      updateFormState('EXPIRE');
      return;
    }
    // paid
    if ((e === null || e === void 0 ? void 0 : e.code) === 'readonly') {
      mutations.clearCheckout();
      window.location.assign(watchers.removeQueryArgs(window.location.href, 'order'));
      return;
    }
    console.log('emit', e);
    this.scError.emit(e);
    updateFormState('REJECT');
  }
  /** Looks through children and finds items needed for initial session. */
  async initialize(args = {}) {
    let line_items = this.addInitialPrices() || [];
    line_items = this.addPriceChoices(line_items);
    if (line_items === null || line_items === void 0 ? void 0 : line_items.length) {
      return this.loadUpdate({ line_items, ...args });
    }
    else {
      return this.loadUpdate({ ...args });
    }
  }
  /** Add prices that are passed into the component. */
  addInitialPrices() {
    var _a;
    if (!((_a = this === null || this === void 0 ? void 0 : this.prices) === null || _a === void 0 ? void 0 : _a.length))
      return [];
    // check for id
    if (this.prices.some(p => !(p === null || p === void 0 ? void 0 : p.id))) {
      return;
    }
    // add prices that are passed into this component.
    return this.prices.map(price => {
      return {
        price_id: price.id,
        quantity: price.quantity,
      };
    });
  }
  /** Add default prices that may be selected in form. */
  addPriceChoices(line_items = []) {
    const elements = this.el.querySelectorAll('[price-id]');
    elements.forEach(el => {
      // handle price choices.
      if (el.checked) {
        line_items.push({
          quantity: el.quantity || 1,
          price_id: el.priceId,
          ...(el.defaultAmount ? { ad_hoc_amount: el.defaultAmount } : {}),
        });
      }
      // handle donation default amount.
      if (el.defaultAmount) {
        line_items.push({
          quantity: el.quantity || 1,
          price_id: el.priceId,
          ad_hoc_amount: el.defaultAmount,
        });
      }
    });
    return line_items;
  }
  getSessionId() {
    var _a, _b;
    // check url first.
    const checkoutId = getQueryArg.getQueryArg(window.location.href, 'checkout_id');
    if (!!checkoutId) {
      return checkoutId;
    }
    // check existing order.
    if ((_a = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _a === void 0 ? void 0 : _a.id) {
      return (_b = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _b === void 0 ? void 0 : _b.id;
    }
    // we don't have and order id.
    return null;
  }
  async fetchCheckout(id, { query = {}, data = {} } = {}) {
    try {
      updateFormState('FETCH');
      const checkout = (await index$1.createOrUpdateCheckout({
        id,
        query,
        data,
      }));
      updateFormState('RESOLVE');
      return checkout;
    }
    catch (e) {
      this.handleErrorResponse(e);
    }
  }
  /** Fetch a session. */
  async fetch(query = {}) {
    try {
      updateFormState('FETCH');
      watchers.state.checkout = (await index$1.fetchCheckout({
        id: this.getSessionId(),
        query,
      }));
      updateFormState('RESOLVE');
    }
    catch (e) {
      this.handleErrorResponse(e);
    }
  }
  /** Update a session */
  async update(data = {}, query = {}) {
    try {
      watchers.state.checkout = (await index$1.createOrUpdateCheckout({
        id: (data === null || data === void 0 ? void 0 : data.id) ? data.id : this.getSessionId(),
        data,
        query,
      }));
    }
    catch (e) {
      // reinitalize if order not found.
      if (['checkout.not_found'].includes(e === null || e === void 0 ? void 0 : e.code)) {
        mutations.clearCheckout();
        return this.initialize();
      }
      console.error(e);
      throw e;
    }
  }
  /** Updates a session with loading status changes. */
  async loadUpdate(data = {}) {
    try {
      updateFormState('FETCH');
      await this.update(data);
      updateFormState('RESOLVE');
    }
    catch (e) {
      this.handleErrorResponse(e);
    }
  }
  render() {
    return (index.h("sc-line-items-provider", { order: watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout, onScUpdateLineItems: e => this.loadUpdate({ line_items: e.detail }) }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "prices": ["handlePricesChange"]
  }; }
};

exports.sc_checkout_unsaved_changes_warning = ScCheckoutUnsavedChangesWarning;
exports.sc_form_components_validator = ScFormComponentsValidator;
exports.sc_form_error_provider = ScFormErrorProvider;
exports.sc_form_state_provider = ScFormStateProvider;
exports.sc_login_provider = ScLoginProvider;
exports.sc_order_confirm_provider = ScOrderConfirmProvider;
exports.sc_session_provider = ScSessionProvider;

//# sourceMappingURL=sc-checkout-unsaved-changes-warning_7.cjs.entry.js.map