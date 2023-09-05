/* eslint-disable no-undefined */
import PropTypes from "prop-types";
import classNames from "classnames";
import { forwardRef } from "@wordpress/element";

export const sizeMap = {
	1:
		{
			className: 'nfd-title--1',
			element: 'h1',
		},
	2:
		{
			className: 'nfd-title--2',
			element: 'h2',
		},
	3:
		{
			className: 'nfd-title--3',
			element: 'h3',
		},
	4:
		{
			className: 'nfd-title--4',
			element: 'h4',
		},
	5:
		{
			className: 'nfd-title--5',
			element: 'h5',
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
	
	// If `as` is default and `size` is set, update Component to proper heading level
	if ( Component === 'h1' && typeof size !== undefined ) {
		Component = sizeMap[ size ].element;
	}

	return (
		<Component
			ref={ ref }
			className={ classNames(
				"nfd-title",
				sizeMap[ size || Component[ 1 ] ].className,
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
	size: PropTypes.oneOf( Object.keys( sizeMap ) ),
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
