<?php

namespace SureCart\WordPress\Admin\Menus;

use SureCart\Models\ApiToken;

/**
 * Handles creation and enqueueing of admin menu pages and assets.
 */
class AdminMenuPageService {
	/**
	 * Top level menu slug.
	 *
	 * @var string
	 */
	protected $slug = 'sc-dashboard';

	/**
	 * Pages
	 *
	 * @var array
	 */
	protected $pages = [];

	/**
	 * Add menu items.
	 */
	public function bootstrap() {
		add_action( 'admin_menu', [ $this, 'registerAdminPages' ] );
		add_action( 'admin_head', [ $this, 'adminMenuCSS' ] );
		add_filter( 'parent_file', [ $this, 'forceSelect' ] );

		// Admin bar menus.
		if ( apply_filters( 'surecart_show_admin_bar_visit_store', true ) ) {
			add_action( 'admin_bar_menu', array( $this, 'adminBarMenu' ), 31 );
		}
	}

	/**
	 * Add the "Visit Store" link in admin bar main menu.
	 *
	 * @since 2.4.0
	 * @param WP_Admin_Bar $wp_admin_bar Admin bar instance.
	 */
	public function adminBarMenu( $wp_admin_bar ) {
		if ( ! is_admin() || ! is_admin_bar_showing() ) {
			return;
		}

		// Show only when the user is a member of this site, or they're a super admin.
		if ( ! is_user_member_of_blog() && ! is_super_admin() ) {
			return;
		}

		// Don't display when shop page is the same of the page on front.
		if ( intval( get_option( 'page_on_front' ) ) === \SureCart::pages()->getId( 'shop' ) ) {
			return;
		}

		// Add an option to visit the store.
		$wp_admin_bar->add_node(
			array(
				'parent' => 'site-name',
				'id'     => 'view-sc-store',
				'title'  => class_exists( 'WooCommerce' ) ? __( 'Visit SureCart Store', 'surecart' ) : __( 'Visit Store', 'surecart' ),
				'href'   => \SureCart::pages()->url( 'shop' ),
			)
		);
	}

	/**
	 * Make sure these menu items get selected.
	 *
	 * @param string $file The file string.
	 *
	 * @return string
	 */
	public function forceSelect( $file ) {
		global $submenu_file;
		$cart_page_id = \SureCart::pages()->getId( 'cart', 'sc_cart' );

		if ( 'edit.php?post_type=sc_cart' === $submenu_file ) {
			$file = 'sc-dashboard';
			// phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			$submenu_file = 'post.php?post=' . (int) $cart_page_id . '&action=edit';
		}
		if ( 'edit.php?post_type=sc_form' === $submenu_file ) {
			$file = 'sc-dashboard';
			// phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			$submenu_file = 'edit.php?post_type=sc_form';
		}

		return $file;
	}

