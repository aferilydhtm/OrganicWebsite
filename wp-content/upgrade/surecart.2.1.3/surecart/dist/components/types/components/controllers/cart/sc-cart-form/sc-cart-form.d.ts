import { Checkout, LineItemData } from '../../../../types';
export declare class ScCartForm {
  private form;
  /** The quantity */
  quantity: number;
  /** The price id to add. */
  priceId: string;
  /** Are we in test or live mode. */
  mode: 'test' | 'live';
  /** The form id to use for the cart. */
  formId: string;
  order: Checkout;
  /** Is it busy */
  busy: boolean;
  error: string;
  /** Find a line item with this price. */
  getLineItem(): false | LineItemData;
  getOrder(): any;
  /** Add the item to cart. */
  addToCart(): Promise<void>;
  addOrUpdateLineItem(data?: any): Promise<Checkout>;
  componentWillLoad(): void;
  state(): {
    busy: boolean;
    error: string;
    order: any;
  };
  render(): any;
}
