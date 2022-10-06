import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

import './editor.scss';

const ORIENTATION = 'vertical';
const ALLOWED_BLOCKS = [ 'core/paragraph' ];
const TEMPLATE = [ [ 'core/paragraph' ] ];
const MAX_SPAN = 12;

export default function Edit( { attributes, setAttributes } ) {
	const {
		xsWidth,
		smWidth,
		mdWidth,
		lgWidth,
		xlWidth,
		xxlWidth,
	} = attributes;

	const onChangeXsWidth = ( value ) => {
		setAttributes( { xsWidth: value } );
	};

	// const onChangeSmWidth = ( value ) => {
	// 	setAttributes( { smWidth: value } );
	// };

	const onChangeMdWidth = ( value ) => {
		setAttributes( { mdWidth: value } );
	};

	// const onChangeLgWidth = ( value ) => {
	// 	setAttributes( { lgWidth: value } );
	// };

	const onChangeXlWidth = ( value ) => {
		setAttributes( { xlWidth: value } );
	};

	const onChangeXxlWidth = ( value ) => {
		setAttributes( { xxlWidth: value } );
	};

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody>
					<h4>Column width (span out of 12)</h4>
					<p>
						<strong>Please note:</strong> Only laptop span is
						reflected here, but the frontend will handle everything.
					</p>
					<PanelBody>
						<RangeControl
							label={ __( 'Mobile', 'columns' ) }
							min={ 1 }
							max={ MAX_SPAN }
							onChange={ onChangeXsWidth }
							value={ xsWidth }
						/>
						{ /* skipping sm */ }
						<RangeControl
							label={ __( 'Tablet', 'columns' ) }
							min={ 1 }
							max={ MAX_SPAN }
							onChange={ onChangeMdWidth }
							value={ mdWidth }
						/>
						{ /* skipping lg */ }
						<RangeControl
							label={ __( 'Laptop', 'columns' ) }
							min={ 1 }
							max={ MAX_SPAN }
							onChange={ onChangeXlWidth }
							value={ xlWidth }
						/>
						<RangeControl
							label={ __( 'Desktop', 'columns' ) }
							min={ 1 }
							max={ MAX_SPAN }
							onChange={ onChangeXxlWidth }
							value={ xxlWidth }
						/>
					</PanelBody>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				orientation={ ORIENTATION }
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
			/>
		</div>
	);
}
