import { forwardRef } from "@wordpress/element";
import classNames from "classnames";
import PropTypes from "prop-types";

/**
 * @param {string} [type="text"] The type of input.
 * @param {string} [className=""] CSS class.
 * @param {boolean} [disabled=false] Whether the input is disabled.
 * @param {boolean} [readOnly=false] Whether the input is read-only.
 * @param {boolean} [required=false] Whether the input is required.
 * @param {JSX.Element} [icon=null] The input icon.
 * @param {object} [props] Optional extra properties.
 * @returns {JSX.Element} TextInput component.
 */
const TextInput = forwardRef( ( {
	type,
	className,
	disabled,
	readOnly,
	required,
	icon:Icon,
	...props
}, ref ) => {
	const inputElement = (<input
		ref={ ref }
		type={ type }
		className={ classNames(
			"nfd-text-input",
			disabled && "nfd-text-input--disabled",
			readOnly && "nfd-text-input--read-only",
			Icon && "nfd-text-input--with-icon nfd-pr-[calc(1.25rem+24px)]",
			className,
		) }
		disabled={ disabled }
		readOnly={ readOnly }
		required={ required }
		{ ...props }
	/>)

	if ( ! Icon ) {
		return inputElement;
	}

	return (
		<span className="nfd-group nfd-text-input__wrapper nfd-relative nfd-inline-block">
			{ inputElement }
			<Icon className="nfd-text-input__icon nfd-absolute nfd-w-[24px] nfd-h-[24px] nfd-right-3 nfd-top-1/2 nfd--translate-y-1/2 nfd-pointer-events-none nfd-text-slate-400 group-hover:nfd-text-slate-500"/>
		</span>

	)
} );

const propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	required: PropTypes.bool,
	icon: PropTypes.elementType,
};

TextInput.propTypes = propTypes;

TextInput.defaultProps = {
	type: "text",
	className: "",
	disabled: false,
	readOnly: false,
	required: false,
	icon: null,
};

export default TextInput;

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <TextInput { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = TextInput.defaultProps;
StoryComponent.displayName = "TextInput";
