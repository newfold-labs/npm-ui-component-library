import { CheckCircleIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useSvgAria } from "../../hooks";
import Label from "../label";
import { forwardRef } from "react";

const classNameMap = {
	variant: {
		"default": "",
		"inline-block": "nfd-radio--inline-block",
	},
};

/**
 * @param {string} id Identifier.
 * @param {string} name Name.
 * @param {string} value Value.
 * @param {string} label Label.
 * @param {string} [screenReaderLabel] Screen reader label.
 * @param {string} [variant] Variant.
 * @param {boolean} [disabled] Disabled state.
 * @param {string} [className] CSS class.
 * @param {boolean} [isLabelDangerousHtml] Whether the label should be dangerously set as HTML.
 * @returns {JSX.Element} Radio component.
 */
const Radio = forwardRef( ( {
	id,
	name,
	value,
	label,
	screenReaderLabel,
	variant,
	disabled,
	className,
	isLabelDangerousHtml,
	...props
}, ref ) => {
	const svgAriaProps = useSvgAria();

	if ( variant === "inline-block" ) {
		return (
			<div
				className={ classNames(
					"nfd-radio",
					"nfd-radio--inline-block",
					disabled && "nfd-radio--disabled",
					className,
				) }
			>
				<input
					type="radio"
					id={ id }
					name={ name }
					value={ value }
					disabled={ disabled }
					className="nfd-radio__input"
					aria-label={ screenReaderLabel }
					{ ...props }
				/>
				<span className="nfd-radio__content">
					<Label
						htmlFor={ id }
						className="nfd-radio__label"
						label={ isLabelDangerousHtml ? null : label }
						dangerouslySetInnerHTML={ isLabelDangerousHtml ? { __html: label } : null }
					/>
					<CheckCircleIcon className="nfd-radio__check" { ...svgAriaProps } />
				</span>
			</div>
		);
	}

	return (
		<div
			className={ classNames(
				"nfd-radio",
				disabled && "nfd-radio--disabled",
				className,
			) }
		>
			<input
				ref={ ref }
				type="radio"
				id={ id }
				name={ name }
				value={ value }
				disabled={ disabled }
				className="nfd-radio__input"
				{ ...props }
			/>
			<Label
				htmlFor={ id }
				className="nfd-radio__label"
				label={ isLabelDangerousHtml ? null : label }
				dangerouslySetInnerHTML={ isLabelDangerousHtml ? { __html: label } : null }
			/>
		</div>
	);
} );

const propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	isLabelDangerousHtml: PropTypes.bool,
	screenReaderLabel: PropTypes.string,
	variant: PropTypes.oneOf( Object.keys( classNameMap.variant ) ),
	disabled: PropTypes.bool,
	className: PropTypes.string,
};

Radio.propTypes = propTypes;

Radio.defaultProps = {
	screenReaderLabel: "",
	variant: "default",
	disabled: false,
	className: "",
	isLabelDangerousHtml: false,
};

Radio.displayName = "Radio";

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <Radio { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Radio.defaultProps;
StoryComponent.displayName = "Radio";

export default Radio;
