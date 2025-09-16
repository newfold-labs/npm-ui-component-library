import { NavigationProvider } from '../../contexts';
import PropTypes from "prop-types";
import Mobile from "./mobile";
import AppBar from "./app-bar";
import Item from "./item";
import Logo from "./logo";
import Nav from "./nav";

/**
 * @param {string} activePath The path of the active menu item.
 * @param {JSX.node} children The menu(s).
 * @returns {JSX.Element} The navigation element.
 */
const AppBarNavigation = ( { activePath = "", children } ) => {
	return (
		<NavigationProvider activePath={activePath}>
			{ children }
		</NavigationProvider>
	);
};

AppBarNavigation.propTypes = {
	activePath: PropTypes.string,
	children: PropTypes.node.isRequired,
};

AppBarNavigation.AppBar = AppBar;
AppBarNavigation.AppBar.displayName = "AppBarNavigation.AppBar";

export default AppBarNavigation;
