"use client"
import { MdArrowOutward, MdExpandLess, MdExpandMore } from "react-icons/md";
import TourPackages from "./TourPackages";
import Link from "next/link";
import { useState } from "react";
import BlogsSection from "./BlogsSection";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";

export const BlogDataSection = ({ category, Data, icon, subhead }) => {
    const [showAll, setShowAll] = useState(false);
    const visibleTours = showAll ? Data : Data.slice(0, 3);

    // Function to toggle visibility
    const toggleShowAll = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };
    return (
        <>
            <div className="container-fluid px-0 section-02 pt-2">
                <div className="container packages">
                    <div
                        className="row tour my-3 justify-content-center align-items-stretch"
                        id={`from-${category}`}
                    >
                        <div className="row w-100 py-3 d-flex flex-column px-0">
                            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                                <p className="mb-0 text-capitalize">{subhead}</p>
                                <div className="w-100 d-flex justify-content-center align-items-center">
                                    <div className="col-8 d-flex justify-content-center align-items-center gap-2">
                                        <hr style={{ borderColor: 'var(--color-black)' }} />
                                        <p className="mb-0 color-tertary"> {icon} </p>
                                        <hr style={{ borderColor: 'var(--color-black)' }} />
                                    </div>
                                </div>
                                <h2 className="text-capitalize fw-normal">
                                    <span className="fw-bold blog-subhead-gradient d-block text-center text-uppercase">{category.replace(/-/g, ' ')}</span>
                                </h2>
                            </div>
                        </div>
                        <div className="row py-2 d-flex align-items-stretch justify-content-center px-2 blogs">
                            <div className="row d-flex justify-content-center py-2">
                                {visibleTours.map((blog) => {
                                    const visibleDescription =
                                        blog.description.split(' ').slice(0, 5).join(' ') + '...';
                                    return (
                                        <div
                                            className={`col-12 col-lg-6 col-md-6 col-sm-12 px-0 overflow-auto d-flex justify-content-center py-2 px-2`}
                                            key={blog.date}
                                        >
                                            <Link href={`/blog/${blog.slug}`} className="w-100 mb-1 p-2 px-2 rounded-4" style={{ border: '1px solid #dbdbdb4f', backgroundColor: 'rgb(251,214,200)' }}>
                                                <div className="blog-card w-100 d-flex flex-column justify-content-between rounded-4 w-100 p-2">
                                                    <div className="blog-image-container w-100 mb-3">
                                                        <Image
                                                            src={blog.image}
                                                            alt={blog.heading}
                                                            className="img-fluid"
                                                            width={800}
                                                            height={600}
                                                        />
                                                    </div>
                                                    <p className="blog-category mb-0">{blog.category}</p>
                                                    <h3 className="blog-heading">{blog.heading}</h3>
                                                    <p className="mb-2">{visibleDescription}</p>
                                                    <div className="row d-flex justify-content-start w-100 align-items-center">
                                                        <p className="text-muted w-auto blog-author mb-0">
                                                            {blog.author}
                                                        </p>
                                                        <p className="text-muted w-auto px-0 blog-dot mb-0">
                                                            ▪
                                                        </p>
                                                        <p className="text-muted w-auto blog-date mb-0">
                                                            {blog.date}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="row d-flex w-100 justify-content-between align-items-center w-100">
                            <button
                                onClick={toggleShowAll}
                                className="more-btn bg-transparent d-flex justify-content-center align-items-center gap-2"
                            >
                                {showAll ? (
                                    <>
                                        Show less <MdExpandLess />
                                    </>
                                ) : (
                                    <>
                                        View all <MdExpandMore />
                                    </>
                                )}
                            </button>
                            <Link
                                href={`/blog/categories/${category}`}
                                className="explore-btn card-button w-auto d-flex justify-content-between align-items-center gap-2"
                            >
                                Explore now <MdArrowOutward />
                            </Link>
                        </div >
                    </div>
                </div>
            </div>
        </>
    );
};