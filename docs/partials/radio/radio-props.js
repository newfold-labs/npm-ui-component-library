const radioProps = {
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
    variant: {
        type: ['default', 'inline-block'],
        description: 'Variant of the radio button',
        defaultValue: 'default',
    },
    isLabelDangerousHtml: {
        type: 'bool',
        description: 'If true, the label will be rendered as HTML',
        defaultValue: 'false',
    },
    screenReaderLabel: {
        type: 'string',
        description: 'Label for screen readers',
    },
    disabled: {
        type: 'bool',
        defaultValue: 'false',
    },
    className: {
        type: 'string',
    }
};

export default radioProps;
