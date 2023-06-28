import { r as registerInstance, h, H as Host } from './index-eabde489.js';
import { o as openWormhole } from './consumer-6ea6ff59.js';

const scOrderPasswordCss = ":host{display:block}.password{display:grid;gap:var(--sc-form-row-spacing, 0.75em)}";

const ScOrderPassword = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.loggedIn = undefined;
    this.size = 'medium';
    this.value = '';
    this.pill = false;
    this.label = undefined;
    this.showLabel = true;
    this.help = '';
    this.placeholder = undefined;
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.autofocus = undefined;
    this.emailExists = undefined;
    this.confirmation = false;
    this.confirmationLabel = undefined;
    this.confirmationPlaceholder = undefined;
    this.confirmationHelp = undefined;
    this.enableValidation = true;
  }
  async reportValidity() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (this.loggedIn)
      return true;
    (_b = (_a = this.input) === null || _a === void 0 ? void 0 : _a.setCustomValidity) === null || _b === void 0 ? void 0 : _b.call(_a, '');
    (_d = (_c = this.confirmInput) === null || _c === void 0 ? void 0 : _c.setCustomValidity) === null || _d === void 0 ? void 0 : _d.call(_c, '');
    // confirmation is enabled.
    if (this.confirmation) {
      if (((_e = this.confirmInput) === null || _e === void 0 ? void 0 : _e.value) && ((_f = this.input) === null || _f === void 0 ? void 0 : _f.value) !== ((_g = this.confirmInput) === null || _g === void 0 ? void 0 : _g.value)) {
        this.confirmInput.setCustomValidity(wp.i18n.__('Password does not match.', 'surecart'));
      }
    }
    if (this.enableValidation) {
      const validPassword = this.validatePassword((_h = this.input) === null || _h === void 0 ? void 0 : _h.value);
      if (!validPassword) {
        this.input.setCustomValidity(wp.i18n.__('Passwords should at least 6 characters and contain one special character.', 'surecart'));
      }
    }
    const valid = await this.input.reportValidity();
    if (!valid) {
      return false;
    }
    if (this.confirmInput) {
      return this.confirmInput.reportValidity();
    }
    return valid;
  }
  validatePassword(password) {
    const regex = new RegExp('^(?=.*?[#?!@$%^&*-]).{6,}$');
    if (regex.test(password))
      return true;
    return false;
  }
  render() {
    var _a;
    if (this.loggedIn) {
      return h(Host, { style: { display: 'none' } });
    }
    // if (this.emailExists) {
    //   return <Host style={{ display: 'none' }}></Host>;
    // }
    return (h("div", { class: "password" }, h("sc-input", { ref: el => (this.input = el), label: this.label, help: this.help, autofocus: this.autofocus, placeholder: this.placeholder, showLabel: this.showLabel, size: this.size ? this.size : 'medium', type: "password", name: "password", value: this.value, required: this.required, disabled: this.disabled }), this.confirmation && (h("sc-input", { ref: el => (this.confirmInput = el), label: (_a = this.confirmationLabel) !== null && _a !== void 0 ? _a : wp.i18n.__('Confirm Password', 'surecart'), help: this.confirmationHelp, placeholder: this.confirmationPlaceholder, size: this.size ? this.size : 'medium', type: "password", value: this.value, required: this.required, disabled: this.disabled }))));
  }
};
openWormhole(ScOrderPassword, ['loggedIn', 'emailExists'], false);
ScOrderPassword.style = scOrderPasswordCss;

export { ScOrderPassword as sc_order_password };

//# sourceMappingURL=sc-order-password.entry.js.map