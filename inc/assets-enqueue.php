<?php

add_action( 'admin_enqueue_scripts', 'nfdui_enqueue_admin_scripts' );

function nfdui_enqueue_admin_scripts() {
    $screen = get_current_screen();

    if ( $screen->id === 'toplevel_page_nfdui' ) {
        $build_assets_file =  NFDUI_PLUGIN_DIR . 'build/index.asset.php';

        if ( is_readable( $build_assets_file ) ) {
            $build_assets = include_once $build_assets_file;
        } else {
            return;
        }

        wp_enqueue_style( 'nfdui-style', NFDUI_PLUGIN_URL . 'build/index.css' );
        wp_enqueue_script(
            'nfdui-script',
            NFDUI_PLUGIN_URL . 'build/index.js',
            array_merge( $build_assets['dependencies'] ),
            $build_assets['version'],
            true
        );
    }
}
