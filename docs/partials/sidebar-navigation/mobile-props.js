const mobileProps = {
    children: {
        type: 'node',
        isRequired: true,
    },
    openButtonId: {
        type: 'string',
    },
    closeButtonId: {
        type: 'string',
    },
    openButtonScreenReaderText: {
        type: 'string',
        defaultValue: 'Open',
    },
    closeButtonScreenReaderText: {
        type: 'string',
        defaultValue: 'Close',
    },
    ariaLabel: {
        type: 'string',
        description: 'The aria label for the Modal.',
    }
};

export default mobileProps;
