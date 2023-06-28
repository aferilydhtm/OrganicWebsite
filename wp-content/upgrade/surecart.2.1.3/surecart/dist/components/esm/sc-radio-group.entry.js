import { r as registerInstance, h } from './index-eabde489.js';
import { i as isRtl } from './page-align-8602c4c7.js';

const scRadioGroupCss = ":host{display:block}.radio-group{border:none;padding:0;margin:0;min-width:0}.radio-group .radio-group__label{display:inline-block;padding:0;color:var(--sc-input-label-color);font-weight:var(--sc-input-label-font-weight);text-transform:var(--sc-input-label-text-transform, none);letter-spacing:var(--sc-input-label-letter-spacing, 0);margin-bottom:var(--sc-input-label-margin)}.radio-group__hidden-input{position:absolute;opacity:0;padding:0px;margin:0px;pointer-events:none}.radio-group--is-required .radio-group__label:after{content:\" *\";color:var(--sc-color-danger-500)}::slotted(sc-radio:not(:last-of-type)){display:block;margin-bottom:var(--sc-spacing-x-small) !important}.radio-group--is-rtl.radio-group,.radio-group--is-rtl.radio-group .radio-group__label{text-align:right}";

const ScRadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = '';
    this.invalid = undefined;
    this.value = '';
    this.required = undefined;
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  async reportValidity() {
    this.invalid = !this.input.checkValidity();
    return this.input.reportValidity();
  }
  handleRadioClick(event) {
    const target = event.target;
    if (target.disabled) {
      return;
    }
    this.value = target.value;
  }
  render() {
    return (h("fieldset", { part: "base", class: {
        'radio-group': true,
        'radio-group--invalid': this.invalid,
        'radio-group--is-required': this.required,
        'radio-group--is-rtl': isRtl()
      }, "aria-invalid": this.invalid, role: "radiogroup" }, h("legend", { part: "label", class: "radio-group__label" }, h("slot", { name: "label" }, this.label)), h("input", { type: "text", class: "radio-group__hidden-input", ref: el => (this.input = el), required: this.required, value: this.value, tabindex: "-1" }), h("slot", null)));
  }
};
ScRadioGroup.style = scRadioGroupCss;

export { ScRadioGroup as sc_radio_group };

//# sourceMappingURL=sc-radio-group.entry.js.map