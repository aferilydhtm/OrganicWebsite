import { r as registerInstance, h, F as Fragment, H as Host } from './index-eabde489.js';
import { i as intervalString } from './price-ad16bb2d.js';
import { s as state } from './watchers-7bf44f71.js';
import { a as availablePrices } from './getters-a5d1ca23.js';
import './currency-4692aeb2.js';
import './index-aabdbcfe.js';

const scProductPriceChoicesCss = ":host{display:block;text-align:left}";

const ScProductPriceChoices = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = undefined;
    this.showPrice = undefined;
  }
  renderPrice(price) {
    return (h(Fragment, null, h("sc-format-number", { type: "currency", value: price.amount, currency: price.currency }), h("span", { slot: "per" }, intervalString(price, {
      labels: {
        interval: wp.i18n.__('Every', 'surecart'),
        period: wp.i18n.__('for', 'surecart'),
        once: wp.i18n.__('Once', 'surecart'),
      },
      showOnce: true,
    }))));
  }
  render() {
    const prices = availablePrices();
    if ((prices === null || prices === void 0 ? void 0 : prices.length) < 2)
      return h(Host, { style: { display: 'none' } });
    return (h("sc-choices", { label: this.label, required: true, style: { '--sc-input-required-indicator': ' ' } }, (prices || []).map(price => {
      var _a, _b;
      return (h("sc-price-choice-container", { label: (price === null || price === void 0 ? void 0 : price.name) || ((_a = state.product) === null || _a === void 0 ? void 0 : _a.name), showPrice: !!this.showPrice, price: price, checked: ((_b = state === null || state === void 0 ? void 0 : state.selectedPrice) === null || _b === void 0 ? void 0 : _b.id) === (price === null || price === void 0 ? void 0 : price.id), onScChange: e => {
          if (e.target.checked) {
            state.selectedPrice = price;
          }
        } }));
    })));
  }
};
ScProductPriceChoices.style = scProductPriceChoicesCss;

export { ScProductPriceChoices as sc_product_price_choices };

//# sourceMappingURL=sc-product-price-choices.entry.js.map