import { r as registerInstance } from './index-eabde489.js';
import { t as translateInterval } from './price-ad16bb2d.js';
import './currency-4692aeb2.js';

const ScFormatInterval = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = 0;
    this.interval = '';
    this.every = '/';
    this.fallback = '';
  }
  render() {
    return translateInterval(this.value, this.interval, ` ${this.every}`, this.fallback);
  }
};

export { ScFormatInterval as sc_format_interval };

//# sourceMappingURL=sc-format-interval.entry.js.map