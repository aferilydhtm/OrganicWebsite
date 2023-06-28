'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const address = require('./address-42b5c61b.js');
const formData = require('./form-data-69000afe.js');
const consumer = require('./consumer-51f6d265.js');
const index$1 = require('./index-cf22257b.js');
const price = require('./price-5efc931a.js');
const media = require('./media-a7872d6d.js');
const watchers = require('./watchers-503cdd2a.js');
const mutations = require('./mutations-b8d54585.js');
const index$2 = require('./index-b901844d.js');
require('./currency-2733c607.js');
require('./index-261b56ec.js');
require('./add-query-args-17c551b6.js');
require('./watchers-bce289f5.js');
require('./watchers-437b71fb.js');
require('./getters-f0455d23.js');
require('./util-872b1a55.js');
require('./fetch-b673a242.js');
require('./get-query-arg-53bf21e2.js');

const scCompactAddressCss = ":host{display:block}.sc-address{display:block;position:relative}.sc-address [hidden]{display:none}.sc-address--loading{min-height:70px}.sc-address--loading sc-skeleton{display:block;margin-bottom:1em}.sc-address__control{display:block}.sc-address__control>*{margin-bottom:-1px}.sc-address__columns{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-between}.sc-address__columns>*{flex:1;width:50%;margin-left:-1px}.sc-address__columns>*:first-child{margin-left:0}";

const ScCompactAddress = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scChangeAddress = index.createEvent(this, "scChangeAddress", 7);
    this.scInputAddress = index.createEvent(this, "scInputAddress", 7);
    this.address = {
      country: null,
      city: null,
      line_1: null,
      line_2: null,
      postal_code: null,
      state: null,
    };
    this.names = {
      country: 'shipping_country',
      city: 'shipping_city',
      line_1: 'shipping_line_1',
      line_2: 'shipping_line_2',
      postal_code: 'shipping_postal_code',
      state: 'shipping_state',
    };
    this.placeholders = {
      country: '',
      postal_code: '',
      state: '',
    };
    this.label = wp.i18n.__('Country or region', 'surecart');
    this.required = undefined;
    this.loading = undefined;
    this.countryChoices = address.countryChoices;
    this.regions = undefined;
    this.showState = undefined;
    this.showPostal = undefined;
  }
  /** When the state changes, we want to update city and postal fields. */
  handleAddressChange() {
    if (!this.address.country)
      return;
    this.setRegions();
    this.showState = ['US', 'CA'].includes(this.address.country);
    this.showPostal = ['US'].includes(this.address.country);
    this.scChangeAddress.emit(this.address);
    this.scInputAddress.emit(this.address);
  }
  updateAddress(address) {
    this.address = { ...this.address, ...address };
  }
  handleAddressInput(address) {
    this.scInputAddress.emit({ ...this.address, ...address });
  }
  clearAddress() {
    this.address = {
      country: null,
      line_1: null,
      line_2: null,
      city: null,
      postal_code: null,
      state: null,
    };
  }
  /** Set the regions based on the country. */
  setRegions() {
    if (address.hasState(this.address.country)) {
      Promise.resolve().then(function () { return require('./countries-0ec7ecdc.js'); }).then(module => {
        this.regions = module === null || module === void 0 ? void 0 : module[this.address.country];
      });
    }
    else {
      this.regions = [];
    }
  }
  componentWillLoad() {
    var _a;
    this.handleAddressChange();
    const country = (_a = this.countryChoices.find(country => country.value === this.address.country)) === null || _a === void 0 ? void 0 : _a.value;
    if (country) {
      this.updateAddress({ country });
    }
  }
  async reportValidity() {
    return formData.reportChildrenValidity(this.el);
  }
  getStatePlaceholder() {
    var _a, _b;
    if ((_a = this.placeholders) === null || _a === void 0 ? void 0 : _a.state)
      return this.placeholders.state;
    if (((_b = this.address) === null || _b === void 0 ? void 0 : _b.country) === 'US')
      return wp.i18n.__('State', 'surecart');
    return wp.i18n.__('Province/Region', 'surecart');
  }
  render() {
    var _a, _b, _c, _d, _e;
    return (index.h("div", { class: "sc-address", part: "base" }, index.h("sc-form-control", { exportparts: "label, help-text, form-control", label: this.label, class: "sc-address__control", part: "control", required: this.required }, index.h("sc-select", { exportparts: "base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty", value: (_a = this.address) === null || _a === void 0 ? void 0 : _a.country, onScChange: (e) => {
        this.clearAddress();
        this.updateAddress({ country: e.target.value || null });
      }, choices: this.countryChoices, autocomplete: 'country-name', placeholder: ((_b = this.placeholders) === null || _b === void 0 ? void 0 : _b.country) || wp.i18n.__('Select Your Country', 'surecart'), name: this.names.country, search: true, unselect: false, "squared-bottom": this.showState || this.showPostal, required: this.required }), index.h("div", { class: "sc-address__columns" }, this.showState && (index.h("sc-select", { exportparts: "base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty", placeholder: this.getStatePlaceholder(), name: this.names.state, autocomplete: 'address-level1', value: (_c = this === null || this === void 0 ? void 0 : this.address) === null || _c === void 0 ? void 0 : _c.state, onScChange: (e) => this.updateAddress({ state: e.target.value || null }), choices: this.regions, required: this.required, search: true, "squared-top": true, unselect: false, "squared-right": this.showPostal })), this.showPostal && (index.h("sc-input", { exportparts: "base:input__base, input, form-control, label, help-text", placeholder: ((_d = this.placeholders) === null || _d === void 0 ? void 0 : _d.postal_code) || wp.i18n.__('Postal Code/Zip', 'surecart'), name: this.names.postal_code, onScChange: (e) => this.updateAddress({ postal_code: e.target.value || null }), onScInput: (e) => this.handleAddressInput({ name: e.target.value || null }), autocomplete: 'postal-code', required: this.required, value: (_e = this === null || this === void 0 ? void 0 : this.address) === null || _e === void 0 ? void 0 : _e.postal_code, "squared-top": true, maxlength: 5, "squared-left": this.showState })))), this.loading && index.h("sc-block-ui", { exportparts: "base:block-ui, content:block-ui__content" })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "address": ["handleAddressChange"]
  }; }
};
ScCompactAddress.style = scCompactAddressCss;

