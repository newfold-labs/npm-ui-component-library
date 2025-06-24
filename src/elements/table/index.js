import classNames from "classnames";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const rowClassNameMap = {
	variant: {
		striped: "even:nfd-bg-slate-50 odd:nfd-bg-white",
		plain: "",
	},
};

/**
 * @param {JSX.node} children The content.
 * @param {string} [className] Optional class name.
 * @param {Object} [props] Optional table props.
 * @returns {JSX.Element} The element.
 */
const Cell = ( { children, className = "", ...props } ) => (
	<td className={ classNames( "nfd-px-3 nfd-py-4 nfd-text-sm nfd-text-slate-500", className ) } { ...props }>
		{ children }
	</td>
);

Cell.propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf( Object.keys( rowClassNameMap.variant ) ),
	className: PropTypes.string,
};

/**
 * @param {JSX.node} children The content.
 * @param {string} [variant] Optional variant. See `rowClassNameMap.variant` for the options.
 * @param {string} [className] Optional class name.
 * @param {Object} [props] Optional table props.
 * @returns {JSX.Element} The element.
 */
const Row = ( { children, variant = "plain", className = "", ...props } ) => (
	<tr className={ classNames( rowClassNameMap.variant[ variant ], className ) } { ...props }>
		{ children }
	</tr>
);

Row.propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf( Object.keys( rowClassNameMap.variant ) ),
	className: PropTypes.string,
};

/**
 * @param {JSX.node} children The content.
 * @param {string} [className] Optional class name.
 * @param {Object} [props] Optional table props.
 * @returns {JSX.Element} The element.
 */
const Header = ( { children, className = "", ...props } ) => (
	<th
		className={ classNames( "nfd-px-3 nfd-py-4 nfd-text-left nfd-text-sm nfd-font-semibold nfd-text-slate-900", className ) }
		{ ...props }
	>
		{ children }
	</th>
);

Header.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

/**
 * @param {JSX.node} children The content.
 * @param {string} [className] Optional class name.
 * @param {Object} [props] Optional table props.
 * @returns {JSX.Element} The element.
 */
const Head = ( { children, className = "", ...props } ) => (
	<thead className={ classNames( "nfd-bg-slate-50", className ) } { ...props }>{ children }</thead>
);

Head.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

/**
 * @param {JSX.node} children The content.
 * @param {string} [className] Optional class name.
 * @param {Object} [props] Optional table props.
 * @returns {JSX.Element} The element.
 */
const Body = ( { children, className = "", ...props } ) => (
	<tbody className={ classNames( "nfd-divide-y nfd-divide-gray-200 nfd-bg-white", className ) } { ...props }>{ children }</tbody>
);

Body.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

/**
 * @param {JSX.node} children The content.
 * @param {string} [className] Optional class name.
 * @param {Object} [props] Optional table props.
 * @returns {JSX.Element} The element.
 */
const Table = forwardRef( ( { children, className = "", ...props }, ref ) => (
	<div className="nfd-overflow-hidden nfd-shadow nfd-ring-1 nfd-ring-black nfd-ring-opacity-5 nfd-rounded-lg">
		<table className={ classNames( "nfd-min-w-full nfd-divide-y nfd-divide-slate-300", className ) } { ...props } ref={ ref }>
			{ children }
		</table>
	</div>
) );

Table.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

Table.Head = Head;
Table.Head.displayName = "Table.Head";
Table.Body = Body;
Table.Body.displayName = "Table.Body";
Table.Header = Header;
Table.Header.displayName = "Table.Header";
Table.Row = Row;
Table.Row.displayName = "Table.Row";
Table.Cell = Cell;
Table.Cell.displayName = "Table.Cell";

export default Table;
