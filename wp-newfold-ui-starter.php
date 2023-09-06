<?php

/**
 * Plugin Name:       WP Newfold UI Starter
 * Description:       A starter plugin to build WordPress admin pages with React, TailwindCSS and Newfold UI.
 * Requires at least: 5.8
 * Version:           1.0.0
 * Author:            Alani <hey@alani.dev>
 * License:           GPLv3 or later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       wp-newfold-ui-starter
 */

// Do not access file directly!
if ( ! defined( 'WPINC' ) ) {
    die;
}

define( 'NFDUI_PLUGIN_FILE', __FILE__ );
define( 'NFDUI_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'NFDUI_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

require_once __DIR__ . '/inc/admin-menu.php';
require_once __DIR__ . '/inc/assets-enqueue.php';
