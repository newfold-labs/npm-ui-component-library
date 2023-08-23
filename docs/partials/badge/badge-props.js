const badgeProps = {
    children: {
        type: 'node',
        description: 'The content of the badge.',
        isRequired: true,
    },
    variant: {
        type: ['info', 'upsell', 'plain'],
        description: 'The variant of the badge.',
        defaultValue: 'info',
    },
    size: {
        type: ['default', 'small', 'large'],
        description: 'The size of the badge.',
        defaultValue: 'default',
    },
    className: {
        type: 'string',
    }
};

export default badgeProps;
