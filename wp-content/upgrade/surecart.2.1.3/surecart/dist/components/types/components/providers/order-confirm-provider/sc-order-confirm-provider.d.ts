import { EventEmitter } from '../../../stencil-public-runtime';
import { Checkout } from '../../../types';
/**
 * This component listens to the order status
 * and confirms the order when payment is successful.
 */
export declare class ScOrderConfirmProvider {
  /** The order confirm provider element */
  el: HTMLScOrderConfirmProviderElement;
  /** Whether to show success modal */
  showSuccessModal: boolean;
  confirmedCheckout: Checkout;
  /** Success url. */
  successUrl: string;
  /** Success text for the form. */
  successText: {
    title: string;
    description: string;
    button: string;
  };
  /** The order is paid event. */
  scOrderPaid: EventEmitter<Checkout>;
  scSetState: EventEmitter<string>;
  /** Error event. */
  scError: EventEmitter<{
    message: string;
    code?: string;
    data?: any;
    additional_errors?: any;
  } | {}>;
  /** Listen for paid event. This is triggered by Stripe or Paypal elements when payment succeeds. */
  handlePaidEvent(): void;
  /** Confirm the order. */
  confirmOrder(): Promise<void>;
  doGoogleAnalytics(): void;
  getSuccessUrl(): string;
  render(): any;
}
