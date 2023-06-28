import { r as registerInstance, h, H as Host } from './index-eabde489.js';
import { s as state } from './watchers-7bf44f71.js';
import './index-aabdbcfe.js';

const scProductQuantityCss = ":host{display:block}";

let id = 0;
const ScProductQuantity = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("sc-form-control", { exportparts: "label, help-text, form-control", size: this.size, required: this.required, label: this.label, showLabel: this.showLabel, help: this.help, inputId: this.inputId, helpId: this.helpId, labelId: this.labelId, name: this.name }, h("sc-quantity-select", { size: this.size, quantity: ((_a = state.selectedPrice) === null || _a === void 0 ? void 0 : _a.ad_hoc) ? 1 : state.quantity, disabled: (_b = state.selectedPrice) === null || _b === void 0 ? void 0 : _b.ad_hoc, onScInput: e => (state.quantity = e.detail) }))));
  }
};
ScProductQuantity.style = scProductQuantityCss;

export { ScProductQuantity as sc_product_quantity };

//# sourceMappingURL=sc-product-quantity.entry.js.map