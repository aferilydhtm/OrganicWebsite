import { r as registerInstance, c as createEvent, h } from './index-eabde489.js';
import { o as openWormhole } from './consumer-6ea6ff59.js';

const scCartHeaderCss = ".cart-header{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1em}.cart-title{text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 var(--sc-spacing-small)}.cart__close{cursor:pointer}";

const ScCartHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scCloseCart = createEvent(this, "scCloseCart", 7);
    this.lineItems = undefined;
  }
  /** Count the number of items in the cart. */
  getItemsCount() {
    const items = this.lineItems || [];
    let count = 0;
    items.forEach(item => {
      count = count + (item === null || item === void 0 ? void 0 : item.quantity);
    });
    return count;
  }
  render() {
    var _a;
    return (h("div", { class: "cart-header" }, h("sc-icon", { class: "cart__close", name: "arrow-right", onClick: () => this.scCloseCart.emit() }), h("div", { class: "cart-title" }, h("slot", null)), h("sc-tag", { size: "small" }, ((_a = this === null || this === void 0 ? void 0 : this.getItemsCount) === null || _a === void 0 ? void 0 : _a.call(this)) || 0)));
  }
};
openWormhole(ScCartHeader, ['lineItems'], false);
ScCartHeader.style = scCartHeaderCss;

export { ScCartHeader as sc_cart_header };

//# sourceMappingURL=sc-cart-header.entry.js.map