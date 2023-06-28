'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const index$1 = require('./index-b901844d.js');
const util = require('./util-872b1a55.js');
const store = require('./store-a92c3e74.js');
const watchers = require('./watchers-503cdd2a.js');
require('./watchers-bce289f5.js');
require('./watchers-437b71fb.js');
require('./index-261b56ec.js');
require('./getters-f0455d23.js');
require('./fetch-b673a242.js');
require('./add-query-args-17c551b6.js');
require('./get-query-arg-53bf21e2.js');

const scCustomerEmailCss = ":host{display:block}a{color:var(--sc-color-primary-500)}a.customer-email__login-link{color:var(--sc-customer-login-link-color, var(--sc-input-placeholder-color));text-decoration:none;font-size:var(--sc-font-size-small)}.tracking-confirmation-message{font-size:var(--sc-font-size-xx-small)}.tracking-confirmation-message span{opacity:0.75}";

const ScCustomerEmail = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scChange = index.createEvent(this, "scChange", 7);
    this.scClear = index.createEvent(this, "scClear", 7);
    this.scInput = index.createEvent(this, "scInput", 7);
    this.scFocus = index.createEvent(this, "scFocus", 7);
    this.scBlur = index.createEvent(this, "scBlur", 7);
    this.scUpdateOrderState = index.createEvent(this, "scUpdateOrderState", 7);
    this.scUpdateAbandonedCart = index.createEvent(this, "scUpdateAbandonedCart", 7);
    this.scLoginPrompt = index.createEvent(this, "scLoginPrompt", 7);
    this.trackingConfirmationMessage = undefined;
    this.size = 'medium';
    this.value = util.getValueFromUrl('email');
    this.pill = false;
    this.label = undefined;
    this.showLabel = true;
    this.help = '';
    this.placeholder = undefined;
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.invalid = false;
    this.autofocus = undefined;
    this.hasFocus = undefined;
  }
  async handleChange() {
    this.value = this.input.value;
    this.scChange.emit();
    try {
      watchers.state.checkout = (await index$1.createOrUpdateCheckout({ id: watchers.state.checkout.id, data: { email: this.input.value } }));
    }
    catch (error) {
      console.log(error);
    }
  }
  async reportValidity() {
    var _a, _b;
    return (_b = (_a = this.input) === null || _a === void 0 ? void 0 : _a.reportValidity) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  /** Sync customer email with session if it's updated by other means */
  handleSessionChange() {
    var _a, _b, _c, _d, _e, _f;
    // we already have a value and we are not yet logged in.
    if (this.value && !store.state.loggedIn)
      return;
    // we are logged in already.
    if (store.state.loggedIn) {
      // get email from user state fist.
      this.value = store.state.email || ((_b = (_a = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _a === void 0 ? void 0 : _a.customer) === null || _b === void 0 ? void 0 : _b.email) || ((_c = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _c === void 0 ? void 0 : _c.email);
      return;
    }
    const fromUrl = util.getValueFromUrl('email');
    if (!store.state.loggedIn && !!fromUrl) {
      this.value = fromUrl;
      return;
    }
    this.value = ((_d = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _d === void 0 ? void 0 : _d.email) || ((_f = (_e = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _e === void 0 ? void 0 : _e.customer) === null || _f === void 0 ? void 0 : _f.email);
  }
  /** Listen to checkout. */
  componentWillLoad() {
    this.handleSessionChange();
    this.removeCheckoutListener = watchers.onChange('checkout', () => this.handleSessionChange());
  }
  /** Remove listener. */
  disconnectedCallback() {
    this.removeCheckoutListener();
  }
  renderOptIn() {
    if (!this.trackingConfirmationMessage)
      return null;
    if (watchers.state.abandonedCheckoutEnabled !== false) {
      return (index.h("div", { class: "tracking-confirmation-message" }, index.h("span", null, this.trackingConfirmationMessage), ' ', index.h("a", { href: "#", onClick: e => {
          e.preventDefault();
          this.scUpdateAbandonedCart.emit(false);
        } }, wp.i18n.__('No Thanks', 'surecart'))));
    }
    return (index.h("div", { class: "tracking-confirmation-message" }, index.h("span", null, " ", wp.i18n.__("You won't receive further emails from us.", 'surecart'))));
  }
  render() {
    var _a;
    return (index.h(index.Host, null, index.h("sc-input", { exportparts: "base, input, form-control, label, help-text, prefix, suffix", type: "email", name: "email", ref: el => (this.input = el), value: this.value, help: this.help, label: this.label, autocomplete: 'email', placeholder: this.placeholder, disabled: !!store.state.loggedIn && !!((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) && !this.invalid, readonly: this.readonly, required: true, invalid: this.invalid, autofocus: this.autofocus, hasFocus: this.hasFocus, onScChange: () => this.handleChange(), onScInput: () => this.scInput.emit(), onScFocus: () => this.scFocus.emit(), onScBlur: () => this.scBlur.emit() }), this.renderOptIn()));
  }
};
ScCustomerEmail.style = scCustomerEmailCss;

exports.sc_customer_email = ScCustomerEmail;

//# sourceMappingURL=sc-customer-email.cjs.entry.js.map