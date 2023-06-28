'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');

const scProvisionalBannerCss = ".sc-banner{background-color:var(--sc-color-brand-primary);color:white;display:flex;align-items:center;justify-content:center}.sc-banner>p{font-size:14px;line-height:1;margin:var(--sc-spacing-small)}.sc-banner>p a{color:inherit;font-weight:600;margin-left:10px;display:inline-flex;align-items:center;gap:8px;text-decoration:none;border-bottom:1px solid;padding-bottom:2px}";

const ScProvisionalBanner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.claimUrl = '';
  }
  render() {
    return (index.h("div", { class: { 'sc-banner': true } }, index.h("p", null, "Complete your store setup to go live.", index.h("a", { href: this.claimUrl }, "Complete Setup ", index.h("sc-icon", { name: "arrow-right" })))));
  }
};
ScProvisionalBanner.style = scProvisionalBannerCss;

exports.sc_provisional_banner = ScProvisionalBanner;

//# sourceMappingURL=sc-provisional-banner.cjs.entry.js.map