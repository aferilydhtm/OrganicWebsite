import { EventEmitter } from '../../../stencil-public-runtime';
import { Checkout, FormState, FormStateSetter, PaymentIntent, ProcessorName } from '../../../types';
export declare class ScStripePaymentElement {
  el: HTMLScStripePaymentElementElement;
  /** Holds the element container. */
  private container;
  private elements;
  private element;
  private stripe;
  /** The Payment Intent */
  stripePaymentIntent: PaymentIntent;
  /** Order to watch */
  order: Checkout;
  /** Should we collect an address? */
  address: boolean;
  /** Success url to redirect. */
  successUrl: string;
  /** The current form state. */
  formState: FormState;
  /** The selected processor name. */
  selectedProcessorId: ProcessorName;
  /** The error. */
  error: string;
  /** Is this yet loaded. */
  loaded: boolean;
  /** Are we confirming the order? */
  confirming: boolean;
  /** The order/invoice was paid for. */
  scPaid: EventEmitter<void>;
  /** There was a payment error. */
  scPayError: EventEmitter<any>;
  /** Set the state */
  scSetState: EventEmitter<FormStateSetter>;
  /** Maybe load the stripe element on load. */
  componentDidLoad(): Promise<void>;
  handleUpdatedChange(val: any, prev: any): Promise<void>;
  initialize(): Promise<void>;
  handleUpdateElement(): void;
  /**
   * Watch order status and maybe confirm the order.
   */
  maybeConfirmOrder(val: FormState): Promise<void>;
  confirm(type: any, args?: {}): Promise<void>;
  loadElement(): void;
  render(): any;
}
