const footerProps = {
    as: {
        type: 'string',
        description: 'The HTML element to render.',
        defaultValue: 'div',
    },
    children: {
        type: 'node',
        description: 'The content of the footer to render.',
    },
    className: {
        type: 'string',
    },
};

export default footerProps;
