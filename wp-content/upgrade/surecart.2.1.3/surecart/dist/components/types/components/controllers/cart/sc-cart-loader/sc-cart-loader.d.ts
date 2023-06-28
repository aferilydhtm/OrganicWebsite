export declare class ScCartLoader {
  /** The form id to use for the cart. */
  formId: string;
  /** The mode for the form. */
  mode: 'live' | 'test';
  /** The cart template to inject when opened. */
  template: string;
  render(): any;
}
