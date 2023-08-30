const rootProps = {
    children: {
        type: 'node',
        description: 'The content of your application.',
    },
    context: {
        type: '{ isRtl: bool }',
        defaultValue: '{ isRtl: false }',
    }
};

export default rootProps;
