import { useCallback, useState } from "@wordpress/element";
import classNames from "classnames";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";

/**
 * @param {Function} onDrop The callback for when a file is dropped.
 * @param {string} children The children
 * @param {string} className Classname
 * @param {boolean} [disabled=false] Disabled state.
 * @returns {JSX.Element} The DropZone component.
 */
const DropZone = ( {
	onDrop,
	children,
	className,
	disabled,
	...props
} ) => {
	const [ isDraggingOver, setIsDraggingOver ] = useState( false );

	const handleDragEnter = useCallback( ( event ) => {
		event.preventDefault();
		event.stopPropagation();

		if ( disabled || isEmpty( event.dataTransfer.items ) ) {
			return;
		}

		setIsDraggingOver( true );
	}, [ disabled ] );

	const handleDragLeave = useCallback( ( event ) => {
		event.preventDefault();
		event.stopPropagation();
		setIsDraggingOver( false );
	}, [] );

	const handleDragOver = useCallback( ( event ) => {
		event.preventDefault();
		event.stopPropagation();
	}, [] );

	const handleDrop = useCallback( ( event ) => {
		event.preventDefault();
		event.stopPropagation();

		setIsDraggingOver( false );

		if ( disabled ) {
			return;
		}

		// onDrop callback.
		if ( onDrop ) {
			onDrop( event );
		}
	  }, [ onDrop ] );

	return (
		<div
			onDragEnter={ handleDragEnter }
			onDragLeave={ handleDragLeave }
			onDragOver={ handleDragOver }
			onDrop={ handleDrop }
			aria-disabled={ disabled }
			tabIndex={ disabled ? -1 : 0 }
			className={ classNames(
				"nfd-drop-zone",
				{
					"nfd-drop-zone-is-dragging-over": isDraggingOver,
					"nfd-drop-zone-is-disabled": disabled,
				},
				className,
			) }
			{ ...props }
		>
			<div className="nfd-drop-zone__content">
				{ children }
			</div>
		</div>
	);
};

DropZone.propTypes = {
	onDrop: PropTypes.func.isRequired,
	children: PropTypes.node,
	className: PropTypes.string,
	disabled: PropTypes.bool,
};

export default DropZone;
