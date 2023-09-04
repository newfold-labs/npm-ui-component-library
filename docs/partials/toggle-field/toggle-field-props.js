const toggleFieldProps = {
    id: {
        type: 'string',
        description: 'The id for the toggle field.',
        isRequired: true,
    },
    label: {
        type: 'string',
        description: 'The label for the toggle field.',
        isRequired: true,
    },
    checked: {
        type: 'bool',
        description: 'Toggle field checked state',
        defaultValue: 'false',
        isRequired: true,
    },
    onChange: {
        type: 'function',
        description: 'Fired when changed. The function will receive the new value as an argument.',
        isRequired: true,
    },
    labelSuffix: {
        type: 'string',
        description: 'Content to display after the label.',
    },
    description: {
        type: 'node',
        description: 'The description for the toggle field.',
    },
    disabled: {
        type: 'bool',
        description: 'If true, the toggle will be disabled.',
        defaultValue: 'false',
    },
    ariaLabel: {
        type: 'string',
    },
    className: {
        type: 'string',
    }
};

export default toggleFieldProps;
