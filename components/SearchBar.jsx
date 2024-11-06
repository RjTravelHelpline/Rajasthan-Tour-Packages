"use client"
import { useState } from 'react';

const SearchBar = ({ blogs }) => {


    const [query, setQuery] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const handleClear = () => {
        setQuery('');
        setFilteredBlogs([]);
    };
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

            <div className='w-100 d-flex justify-content-center align-items-center'>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search your preference..."
                /> {query && (
                    <button className='bg-tertary rounded-5 d-flex justify-content-center align-items-center p-2 input-clear-button' onClick={handleClear}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M18.364 5.636a1 1 0 0 0-1.414 0L12 9.586 7.05 4.636a1 1 0 1 0-1.414 1.414L10.586 12l-5.95 5.95a1 1 0 1 0 1.414 1.414L12 14.414l5.95 5.95a1 1 0 1 0 1.414-1.414L13.414 12l5.95-5.95a1 1 0 0 0 0-1.414z" />
                        </svg>
                    </button>
                )}
            </div>

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
