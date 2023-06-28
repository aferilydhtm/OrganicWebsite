'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');

/**
 * Serializes a form and returns a plain object. If a form control with the same name appears more than once, the
 * property will be converted to an array.
 */
function serialize(form) {
  const formData = new FormData(form);
  const object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  return object;
}

const scFormCss = "sc-form{display:block}:host{display:block}::slotted(*:not(:last-child)),sc-form form>*:not(:last-child){margin-bottom:var(--sc-form-row-spacing, 0.75em)}::slotted(*:not(:last-child)).wp-block-spacer,sc-form form>*:not(:last-child).wp-block-spacer{margin-bottom:0}";

const ScForm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scSubmit = index.createEvent(this, "scSubmit", 7);
    this.scFormSubmit = index.createEvent(this, "scFormSubmit", 7);
    this.scFormChange = index.createEvent(this, "scFormChange", 7);
    this.novalidate = false;
  }
  /** Serializes all form controls elements and returns a `FormData` object. */
  async getFormData() {
    return new FormData(this.formElement);
  }
  async getFormJson() {
    return serialize(this.formElement);
  }
  async handleChange() {
    this.scFormChange.emit(serialize(this.formElement));
  }
  async submit() {
    return this.submitForm();
  }
  /** Gets all form control elements (native and custom). */
  getFormControls() {
    return [...this.form.querySelectorAll('*')];
  }
  async validate() {
    console.log('validate');
    const formControls = this.getFormControls();
    const formControlsThatReport = formControls.filter((el) => typeof el.reportValidity === 'function');
    if (!this.novalidate) {
      for (const el of formControlsThatReport) {
        // element is hidden, don't client-side validate.
        if (!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)) {
          continue;
        }
        const isValid = await el.reportValidity();
        if (!isValid) {
          console.log(el);
          return false;
        }
      }
    }
    return true;
  }
  submitForm() {
    // Calling form.submit() seems to bypass the submit event and constraint validation. Instead, we can inject a
    // native submit button into the form, click it, then remove it to simulate a standard form submission.
    const button = document.createElement('button');
    if (this.formElement) {
      button.type = 'submit';
      button.style.position = 'absolute';
      button.style.width = '0';
      button.style.height = '0';
      button.style.clip = 'rect(0 0 0 0)';
      button.style.clipPath = 'inset(50%)';
      button.style.overflow = 'hidden';
      button.style.whiteSpace = 'nowrap';
      this.formElement.append(button);
      button.click();
      button.remove();
    }
  }
  render() {
    return (index.h("div", { part: "base", class: "form", role: "form" }, index.h("form", { part: "form", ref: el => (this.formElement = el), class: "test", onSubmit: async (e) => {
        console.log('submitted');
        e.preventDefault();
        const isValid = await this.validate();
        if (!isValid) {
          return false;
        }
        this.scSubmit.emit();
        this.scFormSubmit.emit();
      }, novalidate: this.novalidate }, index.h("slot", null))));
  }
  get form() { return index.getElement(this); }
};
ScForm.style = scFormCss;

exports.sc_form = ScForm;

//# sourceMappingURL=sc-form.cjs.entry.js.map