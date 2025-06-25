/* eslint-disable no-undefined */
import classNames from "classnames";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const classNameMap = {
	variant: {
		info: "nfd-badge--info",
		upsell: "nfd-badge--upsell",
		plain: "nfd-badge--plain",
	},
	size: {
		"default": "",
		small: "nfd-badge--small",
		large: "nfd-badge--large",
	},
};

/**
 * @param {JSX.node} children Content of the Badge.
 * @param {string|function} [as] Base component.
 * @param {string} [variant] Badge variant. See `classNameMap.variant` for the options.
 * @param {string} [size] Badge size. See `classNameMap.size` for the options.
 * @param {string} [className] CSS class.
 * @returns {JSX.Element} Badge component.
 */
const Badge = forwardRef( ( {
	children,
	as: Component,
	variant,
	size,
	className,
	...props
}, ref ) => (
	<Component
		ref={ ref }
		className={ classNames(
			"nfd-badge",
			classNameMap.variant[ variant ],
			classNameMap.size[ size ],
			className,
		) }
		{ ...props }
	>
		{ children }
	</Component>
) );

const propTypes = {
	children: PropTypes.node.isRequired,
	as: PropTypes.elementType,
	variant: PropTypes.oneOf( Object.keys( classNameMap.variant ) ),
	size: PropTypes.oneOf( Object.keys( classNameMap.size ) ),
	className: PropTypes.string,
};

Badge.propTypes = propTypes;

Badge.defaultProps = {
	as: "span",
	variant: "info",
	size: "default",
	className: "",
};

export default Badge;

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <Badge { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Badge.defaultProps;
StoryComponent.displayName = "Badge";
