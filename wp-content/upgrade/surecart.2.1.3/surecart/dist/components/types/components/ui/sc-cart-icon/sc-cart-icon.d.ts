/**
 * @part base - The elements base wrapper.
 * @part container - The container.
 * @part icon__base - The icon base wrapper.
 */
export declare class ScCartIcon {
  /** The icon to show. */
  icon: string;
  /** The count to show in the cart icon. */
  count: number;
  /** The form id to use for the cart. */
  formId: string;
  /** Are we in test or live mode. */
  mode: 'test' | 'live';
  order(): any;
  /** Count the number of items in the cart. */
  getItemsCount(): number;
  render(): any;
}
