const headerProps = {
    as: {
        type: 'string',
        description: 'The HTML element to render.',
        defaultValue: 'div',
    },
    title: {
        type: 'string',
    },
    description: {
        type: 'string',
    },
    children: {
        type: 'node',
        description: 'The content of the header to render after the title and description.',
    },
    className: {
        type: 'string',
    },
};

export default headerProps;
