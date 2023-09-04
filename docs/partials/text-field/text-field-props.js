const textFieldProps = {
    id: {
        type: 'string',
        description: 'ID for the text field.',
        isRequired: true,
    },
    label: {
        type: 'string',
        description: 'Label for the text field.',
        isRequired: true,
    },
    onChange: {
        type: 'function',
        description: 'Callback function when the value of the text field changes. The function will receive the event as a parameter.',
        isRequired: true,
    },
    labelSuffix: {
        type: 'node',
        description: 'Content to display after the label.',
    },
    type: {
        type: 'string',
        description: 'The type of the input.',
        defaultValue: 'text',
    },
    description: {
        type: 'string',
        description: 'Description for the text field.',
    },
    validation: {
        type: '{ variant: string, message: node }',
        description: 'Validation state and message'
    },
    disabled: {
        type: 'bool',
        defaultValue: 'false',
    },
    readOnly: {
        type: 'bool',
        defaultValue: 'false',
    },
    className: {
        type: 'string',
    }
};

export default textFieldProps;
