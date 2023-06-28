import { r as registerInstance } from './index-eabde489.js';
import { m as maybeConvertAmount } from './currency-4692aeb2.js';

const ScFormatNumber = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = 0;
    this.locale = undefined;
    this.type = 'decimal';
    this.noGrouping = false;
    this.currency = 'USD';
    this.currencyDisplay = 'symbol';
    this.minimumIntegerDigits = undefined;
    this.minimumFractionDigits = null;
    this.maximumFractionDigits = undefined;
    this.minimumSignificantDigits = undefined;
    this.maximumSignificantDigits = undefined;
    this.noConvert = undefined;
  }
  render() {
    if (isNaN(this.value)) {
      return '';
    }
    const lang = navigator.language || (navigator === null || navigator === void 0 ? void 0 : navigator.browserLanguage) || (navigator.languages || ['en'])[0];
    // maybe convert zero decimal currencies.
    const value = this.noConvert ? this.value : maybeConvertAmount(this.value, this.currency.toUpperCase());
    // decide how many decimal places to use.
    const minimumFractionDigits = value % 1 == 0 ? 0 : 2;
    return new Intl.NumberFormat(this.locale || lang, {
      style: this.type,
      currency: this.currency.toUpperCase(),
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits !== null ? this.minimumFractionDigits : minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits,
    }).format(value);
  }
};

export { ScFormatNumber as sc_format_number };

//# sourceMappingURL=sc-format-number.entry.js.map