'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const watchers = require('./watchers-503cdd2a.js');
const ui = require('./ui-c6cc5556.js');
require('./index-261b56ec.js');
require('./add-query-args-17c551b6.js');

const scCartIconCss = ":host{display:block}.cart{position:fixed;bottom:var(--sc-cart-icon-bottom, 30px);right:var(--sc-cart-icon-right, 30px);left:var(--sc-cart-icon-left, auto);top:var(--sc-cart-icon-top, auto);background:var(--sc-cart-icon-background, var(--sc-color-primary-500));border-radius:var(--sc-cart-icon-border-radius, var(--sc-input-border-radius-medium));width:var(--sc-cart-icon-width, 60px);height:var(--sc-cart-icon-height, 60px);color:var(--sc-cart-icon-color, var(--sc-color-primary-text, var(--sc-color-white)));font-family:var(--sc-cart-font-family, var(--sc-input-font-family));font-weight:var(--sc-font-weight-semibold);transition:opacity var(--sc-transition-medium) ease;box-shadow:var(--sc-shadow-small);cursor:pointer}.cart:hover{opacity:0.8}.cart__container{font-size:24px;position:relative;display:flex;align-items:center;justify-content:center;text-align:center;height:100%}.cart__counter{position:absolute;top:-8px;left:auto;bottom:auto;right:-8px;font-size:12px;border-radius:var(--sc-cart-counter-border-radius, 9999px);color:var(--sc-cart-counter-color, var(--sc-color-white));background:var(--sc-cart-counter-background, var(--sc-color-gray-900));box-shadow:var(--sc-cart-icon-box-shadow, var(--sc-shadow-x-large));padding:4px 10px;line-height:18px;z-index:1}";

const ScCartIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.icon = 'shopping-bag';
    this.count = 0;
    this.formId = undefined;
    this.mode = 'live';
  }
  order() {
    return watchers.getOrder(this.formId, this.mode);
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
  render() {
    if (!this.order()) {
      return null;
    }
    return (index.h("div", { class: { cart: true }, part: "base", onClick: () => ui.store.set('cart', { ...ui.store.state.cart, ...{ open: !ui.store.state.cart.open } }) }, index.h("div", { class: "cart__container", part: "container" }, index.h("div", { class: { cart__counter: true } }, this.getItemsCount()), index.h("slot", null, index.h("sc-icon", { exportparts: "base:icon__base", name: this.icon })))));
  }
};
ScCartIcon.style = scCartIconCss;

exports.sc_cart_icon = ScCartIcon;

//# sourceMappingURL=sc-cart-icon.cjs.entry.js.map