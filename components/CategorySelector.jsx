import React, { useState } from 'react';

const CategorySelector = ({ categories, onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        onSelectCategory(category);
    };

    return (
        <div className="category-selector">
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="all">All</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;
