import{r as t,h as o,a as s}from"./p-25a9e68f.js";const e=':host{display:block;--toggle-spacing:0}::slotted(*){margin-bottom:var(--toggle-spacing)}::slotted(:not(:first-child):not([style*="display: none"])){border-top:1px solid var(--sc-input-border-color)}';const l=class{constructor(o){t(this,o);this.accordion=false;this.collapsible=true;this.theme="default"}getToggles(){var t,o,s;let e=this.el.shadowRoot.querySelector("slot");if(!e)return;return((s=(o=(t=e===null||e===void 0?void 0:e.assignedNodes)===null||t===void 0?void 0:t.call(e))===null||o===void 0?void 0:o.filter)===null||s===void 0?void 0:s.call(o,(t=>t.nodeName==="SC-TOGGLE")))||[]}handleShowChange(t){if(t.target.tagName!=="SC-TOGGLE")return;if(this.accordion){this.getToggles().map((o=>o.open=t.target===o))}}handleCollapibleChange(){this.getToggles().map((t=>t.collapsible=this.collapsible))}componentDidLoad(){this.handleCollapibleChange();const t=this.getToggles();if((t===null||t===void 0?void 0:t.length)&&!t.some((t=>t.open))){t[0].open=true}}render(){const t="container"===this.theme?"sc-card":"div";return o(t,{class:{toggles:true,[`toggles--theme-${this.theme}`]:true},part:"base","no-padding":true},o("slot",null))}get el(){return s(this)}static get watchers(){return{collapsible:["handleCollapibleChange"]}}};l.style=e;export{l as sc_toggles};
//# sourceMappingURL=p-8636f7a0.entry.js.map