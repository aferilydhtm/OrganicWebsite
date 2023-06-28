import { Checkout } from '../../../../types';
export declare class ScLineItemTotal {
  total: 'total' | 'subtotal';
  loading: boolean;
  order: Checkout;
  size: 'large' | 'medium';
  order_key: {
    total: string;
    subtotal: string;
    amount_due: string;
  };
  render(): any;
}
