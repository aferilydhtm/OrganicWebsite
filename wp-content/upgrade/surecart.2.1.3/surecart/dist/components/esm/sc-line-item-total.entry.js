import { r as registerInstance, h } from './index-eabde489.js';
import { o as openWormhole } from './consumer-6ea6ff59.js';

const scLineItemTotalCss = ":host{display:block}sc-line-item{text-align:left}.line-item-total__group sc-line-item{margin:4px 0px !important}.scratch-price{text-decoration:line-through;color:var(--sc-color-gray-500);font-size:var(--sc-font-size-small);margin-right:var(--sc-spacing-xx-small)}sc-line-item::part(base){grid-template-columns:max-content auto auto}.total-price{white-space:nowrap}";

const ScLineItemTotal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.order_key = {
      total: 'total_amount',
      subtotal: 'subtotal_amount',
      amount_due: 'amount_due',
    };
    this.total = 'total';
    this.loading = undefined;
    this.order = undefined;
    this.size = undefined;
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    // loading state
    if (this.loading && !((_a = this.order) === null || _a === void 0 ? void 0 : _a[(_b = this === null || this === void 0 ? void 0 : this.order_key) === null || _b === void 0 ? void 0 : _b[this === null || this === void 0 ? void 0 : this.total]])) {
      return (h("sc-line-item", null, h("sc-skeleton", { slot: "title", style: { width: '120px', display: 'inline-block' } }), h("sc-skeleton", { slot: "price", style: { 'width': '70px', 'display': 'inline-block', 'height': this.size === 'large' ? '40px' : '', '--border-radius': '6px' } })));
    }
    if (!((_c = this.order) === null || _c === void 0 ? void 0 : _c.currency))
      return;
    // if the total amount is different than the amount due.
    if (this.total === 'total' && ((_d = this.order) === null || _d === void 0 ? void 0 : _d.total_amount) !== ((_e = this.order) === null || _e === void 0 ? void 0 : _e.amount_due)) {
      return (h("div", { class: "line-item-total__group" }, h("sc-line-item", null, h("span", { slot: "description" }, h("slot", { name: "title" }), h("slot", { name: "description" })), h("span", { slot: "price" }, h("sc-total", { order: this.order, total: this.total }))), h("sc-line-item", { style: { '--price-size': 'var(--sc-font-size-x-large)' } }, h("span", { slot: "title" }, h("slot", { name: "subscription-title" }, wp.i18n.__('Total Due Today', 'surecart'))), h("span", { slot: "price" }, h("sc-format-number", { type: "currency", currency: (_f = this.order) === null || _f === void 0 ? void 0 : _f.currency, value: (_g = this.order) === null || _g === void 0 ? void 0 : _g.amount_due })))));
    }
    return (h("sc-line-item", { style: this.size === 'large' ? { '--price-size': 'var(--sc-font-size-x-large)' } : {} }, h("span", { slot: "title" }, h("slot", { name: "title" })), h("span", { slot: "description" }, h("slot", { name: "description" })), h("span", { slot: "price" }, !!((_h = this.order) === null || _h === void 0 ? void 0 : _h.total_savings_amount) && this.total === 'total' && (h("sc-format-number", { class: "scratch-price", type: "currency", value: -((_j = this.order) === null || _j === void 0 ? void 0 : _j.total_savings_amount) + ((_k = this.order) === null || _k === void 0 ? void 0 : _k.total_amount), currency: ((_l = this.order) === null || _l === void 0 ? void 0 : _l.currency) || 'usd' })), h("sc-total", { class: "total-price", order: this.order, total: this.total }))));
  }
};
openWormhole(ScLineItemTotal, ['order', 'loading', 'calculating'], false);
ScLineItemTotal.style = scLineItemTotalCss;

export { ScLineItemTotal as sc_line_item_total };

//# sourceMappingURL=sc-line-item-total.entry.js.map