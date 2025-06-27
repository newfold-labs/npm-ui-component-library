import { useCallback } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useNavigationContext } from "./index";

/**
 * @param {JSX.node} label The label.
 * @param {JSX.ElementClass} [as] The field component.
 * @param {string} [pathProp] The key of the path in the props. Defaults to `href`.
 * @param {JSX.Element} [icon] Optional icon to put before the label.
 * @param {Object} [props] Extra props.
 * @returns {JSX.Element} The submenu item element.
 */
const SubmenuItem = ( { as: Component = "a", pathProp = "href", icon: Icon = null, label, ...props } ) => {
	const { activePath, setMobileMenuOpen } = useNavigationContext();

	const handleClick = useCallback( () => setMobileMenuOpen( false ), [ setMobileMenuOpen ] );

	return (
		<li className="nfd-m-0 nfd-pb-1">
			<Component
				className={ classNames(
					"nfd-group nfd-flex nfd-items-center nfd-px-3 nfd-py-2 nfd-text-sm nfd-font-medium nfd-rounded-md nfd-no-underline focus:nfd-outline-none focus:nfd-ring-1 focus:nfd-ring-offset-1 focus:nfd-ring-offset-transparent focus:nfd-ring-primary-500",
					activePath === props[ pathProp ]
						? "nfd-bg-slate-200 nfd-text-slate-900"
						: "nfd-text-slate-600 hover:nfd-text-slate-900 hover:nfd-bg-slate-50",
				) }
				aria-current={ activePath === props[ pathProp ] ? "page" : null }
				onClick={ handleClick }
				{ ...props }
			>
				<span className="nfd-flex nfd-items-center nfd-gap-3">
					{ Icon &&
						<Icon className="nfd-flex-shrink-0 nfd--ml-1 nfd-h-6 nfd-w-6 nfd-text-slate-400 group-hover:nfd-text-slate-500" />
					}
					{ label }
				</span>
			</Component>
		</li>
	);
};

SubmenuItem.propTypes = {
	as: PropTypes.elementType,
	pathProp: PropTypes.string,
	icon: PropTypes.element,
	label: PropTypes.node.isRequired,
	isActive: PropTypes.bool,
};

export default SubmenuItem;
