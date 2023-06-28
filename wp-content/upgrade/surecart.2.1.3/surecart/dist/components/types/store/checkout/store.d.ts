import { Checkout, Product } from '../../types';
interface Store {
  formId: number | string;
  groupId: string;
  mode: 'live' | 'test';
  locks: string[];
  product: Product;
  checkout: Checkout;
  currencyCode: string;
  abandonedCheckoutReturnUrl: string;
  abandonedCheckoutEnabled: boolean;
}
declare const state: Store, onChange: import("@stencil/store/dist/types").OnChangeHandler<Store>, on: import("@stencil/store/dist/types").OnHandler<Store>, set: import("@stencil/store/dist/types").Setter<Store>, get: import("@stencil/store/dist/types").Getter<Store>, dispose: () => void;
export default state;
export { state, onChange, on, set, get, dispose };
