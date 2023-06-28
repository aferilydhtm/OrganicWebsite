'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const watchers = require('./watchers-ff56b91c.js');
require('./index-261b56ec.js');

const scProductTextCss = ":host{display:block}p{margin-block-start:0;margin-block-end:1em}";

const ScProductText = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text = 'name';
  }
  render() {
    var _a;
    if ((_a = watchers.state.product) === null || _a === void 0 ? void 0 : _a[this.text]) {
      return index.h("span", { style: { whiteSpace: 'pre-line' }, innerHTML: watchers.state.product[this.text] });
    }
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
ScProductText.style = scProductTextCss;

exports.sc_product_text = ScProductText;

//# sourceMappingURL=sc-product-text.cjs.entry.js.map