import { registerBlockType } from '@wordpress/blocks';

import './filters';
import './column';
import './style.scss';
import edit from './edit';
import save from './save';

registerBlockType( 'vidler-blocks/columns', {
	edit,
	save,
} );
