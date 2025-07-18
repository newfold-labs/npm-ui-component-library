import classNames from "classnames";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const classNameMap = {
	variant: {
		"default": "",
		block: "nfd-code--block",
	},
};

/**
 * @param {JSX.node} children The content.
 * @param {string} [variant] Optional variant. See `classNameMap.variant`.
 * @param {string} [className] Optional extra className.
 * @param {Object} [props] Optional extra props.
 * @returns {JSX.Element} The Code element.
 */
const Code = forwardRef( ( { children, variant = "default", className = "", ...props }, ref ) => (
	<code
		ref={ ref }
		className={ classNames( "nfd-code", classNameMap.variant[ variant ], className ) }
		{ ...props }
	>
		{ children }
	</code>
) );

const propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf( Object.keys( classNameMap.variant ) ),
	className: PropTypes.string,
};

Code.propTypes = propTypes;

Code.displayName = "Code";

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <Code { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Code.defaultProps;
StoryComponent.displayName = "Code";

export default Code;
