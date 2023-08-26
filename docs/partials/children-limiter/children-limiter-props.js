const childrenLimiterProps = {
    limit: {
        type: 'number',
        description: 'The maximum number of children to reveal on initial render.',
        isRequired: true,
    },
    children: {
        type: 'node',
        isRequired: true,
    },
    renderButton: {
        type: 'function',
        description: 'Render the toggle button. Receives `show`, `toggle` and `ariaProps`.',
        isRequired: true,
    },
    initialShow: {
        type: 'bool',
        description: 'Whether to show the children initially.',
        defaultValue: 'false',
    },
    id: {
        type: 'string',
    }
};

export default childrenLimiterProps;
