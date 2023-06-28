import { r as registerInstance, h } from './index-eabde489.js';
import { U as Universe } from './universe-3fa8aba0.js';
import { c as convertLineItemsToLineItemData } from './index-1ef9aa85.js';
import { c as createOrUpdateCheckout } from './index-813122a4.js';
import { g as getOrder, s as setOrder } from './watchers-9ca21ceb.js';
import { s as store } from './ui-92b56372.js';
import './watchers-9fc91d25.js';
import './watchers-4d606b62.js';
import './index-aabdbcfe.js';
import './getters-7ea74c9e.js';
import './util-c1d762c0.js';
import './fetch-34712ac6.js';
import './add-query-args-f4c5962b.js';
import './get-query-arg-cb6b8763.js';

const query = {
  expand: [
    'line_items',
    'line_item.price',
    'price.product',
    'customer',
    'customer.shipping_address',
    'payment_intent',
    'discount',
    'discount.promotion',
    'discount.coupon',
    'shipping_address',
    'tax_identifier',
  ],
};
const ScCartForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.quantity = 1;
    this.priceId = undefined;
    this.mode = 'live';
    this.formId = undefined;
    this.order = undefined;
    this.busy = undefined;
    this.error = undefined;
  }
  /** Find a line item with this price. */
  getLineItem() {
    var _a, _b;
    const order = this.getOrder();
    const lineItem = (((_a = order === null || order === void 0 ? void 0 : order.line_items) === null || _a === void 0 ? void 0 : _a.data) || []).find(item => { var _a; return ((_a = item.price) === null || _a === void 0 ? void 0 : _a.id) === this.priceId; });
    if (!(lineItem === null || lineItem === void 0 ? void 0 : lineItem.id)) {
      return false;
    }
    return {
      id: lineItem === null || lineItem === void 0 ? void 0 : lineItem.id,
      price_id: (_b = lineItem === null || lineItem === void 0 ? void 0 : lineItem.price) === null || _b === void 0 ? void 0 : _b.id,
      quantity: lineItem === null || lineItem === void 0 ? void 0 : lineItem.quantity,
    };
  }
  getOrder() {
    return getOrder(this === null || this === void 0 ? void 0 : this.formId, this.mode);
  }
  /** Add the item to cart. */
  async addToCart() {
    const { price } = await this.form.getFormJson();
    try {
      this.busy = true;
      // if it's ad_hoc, update the amount. Otherwise increment the quantity.
      const order = await this.addOrUpdateLineItem({ ...(!!price ? { ad_hoc_amount: parseInt(price) || null } : {}) });
      // store the checkout in localstorage and open the cart
      setOrder(order, this.formId);
      store.set('cart', { ...store.state.cart, ...{ open: true } });
    }
    catch (e) {
      console.error(e);
      this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
    }
    finally {
      this.busy = false;
    }
  }
  async addOrUpdateLineItem(data = {}) {
    var _a, _b;
    // get the current line item from the price id.
    let lineItem = this.getLineItem();
    // convert line items response to line items post.
    let existingData = convertLineItemsToLineItemData(((_a = this.getOrder()) === null || _a === void 0 ? void 0 : _a.line_items) || []);
    // Line item does not exist. Add it.
    return (await createOrUpdateCheckout({
      id: (_b = this.getOrder()) === null || _b === void 0 ? void 0 : _b.id,
      data: {
        live_mode: this.mode === 'live',
        line_items: [
          ...(existingData || []).map((item) => {
            // if the price ids match (we have already a line item)
            if (this.priceId === (item === null || item === void 0 ? void 0 : item.price_id)) {
              return {
                ...item,
                ...(!!(data === null || data === void 0 ? void 0 : data.ad_hoc_amount) ? { ad_hoc_amount: data === null || data === void 0 ? void 0 : data.ad_hoc_amount } : {}),
                quantity: !(item === null || item === void 0 ? void 0 : item.ad_hoc_amount) ? (item === null || item === void 0 ? void 0 : item.quantity) + 1 : 1, // only increase quantity if not ad_hoc.
              };
            }
            // return item.
            return item;
          }),
          // add a line item if one does not exist.
          ...(!lineItem
            ? [
              {
                price_id: this.priceId,
                ...(!!(data === null || data === void 0 ? void 0 : data.ad_hoc_amount) ? { ad_hoc_amount: data === null || data === void 0 ? void 0 : data.ad_hoc_amount } : {}),
                quantity: 1,
              },
            ]
            : []),
        ],
      },
      query: {
        ...query,
        form_id: this.formId,
      },
    }));
  }
  componentWillLoad() {
    Universe.create(this, this.state());
  }
  state() {
    return {
      busy: this.busy,
      error: this.error,
      order: this.getOrder(),
    };
  }
  render() {
    return (h("sc-form", { ref: el => (this.form = el), onScSubmit: () => {
        this.addToCart();
      } }, this.error && (h("sc-alert", { open: !!this.error, type: "danger" }, h("span", { slot: "title" }, wp.i18n.__('Error', 'surecart')), this.error)), h(Universe.Provider, { state: this.state() }, h("slot", null))));
  }
};
ScCartForm.style = "sc-cart-form { display: inline-block }";

export { ScCartForm as sc_cart_form };

//# sourceMappingURL=sc-cart-form.entry.js.map