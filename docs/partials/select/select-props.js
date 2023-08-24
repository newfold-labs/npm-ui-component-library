const selectProps = {
    id: {
        type: 'string',
        description: 'The id of the select element.',
        isRequired: true
    },
    value: {
        type: ['string', 'number', 'bool'],
        description: 'The value of the select element.',
        isRequired: true
    },
    onChange: {
        type: 'function',
        description: 'Callback function that is fired when the select value changes.',
        isRequired: true
    },
    options: {
        type: 'array',
        description: 'Array of options to be rendered in the select element.',
    },
    children: {
        type: 'node',
        description: 'Alternative to options array. Pass `Select.Option` components as children.',
    },
    selectedLabel: {
        type: 'string',
    },
    label: {
        type: 'string',
    },
    labelProps: {
        type: 'object',
    },
    labelSuffix: {
        type: 'node',
    },
    disabled: {
        type: 'bool',
        description: 'If true, the select will be disabled.',
        defaultValue: 'false',
    },
    className: {
        type: 'string',
    }
};

export default selectProps;
