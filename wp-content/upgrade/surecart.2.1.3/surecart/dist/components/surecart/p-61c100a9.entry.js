import{r as t}from"./p-25a9e68f.js";const e=class{constructor(e){t(this,e);this.locale=undefined;this.date=new Date;this.weekday=undefined;this.era=undefined;this.year=undefined;this.month=undefined;this.day=undefined;this.hour=undefined;this.minute=undefined;this.second=undefined;this.timeZoneName=undefined;this.timeZone=undefined;this.hourFormat="auto";this.type="date"}render(){const t=this.type==="timestamp"?parseInt(this.date.toString())*1e3:this.date;const e=new Date(t);const i=this.hourFormat==="auto"?undefined:this.hourFormat==="12";if(isNaN(e.getMilliseconds())){return}return new Intl.DateTimeFormat(this.locale,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:i}).format(e)}};export{e as sc_format_date};
//# sourceMappingURL=p-61c100a9.entry.js.map