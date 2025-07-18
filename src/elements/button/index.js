import classNames from "classnames";
import { keys } from "lodash";
import PropTypes from "prop-types";
import Spinner from "../spinner";
import { forwardRef } from "react";

export const classNameMap = {
	variant: {
		primary: "nfd-button--primary",
		secondary: "nfd-button--secondary",
		error: "nfd-button--error",
		upsell: "nfd-button--upsell",
	},
	size: {
		"default": "",
		small: "nfd-button--small",
		large: "nfd-button--large",
	},
};

/**
 * @param {JSX.node} children Content of the button.
 * @param {string|JSX.Element} [as="button"] Base component.
 * @param {string} [type] Type attribute. Used when `as` is a `button`.
 * @param {string} [variant="primary"] Button variant. See `classNameMap` for the options.
 * @param {string} [size="default"] Button size. See `classNameMap` for the options.
 * @param {boolean} [isLoading=false] Whether to show a spinner.
 * @param {boolean} [disabled=false] Whether the button is disabled.
 * @param {string} [className] CSS class.
 * @returns {JSX.Element} Button component.
 */
const Button = forwardRef( ( {
	children,
	as: Component,
	type,
	variant,
	size,
	isLoading,
	disabled,
	className,
	...props
}, ref ) => (
	<Component
		// eslint-disable-next-line no-undefined
		type={ type || ( Component === "button" && "button" ) || undefined }
		disabled={ disabled }
		ref={ ref }
		className={ classNames(
			"nfd-button",
			classNameMap.variant[ variant ],
			classNameMap.size[ size ],
			isLoading && "nfd-cursor-wait",
			disabled && "nfd-button--disabled",
			className,
		) }
		{ ...props }
	>
		{ isLoading && <Spinner size={ size === "small" ? "3" : "4" } className="nfd-mr-2" /> }
		{ children }
	</Component>
) );

const propTypes = {
	children: PropTypes.node.isRequired,
	as: PropTypes.elementType,
	type: PropTypes.oneOf( [ "button", "submit", "reset" ] ),
	variant: PropTypes.oneOf( keys( classNameMap.variant ) ),
	size: PropTypes.oneOf( keys( classNameMap.size ) ),
	isLoading: PropTypes.bool,
	disabled: PropTypes.bool,
	className: PropTypes.string,
};

Button.propTypes = propTypes;

Button.defaultProps = {
	as: "button",
	// eslint-disable-next-line no-undefined
	type: undefined,
	variant: "primary",
	size: "default",
	isLoading: false,
	disabled: false,
	className: "",
};

Button.displayName = "Button";

export default Button;

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <Button { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Button.defaultProps;
StoryComponent.displayName = "Button";
