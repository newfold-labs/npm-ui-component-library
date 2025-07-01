import React from "react";
import { useState } from "react";
import { RadioGroup } from "@newfold/ui-component-library";

const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
    { label: "Option 4", value: "4" },
];

const RadioGroupDemo = ({ 
    id = "radio-group-demo",
    label,
    description,
    variant,
    disabled
}) => {
    const [selectedValue, setSelectedValue] = useState("");

    return ( 
        <>
        <RadioGroup 
            id={id}
            label={label}
            description={description}
            variant={variant}
            disabled={disabled}
            value={selectedValue}
            options={options}
            onChange={setSelectedValue}
        />
        <style>
            {`
                .nfd-root .nfd-radio--inline-block .nfd-radio__label {
                    font-size: 13px !important;
                    width: 8rem;
                    height: 3rem;
                }
            `}
        </style>
        </>
     );
}
 
export default RadioGroupDemo;
