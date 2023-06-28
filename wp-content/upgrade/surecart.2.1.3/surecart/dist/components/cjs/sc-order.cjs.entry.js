'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const fetch = require('./fetch-b673a242.js');
const lazy = require('./lazy-bc8baeab.js');
const price = require('./price-5efc931a.js');
const tax = require('./tax-39abdb3c.js');
const addQueryArgs = require('./add-query-args-17c551b6.js');
require('./currency-2733c607.js');

const scOrderCss = ":host{display:block}.orders-list{display:grid;gap:0.75em}.orders-list__heading{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between}.orders-list__title{font-size:var(--sc-font-size-x-large);font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense)}.orders-list a{text-decoration:none;font-weight:var(--sc-font-weight-semibold);display:inline-flex;align-items:center;gap:0.25em;color:var(--sc-color-primary-500)}.order__row{color:var(--sc-color-gray-800);text-decoration:none;display:grid;align-items:center;justify-content:space-between;gap:0;grid-template-columns:1fr 1fr 1fr auto;margin:0;padding:var(--sc-spacing-small) var(--sc-spacing-large)}.order__row:not(:last-child){border-bottom:1px solid var(--sc-color-gray-200)}.order__row:hover{background:var(--sc-color-gray-50)}.order__date{font-weight:var(--sc-font-weight-semibold)}";

