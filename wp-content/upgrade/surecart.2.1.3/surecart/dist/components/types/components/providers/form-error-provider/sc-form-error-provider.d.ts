import { EventEmitter } from '../../../stencil-public-runtime';
import { FormState, FormStateSetter, ResponseError } from '../../../types';
/**
 * This component listens for a confirmed event and redirects to the success url.
 */
export declare class ScFormErrorProvider {
  /** The element. */
  el: HTMLScFormErrorProviderElement;
  /** The current order. */
  checkoutState: FormState;
  /** Set the state. */
  scUpdateError: EventEmitter<ResponseError>;
  /** Form state event. */
  scSetState: EventEmitter<FormStateSetter>;
  /** Error to display. */
  error: ResponseError | null;
  /** Trigger the error event when an error happens  */
  handleErrorUpdate(val: any): void;
  handleStateChange(val: any): void;
  /** Listen for error events in component. */
  handleErrorEvent(e: any): void;
  /** Listen for pay errors. */
  handlePayError(e: any): void;
  componentWillLoad(): void;
  maybeAddErrorsComponent(): void;
  render(): any;
}
