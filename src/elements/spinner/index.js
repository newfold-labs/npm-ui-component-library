import classNames from "classnames";
import { keys } from "lodash";
import PropTypes from "prop-types";
import { useSvgAria } from "../../hooks";
import { forwardRef } from "@wordpress/element";

export const classNameMap = {
	variant: {
		// Default is currentColor.
		"default": "",
		primary: "nfd-text-primary-500",
		white: "nfd-text-white",
	},
	size: {
		3: "nfd-w-3 nfd-h-3",
		4: "nfd-w-4 nfd-h-4",
		8: "nfd-w-8 nfd-h-8",
	},
};

/**
 * @param {string} [variant=default] The variant.
 * @param {string} [size] The size.
 * @param {string} [className] The HTML class.
 * @returns {JSX.Element} The spinner.
 */
const Spinner = forwardRef( ( {
	variant,
	size,
	className,
}, ref ) => {
	const svgAriaProps = useSvgAria();

	return (
		<svg
			ref={ ref }
			xmlns="http://www.w3.org/2000/svg/"
			fill="none"
			viewBox="0 0 24 24"
			className={ classNames(
				"nfd-animate-spin",
				classNameMap.variant[ variant ],
				classNameMap.size[ size ],
				className,
			) }
			{ ...svgAriaProps }
		>
			<circle className="nfd-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
			<path className="nfd-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
		</svg>
	);
} );

const propTypes = {
	variant: PropTypes.oneOf( keys( classNameMap.variant ) ),
	size: PropTypes.oneOf( keys( classNameMap.size ) ),
	className: PropTypes.string,
};

Spinner.propTypes = propTypes;

Spinner.defaultProps = {
	variant: "default",
	size: "4",
	className: "",
};

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <Spinner { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Spinner.defaultProps;
StoryComponent.displayName = "Spinner";

export default Spinner;
