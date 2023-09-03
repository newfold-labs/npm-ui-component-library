const menuItemProps = {
    label: {
        type: 'string',
        isRequired: true,
    },
    icon: {
        type: ['JSX Element', 'React Component'],
    },
    defaultOpen: {
        type: 'bool',
        defaultValue: 'true',
    },
    children: {
        type: 'node',
    }
}

export default menuItemProps;
