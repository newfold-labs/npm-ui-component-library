import { Children, createContext, forwardRef, Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { useSvgAria } from "../../hooks";
import { classNameMap as titleClassNameMap } from "../../elements/title";
import PropTypes from "prop-types";

/**
 * DrawerContext provides the state and behavior for managing a drawer component.
 *
 * @typedef {Object} DrawerContext
 * @property {boolean} isOpen - Indicates whether the drawer is currently open.
 * @property {Function} onClose - Function to be called when closing the drawer.
 * @property {string} position - The position of the drawer (e.g., "right").
 */
const DrawerContext = createContext( {
	isOpen: false,
	onClose: () => {},
	position: "right",
} );

const classNameMap = {
	variants: {
		classic: "nfd-drawer--classic",
		offset: "nfd-drawer--offset",
	},
	positions: {
		left: "nfd-drawer--left",
		right: "nfd-drawer--right",
	},
};

/**
 * Dialog overlay.
 * @returns {JSX.Element} The overlay.
 */
const Overlay = () => (
	<Transition.Child
		as={ Fragment }
		enter="nfd-ease-out nfd-duration-300"
		enterFrom="nfd-opacity-0"
		enterTo="nfd-opacity-100"
		leave="nfd-ease-in nfd-duration-200"
		leaveFrom="nfd-opacity-100"
		leaveTo="nfd-opacity-0"
	>
		<div className="nfd-drawer__overlay" aria-hidden="true" />
	</Transition.Child>
);

/**
 * Drawer header.
 * @param {string} title Title of the drawer.
 * @param {string} [titleAs=h2] Title element.
 * @param {string} [titleSize=4] Title size.
 * @param {boolean} [hasCloseButton=true] Whether to show the close button.
 * @param {string} [closeButtonScreenReaderText="Close"] Screen reader text for the close button.
 * @param {string} [className] Additional class names.
 * @returns {JSX.Element} The drawer header.
 */
const Header = forwardRef( ( {
	title,
	titleAs = "h2",
	titleSize = "4",
	hasCloseButton = true,
	closeButtonScreenReaderText = "Close",
	className,
	...props
}, ref ) => {
	const { onClose } = useContext( DrawerContext );
	const svgAriaProps = useSvgAria();

	if ( ! title && ! hasCloseButton ) {
		return null;
	}

	return (
		<div
			className={ classNames( "nfd-drawer__header", className ) }
			ref={ ref }
			{ ...props }
		>
			{ title && (
				<Dialog.Title
					as={ titleAs }
					className={ classNames(
						"nfd-drawer__title",
						titleSize && titleClassNameMap.size[ titleSize ],
					) }
				>
					{ title }
				</Dialog.Title>
			) }

			{ hasCloseButton && (
				<div className="nfd-drawer__close">
					<button
						type="button"
						className="nfd-drawer__close-button"
						onClick={ onClose }
					>
						<span className="nfd-sr-only">{ closeButtonScreenReaderText }</span>
						<XIcon className="nfd-h-6 nfd-w-6" { ...svgAriaProps } />
					</button>
				</div>
			) }
		</div>
	);
} );

Header.propTypes = {
	title: PropTypes.string,
	titleAs: PropTypes.string,
	titleSize: PropTypes.oneOf( Object.keys( titleClassNameMap.size ) ),
	hasCloseButton: PropTypes.bool,
	closeButtonScreenReaderText: PropTypes.string,
	className: PropTypes.string,
};

/**
 * Drawer panel.
 * @param {JSX.Node} children The component props.
 * @returns {JSX.Element} The panel.
 */
const Panel = forwardRef( ( {
	className,
	children,
	...props
}, ref ) => {
	const { position } = useContext( DrawerContext );
	const enterFromClass = position === "left" ? "nfd--translate-x-full" : "nfd-translate-x-full";
	const leaveToClass = position === "left" ? "nfd--translate-x-full" : "nfd-translate-x-full";

	return (
		<Transition.Child
			as={ Fragment }
			enter="nfd-transform nfd-ease-out nfd-duration-300"
			enterFrom={ enterFromClass }
			enterTo="nfd-translate-x-0"
			leave="nfd-transform nfd-ease-in nfd-duration-200"
			leaveFrom="nfd-translate-x-0"
			leaveTo={ leaveToClass }
		>
			<Dialog.Panel
				as="div"
				className={ classNames( "nfd-drawer__panel", className ) }
				ref={ ref }
				{ ...props }
			>
				{ children }
			</Dialog.Panel>
		</Transition.Child>
	);
} );

Panel.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

/**
 * @param {boolean} isOpen Whether the drawer is open.
 * @param {Function} onClose Function to be called when closing the drawer.
 * @param {boolean} [overlay=true] Whether to show the overlay.
 * @param {string} [position="right"] Drawer position.
 * @param {string} [variant="classic"] Drawer variant.
 * @param {string} [className] Additional class names.
 * @param {JSX.Node} children The component props.
 * @returns {JSX.Element} The drawer.
 */
const Drawer = forwardRef( ( {
	isOpen,
	onClose,
	overlay = true,
	position = "right",
	variant = "classic",
	className,
	children,
	...props
}, ref ) => {
	const child = Children.only( children );
	const childIsPanel = child?.type === Panel;

	// To prevent unexpected behavior, Drawer component should only accept Drawer.Panel as a child.
	if ( ! childIsPanel ) {
		throw new Error( "Drawer component only accepts Drawer.Panel as a child" );
	}

	return (
		<DrawerContext.Provider value={ { isOpen, onClose, position } }>
			<Transition
				as={ Fragment }
				show={ isOpen }
			>
				<Dialog
					as="div"
					className="nfd-root"
					onClose={ onClose }
					ref={ ref }
					{ ...props }
				>
					{ overlay && <Overlay /> }

					<div
						className={ classNames(
							"nfd-drawer",
							classNameMap.positions[ position ],
							classNameMap.variants[ variant ],
							className,
						) }
					>
						<div className="nfd-drawer__container">
							<div className="nfd-drawer__content">
								{ children }
							</div>
						</div>
					</div>
				</Dialog>
			</Transition>
		</DrawerContext.Provider>
	);
} );

Drawer.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	overlay: PropTypes.bool,
	position: PropTypes.oneOf( Object.keys( classNameMap.positions ) ),
	variant: PropTypes.oneOf( Object.keys( classNameMap.variants ) ),
	className: PropTypes.string,
	children: PropTypes.node,
};

Drawer.Header = Header;
Drawer.Panel = Panel;

export default Drawer;
