import { EventEmitter } from '../../../../stencil-public-runtime';
import { Checkout, ResponseError, TaxIdentifier, TaxProtocol } from '../../../../types';
export declare class ScOrderTaxIdInput {
  /** The order */
  order: Partial<Checkout>;
  /** Force show the field. */
  show: boolean;
  /** Tax identifier */
  taxIdentifier: TaxIdentifier;
  /** The tax protocol. */
  taxProtocol: TaxProtocol;
  /** Is this busy */
  busy: boolean;
  /** Other zones label */
  otherLabel: string;
  /** GST zone label */
  caGstLabel: string;
  /** AU zone label */
  auAbnLabel: string;
  /** UK zone label */
  gbVatLabel: string;
  /** EU zone label */
  euVatLabel: string;
  /** Make a request to update the order. */
  scUpdateOrder: EventEmitter<{
    data: Partial<Checkout>;
    options?: {
      silent?: boolean;
    };
  }>;
  /** Error event */
  scError: EventEmitter<ResponseError>;
  getStatus(): "invalid" | "unknown" | "valid";
  maybeUpdateOrder(tax_identifier: any): Promise<void>;
  render(): any;
}
