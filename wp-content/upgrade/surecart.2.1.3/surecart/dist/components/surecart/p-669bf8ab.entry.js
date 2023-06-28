import{r as t,c as i,h as o,a}from"./p-25a9e68f.js";import{g as s,a as e,s as l,c as r}from"./p-89fa6499.js";const n=new Set;function d(t){n.add(t);document.body.classList.add("sc-scroll-lock")}function c(t){n.delete(t);if(n.size===0){document.body.classList.remove("sc-scroll-lock")}}const h=":host{--width:31rem;--header-spacing:var(--sc-spacing-large);--body-spacing:var(--sc-spacing-large);--footer-spacing:var(--sc-spacing-large);display:contents}[hidden]{display:none !important}.dialog{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--sc-z-index-dialog);box-sizing:border-box;text-align:left}.dialog__panel{display:flex;flex-direction:column;z-index:2;width:var(--width);max-width:100vw;max-height:100vh;background-color:var(--sc-panel-background-color);border-radius:var(--sc-border-radius-medium);box-shadow:var(--sc-shadow-x-large);position:relative}.dialog__panel:focus{outline:none}@media screen and (max-width: 420px){.dialog__panel{max-height:80vh}}.dialog--open .dialog__panel{display:flex;opacity:1;transform:none}.dialog__header{flex:0 0 auto;display:flex;border-bottom:1px solid var(--sc-color-gray-300)}.dialog__title{flex:1 1 auto;font:inherit;font-size:var(--sc-font-size-large);line-height:var(--sc-line-height-dense);padding:var(--header-spacing);margin:0}.dialog__close{flex:0 0 auto;display:flex;align-items:center;font-size:var(--sc-font-size-x-large);padding:0 calc(var(--header-spacing) / 2);z-index:2}.dialog__body{flex:1 1 auto;padding:var(--body-spacing);overflow:var(--dialog-body-overflow, auto);-webkit-overflow-scrolling:touch}.dialog__footer{flex:0 0 auto;text-align:right;padding:var(--footer-spacing)}.dialog__footer ::slotted(sl-button:not(:first-of-type)){margin-left:var(--sc-spacing-x-small)}.dialog:not(.dialog--has-footer) .dialog__footer{display:none}.dialog__overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--sc-overlay-background-color)}";const f=class{constructor(o){t(this,o);this.scRequestClose=i(this,"scRequestClose",7);this.scShow=i(this,"scShow",7);this.scAfterShow=i(this,"scAfterShow",7);this.scHide=i(this,"scHide",7);this.scAfterHide=i(this,"scAfterHide",7);this.scInitialFocus=i(this,"scInitialFocus",7);this.open=false;this.label="";this.noHeader=false;this.hasFooter=false}async show(){if(this.open){return undefined}this.open=true}async hide(){if(!this.open){return undefined}this.open=false}requestClose(t){const i=this.scRequestClose.emit(t);if(i.defaultPrevented){const t=s(this.el,"dialog.denyClose");e(this.panel,t.keyframes,t.options);return}this.hide()}handleKeyDown(t){if(t.key==="Escape"){t.stopPropagation();this.requestClose("keyboard")}}async handleOpenChange(){if(this.open){this.scShow.emit();d(this.el);const t=this.el.querySelector("[autofocus]");if(t){t.removeAttribute("autofocus")}await Promise.all([l(this.dialog),l(this.overlay)]);this.dialog.hidden=false;requestAnimationFrame((()=>{const i=this.scInitialFocus.emit();if(!i.defaultPrevented){if(t){t.focus({preventScroll:true})}else{this.panel.focus({preventScroll:true})}}if(t){t.setAttribute("autofocus","")}}));const i=s(this.el,"dialog.show");const o=s(this.el,"dialog.overlay.show");await Promise.all([e(this.panel,i.keyframes,i.options),e(this.overlay,o.keyframes,o.options)]);this.scAfterShow.emit()}else{this.scHide.emit();await Promise.all([l(this.dialog),l(this.overlay)]);const t=s(this.el,"dialog.hide");const i=s(this.el,"dialog.overlay.hide");await Promise.all([e(this.panel,t.keyframes,t.options),e(this.overlay,i.keyframes,i.options)]);this.dialog.hidden=true;c(this.el);const o=this.originalTrigger;if(typeof(o===null||o===void 0?void 0:o.focus)==="function"){setTimeout((()=>o.focus()))}this.scAfterHide.emit()}}componentDidLoad(){this.hasFooter=!!this.el.querySelector('[slot="footer"]');this.dialog.hidden=!this.open;if(this.open){d(this.el)}}disconnectedCallback(){c(this.el)}render(){return o("div",{part:"base",ref:t=>this.dialog=t,class:{dialog:true,"dialog--open":this.open,"dialog--has-footer":this.hasFooter},onKeyDown:t=>this.handleKeyDown(t)},o("div",{part:"overlay",class:"dialog__overlay",onClick:t=>{t.preventDefault();t.stopImmediatePropagation();this.requestClose("overlay")},ref:t=>this.overlay=t,tabindex:"-1"}),o("div",{part:"panel",class:"dialog__panel",role:"dialog","aria-modal":"true","aria-hidden":this.open?"false":"true","aria-label":this.noHeader||this.label,"aria-labelledby":!this.noHeader||"title",ref:t=>this.panel=t,tabindex:"0"},!this.noHeader&&o("header",{part:"header",class:"dialog__header"},o("h2",{part:"title",class:"dialog__title",id:"title"},o("slot",{name:"label"}," ",this.label.length>0?this.label:String.fromCharCode(65279)," ")),o("sc-button",{class:"dialog__close",type:"text",circle:true,part:"close-button",exportparts:"base:close-button__base",onClick:t=>{t.preventDefault();t.stopImmediatePropagation();this.requestClose("close-button")}},o("sc-icon",{name:"x",label:wp.i18n.__("Close","surecart")}))),o("div",{part:"body",class:"dialog__body"},o("slot",null)),o("footer",{part:"footer",class:"dialog__footer"},o("slot",{name:"footer"}))))}get el(){return a(this)}static get watchers(){return{open:["handleOpenChange"]}}};r("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:150,easing:"ease"}});r("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:150,easing:"ease"}});r("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:150}});r("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:150}});r("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:150}});f.style=h;export{f as sc_dialog};
//# sourceMappingURL=p-669bf8ab.entry.js.map