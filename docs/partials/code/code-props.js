const codeProps = {
    children: {
        type: 'node',
        description: 'The content of the code element.',
        isRequired: true,
    },
    variant: {
        type: ['default', 'block'],
        description: 'The variant of the code element.',
        defaultValue: 'default',
    },
    className: {
        type: 'string',
    }
};

export default codeProps;
