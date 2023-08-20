const linkProps = {
    children: {
        type: 'node',
        description: 'Link content',
        isRequired: true,
    },
    variant: {
        type: ['default', 'primary', 'error'],
        description: 'Link variant',
        defaultValue: 'default',
    },
    as: {
        type: ['a', 'button', '<Component />'],
        description: 'Rendered HTML element',
        defaultValue: 'a',
    },
    className: {
        type: 'string',
    }
};

export default linkProps;
