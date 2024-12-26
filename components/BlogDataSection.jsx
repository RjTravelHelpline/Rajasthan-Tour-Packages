"use client"
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { formatDate } from "@/Utils/util";
import { PiUser } from "react-icons/pi";
import { BiCalendar } from "react-icons/bi";

export const BlogDataSection = ({ category, Data, icon, subhead }) => {
    const [showAll, setShowAll] = useState(false);
    const visibleTours = showAll ? Data : Data.slice(0, 3);

    // Function to toggle visibility
    const toggleShowAll = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };
    return (
        <>
            <div className="container-fluid px-0 py-4 blog-data-section">
                <div className="container packages">
                    <div
                        className="row tour my-3 justify-content-center align-items-stretch"
                        id={`from-${category}`}
                    >
                        <div className="row py-2 d-flex align-items-stretch justify-content-start px-2">
                            <div
                                className='col-12 d-flex flex-column align-items-start px-2'
                            >
                                <p className="color-tertary bg-tertary-down p-2 d-flex rounded-3 w-auto"> {icon} </p>
                                <h2 className="text-capitalize fw-normal w-auto">
                                    <span className="fw-bold blog-category-head d-block text-capitalize web-title">{category}</span>
                                </h2>
                                <p className="mb-0 text-capitalize blog-section-subhead">{subhead}</p>
                            </div>
                        </div>
                        <div className="row py-2 d-flex align-items-stretch justify-content-center px-2 blogs">
                            <div className="row py-2 blog-data-container px-0">
                                {visibleTours.map((blog) => {
                                    const visibleDescription =
                                        blog.description.split(' ').slice(0, 20).join(' ') + '...';
                                    return (
                                        <>
                                            <div
                                                className={`col-lg-4 col-md-6 col-sm-12 overflow-auto d-flex justify-content-center py-2 px-2`}
                                                key={blog.date}
                                            >
                                                <Link href={`/blog/${blog.slug}`} className="w-100 mb-1 rounded-4 blog-link overflow-hidden">
                                                    <div className="blog-card w-100 d-flex flex-column justify-content-between w-100">
                                                        <div className="blog-image-container w-100">
                                                            <Image
                                                                src={blog.image}
                                                                alt={blog.heading}
                                                                className="img-fluid"
                                                                width={800}
                                                                height={600}
                                                            />
                                                        </div>
                                                        <div className="blog-content p-3">
                                                            <p className="blog-category mb-0">{blog.category}</p>
                                                            <h3 className="blog-heading web-title">{blog.heading}</h3>
                                                            <p className="mb-2 blog-desc">{visibleDescription}</p>
                                                            <div className="row d-flex justify-content-start w-100 align-items-center">
                                                                <p className="text-capitalize w-auto blog-author mb-0 d-flex justify-content-center align-items-center">
                                                                    <PiUser className="me-2 color-tertary" />{blog.author}
                                                                </p>
                                                                <p className="w-auto px-0 blog-dot mb-0">
                                                                    ▪
                                                                </p>
                                                                <p className="w-auto blog-date mb-0 d-flex justify-content-center align-items-center">
                                                                    <BiCalendar className="me-2 color-tertary" />{formatDate(blog.date)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </>
                                    );
                                })}
                                <div
                                    className='blog-divider mx-2 mt-2'
                                >
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex w-100">
                            <div className="col-12 px-3 justify-content-between align-items-center">
                                {/* <hr /> */}
                                <Link
                                    href={`/blog/categories/${category.replace(/&/g, 'and')}`}
                                    className="explore-more text-white card-button w-auto d-flex justify-content-end align-items-center gap-2"
                                >
                                    Explore more <MdArrowOutward />
                                </Link>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </>
    );
};