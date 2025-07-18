import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Label as HeadlessUiLabel, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Fragment, useCallback, useMemo, forwardRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useSvgAria } from "../../hooks";
import { ValidationInput } from "../validation";
import Label from "../label";

const optionPropType = {
	value: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number, PropTypes.bool ] ).isRequired,
	label: PropTypes.string.isRequired,
};

/**
 * @param {string|number|boolean} value Value.
 * @param {string} label Label.
 * @returns {JSX.Element} The option.
 */
const Option = ( { value, label } ) => {
	const svgAriaProps = useSvgAria();
	const getClassName = useCallback( ( { active, selected } ) => classNames(
		"nfd-select__option",
		active && "nfd-select__option--active",
		selected && "nfd-select__option--selected",
	), [] );

	return (
		<ListboxOption value={ value } className={ getClassName }>
			{ ( { selected } ) => <>
				<span className={ classNames( "nfd-select__option-label", selected && "nfd-font-semibold" ) }>
					{ label }
				</span>
				{ selected && (
					<CheckIcon className="nfd-select__option-check" { ...svgAriaProps } />
				) }
			</> }
		</ListboxOption>
	);
};

Option.propTypes = optionPropType;

/**
 * @param {string} id Identifier.
 * @param {string} value Selected value.
 * @param {{ value, label }[]} [options] Options to choose from.
 * @param {JSX.node} [children] Defer from the default options rendering.
 * @param {string} [selectedLabel] When using children instead of options, pass the label of the selected option.
 * @param {string} [label] Label.
 * @param {Object} [labelProps] Extra label props.
 * @param {JSX.node} [labelSuffix] Optional label suffix.
 * @param {Function} onChange Change callback.
 * @param {boolean} [disabled] Disabled state.
 * @param {Object} [validation] The validation state.
 * @param {string} [className] CSS class.
 * @param {Object} [buttonProps] Any extra props for the button.
 * @param {Object} [props] Any extra props.
 * @returns {JSX.Element} Select component.
 */
const Select = forwardRef( ( {
	id,
	value,
	options,
	children,
	selectedLabel,
	label,
	labelProps,
	labelSuffix,
	onChange,
	disabled,
	validation,
	className,
	buttonProps,
	...props
}, ref ) => {
	const selectedOption = useMemo( () => (
		// Default to first option if value is missing.
		options.find( ( option ) => value === option?.value ) || options[ 0 ]
	), [ value, options ] );
	const svgAriaProps = useSvgAria();

	return (
		<Listbox
			ref={ ref }
			as="div"
			value={ value }
			onChange={ onChange }
			disabled={ disabled }
			className={ classNames(
				"nfd-select",
				disabled && "nfd-select--disabled",
				className,
			) }
			{ ...props }
		>
			{ label && <div className="nfd-flex nfd-items-center nfd-mb-2">
				<HeadlessUiLabel as={ Label } { ...labelProps }>{ label }</HeadlessUiLabel>
				{ labelSuffix }
			</div> }
			<ValidationInput
				as={ ListboxButton }
				data-id={ id }
				className="nfd-select__button"
				validation={ validation }
				{ ...buttonProps }
			>
				<span className="nfd-select__button-label">{ selectedLabel || selectedOption?.label || "" }</span>
				{ ! validation?.message && (
					<SelectorIcon className="nfd-select__button-icon" { ...svgAriaProps } />
				) }
			</ValidationInput>
			<Transition
				as={ Fragment }
				enter="nfd-transition nfd-duration-100 nfd-ease-out"
				enterFrom="nfd-transform nfd-scale-95 nfd-opacity-0"
				enterTo="nfd-transform nfd-scale-100 nfd-opacity-100"
				leave="nfd-transition nfd-duration-75 nfd-ease-out"
				leaveFrom="nfd-transform nfd-scale-100 nfd-opacity-100"
				leaveTo="nfd-transform nfd-scale-95 nfd-opacity-0"
			>
				<ListboxOptions className="nfd-select__options">
					{ children || options.map( option => <Option key={ option.value } { ...option } /> ) }
				</ListboxOptions>
			</Transition>
		</Listbox>
	);
} );

const propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number, PropTypes.bool ] ).isRequired,
	options: PropTypes.arrayOf( PropTypes.shape( optionPropType ) ),
	children: PropTypes.node,
	selectedLabel: PropTypes.string,
	label: PropTypes.string,
	labelProps: PropTypes.object,
	labelSuffix: PropTypes.node,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	validation: PropTypes.shape( {
		variant: PropTypes.string,
		message: PropTypes.node,
	} ),
	className: PropTypes.string,
	buttonProps: PropTypes.object,
};

Select.propTypes = propTypes;

Select.Option = Option;
Select.Option.displayName = "Select.Option";

Select.defaultProps = {
	options: [],
	children: null,
	selectedLabel: "",
	label: "",
	labelProps: {},
	labelSuffix: null,
	disabled: false,
	validation: {},
	className: "",
	buttonProps: {},
};

Select.displayName = "Select";

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <Select { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Select.defaultProps;
StoryComponent.displayName = "Select";

export default Select;
