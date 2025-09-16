import { useEffect, memo } from 'react';
import classnames from 'classnames';
import { useAppBarContext } from './app-bar';

/**
 * @param {JSX.node} children The contained items.
 * @param {string} className The CSS classname.
 * @param {string} position The CSS classname.
 * @returns {JSX.Element} The app bar element.
 */
const AppBarNav = ( { className = '', children } ) => {
	const { mode, open } = useAppBarContext();
	className = classnames(
		'nfd-appbar-nav',
		className,
		'nfd-flex nfd-h-full nfd-w-full nfd-bg-white',
		{
			'nfd-items-center': 'inline' === mode,
			'nfd-flex-col nfd-items-start nfd-duration-300 nfd--translate-y-full nfd-px-4 nfd-py-2 nfd-gap-2 nfd-ease-in-out ': 'collapsed' === mode,
			'nfd-translate-y-0': true === open,
			'nfd-pointer-events-none': 'collapsed' === mode && false === open,
		}
	);

	return <>
		{
			'collapsed' === mode ?
				<>
					<div className={ classnames(
						'nfd-appbar-nav-overlay nfd-absolute nfd-top-full nfd-w-screen nfd-h-screen nfd-bg-black nfd-duration-300',
						{
							'nfd-pointer-events-none nfd-opacity-0': false === open,
							'nfd-opacity-30': true === open,
						}
					) }/>
					<div className={ 'nfd-appbar-nav-dialog nfd-absolute nfd-top-full nfd-w-full nfd-overflow-hidden' }>
						<ul
							role="menubar"
							className={ className }
						>
							{ children }
						</ul>
					</div>
				</>
				:
				<ul
					role="menubar"
					className={ className }
				>
					{ children }
				</ul>
		}
	</>;
};

export default AppBarNav;