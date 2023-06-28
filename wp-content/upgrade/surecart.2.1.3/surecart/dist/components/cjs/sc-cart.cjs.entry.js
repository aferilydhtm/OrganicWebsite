'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const fetch = require('./fetch-b673a242.js');
const universe = require('./universe-874f42bb.js');
const index$1 = require('./index-b901844d.js');
const watchers = require('./watchers-503cdd2a.js');
const ui = require('./ui-c6cc5556.js');
const addQueryArgs = require('./add-query-args-17c551b6.js');
require('./watchers-bce289f5.js');
require('./watchers-437b71fb.js');
require('./index-261b56ec.js');
require('./getters-f0455d23.js');
require('./util-872b1a55.js');
require('./get-query-arg-53bf21e2.js');

const scCartCss = ":host{--sc-drawer-header-spacing:var(--sc-spacing-large);--sc-drawer-body-spacing:var(--sc-spacing-large);--sc-drawer-footer-spacing:var(--sc-spacing-large)}.cart{font-size:16px}.cart__header{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1em}.cart__close{opacity:0.75;transition:opacity 0.25s ease;cursor:pointer}.cart__close:hover{opacity:1}::slotted(*){padding:var(--sc-drawer-header-spacing);background:var(--sc-panel-background-color);position:relative}::slotted(sc-line-items){flex:1 1 auto;overflow:auto;-webkit-overflow-scrolling:touch;min-height:200px}::slotted(:last-child){border-bottom:0 !important}sc-drawer::part(body){display:flex;flex-direction:column;box-sizing:border-box;padding:0;overflow:hidden}";

const ScCart = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.open = null;
    this.formId = undefined;
    this.header = undefined;
    this.checkoutLink = undefined;
    this.cartTemplate = undefined;
    this.mode = 'live';
    this.checkoutUrl = undefined;
    this.alwaysShow = undefined;
    this.floatingIconEnabled = true;
    this.uiState = 'idle';
    this.error = undefined;
  }
  handleOpenChange() {
    ui.store.set('cart', { ...ui.store.state.cart, ...{ open: this.open } });
    if (this.open === true) {
      this.fetchOrder();
    }
  }
  order() {
    return watchers.getOrder(this.formId, this.mode);
  }
  setOrder(data) {
    watchers.setOrder(data, this.formId);
  }
  /**
   * Search for the sc-checkout component on a page to make sure
   * we don't show the cart on a checkout page.
   */
  pageHasForm() {
    return !!document.querySelector('sc-checkout');
  }
  /** Count the number of items in the cart. */
  getItemsCount() {
    var _a, _b;
    const items = (_b = (_a = this.order()) === null || _a === void 0 ? void 0 : _a.line_items) === null || _b === void 0 ? void 0 : _b.data;
    let count = 0;
    (items || []).forEach(item => {
      count = count + (item === null || item === void 0 ? void 0 : item.quantity);
    });
    return count;
  }
  handleSetState(e) {
    this.uiState = e.detail;
  }
  /** Listen for error events in component. */
  handleErrorEvent(e) {
    this.error = e.detail;
    this.uiState = 'idle';
  }
  handleCloseCart() {
    this.open = false;
  }
  /** Fetch the order */
  async fetchOrder() {
    var _a;
    try {
      this.uiState = 'loading';
      const order = (await fetch.apiFetch({
        method: 'GET',
        path: addQueryArgs.addQueryArgs(`${index$1.baseUrl}${(_a = this.order()) === null || _a === void 0 ? void 0 : _a.id}`, {
          expand: index$1.expand,
        }),
      }));
      this.setOrder(order);
    }
    catch (e) {
      console.error(e);
      throw e;
    }
    finally {
      this.uiState = 'idle';
    }
  }
  componentWillLoad() {
    universe.Universe.create(this, this.state());
    this.open = !!ui.store.state.cart.open;
    ui.store.onChange('cart', cart => {
      this.open = cart.open;
    });
    watchers.state.mode = this.mode;
  }
  state() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return {
      processor_data: (_a = this.order()) === null || _a === void 0 ? void 0 : _a.processor_data,
      uiState: this.uiState,
      checkoutLink: this.checkoutLink,
      loading: this.uiState === 'loading',
      busy: this.uiState === 'busy',
      navigating: this.uiState === 'navigating',
      empty: !((_d = (_c = (_b = this.order()) === null || _b === void 0 ? void 0 : _b.line_items) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.count),
      error: this.error,
      order: this.order(),
      lineItems: ((_f = (_e = this.order()) === null || _e === void 0 ? void 0 : _e.line_items) === null || _f === void 0 ? void 0 : _f.data) || [],
      tax_status: (_g = this.order()) === null || _g === void 0 ? void 0 : _g.tax_status,
      customerShippingAddress: typeof ((_h = this.order()) === null || _h === void 0 ? void 0 : _h.customer) !== 'string' ? (_k = (_j = this.order()) === null || _j === void 0 ? void 0 : _j.customer) === null || _k === void 0 ? void 0 : _k.shipping_address : {},
      shippingAddress: (_l = this.order()) === null || _l === void 0 ? void 0 : _l.shipping_address,
      taxStatus: (_m = this.order()) === null || _m === void 0 ? void 0 : _m.tax_status,
      formId: this.formId,
    };
  }
  render() {
    return (index.h(index.Fragment, null, this.order() && (index.h(universe.Universe.Provider, { state: this.state() }, index.h("sc-cart-session-provider", { order: this.order(), "form-id": this.formId, "group-id": this.formId, onScUpdateOrderState: e => this.setOrder(e.detail), onScError: e => (this.error = e.detail) }, index.h("sc-drawer", { open: this.open, onScAfterHide: () => (this.open = false), onScAfterShow: () => (this.open = true) }, this.open === true && (index.h(index.Fragment, null, index.h("div", { class: "cart__header-suffix", slot: "header" }, index.h("slot", { name: "cart-header" }), index.h("sc-error", { style: { '--sc-alert-border-radius': '0' }, slot: "header", error: this.error, onScUpdateError: e => (this.error = e.detail) })), index.h("slot", null))), this.uiState === 'busy' && index.h("sc-block-ui", { "z-index": 9 })))))));
  }
  static get watchers() { return {
    "open": ["handleOpenChange"]
  }; }
};
ScCart.style = scCartCss;

exports.sc_cart = ScCart;

//# sourceMappingURL=sc-cart.cjs.entry.js.map