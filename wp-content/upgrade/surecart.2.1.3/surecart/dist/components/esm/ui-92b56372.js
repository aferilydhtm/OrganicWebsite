import{c as createStore}from"./index-aabdbcfe.js";const store=createStore((()=>({cart:{open:!1}})),((t,e)=>JSON.stringify(t)!==JSON.stringify(e))),{state:state}=store,toggleCart=(t=null)=>store.set("cart",{...state.cart,open:null!==t?t:!state.cart.open});export{store as s,toggleCart as t};