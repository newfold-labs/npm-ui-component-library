const itemProps = {
    as: {
        type: 'elementType',
        description: 'The element type to render',
        defaultValue: '"a"',
    },
    pathProp: {
        type: 'string',
        description: 'The key of the path in the props',
        defaultValue: '"href"',
    },
    icon: {
        type: 'element',
        description: 'Optional icon to put before the label',
    },
    label: {
        type: 'node',
        description: 'The label text',
    },
    children: {
        type: 'node',
        description: 'The content to display',
    },
    className: {
        type: 'string',
        description: 'Class attribute to add to the element',
        defaultValue: '""',
    },
    href: {
        type: 'string',
        description: 'The URL to navigate to',
    },
    onClick: {
        type: 'func',
        description: 'Handler for when the item is clicked',
    }
};

export default itemProps;
