const dropZoneProps = {
    onDrop: {
        type: 'function',
        description: 'Fires when files are dropped. The function will receive the event object as an argument.',
        isRequired: true,
    },
    children: {
        type: 'node',
        description: 'The children.',
    },
    disabled: {
        type: 'bool',
        description: 'Whether the drop zone is disabled.',
    },
    className: {
        type: 'string',
    },
    tabIndex: {
        type: 'string',
    },
}

export default dropZoneProps;
