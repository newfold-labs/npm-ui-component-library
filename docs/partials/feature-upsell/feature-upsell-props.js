const featureUpsellProps = {
    children: {
        type: 'node',
        description: 'The locked content of the feature upsell.',
        isRequired: true,
    },
    shouldUpsell: {
        type: 'bool',
        description: 'Whether or not the feature upsell should be shown.',
        defaultValue: 'true',
    },
    variant: {
        type: ['default', 'card'],
        description: 'The variant of the feature upsell.',
        defaultValue: 'card',
    },
    cardLink: {
        type: 'string',
        description: 'The URL of the upsell button.',
    },
    cardText: {
        type: 'string',
        description: 'The text of the upsell button.',
    },
    className: {
        type: 'string',
    }
};

export default featureUpsellProps;
