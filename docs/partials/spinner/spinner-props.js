const spinnerProps = {
    variant: {
        type: ['default', 'primary', 'white'],
        defaultValue: 'default',
        description: 'The variant of the spinner.'
    },
    size: {
        type: ['3', '4', '8'],
        defaultValue: '4',
        description: 'The size of the spinner.'
    },
    className: {
        type: 'string',
    }
};

export default spinnerProps;
