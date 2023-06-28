'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const consumer = require('./consumer-51f6d265.js');

const scOrderManualInstructionsCss = ":host{display:block}";

const ScOrderManualInstructions = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.manualPaymentTitle = undefined;
    this.manualPaymentInstructions = undefined;
  }
  render() {
    if (!this.manualPaymentInstructions || !this.manualPaymentTitle) {
      return index.h(index.Host, { style: { display: 'none' } });
    }
    return (index.h("sc-alert", { type: "info", open: true }, index.h("span", { slot: "title" }, this.manualPaymentTitle), this.manualPaymentInstructions.split('\n').map(i => {
      return index.h("p", null, i);
    })));
  }
};
consumer.openWormhole(ScOrderManualInstructions, ['manualPaymentTitle', 'manualPaymentInstructions'], false);
ScOrderManualInstructions.style = scOrderManualInstructionsCss;

exports.sc_order_manual_instructions = ScOrderManualInstructions;

//# sourceMappingURL=sc-order-manual-instructions.cjs.entry.js.map