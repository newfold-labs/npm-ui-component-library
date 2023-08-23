const titleProps = {
    children: {
        type: 'node',
        description: 'The content of the title.',
        isRequired: true,
    },
    as: {
        type: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'],
        description: 'The HTML element to render.',
        defaultValue: 'h1',
    },
    size: {
        type: ['1', '2', '3', '4', '5'],
        description: 'The size of the title.',
    },
    className: {
        type: 'string',
    }
}

export default titleProps;
