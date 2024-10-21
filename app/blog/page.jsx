"use client"
import { blogs } from "@/data/Blogs";
import Link from "next/link";
import { FaCat, FaLandmark, FaPlaneDeparture, FaSearch } from "react-icons/fa";
import { FaKitchenSet, FaPersonRifle } from "react-icons/fa6";

const getLatestBlogs = (blogs, count = 5) => {
    return blogs
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, count);
};

// Define blog categories with icons
const blogCategory = [
    {
        name: 'Tour & Travels',
        icon: <FaPlaneDeparture className="blog-cat-icon" />,
    },
    {
        name: 'Food',
        icon: <FaKitchenSet className="blog-cat-icon" />,
    },
    {
        name: 'Wildlife',
        icon: <FaCat className="blog-cat-icon" />,
    },
    {
        name: 'History & Culture',
        icon: <FaLandmark className="blog-cat-icon" />,
    },
    {
        name: 'Fair & Festivals',
        icon: <FaPersonRifle className="blog-cat-icon" />,
    },
    {
        name: 'News & Updates',
        icon: <FaLandmark className="blog-cat-icon" />,
    },
];

const Blogs = () => {
    const latestBlogs = getLatestBlogs(blogs);
    const recentFeeds = getLatestBlogs(blogs, 5);
    return (
        <>
            <div className="container-fluid bg-black blog-header text-white py-5">
                <div className="row">
                    <h2 className=" text-center logo text-capitalize">
                        rajasthan tour packages
                    </h2>
                    <h1 className="text-center text-capitalize">blog</h1>
                </div>
            </div>
            {/* <div className="container py-5 blog-container d-flex justify-content-center align-items-center flex-column">
                <div className="row input-container w-100 d-flex justify-content-center align-items-center">
                    <div className="col-12 col-lg-8 col-sm-12 py-1 input-insider">
                        {' '}
                        <input
                            type="text"
                            placeholder="Search by Category (e.g., Food, Travel, WildLife etc.)"
                            className="w-100"
                        />
                        <button type="submit" className="search-button">
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <div className="row category-container py-4 d-flex justify-content-center align-items-center w-100">
                    <div className="col-12 col-lg-8 col-sm-12 visible-categories d-flex justify-content-center align-items-center flex-wrap gap-3">
                        {blogCategory.map((cat, index) => (
                            <Link
                                className="blog-top-category"
                                href={`/blog/${cat.name.toLowerCase().replace(/ & /g, '-')}`}
                                key={index}
                            >
                                {cat.icon}
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div> */}
            <div className="container blogs">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="headings w-100 d-flex justify-content-between align-items-center pt-2">
                            <h2 className="text-capitalize p-2">
                                latest <span className="fw-normal">insights</span>
                            </h2>
                            <Link className="text-gray view" href='/'>View all →</Link>
                        </div>

                        <div className="row">
                            {latestBlogs.map((blog) => (
                                <div className="col-12 mb-4 blog" key={blog.date}>
                                    <div className="blog-card  d-flex flex-column align-items-stretch justify-content-between">
                                        <Link className="view-blog-btn" href='/'>view now</Link>
                                        <div className="blog-image-container w-100 mb-3">
                                            <img
                                                src={blog.image}
                                                alt={blog.heading}
                                                className="img-fluid"
                                            />
                                        </div>
                                        <p className="blog-category mb-0">{blog.category}</p>
                                        <Link href="/blog">
                                            <h3>{blog.heading}</h3>
                                        </Link>
                                        <p>{blog.description}</p>
                                        <div className="row d-flex justify-content-start align-items-center">
                                            <p className="text-muted w-auto blog-author mb-0">
                                                {blog.author}
                                            </p>
                                            <p className="text-muted w-auto px-0 blog-dot mb-0">▪</p>
                                            <p className="text-muted w-auto blog-date mb-0">
                                                {blog.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4 ">
                        <div className="sticky-sidebar blog-main-col px-3 overflow-scroll">
                            <div className="row p-2">
                                <h3 className="text-capitalize p-2">
                                    popular <span className="fw-normal">feeds</span>
                                </h3>
                                <hr />
                                {recentFeeds.map((feed, index) => (
                                    <Link
                                        key={index}
                                        href="/blogs"
                                        className="d-block mb-3 blog-recent"
                                    >
                                        <div className="recent-feed-item d-flex align-items-center">
                                            <div className="recent-feed-content">
                                                <p className="mb-1 fw-bold blog-title">{feed.title}</p>
                                                <p className="mb-1 text-muted small mb-0">
                                                    {feed.author}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
