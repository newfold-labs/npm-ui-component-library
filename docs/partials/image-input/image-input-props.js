const imageInputProps = {
    id: {
        type: 'string',
        description: 'The id of the input element.',
        isRequired: true
    },
    name: {
        type: 'string',
        description: 'The name of the input element.',
        isRequired: true
    },
    variant: {
        type: ['avatar', 'rounded', 'square'],
        description: 'The image preview/placeholder variant.',
        defaultValue: 'avatar'
    },
    previewImage: {
        type: 'string',
        description: 'The src of the preview image. Can be used as a default preview.'
    },
    previewImageAlt: {
        type: 'string',
        description: 'The alt text of the preview image.'
    },
    buttonText: {
        type: 'string',
        description: 'The text of the button.',
        defaultValue: 'Select Image'
    },
    buttonVariant: {
        type: ['primary', 'secondary'],
        description: 'The button variant.',
        defaultValue: 'secondary'
    },
    accept: {
        type: 'string',
        description: 'The file types that the input should accept.',
        defaultValue: 'image/*'
    },
    onClick: {
        type: 'function',
        description: 'Fires when the button is clicked and will take over the default file input behavior. The function will receive the event object as an argument.'
    },
    onChange: {
        type: 'function',
        description: 'Fires when the file input changes. The function will receive an object of "event" and "file" as an argument.'
    },
    onReset: {
        type: 'function',
        description: 'Fires when preview image is reset. The function will receive an object of "inputId", "previousPreview" and "event" as an argument.'
    },
    className: {
        type: 'string',
        description: 'The class name of the element.'
    },
    disabled: {
        type: 'bool',
        description: 'If true, the input will be disabled.',
    },
    isLoading: {
        type: 'bool',
        description: 'If true, the input will be in a loading state.'
    },
    resetPreviewActionAriaLabel: {
        type: 'string',
        description: 'The aria-label of the reset preview action button.'
    },
};

export default imageInputProps;
