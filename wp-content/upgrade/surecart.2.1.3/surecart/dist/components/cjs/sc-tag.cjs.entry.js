'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');

const scTagCss = ":host{display:inline-block}.tag{display:flex;align-items:center;border:none;line-height:1;white-space:nowrap;user-select:none;cursor:pointer;font-weight:var(--sc-font-weight-bold)}.tag__clear::part(base){color:inherit;padding:0}.tag--primary{background-color:var(--sc-tag-primary-background-color, var(--sc-color-primary-500));border-color:var(--sc-tag-primary-border-color, var(--sc-color-primary-500));color:var(--sc-tag-primary-color, var(--sc-color-primary-text, var(--sc-color-white)))}.tag--success{background-color:var(--sc-tag-success-background-color, var(--sc-color-success-100));border-color:var(--sc-tag-success-border-color, var(--sc-color-success-200));color:var(--sc-tag-success-color, var(--sc-color-success-800))}.tag--info{background-color:var(--sc-color-info-100);border-color:var(--sc-color-info-200);color:var(--sc-color-info-700)}.tag--default{background-color:var(--sc-tag-default-background-color, var(--sc-color-gray-100));border-color:var(--sc-tag-default-border-color, var(--sc-color-gray-200));color:var(--sc-tag-default-color, var(--sc-color-gray-700))}.tag--warning{background-color:var(--sc-color-warning-100);border-color:var(--sc-color-warning-200);color:var(--sc-color-warning-700)}.tag--danger{background-color:var(--sc-color-danger-100);border-color:var(--sc-color-danger-200);color:var(--sc-color-danger-700)}.tag--small{font-size:var(--sc-button-font-size-small);height:calc(var(--sc-input-height-small) * 0.75);line-height:calc(var(--sc-input-height-small) - var(--sc-input-border-width) * 2);border-radius:var(--sc-input-border-radius-small);padding:0 var(--sc-spacing-x-small)}.tag--small .tag__clear{margin-left:var(--sc-spacing-xx-small);margin-right:calc(-1 * var(--sc-spacing-xxx-small))}.tag--medium{font-size:var(--sc-font-size-small);height:calc(var(--sc-input-height-medium) * 0.75);line-height:calc(var(--sc-input-height-medium) - var(--sc-input-border-width) * 2);border-radius:var(--sc-input-border-radius-medium);padding:0 var(--sc-spacing-small)}.tag--medium .tag__clear{margin-left:var(--sc-spacing-xx-small);margin-right:calc(-1 * var(--sc-spacing-xx-small))}.tag--large{font-size:var(--sc-button-font-size-large);height:calc(var(--sc-input-height-large) * 0.75);line-height:calc(var(--sc-input-height-large) - var(--sc-input-border-width) * 2);border-radius:var(--sc-input-border-radius-large);padding:0 var(--sc-spacing-medium)}.tag--large .tag__clear{margin-left:var(--sc-spacing-xx-small);margin-right:calc(-1 * var(--sc-spacing-x-small))}.tag--pill{border-radius:var(--sc-border-radius-pill)}";

const ScTag = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scClear = index.createEvent(this, "scClear", 7);
    this.type = 'default';
    this.size = 'medium';
    this.pill = false;
    this.clearable = false;
  }
  handleClearClick() {
    this.scClear.emit(this);
  }
  render() {
    return (index.h("span", { part: "base", onClick: () => this.handleClearClick(), class: {
        'tag': true,
        // Types
        'tag--primary': this.type === 'primary',
        'tag--success': this.type === 'success',
        'tag--info': this.type === 'info',
        'tag--warning': this.type === 'warning',
        'tag--danger': this.type === 'danger',
        'tag--default': this.type === 'default',
        // Sizes
        'tag--small': this.size === 'small',
        'tag--medium': this.size === 'medium',
        'tag--large': this.size === 'large',
        // Modifers
        'tag--pill': this.pill,
        'tag--clearable': this.clearable,
      } }, index.h("span", { part: "content", class: "tag__content" }, index.h("slot", null)), !!this.clearable && (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-x", viewBox: "0 0 16 16" }, index.h("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" })))));
  }
};
ScTag.style = scTagCss;

exports.sc_tag = ScTag;

//# sourceMappingURL=sc-tag.cjs.entry.js.map