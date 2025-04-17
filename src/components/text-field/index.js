import { forwardRef } from "@wordpress/element";
import classNames from "classnames";
import PropTypes from "prop-types";
import Label from "../../elements/label";
import TextInput from "../../elements/text-input";
import { ValidationInput, ValidationMessage } from "../../elements/validation";
import { useDescribedBy } from "../../hooks";

/**
 * @param {string} id The ID of the input.
 * @param {function} onChange The input change handler.
 * @param {string} label The label.
 * @param {JSX.node} [labelSuffix] Extra elements after the label.
 * @param {string} [className] The HTML class.
 * @param {JSX.node} [description] A description.
 * @param {boolean} [disabled] The disabled state.
 * @param {boolean} [readOnly] The read-only state.
 * @param {boolean} [required] The required state.
 * @param {Object} [validation] The validation state.
 * @param {Object} [props] Any extra properties for the TextInput.
 * @returns {JSX.Element} The input field.
 */
const TextField = forwardRef( ( {
	id,
	onChange,
	label,
	labelSuffix,
	labelRequiredIndicator,
	disabled,
	readOnly,
	required,
	icon,
	className,
	description,
	validation,
	...props
}, ref ) => {
	const { ids, describedBy } = useDescribedBy( id, { validation: validation?.message, description } );

	return (
		<div
			className={ classNames(
				"nfd-text-field",
				disabled && "nfd-text-field--disabled",
				readOnly && "nfd-text-field--read-only",
				icon && "nfd-text-field--with-icon",
				className,
			) }
		>
			{
				!! label &&
				<div className="nfd-flex nfd-items-center nfd-mb-2">
					<Label
						requiredIndicator={ (required && labelRequiredIndicator) }
						className="nfd-text-field__label"
						htmlFor={ id }
					>
						{ label }
					</Label>
					{ labelSuffix }
				</div>
			}
			<ValidationInput
				as={ TextInput }
				ref={ ref }
				id={ id }
				icon={ icon }
				onChange={ onChange }
				disabled={ disabled }
				readOnly={ readOnly }
				required={ required }
				className="nfd-text-field__input"
				aria-describedby={ describedBy }
				validation={ validation }
				{ ...props }
			/>
			{ validation?.message && (
				<ValidationMessage variant={ validation?.variant } id={ ids.validation } className="nfd-text-field__validation">
					{ validation.message }
				</ValidationMessage>
			) }
			{ description && <p id={ ids.description } className="nfd-text-field__description">{ description }</p> }
		</div>
	);
} );

const propTypes = {
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	labelSuffix: PropTypes.node,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	required: PropTypes.bool,
	className: PropTypes.string,
	description: PropTypes.node,
	icon: PropTypes.elementType,
	validation: PropTypes.shape( {
		variant: PropTypes.string,
		message: PropTypes.node,
	} ),
};

TextField.propTypes = propTypes;

TextField.defaultProps = {
	labelSuffix: null,
	disabled: false,
	readOnly: false,
	required: false,
	className: "",
	description: null,
	icon: null,
	validation: {},
};

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <TextField { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = TextField.defaultProps;
StoryComponent.displayName = "TextField";

export default TextField;
