import React from "react";
import { useState } from "@wordpress/element";
import { Autocomplete } from "@newfold/ui-component-library";

const options = [
    {
        value: "1",
        label: "Option 1",
    },
    {
        value: "2",
        label: "Option 2",
    },
    {
        value: "3",
        label: "Option 3",
    },
];

const AutocompleteDemo = ({
    label,
    selectedLabel = "",
    placeholder = "Type to autocomplete options",
    nullable = false,
    validation
}) => {
    const [selectedVal, setSelectedVal] = useState(null);
    const [query, setQuery] = useState(options);

    const getSelectedLabel = () => options.find(option => option.value === selectedVal).label;

    const handleQueryChange = (event) => {
        const { value } = event.target;

        if (!value) {
            return setQuery(options);
        }

        const filteredOptions = () => {
            if (options.length > 0) {
                return options.filter((option) => option.label.toLowerCase().includes(value.toLowerCase()));
            }
        }
        
        return setQuery(filteredOptions);
    };

    return (
        <Autocomplete
            id="select-autocomplete"
            nullable={nullable}
            onChange={(value) => setSelectedVal(value)}
            onQueryChange={handleQueryChange}
            placeholder={placeholder}
            value={selectedVal}
            selectedLabel={selectedVal ? getSelectedLabel() : selectedLabel}
            label={label}
            validation={validation}
        >

            {query.map((option) => (
                <Autocomplete.Option key={option.value} value={option.value}>
                    {option.label}
                </Autocomplete.Option>
            ))}

        </Autocomplete>
    );
}

export default AutocompleteDemo;
