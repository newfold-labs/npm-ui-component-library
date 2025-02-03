const labelProps = {
    label: {
        type: 'string',
        description: 'Label text',
    },
    requiredIndicator: {
        type: 'boolean',
        description: 'Show required indicator',
        defaultValue: false,
    },
    as: {
        type: ['label', 'span', 'div'],
        description: 'Rendered HTML element',
        defaultValue: 'label',
    },
    className: {
        type: 'string',
    }
};

export default labelProps;
