const imageImportProps = {
	id: {
		type: 'string',
		description: 'The ID of the input element.',
		isRequired: true,
	},
	name: {
		type: 'string',
		description: 'The name of the input element.',
		isRequired: true,
	},
	previewImageVariant: {
		type: ['avatar', 'rounded', 'square'],
		description: 'The variant of the preview/placeholder image.',
	},
	previewImage: {
		type: 'string',
		description: 'The src of the preview image. Can be used as a default preview.',
	},
	previewImageAlt: {
		type: 'string',
		description: 'The alt text of the preview image.',
	},
	buttonText: {
		type: 'string',
		description: 'The text of the button.',
		defaultValue: 'Select Image',
	},
	buttonVariant: {
		type: ['primary', 'secondary'],
		description: 'The button variant.',
		defaultValue: 'secondary',
	},
	onClick: {
		type: 'function',
		description: 'Fires when the button is clicked and will take over the default file input behavior. The function will receive the event object as an argument.',
	},
	onChange: {
		type: 'function',
		description: 'Fires when the file input changes. The function will receive an object of "event" and "file" as an argument.',
	},
	onReset: {
		type: 'function',
		description: 'Fires when preview image is reset. The function will receive an object of "inputId", "previousPreview" and "event" as an argument.',
	},
	onDrop: {
		type: 'function',
		description: 'Fires when a file is dropped and will take over the default behavior of the drop zone. The function will receive the event object as an argument.',
	},
	onError: {
		type: 'function',
		description: 'Fires when an error occurs. The function will receive an object of "error" as an argument.',
	},
	dropLabel: {
		type: 'string',
		description: 'The label to be displayed in the drop zone.',
		defaultValue: 'Select an image or drag and drop',
	},
	disabled: {
		type: 'boolean',
		description: 'If true, the input will be disabled.',
	},
	isLoading: {
		type: 'boolean',
		description: 'If true, the input will be in a loading state.',
	},
	resetPreviewActionAriaLabel: {
		type: 'string',
		description: 'The aria label of the reset preview action.',
	},
	className: {
		type: 'string',
		description: 'The class name of the element.',
	},
};

export default imageImportProps;
