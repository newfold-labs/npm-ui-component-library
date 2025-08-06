import { useContext } from 'react';
import { NavigationContext } from '../contexts';

/**
 * @returns {Object} The navigation context.
 */
const useNavigationContext = () => useContext( NavigationContext );

export default useNavigationContext;