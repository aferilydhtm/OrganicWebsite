import{h}from"@stencil/core";export class ScTag{constructor(){this.type="default",this.size="medium",this.pill=!1,this.clearable=!1}handleClearClick(){this.scClear.emit(this)}render(){return h("span",{part:"base",onClick:()=>this.handleClearClick(),class:{tag:!0,"tag--primary":"primary"===this.type,"tag--success":"success"===this.type,"tag--info":"info"===this.type,"tag--warning":"warning"===this.type,"tag--danger":"danger"===this.type,"tag--default":"default"===this.type,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--clearable":this.clearable}},h("span",{part:"content",class:"tag__content"},h("slot",null)),!!this.clearable&&h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16"},h("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})))}static get is(){return"sc-tag"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-tag.scss"]}}static get styleUrls(){return{$:["sc-tag.css"]}}static get properties(){return{type:{type:"string",mutable:!1,complexType:{original:"'primary' | 'success' | 'info' | 'warning' | 'danger' | 'default'",resolved:'"danger" | "default" | "info" | "primary" | "success" | "warning"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The tag's type."},attribute:"type",reflect:!0,defaultValue:"'default'"},size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The tag's size."},attribute:"size",reflect:!0,defaultValue:"'medium'"},pill:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Draws a pill-style tag with rounded edges."},attribute:"pill",reflect:!0,defaultValue:"false"},clearable:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Makes the tag clearable."},attribute:"clearable",reflect:!1,defaultValue:"false"}}}static get events(){return[{method:"scClear",name:"scClear",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"ScTag",resolved:"ScTag",references:{ScTag:{location:"global"}}}}]}}