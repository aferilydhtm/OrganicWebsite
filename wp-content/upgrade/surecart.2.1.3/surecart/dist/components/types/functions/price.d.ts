import { Coupon, Price } from '../types';
export declare const convertAmount: (amount: number, currency: string) => number;
export declare const getHumanDiscount: (coupon: Coupon) => string;
export declare const getFormattedDiscount: (coupon: Coupon) => string;
export declare const getFormattedPrice: ({ amount, currency }: {
  amount: number;
  currency: string;
}) => string;
export declare const getCurrencySymbol: (code?: string) => string;
export declare const translateInterval: (amount: number, interval: string, prefix?: string, fallback?: string, showSingle?: boolean) => string;
export declare const translateAbbreviatedInterval: (amount: number, interval: string, fallback?: string, showSingle?: boolean) => string;
interface IntervalOptions {
  showOnce?: boolean;
  abbreviate?: boolean;
  labels?: {
    interval?: string;
    period?: string;
    once?: string;
  };
}
export declare const intervalString: (price: Price, options?: IntervalOptions) => string;
export declare const intervalCountString: (price: Price, prefix: any, fallback?: string, abbreviate?: boolean) => string;
export declare const periodCountString: (price: Price, abbreviate?: boolean) => string;
export declare const translateRemainingPayments: (payments: any) => string;
export {};
