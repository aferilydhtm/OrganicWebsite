import { EventEmitter } from '../../../../stencil-public-runtime';
import { LineItem } from '../../../../types';
export declare class ScCartHeader {
  lineItems: Array<LineItem>;
  scCloseCart: EventEmitter<void>;
  /** Count the number of items in the cart. */
  getItemsCount(): number;
  render(): any;
}
