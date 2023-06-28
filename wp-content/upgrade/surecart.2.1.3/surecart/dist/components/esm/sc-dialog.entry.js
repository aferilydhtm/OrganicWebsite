import { r as registerInstance, c as createEvent, h, a as getElement } from './index-eabde489.js';
import { g as getAnimation, a as animateTo, s as stopAnimations, c as setDefaultAnimation } from './animation-registry-510ac4b9.js';

const locks = new Set();
//
// Prevents body scrolling. Keeps track of which elements requested a lock so multiple levels of locking are possible
// without premature unlocking.
//
function lockBodyScrolling(lockingEl) {
  locks.add(lockingEl);
  document.body.classList.add('sc-scroll-lock');
}
//
// Unlocks body scrolling. Scrolling will only be unlocked once all elements that requested a lock call this method.
//
function unlockBodyScrolling(lockingEl) {
  locks.delete(lockingEl);
  if (locks.size === 0) {
    document.body.classList.remove('sc-scroll-lock');
  }
}

const scDialogCss = ":host{--width:31rem;--header-spacing:var(--sc-spacing-large);--body-spacing:var(--sc-spacing-large);--footer-spacing:var(--sc-spacing-large);display:contents}[hidden]{display:none !important}.dialog{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--sc-z-index-dialog);box-sizing:border-box;text-align:left}.dialog__panel{display:flex;flex-direction:column;z-index:2;width:var(--width);max-width:100vw;max-height:100vh;background-color:var(--sc-panel-background-color);border-radius:var(--sc-border-radius-medium);box-shadow:var(--sc-shadow-x-large);position:relative}.dialog__panel:focus{outline:none}@media screen and (max-width: 420px){.dialog__panel{max-height:80vh}}.dialog--open .dialog__panel{display:flex;opacity:1;transform:none}.dialog__header{flex:0 0 auto;display:flex;border-bottom:1px solid var(--sc-color-gray-300)}.dialog__title{flex:1 1 auto;font:inherit;font-size:var(--sc-font-size-large);line-height:var(--sc-line-height-dense);padding:var(--header-spacing);margin:0}.dialog__close{flex:0 0 auto;display:flex;align-items:center;font-size:var(--sc-font-size-x-large);padding:0 calc(var(--header-spacing) / 2);z-index:2}.dialog__body{flex:1 1 auto;padding:var(--body-spacing);overflow:var(--dialog-body-overflow, auto);-webkit-overflow-scrolling:touch}.dialog__footer{flex:0 0 auto;text-align:right;padding:var(--footer-spacing)}.dialog__footer ::slotted(sl-button:not(:first-of-type)){margin-left:var(--sc-spacing-x-small)}.dialog:not(.dialog--has-footer) .dialog__footer{display:none}.dialog__overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--sc-overlay-background-color)}";

const ScDialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scRequestClose = createEvent(this, "scRequestClose", 7);
    this.scShow = createEvent(this, "scShow", 7);
    this.scAfterShow = createEvent(this, "scAfterShow", 7);
    this.scHide = createEvent(this, "scHide", 7);
    this.scAfterHide = createEvent(this, "scAfterHide", 7);
    this.scInitialFocus = createEvent(this, "scInitialFocus", 7);
    this.open = false;
    this.label = '';
    this.noHeader = false;
    this.hasFooter = false;
  }
  /** Shows the dialog. */
  async show() {
    if (this.open) {
      return undefined;
    }
    this.open = true;
  }
  /** Hides the dialog */
  async hide() {
    if (!this.open) {
      return undefined;
    }
    this.open = false;
  }
  requestClose(source) {
    const slRequestClose = this.scRequestClose.emit(source);
    if (slRequestClose.defaultPrevented) {
      const animation = getAnimation(this.el, 'dialog.denyClose');
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
      // Show
      this.scShow.emit();
      lockBodyScrolling(this.el);
      // When the dialog is shown, Safari will attempt to set focus on whatever element has autofocus. This can cause
      // the dialogs's animation to jitter (if it starts offscreen), so we'll temporarily remove the attribute, call
      // `focus({ preventScroll: true })` ourselves, and add the attribute back afterwards.
      //
      // Related: https://github.com/shoelace-style/shoelace/issues/693
      //
      const autoFocusTarget = this.el.querySelector('[autofocus]');
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute('autofocus');
      }
      await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
      this.dialog.hidden = false;
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
      const panelAnimation = getAnimation(this.el, 'dialog.show');
      const overlayAnimation = getAnimation(this.el, 'dialog.overlay.show');
      await Promise.all([animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options), animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)]);
      this.scAfterShow.emit();
    }
    else {
      // Hide
      this.scHide.emit();
      await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this.el, 'dialog.hide');
      const overlayAnimation = getAnimation(this.el, 'dialog.overlay.hide');
      await Promise.all([animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options), animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)]);
      this.dialog.hidden = true;
      unlockBodyScrolling(this.el);
      // Restore focus to the original trigger
      const trigger = this.originalTrigger;
      if (typeof (trigger === null || trigger === void 0 ? void 0 : trigger.focus) === 'function') {
        setTimeout(() => trigger.focus());
      }
      this.scAfterHide.emit();
    }
  }
  componentDidLoad() {
    this.hasFooter = !!this.el.querySelector('[slot="footer"]');
    this.dialog.hidden = !this.open;
    if (this.open) {
      lockBodyScrolling(this.el);
    }
  }
  disconnectedCallback() {
    unlockBodyScrolling(this.el);
  }
  render() {
    return (h("div", { part: "base", ref: el => (this.dialog = el), class: {
        'dialog': true,
        'dialog--open': this.open,
        'dialog--has-footer': this.hasFooter,
      }, onKeyDown: e => this.handleKeyDown(e) }, h("div", { part: "overlay", class: "dialog__overlay", onClick: e => {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.requestClose('overlay');
      }, ref: el => (this.overlay = el), tabindex: "-1" }), h("div", { part: "panel", class: "dialog__panel", role: "dialog", "aria-modal": "true", "aria-hidden": this.open ? 'false' : 'true', "aria-label": this.noHeader || this.label, "aria-labelledby": !this.noHeader || 'title', ref: el => (this.panel = el), tabindex: "0" }, !this.noHeader && (h("header", { part: "header", class: "dialog__header" }, h("h2", { part: "title", class: "dialog__title", id: "title" }, h("slot", { name: "label" }, " ", this.label.length > 0 ? this.label : String.fromCharCode(65279), " ")), h("sc-button", { class: "dialog__close", type: "text", circle: true, part: "close-button", exportparts: "base:close-button__base", onClick: e => {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.requestClose('close-button');
      } }, h("sc-icon", { name: "x", label: wp.i18n.__('Close', 'surecart') })))), h("div", { part: "body", class: "dialog__body" }, h("slot", null)), h("footer", { part: "footer", class: "dialog__footer" }, h("slot", { name: "footer" })))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "open": ["handleOpenChange"]
  }; }
};
setDefaultAnimation('dialog.show', {
  keyframes: [
    { opacity: 0, transform: 'scale(0.8)' },
    { opacity: 1, transform: 'scale(1)' },
  ],
  options: { duration: 150, easing: 'ease' },
});
setDefaultAnimation('dialog.hide', {
  keyframes: [
    { opacity: 1, transform: 'scale(1)' },
    { opacity: 0, transform: 'scale(0.8)' },
  ],
  options: { duration: 150, easing: 'ease' },
});
setDefaultAnimation('dialog.denyClose', {
  keyframes: [{ transform: 'scale(1)' }, { transform: 'scale(1.02)' }, { transform: 'scale(1)' }],
  options: { duration: 150 },
});
setDefaultAnimation('dialog.overlay.show', {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 150 },
});
setDefaultAnimation('dialog.overlay.hide', {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 150 },
});
ScDialog.style = scDialogCss;

export { ScDialog as sc_dialog };

//# sourceMappingURL=sc-dialog.entry.js.map