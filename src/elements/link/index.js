import classNames from "classnames";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const classNameMap = {
	variant: {
		"default": "nfd-link--default",
		primary: "nfd-link--primary",
		error: "nfd-link--error",
	},
};

/**
 * @param {JSX.Element} [Component] The component to render as.
 * @param {string} [variant] The variant of the link.
 * @param {string} [className] The HTML classes.
 * @param {JSX.node} children The content of the link.
 * @param {Object} [props] The props.
 * @returns {JSX.Element} The link.
 */
const Link = forwardRef( ( {
	as: Component,
	variant,
	className,
	children,
	...props
}, ref ) => (
	<Component
		ref={ ref }
		className={ classNames(
			"nfd-link",
			classNameMap.variant[ variant ],
			className,
		) }
		{ ...props }
	>
		{ children }
	</Component>
) );

const propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf( Object.keys( classNameMap.variant ) ),
	as: PropTypes.elementType,
	className: PropTypes.string,
};

Link.propTypes = propTypes;

Link.defaultProps = {
	as: "a",
	variant: "default",
	className: "",
};

Link.displayName = "Link";

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <Link { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Link.defaultProps;
StoryComponent.displayName = "Link";

export default Link;
