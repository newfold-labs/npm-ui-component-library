const settingsFieldProps = {
    as: {
        type: 'string',
        description: 'The HTML element to render.',
        defaultValue: 'div',
    },
    title: {
        type: 'string',
        description: 'The title of the settings field.',
    },
    description: {
        type: 'string',
        description: 'The description of the settings field.',
    },
    children: {
        type: 'node',
        description: 'The content of this block.',
    },
    className: {
        type: 'string',
    },
};

export default settingsFieldProps;
