"use client"
import { useState } from 'react';
import { FaCross } from 'react-icons/fa6';
import { IoClose, IoSearch } from 'react-icons/io5';

const SearchBar = ({ blogs, styles, autofocus = false, placeholder }) => {


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
                {/* <IoSearch /> */}
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder={`${placeholder}`}
                    className={`${styles}`}
                    autoFocus={autofocus}
                /> {query && (
                    <button className='bg-tertary rounded-5 d-flex justify-content-center align-items-center p-2 input-clear-button' onClick={handleClear}>
                        <IoClose />
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
