import state from"./store";export const currentFormState=()=>state.formState.value;export const formLoading=()=>"loading"===state.formState.value;export const formBusy=()=>["updating","finalizing","paying","confirming"].includes(state.formState.value);export const formPaying=()=>["finalizing","paying","confirming"].includes(state.formState.value);