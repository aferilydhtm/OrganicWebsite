import { r as registerInstance, h, H as Host } from './index-eabde489.js';
import { s as state } from './watchers-7bf44f71.js';
import './index-aabdbcfe.js';

const scProductTextCss = ":host{display:block}p{margin-block-start:0;margin-block-end:1em}";

const ScProductText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = 'name';
  }
  render() {
    var _a;
    if ((_a = state.product) === null || _a === void 0 ? void 0 : _a[this.text]) {
      return h("span", { style: { whiteSpace: 'pre-line' }, innerHTML: state.product[this.text] });
    }
    return (h(Host, null, h("slot", null)));
  }
};
ScProductText.style = scProductTextCss;

export { ScProductText as sc_product_text };

//# sourceMappingURL=sc-product-text.entry.js.map