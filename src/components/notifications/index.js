/* eslint-disable complexity */
import { Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { useState, useCallback, useEffect, useContext, createContext } from "react";
import { XIcon } from "@heroicons/react/outline";
import { isArray, keys } from "lodash";
import classNames from "classnames";
import { ValidationIcon } from "../../elements/validation";

const NotificationsContext = createContext( { position: "bottom-left" } );

/**
 * @returns {Object} Value of the notifications context.
 */
const useNotificationsContext = () => useContext( NotificationsContext );

export const notificationClassNameMap = {
	variant: {
		info: "nfd-notification--info",
		warning: "nfd-notification--warning",
		success: "nfd-notification--success",
		error: "nfd-notification--error",
	},
	position: {
		"bottom-center": "nfd-translate-y-full",
		"bottom-left": "nfd-translate-y-full",
		"top-center": "nfd--translate-y-full",
	},
	size: {
		"default": "",
		large: "nfd-notification--large",
	},
};

/**
 *
 * @param {Object} props The props object.
 * @param {JSX.node} children The children.
 * @param {string} [variant] The message variant. Either success or error.
 * @param {string} title The message title.
 * @param {string|string[]} [description] The message description.
 * @param {Function} [onDismiss] Function to trigger on dismissal.
 * @param {number} [autoDismiss] Amount of milliseconds after which the message should auto dismiss, 0 indicating no auto dismiss.
 * @param {string} dismissScreenReaderLabel Screen reader label for dismiss button.
 * @returns {JSX.Element} The Notification component.
 */
export const Notification = ( {
	children,
	id,
	variant = "info",
	size = "default",
	title,
	description = "",
	onDismiss = null,
	autoDismiss = null,
	dismissScreenReaderLabel,
} ) => {
	const { position } = useNotificationsContext();
	const [ isVisible, setIsVisible ] = useState( false );

	const handleDismiss = useCallback( () => {
		// Disable visibility on dismiss to trigger transition.
		setIsVisible( false );
		// Then remove the actual notification after the transition is done.
		setTimeout( () => {
			onDismiss( id );
		}, 150 );
	}, [ onDismiss, id ] );

	useEffect( () => {
		// Enable visibility on mount to trigger transition.
		setIsVisible( true );
		// Maybe start auto dismiss timer.
		let timeout;
		if ( autoDismiss ) {
			timeout = setTimeout( () => {
				handleDismiss();
			}, autoDismiss );
		}
		// Cleanup auto dismiss timeout on unmount.
		return () => clearTimeout( timeout );
	}, [] );

	return (
		<Transition
			show={ isVisible }
			enter={ "nfd-transition nfd-ease-in-out nfd-duration-150" }
			enterFrom={ classNames( "nfd-opacity-0", notificationClassNameMap.position[ position ] ) }
			enterTo="nfd-translate-y-0"
			leave={ "nfd-transition nfd-ease-in-out nfd-duration-150" }
			leaveFrom="nfd-translate-y-0"
			leaveTo={ classNames( "nfd-opacity-0", notificationClassNameMap.position[ position ] ) }
			className={ classNames(
				"nfd-notification",
				notificationClassNameMap.variant[ variant ],
				notificationClassNameMap.size[ size ],
			) }
			role="alert"
		>
			<div className="nfd-flex nfd-items-start nfd-gap-3">
				<div className="nfd-flex-shrink-0">
					<ValidationIcon variant={ variant } className="nfd-notification__icon" />
				</div>
				<div className="nfd-w-0 nfd-flex-1">
					<p className="nfd-text-sm nfd-font-medium nfd-text-slate-800">
						{ title }
					</p>
					{ children || (
						description && ( isArray( description ) ? (
							<ul className="nfd-list-disc nfd-ml-4">{ description.map( ( text, index ) => <li className="nfd-pt-1" key={ `${ text }-${ index }` }>{ text }</li> ) }</ul>
						) : (
							<p>{ description }</p>
						) )
					) }
				</div>
				{ onDismiss && (
					<div className="nfd-flex-shrink-0 nfd-flex">
						<button onClick={ handleDismiss } className="nfd-bg-white nfd-rounded-md nfd-inline-flex nfd-text-slate-400 hover:nfd-text-slate-500 focus:nfd-outline-none focus:nfd-ring-2 focus:nfd-ring-offset-2 focus:nfd-ring-primary-500">
							<span className="nfd-sr-only">{ dismissScreenReaderLabel }</span>
							<XIcon className="nfd-h-5 nfd-w-5" />
						</button>
					</div>
				) }
			</div>
		</Transition>
	);
};

Notification.propTypes = {
	children: PropTypes.node,
	id: PropTypes.string.isRequired,
	variant: PropTypes.oneOf( keys( notificationClassNameMap.variant ) ),
	size: PropTypes.oneOf( keys( notificationClassNameMap.size ) ),
	title: PropTypes.string.isRequired,
	description: PropTypes.oneOfType( [ PropTypes.node, PropTypes.arrayOf( PropTypes.node ) ] ),
	onDismiss: PropTypes.func,
	autoDismiss: PropTypes.number,
	dismissScreenReaderLabel: PropTypes.string.isRequired,
};

const notificationsClassNameMap = {
	position: {
		"bottom-center": "nfd-notifications--bottom-center",
		"bottom-left": "nfd-notifications--bottom-left",
		"top-center": "nfd-notifications--top-center",

	},
};

/**
 * The Notifications component shows notifications on a specified position on the screen.
 * @param {JSX.Element} children The children.
 * @param {string} position Position on screen.
 * @returns {JSX.Element} The Notifications element.
 */
const Notifications = ( {
	children,
	position = "bottom-left",
} ) => (
	<NotificationsContext.Provider value={ { position } }>
		<aside
			className={ classNames(
				"nfd-notifications",
				notificationsClassNameMap.position[ position ],
			) }
		>
			{ children }
		</aside>
	</NotificationsContext.Provider>
);

Notifications.propTypes = {
	children: PropTypes.node,
	position: PropTypes.oneOf( keys( notificationsClassNameMap.position ) ),
};

Notifications.Notification = Notification;
Notifications.Notification.displayName = "Notifications.Notification";

export default Notifications;
