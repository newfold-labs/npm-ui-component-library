import { Children } from "react";

const featureProps = {
    id: {
        type: 'string',
        description: 'Input ID.',
        isRequired: true,
    },
    name: {
        type: 'string',
        description: 'Input group name.',
        isRequired: true,
    },
    value: {
        type: 'string',
        description: 'Input value.',
        isRequired: true,
    },
    type: {
        type: ['checkbox', 'radio'],
        description: 'Input type. When used inside a FeaturesSelect component, the type is inherited from the parent.',
        defaultValue: 'checkbox',
    },
    label: {
        type: 'string',
        description: 'Input label to render under the card.',
    },
    labelTextAlign: {
        type: ['left', 'right', 'center'],
        description: 'Text alignment for the label.',
        defaultValue: 'center',
    },
    disabled: {
        type: 'boolean',
        description: 'Disables the input.',
    },
    screenReaderLabel: {
        type: 'string',
        description: 'Screen reader label.',
        isRequired: true,
    },
    className: {
        type: 'string',
        description: 'CSS class.',
    },
    Children: {
        type: 'node',
        description: 'Children.',
    },
};

export default featureProps;
