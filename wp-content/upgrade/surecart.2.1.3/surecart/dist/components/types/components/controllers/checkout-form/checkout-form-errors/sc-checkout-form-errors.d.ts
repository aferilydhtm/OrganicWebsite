import { FormState, ResponseError } from '../../../../types';
/**
 * This component listens for a confirmed event and redirects to the success url.
 */
export declare class ScCheckoutFormErrors {
  /** The current order. */
  checkoutState: FormState;
  /** Error to display. */
  error: ResponseError | null;
  /** This filters the error message with some more client friendly error messages. */
  getErrorMessage(error: any): any;
  /** First will display validation error, then main error if no validation errors. */
  errorMessage(): any;
  render(): any;
}
