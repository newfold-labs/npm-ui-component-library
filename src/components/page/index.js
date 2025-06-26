import { PropTypes } from "prop-types";
import classNames from "classnames";
import { forwardRef } from "react";

const Page = forwardRef( ( { as: Component = "div", children, className = "", ...props }, ref ) => (
	<Component { ...props } className={ classNames( "nfd-page", className ) } ref={ ref }>
		{ children }
	</Component>
) );

Page.propTypes = {
	as: PropTypes.element,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

Page.defaultProps = {
	as: "div",
	className: "",
};

Page.displayName = "Page";

export default Page;
