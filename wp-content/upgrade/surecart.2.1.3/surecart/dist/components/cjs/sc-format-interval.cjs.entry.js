'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const price = require('./price-5efc931a.js');
require('./currency-2733c607.js');

const ScFormatInterval = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.value = 0;
    this.interval = '';
    this.every = '/';
    this.fallback = '';
  }
  render() {
    return price.translateInterval(this.value, this.interval, ` ${this.every}`, this.fallback);
  }
};

exports.sc_format_interval = ScFormatInterval;

//# sourceMappingURL=sc-format-interval.cjs.entry.js.map