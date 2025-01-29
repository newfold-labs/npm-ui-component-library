import { PhotographIcon, UserCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import { forwardRef, useCallback, useState } from "@wordpress/element";
import { keys } from "lodash";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../button";
import Spinner from "../spinner";

export const variants = {
	classes: {
		rounded: "nfd-rounded-lg",
		avatar: "nfd-rounded-full",
		square: "nfd-rounded-none",
	},
	components: {
		Rounded: PhotographIcon,
		Avatar: UserCircleIcon,
		Square: PhotographIcon,
	},
};

/**
 * @param {string} id Id.
 * @param {string} name Name.
 * @param {string} variant Variant.
 * @param {string} previewImage Preview image.
 * @param {string} previewImageAlt Preview image alt.
 * @param {string} buttonText Button text.
 * @param {string} buttonVariant Button variant.
 * @param {Function} onClick On click callback.
 * @param {Function} onChange On change callback.
 * @param {string} className Classname.
 * @param {boolean} disabled Disabled state.
 * @param {string} accept Accept attribute.
 * @param {boolean} isLoading Is loading state.
 * @param {string} resetPreviewActionAriaLabel Reset preview action aria label.
 * @returns {JSX.Element} The ImageInput component.
 */
const ImageInput = forwardRef( ( {
	id,
	name,
	variant,
	previewImage,
	previewImageAlt,
	buttonText,
	buttonVariant,
	onClick,
	onChange,
	onReset,
	className,
	disabled,
	accept,
	isLoading = false,
	resetPreviewActionAriaLabel,
	...props
}, ref ) => {
	const [ preview, setPreview ] = useState( previewImage || null );

	const handleFileChange = useCallback( ( event ) => {
		const file = event.target.files?.[ 0 ];
		if ( ! file ) {
			return;
		}

		// Create a preview URL (blob)
		const imageUrl = URL.createObjectURL( file );
		setPreview( imageUrl );

		// onChange callback
		if ( onChange ) {
			onChange( { event, file } );
		}

		// Clean up
		return () => URL.revokeObjectURL( imageUrl );
	}, [ onChange ] );

	const handleReset = useCallback( ( event ) => {
		if ( disabled ) {
			return;
		}

		// Keyboard events: Enter or Space
		if ( event.type === "keydown" && ! [ "Enter", " " ].includes( event.key ) ) {
			return;
		}

		setPreview( null );

		const input = document.getElementById( id );
		if ( input ) {
			input.value = "";
		}

		// onReset callback
		if ( onReset ) {
			onReset( {
				inputId: id,
				previousPreview: preview,
				event,
			} );
		}

		// Prevent default behavior for keyboard events
		if ( event.type === " keydown " ) {
			event.preventDefault();
		}
	}, [ id, preview, onReset ] );


	const handleButtonClick = useCallback( ( event ) => {
		if ( disabled ) {
			return;
		}

		// onClick callback
		if ( onClick ) {
			onClick( event );
			return;
		}

		const input = document.getElementById( id );
		if ( input ) {
			input.click();
		}
	}, [ disabled ] );

	/**
	 * Render preview conditionally.
	 * @returns {JSX.Element} HTML img element | Icon component.
	 */
	const Preview = () => {
		// Return preview if available
		if ( preview || isLoading ) {
			return (
				<div
					className={ classNames(
						"nfd-image-input__preview nfd-group",
						variants.classes[ variant ] || variants.classes.avatar,
					) }
				>
					{ ! preview && (
						<div className="nfd-image-input__loading">
							<Spinner />
						</div>
					) }

					{ preview && (
						<>
							<img
								src={ preview }
								alt={ previewImageAlt || "Selected" }
								className="nfd-image-input__preview-img"
							/>
							<div
								onClick={ handleReset }
								onKeyDown={ handleReset }
								role="button"
								tabIndex={ 0 }
								disabled={ disabled }
								className="nfd-image-input__preview-reset group-hover:nfd-opacity-100"
								aria-label={ resetPreviewActionAriaLabel || "Remove selected image" }
							>
								<XCircleIcon
									className="nfd-m-auto"
								/>
							</div>
						</>
					) }
				</div>
			);
		}

		// Return icon placeholder if no preview
		if ( variant ) {
			// Capitalize variant value to match component name (e.g. "rounded" => "Rounded")
			variant = variant.trim();
			variant = variant.toLowerCase();
			variant = variant.charAt( 0 ).toUpperCase() + variant.slice( 1 );
		}

		const Icon = variants.components[ variant ] || variants.components.Avatar;
		return <Icon className="nfd-image-input__icon" />;
	};

	return (
		<div
			className={ classNames(
				"nfd-image-input",
				preview && "nfd-has-preview",
				disabled && "nfd-is-disabled",
				className,
			) }
		>
			<Preview />

			<input
				id={ id }
				name={ name }
				type="file"
				className="nfd-hidden"
				accept={ accept || "image/*" }
				onChange={ handleFileChange }
				disabled={ disabled }
				ref={ ref }
				{ ...props }
			/>

			<Button
				variant={ buttonVariant || "secondary" }
				onClick={ handleButtonClick }
				disabled={ disabled }
			>
				{ buttonText || "Select Image" }
			</Button>
		</div>
	);
} );

ImageInput.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	variant: PropTypes.oneOf( keys( variants.classes ) ),
	previewImage: PropTypes.string,
	previewImageAlt: PropTypes.string,
	buttonText: PropTypes.string,
	buttonVariant: PropTypes.string,
	onClick: PropTypes.func,
	onChange: PropTypes.func,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	accept: PropTypes.string,
	isLoading: PropTypes.bool,
	resetPreviewActionAriaLabel: PropTypes.string,
};

export default ImageInput;
