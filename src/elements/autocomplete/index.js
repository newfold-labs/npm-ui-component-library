import PropTypes from "prop-types";
import { forwardRef, Fragment, useCallback } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { constant } from "lodash";
import { useSvgAria } from "../../hooks";
import { ValidationInput } from "../validation";

// Render Combobox.Button as a div always.
const AutocompleteButton = forwardRef( ( props, ref ) => <Combobox.Button as="div" ref={ ref } { ...props } /> );
AutocompleteButton.displayName = "AutocompleteButton";

/**
 * @param {JSX.node} children The children.
 * @param {string} value The value.
 * @returns {JSX.Element} The Option component.
 */
const Option = ( {
	children,
	value,
} ) => {
	const svgAriaProps = useSvgAria();
	const getClassName = useCallback( ( { active, selected } ) => classNames(
		"nfd-autocomplete__option",
		selected && "nfd-autocomplete__option--selected",
		( active && ! selected ) && "nfd-autocomplete__option--active",
	), [] );

	return (
		<Combobox.Option className={ getClassName } value={ value }>
			{ ( { selected } ) => (
				<>
					<span className={ classNames( "nfd-autocomplete__option-label", selected && "nfd-font-semibold" ) }>
						{ children }
					</span>
					{ selected && (
						<CheckIcon className="nfd-autocomplete__option-check" { ...svgAriaProps } />
					) }
				</>
			) }
		</Combobox.Option>
	);
};

const optionPropType = {
	children: PropTypes.node,
	value: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number, PropTypes.bool ] ).isRequired,
};

Option.propTypes = optionPropType;

/**
 *
 * @param {Function} onChange Change callback.
 * @param {Object} svgAriaProps SVG aria props.
 * @param {string} screenReaderText Screen reader text.
* @returns {JSX.Element} Select component.
 */
const ClearSelection = ( { onChange, svgAriaProps, screenReaderText } ) => {
	const clear = useCallback( ( e )=> {
		e.preventDefault();
		onChange( null );
	}, [ onChange ] );

	return <button className="nfd-mr-4 nfd-flex nfd-items-center" onClick={ clear }>
		<span className="nfd-sr-only">{ screenReaderText }</span>
		<XIcon className="nfd-text-slate-400 nfd-w-5 nfd-h-5" { ...svgAriaProps } />
		<div className="nfd-w-2 nfd-mr-2 nfd-border-r-slate-200 nfd-border-r nfd-h-7" />
	</button>;
};

ClearSelection.propTypes = {
	onChange: PropTypes.func.isRequired,
	svgAriaProps: PropTypes.object.isRequired,
	screenReaderText: PropTypes.string.isRequired,
};

/**
 * @param {string} id Identifier.
 * @param {string} value Selected value.
 * @param {JSX.node} [children] Defer from the default options rendering.
 * @param {string} [selectedLabel] When using children instead of options, pass the label of the selected option.
 * @param {string} [label] Label.
 * @param {Object} [labelProps] Extra label props.
 * @param {JSX.node} [labelSuffix] Optional label suffix.
 * @param {Function} onChange Change callback.
 * @param {Function} onQueryChange Query change callback.
 * @param {Object} [validation] The validation state.
 * @param {string} [placeholder] Input placeholder.
 * @param {string} [className] CSS class.
 * @param {Object} [buttonProps] Any extra props for the button.
 * @param {Object} [props] Any extra props.
 * @returns {JSX.Element} Select component.
 */
const Autocomplete = forwardRef( ( {
	id,
	value,
	children,
	selectedLabel,
	label,
	labelProps,
	labelSuffix,
	onChange,
	onQueryChange,
	validation,
	placeholder,
	className,
	buttonProps,
	clearButtonScreenReaderText,
	...props
}, ref ) => {
	const getDisplayValue = useCallback( constant( selectedLabel ), [ selectedLabel ] );
	const svgAriaProps = useSvgAria();

	return (
		<Combobox
			ref={ ref }
			as="div"
			value={ value }
			onChange={ onChange }
			className={ classNames( "nfd-autocomplete", className ) }
			{ ...props }
		>
			{ label && <div className="nfd-flex nfd-items-center nfd-mb-2">
				<Combobox.Label { ...labelProps }>{ label }</Combobox.Label>
				{ labelSuffix }
			</div> }
			<div className="nfd-relative">
				<ValidationInput
					as={ AutocompleteButton }
					data-id={ id }
					validation={ validation }
					className="nfd-autocomplete__button"
					{ ...buttonProps }
				>
					<Combobox.Input
						className="nfd-autocomplete__input"
						autoComplete="off"
						placeholder={ placeholder }
						displayValue={ getDisplayValue }
						onChange={ onQueryChange }
					/>
					{ props.nullable && selectedLabel &&
					<ClearSelection onChange={ onChange } svgAriaProps={ svgAriaProps } screenReaderText={ clearButtonScreenReaderText } /> }
					{ ! validation?.message && (
						<SelectorIcon className="nfd-autocomplete__button-icon" { ...svgAriaProps } />
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
					<Combobox.Options className="nfd-autocomplete__options">
						{ children }
					</Combobox.Options>
				</Transition>
			</div>
		</Combobox>
	);
} );


Autocomplete.displayName = "Autocomplete";

Autocomplete.Option = Option;
Autocomplete.Option.displayName = "Autocomplete.Option";

const propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number, PropTypes.bool ] ),
	children: PropTypes.node,
	selectedLabel: PropTypes.string,
	label: PropTypes.string,
	labelProps: PropTypes.object,
	labelSuffix: PropTypes.node,
	onChange: PropTypes.func.isRequired,
	onQueryChange: PropTypes.func.isRequired,
	validation: PropTypes.shape( {
		variant: PropTypes.string,
		message: PropTypes.node,
	} ),
	placeholder: PropTypes.string,
	className: PropTypes.string,
	buttonProps: PropTypes.object,
	clearButtonScreenReaderText: PropTypes.string,
	nullable: PropTypes.bool,
};
Autocomplete.propTypes = propTypes;

Autocomplete.defaultProps = {
	children: null,
	value: null,
	selectedLabel: "",
	label: "",
	labelProps: {},
	labelSuffix: null,
	validation: {},
	placeholder: "",
	className: "",
	buttonProps: {},
	clearButtonScreenReaderText: "Clear",
};

export default Autocomplete;

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <Autocomplete { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Autocomplete.defaultProps;
StoryComponent.displayName = "Autocomplete";
