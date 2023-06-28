import { r as registerInstance, c as createEvent, h, a as getElement } from './index-eabde489.js';
import { u as updateCheckout } from './index-813122a4.js';
import { g as getAnimation, a as animateTo, s as stopAnimations, c as setDefaultAnimation } from './animation-registry-510ac4b9.js';
import './watchers-9ca21ceb.js';
import './index-aabdbcfe.js';
import './add-query-args-f4c5962b.js';
import './watchers-9fc91d25.js';
import './watchers-4d606b62.js';
import './getters-7ea74c9e.js';
import './util-c1d762c0.js';
import './fetch-34712ac6.js';
import './get-query-arg-cb6b8763.js';

const ScCartSessionProvider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scUpdateOrderState = createEvent(this, "scUpdateOrderState", 7);
    this.scError = createEvent(this, "scError", 7);
    this.scSetState = createEvent(this, "scSetState", 7);
    this.order = undefined;
    this.session = undefined;
  }
  /** Sync this session back to parent. */
  handleSessionUpdate(val) {
    this.scUpdateOrderState.emit(val);
  }
  handleUpdateSession(e) {
    const { data, options } = e.detail;
    if (options === null || options === void 0 ? void 0 : options.silent) {
      this.update(data);
    }
    else {
      this.loadUpdate(data);
    }
  }
  /** Handles coupon updates. */
  async handleCouponApply(e) {
    const promotion_code = e.detail;
    this.scError.emit({});
    this.loadUpdate({
      discount: {
        ...(promotion_code ? { promotion_code } : {}),
      },
    });
  }
  /** Handle the error response. */
  handleErrorResponse(e) {
    var _a, _b;
    if ((e === null || e === void 0 ? void 0 : e.code) === 'readonly' || ((_b = (_a = e === null || e === void 0 ? void 0 : e.additional_errors) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.code) === 'checkout.customer.account_mismatch') {
      this.scUpdateOrderState.emit(null);
    }
    // expired
    if ((e === null || e === void 0 ? void 0 : e.code) === 'rest_cookie_invalid_nonce') {
      this.scSetState.emit('idle');
      return;
    }
    // something went wrong
    if (e === null || e === void 0 ? void 0 : e.message) {
      this.scError.emit(e);
    }
    // handle curl timeout errors.
    if ((e === null || e === void 0 ? void 0 : e.code) === 'http_request_failed') {
      this.scError.emit({ message: 'Something went wrong. Please reload the page and try again.' });
    }
    this.scSetState.emit('idle');
  }
  /** Fetch a session. */
  async fetch(args = {}) {
    this.loadUpdate({ status: 'draft', ...args });
  }
  /** Update a the order */
  async update(data = {}, query = {}) {
    var _a;
    try {
      this.session = (await updateCheckout({
        id: (_a = this.order) === null || _a === void 0 ? void 0 : _a.id,
        data: {
          ...data,
        },
        query: {
          ...query,
        },
      }));
    }
    catch (e) {
      console.error(e);
      throw e;
    }
  }
  /** Updates a session with loading status changes. */
  async loadUpdate(data = {}) {
    try {
      this.scSetState.emit('busy');
      await this.update(data);
      this.scSetState.emit('idle');
    }
    catch (e) {
      this.handleErrorResponse(e);
    }
  }
  render() {
    return (h("sc-line-items-provider", { order: this.order, onScUpdateLineItems: e => this.loadUpdate({ line_items: e.detail }) }, h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "session": ["handleSessionUpdate"]
  }; }
};

const scDrawerCss = ":host{display:contents}.drawer{top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;font-family:var(--sc-font-sans);font-weight:var(--sc-font-weight-normal)}.drawer--contained{position:absolute;z-index:initial}.drawer--fixed{position:fixed;z-index:var(--sc-z-index-drawer)}.drawer__panel{position:absolute;display:flex;flex-direction:column;z-index:2;max-width:100%;max-height:100%;background-color:var(--sc-panel-background-color);box-shadow:var(--sc-shadow-x-large);transition:var(--sc-transition-medium) transform;overflow:auto;pointer-events:all}.drawer__panel:focus{outline:none}.drawer--top .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:100%;height:var(--sc-drawer-size, 400px)}.drawer--end .drawer__panel{top:0;right:0;bottom:auto;left:auto;width:100%;max-width:var(--sc-drawer-size, 400px);height:100%}.drawer--bottom .drawer__panel{top:auto;right:auto;bottom:0;left:0;width:100%;height:var(--sc-drawer-size, 400px)}.drawer--start .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:var(--sc-drawer-size, 400px);height:100%}.drawer__header{display:flex;align-items:center;padding:var(--sc-drawer-header-spacing);border-bottom:var(--sc-drawer-border)}.drawer__title{flex:1 1 auto;font:inherit;font-size:var(--sc-font-size-large);line-height:var(--sc-line-height-dense);margin:0}.drawer__close{flex:0 0 auto;display:flex;align-items:center;font-size:var(--sc-font-size-x-large);color:var(--sc-color-gray-500);cursor:pointer}.drawer__body{flex:1 1 auto}.drawer--has-footer .drawer__footer{border-top:var(--sc-drawer-border);padding:var(--sc-drawer-footer-spacing)}.drawer__overlay{display:block;position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--sc-overlay-background-color);pointer-events:all}.drawer--contained .drawer__overlay{position:absolute}";

const ScDrawer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scInitialFocus = createEvent(this, "scInitialFocus", 7);
    this.scRequestClose = createEvent(this, "scRequestClose", 7);
    this.scShow = createEvent(this, "scShow", 7);
    this.scHide = createEvent(this, "scHide", 7);
    this.scAfterShow = createEvent(this, "scAfterShow", 7);
    this.scAfterHide = createEvent(this, "scAfterHide", 7);
    this.open = false;
    this.label = '';
    this.placement = 'end';
    this.contained = false;
    this.noHeader = false;
  }
  componentDidLoad() {
    this.drawer.hidden = !this.open;
    if (this.open && !this.contained) {
      this.lockBodyScrolling();
    }
  }
  disconnectedCallback() {
    this.unLockBodyScrolling();
  }
  lockBodyScrolling() {
    document.body.classList.add('sc-scroll-lock');
  }
  unLockBodyScrolling() {
    document.body.classList.remove('sc-scroll-lock');
  }
  /** Shows the drawer. */
  async show() {
    if (this.open) {
      return undefined;
    }
    this.open = true;
  }
  /** Hides the drawer */
  async hide() {
    if (!this.open) {
      return undefined;
    }
    this.open = false;
  }
  requestClose(source) {
    const slRequestClose = this.scRequestClose.emit(source);
    if (slRequestClose.defaultPrevented) {
      const animation = getAnimation(this.el, 'drawer.denyClose');
      animateTo(this.panel, animation.keyframes, animation.options);
      return;
    }
    this.hide();
  }
  handleKeyDown(event) {
    if (event.key === 'Escape') {
      event.stopPropagation();
      this.requestClose('keyboard');
    }
  }
  async handleOpenChange() {
    if (this.open) {
      this.scShow.emit();
      this.originalTrigger = document.activeElement;
      // Lock body scrolling only if the drawer isn't contained
      if (!this.contained) {
        this.lockBodyScrolling();
      }
      // When the drawer is shown, Safari will attempt to set focus on whatever element has autofocus. This causes the
      // drawer's animation to jitter, so we'll temporarily remove the attribute, call `focus({ preventScroll: true })`
      // ourselves, and add the attribute back afterwards.
      //
      // Related: https://github.com/shoelace-style/shoelace/issues/693
      //
      const autoFocusTarget = this.el.querySelector('[autofocus]');
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute('autofocus');
      }
      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      this.drawer.hidden = false;
      // Set initial focus
      requestAnimationFrame(() => {
        const slInitialFocus = this.scInitialFocus.emit();
        if (!slInitialFocus.defaultPrevented) {
          // Set focus to the autofocus target and restore the attribute
          if (autoFocusTarget) {
            autoFocusTarget.focus({ preventScroll: true });
          }
          else {
            this.panel.focus({ preventScroll: true });
          }
        }
        // Restore the autofocus attribute
        if (autoFocusTarget) {
          autoFocusTarget.setAttribute('autofocus', '');
        }
      });
      const panelAnimation = getAnimation(this.el, `drawer.show${this.placement.charAt(0).toUpperCase() + this.placement.slice(1)}`);
      const overlayAnimation = getAnimation(this.el, 'drawer.overlay.show');
      await Promise.all([animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options), animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)]);
      this.scAfterShow.emit();
    }
    else {
      // Hide
      this.scHide.emit();
      this.unLockBodyScrolling();
      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this.el, `drawer.hide${this.placement.charAt(0).toUpperCase() + this.placement.slice(1)}`);
      const overlayAnimation = getAnimation(this.el, 'drawer.overlay.hide');
      await Promise.all([animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options), animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)]);
      this.drawer.hidden = true;
      // Restore focus to the original trigger
      const trigger = this.originalTrigger;
      if (typeof (trigger === null || trigger === void 0 ? void 0 : trigger.focus) === 'function') {
        setTimeout(() => trigger.focus());
      }
      this.scAfterHide.emit();
    }
  }
  render() {
    return (h("div", { part: "base", class: {
        'drawer': true,
        'drawer--open': this.open,
        'drawer--top': this.placement === 'top',
        'drawer--end': this.placement === 'end',
        'drawer--bottom': this.placement === 'bottom',
        'drawer--start': this.placement === 'start',
        'drawer--contained': this.contained,
        'drawer--fixed': !this.contained,
        'drawer--has-footer': this.el.querySelector('[slot="footer"]') !== null,
      }, ref: el => (this.drawer = el), onKeyDown: (e) => this.handleKeyDown(e) }, h("div", { part: "overlay", class: "drawer__overlay", onClick: () => this.requestClose('overlay'), tabindex: "-1", ref: el => (this.overlay = el) }), h("div", { part: "panel", class: "drawer__panel", role: "dialog", "aria-modal": "true", "aria-hidden": this.open ? 'false' : 'true', "aria-label": this.noHeader ? this.label : undefined, "aria-labelledby": !this.noHeader ? 'title' : undefined, tabindex: "0", ref: el => (this.panel = el) }, !this.noHeader && (h("header", { part: "header" }, h("slot", { name: "header" }, h("div", { class: "drawer__header" }, h("h2", { part: "title", class: "drawer__title", id: "title" }, h("slot", { name: "label" }, this.label.length > 0 ? this.label : ' ', " ")), h("sc-icon", { part: "close-button", exportparts: "base:close-button__base", class: "drawer__close", name: "x", label: 
      /** translators: Close this modal window. */
      wp.i18n.__('Close', 'surecart'), onClick: () => this.requestClose('close-button') }))))), h("footer", { part: "header-suffix", class: "drawer__header-suffix" }, h("slot", { name: "header-suffix" })), h("div", { part: "body", class: "drawer__body" }, h("slot", null)), h("footer", { part: "footer", class: "drawer__footer" }, h("slot", { name: "footer" })))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "open": ["handleOpenChange"]
  }; }
};
// Top
setDefaultAnimation('drawer.showTop', {
  keyframes: [
    { opacity: 0, transform: 'translateY(-100%)' },
    { opacity: 1, transform: 'translateY(0)' },
  ],
  options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.hideTop', {
  keyframes: [
    { opacity: 1, transform: 'translateY(0)' },
    { opacity: 0, transform: 'translateY(-100%)' },
  ],
  options: { duration: 250, easing: 'ease' },
});
// End
setDefaultAnimation('drawer.showEnd', {
  keyframes: [
    { opacity: 0, transform: 'translateX(100%)' },
    { opacity: 1, transform: 'translateX(0)' },
  ],
  options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.hideEnd', {
  keyframes: [
    { opacity: 1, transform: 'translateX(0)' },
    { opacity: 0, transform: 'translateX(100%)' },
  ],
  options: { duration: 250, easing: 'ease' },
});
// Bottom
setDefaultAnimation('drawer.showBottom', {
  keyframes: [
    { opacity: 0, transform: 'translateY(100%)' },
    { opacity: 1, transform: 'translateY(0)' },
  ],
  options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.hideBottom', {
  keyframes: [
    { opacity: 1, transform: 'translateY(0)' },
    { opacity: 0, transform: 'translateY(100%)' },
  ],
  options: { duration: 250, easing: 'ease' },
});
// Start
setDefaultAnimation('drawer.showStart', {
  keyframes: [
    { opacity: 0, transform: 'translateX(-100%)' },
    { opacity: 1, transform: 'translateX(0)' },
  ],
  options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.hideStart', {
  keyframes: [
    { opacity: 1, transform: 'translateX(0)' },
    { opacity: 0, transform: 'translateX(-100%)' },
  ],
  options: { duration: 250, easing: 'ease' },
});
// Deny close
setDefaultAnimation('drawer.denyClose', {
  keyframes: [{ transform: 'scale(1)' }, { transform: 'scale(1.01)' }, { transform: 'scale(1)' }],
  options: { duration: 250 },
});
// Overlay
setDefaultAnimation('drawer.overlay.show', {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.overlay.hide', {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250, easing: 'ease' },
});
ScDrawer.style = scDrawerCss;

