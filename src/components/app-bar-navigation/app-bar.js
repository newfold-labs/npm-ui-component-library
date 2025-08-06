import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * @param {JSX.node} children The contained items.
 * @param {string} className The CSS classname.
 * @param {string} position The CSS classname.
 * @returns {JSX.Element} The app bar element.
 */
const AppBar = ( { children, className = '', position = 'static' } ) => {
	className = classnames(
		className,
		{
			[ `nfd-${ position }` ]: [ 'absolute', 'fixed', 'relative', 'static', 'sticky' ].includes( position ),
		},
		'nfd-flex nfd-items-center nfd-w-full nfd-h-[64px] nfd-bg-white nfd-top-0 nfd-left-0'
	);

	return (
		<nav className={ className }>
			<ul className={ 'nfd-flex nfd-items-center nfd-h-full nfd-w-full' }>
				{ children }
			</ul>
		</nav>
	);
};

AppBar.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	position: PropTypes.oneOf( [ 'absolute', 'fixed', 'relative', 'static', 'sticky' ] ),
};

export default AppBar;
