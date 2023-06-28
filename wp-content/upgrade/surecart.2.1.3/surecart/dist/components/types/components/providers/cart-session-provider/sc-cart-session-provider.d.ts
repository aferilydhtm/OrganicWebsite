import { EventEmitter } from '../../../stencil-public-runtime';
import { Checkout } from '../../../types';
export declare class ScCartSessionProvider {
  /** Element */
  el: HTMLElement;
  /** Order Object */
  order: Checkout;
  /** Update line items event */
  scUpdateOrderState: EventEmitter<Checkout>;
  /** Error event */
  scError: EventEmitter<{
    message: string;
    code?: string;
    data?: any;
    additional_errors?: any;
  } | {}>;
  /** Set the state */
  scSetState: EventEmitter<'loading' | 'busy' | 'navigating' | 'idle'>;
  /** Holds the checkout session to update. */
  session: Checkout;
  /** Sync this session back to parent. */
  handleSessionUpdate(val: any): void;
  handleUpdateSession(e: any): void;
  /** Handles coupon updates. */
  handleCouponApply(e: any): Promise<void>;
  /** Handle the error response. */
  handleErrorResponse(e: any): void;
  /** Fetch a session. */
  fetch(args?: {}): Promise<void>;
  /** Update a the order */
  update(data?: {}, query?: {}): Promise<void>;
  /** Updates a session with loading status changes. */
  loadUpdate(data?: {}): Promise<void>;
  render(): any;
}
