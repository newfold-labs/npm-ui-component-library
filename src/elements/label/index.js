import { forwardRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

/**
 * @param {string} label Content of the Label. Note that this is a string ONLY for a11y reasons.
 * @param {string} children Alternative to the label. See label.
 * @param {string|JSX.node} [as] Base component.
 * @param {string} [className] CSS class.
 * @param {boolean} [requiredIndicator] Whether the label is required.
 * @returns {JSX.Element} Label component.
 */
const Label = forwardRef( ( {
	as: Component,
	className,
	label,
	requiredIndicator,
	children,
	...props
}, ref ) => (
	<Component
		ref={ ref }
		className={ classNames( "nfd-label", className ) }
		{ ...props }
	>
		{ label || children || null }
		{ requiredIndicator && <span className="nfd-label__required">*</span> }
	</Component>
) );

const propTypes = {
	label: PropTypes.string,
	children: PropTypes.string,
	as: PropTypes.elementType,
	className: PropTypes.string,
	required: PropTypes.bool,
	requiredIndicator: PropTypes.bool,
};

Label.propTypes = propTypes;

Label.defaultProps = {
	label: "",
	children: "",
	as: "label",
	className: "",
	requiredIndicator: false,
};

Label.displayName = "Label";


// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <Label { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Label.defaultProps;
StoryComponent.displayName = "Label";

export default Label;
