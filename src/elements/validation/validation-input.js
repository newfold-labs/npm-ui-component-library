import { forwardRef } from '@wordpress/element';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ValidationIcon from './validation-icon';

const CLASSNAME_MAP = {
	variant: {
		success: 'nfd-validation-input--success',
		warning: 'nfd-validation-input--warning',
		info: 'nfd-validation-input--info',
		error: 'nfd-validation-input--error',
	},
};

/**
 * @param {JSX.Element} as The component to render.
 * @param {Object} [validation] The validation state.
 * @param {string} [className] The classname.
 * @param {JSX.Element} [icon] The classname.
 * @returns {JSX.Element} The ValidationInput component.
 */
const ValidationInput = forwardRef( ( {
										  as: Component,
										  icon: Icon,
										  validation = {},
										  className = '',
										  ...props
									  }, ref ) => {
	const FieldComponent = (<Component
		ref={ ref }
		{ ...props }
		className={ classNames( 'nfd-validation-input__input', className ) }
	/>);
	return (
		<div className={ classNames( 'nfd-validation-input', validation?.message && CLASSNAME_MAP.variant[ validation?.variant ] ) }>
			{
				Icon ?
					<span className="nfd-group nfd-relative">
						{
							! (validation?.message && Object.keys( CLASSNAME_MAP.variant ).includes( validation?.variant )) &&
							<Icon
								className={
									classNames(
										'nfd-text-input__icon',
										'nfd-absolute nfd-w-[24px] nfd-h-[24px] nfd-right-3 nfd-top-1/2 nfd--translate-y-1/2 nfd-pointer-events-none nfd-duration-200',
									)
								}
							/>
						}
						{ FieldComponent }
					</span>
					:
					FieldComponent
			}
			{ validation?.message && (
				<ValidationIcon variant={ validation?.variant } className="nfd-validation-input__icon"/>
			) }
		</div>
	);
} );

ValidationInput.propTypes = {
	as: PropTypes.elementType.isRequired,
	icon: PropTypes.elementType,
	validation: PropTypes.shape( {
		variant: PropTypes.string,
		message: PropTypes.node,
	} ),
	className: PropTypes.string,
};

export default ValidationInput;
