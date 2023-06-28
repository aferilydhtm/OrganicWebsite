'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');

const scBlockUiCss = ":host{display:block;position:absolute;top:-5px;left:-5px;right:-5px;bottom:-5px;overflow:hidden;display:flex;align-items:center;justify-content:center}:host>*{z-index:1}:host:after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;cursor:wait;background:var(--sc-block-ui-background-color, var(--sc-color-white));opacity:var(--sc-block-ui-opacity, 0.15)}:host.transparent:after{background:transparent}.overlay__content{font-size:var(--sc-font-size-large);font-weight:var(--sc-font-weight-semibold);display:grid;gap:0.5em;text-align:center}";

const ScBlockUi = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.zIndex = 1;
    this.transparent = undefined;
    this.spinner = undefined;
  }
  render() {
    return (index.h("div", { part: "base", class: { overlay: true, transparent: this.transparent }, style: { 'z-index': this.zIndex.toString() } }, index.h("div", { class: "overlay__content", part: "content" }, index.h("slot", { name: "spinner" }, !this.transparent && this.spinner && index.h("sc-spinner", null)), index.h("slot", null))));
  }
};
ScBlockUi.style = scBlockUiCss;

exports.sc_block_ui = ScBlockUi;

//# sourceMappingURL=sc-block-ui.cjs.entry.js.map