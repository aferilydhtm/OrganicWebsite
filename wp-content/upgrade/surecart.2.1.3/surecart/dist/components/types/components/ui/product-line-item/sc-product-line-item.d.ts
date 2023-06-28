import { EventEmitter } from '../../../stencil-public-runtime';
import { Fee, Media } from '../../../types';
/**
 * @part base - The elements base wrapper.
 * @part text - The text wrapper.
 * @part title - The product title.
 * @part static-quantity - The statically displayed quantity.
 * @part quantity__base - The quantity base wrapper.
 * @part input - The input control.
 * @part minus - The minus control.
 * @part minus-icon - The minus icon.
 * @part plus - The plus control.
 * @part plus-icon - The plus icon.
 * @part remove-icon__base - The remove icon base wrapper.
 * @part price - The price wrapper.
 * @part price__amount - The price amount.
 * @part price__description - The price description.
 * @part suffix - The suffix items.
 */
export declare class ScProductLineItem {
  el: HTMLScProductLineItemElement;
  /** Url for the product image */
  imageUrl: string;
  /** The product media */
  media: Media;
  /** Product name */
  name: string;
  /** Quantity */
  quantity: number;
  /** Product monetary amount */
  amount: number;
  /** Product line item fees. */
  fees: Fee[];
  /** Is the setup fee not included in the free trial? */
  setupFeeTrialEnabled: boolean;
  /** The line item scratch amount */
  scratchAmount: number;
  /** Currency for the product */
  currency: string;
  /** Recurring interval (i.e. monthly, once, etc.) */
  interval: string;
  /** Trial duration days */
  trialDurationDays: number;
  /** Is the line item removable */
  removable: boolean;
  /** Can we select the quantity */
  editable: boolean;
  /** The max allowed. */
  max: number;
  /** Emitted when the quantity changes. */
  scUpdateQuantity: EventEmitter<number>;
  /** Emitted when the quantity changes. */
  scRemove: EventEmitter<void>;
  renderPriceAndInterval(): any;
  render(): any;
}
