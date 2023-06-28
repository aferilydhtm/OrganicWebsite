'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const universe = require('./universe-874f42bb.js');
const index$1 = require('./index-cf22257b.js');
const index$2 = require('./index-b901844d.js');
const watchers = require('./watchers-503cdd2a.js');
const ui = require('./ui-c6cc5556.js');
require('./watchers-bce289f5.js');
require('./watchers-437b71fb.js');
require('./index-261b56ec.js');
require('./getters-f0455d23.js');
require('./util-872b1a55.js');
require('./fetch-b673a242.js');
require('./add-query-args-17c551b6.js');
require('./get-query-arg-53bf21e2.js');

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
    index.registerInstance(this, hostRef);
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
    return watchers.getOrder(this === null || this === void 0 ? void 0 : this.formId, this.mode);
  }
  /** Add the item to cart. */
  async addToCart() {
    const { price } = await this.form.getFormJson();
    try {
      this.busy = true;
      // if it's ad_hoc, update the amount. Otherwise increment the quantity.
      const order = await this.addOrUpdateLineItem({ ...(!!price ? { ad_hoc_amount: parseInt(price) || null } : {}) });
      // store the checkout in localstorage and open the cart
      watchers.setOrder(order, this.formId);
      ui.store.set('cart', { ...ui.store.state.cart, ...{ open: true } });
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
    let existingData = index$1.convertLineItemsToLineItemData(((_a = this.getOrder()) === null || _a === void 0 ? void 0 : _a.line_items) || []);
    // Line item does not exist. Add it.
    return (await index$2.createOrUpdateCheckout({
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
    universe.Universe.create(this, this.state());
  }
  state() {
    return {
      busy: this.busy,
      error: this.error,
      order: this.getOrder(),
    };
  }
  render() {
    return (index.h("sc-form", { ref: el => (this.form = el), onScSubmit: () => {
        this.addToCart();
      } }, this.error && (index.h("sc-alert", { open: !!this.error, type: "danger" }, index.h("span", { slot: "title" }, wp.i18n.__('Error', 'surecart')), this.error)), index.h(universe.Universe.Provider, { state: this.state() }, index.h("slot", null))));
  }
};
ScCartForm.style = "sc-cart-form { display: inline-block }";

exports.sc_cart_form = ScCartForm;

//# sourceMappingURL=sc-cart-form.cjs.entry.js.map