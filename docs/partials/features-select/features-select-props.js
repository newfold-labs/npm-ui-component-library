const featuresSelectProps = {
    behavior: {
        type: ['checkbox', 'radio'],
        description: 'Input behavior.',
        defaultValue: 'checkbox',
    },
    layout: {
        type: ['row', 'column'],
        description: 'Layout direction.',
        defaultValue: 'row',
    },
    className: {
        type: 'string',
        description: 'CSS class.',
    },
    children: {
        type: 'node',
    },
};

export default featuresSelectProps;
