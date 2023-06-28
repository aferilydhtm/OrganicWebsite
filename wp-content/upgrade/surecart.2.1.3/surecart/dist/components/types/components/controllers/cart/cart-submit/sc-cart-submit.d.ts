export declare class ScCartSubmit {
  /** Is the cart busy */
  busy: boolean;
  /** The button type. */
  type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text' | 'link';
  /** The button's size. */
  size: 'small' | 'medium' | 'large';
  /** Show a full-width button. */
  full: boolean;
  checkoutLink: string;
  /** Icon to show. */
  icon: string;
  render(): any;
}
