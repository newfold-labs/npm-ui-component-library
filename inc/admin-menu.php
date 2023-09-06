<?php

add_action( 'admin_menu', 'nfdui_add_admin_menu_page' );

function nfdui_add_admin_menu_page() {
    add_menu_page(
        __( 'WP Newfold UI Starter', 'wp-newfold-ui-starter' ),
        __( 'Newfold UI', 'wp-newfold-ui-starter' ),
        'manage_options',
        'nfdui',
        'nfdui_admin_page',
        'dashicons-welcome-widgets-menus'
    );
}

function nfdui_admin_page() {
    ?>
    <div id="nfdui">
        <h2>Loading...</h2>
    </div>
    <?php
}
