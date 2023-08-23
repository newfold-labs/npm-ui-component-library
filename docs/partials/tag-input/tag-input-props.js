const tagInputProps = {
    tags: {
        type: 'array',
        description: 'Array of `string` tags to display',
    },
    children: {
        type: 'node',
        description: 'You can pass `TagInput.Tag` subcomponent(s) as children to render tags. This will override the `tags` prop.',
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

export default tagInputProps;
