import React from "react";
import { useState } from "react";
import { ToggleField } from "@newfold/ui-component-library";

const ToggleFieldDemo = ({
    id="toggle-field-demo",
    label="A toggle field",
    description,
    checked = false,
    disabled = false,
    className,
}) => {
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <ToggleField
            id={id}
            label={label}
            description={description}
            checked={isChecked}
            disabled={disabled}
            onChange={setIsChecked}
            className={className}
        />
    );
}

export default ToggleFieldDemo;
