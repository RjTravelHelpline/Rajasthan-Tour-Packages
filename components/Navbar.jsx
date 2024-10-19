"use client"
import { useEffect, useState } from 'react';
import {
    FaFacebook,
    FaGripLines,
    FaInstagram,
    FaLocationArrow,
} from 'react-icons/fa6';
import {
    IoIosArrowDown,
    IoLogoWhatsapp,
    IoMdArrowDropdown,
    IoMdCall,
    IoMdClose,
    IoMdPerson,
} from 'react-icons/io';
import { MdEmail, MdOutlineClose } from 'react-icons/md';
import {
    destinationLinks,
    headerCabRentalLinks,
    headerTourByDaysLinks,
    headerTourFromLinks,
} from '../data/linksData';

import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 30); // Adjust the scroll value as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showNavigation, setShowNavigation] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const visibleDestinations = destinationLinks.slice(0, 5);

    const handleNavigation = () => {
        setShowNavigation((prevState) => !prevState);
    };

    const [ismobile, setIsmobile] = useState(window.innerWidth <= 1000);
    useEffect(() => {
        // Ensure sections are open by default on larger screens
        const handleResize = () => {
            if (window.innerWidth <= 1200) {
                setIsmobile(true);
            } else {
                setIsmobile(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // mobile-navigation
    const handleMobileDropdown = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active class
    };

    // navigation position handling
    const isHome = location.pathname === '/';
    const navClass = isHome ? 'fixed' : 'sticky';
    const navColorClass = isHome ? 'bg-transparent' : 'bg-black !important';

    //  contact popup
    const [contactPopup, setContactPopup] = useState(false);

    let showContactPopup = () => {
        setContactPopup(!contactPopup);
    };
    const translateY = contactPopup ? '4px' : '-500px';
    const scale = contactPopup ? '1' : '0';

    // contact-form

    const [show, setShow] = useState(false); // Modal visibility state
    const [selectedPackage, setSelectedPackage] = useState(''); // To store selected package title

    const handleClose = () => setShow(false);
    const handleShow = (title) => {
        setSelectedPackage(title);
        setShow(true);
    };
    return (
        <>
            <div
                className={`container-fluid header d-flex justify-content-center align-items-center px-0 ${navColorClass}`}
            >
                <div
                    className={`w-100 row d-flex justify-content-center align-items-center  ${navClass} ${isScrolled ? 'scrolled' : ''
                        }`}
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
                    <div className="col d-flex justify-content-start align-items-center nav-links">
                        <div className="nav-item">
                            <a className="px-0 mx-3 py-4 text-nowrap text-uppercase">
                                tour by days <IoIosArrowDown className="dropdown-icon" />
                            </a>
                            <div className="dropdown-menu">
                                {headerTourByDaysLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.path}
                                        className="w-100 d-block d-flex justify-content-start align-items-center gap-1"
                                    >
                                        {/* <MdKeyboardDoubleArrowRight /> */}
                                        <icon className="dropdown-icon02">≻</icon>
                                        {link.text}
                                    </Link>
                                ))}
                                <div className="w-100 py-4 position-relative"></div>
                                <Link
                                    href="/rajasthan-tour-packages"
                                    className="nav-more-btn text-center position-absolute bottom-0 bg-tertary w-100 text-white rounded-0"
                                >
                                    explore more
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <a className="px-0 mx-3 py-4 text-nowrap text-uppercase">
                                Tour by Cities <IoIosArrowDown className="dropdown-icon" />
                            </a>
                            <div className="dropdown-menu">
                                {headerTourFromLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.path}
                                        className="w-100 d-block d-flex justify-content-start align-items-center gap-1"
                                    >
                                        <icon className="dropdown-icon02">≻</icon>
                                        {link.text}
                                    </Link>
                                ))}
                                <div className="w-100 py-4 position-relative"></div>
                                <Link
                                    href="/rajasthan-tour-by-cities"
                                    className="nav-more-btn text-center position-absolute bottom-0 bg-tertary w-100 text-white rounded-0"
                                >
                                    explore more
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <a className="px-0 mx-3 py-4 text-nowrap text-uppercase">
                                Cab Rental <IoIosArrowDown className="dropdown-icon" />
                            </a>
                            <div className="dropdown-menu">
                                {headerCabRentalLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.path}
                                        className="w-100 d-block d-flex justify-content-start align-items-center gap-1"
                                    >
                                        <icon className="dropdown-icon02">≻</icon>
                                        {link.text}
                                    </Link>
                                ))}
                                <div className="w-100 py-4 position-relative"></div>
                                <Link
                                    href="/rajasthan-cab-rental"
                                    className="nav-more-btn text-center position-absolute bottom-0 bg-tertary w-100 text-white rounded-0"
                                >
                                    explore more
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <Link
                                href="/about-us"
                                className="px-0 mx-3 py-4 text-nowrap text-uppercase"
                                activeclassname="active"
                            >
                                About Us
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link
                                href="/blog"
                                className="px-0 mx-3 py-4 text-nowrap text-uppercase"
                                activeclassname="active"
                            >
                                Blog
                            </Link>
                        </div>
                    </div>
                    <>
                        <div className="col d-flex justify-content-end align-items-end">
                            <div
                                className={`col d-flex justify-content-end align-items-center ${!ismobile ? 'gap-3' : 'gap-1'
                                    }`}
                            >
                                {!ismobile && (
                                    <button
                                        className="d-flex justify-content-center align-items-center gap-2"
                                        onClick={handleShow}
                                    >
                                        <FaLocationArrow className="icon text-black" />
                                        Plan a trip
                                    </button>
                                )}
                                <button
                                    className="d-flex justify-content-center align-items-center p-3 rounded-5  shadow-none contact-top-toggle-button"
                                    onClick={showContactPopup}
                                >
                                    {/* <IoMdCall className="icon text-white" /> */}
                                    {contactPopup ? (
                                        <MdOutlineClose className="icon " />
                                    ) : (
                                        <IoMdPerson className="icon " />
                                    )}
                                </button>
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
                    </>
                    {/* opens the contact popup */}

                    <div className="row justify-content-end px-4">
                        <div
                            className={`row contact-popup bg-white text-black d-flex flex-column align-items-left justify-content-start fixed mt-5
                w-auto pt-4 px-0`}
                            style={{
                                transform: `translateY(${translateY}) scale(${scale})`,
                                transformOrigin: `top right`,
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        >
                            <div className="bg-white text-black w-100 border-2 border-black rounded-4 p-4 insider">
                                <div className="col-12 w-100 bg-white d-flex flex-column gap-0 px-0">
                                    <a
                                        href="tel:+91-9024337038"
                                        target="_blank"
                                        className=" d-block p-3 fw-bold social-icon"
                                    >
                                        <IoMdCall className="mx-0 bg-black text-white p-2 fs-1 rounded-5 icon" />{' '}
                                        <span className="px-2"></span>+91-9024337038
                                    </a>
                                    <a
                                        href="https://wa.me/919166555888"
                                        target="_blank"
                                        className=" d-block p-3 fw-bold social-icon"
                                    >
                                        <IoLogoWhatsapp className="mx-0 bg-black text-white p-2 fs-1 rounded-5 icon" />{' '}
                                        <span className="px-2"></span>+91-9166555888
                                    </a>
                                    <a
                                        href="mailto:mail@rajasthantravelhelpline.com"
                                        target="_blank"
                                        className="text-lowercase p-3 fw-bold social-icon"
                                    >
                                        <MdEmail className="mx-0 bg-black text-white p-2 fs-1 rounded-5 icon" />{' '}
                                        <span className="px-2"></span>
                                        mail@rajasthantravelhelpline.com
                                    </a>
                                    <a
                                        href="mailto:mail@rajasthantravelhelpline.com"
                                        target="_blank"
                                        className="text-lowercase p-3 fw-bold social-icon"
                                    >
                                        <FaInstagram className="mx-0 bg-black text-white p-2 fs-1 rounded-5 icon" />{' '}
                                        <span className="px-2"></span>instagram
                                    </a>
                                    <a
                                        href="mailto:mail@rajasthantravelhelpline.com"
                                        target="_blank"
                                        className="text-lowercase p-3 fw-bold social-icon"
                                    >
                                        <FaFacebook className="mx-0 bg-black text-white p-2 fs-1 rounded-5 icon" />{' '}
                                        <span className="px-2"></span>facebook
                                    </a>
                                    <div className="col-12 p-2">
                                        <Link
                                            href="/contact-us"
                                            className="text-uppercase d-flex align-items-start justify-content-start gap-2 w-auto m-auto px-3"
                                        >
                                            <p className="mb-0">contact us</p>{' '}
                                            <span className="fw-bold">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                    {showNavigation ? <IoMdClose /> : <FaGripLines />}
                </button>
                <button
                    className="d-flex justify-content-center align-items-center p-3 rounded-5 bg-black shadow-none mobile-home-ham"
                    onClick={() => {
                        setShowNavigation(false);
                    }}
                >
                    <FaHome />
                </button>

                <div className="row flex-column gap-4 p-4 w-100 px-2">
                    <div
                        className={`nav-mobile-item d-flex justify-content-center align-items-center flex-column ${activeIndex === 1 ? 'active' : ''
                            }`}
                        onClick={() => handleMobileDropdown(1)}
                    >
                        {' '}
                        <p className="nav-mobile-link text-capitalize mb-0 cursor-pointer w-100 d-flex justify-content-between align-items-center">
                            rajasthan tour by days{' '}
                            <IoMdArrowDropdown className="dropdown-icon" />
                        </p>
                        <div className="mobile-dropdown-menu py-2 w-100">
                            {headerTourByDaysLinks.map((link, index) => (
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
                            ))}
                            <Link
                                href="/rajasthan-tour-packages"
                                className="more-btn nav-more-btn"
                                onClick={() => {
                                    setShowNavigation(false);
                                }}
                            >
                                explore more...
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`nav-mobile-item d-flex justify-content-center align-items-center flex-column ${activeIndex === 2 ? 'active' : ''
                            }`}
                        onClick={() => handleMobileDropdown(2)}
                    >
                        <p className="nav-mobile-link cursor-pointer fw-normal text-capitalize mb-0  w-100 d-flex justify-content-between align-items-center">
                            rajasthan tour by cities{' '}
                            <IoMdArrowDropdown className="dropdown-icon" />
                        </p>
                        <div className="mobile-dropdown-menu py-2 w-100">
                            {headerTourFromLinks.map((link, index) => (
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
                            ))}
                            <Link
                                onClick={() => {
                                    setShowNavigation(false);
                                }}
                                href="/rajasthan-tour-by-cities"
                                className="more-btn nav-more-btn"
                            >
                                explore more...
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`nav-mobile-item d-flex justify-content-center align-items-center flex-column ${activeIndex === 3 ? 'active' : ''
                            }`}
                        onClick={() => handleMobileDropdown(3)}
                    >
                        <p className="nav-mobile-link cursor-pointer fw-normal text-capitalize mb-0  w-100 d-flex justify-content-between align-items-center">
                            rajasthan cab rental
                            <IoMdArrowDropdown className="dropdown-icon" />
                        </p>
                        <div className="mobile-dropdown-menu py-2 w-100">
                            {headerCabRentalLinks.map((link, index) => (
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
                            ))}
                            <Link
                                onClick={() => {
                                    setShowNavigation(false);
                                }}
                                href="/rajasthan-cab-rental"
                                className="more-btn nav-more-btn"
                            >
                                explore more...
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`nav-mobile-item d-flex justify-content-center align-items-center flex-column ${activeIndex === 4 ? 'active' : ''
                            }`}
                        onClick={() => handleMobileDropdown(4)}
                    >
                        <p className="nav-mobile-link cursor-pointer fw-normal text-capitalize mb-0  w-100 d-flex justify-content-between align-items-center">
                            rajasthan destinations{' '}
                            <IoMdArrowDropdown className="dropdown-icon" />
                        </p>
                        <div className="mobile-dropdown-menu py-2 w-100">
                            {visibleDestinations.map((link, index) => {
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
                            <Link
                                onClick={() => {
                                    setShowNavigation(false);
                                }}
                                href="/destination"
                                className="more-btn nav-more-btn"
                            >
                                explore more...
                            </Link>
                        </div>
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
                            href="/blog"
                            onClick={() => {
                                setShowNavigation(false);
                            }}
                            className="route"
                        >
                            blog
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
            </div>
        </>
    );
};

export default Navbar;
