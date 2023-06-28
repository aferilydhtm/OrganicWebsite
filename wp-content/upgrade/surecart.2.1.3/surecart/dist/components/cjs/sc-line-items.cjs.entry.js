'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const consumer = require('./consumer-51f6d265.js');
const index$1 = require('./index-cf22257b.js');
const price = require('./price-5efc931a.js');
require('./currency-2733c607.js');

const scLineItemsCss = ":host{display:block}:slotted(*~*){margin-top:20px}.line-items{display:grid;gap:var(--sc-form-row-spacing)}.line-item{display:grid;gap:var(--sc-spacing-small)}.fee__description{opacity:0.75}";

const ScLineItems = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scUpdateLineItem = index.createEvent(this, "scUpdateLineItem", 7);
    this.scRemoveLineItem = index.createEvent(this, "scRemoveLineItem", 7);
    this.order = undefined;
    this.busy = undefined;
    this.prices = undefined;
    this.editable = undefined;
    this.removable = undefined;
    this.editLineItems = true;
    this.removeLineItems = true;
    this.lockedChoices = [];
  }
  /** Update quantity for this line item. */
  updateQuantity(item, quantity) {
    this.scUpdateLineItem.emit({ price_id: item.price.id, quantity });
  }
  removeLineItem(item) {
    this.scRemoveLineItem.emit({ price_id: item.price.id, quantity: 1 });
  }
  /** Only append price name if there's more than one product price in the session. */
  getName(item) {
    var _a, _b, _c, _d, _e;
    const otherPrices = Object.keys(this.prices || {}).filter(key => {
      const price = this.prices[key];
      // @ts-ignore
      return price.product === item.price.product.id;
    });
    let name = '';
    if (otherPrices.length > 1) {
      name = `${(_b = (_a = item === null || item === void 0 ? void 0 : item.price) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.name} \u2013 ${(_c = item === null || item === void 0 ? void 0 : item.price) === null || _c === void 0 ? void 0 : _c.name}`;
    }
    else {
      name = (_e = (_d = item === null || item === void 0 ? void 0 : item.price) === null || _d === void 0 ? void 0 : _d.product) === null || _e === void 0 ? void 0 : _e.name;
    }
    return name;
  }
  // Is this price choice locked?
  isLocked(item) {
    return this.lockedChoices.some(choice => choice.id === item.price.id);
  }
  isEditable(item) {
    var _a;
    // ad hoc prices cannot have quantity.
    if ((_a = item === null || item === void 0 ? void 0 : item.price) === null || _a === void 0 ? void 0 : _a.ad_hoc) {
      return false;
    }
    // if the item has a bump amount, it cannot have quantity.
    if (item === null || item === void 0 ? void 0 : item.bump_amount) {
      return false;
    }
    if (this.editable !== null)
      return this.editable;
    return this.editLineItems;
  }
  isRemovable() {
    if (this.removable !== null)
      return this.removable;
    return this.removeLineItems;
  }
  render() {
    var _a, _b, _c, _d, _e;
    if (!!this.busy && !((_c = (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.line_items) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.length)) {
      return (index.h("sc-line-item", null, index.h("sc-skeleton", { style: { 'width': '50px', 'height': '50px', '--border-radius': '0' }, slot: "image" }), index.h("sc-skeleton", { slot: "title", style: { width: '120px', display: 'inline-block' } }), index.h("sc-skeleton", { slot: "description", style: { width: '60px', display: 'inline-block' } }), index.h("sc-skeleton", { style: { width: '120px', display: 'inline-block' }, slot: "price" }), index.h("sc-skeleton", { style: { width: '60px', display: 'inline-block' }, slot: "price-description" })));
    }
    return (index.h("div", { class: "line-items" }, (((_e = (_d = this.order) === null || _d === void 0 ? void 0 : _d.line_items) === null || _e === void 0 ? void 0 : _e.data) || [])
      .sort((a, b) => {
      var _a, _b, _c, _d;
      if (((_a = a.price) === null || _a === void 0 ? void 0 : _a.id) < ((_b = b.price) === null || _b === void 0 ? void 0 : _b.id))
        return -1;
      return ((_c = a.price) === null || _c === void 0 ? void 0 : _c.id) > ((_d = b.price) === null || _d === void 0 ? void 0 : _d.id) ? 1 : 0;
    })
      .map(item => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      return (index.h("div", { class: "line-item" }, index.h("sc-product-line-item", { key: item.id, imageUrl: (_b = (_a = item === null || item === void 0 ? void 0 : item.price) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.image_url, name: (_d = (_c = item === null || item === void 0 ? void 0 : item.price) === null || _c === void 0 ? void 0 : _c.product) === null || _d === void 0 ? void 0 : _d.name, max: (_f = (_e = item === null || item === void 0 ? void 0 : item.price) === null || _e === void 0 ? void 0 : _e.product) === null || _f === void 0 ? void 0 : _f.purchase_limit, editable: this.isEditable(item), removable: this.isRemovable(), quantity: item.quantity, fees: (_g = item === null || item === void 0 ? void 0 : item.fees) === null || _g === void 0 ? void 0 : _g.data, setupFeeTrialEnabled: (_h = item === null || item === void 0 ? void 0 : item.price) === null || _h === void 0 ? void 0 : _h.setup_fee_trial_enabled, amount: item.ad_hoc_amount !== null ? item.ad_hoc_amount : item.subtotal_amount, scratchAmount: item.ad_hoc_amount == null && (item === null || item === void 0 ? void 0 : item.scratch_amount), currency: (_j = this.order) === null || _j === void 0 ? void 0 : _j.currency, trialDurationDays: (_k = item === null || item === void 0 ? void 0 : item.price) === null || _k === void 0 ? void 0 : _k.trial_duration_days, interval: !!(item === null || item === void 0 ? void 0 : item.price) && price.intervalString(item === null || item === void 0 ? void 0 : item.price, { showOnce: index$1.hasSubscription(this.order) }), onScUpdateQuantity: e => this.updateQuantity(item, e.detail), onScRemove: () => this.removeLineItem(item) })));
    })));
  }
};
consumer.openWormhole(ScLineItems, ['order', 'busy', 'prices', 'lockedChoices', 'editLineItems', 'removeLineItems'], false);
ScLineItems.style = scLineItemsCss;

exports.sc_line_items = ScLineItems;

//# sourceMappingURL=sc-line-items.cjs.entry.js.map