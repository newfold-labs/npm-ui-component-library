import React from "react";
import { useState } from "@wordpress/element";
import { ToggleField } from "@newfold/ui-component-library";

const ToggleFieldDemo = ({
    id="toggle-field-demo",
    label="A toggle field",
    description,
    checked = false,
    disabled = false
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
        />
    );
}

export default ToggleFieldDemo;
