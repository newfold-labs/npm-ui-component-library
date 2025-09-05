const appBarNavigationProps = {
    children: {
        type: 'node',
        isRequired: true,
    },
    activePath: {
        type: 'string',
        description: 'The path of the active menu item',
        defaultValue: '""',
    }
};

export default appBarNavigationProps;
