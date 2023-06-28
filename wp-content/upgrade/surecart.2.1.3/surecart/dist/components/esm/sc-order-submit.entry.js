import { r as registerInstance, h, F as Fragment } from './index-eabde489.js';
import { a as checkoutIsLocked } from './getters-55a82586.js';
import { a as availableProcessors } from './getters-7ea74c9e.js';
import { s as state } from './watchers-4d606b62.js';
import { o as openWormhole } from './consumer-6ea6ff59.js';
import './watchers-9ca21ceb.js';
import './index-aabdbcfe.js';
import './add-query-args-f4c5962b.js';
import './util-c1d762c0.js';

const getProcessorData = (processors = [], type, mode) => {
  var _a;
  return ((_a = (processors || []).find(processor => (processor === null || processor === void 0 ? void 0 : processor.processor_type) === type && (processor === null || processor === void 0 ? void 0 : processor.live_mode) === !!(mode === 'live'))) === null || _a === void 0 ? void 0 : _a.processor_data) || {};
};

const scOrderSubmitCss = "sc-order-submit{display:block;width:auto;display:grid;gap:var(--sc-form-row-spacing)}.sc-secure-notice{display:flex;justify-content:center}";

const ScOrderSubmit = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    const { client_id, account_id, merchant_initiated_enabled } = getProcessorData(availableProcessors(), 'paypal', this.mode);
    if (!client_id && !account_id)
      return null;
    return (h("sc-paypal-buttons", { buttons: buttons, busy: this.busy || checkoutIsLocked(), mode: this.mode, order: this.order, merchantInitiated: merchant_initiated_enabled, "currency-code": this.currencyCode, "client-id": client_id, "merchant-id": account_id, label: "checkout", color: "blue" }));
  }
  render() {
    return (h(Fragment, null, state.id === 'paypal' && !(state === null || state === void 0 ? void 0 : state.method) && this.renderPayPalButton(['paypal']), state.id === 'paypal' && (state === null || state === void 0 ? void 0 : state.method) === 'card' && this.renderPayPalButton(['card']), h("sc-button", { hidden: ['paypal', 'paypal-card'].includes(state.id), submit: true, type: this.type, size: this.size, full: this.full, loading: this.loading || this.paying, disabled: this.loading || this.paying || this.busy || checkoutIsLocked() }, !!this.icon && h("sc-icon", { name: this.icon, slot: "prefix" }), h("slot", null, wp.i18n.__('Purchase', 'surecart')), this.showTotal && (h("span", null, '\u00A0', h("sc-total", null)))), this.secureNotice && location.protocol === 'https:' && (h("div", { class: "sc-secure-notice" }, h("sc-secure-notice", null, this.secureNoticeText || wp.i18n.__('This is a secure, encrypted payment.', 'surecart'))))));
  }
};
openWormhole(ScOrderSubmit, ['busy', 'loading', 'paying', 'processors', 'processor', 'mode', 'currencyCode', 'order'], false);
ScOrderSubmit.style = scOrderSubmitCss;

export { ScOrderSubmit as sc_order_submit };

//# sourceMappingURL=sc-order-submit.entry.js.map