import { r as registerInstance, c as createEvent, h, a as getElement } from './index-eabde489.js';
import { b as getCurrencySymbol } from './price-ad16bb2d.js';
import { F as FormSubmitController } from './form-data-dd63c61f.js';
import { i as isZeroDecimal, m as maybeConvertAmount } from './currency-4692aeb2.js';

const scPriceInputCss = ":host{display:block}";

const ScPriceInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scChange = createEvent(this, "scChange", 7);
    this.scInput = createEvent(this, "scInput", 7);
    this.scFocus = createEvent(this, "scFocus", 7);
    this.scBlur = createEvent(this, "scBlur", 7);
    this.size = 'medium';
    this.name = undefined;
    this.value = '';
    this.pill = false;
    this.label = undefined;
    this.showLabel = true;
    this.help = '';
    this.clearable = false;
    this.placeholder = undefined;
    this.disabled = false;
    this.readonly = false;
    this.minlength = undefined;
    this.maxlength = undefined;
    this.max = undefined;
    this.min = undefined;
    this.required = false;
    this.invalid = false;
    this.autofocus = undefined;
    this.hasFocus = undefined;
    this.currencyCode = undefined;
    this.showCode = undefined;
  }
  async reportValidity() {
    return this.input.shadowRoot.querySelector('input').reportValidity();
  }
  /** Sets focus on the input. */
  async triggerFocus(options) {
    return this.input.triggerFocus(options);
  }
  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  async setCustomValidity(message) {
    this.input.setCustomValidity(message);
  }
  /** Removes focus from the input. */
  async triggerBlur() {
    return this.input.blur();
  }
  handleFocusChange() {
    var _a, _b, _c, _d;
    this.hasFocus ? (_b = (_a = this.input) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a) : (_d = (_c = this.input) === null || _c === void 0 ? void 0 : _c.blur) === null || _d === void 0 ? void 0 : _d.call(_c);
  }
  handleChange() {
    this.updateValue();
  }
  handleInput() {
    this.updateValue();
    this.scInput.emit();
  }
  updateValue() {
    // This fixes issues on mobile Safari where a decimal point is added to the end of the input value
    // does not have an input value.
    if (!this.input.shadowRoot.querySelector('input').checkValidity()) {
      return;
    }
    if (!this.input.value) {
      return;
    }
    const val = isZeroDecimal(this.currencyCode) ? parseFloat(this.input.value) : (parseFloat(this.input.value) * 100).toFixed(2);
    this.value = this.input.value ? val.toString() : '';
  }
  componentDidLoad() {
    this.handleFocusChange();
    this.formController = new FormSubmitController(this.el).addFormData();
    document.addEventListener('wheel', () => {
      this.input.triggerBlur();
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.formController) === null || _a === void 0 ? void 0 : _a.removeFormData();
  }
  render() {
    return (h("sc-input", { exportparts: "base, input, form-control, label, help-text, prefix, suffix", size: this.size, label: this.label, showLabel: this.showLabel, help: this.help, ref: el => (this.input = el), type: "number", name: this.name, disabled: this.disabled, readonly: this.readonly, required: this.required, placeholder: this.placeholder, minlength: this.minlength, maxlength: this.maxlength, min: !!this.min ? this.min / 100 : 0.0, step: 0.01, max: !!this.max ? this.max / 100 : null,
      // TODO: Test These below
      autofocus: this.autofocus, inputmode: 'decimal', onScChange: () => this.handleChange(), onScInput: () => this.handleInput(), onScBlur: () => this.scBlur.emit(), onScFocus: () => this.scFocus.emit(), pattern: "^\\d*(\\.\\d{0,2})?$" // This prevents more than two decimal places
      ,
      value: maybeConvertAmount(parseFloat(this.value), this.currencyCode).toString() }, h("span", { style: { opacity: '0.5' }, slot: "prefix" }, getCurrencySymbol(this.currencyCode)), h("span", { slot: "suffix" }, h("slot", { name: "suffix" }, this.showCode && (this === null || this === void 0 ? void 0 : this.currencyCode) && h("span", { style: { opacity: '0.5' } }, this.currencyCode.toUpperCase())))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "hasFocus": ["handleFocusChange"]
  }; }
};
ScPriceInput.style = scPriceInputCss;

export { ScPriceInput as sc_price_input };

//# sourceMappingURL=sc-price-input.entry.js.map