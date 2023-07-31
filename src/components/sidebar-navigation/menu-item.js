import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import { useToggleState } from "../../hooks";

/**
 * @param {string} label The label.
 * @param {JSX.Element} [icon] Optional icon to put before the label.
 * @param {JSX.node} [children] Optional sub menu.
 * @param {boolean} [defaultOpen] Whether the sub menu starts opened.
 * @param {Object} [props] Extra props.
 * @returns {JSX.Element} The menu item element.
 */
const MenuItem = ( { label, icon: Icon = null, children = null, defaultOpen = true, ...props } ) => {
	const [ isOpen, toggleOpen ] = useToggleState( defaultOpen );
	const ChevronIcon = isOpen ? ChevronUpIcon : ChevronDownIcon;

	return (
		<div>
			<button
				className="nfd-group nfd-flex nfd-w-full nfd-items-center nfd-justify-between nfd-gap-3 nfd-px-3 nfd-py-2 nfd-text-sm nfd-font-medium nfd-text-slate-800 nfd-rounded-md nfd-no-underline hover:nfd-text-slate-900 hover:nfd-bg-slate-50 focus:nfd-outline-none focus:nfd-ring-2 focus:nfd-ring-primary-500"
				onClick={ toggleOpen }
				aria-expanded={ isOpen }
				{ ...props }
			>
				<span className="nfd-flex nfd-items-center nfd-gap-3">
					{ Icon &&
						<Icon className="nfd-flex-shrink-0 nfd--ml-1 nfd-h-6 nfd-w-6 nfd-text-slate-400 group-hover:nfd-text-slate-500" />
					}
					{ label }
				</span>
				<ChevronIcon className="nfd-h-4 nfd-w-4 nfd-text-slate-400 group-hover:nfd-text-slate-500 nfd-stroke-3" />
			</button>
			{ isOpen && children && <ul className="nfd-ml-8 nfd-mt-1 nfd-space-y-1">
				{ children }
			</ul> }
		</div>
	);
};

MenuItem.propTypes = {
	label: PropTypes.string.isRequired,
	icon: PropTypes.elementType,
	defaultOpen: PropTypes.bool,
	children: PropTypes.node,
};

export default MenuItem;
