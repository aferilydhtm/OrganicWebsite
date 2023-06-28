import { r as registerInstance, h, a as getElement } from './index-eabde489.js';
import { a as apiFetch } from './fetch-34712ac6.js';
import { a as addQueryArgs, g as getQueryArgs } from './add-query-args-f4c5962b.js';

const scProductItemListCss = ".product-item-list {\n  display: grid;\n  grid-template-columns: repeat(var(--sc-product-item-list-column), 1fr);\n  gap: var(--sc-product-item-list-gap);\n}\n.product-item-list__wrapper {\n  container-type: inline-size;\n  display: grid;\n  gap: var(--sc-spacing-medium);\n}\n@container (max-width: 576px) {\n  .product-item-list__wrapper .product-item-list {\n    grid-template-columns: 1fr;\n  }\n}\n@container (min-width: 576px) and (max-width: 768px) {\n  .product-item-list__wrapper .product-item-list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.product-item-list__sort, .product-item-list__empty, .product-item-list__search {\n  font-size: 16px;\n}\n.product-item-list__search {\n  display: flex;\n  align-items: center;\n  gap: var(--sc-spacing-small);\n}\n.product-item-list__header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.product-item-list__loader {\n  display: grid;\n  gap: 0.88rem;\n  padding-top: var(--sc-product-item-padding-top);\n  padding-bottom: var(--sc-product-item-padding-bottom);\n  padding-left: var(--sc-product-item-padding-left);\n  padding-right: var(--sc-product-item-padding-right);\n  margin-top: var(--sc-product-item-margin-top);\n  margin-bottom: var(--sc-product-item-margin-bottom);\n  margin-left: var(--sc-product-item-margin-left);\n  margin-right: var(--sc-product-item-margin-right);\n  border: solid var(--sc-product-item-border-width) var(--sc-product-item-border-color);\n  border-radius: var(--sc-product-item-border-radius);\n  color: var(--sc-product-title-text-color);\n  background-color: var(--sc-product-item-background-color);\n  line-height: 1;\n}\n.product-item-list__pagination {\n  padding: 40px 0 0;\n  width: 100%;\n  font-size: var(--sc-font-size-small, var(--wp--preset--font-size--x-small));\n}\n.product-item-list__search-tag {\n  display: flex;\n  align-items: center;\n  gap: var(--sc-spacing-small);\n}\n.product-item-list__search-label {\n  font-size: var(--sc-font-size-small, var(--wp--preset--font-size--x-small));\n}\n\n.search-button,\n.clear-button {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity var(--sc-transition-medium) ease-in-out;\n  cursor: pointer;\n}\n\n.product-item-list__has-search .search-button,\n.product-item-list__has-search .clear-button {\n  opacity: 1;\n  visibility: visible;\n}\n\nsc-product-item::part(image) {\n  aspect-ratio: var(--sc-product-image-aspect-ratio);\n}\n\nsc-pagination {\n  font-size: var(--sc-pagination-font-size);\n}";

