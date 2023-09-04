const selectFieldProps = {
    id: {
        type: 'string',
        isRequired: true,
    },
    value: {
        type: ['string', 'number', 'bool'],
        isRequired: true,
    },
    label: {
        type: 'string',
        isRequired: true,
    },
    selectedLabel: {
        type: 'string',
    },
    name: {
        type: 'string',
    },
    description: {
        type: 'node',
    },
    options: {
        type: '[{ value: string | number | bool, label: string }]',
        description: 'Array of options to be rendered in the select field.'
    },
    children: {
        type: 'node',
        description: 'Alternative to options array. Pass `SelectField.Option` components as children.'
    },
    validation: {
        type: '{ variant: string, message: node }',
        description: 'Validation state and message'
    },
    disabled: {
        type: 'bool',
        defaultValue: 'false',
    },
    className: {
        type: 'string',
    }
};

export default selectFieldProps;
