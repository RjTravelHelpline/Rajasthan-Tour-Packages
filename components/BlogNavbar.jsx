"use client";
import { blogs } from '@/data/Blogs';
import { blogCategories } from '@/Utils/blog.util';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaGripLines, FaGripLinesVertical, FaSearch } from 'react-icons/fa';
import { IoMdArrowDropdown, IoMdClose } from 'react-icons/io';
import ContactForm from './ContactForm';
import { FaMessage } from 'react-icons/fa6';
import SearchBar from './SearchBar';
import { IoClose } from 'react-icons/io5';

const BlogNavbar = () => {
    const [show, setShow] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [ismobile, setIsmobile] = useState(false);
    const [showNavigation, setShowNavigation] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedPackage, setSelectedPackage] = useState('');
    const [showSearch, setShowSearch] = useState(false);


    // Handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                const scrollTop = window.scrollY;
                setIsScrolled(scrollTop > 30);
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
        setActiveIndex(activeIndex === index ? null : index);
    };



    const handleClose = () => setShow(false);
    const handleShow = (title) => {
        setSelectedPackage(title);
        setShow(true);
    };

    const handleCloseSearch = () => setShowSearch(false);
    const handleShowSearch = () => setShowSearch(true);
    return (
        <>
            <div
                className={`container-fluid blog-nav`}
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
                    <div className="col d-flex justify-content-center align-items-center nav-links">
                        <div className="nav-item">
                            <Link
                                href="/blog"
                                className="px-0 mx-3 py-4 text-nowrap text-uppercase"
                                activeclassname="active"
                            >
                                home
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link
                                href="/about-us"
                                className="px-0 mx-3 py-4 text-nowrap text-uppercase"
                                activeclassname="active"
                            >
                                about us
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link
                                href="/contact-us"
                                className="px-0 mx-3 py-4 text-nowrap text-uppercase"
                                activeclassname="active"
                            >
                                contact us
                            </Link>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center px-2">
                        <div
                            className={`col d-flex justify-content-end align-items-center ${!ismobile ? 'gap-3' : 'gap-1'
                                }`} >
                            <>
                                <button className="d-flex justify-content-center align-items-center p-3 rounded-5 shadow-none bg-white color-tertary" onClick={handleShowSearch}>
                                    <FaSearch />
                                </button>
                                {!ismobile && (
                                    <button
                                        className="d-flex justify-content-center align-items-center gap-2 rounded-4" style={{ fontWeight: '500', textTransform: "capitalize" }}
                                        onClick={handleShow}
                                    >
                                        <FaMessage className="icon text-black" />
                                        enquiry

                                    </button>
                                )}
                            </>

                        </div>
                    </div>
                    {ismobile && (
                        <button
                            className="d-flex justify-content-center align-items-center p-3 rounded-5 bg-black shadow-none mobile-ham blog-mobile-ham "
                            onClick={handleNavigation}
                        >
                            <FaGripLines />
                        </button>
                    )}
                </div>
            </div >


            {/* mobile navigation */}
            < div
                className={`container mobile-navigation  px-0 pt-5 ${showNavigation ? 'show-navigation' : ''
                    }`
                }
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
                                        href={`/blog/categories${link.path}`}
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
                            home
                        </Link>
                    </div>
                    <div className="nav-mobile-item d-flex justify-content-center align-items-start flex-column">
                        <Link
                            href="/about-us"
                            onClick={() => {
                                setShowNavigation(false);
                            }}
                            className="route"
                        >
                            about us
                        </Link>
                    </div>
                    <div className="nav-mobile-item d-flex justify-content-center align-items-start flex-column">
                        <Link
                            href="/contact-us"
                            onClick={() => {
                                setShowNavigation(false);
                            }}
                            className="route"
                        >
                            contact us
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
            </div >



            {/* Modal for Contact Form */}
            < Modal

                show={show}
                onHide={handleClose}
                centered
                className="contact-model w-100"
            >
                <Modal.Body className="model-body ">
                    <ContactForm onSuccess={handleClose} />{' '}
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center align-items-center w-100 border-0 model-close pt-0">
                    <button
                        className="bg-black d-flex justify-content-center align-items-center p-3 border-0 rounded-5"
                        onClick={handleClose}
                    >
                        <IoMdClose />
                    </button>
                </Modal.Footer>
            </Modal>
            {/* search model */}
            <Modal size='lg' show={showSearch} style={{ padding: '20px' }} onHide={handleCloseSearch} className='search-modal'>
                <Modal.Header className='d-flex flex-column p-4 w-auto'>
                    <h4 className='text-uppercase w-100 text-center fw-normal d-flex justify-content-center align-items-center gap-2'> <hr style={{ borderColor: 'var(--color-tertary)' }} />search <span className='color-tertary fw-bold'>blog</span> <hr style={{ borderColor: 'var(--color-tertary)' }} /></h4>
                    <p className='text-lowercase w-100 text-center mb-0'>what you are looking for</p>
                </Modal.Header>
                <Modal.Dialog style={{ width: '100%' }} >
                    <Modal.Body style={{ width: '100%' }}>
                        <SearchBar blogs={blogs} styles="rounded-5 w-100" placeholder="search here" autofocus={true} />
                    </Modal.Body>
                </Modal.Dialog>
                <Modal.Footer>
                    <Button onClick={handleCloseSearch} className='bg-black rounded-5 text-white d-flex jutify-content-center align-items center p-3 border-0'>
                        <IoClose />
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
};

export default BlogNavbar;
