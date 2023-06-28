import { Price } from '../../../../types';
declare const DefaultValue: {
  prices: Array<Price>;
  loading: boolean;
  submitting: boolean;
  price_ids: Array<string>;
  selectedPriceIds?: Array<string>;
  total: number;
  processor: 'stripe' | 'paypal';
  stripePublishableKey?: string;
};
export default DefaultValue;
