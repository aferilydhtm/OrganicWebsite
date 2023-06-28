'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const consumer = require('./consumer-51f6d265.js');
const index$1 = require('./index-cf22257b.js');

const scPriceChoicesCss = "sc-price-choices{display:block;position:relative}sc-block-ui{z-index:9}";

const ScPriceChoices = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scRemoveLineItem = index.createEvent(this, "scRemoveLineItem", 7);
    this.scUpdateLineItem = index.createEvent(this, "scUpdateLineItem", 7);
    this.label = undefined;
    this.columns = 1;
    this.required = true;
    this.order = undefined;
  }
  handleChange() {
    this.el.querySelectorAll('sc-price-choice').forEach(priceChoice => {
      var _a;
      const choice = priceChoice.querySelector('sc-choice') || priceChoice.querySelector('sc-choice-container');
      if (!(choice === null || choice === void 0 ? void 0 : choice.checked)) {
        this.scRemoveLineItem.emit({ price_id: priceChoice.priceId, quantity: priceChoice.quantity });
      }
      else {
        const lineItem = index$1.getLineItemByPriceId((_a = this.order) === null || _a === void 0 ? void 0 : _a.line_items, choice.value);
        this.scUpdateLineItem.emit({ price_id: priceChoice.priceId, quantity: (lineItem === null || lineItem === void 0 ? void 0 : lineItem.quantity) || (priceChoice === null || priceChoice === void 0 ? void 0 : priceChoice.quantity) || 1 });
      }
    });
  }
  render() {
    return (index.h(index.Fragment, null, index.h("sc-choices", { label: this.label, required: this.required, class: "loaded price-selector", style: { '--columns': this.columns.toString() } }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
consumer.openWormhole(ScPriceChoices, ['order'], false);
ScPriceChoices.style = scPriceChoicesCss;

exports.sc_price_choices = ScPriceChoices;

//# sourceMappingURL=sc-price-choices.cjs.entry.js.map