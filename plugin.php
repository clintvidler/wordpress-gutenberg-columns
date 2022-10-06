<?php
/**
 * Plugin Name:       Columns
 * Description:       Arrange blocks into multiple columns.
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Clint Vidler
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       columns
 *
 * @package           vidler-blocks
 */

function vidler_blocks_columns_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'vidler_blocks_columns_block_init' );
