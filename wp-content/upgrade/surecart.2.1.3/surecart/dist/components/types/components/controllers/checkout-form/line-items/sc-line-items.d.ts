import { EventEmitter } from '../../../../stencil-public-runtime';
import { LineItem, LineItemData, Checkout, PriceChoice, Prices } from '../../../../types';
export declare class ScLineItems {
  order: Checkout;
  busy: boolean;
  prices: Prices;
  editable: boolean;
  removable: boolean;
  editLineItems: boolean;
  removeLineItems: boolean;
  lockedChoices: Array<PriceChoice>;
  /** Update the line item. */
  scUpdateLineItem: EventEmitter<LineItemData>;
  /** Remove the line item. */
  scRemoveLineItem: EventEmitter<LineItemData>;
  /** Update quantity for this line item. */
  updateQuantity(item: LineItem, quantity: number): void;
  removeLineItem(item: LineItem): void;
  /** Only append price name if there's more than one product price in the session. */
  getName(item: LineItem): string;
  isLocked(item: any): boolean;
  isEditable(item: LineItem): boolean;
  isRemovable(): boolean;
  render(): any;
}
