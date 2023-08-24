const autocompleteProps = {
    id: {
        type: 'string',
        description: 'HTML id attribute.',
        isRequired: true,
    },
    value: {
        type: ['string', 'number', 'bool'],
    },
    placeholder: {
        type: 'string',
    },
    children: {
        type: 'node',
        description: 'Pass `Autocomplete.Option` components as children',
    },
    selectedLabel: {
        type: 'string',
        description: 'The label of the selected option.',
    },
    label: {
        type: 'string',
        description: 'The label of the autocomplete input.',
    },
    labelProps: {
        type: 'object',
    },
    labelSuffix: {
        type: 'node',
    },
    onChange: {
        type: 'function',
        description: 'Callback function that is fired when an item has been selected.',
        isRequired: true,
    },
    onQueryChange: {
        type: 'function',
        description: 'Callback function that is fired when the query changes.',
        isRequired: true,
    },
    className: {
        type: 'string',
    },
    nullable: {
        type: 'bool',
        description: 'If true, the user can clear the selected value with `X` button.',
    },
    buttonProps: {
        type: 'object',
        description: 'Props to be passed to the `X` button element.',
    },
    clearButtonScreenReaderText: {
        type: 'string',
        description: 'Screen reader text for the clear button.',
        defaultValue: 'Clear',
    }
}

export default autocompleteProps;
