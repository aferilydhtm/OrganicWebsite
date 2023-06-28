'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const util = require('./util-872b1a55.js');
const store = require('./store-a92c3e74.js');
const watchers = require('./watchers-503cdd2a.js');
const index$1 = require('./index-b901844d.js');
require('./index-261b56ec.js');
require('./add-query-args-17c551b6.js');
require('./watchers-bce289f5.js');
require('./watchers-437b71fb.js');
require('./getters-f0455d23.js');
require('./fetch-b673a242.js');
require('./get-query-arg-53bf21e2.js');

const scCustomerFirstnameCss = ":host{display:block}";

const ScCustomerFirstname = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scChange = index.createEvent(this, "scChange", 7);
    this.scUpdateOrderState = index.createEvent(this, "scUpdateOrderState", 7);
    this.scClear = index.createEvent(this, "scClear", 7);
    this.scInput = index.createEvent(this, "scInput", 7);
    this.scFocus = index.createEvent(this, "scFocus", 7);
    this.scBlur = index.createEvent(this, "scBlur", 7);
    this.scUpdateCustomer = index.createEvent(this, "scUpdateCustomer", 7);
    this.loggedIn = undefined;
    this.size = 'medium';
    this.value = util.getValueFromUrl('first_name');
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
  async reportValidity() {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!this.required) {
      return await ((_b = (_a = this.input) === null || _a === void 0 ? void 0 : _a.reportValidity) === null || _b === void 0 ? void 0 : _b.call(_a));
    }
    (_d = (_c = this.input) === null || _c === void 0 ? void 0 : _c.setCustomValidity) === null || _d === void 0 ? void 0 : _d.call(_c, '');
    if (!((_e = this.input) === null || _e === void 0 ? void 0 : _e.value.trim().length)) {
      this.input.setCustomValidity(wp.i18n.__('Field must not be empty.', 'surecart'));
    }
    const valid = await ((_g = (_f = this.input) === null || _f === void 0 ? void 0 : _f.reportValidity) === null || _g === void 0 ? void 0 : _g.call(_f));
    if (!valid) {
      return false;
    }
    return valid;
  }
  /** Silently update the checkout when the input changes. */
  async handleChange() {
    this.value = this.input.value;
    try {
      watchers.state.checkout = (await index$1.createOrUpdateCheckout({ id: watchers.state.checkout.id, data: { first_name: this.input.value } }));
    }
    catch (error) {
      console.error(error);
    }
  }
  /** Sync customer first name with session if it's updated by other means */
  handleSessionChange() {
    var _a, _b, _c, _d, _e, _f;
    //return if we already have a value
    if (this.value)
      return;
    const fromUrl = util.getValueFromUrl('first_name');
    if (!store.state.loggedIn && !!fromUrl) {
      this.value = fromUrl;
      return;
    }
    if (!store.state.loggedIn) {
      this.value = ((_b = (_a = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _a === void 0 ? void 0 : _a.customer) === null || _b === void 0 ? void 0 : _b.first_name) || ((_c = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _c === void 0 ? void 0 : _c.first_name);
    }
    else {
      this.value = ((_d = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _d === void 0 ? void 0 : _d.first_name) || ((_f = (_e = watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.checkout) === null || _e === void 0 ? void 0 : _e.customer) === null || _f === void 0 ? void 0 : _f.first_name);
    }
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
  render() {
    return (index.h("sc-input", { type: "text", name: "first_name", ref: el => (this.input = el), value: this.value, label: this.label, help: this.help, autocomplete: "first_name", placeholder: this.placeholder, readonly: this.readonly, required: this.required, invalid: this.invalid, autofocus: this.autofocus, hasFocus: this.hasFocus, onScChange: () => this.handleChange(), onScInput: () => this.scInput.emit(), onScFocus: () => this.scFocus.emit(), onScBlur: () => this.scBlur.emit() }));
  }
};
ScCustomerFirstname.style = scCustomerFirstnameCss;

exports.sc_customer_firstname = ScCustomerFirstname;

//# sourceMappingURL=sc-customer-firstname.cjs.entry.js.map