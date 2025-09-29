
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigationContext } from '../../hooks';

/**
 * @param {JSX.node} children The menu items.
 * @param {string} [openButtonId] The ID of the open button.
 * @param {string} [closeButtonId] The ID of the close button.
 * @param {string} [openButtonScreenReaderText] The open button screen reader text.
 * @param {string} [closeButtonScreenReaderText] The close button screen reader text.
 * @param {string} [aria-label] The aria label for the Modal.
 * @returns {JSX.Element} The mobile element.
 */
const Mobile = ( {
	children,
	openButtonId,
	closeButtonId,
	openButtonScreenReaderText = 'Open',
	closeButtonScreenReaderText = 'Close',
	'aria-label': ariaLabel,
} ) => {
	const { isMobileMenuOpen, setMobileMenuOpen } = useNavigationContext();
	const openMobileMenu = useCallback( () => setMobileMenuOpen( true ), [ setMobileMenuOpen ] );
	const closeMobileMenu = useCallback( () => setMobileMenuOpen( false ), [ setMobileMenuOpen ] );

	return <>
		<dialog className="nfd-mobile-navigation__dialog nfd-flex" open={ isMobileMenuOpen } onClose={ closeMobileMenu } aria-label={ ariaLabel }>
			<div className="nfd-absolute nfd-top-0 nfd-right-0 nfd--mr-14 nfd-p-1">
				<button
					id={ closeButtonId }
					className="nfd-flex nfd-h-12 nfd-w-12 nfd-items-center nfd-justify-center nfd-rounded-full focus:nfd-outline-none nfd-bg-slate-600 focus:nfd-ring-2 focus:nfd-ring-inset focus:nfd-ring-primary-500"
					onClick={ closeMobileMenu }
					aria-haspopup="true"
				>
					<span className="nfd-sr-only">{ closeButtonScreenReaderText }</span>
					<XIcon className="nfd-h-6 nfd-w-6 nfd-text-white"/>
				</button>
			</div>
			<div className="nfd-flex-1 nfd-h-0 nfd-overflow-y-auto">
				<nav className="nfd-h-full nfd-flex nfd-flex-col nfd-py-6 nfd-px-2">
					{ children }
				</nav>
			</div>
		</dialog>
		<nav className={ className } { ...props }>
			<Bars3Icon className={'nfd-h-4'}/>
			{ children }
		</nav>
	</>;
};

Mobile.propTypes = {
	children: PropTypes.node.isRequired,
	openButtonId: PropTypes.string,
	closeButtonId: PropTypes.string,
	openButtonScreenReaderText: PropTypes.string,
	closeButtonScreenReaderText: PropTypes.string,
	'aria-label': PropTypes.string,
};

export default Mobile;
