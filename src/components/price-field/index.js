import { forwardRef, useState } from "react";
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
 * @param {JSX.Element} [icon] The field icon.
 * @param {Object} [validation] The validation state.
 * @param {Object} [format] The price format.
 * @param {Object} [props] Any extra properties for the TextInput.
 * @returns {JSX.Element} The input field.
 */
const PriceField = forwardRef( ( {
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
									format,
									value,
									...props
								}, ref ) => {

	const validatePrice = (price) => {

		let number   = parseFloat(
				price
					.replace( new RegExp(`[^0-9${format.decimalSeparator}]`, 'gm'), '' )
					.replace( format.decimalSeparator, '.' )
			),
			formatted = '';

		if ( ! isNaN( number ) ) {
			// Check if the original value contains the decimal separator character, and preserve it in the formatted value as well.
			// This is because parseFloat removes it, making it impossible to enter a decimal number.
			let hasDecimal = -1 !== price.indexOf( format.decimalSeparator );

			// Convert to string.
			number = number + '';

			let [thousands = '', decimals = ''] = number.split('.'),
				mod = thousands.length > 3 ? thousands.length % 3 : 0;

			// Format thousands.
			formatted = (mod ? thousands.slice(0, mod) + format.thousandSeparator : '') + thousands.slice(mod).replace(/(\d{3})(?=\d)/g, "$1" + format.thousandSeparator);

			// Format decimals.
			formatted += hasDecimal ? format.decimalSeparator + decimals.slice( 0, format.decimals ) : '';
		}

		return formatted;
	}

	const handleInputChange = (e) => {
		e.preventDefault();

		setPrice( validatePrice( e.target.value ) );

		if ( typeof onChange === 'function' ){
			onChange(e);
		}
	}

	const { ids, describedBy } = useDescribedBy( id, { validation: validation?.message, description } );
	const [ price, setPrice ] = useState( validatePrice( value ) );

	return (
		<div
			className={ classNames(
				"nfd-price-field",
				disabled && "nfd-price-field--disabled",
				readOnly && "nfd-price-field--read-only",
				icon && "nfd-price-field--with-icon",
				className,
			) }
		>
			{
				!! label &&
				<div className="nfd-flex nfd-items-center nfd-mb-2">
					<Label
						requiredIndicator={ ( required && labelRequiredIndicator ) }
						className="nfd-price-field__label"
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
				onChange={ handleInputChange }
				disabled={ disabled }
				readOnly={ readOnly }
				required={ required }
				className={ classNames(
					"nfd-price-field__input",
					{
						"nfd-price-field--input-with-icon": icon,
					},
				) }
				aria-describedby={ describedBy }
				validation={ validation }
				value={price}
				{ ...props }
			/>
			{ validation?.message && (
				<ValidationMessage variant={ validation?.variant } id={ ids.validation } className="nfd-price-field__validation">
					{ validation.message }
				</ValidationMessage>
			) }
			{ description && <p id={ ids.description } className="nfd-price-field__description">{ description }</p> }
		</div>
	);
} );

const propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	labelSuffix: PropTypes.node,
	labelRequiredIndicator: PropTypes.node,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	required: PropTypes.bool,
	className: PropTypes.string,
	description: PropTypes.node,
	icon: PropTypes.elementType,
	value: PropTypes.string,
	validation: PropTypes.shape( {
		variant: PropTypes.string,
		message: PropTypes.node,
	} ),
	format: PropTypes.shape( {
		decimals: PropTypes.number,
		decimalSeparator: PropTypes.string,
		thousandSeparator: PropTypes.string,
	} ),
};

PriceField.propTypes = propTypes;

PriceField.defaultProps = {
	labelSuffix: null,
	disabled: false,
	readOnly: false,
	required: false,
	className: '',
	description: null,
	icon: null,
	validation: {},
	value: '',
	format: {
		decimals: 2,
		decimalSeparator: '.',
		thousandSeparator: '',
	}
};

PriceField.displayName = "PriceField";

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <PriceField { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = PriceField.defaultProps;
StoryComponent.displayName = "PriceField";

export default PriceField;
