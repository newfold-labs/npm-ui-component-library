const props = {
    children: {
        type: 'node',
        description: 'The content of the alert.',
        isRequired: true
    },
    as: {
        type: ['span', 'div'],
        description: 'The HTML element to render.',
        defaultValue: 'span'
    },
    variant: {
        type: ['info', 'warning', 'success', 'error'],
        description: 'The variant of the alert.',
        defaultValue: 'info'
    },
    role: {
        type: ['alert', 'status'],
        defaultValue: 'alert'
    },
    className: {
        type: 'string',
    }
};

export default props;
