import React from "react";
import { useState } from "react";
import { CheckboxGroup } from "@newfold/ui-component-library";

const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' }
];

const CheckboxGroupDemo = ({
    id = "checkbox-group",
    label = "A checkbox group",
    values = [],
    disabled = false,
    description = ""
}) => {
    const [selectedValues, setSelectedValues] = useState(values);

    return (
        <CheckboxGroup
            id={id}
            label={label}
            onChange={setSelectedValues}
            options={options}
            values={selectedValues}
            description={description}
            disabled={disabled}
        />
    );
}

export default CheckboxGroupDemo;