const scLineItemTaxCss = ":host{display:block}";

const ScLineItemTax = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.order = undefined;
    this.loading = undefined;
  }
  renderLabel() {
    var _a, _b, _c;
    let label = wp.i18n.sprintf(wp.i18n.__('Estimated %s', 'surecart'), ((_a = this === null || this === void 0 ? void 0 : this.order) === null || _a === void 0 ? void 0 : _a.tax_label) || '');
    if (((_b = this === null || this === void 0 ? void 0 : this.order) === null || _b === void 0 ? void 0 : _b.tax_status) === 'calculated') {
      label = ((_c = this.order) === null || _c === void 0 ? void 0 : _c.tax_label) || '';
    }
    return (index.h(index.Fragment, null, `${wp.i18n.__('Tax:', 'surecart')} ${label}`, this.renderPercent()));
  }
  renderPercent() {
    var _a;
    if ((_a = this.order) === null || _a === void 0 ? void 0 : _a.tax_percent) {
      return (index.h(index.Fragment, null, '(', this.order.tax_percent, "%", ')'));
    }
    return '';
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g;
    // hide if tax is 0
    if (!((_a = this === null || this === void 0 ? void 0 : this.order) === null || _a === void 0 ? void 0 : _a.tax_amount)) {
      return null;
    }
    return (index.h("sc-line-item", null, index.h("span", { slot: "description" }, this.renderLabel()), ((_b = this.order) === null || _b === void 0 ? void 0 : _b.tax_exclusive_amount) && (index.h("span", { slot: "price" }, index.h("sc-format-number", { type: "currency", currency: ((_c = this === null || this === void 0 ? void 0 : this.order) === null || _c === void 0 ? void 0 : _c.currency) || 'usd', value: (_d = this === null || this === void 0 ? void 0 : this.order) === null || _d === void 0 ? void 0 : _d.tax_exclusive_amount }))), ((_e = this.order) === null || _e === void 0 ? void 0 : _e.tax_inclusive_amount) && (index.h("span", { slot: "price-description" }, '(', index.h("sc-format-number", { type: "currency", currency: ((_f = this === null || this === void 0 ? void 0 : this.order) === null || _f === void 0 ? void 0 : _f.currency) || 'usd', value: (_g = this === null || this === void 0 ? void 0 : this.order) === null || _g === void 0 ? void 0 : _g.tax_inclusive_amount }), " ", wp.i18n.__('included', 'surecart'), ')'))));
  }
};
consumer.openWormhole(ScLineItemTax, ['order', 'loading'], false);
ScLineItemTax.style = scLineItemTaxCss;

