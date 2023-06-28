<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_latwordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '&Z6p`}Lf_#OwT3i6iBmF}zg(0Tb3njA1i5!@Ql bR0t,48{au@c_C4USS#Rjd`~|' );
define( 'SECURE_AUTH_KEY',  '/ 5jV5stZqY&TsR;bC|>AUR{bzVu2<|Z/0/%_u;#oy&.p!QX_P/Kb$TC>xGL]aM9' );
define( 'LOGGED_IN_KEY',    'rHyculh-x7rsy|O$Oyj0Y4nrk/hU]~@s1wRu7K[HcG~#s!L7r].,=ZnYYMojYzpi' );
define( 'NONCE_KEY',        '^{v7J3FtPwi>ZQ=yoX( bP>Xo-r]zR/1em=wer6YpYtX#DJFuW~8(3@s`fBygtg5' );
define( 'AUTH_SALT',        'J=Y/p=*y@{mw<0o i=y m^~7du43<g49hYE,m7iI0XrEG1zB)o]p#%|$].agYY=/' );
define( 'SECURE_AUTH_SALT', '(j,Ne)g][ik}TNBf|kmTr@g{PK7=?OHo^@a}Gk78?!ot`lY@L!G26I73-?$*)yce' );
define( 'LOGGED_IN_SALT',   '2[le2*jfiTuZ&JE}zsxed3d;t3EOFidpY.[kqr7rd!r,qwG$oG}BMZ]`Wn8AHJ.<' );
define( 'NONCE_SALT',       'y/}R)A>yuN]j|!(Smrb|}s{H#@1c%=|g[oHQ<Lff&r%z}GDGRE7Z& bZVp[#HWRw' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_1';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
