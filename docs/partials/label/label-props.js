const labelProps = {
    label: {
        type: 'string',
        description: 'Label text',
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
