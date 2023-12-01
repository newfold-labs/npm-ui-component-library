const pageProps = {
    as: {
        type: 'string',
        description: 'The HTML element to render.',
        defaultValue: 'div',
    },
    children: {
        type: 'node',
        description: 'The content of the page.',
    },
    className: {
        type: 'string',
    },
};

export default pageProps;
