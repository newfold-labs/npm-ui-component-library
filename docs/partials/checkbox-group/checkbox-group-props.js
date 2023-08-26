const checkboxGroupProps = {
    id: {
        type: "string",
        description: "The id of the checkbox group.",
    },
    name: {
        type: "string",
    },
    values: {
        type: "array",
        description: "The values of the selected checkboxes.",
    },
    options: {
        type: "array",
        description: "The options for the checkbox group.",
    },
    children: {
        type: "node",
        description: "You can use `CheckboxGroup.Checkbox` sub-components as children instead of passing `options`.",
    },
    label: {
        type: "string",
        description: "The label for the checkbox group.",
    },
    description: {
        type: "string",
        description: "The description for the checkbox group.",
    },
    onChange: {
        type: "function",
        description: "The function to call when the checkbox group changes. The function will receive the new values (array) as an argument.",
    },
    disabled: {
        type: "bool",
        description: "Whether the checkbox group is disabled.",
    },
    className: {
        type: "string",
    },
};

export default checkboxGroupProps;
