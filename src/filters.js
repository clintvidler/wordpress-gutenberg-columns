import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import classnames from 'classnames';

const withColumnBlockClasses = createHigherOrderComponent(
	( BlockListBlock ) => {
		return ( props ) => {
			const { name, attributes } = props;
			const {
				xsWidth,
				smWidth,
				mdWidth,
				lgWidth,
				xlWidth,
				xxlWidth,
			} = attributes;

			if ( name != 'vidler-blocks/column' )
				return <BlockListBlock { ...props } />;

			function getClass( prefix = '', span ) {
				return `${ prefix }w-${
					span === 12 ? 'full' : `${ span }/12`
				}`;
			}

			let classNames = classnames( {
				[ getClass( undefined, xsWidth ) ]: xsWidth,
				[ getClass( 'sm:', smWidth ) ]: smWidth,
				[ getClass( 'md:', mdWidth ) ]: mdWidth,
				[ getClass( 'lg:', lgWidth ) ]: lgWidth,
				[ getClass( 'xl:', xlWidth ) ]: xlWidth,
				[ getClass( '2xl:', xxlWidth ) ]: xxlWidth,
			} );

			return <BlockListBlock { ...props } className={ classNames } />;
		};
	},
	'withColumnBlockClasses'
);

addFilter(
	'editor.BlockListBlock',
	'vidler-blocks/column',
	withColumnBlockClasses
);
