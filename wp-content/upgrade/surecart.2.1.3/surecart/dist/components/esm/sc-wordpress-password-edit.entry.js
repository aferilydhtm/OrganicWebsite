import { r as registerInstance, h } from './index-eabde489.js';
import { a as apiFetch } from './fetch-34712ac6.js';
import './add-query-args-f4c5962b.js';

const scWordpressPasswordEditCss = ":host{display:block;position:relative}";

const ScWordPressPasswordEdit = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.heading = undefined;
    this.successUrl = undefined;
    this.user = undefined;
    this.loading = undefined;
    this.error = undefined;
    this.enableValidation = true;
  }
  renderEmpty() {
    return h("slot", { name: "empty" }, wp.i18n.__('User not found.', 'surecart'));
  }
  validatePassword(password) {
    const regex = new RegExp('^(?=.*?[#?!@$%^&*-]).{6,}$');
    if (regex.test(password))
      return true;
    return false;
  }
  async handleSubmit(e) {
    this.loading = true;
    this.error = '';
    try {
      const { password, password_confirm } = await e.target.getFormJson();
      if (password !== password_confirm) {
        throw { message: wp.i18n.__('Passwords do not match.', 'surecart') };
      }
      if (this.enableValidation && !this.validatePassword(password)) {
        throw { message: wp.i18n.__('Passwords should at least 6 characters and contain one special character.', 'surecart') };
      }
      await apiFetch({
        path: `wp/v2/users/me`,
        method: 'PATCH',
        data: {
          password,
          meta: {
            default_password_nag: false,
          },
        },
      });
      if (this.successUrl) {
        window.location.assign(this.successUrl);
      }
      else {
        this.loading = false;
      }
    }
    catch (e) {
      this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
      this.loading = false;
    }
  }
  render() {
    return (h("sc-dashboard-module", { class: "customer-details", error: this.error }, h("span", { slot: "heading" }, this.heading || wp.i18n.__('Update Password', 'surecart'), " "), h("slot", { name: "end", slot: "end" }), h("sc-card", null, h("sc-form", { onScFormSubmit: e => this.handleSubmit(e) }, h("sc-input", { label: wp.i18n.__('New Password', 'surecart'), name: "password", type: "password", required: true }), h("sc-input", { label: wp.i18n.__('Confirm New Password', 'surecart'), name: "password_confirm", type: "password", required: true }), h("div", null, h("sc-button", { type: "primary", full: true, submit: true }, wp.i18n.__('Update Password', 'surecart'))))), this.loading && h("sc-block-ui", { spinner: true })));
  }
};
ScWordPressPasswordEdit.style = scWordpressPasswordEditCss;

export { ScWordPressPasswordEdit as sc_wordpress_password_edit };

//# sourceMappingURL=sc-wordpress-password-edit.entry.js.map