const scOrderBumpCss = ":host{display:block}.bump{display:grid;gap:1em}.bump__text{display:grid;gap:0.25em}.bump__tag{background:var(--sc-color-primary-500);color:var(--sc-color-white);border-radius:var(--sc-input-border-radius-medium);padding:var(--sc-spacing-x-small);font-size:var(--sc-font-size-x-small)}.bump__product{display:flex;align-items:center;gap:var(--sc-choice-padding, 1.3em 1.1em);line-height:var(--sc-line-height-dense)}.bump__product-title{font-weight:var(--sc-font-weight-semibold)}.bump__product-description{color:var(--sc-input-label-color)}.bump__image{width:var(--sc-product-line-item-image-size, 4em);height:var(--sc-product-line-item-image-size, 4em);flex:0 0 var(--sc-product-line-item-image-size, 4em);object-fit:cover;border-radius:4px;border:1px solid var(--sc-color-gray-200);display:block;box-shadow:var(--sc-input-box-shadow)}.bump__price--has-discount .bump__original-price{text-decoration:line-through;color:var(--sc-color-gray-500);font-size:var(--sc-font-size-small)}.bump__price .bump__new-price{font-size:var(--sc-font-size-large);color:var(--sc-color-gray-700)}.bump__price .bump__interval{color:var(--sc-color-gray-500)}.bump__amount{display:flex;align-items:center;gap:var(--sc-spacing-x-small);flex-wrap:wrap;margin-top:var(--sc-spacing-xx-small)}";

