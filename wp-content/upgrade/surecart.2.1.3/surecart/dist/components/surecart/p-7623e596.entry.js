import{r as s,h as t,F as i,a as n,H as e}from"./p-25a9e68f.js";import{a as o}from"./p-1c2e2695.js";const l=":host{display:block}.download__details{opacity:0.75}";const d=class{constructor(t){s(this,t);this.allLink=undefined;this.heading=undefined;this.busy=undefined;this.loading=undefined;this.requestNonce=undefined;this.error=undefined;this.purchases=[]}renderEmpty(){return t("div",null,t("sc-divider",{style:{"--spacing":"0"}}),t("slot",{name:"empty"},t("sc-empty",{icon:"download"},wp.i18n.__("You don't have any downloads.","surecart"))))}renderLoading(){return t("sc-card",{"no-padding":true,style:{"--overflow":"hidden"}},t("sc-stacked-list",null,t("sc-stacked-list-row",{style:{"--columns":"2"},"mobile-size":0},t("div",{style:{padding:"0.5em"}},t("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),t("sc-skeleton",{style:{width:"20%"}})))))}renderList(){return this.purchases.map((s=>{var n,e,l;const d=(e=(n=s===null||s===void 0?void 0:s.product)===null||n===void 0?void 0:n.downloads)===null||e===void 0?void 0:e.data.filter((s=>!s.archived));const r=(d||[]).map((s=>{var t;return(s===null||s===void 0?void 0:s.media)?(t=s===null||s===void 0?void 0:s.media)===null||t===void 0?void 0:t.byte_size:0}));const a=r.reduce(((s,t)=>s+t),0);return t("sc-stacked-list-row",{href:!(s===null||s===void 0?void 0:s.revoked)?o(window.location.href,{action:"show",model:"download",id:s.id,nonce:this.requestNonce}):null,key:s.id,"mobile-size":0},t("sc-spacing",{style:{"--spacing":"var(--sc-spacing-xx--small)"}},t("div",null,t("strong",null,(l=s===null||s===void 0?void 0:s.product)===null||l===void 0?void 0:l.name)),t("div",{class:"download__details"},wp.i18n.sprintf(wp.i18n._n("%s file","%s files",d===null||d===void 0?void 0:d.length,"surecart"),d===null||d===void 0?void 0:d.length),!!a&&t(i,null," ","• ",t("sc-format-bytes",{value:a})))),t("sc-icon",{name:"chevron-right",slot:"suffix"}))}))}renderContent(){var s;if(this.loading){return this.renderLoading()}if(((s=this.purchases)===null||s===void 0?void 0:s.length)===0){return this.renderEmpty()}return t("sc-card",{"no-padding":true,style:{"--overflow":"hidden"}},t("sc-stacked-list",null,this.renderList()))}render(){return t("sc-dashboard-module",{class:"downloads-list",error:this.error},t("span",{slot:"heading"},t("slot",{name:"heading"},this.heading||wp.i18n.__("Items","surecart"))),t("slot",{name:"before"}),!!this.allLink&&t("sc-button",{type:"link",href:this.allLink,slot:"end"},wp.i18n.__("View all","surecart"),t("sc-icon",{name:"chevron-right",slot:"suffix"})),this.renderContent(),t("slot",{name:"after"}),this.busy&&t("sc-block-ui",null))}get el(){return n(this)}};d.style=l;const r=":host{display:block}::slotted(*:not(:last-child)){margin-bottom:var(--spacing)}";const a=class{constructor(t){s(this,t)}render(){return t(e,null,t("slot",null))}};a.style=r;export{d as sc_purchase_downloads_list,a as sc_spacing};
//# sourceMappingURL=p-7623e596.entry.js.map