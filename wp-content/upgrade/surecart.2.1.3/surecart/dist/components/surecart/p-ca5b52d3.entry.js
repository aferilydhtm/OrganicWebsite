import{r as t}from"./p-25a9e68f.js";const s=":host{display:inline-block}";const i=class{constructor(s){t(this,s);this.locale=undefined;this.value=0;this.unit="byte";this.display="short"}render(){if(isNaN(this.value)){return""}const t=["","kilo","mega","giga","tera"];const s=["","kilo","mega","giga","tera","peta"];const i=this.unit==="bit"?t:s;const a=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1));const n=i[a]+this.unit;const e=parseFloat((this.value/Math.pow(1e3,a)).toPrecision(3));return new Intl.NumberFormat(this.locale,{style:"unit",unit:n,unitDisplay:this.display}).format(e)}};i.style=s;export{i as sc_format_bytes};
//# sourceMappingURL=p-ca5b52d3.entry.js.map