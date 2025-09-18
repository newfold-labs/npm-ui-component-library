import classnames from 'classnames';

/**
 * @param {JSX.node} children The contained items.
 * @param {string} className The CSS classname.
 * @param {string} position The CSS classname.
 * @returns {JSX.Element} The app bar element.
 */
const AppBarNav = ({ className='', children }) => {
	className = classnames(
		'nfd-appbar-actions',
		className,
		'nfd-flex nfd-items-center nfd-gap-2 nfd-h-full nfd-w-full'
	);

	return <div className={ className }>
		{ children }
	</div>;
};

export default AppBarNav;