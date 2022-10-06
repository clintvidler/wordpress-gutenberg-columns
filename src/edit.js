import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

import './editor.scss';

const ORIENTATION = 'horizontal'; // when dragging inner blocks show vertical line for destination insertion
const ALLOWED_BLOCKS = [ 'vidler-blocks/column' ];
const TEMPLATE = [ [ 'vidler-blocks/column' ], [ 'vidler-blocks/column' ] ];
const MAX_COLUMNS = 12;

export default function Edit( { clientId } ) {
	const innerBlockCount = useSelect(
		( select ) =>
			select( 'core/block-editor' ).getBlock( clientId ).innerBlocks
				.length
	);

	return (
		<div
			{ ...useBlockProps( {
				className: `has-${ innerBlockCount }-columns`,
			} ) }
		>
			<InspectorControls>
				<PanelBody>
					<h4>Justification settings etc.</h4>
					<PanelBody></PanelBody>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				orientation={ ORIENTATION }
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
				renderAppender={ () => (
					<Appender innerBlockCount={ innerBlockCount } />
				) }
			/>
		</div>
	);
}

const Appender = ( { innerBlockCount } ) =>
	innerBlockCount < MAX_COLUMNS ? <InnerBlocks.ButtonBlockAppender /> : false;