	/**
	 * Add some divider css.
	 *
	 * @return string
	 */
	public function adminMenuCSS() {
		echo '<style>
			#toplevel_page_sc-dashboard li {
				clear: both;
			}
			#toplevel_page_sc-dashboard li:not(:last-child) a[href^="admin.php?page=sc-customers"]:after {
				border-bottom: 1px solid hsla(0,0%,100%,.2);
				display: block;
				float: left;
				margin: 13px -15px 8px;
				content: "";
				width: calc(100% + 26px);
			}
			#toplevel_page_sc-dashboard li:not(:last-child) a[href^="admin.php?page=sc-dashboard"]:after {
				border-bottom: 1px solid hsla(0,0%,100%,.2);
				display: block;
				float: left;
				margin: 13px -15px 8px;
				content: "";
				width: calc(100% + 26px);
			}
			#toplevel_page_sc-dashboard li:not(:last-child) a[href^="edit.php?post_type=sc_form"]:after {
				border-bottom: 1px solid hsla(0,0%,100%,.2);
				display: block;
				float: left;
				margin: 13px -15px 8px;
				content: "";
				width: calc(100% + 26px);
			}
		</style>';
	}

	/**
	 * Register admin pages.
	 *
	 * @return void
	 */
	public function registerAdminPages() {
		$entitlements = \SureCart::account()->entitlements;
		if ( ! ApiToken::get() ) {
			$this->slug = 'sc-getting-started';
		}

		$logo = file_get_contents( plugin_dir_path( SURECART_PLUGIN_FILE ) . 'images/icon.svg' );
		\add_menu_page( __( 'Dashboard', 'surecart' ), __( 'SureCart', 'surecart' ), 'manage_sc_shop_settings', $this->slug, '__return_false', 'data:image/svg+xml;base64,' . base64_encode( $logo ), 30.6001 );

		// not yet installed.
		if ( ! ApiToken::get() ) {
			$this->pages = [
				'get-started'     => \add_submenu_page( $this->slug, __( 'Get Started', 'surecart' ), __( 'Get Started', 'surecart' ), 'manage_options', $this->slug, '__return_false' ),
				'complete-signup' => \add_submenu_page( null, __( 'Complete Signup', 'surecart' ), __( 'Complete Signup', 'surecart' ), 'manage_options', 'sc-complete-signup', '__return_false' ),
				'settings'        => \add_submenu_page( $this->slug, __( 'Settings', 'surecart' ), __( 'Settings', 'surecart' ), 'manage_options', 'sc-settings', '__return_false' ),
			];
			return;
		}

		$cart_page_id = \SureCart::pages()->getId( 'cart', 'sc_cart' );

		$this->pages = [
			'get-started'     => \add_submenu_page( $this->slug, __( 'Dashboard', 'surecart' ), __( 'Dashboard', 'surecart' ), 'manage_sc_shop_settings', $this->slug, '__return_false' ),
			'complete-signup' => \add_submenu_page( null, __( 'Complete Signup', 'surecart' ), __( 'Complete Signup', 'surecart' ), 'manage_options', 'sc-complete-signup', '__return_false' ),
			'claim-account'   => \add_submenu_page( null, __( 'Claim Account', 'surecart' ), __( 'Claim Account', 'surecart' ), 'manage_options', 'sc-claim-account', '__return_false' ),
			'orders'          => \add_submenu_page( $this->slug, __( 'Orders', 'surecart' ), __( 'Orders', 'surecart' ), 'edit_sc_orders', 'sc-orders', '__return_false' ),
			'abandoned'       => in_array( $_GET['page'] ?? '', [ 'sc-orders', 'sc-abandoned-checkouts' ] ) ? \add_submenu_page( $this->slug, __( 'Abandoned', 'surecart' ), '↳ ' . __( 'Abandoned', 'surecart' ), 'edit_sc_orders', 'sc-abandoned-checkouts', '__return_false' ) : null,
			'products'        => \add_submenu_page( $this->slug, __( 'Products', 'surecart' ), __( 'Products', 'surecart' ), 'edit_sc_products', 'sc-products', '__return_false' ),
			'product-groups'  => ! empty( $entitlements->product_groups ) && in_array( $_GET['page'] ?? '', [ 'sc-products', 'sc-product-groups', 'sc-bumps' ] ) ? \add_submenu_page( $this->slug, __( 'Upgrade Groups', 'surecart' ), '↳ ' . __( 'Upgrade Groups', 'surecart' ), 'edit_sc_products', 'sc-product-groups', '__return_false' ) : null,
			'bumps'           => ! empty( $entitlements->bumps ) && in_array( $_GET['page'] ?? '', [ 'sc-products', 'sc-product-groups', 'sc-bumps' ] ) ? \add_submenu_page( $this->slug, __( 'Order Bumps', 'surecart' ), '↳ ' . __( 'Order Bumps', 'surecart' ), 'edit_sc_products', 'sc-bumps', '__return_false' ) : null,
			'coupons'         => \add_submenu_page( $this->slug, __( 'Coupons', 'surecart' ), __( 'Coupons', 'surecart' ), 'edit_sc_coupons', 'sc-coupons', '__return_false' ),
			'licenses'        => ! empty( $entitlements->licensing ) ? \add_submenu_page( $this->slug, __( 'Licenses', 'surecart' ), __( 'Licenses', 'surecart' ), 'edit_sc_products', 'sc-licenses', '__return_false' ) : null,
			'subscriptions'   => \add_submenu_page( $this->slug, __( 'Subscriptions', 'surecart' ), __( 'Subscriptions', 'surecart' ), 'edit_sc_subscriptions', 'sc-subscriptions', '__return_false' ),
			'cancellations'   => in_array( $_GET['page'] ?? '', [ 'sc-subscriptions', 'sc-cancellation-insights' ] ) ? \add_submenu_page( $this->slug, __( 'Cancellation Insights', 'surecart' ), '↳ ' . __( 'Cancellations', 'surecart' ), 'edit_sc_subscriptions', 'sc-cancellation-insights', '__return_false' ) : null,
			'customers'       => \add_submenu_page( $this->slug, __( 'Customers', 'surecart' ), __( 'Customers', 'surecart' ), 'edit_sc_customers', 'sc-customers', '__return_false' ),
			'cart'            => get_edit_post_link( $cart_page_id ) ? \add_submenu_page( $this->slug, __( 'Cart', 'surecart' ), __( 'Cart', 'surecart' ), 'manage_options', 'post.php?post=' . (int) $cart_page_id . '&action=edit', '' ) : null,
			// 'upgrade-paths'   => \add_submenu_page( $this->slug, __( 'Upgrade Groups', 'surecart' ), __( 'Upgrade Groups', 'surecart' ), 'edit_sc_products', 'sc-product-groups', '__return_false' ),
			'forms'           => \add_submenu_page( $this->slug, __( 'Forms', 'surecart' ), __( 'Forms', 'surecart' ), 'edit_posts', 'edit.php?post_type=sc_form', '' ),
			'settings'        => \add_submenu_page( $this->slug, __( 'Settings', 'surecart' ), __( 'Settings', 'surecart' ), 'manage_options', 'sc-settings', '__return_false' ),
		];
	}
}
