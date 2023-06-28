import { r as registerInstance, h, H as Host } from './index-eabde489.js';
import { o as openWormhole } from './consumer-6ea6ff59.js';

const scOrderManualInstructionsCss = ":host{display:block}";

const ScOrderManualInstructions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.manualPaymentTitle = undefined;
    this.manualPaymentInstructions = undefined;
  }
  render() {
    if (!this.manualPaymentInstructions || !this.manualPaymentTitle) {
      return h(Host, { style: { display: 'none' } });
    }
    return (h("sc-alert", { type: "info", open: true }, h("span", { slot: "title" }, this.manualPaymentTitle), this.manualPaymentInstructions.split('\n').map(i => {
      return h("p", null, i);
    })));
  }
};
openWormhole(ScOrderManualInstructions, ['manualPaymentTitle', 'manualPaymentInstructions'], false);
ScOrderManualInstructions.style = scOrderManualInstructionsCss;

export { ScOrderManualInstructions as sc_order_manual_instructions };

//# sourceMappingURL=sc-order-manual-instructions.entry.js.map