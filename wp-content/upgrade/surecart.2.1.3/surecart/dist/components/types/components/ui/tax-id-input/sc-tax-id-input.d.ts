import { EventEmitter } from '../../../stencil-public-runtime';
export declare class ScTaxIdInput {
  /** The country code. */
  country: string;
  /** Force show the field. */
  show: boolean;
  /** Type of tax id */
  type: string;
  /** Tax ID Number */
  number: string;
  /** The status */
  status: 'valid' | 'invalid' | 'unknown';
  /** Is this loading? */
  loading: boolean;
  /** Help text. */
  help: string;
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
  scChange: EventEmitter<{
    number: string;
    number_type: string;
  }>;
  /** Make a request to update the order. */
  scInput: EventEmitter<Partial<{
    number: string;
    number_type: string;
  }>>;
  /** Change the Type */
  scInputType: EventEmitter<string>;
  /** Set the checkout state. */
  scSetState: EventEmitter<string>;
  handleCountryChange(): void;
  onLabelChange(): void;
  componentWillLoad(): void;
  renderStatus(): any;
  render(): any;
}