const ScFormErrorProvider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scUpdateError = createEvent(this, "scUpdateError", 7);
    this.error = undefined;
  }
  /** Trigger the error event when an error happens  */
  handleErrorUpdate(val) {
    this.scUpdateError.emit(val);
  }
  /** Listen for error events in component. */
  handleErrorEvent(e) {
    this.error = e.detail;
  }
  /** This filters the error message with some more client friendly error messages. */
  getErrorMessage(error) {
    if (error.code === 'order.line_items.price.blank') {
      return wp.i18n.__('This product is no longer purchasable.', 'surecart');
    }
    return error === null || error === void 0 ? void 0 : error.message;
  }
  /** First will display validation error, then main error if no validation errors. */
  errorMessage() {
    var _a, _b, _c, _d, _e, _f;
    if ((_c = (_b = (_a = this.error) === null || _a === void 0 ? void 0 : _a.additional_errors) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.message) {
      return this.getErrorMessage((_e = (_d = this.error) === null || _d === void 0 ? void 0 : _d.additional_errors) === null || _e === void 0 ? void 0 : _e[0]);
    }
    else if ((_f = this === null || this === void 0 ? void 0 : this.error) === null || _f === void 0 ? void 0 : _f.message) {
      return this.getErrorMessage(this === null || this === void 0 ? void 0 : this.error);
    }
    return '';
  }
  render() {
    return !!this.errorMessage() ? (h("sc-alert", { exportparts: "base, icon, text, title, message, close", type: "danger", scrollOnOpen: true, open: !!this.errorMessage() }, h("span", { slot: "title" }, this.errorMessage()))) : null;
  }
  static get watchers() { return {
    "error": ["handleErrorUpdate"]
  }; }
};

export { ScCartSessionProvider as sc_cart_session_provider, ScDrawer as sc_drawer, ScFormErrorProvider as sc_error };

//# sourceMappingURL=sc-cart-session-provider_3.entry.js.map