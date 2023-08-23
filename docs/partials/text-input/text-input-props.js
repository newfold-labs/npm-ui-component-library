const textInputProps = {
    type: {
        type: ['string'],
        description: 'The type of the input.',
        defaultValue: 'text',
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

export default textInputProps;
