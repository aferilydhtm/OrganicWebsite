'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ac77ca60.js');
const library = require('./library-289cf13f.js');

const iconFiles = new Map();
const requestIcon = (url) => {
  if (iconFiles.has(url)) {
    return iconFiles.get(url);
  }
  else {
    const request = fetch(url).then(async (response) => {
      if (response.ok) {
        const div = document.createElement('div');
        div.innerHTML = await response.text();
        const svg = div.firstElementChild;
        return {
          ok: response.ok,
          status: response.status,
          svg: svg && svg.tagName.toLowerCase() === 'svg' ? svg.outerHTML : '',
        };
      }
      else {
        return {
          ok: response.ok,
          status: response.status,
          svg: null,
        };
      }
    });
    iconFiles.set(url, request);
    return request;
  }
};

const scIconCss = ":host{--width:1em;--height:1em;display:inline-block;width:var(--width);height:var(--height);contain:strict;box-sizing:content-box !important}.icon,svg{display:block;height:100%;width:100%;stroke-width:var(--sc-icon-stroke-width, 2px)}";

const parser = new DOMParser();
const ScIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scLoad = index.createEvent(this, "scLoad", 7);
    this.scError = index.createEvent(this, "scError", 7);
    this.svg = '';
    this.name = undefined;
    this.src = undefined;
    this.label = undefined;
    this.library = 'default';
  }
  /** @internal Fetches the icon and redraws it. Used to handle library registrations. */
  redraw() {
    this.setIcon();
  }
  componentWillLoad() {
    this.setIcon();
  }
  getLabel() {
    let label = '';
    if (this.label) {
      label = this.label;
    }
    else if (this.name) {
      label = this.name.replace(/-/g, ' ');
    }
    else if (this.src) {
      label = this.src.replace(/.*\//, '').replace(/-/g, ' ').replace(/\.svg/i, '');
    }
    return label;
  }
  async setIcon() {
    const library$1 = library.getIconLibrary(this.library);
    const url = this.getUrl();
    if (url) {
      try {
        const file = await requestIcon(url);
        if (url !== this.getUrl()) {
          // If the url has changed while fetching the icon, ignore this request
          return;
        }
        else if (file.ok) {
          const doc = parser.parseFromString(file.svg, 'text/html');
          const svgEl = doc.body.querySelector('svg');
          if (svgEl) {
            if (library$1 && library$1.mutator) {
              library$1.mutator(svgEl);
            }
            this.svg = svgEl.outerHTML;
            this.scLoad.emit();
          }
          else {
            this.svg = '';
            this.scError.emit({ status: file.status });
          }
        }
        else {
          this.svg = '';
          this.scError.emit({ status: file.status });
        }
      }
      catch {
        this.scError.emit({ status: -1 });
      }
    }
    else if (this.svg) {
      // If we can't resolve a URL and an icon was previously set, remove it
      this.svg = '';
    }
  }
  getUrl() {
    const library$1 = library.getIconLibrary(this.library);
    if (this.name && library$1) {
      return library$1.resolver(this.name);
    }
    else {
      return this.src;
    }
  }
  render() {
    return index.h("div", { part: "base", class: "icon", role: "img", "aria-label": this.getLabel(), innerHTML: this.svg });
  }
  static get assetsDirs() { return ["icon-assets"]; }
  static get watchers() { return {
    "name": ["setIcon"],
    "src": ["setIcon"],
    "library": ["setIcon"]
  }; }
};
ScIcon.style = scIconCss;

exports.sc_icon = ScIcon;

//# sourceMappingURL=sc-icon.cjs.entry.js.map