const ScOrderBump = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scAddLineItem = index.createEvent(this, "scAddLineItem", 7);
    this.scRemoveLineItem = index.createEvent(this, "scRemoveLineItem", 7);
    var _a;
    this.bump = undefined;
    this.checkout = undefined;
    this.showControl = undefined;
    this.cdnRoot = (_a = window.scData) === null || _a === void 0 ? void 0 : _a.cdn_root;
  }
  /** Update the line item. */
  updateLineItem(add) {
    var _a, _b, _c;
    const price_id = ((_a = this.bump.price) === null || _a === void 0 ? void 0 : _a.id) || ((_b = this.bump) === null || _b === void 0 ? void 0 : _b.price);
    if (add) {
      this.scAddLineItem.emit({
        bump: (_c = this.bump) === null || _c === void 0 ? void 0 : _c.id,
        price_id,
        quantity: 1,
      });
    }
    else {
      this.scRemoveLineItem.emit({
        price_id,
        quantity: 1,
      });
    }
  }
  newPrice() {
    var _a, _b, _c, _d, _e, _f;
    let amount = null;
    let initialAmount = ((_b = (_a = this.bump) === null || _a === void 0 ? void 0 : _a.price) === null || _b === void 0 ? void 0 : _b.amount) || 0;
    if ((_c = this.bump) === null || _c === void 0 ? void 0 : _c.amount_off) {
      amount = Math.max(0, initialAmount - ((_d = this.bump) === null || _d === void 0 ? void 0 : _d.amount_off));
    }
    if ((_e = this.bump) === null || _e === void 0 ? void 0 : _e.percent_off) {
      const off = initialAmount * (((_f = this.bump) === null || _f === void 0 ? void 0 : _f.percent_off) / 100);
      amount = Math.max(0, initialAmount - off);
    }
    return amount;
  }
  renderInterval() {
    var _a;
    const interval = price.intervalString((_a = this.bump) === null || _a === void 0 ? void 0 : _a.price, { labels: { interval: '/', period: wp.i18n.__('for', 'surecart') } });
    if (!interval.trim().length)
      return null;
    return index.h("span", { class: "bump__interval" }, interval);
  }
  renderPrice() {
    var _a, _b, _c, _d, _e, _f, _g;
    return (index.h("div", { slot: "description", class: { 'bump__price': true, 'bump__price--has-discount': !!((_a = this.bump) === null || _a === void 0 ? void 0 : _a.percent_off) || !!((_b = this.bump) === null || _b === void 0 ? void 0 : _b.amount_off) }, part: "price" }, index.h("sc-format-number", { type: "currency", class: "bump__original-price", value: (_d = (_c = this.bump) === null || _c === void 0 ? void 0 : _c.price) === null || _d === void 0 ? void 0 : _d.amount, currency: (_f = (_e = this.bump) === null || _e === void 0 ? void 0 : _e.price) === null || _f === void 0 ? void 0 : _f.currency }), ' ', this.newPrice() === 0 && wp.i18n.__('Free', 'surecart'), this.newPrice() !== null && this.newPrice() > 0 && (index.h("sc-format-number", { type: "currency", class: "bump__new-price", value: this.newPrice(), currency: ((_g = this.bump) === null || _g === void 0 ? void 0 : _g.price).currency })), this.renderInterval()));
  }
  renderDiscount() {
    var _a, _b, _c, _d, _e;
    if (!!((_a = this.bump) === null || _a === void 0 ? void 0 : _a.amount_off)) {
      return (index.h("div", { class: "bump__tag" }, wp.i18n.__('Save', 'surecart'), " ", index.h("sc-format-number", { type: "currency", value: -((_b = this.bump) === null || _b === void 0 ? void 0 : _b.amount_off), currency: ((_c = this.bump) === null || _c === void 0 ? void 0 : _c.price).currency })));
    }
    if (!!((_d = this.bump) === null || _d === void 0 ? void 0 : _d.percent_off)) {
      return index.h("div", { class: "bump__tag" }, wp.i18n.sprintf(wp.i18n.__('Save %s%%', 'surecart'), (_e = this.bump) === null || _e === void 0 ? void 0 : _e.percent_off));
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    const product = (_b = (_a = this.bump) === null || _a === void 0 ? void 0 : _a.price) === null || _b === void 0 ? void 0 : _b.product;
    return (index.h("sc-choice", { value: (_c = this.bump) === null || _c === void 0 ? void 0 : _c.id, type: "checkbox", showControl: this.showControl, checked: index$1.isBumpInOrder(this.bump, this.checkout), onScChange: e => this.updateLineItem(e.target.checked), exportparts: "base, control, checked-icon, title" }, index.h("div", { part: "base-content", class: "bump" }, index.h("div", { class: "bump__text" }, index.h("div", { class: "bump__title" }, ((_e = (_d = this.bump) === null || _d === void 0 ? void 0 : _d.metadata) === null || _e === void 0 ? void 0 : _e.cta) || ((_f = this.bump) === null || _f === void 0 ? void 0 : _f.name) || (product === null || product === void 0 ? void 0 : product.name)), index.h("div", { class: "bump__amount" }, this.renderPrice(), " ", this.renderDiscount()))), ((_h = (_g = this.bump) === null || _g === void 0 ? void 0 : _g.metadata) === null || _h === void 0 ? void 0 : _h.description) && (index.h("div", { slot: "footer" }, index.h("sc-divider", { style: { '--spacing': 'var(--sc-spacing-medium)' } }), index.h("div", { class: "bump__product" }, !!(product === null || product === void 0 ? void 0 : product.image_url) && index.h("img", { src: media.sizeImage(product === null || product === void 0 ? void 0 : product.image_url, 130), class: "bump__image" }), index.h("div", { class: "bump__product-text" }, !!((_k = (_j = this.bump) === null || _j === void 0 ? void 0 : _j.metadata) === null || _k === void 0 ? void 0 : _k.cta) && index.h("div", { class: "bump__product-title" }, this.bump.name || (product === null || product === void 0 ? void 0 : product.name)), !!((_m = (_l = this.bump) === null || _l === void 0 ? void 0 : _l.metadata) === null || _m === void 0 ? void 0 : _m.description) && index.h("div", { class: "bump__product-description" }, (_p = (_o = this.bump) === null || _o === void 0 ? void 0 : _o.metadata) === null || _p === void 0 ? void 0 : _p.description)))))));
  }
};
ScOrderBump.style = scOrderBumpCss;

const scOrderBumpsCss = ":host{display:block}.bumps__list{display:grid;gap:10px}";

