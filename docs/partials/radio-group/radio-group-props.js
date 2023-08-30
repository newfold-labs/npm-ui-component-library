const radioGroupProps = {
    id: {
        type: 'string',
    },
    name: {
        type: 'string',
    },
    value: {
        type: 'string',
        description: 'The value of the selected radio option.',
    },
    label: {
        type: 'string',
    },
    description: {
        type: 'string',
    },
    options: {
        type: '[{ value: string, label: string, screenReaderLabel: string }]',
        description: 'value (required) | label (required) | screenReaderLabel (optional).',
    },
    variant: {
        type: ['default', 'inline-block'],
        description: 'Variant of the radio button',
        defaultValue: 'default',
    },
    onChange: {
        type: 'function',
        description: 'Callback function when radio button is clicked. Receives the new value as a parameter.',
    },
    children: {
        type: 'node',
    },
    disabled: {
        type: 'bool',
        defaultValue: 'false',
    },
    className: {
        type: 'string',
    }
};

export default radioGroupProps;
