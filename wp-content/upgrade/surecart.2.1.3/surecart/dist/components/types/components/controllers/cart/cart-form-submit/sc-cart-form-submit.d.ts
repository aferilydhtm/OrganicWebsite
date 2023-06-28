export declare class ScCartFormSubmit {
  /** Is the cart busy */
  busy: boolean;
  /** The button type. */
  type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text' | 'link';
  /** The button's size. */
  size: 'small' | 'medium' | 'large';
  /** Show a full-width button. */
  full: boolean;
  /** Icon to show. */
  icon: string;
  render(): any;
}