const ScOrderBumps = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.label = undefined;
    this.showControl = undefined;
    this.help = undefined;
    this.bumps = undefined;
    this.checkout = undefined;
  }
  render() {
    var _a;
    if (!((_a = this === null || this === void 0 ? void 0 : this.bumps) === null || _a === void 0 ? void 0 : _a.length)) {
      return null;
    }
    return (index.h("sc-form-control", { label: this.label || wp.i18n.__('Recommended', 'surecart'), help: this.help }, index.h("div", { class: "bumps__list" }, (this.bumps || []).map(bump => (index.h("sc-order-bump", { key: bump === null || bump === void 0 ? void 0 : bump.id, showControl: this.showControl, bump: bump, checkout: this.checkout }))))));
  }
};
consumer.openWormhole(ScOrderBumps, ['bumps', 'checkout'], false);
ScOrderBumps.style = scOrderBumpsCss;

const scOrderShippingAddressCss = ":host{display:block}.sc-order-shipping__loading{display:flex;flex-direction:column;gap:0.5em}";

const ScOrderShippingAddress = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scUpdateOrder = index.createEvent(this, "scUpdateOrder", 7);
    this.label = undefined;
    this.required = false;
    this.loading = undefined;
    this.shippingAddress = undefined;
    this.taxStatus = undefined;
    this.taxEnabled = undefined;
    this.shippingEnabled = undefined;
    this.full = undefined;
    this.showName = undefined;
    this.namePlaceholder = wp.i18n.__('Name or Company Name', 'surecart');
    this.countryPlaceholder = wp.i18n.__('Country', 'surecart');
    this.cityPlaceholder = wp.i18n.__('City', 'surecart');
    this.line1Placeholder = wp.i18n.__('Address', 'surecart');
    this.line2Placeholder = wp.i18n.__('Address Line 2', 'surecart');
    this.postalCodePlaceholder = wp.i18n.__('Postal Code/Zip', 'surecart');
    this.statePlaceholder = wp.i18n.__('State/Province/Region', 'surecart');
    this.defaultCountry = undefined;
    this.placeholders = {
      name: wp.i18n.__('Name or Company Name', 'surecart'),
      country: wp.i18n.__('Country', 'surecart'),
      city: wp.i18n.__('City', 'surecart'),
      line_1: wp.i18n.__('Address', 'surecart'),
      line_2: wp.i18n.__('Address Line 2', 'surecart'),
      postal_code: wp.i18n.__('Postal Code/Zip', 'surecart'),
      state: wp.i18n.__('State/Province/Region', 'surecart'),
    };
    this.address = {
      country: null,
      city: null,
      line_1: null,
      line_2: null,
      postal_code: null,
      state: null,
    };
  }
  /** When the shipping address changes, we want to use that instead of what's entered, if we have empty fields. */
  handleCustomerAddressChange(val, old) {
    if ((val === null || val === void 0 ? void 0 : val.id) && !old) {
      this.address = { ...this.address, ...val };
    }
  }
  async updateAddressState(address) {
    if (JSON.stringify(address) === JSON.stringify(this.address))
      return; // no change, don't update.
    this.address = address;
    try {
      mutations.lockCheckout('shipping-address');
      watchers.state.checkout = (await index$2.createOrUpdateCheckout({
        id: watchers.state.checkout.id,
        data: {
          shipping_address: this.address,
        },
      }));
    }
    catch (e) {
      console.error(e);
    }
    finally {
      mutations.unLockCheckout('shipping-address');
    }
  }
  async reportValidity() {
    return this.input.reportValidity();
  }
  componentWillLoad() {
    if (this.defaultCountry && !this.address.country) {
      this.address.country = this.defaultCountry;
    }
    this.handleRequirementChange();
  }
  handleRequirementChange() {
    if (this.shippingEnabled || this.taxEnabled) {
      this.required = true;
    }
  }
  render() {
    if (this.shippingEnabled || this.full) {
      return (index.h("sc-address", { exportparts: "label, help-text, form-control, input__base, select__base, columns, search__base, menu__base", ref: el => (this.input = el), label: this.label || wp.i18n.__('Shipping Address', 'surecart'), placeholders: {
          name: this.namePlaceholder,
          country: this.countryPlaceholder,
          city: this.cityPlaceholder,
          line_1: this.line1Placeholder,
          line_2: this.line2Placeholder,
          postal_code: this.postalCodePlaceholder,
          state: this.statePlaceholder,
        }, required: this.required, loading: this.loading, address: this.address, "show-name": this.showName, onScChangeAddress: e => this.updateAddressState(e.detail) }));
    }
    return (index.h("sc-compact-address", { ref: el => (this.input = el), required: this.required, loading: this.loading, address: this.address, placeholders: {
        name: this.namePlaceholder,
        country: this.countryPlaceholder,
        city: this.cityPlaceholder,
        line_1: this.line1Placeholder,
        line_2: this.line2Placeholder,
        postal_code: this.postalCodePlaceholder,
        state: this.statePlaceholder,
      }, label: this.label, onScChangeAddress: e => this.updateAddressState(e.detail) }));
  }
  static get watchers() { return {
    "shippingAddress": ["handleCustomerAddressChange"],
    "shippingEnabled": ["handleRequirementChange"],
    "taxEnabled": ["handleRequirementChange"]
  }; }
};
consumer.openWormhole(ScOrderShippingAddress, ['shippingAddress', 'loading', 'taxStatus', 'taxEnabled', 'shippingEnabled'], false);
ScOrderShippingAddress.style = scOrderShippingAddressCss;

