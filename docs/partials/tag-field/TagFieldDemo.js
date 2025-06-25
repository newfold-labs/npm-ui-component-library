import React from "react";
import { useState } from "react";
import { TagField } from "@newfold/ui-component-library";

const tagsPool = [
    'Adventure', 'Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery',
    'Romance', 'Thriller', 'Western', 'Sci-Fi', 'Crime', 'Animation',
    'Documentary', 'Musical', 'War', 'With Space'
];

const TagFieldDemo = ({
    id = 'tag-field-demo',
    label = 'A tag field',
    description = '',
    disabled = false,
    validation
}) => {
    const [tags, setTags] = useState(tagsPool || []);

    const handleAddTag = (tag) => {
        setTags([...tags, tag]);
    };
    
    const handleRemoveTag = (index) => {
        setTags(tags.filter((tag, i) => i !== index));
    }

    return (
        <TagField
            id={id}
            label={label}
            description={description}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
            tags={tags}
            disabled={disabled}
            validation={validation}
        />
    );
}

export default TagFieldDemo;
