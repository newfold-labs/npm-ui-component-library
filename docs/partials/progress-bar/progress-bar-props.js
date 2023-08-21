const progressBarProps = {
    min: {
        type: 'number',
        description: 'Minimum value',
        isRequired: true,
    },
    max: {
        type: 'number',
        description: 'Maximum value',
        isRequired: true,
    },
    progress: {
        type: 'number',
        description: 'Progress value',
        isRequired: true,
    },
    className: {
        type: 'string',
    }
};

export default progressBarProps;
