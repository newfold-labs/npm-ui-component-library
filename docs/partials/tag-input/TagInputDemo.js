import React from "react";
import { useState } from "react";
import { TagInput } from "@newfold/ui-component-library";

const tagsPool = [
    'Adventure', 'Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery',
    'Romance', 'Thriller', 'Western', 'Sci-Fi', 'Crime', 'Animation',
    'Documentary', 'Musical', 'War', 'With Space'
];

const TagInputDemo = ({ withChildren = false, disabled }) => {
    const [tags, setTags] = useState(tagsPool || []);

    const handleAddTag = (tag) => {
        setTags([...tags, tag]);
    };
    
    const handleRemoveTag = (index) => {
        setTags(tags.filter((tag, i) => i !== index));
    }

    if (withChildren) {
        return ( 
            <TagInput>
                <TagInput.Tag 
                    key={0}
                    tag="Adventure"
                    index={0}
                    onRemoveTag={() => {alert('custom remove tag function')}}
                />
                <TagInput.Tag
                    key={1}
                    tag="Action"
                    index={1}
                    onRemoveTag={x => console.log(x)}
                />
                <TagInput.Tag
                    key={2}
                    tag="Disabled Tag"
                    index={2}
                    onRemoveTag={() => {alert('custom remove tag function')}}
                    disabled
                    screenReaderRemoveTag="Non-removable tag"
                />
            </TagInput>
         );
    }

    return ( 
        <TagInput
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
            tags={tags}
            disabled={disabled}
        />
     );
}
 
export default TagInputDemo;
