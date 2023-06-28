import { r as registerInstance, h, F as Fragment } from './index-eabde489.js';
import { a as apiFetch } from './fetch-34712ac6.js';
import { U as Universe } from './universe-3fa8aba0.js';
import { b as baseUrl, e as expand } from './index-813122a4.js';
import { g as getOrder, s as setOrder, a as state } from './watchers-9ca21ceb.js';
import { s as store } from './ui-92b56372.js';
import { a as addQueryArgs } from './add-query-args-f4c5962b.js';
import './watchers-9fc91d25.js';
import './watchers-4d606b62.js';
import './index-aabdbcfe.js';
import './getters-7ea74c9e.js';
import './util-c1d762c0.js';
import './get-query-arg-cb6b8763.js';

const scCartCss = ":host{--sc-drawer-header-spacing:var(--sc-spacing-large);--sc-drawer-body-spacing:var(--sc-spacing-large);--sc-drawer-footer-spacing:var(--sc-spacing-large)}.cart{font-size:16px}.cart__header{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1em}.cart__close{opacity:0.75;transition:opacity 0.25s ease;cursor:pointer}.cart__close:hover{opacity:1}::slotted(*){padding:var(--sc-drawer-header-spacing);background:var(--sc-panel-background-color);position:relative}::slotted(sc-line-items){flex:1 1 auto;overflow:auto;-webkit-overflow-scrolling:touch;min-height:200px}::slotted(:last-child){border-bottom:0 !important}sc-drawer::part(body){display:flex;flex-direction:column;box-sizing:border-box;padding:0;overflow:hidden}";

const ScCart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    store.set('cart', { ...store.state.cart, ...{ open: this.open } });
    if (this.open === true) {
      this.fetchOrder();
    }
  }
  order() {
    return getOrder(this.formId, this.mode);
  }
  setOrder(data) {
    setOrder(data, this.formId);
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
      const order = (await apiFetch({
        method: 'GET',
        path: addQueryArgs(`${baseUrl}${(_a = this.order()) === null || _a === void 0 ? void 0 : _a.id}`, {
          expand,
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
    Universe.create(this, this.state());
    this.open = !!store.state.cart.open;
    store.onChange('cart', cart => {
      this.open = cart.open;
    });
    state.mode = this.mode;
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
    return (h(Fragment, null, this.order() && (h(Universe.Provider, { state: this.state() }, h("sc-cart-session-provider", { order: this.order(), "form-id": this.formId, "group-id": this.formId, onScUpdateOrderState: e => this.setOrder(e.detail), onScError: e => (this.error = e.detail) }, h("sc-drawer", { open: this.open, onScAfterHide: () => (this.open = false), onScAfterShow: () => (this.open = true) }, this.open === true && (h(Fragment, null, h("div", { class: "cart__header-suffix", slot: "header" }, h("slot", { name: "cart-header" }), h("sc-error", { style: { '--sc-alert-border-radius': '0' }, slot: "header", error: this.error, onScUpdateError: e => (this.error = e.detail) })), h("slot", null))), this.uiState === 'busy' && h("sc-block-ui", { "z-index": 9 })))))));
  }
  static get watchers() { return {
    "open": ["handleOpenChange"]
  }; }
};
ScCart.style = scCartCss;

export { ScCart as sc_cart };

//# sourceMappingURL=sc-cart.entry.js.map