import PropTypes from "prop-types";
import classNames from "classnames";
import { forwardRef } from "react";

/**
 * @param {string} as The element to render as.
 * @param {Object} children The children.
 * @param {string} className The className.
 * @param {string} size The size of the logo. Options are 'sm', 'md', 'lg', 'xl'.
 * @returns {JSX.Element} The card component.
 */
const BrandLogo = forwardRef( ( { as: Component = "div", size='md',children, className, ...props }, ref ) => {
	const sizeClass = size !== "md" ? `nfd-size-${size}` : null;
	const assetsUrl = NewfoldRuntime?.plugin?.assets;
	const brand = NewfoldRuntime?.plugin?.brand;

	return (
		<Component
			{ ...props }
			className={
			classNames(
				"nfd-brand-logo",
				{
					[ sizeClass ]: sizeClass,
					[ `nfd-brand-logo__${ brand }` ]: brand,
					'nfd-brand-logo--rendered': assetsUrl && brand,
				}, className )
		}
			ref={ ref }>
		{
			!!assetsUrl && !!brand ?
				<img
					src={ assetsUrl + '/svg/' + brand.replaceAll( '-', '' ) + '-logo.svg' }
					alt={`${brand} logo`}
				/>
				: null
		}
	</Component>
	);
});

BrandLogo.displayName = "Brand Logo";

const propTypes = {
	as: PropTypes.elementType,
	className: PropTypes.string,
	size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
};

BrandLogo.propTypes = propTypes;

BrandLogo.defaultProps = {
	as: "div",
	className: "",
	size: "md",
};

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <BrandLogo { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = BrandLogo.defaultProps;
StoryComponent.displayName = "Brand Logo";

export default BrandLogo;
