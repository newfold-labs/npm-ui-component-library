import { Switch, Transition } from "@headlessui/react";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { noop } from "lodash";
import PropTypes from "prop-types";
import { useSvgAria } from "../../hooks";
import { forwardRef } from "react";

/**
 * @param {string} id ID.
 * @param {string|JSX.Element} [as="button"] Base component.
 * @param {boolean} checked Default state.
 * @param {string} screenReaderLabel The label for screen readers.
 * @param {Function} onChange Change callback.
 * @param {boolean} [disabled] Disabled flag.
 * @param {string} [type] Type.
 * @param {string} [className] CSS class.
 * @returns {JSX.Element} Toggle component.
 */
const Toggle = forwardRef( ( {
	id,
	as: Component,
	checked,
	screenReaderLabel,
	onChange,
	disabled,
	className,
	type,
	...props
}, ref ) => {
	const svgAriaProps = useSvgAria();

	return (
		<Switch
			ref={ ref }
			as={ Component }
			checked={ checked }
			disabled={ disabled }
			onChange={ disabled ? noop : onChange }
			className={ classNames(
				"nfd-toggle",
				checked && "nfd-toggle--checked",
				disabled && "nfd-toggle--disabled",
				className,
			) }
			data-id={ id }
			{ ...props }
			// Force type button when component is button for proper behavior in HTML forms.
			type={ Component === "button" ? "button" : type }
		>
			<span className="nfd-sr-only">{ screenReaderLabel }</span>
			<span className="nfd-toggle__handle">
				<Transition
					show={ checked }
					unmount={ false }
					as="span"
					aria-hidden={ ! checked }
					enter=""
					enterFrom="nfd-opacity-0 nfd-hidden"
					enterTo="nfd-opacity-100"
					leaveFrom="nfd-opacity-100"
					leaveTo="nfd-opacity-0 nfd-hidden"
				>
					<CheckIcon className="nfd-toggle__icon nfd-toggle__icon--check" { ...svgAriaProps } />
				</Transition>
				<Transition
					show={ ! checked }
					unmount={ false }
					as="span"
					aria-hidden={ checked }
					enterFrom="nfd-opacity-0 nfd-hidden"
					enterTo="nfd-opacity-100"
					leaveFrom="nfd-opacity-100"
					leaveTo="nfd-opacity-0 nfd-hidden"
				>
					<XIcon className="nfd-toggle__icon nfd-toggle__icon--x" { ...svgAriaProps } />
				</Transition>
			</span>
		</Switch>
	);
} );

const propTypes = {
	as: PropTypes.elementType,
	id: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	screenReaderLabel: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	type: PropTypes.string,
	className: PropTypes.string,
};

Toggle.propTypes = propTypes;

Toggle.defaultProps = {
	as: "button",
	checked: false,
	disabled: false,
	type: "",
	className: "",
};

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <Toggle { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Toggle.defaultProps;
StoryComponent.displayName = "Toggle";

export default Toggle;
