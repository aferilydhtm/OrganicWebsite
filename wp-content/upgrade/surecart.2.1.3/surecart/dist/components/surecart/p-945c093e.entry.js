import{r as s,h as t,F as e}from"./p-25a9e68f.js";import{a}from"./p-d8453138.js";import"./p-1c2e2695.js";const r=":host{display:block}";const i=class{constructor(t){s(this,t);this.open=true;this.type="primary";this.successUrl=undefined;this.set=undefined;this.loading=undefined;this.error=undefined;this.success=undefined;this.enableValidation=true}handleSetChange(){setTimeout((()=>{this.input&&this.input.triggerFocus()}),50)}async dismiss(){this.loading=true;this.error="";try{await a({path:`wp/v2/users/me`,method:"PATCH",data:{meta:{default_password_nag:false}}});this.open=false}catch(s){this.error=(s===null||s===void 0?void 0:s.message)||wp.i18n.__("Something went wrong","surecart");this.loading=false}}validatePassword(s){const t=new RegExp("^(?=.*?[#?!@$%^&*-]).{6,}$");if(t.test(s))return true;return false}async handleSubmit(s){this.loading=true;this.error="";try{const{password:t,password_confirm:e}=await s.target.getFormJson();if(t!==e){throw{message:wp.i18n.__("Passwords do not match.","surecart")}}if(this.enableValidation&&!this.validatePassword(t)){throw{message:wp.i18n.__("Passwords should at least 6 characters and contain one special character.","surecart")}}await a({path:`wp/v2/users/me`,method:"PATCH",data:{password:t,meta:{default_password_nag:false}}});this.dismiss();this.success=true}catch(s){this.error=(s===null||s===void 0?void 0:s.message)||wp.i18n.__("Something went wrong","surecart");this.loading=false}}render(){if(this.success){return t("sc-alert",{type:"success",open:true},t("span",{slot:"title"},wp.i18n.__("Success!","surecart")),wp.i18n.__("You have successfully set your password.","surecart"))}return t("sc-alert",{type:this.type,open:this.open,exportparts:"base, icon, text, title, message, close-icon",style:{position:"relative"}},!!this.error&&this.error,this.set?t("sc-dashboard-module",{class:"customer-details"},t("span",{slot:"heading"},wp.i18n.__("Set A Password","surecart")," "),t("sc-button",{type:"text",size:"small",slot:"end",onClick:()=>this.set=false},t("sc-icon",{name:"x",slot:"prefix"}),wp.i18n.__("Cancel","surecart")),t("sc-card",null,t("sc-form",{onScFormSubmit:s=>this.handleSubmit(s)},t("sc-input",{label:wp.i18n.__("New Password","surecart"),name:"password",type:"password",required:true,ref:s=>this.input=s}),t("sc-input",{label:wp.i18n.__("Confirm New Password","surecart"),name:"password_confirm",type:"password",required:true}),t("div",null,t("sc-button",{type:"primary",full:true,submit:true,busy:this.loading},wp.i18n.__("Update Password","surecart")))))):t(e,null,t("slot",{name:"title",slot:"title"},wp.i18n.__("Reminder","surecart")),t("slot",null,wp.i18n.__("You have not yet set a password. Please set a password for your account.","surecart")),t("sc-flex",{"justify-content":"flex-start"},t("sc-button",{size:"small",type:"primary",onClick:()=>this.set=true},wp.i18n.__("Set A Password","surecart")),t("sc-button",{size:"small",type:"text",onClick:()=>this.dismiss()},wp.i18n.__("Dismiss","surecart")))),this.loading&&t("sc-block-ui",{spinner:true}))}static get watchers(){return{set:["handleSetChange"]}}};i.style=r;export{i as sc_password_nag};
//# sourceMappingURL=p-945c093e.entry.js.map