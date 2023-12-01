const containerProps = {
    as: {
        type: 'string',
        description: 'The HTML element to render.',
        defaultValue: 'div',
    },
    children: {
        type: 'node',
        description: 'The content of this container.',
    },
    className: {
        type: 'string',
    },
};

export default containerProps;
