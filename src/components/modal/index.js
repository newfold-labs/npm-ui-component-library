import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { forwardRef, Fragment } from "@wordpress/element";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useSvgAria } from "../../hooks";
import { ModalContext, useModalContext } from "./hooks";
import { classNameMap as titleClassNameMap } from "../../elements/title";

/**
 * @param {JSX.node} children Title text.
 * @param {string} [className] Additional class names.
 * @param {string|JSX.Element} [as="h1"] Base component.
 * @param {string} [size] Size of title.
 * @param {Object} [props] Additional props.
 * @returns {JSX.Element} The title.
 */
const Title = forwardRef( ( { children, size, className, as, ...props }, ref ) => {
	return (
		<Dialog.Title
			as={ as }
			ref={ ref }
			className={ classNames(
				"nfd-title",
				size ? titleClassNameMap.size[ size ] : "",
				className ) }
			{ ...props }
		>
			{ children }
		</Dialog.Title>
	);
} );

Title.defaultProps = {
	className: "",
	as: "h1",
};

Title.propTypes = {
	size: PropTypes.oneOf( Object.keys( titleClassNameMap.size ) ),
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	as: PropTypes.elementType,
};

/**
 * @param {JSX.node} children Contents of the modal.
 * @param {string} [className] Additional class names.
 * @param {boolean} [hasCloseButton] Whether the modal has a close button.
 * @param {string} [closeButtonScreenReaderText] The screen reader text of the close button. Used when hasCloseButton is true.
 * @param {Object} [props] Additional props.
 * @returns {JSX.Element} The panel.
 */
const Panel = forwardRef( ( { children, className = "", hasCloseButton = true, closeButtonScreenReaderText = "Close", ...props }, ref ) => {
	const { onClose } = useModalContext();
	const svgAriaProps = useSvgAria();

	return (
		<Dialog.Panel
			ref={ ref }
			className={ classNames( "nfd-modal__panel", className ) }
			{ ...props }
		>
			{ hasCloseButton && <div className="nfd-modal__close">
				<button
					type="button"
					onClick={ onClose }
					className="nfd-modal__close-button"
				>
					<span className="nfd-sr-only">{ closeButtonScreenReaderText }</span>
					<XIcon className="nfd-h-6 nfd-w-6" { ...svgAriaProps } />
				</button>
			</div> }
			{ children }
		</Dialog.Panel>
	);
} );

Panel.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	hasCloseButton: PropTypes.bool,
	closeButtonScreenReaderText: PropTypes.string,
};

export const classNameMap = {
	position: {
		center: "nfd-modal--center",
		"top-center": "nfd-modal--top-center",
	},
};

/**
 * @param {boolean} isOpen Whether the modal is open.
 * @param {function} onClose Function that is called when the user wants to close the modal.
 * @param {JSX.node} children Contents of the modal.
 * @param {string} [className] Additional class names.
 * @param {string} [position] Modal screen position. See `classNameMap.position` for the options.
 * @param {Object} [props] Additional Dialog props.
 * @returns {JSX.Element} The modal.
 */
const Modal = forwardRef( ( { isOpen, onClose, children, className = "", position = "center", ...props }, ref ) => (
	<ModalContext.Provider value={ { isOpen, onClose } }>
		<Transition.Root show={ isOpen } as={ Fragment }>
			{ /* Using the `nfd-root` class here to get our styling within the portal. */ }
			<Dialog
				as="div"
				ref={ ref }
				className="nfd-root"
				open={ isOpen }
				onClose={ onClose }
				{ ...props }
			>
				<div className={ classNames( "nfd-modal", classNameMap.position[ position ], className ) }>
					<Transition.Child
						as={ Fragment }
						enter="nfd-ease-out nfd-duration-300"
						enterFrom="nfd-opacity-0"
						enterTo="nfd-opacity-100"
						leave="nfd-ease-in nfd-duration-200"
						leaveFrom="nfd-opacity-100"
						leaveTo="nfd-opacity-0"
					>
						<div className="nfd-modal__overlay" />
					</Transition.Child>
					<div className="nfd-modal__layout">
						<Transition.Child
							as={ Fragment }
							enter="nfd-ease-out nfd-duration-300"
							enterFrom="nfd-opacity-0 nfd-translate-y-4 sm:nfd-translate-y-0 sm:nfd-scale-95"
							enterTo="nfd-opacity-100 nfd-translate-y-0 sm:nfd-scale-100"
							leave="nfd-ease-in nfd-duration-200"
							leaveFrom="nfd-opacity-100 nfd-translate-y-0 sm:nfd-scale-100"
							leaveTo="nfd-opacity-0 nfd-translate-y-4 sm:nfd-translate-y-0 sm:nfd-scale-95"
						>
							{ children }
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	</ModalContext.Provider>
) );

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	position: PropTypes.oneOf( Object.keys( classNameMap.position ) ),
};

Modal.displayName = "Modal";
Modal.Panel = Panel;
Modal.Panel.displayName = "Modal.Panel";
Modal.Title = Title;
Modal.Title.displayName = "Modal.Title";
Modal.Description = Dialog.Description;
Modal.Description.displayName = "Modal.Description";

export default Modal;
