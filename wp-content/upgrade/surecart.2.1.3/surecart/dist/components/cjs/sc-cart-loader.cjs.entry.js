'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const watchers = require('./watchers-503cdd2a.js');
const ui = require('./ui-c6cc5556.js');
require('./index-261b56ec.js');
require('./add-query-args-17c551b6.js');

const scCartLoaderCss = ":host{position:absolute;z-index:var(--sc-cart-z-index, 999999);font-family:var(--sc-font-sans)}";

const ScCartLoader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    const order = watchers.getOrder(this.formId, this.mode);
    if ((order === null || order === void 0 ? void 0 : order.status) === 'paid') {
      watchers.clearOrder(this.formId, this.mode);
      return null;
    }
    // return the loader.
    return index.h("div", { innerHTML: ((_b = (_a = order === null || order === void 0 ? void 0 : order.line_items) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.count) || ((_d = (_c = ui.store === null || ui.store === void 0 ? void 0 : ui.store.state) === null || _c === void 0 ? void 0 : _c.cart) === null || _d === void 0 ? void 0 : _d.open) ? this.template : '' });
  }
};
ScCartLoader.style = scCartLoaderCss;

exports.sc_cart_loader = ScCartLoader;

//# sourceMappingURL=sc-cart-loader.cjs.entry.js.map