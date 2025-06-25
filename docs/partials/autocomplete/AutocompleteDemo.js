import React from "react";
import { useState, useEffect, useRef } from "react";
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
    value = "",
    nullable = false
}) => {
    const [selectedVal, setSelectedVal] = useState(value);
    const [selectedLabelVal, setSelectedLabelVal] = useState(selectedLabel);
    const [query, setQuery] = useState(options);

    const getSelectedLabel = () => {
        if (!selectedVal) {
            return '';
        } else {
            return options.find(option => option.value === selectedVal).label
        }
    };

    const isInitialMount = useRef(true);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            setSelectedLabelVal(getSelectedLabel());
        }
    }, [selectedVal]);

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
            onChange={setSelectedVal}
            onQueryChange={handleQueryChange}
            placeholder={placeholder}
            value={selectedVal}
            selectedLabel={selectedLabelVal}
            label={label}
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
