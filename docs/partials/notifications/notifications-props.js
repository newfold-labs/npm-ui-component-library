const notificationsProps = {
    children: {
        type: 'node',
        description: 'The content of the notifications context.',
    },
    position: {
        type: ['bottom-left', 'bottom-center', 'top-center'],
        description: 'The position of the notifications.',
        defaultValue: 'bottom-left',
    }
};

export default notificationsProps;
