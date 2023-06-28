import { Checkout, TaxProtocol } from '../../../types';
export declare class ScFormComponentsValidator {
  el: HTMLScFormComponentsValidatorElement;
  /** Disable validation? */
  disabled: boolean;
  /** The order */
  order: Checkout;
  /** The tax protocol */
  taxProtocol: TaxProtocol;
  /** Is there an address field? */
  hasAddress: boolean;
  /** Is there a tax id field? */
  hasTaxIDField: boolean;
  /** Is there a bumps field? */
  hasBumpsField: boolean;
  /** Is there a tax line? */
  hasTaxLine: boolean;
  /** Is there a bump line? */
  hasBumpLine: boolean;
  handleOrderChange(): void;
  componentWillLoad(): void;
  addAddressField(): void;
  addTaxIDField(): void;
  addBumps(): void;
  addTaxLine(): void;
  render(): any;
}
