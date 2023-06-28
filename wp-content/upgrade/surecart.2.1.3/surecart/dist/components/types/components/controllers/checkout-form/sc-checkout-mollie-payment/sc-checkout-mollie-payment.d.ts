import { EventEmitter } from '../../../../stencil-public-runtime';
import { PaymentMethodType, ResponseError } from '../../../../types';
export declare class ScCheckoutMolliePayment {
  processorId: string;
  method: string;
  error: ResponseError;
  methods: PaymentMethodType[];
  /** Error event */
  scError: EventEmitter<ResponseError>;
  componentWillLoad(): void;
  fetchMethods(): Promise<void>;
  renderLoading(): any;
  render(): any;
}
