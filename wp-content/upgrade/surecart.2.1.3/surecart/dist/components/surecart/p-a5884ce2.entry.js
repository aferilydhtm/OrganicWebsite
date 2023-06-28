import{r as e,h as r,a}from"./p-25a9e68f.js";const i=":host{display:inline-flex}.breadcrumb-item{display:inline-flex;align-items:center;font-family:var(--sc-font-sans);font-size:var(--sc-font-size-small);font-weight:var(--sc-font-weight-semibold);color:var(--sc-breadcrumb-color, var(--sc-color-gray-600));line-height:var(--sc-line-height-normal);white-space:nowrap}.breadcrumb-item__label{display:inline-block;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;text-decoration:none;color:inherit;background:none;border:none;border-radius:var(--sc-border-radius-medium);padding:0;margin:0;cursor:pointer;transition:color var(--sc-transition-fast) ease}:host(:not(:last-of-type)) .breadcrumb-item__label{color:var(--sc-breadcrumb-item-label-color, var(--sc-color-gray-900))}:host(:not(:last-of-type)) .breadcrumb-item__label:hover{color:var(--sc-breadcrumb-item-label-hover-color, var(--sc-color-primary-500))}:host(:not(:last-of-type)) .breadcrumb-item__label:active{color:var(--sc-breadcrumb-item-label-active-color, var(--sc-color-gray-900))}.breadcrumb-item__label:focus{box-shadow:var(--sc-focus-ring)}.breadcrumb-item__prefix,.breadcrumb-item__suffix{display:none;flex:0 0 auto;display:flex;align-items:center}.breadcrumb-item--has-prefix .breadcrumb-item__prefix{display:inline-flex;margin-right:var(--sc-spacing-x-small)}.breadcrumb-item--has-suffix .breadcrumb-item__suffix{display:inline-flex;margin-left:var(--sc-spacing-x-small)}:host(:last-of-type) .breadcrumb-item__separator{display:none}.breadcrumb-item__separator{display:inline-flex;align-items:center;margin:0 var(--sc-spacing-x-small);user-select:none}";const t=class{constructor(r){e(this,r);this.href=undefined;this.target=undefined;this.rel="noreferrer noopener";this.hasPrefix=undefined;this.hasSuffix=undefined}handleSlotChange(){this.hasPrefix=!!this.el.querySelector('[slot="prefix"]');this.hasSuffix=!!this.el.querySelector('[slot="suffix"]')}render(){const e=this.href?"a":"div";return r("div",{part:"base",class:{"breadcrumb-item":true,"breadcrumb-item--has-prefix":this.hasPrefix,"breadcrumb-item--has-suffix":this.hasSuffix}},r("span",{part:"prefix",class:"breadcrumb-item__prefix"},r("slot",{name:"prefix"})),r(e,{part:"label",class:"breadcrumb-item__label breadcrumb-item__label--link",href:this.href,target:this.target,rel:this.rel},r("slot",null)),r("span",{part:"suffix",class:"breadcrumb-item__suffix"},r("slot",{name:"suffix",onSlotchange:()=>this.handleSlotChange()})),r("span",{part:"separator",class:"breadcrumb-item__separator","aria-hidden":"true"},r("slot",{name:"separator",onSlotchange:()=>this.handleSlotChange()},r("sc-icon",{name:"chevron-right"}))))}get el(){return a(this)}};t.style=i;export{t as sc_breadcrumb};
//# sourceMappingURL=p-a5884ce2.entry.js.map