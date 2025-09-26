import { useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useNavigationContext } from '../../hooks';
import { useAppBarContext } from './app-bar';

/**
 * @param {JSX.node} label The label.
 * @param {JSX.ElementClass} [as] The field component.
 * @param {string} [pathProp] The key of the path in the props. Defaults to `href`.
 * @param {JSX.Element} [icon] Optional icon to put before the label.
 * @param {Object} [props] Extra props.
 * @returns {JSX.Element} The submenu item element.
 */
const Item = ( {
	as: Component = 'a',
	pathProp = 'href',
	icon: Icon = null,
	label,
	children,
	className,
	...props
} ) => {
	const { mode } = useAppBarContext();
	const { activePath, setMobileMenuOpen } = useNavigationContext();
	const isMobile = 'collapsed' === mode;

	const handleClick = useCallback( () => setMobileMenuOpen( false ), [ setMobileMenuOpen ] );
	const Content = () => (
		<>
			{ Icon &&
				<Icon className="nfd-flex-shrink-0 nfd--ml-1 nfd-h-6 nfd-w-6 nfd-text-slate-400 group-hover:nfd-text-slate-500"/>
			}
			{ children ?? label }
		</>
	);

	return (
		<li
			role="presentation"
			className={ classNames(
				'nfd-appbar-item nfd-group nfd-flex nfd-items-center nfd-justify-center nfd-h-full nfd-m-0 nfd-p-0',
				{
					'nfd-appbar-item--active': activePath === props[ pathProp ]
				}
			) 
		}>
			<Component
				role="menuitem"
				className={ classNames(
					className,
					'nfd-flex nfd-items-center nfd-h-full nfd-px-3 nfd-py-2 nfd-text-sm nfd-no-underline focus:nfd-outline-none focus:nfd-ring-transparent',
					activePath === props[ pathProp ]
						? 'nfd-bg-slate-200 nfd-text-slate-900'
						: 'nfd-text-slate-600 hover:nfd-text-slate-900 hover:nfd-bg-slate-50',
					{
						'nfd-font-bold !nfd-pl-0 nfd-bg-transparent': isMobile,
						'nfd-font-medium': ! isMobile
					},
				) }
				aria-current={ activePath === props[ pathProp ] ? 'page' : null }
				onClick={ handleClick }
				{ ...props }
			>
				{
					Icon
						?
						<span className="nfd-flex nfd-items-center nfd-gap-3">
						<Content/>
					</span>
						:
						<Content/>
				}
			</Component>
		</li>
	);
};

Item.propTypes = {
	as: PropTypes.elementType,
	pathProp: PropTypes.string,
	icon: PropTypes.element,
	label: PropTypes.node,
	children: PropTypes.node,
};

export default Item;
