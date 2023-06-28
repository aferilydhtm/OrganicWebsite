'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const consumer = require('./consumer-51f6d265.js');

const scCartFormSubmitCss = "sc-order-submit{display:block;width:auto}";

const ScCartFormSubmit = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.busy = undefined;
    this.type = 'primary';
    this.size = 'medium';
    this.full = true;
    this.icon = undefined;
  }
  render() {
    return (index.h("sc-button", { submit: true, type: this.type, size: this.size, full: this.full, loading: this.busy, disabled: this.busy }, !!this.icon && index.h("sc-icon", { name: this.icon, slot: "prefix" }), index.h("slot", null)));
  }
};
consumer.openWormhole(ScCartFormSubmit, ['busy'], false);
ScCartFormSubmit.style = scCartFormSubmitCss;

exports.sc_cart_form_submit = ScCartFormSubmit;

//# sourceMappingURL=sc-cart-form-submit.cjs.entry.js.map