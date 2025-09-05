const mobileProps = {
    children: {
        type: 'node',
        isRequired: true,
        description: 'The menu items',
    },
    openButtonId: {
        type: 'string',
        description: 'The ID of the open button',
    },
    closeButtonId: {
        type: 'string',
        description: 'The ID of the close button',
    },
    openButtonScreenReaderText: {
        type: 'string',
        description: 'The open button screen reader text',
        defaultValue: '"Open"',
    },
    closeButtonScreenReaderText: {
        type: 'string',
        description: 'The close button screen reader text',
        defaultValue: '"Close"',
    },
    'aria-label': {
        type: 'string',
        description: 'The aria label for the Modal',
    }
};

export default mobileProps;
