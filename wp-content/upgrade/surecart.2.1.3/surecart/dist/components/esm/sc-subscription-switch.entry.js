import { r as registerInstance, h, F as Fragment, a as getElement } from './index-eabde489.js';
import { a as apiFetch } from './fetch-34712ac6.js';
import { o as onFirstVisible } from './lazy-64c2bf3b.js';
import { i as intervalString } from './price-ad16bb2d.js';
import { a as addQueryArgs } from './add-query-args-f4c5962b.js';
import './currency-4692aeb2.js';

const scSubscriptionSwitchCss = ":host{display:block;position:relative}[hidden]{display:none !important}.subscriptions-switch{display:grid;gap:0.5em}.subscriptions-switch__switcher{background:rgba(0, 0, 0, 0.035);padding:2px;line-height:1;border-radius:var(--sc-border-radius-small)}";

const ScSubscriptionSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.query = undefined;
    this.heading = undefined;
    this.productGroupId = undefined;
    this.productId = undefined;
    this.subscription = undefined;
    this.filterAbove = 4;
    this.selectedPrice = undefined;
    this.products = [];
    this.prices = undefined;
    this.filter = 'month';
    this.hasFilters = undefined;
    this.showFilters = undefined;
    this.loading = undefined;
    this.busy = undefined;
    this.error = undefined;
  }
  componentWillLoad() {
    onFirstVisible(this.el, async () => {
      try {
        this.loading = true;
        await Promise.all([this.getGroup(), this.getProductPrices()]);
      }
      catch (e) {
        console.error(e);
        if (e === null || e === void 0 ? void 0 : e.message) {
          this.error = e.message;
        }
        else {
          this.error = wp.i18n.__('Something went wrong', 'surecart');
        }
      }
      finally {
        this.loading = false;
      }
    });
    this.handleSubscriptionChange();
  }
  handleProductsChange() {
    var _a;
    this.prices = this.products
      .map(product => { var _a; return (_a = product === null || product === void 0 ? void 0 : product.prices) === null || _a === void 0 ? void 0 : _a.data; })
      .flat()
      .filter((v, i, a) => a.findIndex(t => t.id === v.id) === i) // remove duplicates.
      .filter(price => !(price === null || price === void 0 ? void 0 : price.archived)); // remove archived
    this.showFilters = ((_a = this.prices) === null || _a === void 0 ? void 0 : _a.length) > this.filterAbove;
  }
  handlePricesChange(val, prev) {
    if (!(prev === null || prev === void 0 ? void 0 : prev.length) && (val === null || val === void 0 ? void 0 : val.length)) {
      this.selectedPrice = val.find(price => { var _a, _b; return price.id === ((_b = (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.price) === null || _b === void 0 ? void 0 : _b.id); });
    }
    this.hasFilters = {
      ...this.hasFilters,
      split: this.prices.some(price => price.recurring_interval === 'month' && (price === null || price === void 0 ? void 0 : price.recurring_period_count) && !(price === null || price === void 0 ? void 0 : price.archived)),
      month: this.prices.some(price => price.recurring_interval === 'month' && !(price === null || price === void 0 ? void 0 : price.recurring_period_count) && !(price === null || price === void 0 ? void 0 : price.archived)),
      year: this.prices.some(price => price.recurring_interval === 'year' && !(price === null || price === void 0 ? void 0 : price.archived)),
      never: this.prices.some(price => (price.recurring_interval === 'never' || !price.recurring_interval) && !(price === null || price === void 0 ? void 0 : price.archived)),
    };
  }
  handleSubscriptionChange() {
    var _a, _b;
    this.filter = ((_b = (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.price) === null || _b === void 0 ? void 0 : _b.recurring_interval) || 'month';
  }
  /** Get all subscriptions */
  async getGroup() {
    if (!this.productGroupId)
      return;
    const products = (await await apiFetch({
      path: addQueryArgs(`surecart/v1/products/`, {
        product_group_ids: [this.productGroupId],
        expand: ['prices'],
        ...this.query,
      }),
    }));
    this.products = [...this.products, ...products];
  }
  /** Get the product's prices. */
  async getProductPrices() {
    if (!this.productId)
      return;
    const product = (await await apiFetch({
      path: addQueryArgs(`surecart/v1/products/${this.productId}`, {
        expand: ['prices'],
      }),
    }));
    this.products = [...this.products, ...[product]];
  }
  async handleSubmit(e) {
    var _a;
    const { plan } = await e.target.getFormJson();
    const price = this.prices.find(p => p.id === plan);
    const currentPlan = (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.price;
    if ((price === null || price === void 0 ? void 0 : price.id) === currentPlan.id && !(price === null || price === void 0 ? void 0 : price.ad_hoc))
      return;
    // confirm ad_hoc amount.
    if (price === null || price === void 0 ? void 0 : price.ad_hoc) {
      this.busy = true;
      return window.location.assign(addQueryArgs(window.location.href, {
        action: 'confirm_amount',
        price_id: plan,
      }));
    }
    // confirm plan.
    this.busy = true;
    window.location.assign(addQueryArgs(window.location.href, {
      action: 'confirm',
      price_id: plan,
    }));
  }
  renderSwitcher() {
    const hasMultipleFilters = Object.values(this.hasFilters || {}).filter(v => !!v).length > 1;
    if (!hasMultipleFilters)
      return;
    if (!this.showFilters)
      return;
    return (h("sc-flex", { slot: "end", class: "subscriptions-switch__switcher" }, this.hasFilters.month && (h("sc-button", { onClick: () => (this.filter = 'month'), size: "small", type: this.filter === 'month' ? 'default' : 'text' }, wp.i18n.__('Monthly', 'surecart'))), this.hasFilters.week && (h("sc-button", { onClick: () => (this.filter = 'week'), size: "small", type: this.filter === 'week' ? 'default' : 'text' }, wp.i18n.__('Weekly', 'surecart'))), this.hasFilters.year && (h("sc-button", { onClick: () => (this.filter = 'year'), size: "small", type: this.filter === 'year' ? 'default' : 'text' }, wp.i18n.__('Yearly', 'surecart'))), this.hasFilters.never && (h("sc-button", { onClick: () => (this.filter = 'never'), size: "small", type: this.filter === 'never' ? 'default' : 'text' }, wp.i18n.__('Lifetime', 'surecart'))), this.hasFilters.split && (h("sc-button", { onClick: () => (this.filter = 'split'), size: "small", type: this.filter === 'split' ? 'default' : 'text' }, wp.i18n.__('Payment Plan', 'surecart')))));
  }
  renderLoading() {
    return (h("sc-choice", { name: "loading", disabled: true }, h("sc-skeleton", { style: { width: '60px', display: 'inline-block' } }), h("sc-skeleton", { style: { width: '80px', display: 'inline-block' }, slot: "price" }), h("sc-skeleton", { style: { width: '120px', display: 'inline-block' }, slot: "description" })));
  }
  /** Is the price hidden or not */
  isHidden(price) {
    // don't hide if no filters.
    if (!this.showFilters)
      return false;
    // hide if the filter does not match the recurring interval.
    let hidden = this.filter !== price.recurring_interval;
    // if filter is never, show prices with non-recurring interval.
    if (this.filter === 'never' && !(price === null || price === void 0 ? void 0 : price.recurring_interval)) {
      hidden = false;
    }
    // if filter is split, show prices with a recurring_period_count.
    if (this.filter === 'split' && (price === null || price === void 0 ? void 0 : price.recurring_period_count)) {
      hidden = false;
    }
    return hidden;
  }
  renderContent() {
    if (this.loading) {
      return this.renderLoading();
    }
    return (h("sc-choices", { required: true }, h("div", null, (this.prices || [])
      .filter(price => !price.archived)
      .filter(price => { var _a; return (price === null || price === void 0 ? void 0 : price.currency) === ((_a = this.subscription) === null || _a === void 0 ? void 0 : _a.currency); })
      .map(price => {
      var _a, _b;
      const currentPlan = ((_b = (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.price) === null || _b === void 0 ? void 0 : _b.id) === (price === null || price === void 0 ? void 0 : price.id);
      const product = this.products.find(product => product.id === (price === null || price === void 0 ? void 0 : price.product));
      return (h("sc-choice", { key: price === null || price === void 0 ? void 0 : price.id, checked: currentPlan, name: "plan", value: price === null || price === void 0 ? void 0 : price.id, hidden: this.isHidden(price), onScChange: e => {
          if (e.detail) {
            this.selectedPrice = this.prices.find(p => p.id === (price === null || price === void 0 ? void 0 : price.id));
          }
        } }, h("div", null, h("strong", null, (price === null || price === void 0 ? void 0 : price.name) || (product === null || product === void 0 ? void 0 : product.name))), h("div", { slot: "description" }, (price === null || price === void 0 ? void 0 : price.ad_hoc) ? (`${wp.i18n.__('Custom amount', 'surecart')} ${intervalString(price)}`) : (h(Fragment, null, h("sc-format-number", { type: "currency", currency: (price === null || price === void 0 ? void 0 : price.currency) || 'usd', value: price === null || price === void 0 ? void 0 : price.amount }), " ", intervalString(price, { showOnce: true })))), currentPlan && (h("sc-tag", { type: "warning", slot: "price" }, wp.i18n.__('Current Plan', 'surecart')))));
    }))));
  }
  buttonText() {
    var _a, _b, _c, _d;
    if ((_a = this.selectedPrice) === null || _a === void 0 ? void 0 : _a.ad_hoc) {
      if (((_b = this.selectedPrice) === null || _b === void 0 ? void 0 : _b.id) === ((_d = (_c = this.subscription) === null || _c === void 0 ? void 0 : _c.price) === null || _d === void 0 ? void 0 : _d.id)) {
        return wp.i18n.__('Update Amount', 'surecart');
      }
      else {
        return wp.i18n.__('Choose Amount', 'surecart');
      }
    }
    return wp.i18n.__('Next', 'surecart');
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    // we are not loading and we don't have enough prices to switch.
    if (!this.loading && ((_a = this.prices) === null || _a === void 0 ? void 0 : _a.length) < 2) {
      if (!((_c = (_b = this.prices) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.ad_hoc)) {
        return null;
      }
    }
    // subscription is a payment plan.
    if ((_d = this.subscription) === null || _d === void 0 ? void 0 : _d.finite) {
      return (h("sc-alert", { type: "info", open: true }, wp.i18n.__('To make changes to your payment plan, please contact us.', 'surecart')));
    }
    return (h("sc-dashboard-module", { heading: this.heading || wp.i18n.__('Update Plan', 'surecart'), class: "subscription-switch", error: this.error }, h("span", { slot: "end" }, this.renderSwitcher()), h("sc-form", { class: "subscriptions-switch", onScFormSubmit: e => this.handleSubmit(e) }, this.renderContent(), h("sc-button", { type: "primary", full: true, submit: true, loading: this.loading || this.busy, disabled: ((_f = (_e = this.subscription) === null || _e === void 0 ? void 0 : _e.price) === null || _f === void 0 ? void 0 : _f.id) === ((_g = this.selectedPrice) === null || _g === void 0 ? void 0 : _g.id) && !((_h = this.selectedPrice) === null || _h === void 0 ? void 0 : _h.ad_hoc) }, this.buttonText(), " ", h("sc-icon", { name: "arrow-right", slot: "suffix" })), this.busy && h("sc-block-ui", { style: { zIndex: '9' } }))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "products": ["handleProductsChange"],
    "prices": ["handlePricesChange"],
    "subscription": ["handleSubscriptionChange"]
  }; }
};
ScSubscriptionSwitch.style = scSubscriptionSwitchCss;

export { ScSubscriptionSwitch as sc_subscription_switch };

//# sourceMappingURL=sc-subscription-switch.entry.js.map