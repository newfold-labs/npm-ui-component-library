import { NavigationProvider } from '../../contexts';
import PropTypes from 'prop-types';
import MenuItem from './menu-item';
import Mobile from './mobile';
import Sidebar from './sidebar';
import SubmenuItem from './submenu-item';

/**
 * @param {string} activePath The path of the active menu item.
 * @param {JSX.node} children The menu(s).
 * @returns {JSX.Element} The navigation element.
 */
const SidebarNavigation = ( { activePath = '', children } ) => {
	return (
		<NavigationProvider activePath={ activePath }>
			{ children }
		</NavigationProvider>
	);
};

SidebarNavigation.propTypes = {
	activePath: PropTypes.string,
	children: PropTypes.node.isRequired,
};

SidebarNavigation.Sidebar = Sidebar;
SidebarNavigation.Sidebar.displayName = 'SidebarNavigation.Sidebar';
SidebarNavigation.Mobile = Mobile;
SidebarNavigation.Mobile.displayName = 'SidebarNavigation.Mobile';
SidebarNavigation.MenuItem = MenuItem;
SidebarNavigation.MenuItem.displayName = 'SidebarNavigation.MenuItem';
SidebarNavigation.SubmenuItem = SubmenuItem;
SidebarNavigation.SubmenuItem.displayName = 'SidebarNavigation.SubmenuItem';

export default SidebarNavigation;
