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
	as: Component,
	size,
	className,
	...props
}, ref ) => {
	return (
		<Component
			ref={ ref }
			className={ classNames(
				"nfd-title",
				classNameMap.size[ size || Component[ 1 ] ],
				className,
			) }
			{ ...props }
		>
			{ children }
		</Component>
	);
} );

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
