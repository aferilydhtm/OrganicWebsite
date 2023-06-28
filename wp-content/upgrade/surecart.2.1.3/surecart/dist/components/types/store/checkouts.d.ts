import { Checkout } from '../types';
declare const store: import("@stencil/store").ObservableMap<{
  live: any;
  test: any;
}>;
export default store;
/** Get the checkout. */
export declare const getOrder: (formId: number | string, mode: 'live' | 'test') => any;
export declare const getCheckout: (formId: number | string, mode: 'live' | 'test') => any;
/** Set the checkout. */
export declare const setOrder: (data: Checkout, formId: number | string) => void;
export declare const setCheckout: (data: Checkout, formId: number | string) => void;
/** Clear the order from the store. */
export declare const clearOrder: (formId: number | string, mode: 'live' | 'test') => void;
export declare const clearCheckout: (formId: number | string, mode: 'live' | 'test') => void;
