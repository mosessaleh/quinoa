import React from 'react';
import TaggedCategoriesSingleMatch from './TaggedCategoriesSingleMatch';

const TaggedCategoriesMatches = (props) => {
    return (
        <div className="row">
            {props.tagMatches.map(category => (
                <TaggedCategoriesSingleMatch 
                    key={category.category_name}
                    category={category}
                />
            ))}
        </div>
    );
}

export default TaggedCategoriesMatches;