"use client";
import { blogCategories } from '@/data/Blogs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaGripLines, FaGripLinesVertical, FaHome } from 'react-icons/fa';
import { IoIosArrowDown, IoMdArrowDropdown, IoMdClose } from 'react-icons/io';

const BlogNavbar = () => {
    const [show, setShow] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [ismobile, setIsmobile] = useState(false);
    const [showNavigation, setShowNavigation] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [contactPopup, setContactPopup] = useState(false);

    // Handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                const scrollTop = window.scrollY;
                setIsScrolled(scrollTop > 30); // Adjust the scroll value as needed
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle window resize events
    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                setIsmobile(window.innerWidth <= 1000);
            }
        };

        // Initial check for the window size
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Navigation handling
    const handleNavigation = () => {
        setShowNavigation((prevState) => !prevState);
    };

    // Mobile dropdown handling
    const handleMobileDropdown = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active class
    };
    return (
        <>
            <div
                className={`container-fluid blog-nav d-flex justify-content-center align-items-center px-0 bg-tertary `}
            >
                <div
                    className={`w-100 row d-flex justify-content-between align-items-center`}
                >
                    <div className="col d-flex flex-column justify-content-center align-items-start logo-container">
                        <Link href="/">
                            <h3 className="text-capitalize mb-0 text-nowrap logo">
                                Rajasthan tour packages
                            </h3>
                            <p className="mb-0 text-uppercase text-center logo2">
                                Book ▪ Travel ▪ Appreciate
                            </p>
                        </Link>
                    </div>
                    <div className="col d-flex justify-content-end align-items-center nav-links">
                        <div className="nav-item blog-nav-item">
                            <span className="px-0 mx-3 py-4 text-nowrap text-uppercase anchor-link">
                                categories <IoIosArrowDown className="dropdown-icon" />
                            </span>
                            <div className="dropdown-menu blog-nav-dropdown">
                                {blogCategories.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={`/blog/categories/${link.path}`}
                                        className="w-100 d-block d-flex justify-content-start align-items-center gap-1"
                                    >
                                        <icon className="dropdown-icon02">≻</icon>
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="nav-item">
                            <Link
                                href="/"
                                className="px-0 mx-3 py-4 text-nowrap text-uppercase"
                                activeclassname="active"
                            >
                                blog home
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link
                                href="/"
                                className="px-0 mx-3 py-4 text-nowrap text-uppercase"
                                activeclassname="active"
                            >
                                home
                            </Link>
                        </div>

                    </div>
                    {ismobile && (
                        <button
                            className="d-flex justify-content-center align-items-center p-3 rounded-5 bg-black shadow-none mobile-ham"
                            onClick={handleNavigation}
                        >
                            <FaGripLines />
                        </button>
                    )}
                </div>
            </div>


            {/* mobile navigation */}
            <div
                className={`container mobile-navigation  px-0 pt-5 ${showNavigation ? 'show-navigation' : ''
                    }`}
            >
                <button
                    className="d-flex justify-content-center align-items-center p-3 rounded-5 bg-black shadow-none mobile-close-ham"
                    onClick={() => {
                        setShowNavigation(false);
                    }}
                >
                    {showNavigation ? <IoMdClose /> : <FaGripLinesVertical />}
                </button>
                <div className="row flex-column gap-4 p-4 w-100 px-2">
                    <div
                        className={`nav-mobile-item d-flex justify-content-center align-items-center flex-column ${activeIndex === 4 ? 'active' : ''
                            }`}
                        onClick={() => handleMobileDropdown(4)}
                    >
                        <p className="nav-mobile-link cursor-pointer fw-normal text-capitalize mb-0  w-100 d-flex justify-content-between align-items-center">
                            categories{' '}
                            <IoMdArrowDropdown className="dropdown-icon" />
                        </p>
                        <div className="mobile-dropdown-menu py-2 w-100">
                            {blogCategories.map((link, index) => {
                                return (
                                    <Link
                                        onClick={() => {
                                            setShowNavigation(false);
                                        }}
                                        key={index}
                                        href={link.path}
                                        className="w-100 d-block d-flex justify-content-start align-items-center gap-1"
                                    >
                                        <icon className="dropdown-icon02">≻</icon>
                                        {link.text}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="nav-mobile-item d-flex justify-content-center align-items-start flex-column">
                        <Link
                            href="/blog"
                            onClick={() => {
                                setShowNavigation(false);
                            }}
                            className="route"
                        >
                            blog home
                        </Link>
                    </div>
                    <div className="nav-mobile-item d-flex justify-content-center align-items-start flex-column">
                        <Link
                            href="/"
                            onClick={() => {
                                setShowNavigation(false);
                            }}
                            className="route"
                        >
                            home
                        </Link>
                    </div>

                    <hr />
                </div>
                <div className=" w-100 row p-0 py-5 mobile-navigation-footer d-flex justify-content-center align-items-center bg-black text-white position-relative">
                    <p className="position-absolute p-2 w-auto h-20 top-0 z-1 bg-tertary"></p>
                    <div className="w-100 col-12 py-3 d-flex flex-column justify-content-center align-items-center">
                        <h3 className="text-capitalize text-center mb-0 logo text-nowrap">
                            Rajasthan tour packages
                        </h3>
                        <p className="mb-0 text-center text-uppercase logo2">
                            Book ▪ Travel ▪ Appreciate
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogNavbar;
