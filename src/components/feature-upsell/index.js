import { LockOpenIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "../../elements/button";
import { useSvgAria } from "../../hooks";

const classNameMap = {
	variant: {
		"default": "nfd-feature-upsell--default",
		card: "nfd-feature-upsell--card",
	},
};

/**
 * @param {JSX.node} children The children/content.
 * @param {boolean} [shouldUpsell] Whether to show the upsell.
 * @param {string} [className] Extra classname for the parent. Add your content padding here.
 * @param {string} [variant] The variant. See `classNameMap.variant`.
 * @param {string} [cardLink] The card' URL to link to. Required if the variant is `card`.
 * @param {string} [cardText] The card' button text. Used when the variant is `card`.
 * @param {Object} [cardProps] Any extra card/button props.
 * @returns {JSX.Element} The feature or the upsell around the feature.
 */
const FeatureUpsell = ( { children, shouldUpsell = true, className = "", variant = "card", cardLink = "", cardText = "", ...cardProps } ) => {
	const svgAriaProps = useSvgAria();

	if ( ! shouldUpsell ) {
		return children;
	}

	return (
		<div className={ classNames( "nfd-feature-upsell", classNameMap.variant[ variant ], className ) }>
			<div className="nfd-space-y-8 nfd-grayscale">
				{ children }
			</div>
			<div className="nfd-absolute nfd-inset-0 nfd-ring-1 nfd-ring-black nfd-ring-opacity-5 nfd-shadow-lg nfd-rounded-md" />
			<div className="nfd-absolute nfd-inset-0 nfd-flex nfd-items-center nfd-justify-center">
				<Button
					as="a"
					className="nfd-gap-2 nfd-shadow-lg nfd-shadow-amber-700/30"
					variant="upsell"
					href={ cardLink }
					target="_blank"
					rel="noopener"
					{ ...cardProps }
				>
					<LockOpenIcon className="nfd-w-5 nfd-h-5 nfd--ml-1 nfd-shrink-0" { ...svgAriaProps } />
					{ cardText }
				</Button>
			</div>
		</div>
	);
};

FeatureUpsell.propTypes = {
	children: PropTypes.node.isRequired,
	shouldUpsell: PropTypes.bool,
	className: PropTypes.string,
	variant: PropTypes.oneOf( Object.keys( classNameMap.variant ) ),
	cardLink: PropTypes.string,
	cardText: PropTypes.string,
};

export default FeatureUpsell;
