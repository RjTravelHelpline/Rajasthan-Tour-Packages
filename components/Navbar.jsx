"use client";
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
} from 'react-icons/io';
import { MdCall, MdEmail, MdHome, MdOutlineClose } from 'react-icons/md';
import {
    destinationLinks,
    headerCabRentalLinks,
    headerCompanyLinks,
    headerTourByDaysLinks,
    headerTourFromLinks,
} from '@/data/linksData';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import ContactForm from './ContactForm';
import { BiChevronDown, BiHome, BiPhone, BiPhoneCall, BiSolidPhoneCall } from 'react-icons/bi';
import { RiWhatsappFill } from 'react-icons/ri';
import { IoCall, IoNavigateCircle, IoNavigateSharp } from 'react-icons/io5';

const Navbar = () => {
    const location = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);
    const [ismobile, setIsmobile] = useState(false);
    const [showNavigation, setShowNavigation] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [contactPopup, setContactPopup] = useState(false);
    const [show, setShow] = useState(false); // Modal visibility state
    const [selectedPackage, setSelectedPackage] = useState(''); // To store selected package title

    const visibleDestinations = destinationLinks;

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
                setIsmobile(window.innerWidth <= 1200);
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

    // Contact popup handling
    const showContactPopup = () => {
        setContactPopup((prev) => !prev);
    };
    const translateY = contactPopup ? '4px' : '-10px';
    const visibility = contactPopup ? 'visible' : 'hidden';
    const opacity = contactPopup ? '1' : '0';

    const handleClose = () => setShow(false);
    const handleShow = (title) => {
        setSelectedPackage(title);
        setShow(true);
    };

    // Navigation position handling
    const isHome = location === '/';
    const navClass = isHome ? 'fixed' : 'sticky';
    const navColorClass = isHome ? 'bg-transparent' : 'bg-black !important';
    return (
        <>
            <section
                className={`container-fluid header d-flex justify-content-center align-items-center px-0 ${navColorClass}`}
            >
                <Row
                    className={`py-2 w-100 row px-0 d-flex justify-content-center align-items-center ${navClass} ${isScrolled ? 'scrolled' : ''
                        }`}
                >
                    <Col className="col d-flex flex-column justify-content-center align-items-start logo-container">
                        <Link href="/">
                            <h3 className="text-capitalize mb-0 text-nowrap logo">
                                Rajasthan tour packages
                            </h3>
                            <p className="mb-0 text-uppercase text-center logo2">
                                Book ▪ Travel ▪ Appreciate
                            </p>
                        </Link>
                    </Col>
                    <Col className="col d-flex justify-content-end align-items-center nav-links mx-0 px-0 gap-4">
                        <Link href='/'><button
                            className="d-flex justify-content-center align-items-center rounded-5 shadow-none contact-top-toggle-button bg-transparent p-2 text-white"
                            aria-label='go socials'
                            style={{ border: '1px solid var(--color-gray)' }}
                        >
                            <MdHome className="icon color-tertary" />

                        </button>
                        </Link>
                        <div className="nav-item">
                            <span className="px-0 mx-0 py-4 text-nowrap text-uppercase anchor-link">
                                tour by days <IoIosArrowDown className="dropdown-icon" />
                            </span>
                            <div className="dropdown-menu">
                                {headerTourByDaysLinks.map((link, index) => (
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
                                    href="/rajasthan-tour-packages"
                                    className="nav-more-btn text-center position-absolute bottom-0 bg-tertary w-100 text-white rounded-0"
                                >
                                    explore more
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <span className="px-0 mx-0 py-4 text-nowrap text-uppercase anchor-link">
                                Tour by Cities <IoIosArrowDown className="dropdown-icon" />
                            </span>
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
                                    className="nav-more-btn text-center position-absolute bottom-0 bg-tertary w-100 text-white rounded-0">
                                    explore more
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <span className="px-0 mx-0 py-4 text-nowrap text-uppercase anchor-link">
                                Destinations <IoIosArrowDown className="dropdown-icon" />
                            </span>
                            <div className="dropdown-menu">
                                {destinationLinks.slice(0, 5).map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.path}
                                        className="w-100 d-block d-flex justify-content-start align-items-center gap-1"
                                    >
                                        <icon className="dropdown-icon02">≻</icon>
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="nav-item">
                            <span className="px-0 mx-0 py-4 text-nowrap text-uppercase anchor-link">
                                Cab Rental <IoIosArrowDown className="dropdown-icon" />
                            </span>
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
                            <span className="px-0 mx-0 py-4 text-nowrap text-uppercase anchor-link">
                                Company <IoIosArrowDown className="dropdown-icon" />
                            </span>
                            <div className="dropdown-menu">
                                {headerCompanyLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.path}
                                        className="w-100 d-block d-flex justify-content-start align-items-center gap-1"
                                    >
                                        <icon className="dropdown-icon02">≻</icon>
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <>
                        <Col className="col d-flex justify-content-center align-items-center">
                            <div
                                className={`col d-flex justify-content-end align-items-center ${!ismobile ? 'gap-2' : 'gap-1'
                                    }`}
                            >
                                <button
                                    className="d-flex justify-content-center align-items-center rounded-4 shadow-none contact-top-toggle-button  bg-transparent p-3 text-white"
                                    onClick={showContactPopup}
                                    aria-label='go socials'
                                    style={{ border: '1px solid var(--color-gray)' }}
                                >
                                    {contactPopup ? (
                                        <MdOutlineClose className="icon" />
                                    ) : (
                                        <>
                                            <BiSolidPhoneCall className="icon me-1 color-tertary" />
                                            <BiChevronDown />
                                        </>
                                    )}
                                </button>
                                {!ismobile && (
                                    <>
                                        <button
                                            className="d-flex justify-content-center align-items-center gap-1 fw-bold fs-6 text-capitalize web-title"
                                            onClick={handleShow}
                                        >
                                            Plan a Tour
                                            <IoNavigateSharp className="icon text-white" />
                                        </button>
                                    </>
                                )}
                                {ismobile && (
                                    <>
                                        <button
                                            className="d-flex justify-content-center align-items-center p-3 rounded-5 bg-black shadow-none mobile-ham"
                                            onClick={handleNavigation}
                                        >
                                            <FaGripLines />
                                        </button>
                                    </>
                                )}
                            </div>
                        </Col>
                    </>
                    {/* opens the contact popup */}
                    <Row className="row justify-content-end px-4">
                        <div
                            className={`row contact-popup bg-white text-black d-flex flex-column align-items-left justify-content-start fixed mt-5 w-auto pt-4 px-0`}
                            style={{
                                transform: `translateY(${translateY})`,
                                visibility: `${visibility}`,
                                opacity: `${opacity}`,
                                transition: 'transform 0.2s ease-in-out',
                            }}
                        >
                            <div className="bg-white w-100 rounded-4 insider p-2">
                                <div className="col-12 w-100 d-flex flex-column gap-0">
                                    <a
                                        href="tel:+91-9024337038"
                                        target="_blank"
                                        className=" d-block p-3 fw-bold social-icon d-flex align-items-center gap-2"
                                    >
                                        <span className="d-flex justify-content-center bg-tertary-down color-tertary p-2 rounded-5 icon fs-3">
                                            <IoCall />{' '}
                                        </span>
                                        <span>(+91)-9024337038</span>
                                    </a>
                                    <a
                                        href="https://wa.me/919166555888"
                                        target="_blank"
                                        className=" d-block p-3 fw-bold social-icon d-flex align-items-center gap-2"
                                    >
                                        <span className="d-flex justify-content-center bg-tertary-down color-tertary p-2 rounded-5 icon fs-3">
                                            <RiWhatsappFill />{' '}
                                        </span>
                                        <span>(+91)-9166555888</span>
                                    </a>
                                    <a
                                        href="mailto:mail@rajasthantravelhelpline.com"
                                        target="_blank"
                                        className="text-lowercase p-3 fw-bold social-icon d-flex align-items-center gap-2"
                                    >
                                        <span className="d-flex justify-content-center bg-tertary-down color-tertary p-2 rounded-5 icon fs-3">
                                            <MdEmail />{' '}
                                        </span>
                                        <span>mail@rajasthantravelhelpline.com</span>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Row>
            </section>
            <Container
                className={`mobile-navigation  px-0 pt-5 ${showNavigation ? 'show-navigation' : ''
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

                <Row className="row flex-column gap-4 p-4 w-100 px-2">
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
                            href="/gallery"
                            onClick={() => {
                                setShowNavigation(false);
                            }}
                            className="route"
                        >
                            our gallery
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
                </Row>
                <Row className="w-100 row p-0 py-5 mobile-navigation-footer d-flex justify-content-center align-items-center bg-black text-white position-relative">
                    <p className="position-absolute p-2 w-auto h-20 top-0 z-1 bg-tertary"></p>
                    <Col className="w-100 col-12 py-3 d-flex flex-column justify-content-center align-items-center">
                        <h3 className="text-capitalize text-center mb-0 logo text-nowrap">
                            Rajasthan tour packages
                        </h3>
                        <p className="mb-0 text-center text-uppercase logo2">
                            Book ▪ Travel ▪ Appreciate
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* Modal for Contact Form */}
            <Modal size='lg'
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
        </>
    );
};

export default Navbar;