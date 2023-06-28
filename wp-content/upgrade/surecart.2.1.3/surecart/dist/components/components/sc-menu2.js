import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";const scMenuCss=":host{display:block}.menu{padding:var(--sc-spacing-x-small) 0}.menu:focus{outline:none}::slotted(sc-input){margin-top:-var(--sc-spacing-x-small)}::slotted(sc-divider){--spacing:var(--sc-spacing-x-small)}",ScMenu=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scSelect=createEvent(this,"scSelect",7),this.items=[]}handleClick(e){const t=e.target.closest("sc-menu-item");t&&!t.disabled&&this.scSelect.emit({item:t})}handleKeyDown(e){if("Enter"===e.key){const t=this.getCurrentItem();e.preventDefault(),t&&this.scSelect.emit({item:t})}if(" "===e.key&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getCurrentItem();let s=t?this.items.indexOf(t):0;if(this.items.length)return e.preventDefault(),"ArrowDown"===e.key?s++:"ArrowUp"===e.key?s--:"Home"===e.key?s=0:"End"===e.key&&(s=this.items.length-1),s<0&&(s=0),s>this.items.length-1&&(s=this.items.length-1),void this.setCurrentItem(this.items[s])}}getCurrentItem(){return this.items.find((e=>"0"===e.getAttribute("tabindex")))}async setCurrentItem(e){const t=e.disabled?this.items[0]:e;this.items.forEach((e=>{e.setAttribute("tabindex",e===t?"0":"-1")}))}syncItems(){const e=this.el.shadowRoot.querySelector("slot").assignedElements({flatten:!0});this.items=e.filter((e=>"sc-menu-item"===e.nodeName))}handleSlotChange(){this.syncItems()}render(){return h("div",{part:"base",class:"menu",role:"menu",tabindex:"0",onKeyDown:e=>this.handleKeyDown(e)},h("slot",{onSlotchange:()=>this.handleSlotChange()}))}get el(){return this}static get style(){return scMenuCss}},[1,"sc-menu",{setCurrentItem:[64]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-menu"].forEach((e=>{"sc-menu"===e&&(customElements.get(e)||customElements.define(e,ScMenu))}))}export{ScMenu as S,defineCustomElement as d};