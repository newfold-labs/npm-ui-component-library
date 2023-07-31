import PropTypes from "prop-types";
import { keys } from "lodash";
import classNames from "classnames";

const CLASSNAME_MAP = {
	variant: {
		success: "nfd-validation-message--success",
		warning: "nfd-validation-message--warning",
		info: "nfd-validation-message--info",
		error: "nfd-validation-message--error",
	},
};

/**
 * @param {string|function} [as="p"] The component to render as.
 * @param {string} [variant="info"] The variant.
 * @param {JSX.node} [children=""] The validation message.
 * @param {string} [className=""] The class name.
 * @returns {JSX.Element} The ValidationMessage component.
 */
const ValidationMessage = ( {
	as: Component = "p",
	variant = "info",
	children,
	className = "",
	...props
} ) =>  (
	<Component { ...props } className={ classNames( "nfd-validation-message", CLASSNAME_MAP.variant[ variant ], className ) }>
		{ children }
	</Component>
);

ValidationMessage.propTypes = {
	as: PropTypes.elementType,
	variant: PropTypes.oneOf( keys( CLASSNAME_MAP.variant ) ),
	message: PropTypes.node,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default ValidationMessage;
