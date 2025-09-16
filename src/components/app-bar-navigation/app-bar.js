import { MenuIcon } from '@heroicons/react/outline';
import { createContext, useContext, useMemo, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Logo from './logo';
import Nav from './nav';
import Item from './item';
import Actions from './actions';

const BREAK_POINTS = { sm: 480, md: 768, lg: 1024, xl: 1280 };

const AppBarContext = createContext( {} );

function useCollapseDetection( ref, collapseAt ) {
	const [ collapsed, setCollapsed ] = useState( false );

	useEffect( () => {
		if ( collapseAt === 'container' && ref.current && 'ResizeObserver' in window ) {
			const ro = new ResizeObserver( ( [ entry ] ) => {
				const w = entry.contentRect.width;
				setCollapsed( w < 768 );
			} );
			ro.observe( ref.current );
			return () => ro.disconnect();
		}

		const px = typeof collapseAt === 'number' ? collapseAt : (BREAK_POINTS[ collapseAt ] ?? BREAK_POINTS.md);
		const mq = window.matchMedia( `(max-width:${ px - 0.02 }px)` );

		const onChange = () => {
			setCollapsed( mq.matches )
		};
		onChange();
		mq.addEventListener?.( 'change', onChange );
		return () => mq.removeEventListener?.( 'change', onChange );
	}, [ collapseAt, ref ] );
	return collapsed;
}

export const useAppBarContext = () => {
	const context = useContext( AppBarContext );

	return context || null;
}

/**
 * @param {JSX.node} children The contained items.
 * @param {string} className The CSS classname.
 * @param {string} position The CSS classname.
 * @param {string|number} collapseAt The mobile version break-point.
 * @param {string} forceMode The mode 'inline' or 'collapsed' in which can be forced the display.
 * @returns {JSX.Element} The app bar element.
 */
const AppBar = ( { children, className = '', position = 'static', collapseAt = 'md', forceMode, ...props } ) => {
	className = classnames(
		className,
		{
			[ `nfd-${ position }` ]: [ 'absolute', 'fixed', 'relative', 'static', 'sticky' ].includes( position ),
		},
		'nfd-flex nfd-items-center nfd-w-full nfd-h-[64px] nfd-bg-white nfd-top-0 nfd-left-0 nfd-z-[9999]'
	);

	const rootRef = useRef( null );
	const [ open, setOpen ] = useState( false );
	const isNarrow = useCollapseDetection( rootRef, collapseAt );
	const mode = forceMode ?? (isNarrow ? 'collapsed' : 'inline');

	// Close on ESC key when open in mobile mode
	useEffect( () => {
		const onKey = ( e ) => e.key === 'Escape' && setOpen( false );
		window.addEventListener( 'keydown', onKey );
		return () => window.removeEventListener( 'keydown', onKey );
	}, [] );

	// Prevent scrolling of the document when drawer is open in mobile mode
	useEffect( () => {
		if ( mode === 'collapsed' && open ) {
			const prev = document.documentElement.style.overflow;
			document.documentElement.style.overflow = 'hidden';
			return () => {
				document.documentElement.style.overflow = prev;
			};
		}

		if ( mode === 'inline' && open ) {
			setOpen( false );
		}
	}, [ open, mode ] );


	const contextValue = useMemo( () => ({
		mode, open, setOpen
	}), [ mode, open ] );

	return (
		<nav ref={ rootRef } className={ className } { ...props }>
			<AppBarContext.Provider value={ contextValue }>
				{ mode === 'collapsed' &&
					<MenuIcon
						className={ 'nfd-w-[32px] nfd-px-4 nfd-box-content' }
						aria-label="Open menu"
						aria-expanded={ open }
						onClick={ () => setOpen( v => ! v ) }
					/>
				}
				{ children }
			</AppBarContext.Provider>
		</nav>
	);
};

AppBar.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	position: PropTypes.oneOf( [ 'absolute', 'fixed', 'relative', 'static', 'sticky' ] ),
};

AppBar.useContext = useAppBarContext;
AppBar.useContext.displayName = 'AppBarNavigation.AppBar.useContext';
AppBar.Logo = Logo;
AppBar.Logo.displayName = 'AppBarNavigation.AppBar.Logo';
AppBar.Nav = Nav;
AppBar.Nav.displayName = 'AppBarNavigation.AppBar.Nav';
AppBar.Item = Item;
AppBar.Item.displayName = 'AppBarNavigation.AppBar.Item';
AppBar.Actions = Actions;
AppBar.Actions.displayName = 'AppBarNavigation.AppBar.Actions';

export default AppBar;
