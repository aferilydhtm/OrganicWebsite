import { r as registerInstance, c as createEvent, h, a as getElement } from './index-eabde489.js';
import { p as pure } from './pure-4f52cebf.js';
import { o as openWormhole } from './consumer-6ea6ff59.js';
import { s as state } from './watchers-4d606b62.js';
import { a as addQueryArgs } from './add-query-args-f4c5962b.js';
import './_commonjsHelpers-9943807e.js';
import './index-aabdbcfe.js';

const scStripePaymentElementCss = "sc-stripe-payment-element{display:block}sc-stripe-payment-element [hidden]{display:none}.loader{display:grid;height:128px;gap:2em}.loader__row{display:flex;align-items:flex-start;justify-content:space-between;gap:1em}.loader__details{display:grid;gap:0.5em}";

const ScStripePaymentElement = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scPaid = createEvent(this, "scPaid", 7);
    this.scPayError = createEvent(this, "scPayError", 7);
    this.scSetState = createEvent(this, "scSetState", 7);
    this.stripePaymentIntent = undefined;
    this.order = undefined;
    this.address = undefined;
    this.successUrl = undefined;
    this.formState = undefined;
    this.selectedProcessorId = undefined;
    this.error = undefined;
    this.loaded = false;
    this.confirming = false;
  }
  /** Maybe load the stripe element on load. */
  async componentDidLoad() {
    this.initialize();
  }
  handleUpdatedChange(val, prev) {
    var _a, _b, _c, _d;
    this.error = '';
    // client secret changed, reload the element
    if (((_b = (_a = val === null || val === void 0 ? void 0 : val.processor_data) === null || _a === void 0 ? void 0 : _a.stripe) === null || _b === void 0 ? void 0 : _b.client_secret) !== ((_d = (_c = prev === null || prev === void 0 ? void 0 : prev.processor_data) === null || _c === void 0 ? void 0 : _c.stripe) === null || _d === void 0 ? void 0 : _d.client_secret)) {
      return this.initialize();
    }
    // otherwise, fetch element updates.
    this.elements.fetchUpdates();
  }
  async initialize() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    // we need this data.
    if (!((_c = (_b = (_a = this.stripePaymentIntent) === null || _a === void 0 ? void 0 : _a.processor_data) === null || _b === void 0 ? void 0 : _b.stripe) === null || _c === void 0 ? void 0 : _c.publishable_key) || !((_f = (_e = (_d = this.stripePaymentIntent) === null || _d === void 0 ? void 0 : _d.processor_data) === null || _e === void 0 ? void 0 : _e.stripe) === null || _f === void 0 ? void 0 : _f.account_id))
      return;
    // check if stripe has been initialized
    if (!this.stripe) {
      try {
        this.stripe = await pure.loadStripe((_j = (_h = (_g = this.stripePaymentIntent) === null || _g === void 0 ? void 0 : _g.processor_data) === null || _h === void 0 ? void 0 : _h.stripe) === null || _j === void 0 ? void 0 : _j.publishable_key, {
          stripeAccount: (_m = (_l = (_k = this.stripePaymentIntent) === null || _k === void 0 ? void 0 : _k.processor_data) === null || _l === void 0 ? void 0 : _l.stripe) === null || _m === void 0 ? void 0 : _m.account_id,
        });
      }
      catch (e) {
        this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Stripe could not be loaded', 'surecart');
        // don't continue.
        return;
      }
    }
    // load the element.
    this.loadElement();
  }
  handleUpdateElement() {
    var _a, _b;
    if (!this.element)
      return;
    if (((_a = this.order) === null || _a === void 0 ? void 0 : _a.status) !== 'draft')
      return;
    const { name, email } = this.order;
    const { line_1: line1, line_2: line2, city, state, country, postal_code } = ((_b = this.order) === null || _b === void 0 ? void 0 : _b.shipping_address) || {};
    this.element.update({
      defaultValues: {
        billingDetails: {
          name,
          email,
          address: {
            line1,
            line2,
            city,
            state,
            country,
            postal_code,
          },
        },
      },
      fields: {
        billingDetails: {
          email: 'never',
        },
      },
    });
    this.elements.fetchUpdates();
  }
  /**
   * Watch order status and maybe confirm the order.
   */
  async maybeConfirmOrder(val) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    // must be finalized
    if (val !== 'paying')
      return;
    // this processor is not selected.
    if ((state === null || state === void 0 ? void 0 : state.id) !== 'stripe')
      return;
    // must be a stripe session
    if (((_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.payment_intent) === null || _b === void 0 ? void 0 : _b.processor_type) !== 'stripe')
      return;
    // need an external_type
    if (!((_f = (_e = (_d = (_c = this.order) === null || _c === void 0 ? void 0 : _c.payment_intent) === null || _d === void 0 ? void 0 : _d.processor_data) === null || _e === void 0 ? void 0 : _e.stripe) === null || _f === void 0 ? void 0 : _f.type))
      return;
    // confirm the intent.
    return await this.confirm((_k = (_j = (_h = (_g = this.order) === null || _g === void 0 ? void 0 : _g.payment_intent) === null || _h === void 0 ? void 0 : _h.processor_data) === null || _j === void 0 ? void 0 : _j.stripe) === null || _k === void 0 ? void 0 : _k.type);
  }
  async confirm(type, args = {}) {
    const confirmArgs = {
      elements: this.elements,
      confirmParams: {
        return_url: addQueryArgs(window.location.href, {
          ...(this.order.id ? { checkout_id: this.order.id } : {}),
        }),
        payment_method_data: {
          billing_details: {
            email: this.order.email,
          },
        },
      },
      redirect: 'if_required',
      ...args,
    };
    // prevent possible double-charges
    if (this.confirming)
      return;
    // stripe must be loaded.
    if (!this.stripe)
      return;
    try {
      this.scSetState.emit('PAYING');
      const response = type === 'setup' ? await this.stripe.confirmSetup(confirmArgs) : await this.stripe.confirmPayment(confirmArgs);
      if (response === null || response === void 0 ? void 0 : response.error) {
        this.error = response.error.message;
        throw response.error;
      }
      this.scSetState.emit('PAID');
      // paid
      this.scPaid.emit();
    }
    catch (e) {
      console.error(e);
      this.scPayError.emit(e);
      if (e.message) {
        this.error = e.message;
      }
    }
    finally {
      this.confirming = false;
    }
  }
  loadElement() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    // we need a stripe instance and client secret.
    if (!this.stripe || !((_c = (_b = (_a = this.stripePaymentIntent) === null || _a === void 0 ? void 0 : _a.processor_data) === null || _b === void 0 ? void 0 : _b.stripe) === null || _c === void 0 ? void 0 : _c.client_secret) || !this.container) {
      console.log('do not have stripe or');
      return;
    }
    // get the computed styles.
    const styles = getComputedStyle(this.el);
    // we have what we need, load elements.
    this.elements = this.stripe.elements({
      clientSecret: (_f = (_e = (_d = this.stripePaymentIntent) === null || _d === void 0 ? void 0 : _d.processor_data) === null || _e === void 0 ? void 0 : _e.stripe) === null || _f === void 0 ? void 0 : _f.client_secret,
      appearance: {
        variables: {
          colorPrimary: styles.getPropertyValue('--sc-color-primary-500'),
          colorText: styles.getPropertyValue('--sc-input-label-color'),
          borderRadius: styles.getPropertyValue('--sc-input-border-radius-medium'),
          colorBackground: styles.getPropertyValue('--sc-input-background-color'),
          fontSizeBase: styles.getPropertyValue('--sc-input-font-size-medium'),
          colorLogo: styles.getPropertyValue('--sc-stripe-color-logo'),
          colorLogoTab: styles.getPropertyValue('--sc-stripe-color-logo-tab'),
          colorLogoTabSelected: styles.getPropertyValue('--sc-stripe-color-logo-tab-selected'),
          colorTextPlaceholder: styles.getPropertyValue('--sc-input-placeholder-color'),
        },
        rules: {
          '.Input': {
            border: styles.getPropertyValue('--sc-input-border'),
          },
        },
      },
    });
    const { line_1: line1, line_2: line2, city, state, country, postal_code } = ((_g = this.order) === null || _g === void 0 ? void 0 : _g.shipping_address) || {};
    // create the payment element.
    this.elements
      .create('payment', {
      defaultValues: {
        billingDetails: {
          name: (_h = this.order) === null || _h === void 0 ? void 0 : _h.name,
          email: (_j = this.order) === null || _j === void 0 ? void 0 : _j.email,
          address: {
            line1,
            line2,
            city,
            state,
            country,
            postal_code,
          },
        },
      },
      fields: {
        billingDetails: {
          email: 'never',
        },
      },
    })
      .mount('.sc-payment-element-container');
    this.element = this.elements.getElement('payment');
    this.element.on('ready', () => (this.loaded = true));
  }
  render() {
    return (h("div", { class: "sc-stripe-payment-element", "data-testid": "stripe-payment-element" }, !!this.error && (h("sc-text", { style: {
        'color': 'var(--sc-color-danger-500)',
        '--font-size': 'var(--sc-font-size-small)',
        'marginBottom': '0.5em',
      } }, this.error)), h("div", { class: "loader", hidden: this.loaded }, h("div", { class: "loader__row" }, h("div", { style: { width: '50%' } }, h("sc-skeleton", { style: { width: '50%', marginBottom: '0.5em' } }), h("sc-skeleton", null)), h("div", { style: { flex: '1' } }, h("sc-skeleton", { style: { width: '50%', marginBottom: '0.5em' } }), h("sc-skeleton", null)), h("div", { style: { flex: '1' } }, h("sc-skeleton", { style: { width: '50%', marginBottom: '0.5em' } }), h("sc-skeleton", null))), h("div", { class: "loader__details" }, h("sc-skeleton", { style: { height: '1rem' } }), h("sc-skeleton", { style: { height: '1rem', width: '30%' } }))), h("div", { hidden: !this.loaded, class: "sc-payment-element-container", ref: el => (this.container = el) })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "stripePaymentIntent": ["handleUpdatedChange"],
    "order": ["handleUpdateElement"],
    "error": ["handleUpdateElement"],
    "formState": ["maybeConfirmOrder"]
  }; }
};
openWormhole(ScStripePaymentElement, ['order', 'selectedProcessorId', 'stripePaymentIntent', 'formState'], true);
ScStripePaymentElement.style = scStripePaymentElementCss;

export { ScStripePaymentElement as sc_stripe_payment_element };

//# sourceMappingURL=sc-stripe-payment-element.entry.js.map