import { r as registerInstance, h } from './index-eabde489.js';

const scBlockUiCss = ":host{display:block;position:absolute;top:-5px;left:-5px;right:-5px;bottom:-5px;overflow:hidden;display:flex;align-items:center;justify-content:center}:host>*{z-index:1}:host:after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;cursor:wait;background:var(--sc-block-ui-background-color, var(--sc-color-white));opacity:var(--sc-block-ui-opacity, 0.15)}:host.transparent:after{background:transparent}.overlay__content{font-size:var(--sc-font-size-large);font-weight:var(--sc-font-weight-semibold);display:grid;gap:0.5em;text-align:center}";

const ScBlockUi = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.zIndex = 1;
    this.transparent = undefined;
    this.spinner = undefined;
  }
  render() {
    return (h("div", { part: "base", class: { overlay: true, transparent: this.transparent }, style: { 'z-index': this.zIndex.toString() } }, h("div", { class: "overlay__content", part: "content" }, h("slot", { name: "spinner" }, !this.transparent && this.spinner && h("sc-spinner", null)), h("slot", null))));
  }
};
ScBlockUi.style = scBlockUiCss;

export { ScBlockUi as sc_block_ui };

//# sourceMappingURL=sc-block-ui.entry.js.map