const ScOrder = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.orderId = undefined;
    this.customerIds = undefined;
    this.heading = undefined;
    this.order = undefined;
    this.purchases = undefined;
    this.loading = undefined;
    this.busy = undefined;
    this.error = undefined;
  }
  /** Only fetch if visible */
  componentDidLoad() {
    lazy.onFirstVisible(this.el, () => {
      this.fetchOrder();
      this.fetchDownloads();
    });
  }
  async fetchOrder() {
    try {
      this.loading = true;
      await this.getOrder();
    }
    catch (e) {
      console.error(this.error);
      this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
    }
    finally {
      this.loading = false;
    }
  }
  async fetchDownloads() {
    try {
      this.busy = true;
      this.purchases = (await fetch.apiFetch({
        path: addQueryArgs.addQueryArgs(`surecart/v1/purchases`, {
          expand: ['product', 'product.downloads', 'download.media'],
          order_ids: [this.orderId],
          customer_ids: this.customerIds,
          downloadable: true,
        }),
      }));
    }
    catch (e) {
      console.error(this.error);
      this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
    }
    finally {
      this.busy = false;
    }
  }
  /** Get order */
  async getOrder() {
    this.order = (await fetch.apiFetch({
      path: addQueryArgs.addQueryArgs(`surecart/v1/orders/${this.orderId}`, {
        expand: [
          'checkout',
          'checkout.line_items',
          'line_item.price',
          'price.product',
          'checkout.manual_payment_method',
          'checkout.payment_method',
          'payment_method.card',
          'payment_method.payment_instrument',
          'payment_method.paypal_account',
          'payment_method.bank_account',
        ],
      }),
    }));
  }
  renderLoading() {
    return (index.h("sc-flex", { flexDirection: "column", style: { gap: '1em' } }, index.h("sc-skeleton", { style: { width: '20%', display: 'inline-block' } }), index.h("sc-skeleton", { style: { width: '60%', display: 'inline-block' } }), index.h("sc-skeleton", { style: { width: '40%', display: 'inline-block' } })));
  }
  renderEmpty() {
    return index.h("sc-empty", { icon: "shopping-bag" }, wp.i18n.__('Order not found.', 'surecart'));
  }
  renderContent() {
    var _a, _b, _c;
    if (this.loading) {
      return this.renderLoading();
    }
    if (!((_a = this.order) === null || _a === void 0 ? void 0 : _a.id)) {
      return this.renderEmpty();
    }
    const checkout = (_b = this.order) === null || _b === void 0 ? void 0 : _b.checkout;
    return (index.h(index.Fragment, null, (((_c = checkout === null || checkout === void 0 ? void 0 : checkout.line_items) === null || _c === void 0 ? void 0 : _c.data) || []).map(item => {
      var _a, _b, _c, _d, _e, _f;
      return (index.h("sc-product-line-item", { key: item.id, imageUrl: (_b = (_a = item === null || item === void 0 ? void 0 : item.price) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.image_url, name: (_d = (_c = item === null || item === void 0 ? void 0 : item.price) === null || _c === void 0 ? void 0 : _c.product) === null || _d === void 0 ? void 0 : _d.name, editable: false, removable: false, quantity: item.quantity, amount: item.subtotal_amount, currency: (_e = item === null || item === void 0 ? void 0 : item.price) === null || _e === void 0 ? void 0 : _e.currency, trialDurationDays: (_f = item === null || item === void 0 ? void 0 : item.price) === null || _f === void 0 ? void 0 : _f.trial_duration_days, interval: price.intervalString(item === null || item === void 0 ? void 0 : item.price) }));
    }), index.h("sc-divider", { style: { '--spacing': 'var(--sc-spacing-x-small)' } }), index.h("sc-line-item", null, index.h("span", { slot: "description" }, wp.i18n.__('Subtotal', 'surecart')), index.h("sc-format-number", { slot: "price", style: {
        'font-weight': 'var(--sc-font-weight-semibold)',
        'color': 'var(--sc-color-gray-800)',
      }, type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.subtotal_amount })), !!(checkout === null || checkout === void 0 ? void 0 : checkout.proration_amount) && (index.h("sc-line-item", null, index.h("span", { slot: "description" }, wp.i18n.__('Proration', 'surecart')), index.h("sc-format-number", { slot: "price", style: {
        'font-weight': 'var(--sc-font-weight-semibold)',
        'color': 'var(--sc-color-gray-800)',
      }, type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.proration_amount }))), !!(checkout === null || checkout === void 0 ? void 0 : checkout.applied_balance_amount) && (index.h("sc-line-item", null, index.h("span", { slot: "description" }, wp.i18n.__('Applied Balance', 'surecart')), index.h("sc-format-number", { slot: "price", style: {
        'font-weight': 'var(--sc-font-weight-semibold)',
        'color': 'var(--sc-color-gray-800)',
      }, type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.applied_balance_amount }))), !!(checkout === null || checkout === void 0 ? void 0 : checkout.discounts) && (index.h("sc-line-item", null, index.h("span", { slot: "description" }, wp.i18n.__('Discount', 'surecart')), index.h("sc-format-number", { slot: "price", style: {
        'font-weight': 'var(--sc-font-weight-semibold)',
        'color': 'var(--sc-color-gray-800)',
      }, type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.discounts }))), !!(checkout === null || checkout === void 0 ? void 0 : checkout.tax_amount) && (index.h("sc-line-item", null, index.h("span", { slot: "description" }, tax.formatTaxDisplay(checkout === null || checkout === void 0 ? void 0 : checkout.tax_label)), index.h("sc-format-number", { slot: "price", style: {
        'font-weight': 'var(--sc-font-weight-semibold)',
        'color': 'var(--sc-color-gray-800)',
      }, type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.tax_amount }))), index.h("sc-divider", { style: { '--spacing': 'var(--sc-spacing-x-small)' } }), index.h("sc-line-item", { style: {
        'width': '100%',
        '--price-size': 'var(--sc-font-size-x-large)',
      } }, index.h("span", { slot: "title" }, wp.i18n.__('Total', 'surecart')), index.h("span", { slot: "price" }, index.h("sc-format-number", { type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.amount_due })), index.h("span", { slot: "currency" }, checkout === null || checkout === void 0 ? void 0 : checkout.currency))));
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g;
    const checkout = (_a = this === null || this === void 0 ? void 0 : this.order) === null || _a === void 0 ? void 0 : _a.checkout;
    const manualPaymentMethod = checkout === null || checkout === void 0 ? void 0 : checkout.manual_payment_method;
    return (index.h("sc-spacing", { style: { '--spacing': 'var(--sc-spacing-large)' } }, index.h("sc-dashboard-module", { error: this.error }, index.h("span", { slot: "heading" }, this.loading ? index.h("sc-skeleton", { style: { width: '120px' } }) : `#${(_b = this === null || this === void 0 ? void 0 : this.order) === null || _b === void 0 ? void 0 : _b.number}`), !this.loading && !(checkout === null || checkout === void 0 ? void 0 : checkout.live_mode) && (index.h("sc-tag", { type: "warning", slot: "end" }, wp.i18n.__('Test Mode', 'surecart'))), !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name) && !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions) && (index.h("sc-order-manual-instructions", { manualPaymentTitle: manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name, manualPaymentInstructions: manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions })), index.h("sc-card", { "no-padding": !this.loading }, this.loading ? (this.renderLoading()) : (index.h(index.Fragment, null, index.h("sc-stacked-list", null, index.h("sc-stacked-list-row", { style: { '--columns': '2' } }, index.h("div", null, wp.i18n.__('Order Status', 'surecart')), index.h("sc-order-status-badge", { status: (_c = this === null || this === void 0 ? void 0 : this.order) === null || _c === void 0 ? void 0 : _c.status })), index.h("sc-stacked-list-row", { style: { '--columns': '2' } }, index.h("div", null, wp.i18n.__('Date', 'surecart')), index.h("sc-format-date", { type: "timestamp", date: (_d = this.order) === null || _d === void 0 ? void 0 : _d.created_at, month: "short", day: "numeric", year: "numeric" })), index.h("sc-stacked-list-row", { style: { '--columns': '2' } }, index.h("div", null, wp.i18n.__('Payment Method', 'surecart')), index.h("sc-payment-method", { paymentMethod: checkout === null || checkout === void 0 ? void 0 : checkout.payment_method }))))))), ((_e = this.order) === null || _e === void 0 ? void 0 : _e.statement_url) && (index.h("sc-button", { type: "primary", href: (_f = this.order) === null || _f === void 0 ? void 0 : _f.statement_url, target: "_blank" }, index.h("sc-icon", { name: "inbox", slot: "prefix" }), wp.i18n.__('Download Receipt/Invoice', 'surecart'))), !!((_g = this.purchases) === null || _g === void 0 ? void 0 : _g.length) && index.h("sc-purchase-downloads-list", { heading: wp.i18n.__('Downloads', 'surecart'), purchases: this.purchases })));
  }
  get el() { return index.getElement(this); }
};
ScOrder.style = scOrderCss;

exports.sc_order = ScOrder;

//# sourceMappingURL=sc-order.cjs.entry.js.map