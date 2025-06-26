/* eslint-disable no-undefined */
import PropTypes from "prop-types";
import classNames from "classnames";
import { forwardRef } from "react";

export const classNameMap = {
	size: {
		1: "nfd-title--1",
		2: "nfd-title--2",
		3: "nfd-title--3",
		4: "nfd-title--4",
		5: "nfd-title--5",
	},
};

/**
 * @param {Object} props Props object.
 * @returns {JSX.Element} Title component.
 */
const Title = forwardRef( ( {
	children,
	as: Component = "h1",
	size,
	className,
	...props
}, ref ) => {
	/**
	 * Get the default size for the title component.
	 * If size prop is provided, use it. Otherwise, extract from component name if it's an h tag.
	 * @returns {string} The size value for the title.
	 */
	const getDefaultSize = () => {
		if ( size ) {
			return size;
		}
		if ( typeof Component === "string" && Component.startsWith( "h" ) && Component.length === 2 ) {
			return Component[ 1 ];
		}
		// default size
		return "1";
	};

	return (
		<Component
			ref={ ref }
			className={ classNames(
				"nfd-title",
				classNameMap.size[ getDefaultSize() ],
				className,
			) }
			{ ...props }
		>
			{ children }
		</Component>
	);
} );

Title.displayName = "Title";

const propTypes = {
	children: PropTypes.node.isRequired,
	as: PropTypes.elementType,
	size: PropTypes.oneOf( Object.keys( classNameMap.size ) ),
	className: PropTypes.string,
};

Title.propTypes = propTypes;

Title.defaultProps = {
	as: "h1",
	size: undefined,
	className: "",
};

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <Title { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Title.defaultProps;
StoryComponent.displayName = "Title";

export default Title;
