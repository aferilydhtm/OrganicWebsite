'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const watchers = require('./watchers-ff56b91c.js');
require('./index-261b56ec.js');

const scProductQuantityCss = ":host{display:block}";

let id = 0;
const ScProductQuantity = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inputId = `sc-quantity-${++id}`;
    this.helpId = `sc-quantity-help-text-${id}`;
    this.labelId = `sc-quantity-label-${id}`;
    this.size = 'medium';
    this.name = undefined;
    this.errors = undefined;
    this.showLabel = true;
    this.label = undefined;
    this.required = false;
    this.help = undefined;
  }
  render() {
    var _a, _b;
    return (index.h(index.Host, null, index.h("sc-form-control", { exportparts: "label, help-text, form-control", size: this.size, required: this.required, label: this.label, showLabel: this.showLabel, help: this.help, inputId: this.inputId, helpId: this.helpId, labelId: this.labelId, name: this.name }, index.h("sc-quantity-select", { size: this.size, quantity: ((_a = watchers.state.selectedPrice) === null || _a === void 0 ? void 0 : _a.ad_hoc) ? 1 : watchers.state.quantity, disabled: (_b = watchers.state.selectedPrice) === null || _b === void 0 ? void 0 : _b.ad_hoc, onScInput: e => (watchers.state.quantity = e.detail) }))));
  }
};
ScProductQuantity.style = scProductQuantityCss;

exports.sc_product_quantity = ScProductQuantity;

//# sourceMappingURL=sc-product-quantity.cjs.entry.js.map