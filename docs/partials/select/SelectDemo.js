import React from "react";
import { useState } from "react";
import { Select } from "@newfold/ui-component-library";

const SelectDemo = ({ 
    id,
    label,
    disabled = false,
    validation
}) => {
    const [selectedVal, setSelectedVal] = useState(1);

    const handleChange = (val) => {
        setSelectedVal(val);
    };

    return (
        <Select
            id={id}
            onChange={handleChange}
            value={selectedVal}
            selectedLabel={`Option ${selectedVal}`}
            label={label}
            disabled={disabled}
            validation={validation}
        >
            <Select.Option
                label="Option 1"
                value="1"
            />
            <Select.Option
                label="Option 2"
                value="2"
            />
            <Select.Option
                label="Option 3"
                value="3"
            />
            <Select.Option
                label="Option 4"
                value="4"
            />
        </Select>
    );
}

export default SelectDemo;
