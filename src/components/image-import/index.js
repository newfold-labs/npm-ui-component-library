import { forwardRef, useCallback, useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import DropZone from "../../elements/drop-zone";
import ImageInput from "../../elements/image-input";
import Label from "../../elements/label";

/**
 * @param {string} id Id.
 * @param {string} name Name.
 * @param {string} imageInputVariant Image input variant.
 * @param {string} previewImage Preview image.
 * @param {string} previewImageAlt Preview image alt.
 * @param {string} buttonText Button text.
 * @param {string} buttonVariant Button variant.
 * @param {string} accept Accept.
 * @param {Function} onClick On click callback.
 * @param {Function} onChange On change callback.
 * @param {Function} onReset On reset callback.
 * @param {Function} onDrop On drop callback.
 * @param {Function} onError On error callback.
 * @param {string} dropLabel Drop label.
 * @param {boolean} disabled Disabled state.
 * @param {boolean} isLoading Is loading state.
 * @param {string} resetPreviewActionAriaLabel Reset preview action aria label.
 * @param {string} className Classname.
 * @param {string} children Children.
 * @returns {JSX.Element} The ImageImport component.
 * */
const ImageImport = forwardRef( ( {
	id,
	name,
	imageInputVariant,
	previewImage,
	previewImageAlt,
	buttonText,
	buttonVariant,
	accept,
	onClick,
	onChange,
	onReset,
	onDrop,
	onError,
	dropLabel = "Select an image or drag and drop",
	disabled,
	isLoading,
	resetPreviewActionAriaLabel,
	className,
	children,
	...props
}, ref ) => {
	const inputRef = useRef();

	const handleOnDrop = useCallback( ( event ) => {
		if ( ! event.dataTransfer.files ) {
			return;
		}

		// onDrop callback
		if ( onDrop ) {
			// If onDrop callback is defined, defer to consumer
			onDrop( event );
			return;
		}

		// Default behavior if onDrop callback is not defined
		const file = event.dataTransfer.files[ 0 ];
		if ( file ) {
			try {
				// Verify that file is an image
				if ( ! file.type.startsWith( "image/" ) ) {
					throw new Error( "Unsupported file type." );
				}

				const input = inputRef.current;
				if ( input ) {
					// Move the file to the input
					const dataTransfer = new DataTransfer();
					dataTransfer.items.add( file );
					input.files = dataTransfer.files;

					// Trigger the input onChange event
					const inputOnChangeEvent = new Event( "change", { bubbles: true } );
					input.dispatchEvent( inputOnChangeEvent );
				}
			} catch ( error ) {
				// onError callback
				if ( onError ) {
					onError( error );
				}
			}
		}
	}, [ onError, onDrop ] );

	return (
		<div
			className={ classNames(
				"nfd-image-import nfd-@container/nfd-image-import",
				disabled && "nfd-is-disabled",
				className,
			) }
			ref={ ref }
			{ ...props }
		>
			<DropZone
				onDrop={ handleOnDrop }
				disabled={ disabled }
				aria-label={ dropLabel }
				tabIndex="-1"
			>
				<div className="nfd-image-import__drop-zone-content">
					<ImageInput
						id={ id }
						name={ name }
						variant={ imageInputVariant }
						previewImage={ previewImage }
						previewImageAlt={ previewImageAlt }
						accept={ accept }
						buttonText={ buttonText }
						buttonVariant={ buttonVariant }
						onClick={ onClick }
						onChange={ onChange }
						onReset={ onReset }
						disabled={ disabled }
						isLoading={ isLoading }
						resetPreviewActionAriaLabel={ resetPreviewActionAriaLabel }
						ref={ inputRef }
					/>
					<Label
						htmlFor={ id }
						className="nfd-image-import__drop-label"
					>
						{ dropLabel }
					</Label>
				</div>
			</DropZone>

			{ children && (
				<div className="nfd-image-import__content">
					{ children }
				</div>
			) }
		</div>
	);
} );

ImageImport.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	imageInputVariant: PropTypes.string,
	previewImageVariant: PropTypes.string,
	previewImage: PropTypes.string,
	previewImageAlt: PropTypes.string,
	buttonText: PropTypes.string,
	buttonVariant: PropTypes.string,
	accept: PropTypes.string,
	onClick: PropTypes.func,
	onChange: PropTypes.func,
	onReset: PropTypes.func,
	onDrop: PropTypes.func,
	onError: PropTypes.func,
	dropLabel: PropTypes.string,
	disabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	resetPreviewActionAriaLabel: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
};

ImageImport.defaultProps = {
	imageInputVariant: null,
	previewImageVariant: "avatar",
	previewImage: null,
	previewImageAlt: "Selected image",
	buttonText: "Select Image",
	buttonVariant: "secondary",
	accept: "image/*",
	onClick: null,
	onChange: null,
	onReset: null,
	onDrop: null,
	onError: null,
	dropLabel: "Select an image or drag and drop",
	disabled: false,
	isLoading: false,
	resetPreviewActionAriaLabel: "Remove selected image",
	className: "",
	children: null,
};

ImageImport.displayName = "ImageImport";

export default ImageImport;
