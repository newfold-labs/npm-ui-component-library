import { forwardRef } from "@wordpress/element";
import PropTypes from "prop-types";
import classNames from "classnames";
import ValidationIcon from "./validation-icon";

const CLASSNAME_MAP = {
	variant: {
		success: "nfd-validation-input--success",
		warning: "nfd-validation-input--warning",
		info: "nfd-validation-input--info",
		error: "nfd-validation-input--error",
	},
};

/**
 * @param {string} variant The variant to render.
 * @param {Object} [validation] The validation state.
 * @param {string} [className] The classname.
 * @returns {JSX.Element} The ValidationInput component.
 */
const ValidationInput = forwardRef( ( {
	as: Component,
	validation = {},
	className = "",
	...props
}, ref ) => {
	return (
		<div className={ classNames( "nfd-validation-input", validation?.message && CLASSNAME_MAP.variant[ validation?.variant ] ) }>
			<Component
				ref={ ref }
				{ ...props }
				className={ classNames( "nfd-validation-input__input", className ) }
			/>
			{ validation?.message && (
				<ValidationIcon variant={ validation?.variant } className="nfd-validation-input__icon" />
			) }
		</div>
	);
} );

ValidationInput.propTypes = {
	as: PropTypes.elementType.isRequired,
	validation: PropTypes.shape( {
		variant: PropTypes.string,
		message: PropTypes.node,
	} ),
	className: PropTypes.string,
};

export default ValidationInput;
