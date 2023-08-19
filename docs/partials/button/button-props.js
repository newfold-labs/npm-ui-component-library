const buttonProps = {
    children: {
        type: 'node',
        description: 'Button content.',
        isRequired: true,
    },
    as: {
        type: ['button', 'a', 'span', 'div'],
        description: 'The HTML element to render.',
        defaultValue: 'button',
    },
    type: {
        type: ['button', 'submit'],
    },
    variant: {
        type: ['primary', 'secondary', 'error', 'upsell'],
        description: 'The variant of the button.',
        defaultValue: 'primary',
    },
    size: {
        type: ['default', 'small', 'large'],
        defaultValue: 'default',
    },
    isLoading: {
        type: 'bool',
        defaultValue: false,
    },
    disabled: {
        type: 'bool',
        defaultValue: false,
    },
    className: {
        type: 'string',
    }
};

export default buttonProps;
