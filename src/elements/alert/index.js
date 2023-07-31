import classNames from "classnames";
import PropTypes from "prop-types";
import { ValidationIcon, ValidationMessage } from "../validation";
import { forwardRef } from "@wordpress/element";

export const classNameMap = {
	variant: {
		info: "nfd-alert--info",
		warning: "nfd-alert--warning",
		success: "nfd-alert--success",
		error: "nfd-alert--error",
	},
};

export const roleMap = {
	alert: "alert",
	status: "status",
};

/**
 * @param {JSX.node} children Content of the Alert.
 * @param {string} [role] The role of the Alert.
 * @param {string|function} [as="span"] Base component.
 * @param {string} [variant="info"] Alert variant. See `classNameMap` for the options.
 * @param {string} [className] CSS class.
 * @returns {JSX.Element} Alert component.
 */
const Alert = forwardRef( ( {
	children,
	role = "status",
	as: Component = "span",
	variant = "info",
	className = "",
	...props
}, ref ) => (
	<Component
		ref={ ref }
		className={ classNames(
			"nfd-alert",
			classNameMap.variant[ variant ],
			className,
		) }
		role={ roleMap[ role ] }
		{ ...props }
	>
		<ValidationIcon variant={ variant } className="nfd-alert__icon" />
		<ValidationMessage as="div" variant={ variant } className="nfd-alert__message">
			{ children }
		</ValidationMessage>
	</Component>
) );

const propTypes = {
	children: PropTypes.node.isRequired,
	as: PropTypes.elementType,
	variant: PropTypes.oneOf( Object.keys( classNameMap.variant ) ),
	className: PropTypes.string,
	role: PropTypes.oneOf( Object.keys( roleMap ) ),
};

Alert.propTypes = propTypes;

Alert.defaultProps = {
	as: "span",
	variant: "info",
	className: "",
	role: "status",
};

export default Alert;

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <Alert { ...props } />;
// eslint-disable-next-line react/forbid-foreign-prop-types
StoryComponent.propTypes = Alert.propTypes;
// eslint-disable-next-line react/no-typos
StoryComponent.DefaultProps = Alert.defaultProps;
StoryComponent.displayName = "Alert";
