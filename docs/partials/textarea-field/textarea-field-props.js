const textareaFieldProps = {
    id: {
        type: 'string',
        description: 'ID for the textarea field.',
        isRequired: true,
    },
    label: {
        type: 'string',
        description: 'Label for the textarea field.',
        isRequired: true,
    },
    description: {
        type: 'string',
        description: 'Description for the textarea field.',
    },
    validation: {
        type: '{ variant: string, message: node }',
        description: 'Validation state and message',
    },
    rows: {
        type: 'number',
        defaultValue: '2',
    },
    disabled: {
        type: 'bool',
        defaultValue: 'false',
    },
    className: {
        type: 'string',
    }
};

export default textareaFieldProps;
