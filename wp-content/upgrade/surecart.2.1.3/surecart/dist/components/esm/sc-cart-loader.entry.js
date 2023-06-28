import { r as registerInstance, h } from './index-eabde489.js';
import { g as getOrder, d as clearOrder } from './watchers-9ca21ceb.js';
import { s as store } from './ui-92b56372.js';
import './index-aabdbcfe.js';
import './add-query-args-f4c5962b.js';

const scCartLoaderCss = ":host{position:absolute;z-index:var(--sc-cart-z-index, 999999);font-family:var(--sc-font-sans)}";

const ScCartLoader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.formId = undefined;
    this.mode = 'live';
    this.template = undefined;
  }
  render() {
    var _a, _b, _c, _d;
    // check for forms.
    if (document.querySelector('sc-checkout')) {
      return;
    }
    // clear the order if it's already paid.
    const order = getOrder(this.formId, this.mode);
    if ((order === null || order === void 0 ? void 0 : order.status) === 'paid') {
      clearOrder(this.formId, this.mode);
      return null;
    }
    // return the loader.
    return h("div", { innerHTML: ((_b = (_a = order === null || order === void 0 ? void 0 : order.line_items) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.count) || ((_d = (_c = store === null || store === void 0 ? void 0 : store.state) === null || _c === void 0 ? void 0 : _c.cart) === null || _d === void 0 ? void 0 : _d.open) ? this.template : '' });
  }
};
ScCartLoader.style = scCartLoaderCss;

export { ScCartLoader as sc_cart_loader };

//# sourceMappingURL=sc-cart-loader.entry.js.map