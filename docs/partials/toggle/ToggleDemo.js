import React from "react";
import { useState } from "@wordpress/element";
import { Toggle } from "@newfold/ui-component-library";

const ToggleDemo = ({ 
    id = 'toggle-id',
    screenReaderLabel = 'Toggle',
    checked = false,
    disabled = false,
    className = '',
 }) => {
    const [isChecked, setIsChecked] = useState(checked);

    return ( 
        <Toggle
            id={id}
            onChange={setIsChecked}
            screenReaderLabel={screenReaderLabel}
            checked={isChecked}
            disabled={disabled}
            className={className}
        />
     );
}
 
export default ToggleDemo;