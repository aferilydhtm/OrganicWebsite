import{a as o}from"./p-62338837.js";import{s as i}from"./p-b141815b.js";import{b as t,e as a}from"./p-b6ef0098.js";import{t as l}from"./p-ffdee0af.js";const r=async()=>{var e,d,r,c,s;if((null===(e=i.selectedPrice)||void 0===e?void 0:e.id)&&(!(null===(d=i.selectedPrice)||void 0===d?void 0:d.ad_hoc)||i.adHocAmount))try{i.busy=!0;const e=await o({checkout:t(null==i?void 0:i.formId,i.mode),data:{price:null===(r=i.selectedPrice)||void 0===r?void 0:r.id,...(null===(c=i.selectedPrice)||void 0===c?void 0:c.ad_hoc)?{ad_hoc_amount:i.adHocAmount}:{},quantity:(null===(s=i.selectedPrice)||void 0===s?void 0:s.ad_hoc)?1:i.quantity},live_mode:"test"!==i.mode});a(e,i.formId),l(!0),i.dialog=null}catch(o){console.error(o),i.error=o}finally{i.busy=!1}};export{r as s};