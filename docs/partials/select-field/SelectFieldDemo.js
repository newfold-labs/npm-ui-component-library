import React from "react";
import { useState } from "react";
import { SelectField } from "@newfold/ui-component-library";

const SelectFieldDemo = ({
    id = "select-field-demo",
    label = "A select field",
    description,
    disabled = false,
    validation
}) => {
    const [selectedVal, setSelectedVal] = useState("1");                                                                     

    return (
        <SelectField
            id={id}
            name={id}
            label={label}
            value={selectedVal}
            selectedLabel={`Option ${selectedVal}`}
            description={description}
            disabled={disabled}
            validation={validation}
            onChange={setSelectedVal}
        >
            <SelectField.Option
                label="Option 1"
                value="1"
            />
            <SelectField.Option
                label="Option 2"
                value="2"
            />
            <SelectField.Option
                label="Option 3"
                value="3"
            />
            <SelectField.Option
                label="Option 4"
                value="4"
            />
        </SelectField>
    );
};

export default SelectFieldDemo;
