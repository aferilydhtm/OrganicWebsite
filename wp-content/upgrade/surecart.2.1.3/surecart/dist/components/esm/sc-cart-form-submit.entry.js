import { r as registerInstance, h } from './index-eabde489.js';
import { o as openWormhole } from './consumer-6ea6ff59.js';

const scCartFormSubmitCss = "sc-order-submit{display:block;width:auto}";

const ScCartFormSubmit = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.busy = undefined;
    this.type = 'primary';
    this.size = 'medium';
    this.full = true;
    this.icon = undefined;
  }
  render() {
    return (h("sc-button", { submit: true, type: this.type, size: this.size, full: this.full, loading: this.busy, disabled: this.busy }, !!this.icon && h("sc-icon", { name: this.icon, slot: "prefix" }), h("slot", null)));
  }
};
openWormhole(ScCartFormSubmit, ['busy'], false);
ScCartFormSubmit.style = scCartFormSubmitCss;

export { ScCartFormSubmit as sc_cart_form_submit };

//# sourceMappingURL=sc-cart-form-submit.entry.js.map