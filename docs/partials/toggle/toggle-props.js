const toggleProps = {
    id: {
        type: 'string',
        isRequired: true,
    },
    screenReaderLabel: {
        type: 'string',
        description: 'A hidden label for the toggle (accessibility)',
        isRequired: true,
    },
    onChange: {
        type: 'function',
        description: 'Fired when changed. The function will receive the new value as an argument.',
        isRequired: true,
    },
    checked: {
        type: 'bool',
        defaultValue: 'false',
    },
    disabled: {
        type: 'bool',
        description: 'If true, the toggle will be disabled.',
        defaultValue: 'false',
    },
    as: {
        type: ['button', 'div', 'span'],
        description: 'The element type to render as.',
        defaultValue: 'button',
    },
    type: {
        type: 'string',
        description: 'The type of the input.',
    },
    className: {
        type: 'string',
    }
};

export default toggleProps;
