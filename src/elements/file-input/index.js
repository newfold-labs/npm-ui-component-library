import { useState, useCallback, forwardRef } from "@wordpress/element";
import { isEmpty, noop } from "lodash";
import PropTypes from "prop-types";
import classNames from "classnames";
import { DocumentAddIcon } from "@heroicons/react/outline";

import Link from "../link";

/**
 * @param {string} id Id.
 * @param {string} name Name.
 * @param {string} value Value.
 * @param {string} selectLabel Label for default select button.
 * @param {string} dropLabel Label for drop area.
 * @param {string} screenReaderLabel Screen reader label.
 * @param {string} selectDescription Description for select area.
 * @param {boolean} disabled Disabled state.
 * @param {JSX.Element} iconAs Icon to show in select area.
 * @param {Function} onChange The callback for when a file is uploaded.
 * @param {Function} onDrop The callback for when a file is dropped.
 * @param {string} className Classname.
 * @returns {JSX.Element} The FileInput component.
 */
const FileInput = forwardRef( ( {
	id,
	name,
	value,
	selectLabel,
	dropLabel,
	screenReaderLabel,
	selectDescription,
	disabled,
	iconAs: IconComponent,
	onChange,
	onDrop,
	className,
	...props
}, ref ) => {
	const [ isDragOver, setIsDragOver ] = useState( false );

	const handleDragEnter = useCallback( ( event ) => {
		event.preventDefault();
		if ( ! isEmpty( event.dataTransfer.items ) ) {
			setIsDragOver( true );
		}
	}, [ setIsDragOver ] );

	const handleDragLeave = useCallback( ( event ) => {
		event.preventDefault();
		setIsDragOver( false );
	}, [ setIsDragOver ] );

	const handleDragOver = useCallback( ( event ) => {
		event.preventDefault();
	}, [] );

	const handleDrop = useCallback( ( event ) => {
		event.preventDefault();
		setIsDragOver( false );
		onDrop( event );
	}, [ setIsDragOver, onChange ] );

	return (
		<div
			onDragEnter={ handleDragEnter }
			onDragLeave={ handleDragLeave }
			onDragOver={ handleDragOver }
			onDrop={ handleDrop }
			className={ classNames( "nfd-file-input", {
				"nfd-is-drag-over": isDragOver,
				"nfd-is-disabled": disabled,
				className,
			} ) }
		>
			<div className="nfd-file-input__content">
				<IconComponent className="nfd-file-input__icon" />
				<div className="nfd-file-input__labels">
					<input
						ref={ ref }
						type="file"
						id={ id }
						name={ name }
						value={ value }
						onChange={ onChange }
						className="nfd-file-input__input"
						aria-labelledby={ screenReaderLabel }
						disabled={ disabled }
						{ ...props }
					/>
					<Link as="label" htmlFor={ id } className="nfd-file-input__select-label">{ selectLabel }</Link>
					<span>&nbsp;</span>
					{ dropLabel }
				</div>
				{ selectDescription && <span>{ selectDescription }</span> }
			</div>
		</div>
	);
} );

const propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	selectLabel: PropTypes.string.isRequired,
	dropLabel: PropTypes.string.isRequired,
	screenReaderLabel: PropTypes.string.isRequired,
	selectDescription: PropTypes.string,
	disabled: PropTypes.bool,
	iconAs: PropTypes.elementType,
	onChange: PropTypes.func.isRequired,
	onDrop: PropTypes.func,
	className: PropTypes.string,
};

FileInput.defaultProps = {
	selectDescription: "",
	disabled: false,
	iconAs: DocumentAddIcon,
	className: "",
	onDrop: noop,
};

FileInput.propTypes = propTypes;

// eslint-disable-next-line require-jsdoc
export const StoryComponent = props => <FileInput { ...props } />;
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = FileInput.defaultProps;
StoryComponent.displayName = "FileInput";

export default FileInput;
