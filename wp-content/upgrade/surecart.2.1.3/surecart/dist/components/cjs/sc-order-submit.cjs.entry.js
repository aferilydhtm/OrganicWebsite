'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const getters$1 = require('./getters-52a52d79.js');
const getters = require('./getters-f0455d23.js');
const watchers = require('./watchers-437b71fb.js');
const consumer = require('./consumer-51f6d265.js');
require('./watchers-503cdd2a.js');
require('./index-261b56ec.js');
require('./add-query-args-17c551b6.js');
require('./util-872b1a55.js');

const getProcessorData = (processors = [], type, mode) => {
  var _a;
  return ((_a = (processors || []).find(processor => (processor === null || processor === void 0 ? void 0 : processor.processor_type) === type && (processor === null || processor === void 0 ? void 0 : processor.live_mode) === !!(mode === 'live'))) === null || _a === void 0 ? void 0 : _a.processor_data) || {};
};

const scOrderSubmitCss = "sc-order-submit{display:block;width:auto;display:grid;gap:var(--sc-form-row-spacing)}.sc-secure-notice{display:flex;justify-content:center}";

const ScOrderSubmit = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.busy = undefined;
    this.loading = undefined;
    this.paying = undefined;
    this.type = 'primary';
    this.size = 'medium';
    this.full = true;
    this.icon = undefined;
    this.showTotal = undefined;
    this.mode = 'live';
    this.processors = undefined;
    this.order = undefined;
    this.currencyCode = 'usd';
    this.processor = undefined;
    this.secureNoticeText = undefined;
    this.secureNotice = true;
  }
  renderPayPalButton(buttons) {
    const { client_id, account_id, merchant_initiated_enabled } = getProcessorData(getters.availableProcessors(), 'paypal', this.mode);
    if (!client_id && !account_id)
      return null;
    return (index.h("sc-paypal-buttons", { buttons: buttons, busy: this.busy || getters$1.checkoutIsLocked(), mode: this.mode, order: this.order, merchantInitiated: merchant_initiated_enabled, "currency-code": this.currencyCode, "client-id": client_id, "merchant-id": account_id, label: "checkout", color: "blue" }));
  }
  render() {
    return (index.h(index.Fragment, null, watchers.state.id === 'paypal' && !(watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.method) && this.renderPayPalButton(['paypal']), watchers.state.id === 'paypal' && (watchers.state === null || watchers.state === void 0 ? void 0 : watchers.state.method) === 'card' && this.renderPayPalButton(['card']), index.h("sc-button", { hidden: ['paypal', 'paypal-card'].includes(watchers.state.id), submit: true, type: this.type, size: this.size, full: this.full, loading: this.loading || this.paying, disabled: this.loading || this.paying || this.busy || getters$1.checkoutIsLocked() }, !!this.icon && index.h("sc-icon", { name: this.icon, slot: "prefix" }), index.h("slot", null, wp.i18n.__('Purchase', 'surecart')), this.showTotal && (index.h("span", null, '\u00A0', index.h("sc-total", null)))), this.secureNotice && location.protocol === 'https:' && (index.h("div", { class: "sc-secure-notice" }, index.h("sc-secure-notice", null, this.secureNoticeText || wp.i18n.__('This is a secure, encrypted payment.', 'surecart'))))));
  }
};
consumer.openWormhole(ScOrderSubmit, ['busy', 'loading', 'paying', 'processors', 'processor', 'mode', 'currencyCode', 'order'], false);
ScOrderSubmit.style = scOrderSubmitCss;

exports.sc_order_submit = ScOrderSubmit;

//# sourceMappingURL=sc-order-submit.cjs.entry.js.map