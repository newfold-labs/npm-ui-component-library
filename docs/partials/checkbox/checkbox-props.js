const checkboxProps = {
    id: {
        type: 'string',
        isRequired: true,
    },
    name: {
        type: 'string',
        isRequired: true,
    },
    value: {
        type: 'string',
        isRequired: true,
    },
    label: {
        type: 'string',
        isRequired: true,
    },
    disabled: {
        type: 'bool',
    },
    className: {
        type: 'string',
    }
};

export default checkboxProps;
