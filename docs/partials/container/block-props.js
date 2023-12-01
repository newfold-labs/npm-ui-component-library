const blockProps = {
    as: {
        type: 'string',
        description: 'The HTML element to render.',
        defaultValue: 'div',
    },
    children: {
        type: 'node',
        description: 'The content of this block.',
    },
    separator: {
        type: 'bool',
        description: 'Whether to render a separator after the block.',
        defaultValue: 'false',
    },
    id: {
        type: 'string',
    },
    className: {
        type: 'string',
    },
};

export default blockProps;
