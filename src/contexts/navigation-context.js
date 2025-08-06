import { createContext, useState } from 'react';
import { noop } from 'lodash';

const NavigationContext = createContext({
	activePath: '',
	setActivePath: noop,
	isMobileMenuOpen: false,
	setMobileMenuOpen: noop,
});

export const NavigationProvider = ({ activePath: initialPath = '', children }) => {
	const [activePath, setActivePath] = useState(initialPath);
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<NavigationContext.Provider
			value={{ activePath, setActivePath, isMobileMenuOpen, setMobileMenuOpen }}>
			{children}
		</NavigationContext.Provider>
	);
};

export default NavigationContext;
