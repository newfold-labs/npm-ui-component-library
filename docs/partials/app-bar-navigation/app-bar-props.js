const appBarProps = {
    children: {
        type: 'node',
        isRequired: true,
    },
    className: {
        type: 'string',
        description: 'Class attribute to add to the element',
        defaultValue: '""',
    },
    position: {
        type: 'string',
        description: 'The CSS position of the app bar',
        defaultValue: '"static"',
        options: ['absolute', 'fixed', 'relative', 'static', 'sticky'],
    }
};

export default appBarProps;