const scOrderTaxIdInputCss = ":host{display:block}";

const ScOrderTaxIdInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scUpdateOrder = index.createEvent(this, "scUpdateOrder", 7);
    this.scError = index.createEvent(this, "scError", 7);
    this.order = undefined;
    this.show = false;
    this.taxIdentifier = undefined;
    this.taxProtocol = undefined;
    this.busy = false;
    this.otherLabel = undefined;
    this.caGstLabel = undefined;
    this.auAbnLabel = undefined;
    this.gbVatLabel = undefined;
    this.euVatLabel = undefined;
  }
  getStatus() {
    var _a, _b, _c;
    if (((_a = this.taxIdentifier) === null || _a === void 0 ? void 0 : _a.number_type) !== 'eu_vat') {
      return 'unknown';
    }
    if (((_b = this.taxProtocol) === null || _b === void 0 ? void 0 : _b.eu_vat_unverified_behavior) === 'apply_reverse_charge') {
      return 'unknown';
    }
    return ((_c = this.taxIdentifier) === null || _c === void 0 ? void 0 : _c.eu_vat_verified) ? 'valid' : 'invalid';
  }
  async maybeUpdateOrder(tax_identifier) {
    try {
      mutations.lockCheckout('tax_identifier');
      watchers.state.checkout = (await index$2.createOrUpdateCheckout({
        id: watchers.state.checkout.id,
        data: { tax_identifier },
      }));
    }
    catch (e) {
      console.error(e);
      this.scError.emit(e);
    }
    finally {
      mutations.unLockCheckout('tax_identifier');
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    return (index.h("sc-tax-id-input", { show: this.show, number: (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.tax_identifier) === null || _b === void 0 ? void 0 : _b.number, type: (_d = (_c = this.order) === null || _c === void 0 ? void 0 : _c.tax_identifier) === null || _d === void 0 ? void 0 : _d.number_type, country: (_f = (_e = this === null || this === void 0 ? void 0 : this.order) === null || _e === void 0 ? void 0 : _e.shipping_address) === null || _f === void 0 ? void 0 : _f.country, status: this.getStatus(), loading: this.busy, onScChange: e => {
        e.stopImmediatePropagation();
        this.maybeUpdateOrder(e.detail);
      }, otherLabel: this.otherLabel, caGstLabel: this.caGstLabel, auAbnLabel: this.auAbnLabel, gbVatLabel: this.gbVatLabel, euVatLabel: this.euVatLabel }));
  }
};
consumer.openWormhole(ScOrderTaxIdInput, ['draft', 'order', 'tax_status', 'taxIdentifier', 'taxProtocol', 'busy'], false);
ScOrderTaxIdInput.style = scOrderTaxIdInputCss;

exports.sc_compact_address = ScCompactAddress;
exports.sc_line_item_tax = ScLineItemTax;
exports.sc_order_bump = ScOrderBump;
exports.sc_order_bumps = ScOrderBumps;
exports.sc_order_shipping_address = ScOrderShippingAddress;
exports.sc_order_tax_id_input = ScOrderTaxIdInput;

//# sourceMappingURL=sc-compact-address_6.cjs.entry.js.map