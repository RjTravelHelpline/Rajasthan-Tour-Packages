"use client"
import { useState } from 'react';

const SearchBar = ({ blogs }) => {
    const [query, setQuery] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);

        if (value) {
            const results = blogs.filter(blog =>
                blog.heading.toLowerCase().includes(value.toLowerCase()) ||
                blog.description.toLowerCase().includes(value.toLowerCase()) ||
                blog.category.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredBlogs(results);
        } else {
            setFilteredBlogs([]);
        }
    };

    const handleBlogClick = (slug) => {
        window.location.href = `/blog/${slug}`;
    };

    return (
        <div className="blog-search-bar w-100">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search your preference..."
            />
            {filteredBlogs.length > 0 && (
                <ul className="search-results mt-3">
                    {filteredBlogs.map(blog => (
                        <li key={blog.slug} onClick={() => handleBlogClick(blog.slug)} className="search-item">
                            {blog.heading}
                            <span className='color-tertary fw-bold d-block'>{blog.category}</span>
                        </li>
                    ))}
                </ul>
            )}
            {query && filteredBlogs.length === 0 && (
                <ul className="search-results mt-3">
                    <li className="search-item no-results">No results found</li>
                </ul>
            )}

        </div>
    );
};

export default SearchBar;