const ScProductItemList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ids = undefined;
    this.sort = 'created_at:desc';
    this.query = undefined;
    this.searchEnabled = true;
    this.sortEnabled = true;
    this.paginationEnabled = true;
    this.ajaxPagination = true;
    this.paginationAutoScroll = true;
    this.layoutConfig = undefined;
    this.paginationAlignment = 'center';
    this.limit = 15;
    this.products = undefined;
    this.loading = false;
    this.busy = false;
    this.currentPage = 1;
    this.currentQuery = undefined;
    this.pagination = {
      total: 0,
      total_pages: 0,
    };
  }
  componentWillLoad() {
    this.getProducts();
  }
  // Append URL if no 'product-page' found
  doPagination(page) {
    // handle ajax pagination
    if (this.ajaxPagination) {
      this.currentPage = page;
      this.updateProducts();
      this.paginationAutoScroll && this.el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    // handle server pagination.
    const newUrl = addQueryArgs(location.href, { 'product-page': page });
    window.location.replace(newUrl);
  }
  // Fetch all products
  async getProducts() {
    const { 'product-page': page } = getQueryArgs(window.location.href);
    this.currentPage = this.paginationEnabled && page ? parseInt(page) : 1;
    try {
      this.loading = true;
      await this.fetchProducts();
    }
    catch (error) {
      console.error(error);
    }
    finally {
      this.loading = false;
    }
  }
  async handleSortChange() {
    this.currentPage = 1;
    this.updateProducts();
  }
  async updateProducts() {
    try {
      this.busy = true;
      await this.fetchProducts();
    }
    catch (error) {
      console.error(error);
    }
    finally {
      this.busy = false;
    }
  }
  handleIdsChange() {
    if (this.debounce !== null) {
      clearTimeout(this.debounce);
      this.debounce = null;
    }
    this.debounce = window.setTimeout(() => {
      // your debounced traitment
      this.updateProducts();
      this.debounce = null;
    }, 200);
  }
  async fetchProducts() {
    var _a;
    const response = (await apiFetch({
      path: addQueryArgs(`surecart/v1/products/`, {
        expand: ['prices', 'product_medias', 'product_media.media'],
        archived: false,
        status: ['published'],
        per_page: this.limit,
        page: this.currentPage,
        sort: this.sort,
        ...(((_a = this.ids) === null || _a === void 0 ? void 0 : _a.length) ? { ids: this.ids } : {}),
        ...(this.query ? { query: this.query } : {}),
      }),
      parse: false,
    }));
    this.currentQuery = this.query;
    this.pagination = {
      total: parseInt(response.headers.get('X-WP-Total')),
      total_pages: parseInt(response.headers.get('X-WP-TotalPages')),
    };
    this.products = (await response.json());
  }
  renderSortName() {
    switch (this.sort) {
      case 'created_at:desc':
        return wp.i18n.__('Latest', 'surecart');
      case 'created_at:asc':
        return wp.i18n.__('Oldest', 'surecart');
      case 'name:asc':
        return wp.i18n.__('Alphabetical, A-Z', 'surecart');
      case 'name:desc':
        return wp.i18n.__('Alphabetical, Z-A', 'surecart');
      default:
        return wp.i18n.__('Sort', 'surecart');
    }
  }
  render() {
    var _a, _b, _c, _d;
    return (h("div", { class: { 'product-item-list__wrapper': true, 'product-item-list__has-search': !!this.query } }, (this.searchEnabled || this.sortEnabled) && (h("div", { class: "product-item-list__header" }, h("div", { class: "product-item-list__sort" }, this.sortEnabled && (h("sc-dropdown", { style: { '--panel-width': '15rem' } }, h("sc-button", { type: "text", caret: true, slot: "trigger" }, this.renderSortName()), h("sc-menu", null, h("sc-menu-item", { onClick: () => (this.sort = 'created_at:desc') }, wp.i18n.__('Latest', 'surecart')), h("sc-menu-item", { onClick: () => (this.sort = 'created_at:asc') }, wp.i18n.__('Oldest', 'surecart')), h("sc-menu-item", { onClick: () => (this.sort = 'name:asc') }, wp.i18n.__('Alphabetical, A-Z', 'surecart')), h("sc-menu-item", { onClick: () => (this.sort = 'name:desc') }, wp.i18n.__('Alphabetical, Z-A', 'surecart')))))), h("div", { class: "product-item-list__search" }, this.searchEnabled &&
      (((_a = this.query) === null || _a === void 0 ? void 0 : _a.length) && this.query === this.currentQuery ? (h("div", { class: "product-item-list__search-tag" }, h("div", { class: "product-item-list__search-label" }, wp.i18n.__('Search Results:', 'surecart')), h("sc-tag", { clearable: true, onScClear: () => {
          this.query = '';
          this.currentQuery = '';
          this.updateProducts();
        } }, this.query))) : (h("sc-input", { type: "text", placeholder: "Search", size: "small", onKeyDown: e => {
          if (e.key === 'Enter') {
            this.updateProducts();
          }
        }, value: this.query, onScInput: e => (this.query = e.target.value) }, this.query ? (h("sc-icon", { class: "clear-button", slot: "prefix", name: "x", onClick: () => {
          this.query = '';
        } })) : (h("sc-icon", { slot: "prefix", name: "search" })), h("sc-button", { class: "search-button", type: "link", slot: "suffix", busy: this.busy, onClick: () => this.updateProducts() }, wp.i18n.__('Search', 'surecart')))))))), !((_b = this.products) === null || _b === void 0 ? void 0 : _b.length) && !this.loading && (h("sc-empty", { class: "product-item-list__empty", icon: "shopping-bag" }, wp.i18n.__('No products found.', 'surecart'))), h("div", { class: "product-item-list" }, this.loading
      ? [...Array(((_c = this.ids) === null || _c === void 0 ? void 0 : _c.length) || this.limit || 10)].map(() => {
        var _a;
        return (h("div", { class: "product-item-list__loader" }, (_a = this.layoutConfig) === null || _a === void 0 ? void 0 : _a.map(layout => {
          var _a, _b;
          switch (layout.blockName) {
            case 'surecart/product-item-title':
              return (h("div", { style: { textAlign: 'var(--sc-product-title-align)' } }, h("sc-skeleton", { style: { width: '80%', display: 'inline-block' } })));
            case 'surecart/product-item-image':
              return (h("sc-skeleton", { style: {
                  'width': '100%',
                  'minHeight': '90%',
                  'aspectRatio': (_b = (_a = layout.attributes) === null || _a === void 0 ? void 0 : _a.ratio) !== null && _b !== void 0 ? _b : '1/1.4',
                  '--sc-border-radius-pill': '12px',
                  'display': 'inline-block',
                } }));
            case 'surecart/product-item-price':
              return (h("div", { style: { textAlign: 'var(--sc-product-price-align)' } }, h("sc-skeleton", { style: { width: '40%', display: 'inline-block' } })));
            default:
              return null;
          }
        })));
      })
      : (this.products || []).map(product => {
        return h("sc-product-item", { exportparts: "title, price, image", product: product, layoutConfig: this.layoutConfig });
      })), !!((_d = this.products) === null || _d === void 0 ? void 0 : _d.length) && this.pagination.total > this.products.length && this.paginationEnabled && (h("div", { class: {
        'product-item-list__pagination': true,
        '--is-aligned-left': this.paginationAlignment === 'left',
        '--is-aligned-center': this.paginationAlignment === 'center',
        '--is-aligned-right': this.paginationAlignment === 'right',
      } }, h("sc-pagination", { page: this.currentPage, perPage: this.limit, total: this.pagination.total, totalPages: this.pagination.total_pages, totalShowing: this.limit, onScNextPage: () => this.doPagination(this.currentPage + 1), onScPrevPage: () => this.doPagination(this.currentPage - 1) }))), (this.busy || this.loading) && h("sc-block-ui", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "sort": ["handleSortChange"],
    "ids": ["handleIdsChange"],
    "limit": ["handleIdsChange"]
  }; }
};
ScProductItemList.style = scProductItemListCss;

export { ScProductItemList as sc_product_item_list };

//# sourceMappingURL=sc-product-item-list.entry.js.map