import { EventEmitter } from '../../../../stencil-public-runtime';
import { Checkout } from '../../../../types';
export declare class ScOrderCouponForm {
  label: string;
  loading: boolean;
  busy: boolean;
  error: any;
  order: Checkout;
  collapsed: boolean;
  placeholder: string;
  buttonText: string;
  open: boolean;
  value: string;
  errorMessage: string;
  scApplyCoupon: EventEmitter<string>;
  handleErrorsChange(): void;
  render(): any;
}
