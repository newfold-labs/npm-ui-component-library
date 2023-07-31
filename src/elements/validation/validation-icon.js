import { useMemo } from "@wordpress/element";
import PropTypes from "prop-types";
import { values } from "lodash";
import classNames from "classnames";
import { useSvgAria } from "../../hooks";
import { VALIDATION_VARIANTS, VALIDATION_ICON_MAP } from "./constants";

const CLASSNAME_MAP = {
	variant: {
		success: "nfd-validation-icon--success",
		warning: "nfd-validation-icon--warning",
		info: "nfd-validation-icon--info",
		error: "nfd-validation-icon--error",
	},
};

/**
 * @param {string} variant The variant to render.
 * @param {string} className The classname.
 * @param {Object} [props] Any extra props.
 * @returns {JSX.Element} The ValidationIcon component.
 */
const ValidationIcon = ( {
	variant = "info",
	className = "",
	...props
} ) => {
	const Component = useMemo( () => VALIDATION_ICON_MAP[ variant ], [ variant ] );
	const svgAriaProps = useSvgAria();

	return Component ? (
		<Component { ...svgAriaProps } { ...props } className={ classNames( "nfd-validation-icon", CLASSNAME_MAP.variant[ variant ], className ) } />
	) : null;
};

ValidationIcon.propTypes = {
	variant: PropTypes.oneOf( values( VALIDATION_VARIANTS ) ),
	className: PropTypes.string,
};

export default ValidationIcon;
