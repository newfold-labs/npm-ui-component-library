const tagFieldProps = {
    id: {
        type: 'string',
        description: 'ID for the tag field.',
        isRequired: true,
    },
    label: {
        type: 'string',
        description: 'Label for the tag field.',
        isRequired: true,
    },
    tags: {
        type: 'array',
        description: 'Array of `string` tags to display',
    },
    labelSuffix: {
        type: 'node',
        description: 'Content to display after the label.',
    },
    description: {
        type: 'string',
        description: 'Description for the tag field.',
    },
    onAddTag: {
        type: 'function',
        description: 'Callback function when a tag is added. The function will receive the new tag as a parameter.',
    },
    onRemoveTag: {
        type: 'function',
        description: 'Callback function when a tag is removed. The function will receive the removed tag as a parameter.',
    },
    onSetTags: {
        type: 'function',
        description: 'Sets the tags to the given array.',
    },
    onBlur: {
        type: 'function',
    },
    validation: {
        type: '{ variant: string, message: node }',
        description: 'Validation state and message'
    },
    screenReaderRemoveTag: {
        type: 'string',
        description: 'Screen reader text for the remove tag button.',
        defaultValue: 'Remove tag',
    },
    disabled: {
        type: 'bool',
        description: 'If true, the tag input will be disabled.',
        defaultValue: 'false',
    },
    className: {
        type: 'string',
    },
};

export default tagFieldProps;