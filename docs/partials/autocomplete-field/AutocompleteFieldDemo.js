import React from "react";
import { useState, useEffect, useRef } from "react";
import { AutocompleteField } from "@newfold/ui-component-library";

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

const AutocompleteFieldDemo = ({
    label,
    selectedLabel = "",
    placeholder = "Type to autocomplete options",
    value = "",
    description,
    validation,
    nullable = false,
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
        <AutocompleteField
            id="autocomplete-field-select"
            onChange={(value) => setSelectedVal(value)}
            onQueryChange={handleQueryChange}
            placeholder={placeholder}
            value={selectedVal}
            selectedLabel={selectedLabelVal}
            label={label}
            validation={validation}
            description={description}
            nullable={nullable}
        >

            {query.map((option) => (
                <AutocompleteField.Option key={option.value} value={option.value}>
                    {option.label}
                </AutocompleteField.Option>
            ))}

        </AutocompleteField>
    );
};

export default AutocompleteFieldDemo;
