const notificationProps = {
    id: {
        type: "string",
        description: "The id of the notification.",
        isRequired: true,
    },
    dismissScreenReaderLabel: {
        type: "string",
        description: "The screen reader label for the dismiss button.",
        isRequired: true,
    },
    title: {
        type: "string",
    },
    description: {
        type: 'string',
        description: 'Notification description.'
    },
    children: {
        type: 'node',
        description: 'The content of the notification. If passed, will override description.',
    },
    variant: {
        type: ['info', 'warning', 'success', 'error'],
        description: 'The variant of the notification.',
        defaultValue: 'info',
    },
    size: {
        type: ['default', 'large'],
        description: 'The size of the notification.',
        defaultValue: 'default',
    },
    onDismiss: {
        type: 'function',
        description: 'A function that is fired when the notification is dismissed. It receives the id of the dismissed notification as an argument.',
    },
    autoDismiss: {
        type: 'number',
        description: 'Milliseconds for Notification to disappear.',
    }
};

export default notificationProps;
