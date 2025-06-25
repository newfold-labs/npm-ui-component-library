import { createContext, forwardRef, useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useSvgAria } from "../../hooks";
import Label from "../../elements/label";

/**
 * Context for managing input behavior in the Features Select component.
 *
 * @type {React.Context<{
*   type: "checkbox" | "radio",
*   provider: boolean
* }>}
*
* @property {("checkbox"|"radio")} type - The input type to be used by Feature components
* @property {boolean} provider - Flag indicating whether the value is from context provider or default
*
* @default
* {
*   type: "checkbox",
*   provider: false
* }
*/
const BehaviorContext = createContext( {
	type: "checkbox",
	provider: false,
} );

/**
 * @param {string} id Input id.
 * @param {string} name Input name.
 * @param {string} value Input value.
 * @param {string} [type="checkbox"] Input type.
 * @param {string} label Label element to be displayed under the feature card.
 * @param {string} [labelTextAlign="center"] Label text alignment.
 * @param {boolean} [disabled] Disabled state.
 * @param {string} screenReaderLabel Screen reader label for input.
 * @param {string} [className] CSS class.
 * @param {JSX.Element} children Children.
 * @returns {JSX.Element} Feature component.
 */
const Feature = forwardRef( ( {
	id,
	name,
	value,
	type = "checkbox",
	label,
	labelTextAlign = "center",
	disabled,
	screenReaderLabel,
	className,
	children,
	...props
}, ref ) => {
	const svgAriaProps = useSvgAria();
	const behaviorContext = useContext( BehaviorContext );

	let behaviorType = behaviorContext.type;
	if ( false === behaviorContext.provider ) {
		// Default the behavior type to type prop if the provider is not set.
		// Addresses the case where the Feature component is used outside of a FeaturesSelect component.
		behaviorType = type;
	}

	return (
		<div
			className={ classNames(
				"nfd-features-select__feature",
				disabled && "nfd-is-disabled",
				className,
			) }
		>
			<input
				ref={ ref }
				type={ behaviorType }
				id={ id }
				name={ name }
				value={ value }
				disabled={ disabled }
				aria-label={ screenReaderLabel }
				className="nfd-features-select__feature-input"
				{ ...props }
			/>

			<Label htmlFor={ id }>
				<div className="nfd-features-select__feature-content">
					<CheckCircleIcon className="nfd-features-select__feature-check" { ...svgAriaProps } />
					{ children }
				</div>
			</Label>

			{ label && (
				<Label
					htmlFor={ id }
					className={ classNames(
						"nfd-features-select__feature-label nfd-text-[14px]",
						labelTextAlign === "left" && "nfd-text-left",
						labelTextAlign === "right" && "nfd-text-right",
						labelTextAlign === "center" && "nfd-text-center",
					) }
					label={ label }
				/>
			) }
		</div>
	);
} );

/**
 * @param {("checkbox"|"radio")} behavior Input behavior.
 * @param {("row"|"column")} layout Layout direction.
 * @param {string} [className] CSS class.
 * @param {JSX.Element} children Children.
 * @returns {JSX.Element} FeaturesSelect component.
 */
const FeaturesSelect = forwardRef( ( {
	behavior = "checkbox",
	layout = "row",
	className,
	children,
	...props
}, ref ) => {
	const behaviorContextValue = {
		type: behavior,
		provider: true,
	};

	return (
		<BehaviorContext.Provider value={ behaviorContextValue }>
			<div
				className={ classNames(
					"nfd-features-select",
					layout === "column" && "nfd-flex-col",
					className,
				) }
				ref={ ref }
				{ ...props }
			>
				{ children }
			</div>
		</BehaviorContext.Provider>
	);
} );

Feature.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	type: PropTypes.oneOf( [ "checkbox", "radio" ] ),
	label: PropTypes.string,
	labelTextAlign: PropTypes.oneOf( [ "left", "right", "center" ] ),
	disabled: PropTypes.bool,
	screenReaderLabel: PropTypes.string.isRequired,
	className: PropTypes.string,
};
FeaturesSelect.propTypes = {
	behavior: PropTypes.oneOf( [ "checkbox", "radio" ] ),
	layout: PropTypes.oneOf( [ "row", "column" ] ),
	className: PropTypes.string,
};

Feature.displayName = "Feature";
FeaturesSelect.displayName = "FeaturesSelect";

FeaturesSelect.Feature = Feature;

export default FeaturesSelect;
