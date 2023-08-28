const modalProps = {
    isOpen: {
        type: 'bool',
        description: 'If true, the modal will be open.',
        defaultValue: 'false',
        isRequired: true,
    },
    onClose: {
        type: 'function',
        description: 'A function that will be called when the modal is closed.',
        isRequired: true,
    },
    children: {
        type: 'node',
        description: 'The content of the modal.',
        isRequired: true,
    },
    position: {
        type: ['center', 'top-center'],
        description: 'The position of the modal\'s content.',
        defaultValue: 'center',
    },
    className: {
        type: 'string',
    }
};

export default modalProps;
