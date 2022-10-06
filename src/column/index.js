import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import edit from './edit';
import Save from './save';

registerBlockType( 'vidler-blocks/column', {
	title: __( 'Column', 'columns' ),
	description: __( 'A columns', 'columns' ),
	icon: 'smiley',
	parent: [ 'vidler-blocks/columns' ],
	supports: {
		reusable: false, // disallow make reusable
		html: false, // disallow editing as html
	},
	attributes: {
		xsWidth: {
			type: 'number',
			default: 12,
		},
		smWidth: {
			type: 'number',
			default: undefined,
		},
		mdWidth: {
			type: 'number',
			default: 6,
		},
		lgWidth: {
			type: 'number',
			default: undefined,
		},
		xlWidth: {
			type: 'number',
			default: 4,
		},
		xxlWidth: {
			type: 'number',
			default: 2,
		},
	},
	edit: edit,
	save: Save,
} );
