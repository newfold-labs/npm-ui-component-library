import { forwardRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Content from "./content";
import Header from "./header";

/**
 * @param {React.ReactNode} [as="div"] What component to render as.
 * @param {string} [className=""] Optional extra className.
 * @param {React.ReactNode} children The content.
 * @returns {React.ReactElement} The element.
 */
const Paper = forwardRef( ( { as: Component = "div", className = "", children }, ref ) => (
	<Component
		ref={ ref }
		className={ classNames( "nfd-paper", className ) }
	>
		{ children }
	</Component>
) );

const propTypes = {
	as: PropTypes.node,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};
Paper.propTypes = propTypes;

Paper.defaultProps = {
	as: "div",
	className: "",
};

Paper.Header = Header;
Paper.Header.displayName = "Paper.Header";

Paper.Content = Content;
Paper.Content.displayName = "Paper.Content";

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <Paper { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Paper.defaultProps;
StoryComponent.displayName = "Paper";

export default Paper;
