"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { FaInstagram, FaFacebook, FaTripadvisor } from 'react-icons/fa';
import {
    companyLinks,
    exclusiveTourPackageLinks,
    themeTourPackageLinks,
    cabRentalLinks,
    destinationLinks,
    tourByCitiesLinks,
    tourByDaysLinks,
    usefulLinks,
} from '../data/linksData';
import { IoIosMail, IoMdClose, } from 'react-icons/io';
// import BackToTop from './BackToTop';
import Image from 'next/image';
import Link from 'next/link';
import BackToTop from './BackToTop';
import ChatBot from './ChatBot';
import BottomSocials from './BottomSocials';
import { Modal } from 'react-bootstrap';
import ContactForm from './ContactForm';

const Footer = () => {
    const tripAdvisorLogo = '/Images/Logos/tripadvisor-logo.webp';
    const googleStars = '/Images/Logos/google-logo.webp';
    const certified01 = '/Images/Certification/certified-img01.webp';
    const certified02 = '/Images/Certification/certified-img02.webp';
    const certified03 = '/Images/Certification/certified-img03.webp';
    const certified04 = '/Images/Certification/certified-img04.webp';
    const footerLogo = '/rajasthan-travel-helpline.png';

    const date = new Date();
    const mydate = date.getUTCFullYear();
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    // contact
    const [show, setShow] = useState(false); // Modal visibility state
    const [selectedPackage, setSelectedPackage] = useState(''); // To store selected package title

    const handleClose = () => setShow(false);
    const handleShow = (title) => {
        setSelectedPackage(title);
        setShow(true);
    };

    return (
        <>
            <BackToTop />
            <div className="footer-container py-4 footer-request container-fluid">
                <div className="container py-4">
                    <div className="row d-flex justify-content-center align-items-center">
                        <h3 className="text-capitalize mb-2 text-black text-center fw-bold">
                            Looking to explore <span className='color-tertary'>something Specific</span>?
                        </h3>
                        <p className="text-black text-capitalize fw-normal text-center">
                            Let our expert helps you to make your own package.
                        </p>
                        <hr />
                        <button onClick={handleShow}>Request a quote now </button>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container footer-review">
                    <div className="row py-4 ">
                        <div className="col-12 col-md-4 col-lg-6 col-sm-12 d-flex justify-content-left py-2">
                            <h3 className="text-capitalize mb-0 web-title">our customers recommended</h3>
                        </div>
                        <div className="col-12 col-lg-6 col-sm-12 d-flex justify-content-end py-2 gap-4">
                            <a
                                href="https://www.tripadvisor.in/Attraction_Review-g304555-d24123312-Reviews-Rajasthan_Travel_Helpline-Jaipur_Jaipur_District_Rajasthan.html"
                                className="image-link d-flex justify-content-center align-items-center"
                                target="_blank"
                                aria-label='trip advisor'
                            >
                                <Image width={300} height={50} src={tripAdvisorLogo} alt="Trip Advisor Logo" />
                            </a>
                            <a href="/" className="image-link d-flex justify-content-center align-items-center" target="_blank" aria-label='google'>
                                <Image width={300} height={50} src={googleStars} alt="Goggle Rewiew Image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Packages and links */}
            <div className="container-fluid px-0">
                <div className="packages-footer pt-5">
                    <div className="container">
                        <div className="row mb-4">
                            <h3 className="text-center text-capitalize fw-bold web-title">
                                our <span className='color-tertary fw-bold'>Packages </span>& Insights
                            </h3>
                            <p className="text-center fw-normal text-capitalize">
                                Explore our diverse range of tour packages designed to cater your
                                preferences.
                            </p>
                        </div>
                        <div className="row accordians d-flex justify-content-center">
                            <div className="col-12 col-lg-9 col-sm-12">
                                <hr className="my-4" />
                                <h3
                                    className="text-capitalize web-title d-flex justify-content-between px-2 align-items-center"
                                    onClick={() => toggleSection('tourByDays')}
                                >
                                    Tour by Days
                                    {activeSection === 'tourByDays' ? (
                                        <FaMinus className="accordian-icon" />
                                    ) : (
                                        <FaPlus className="accordian-icon" />
                                    )}
                                </h3>
                                {activeSection === 'tourByDays' && (
                                    <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                        {tourByDaysLinks.map((link) => (
                                            <Link
                                                href={link.path}
                                                className="footer-link"
                                                key={link.path}
                                            >
                                                {' '}
                                                {link.text}
                                            </Link>
                                        ))}
                                        <Link className="explore-btn" href="/rajasthan-tour-packages">
                                            Explore more →
                                        </Link>
                                    </div>
                                )}
                                <hr className="my-4" />
                            </div>
                            <div className="col-12 col-lg-9 col-sm-12">
                                <h3
                                    className="text-capitalize web-title d-flex justify-content-between px-2 align-items-center"
                                    onClick={() => toggleSection('tourByCities')}
                                >
                                    Tour by Cities
                                    {activeSection === 'tourByCities' ? (
                                        <FaMinus className="accordian-icon" />
                                    ) : (
                                        <FaPlus className="accordian-icon" />
                                    )}
                                </h3>
                                {activeSection === 'tourByCities' && (
                                    <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                        {tourByCitiesLinks.map((link) => (
                                            <Link
                                                href={link.path}
                                                className="footer-link"
                                                key={link.path}
                                            >
                                                {' '}
                                                {link.text}
                                            </Link>
                                        ))}
                                        <Link className="explore-btn" href="/rajasthan-tour-by-cities">
                                            Explore more →
                                        </Link>
                                    </div>
                                )}
                                <hr className="my-4" />
                            </div>
                            <div className="col-12 col-lg-9 col-sm-12">
                                <h3
                                    className="text-capitalize web-title d-flex justify-content-between px-2 align-items-center"
                                    onClick={() => toggleSection('destination')}
                                >
                                    Destination
                                    {activeSection === 'destination' ? (
                                        <FaMinus className="accordian-icon" />
                                    ) : (
                                        <FaPlus className="accordian-icon" />
                                    )}
                                </h3>
                                {activeSection === 'destination' && (
                                    <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                        {destinationLinks.map((link) => (
                                            <Link
                                                href={link.path}
                                                className="footer-link"
                                                key={link.path}
                                            >
                                                {' '}
                                                {link.text}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                                <hr className="my-4" />
                            </div>
                            <div className="col-12 col-lg-9 col-sm-12">
                                <h3
                                    className="text-capitalize web-title d-flex justify-content-between px-2 align-items-center"
                                    onClick={() => toggleSection('cabRental')}
                                >
                                    Cab Rental
                                    {activeSection === 'cabRental' ? (
                                        <FaMinus className="accordian-icon" />
                                    ) : (
                                        <FaPlus className="accordian-icon" />
                                    )}
                                </h3>
                                {activeSection === 'cabRental' && (
                                    <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                        {cabRentalLinks.map((link) => (
                                            <Link
                                                href={link.path}
                                                className="footer-link"
                                                key={link.path}
                                            >
                                                {' '}
                                                {link.text}
                                            </Link>
                                        ))}
                                        <Link className="explore-btn" href="/rajasthan-cab-rental">
                                            Explore more →
                                        </Link>
                                    </div>
                                )}
                                <hr className="my-4" />
                            </div>
                            <div className="col-12 col-lg-9 col-sm-12">
                                <h3
                                    className="text-capitalize web-title d-flex justify-content-between px-2 align-items-center"
                                    onClick={() => toggleSection('exclusiveTours')}
                                >
                                    Exclusive Tour Packages{' '}
                                    {activeSection === 'exclusiveTours' ? (
                                        <FaMinus className="accordian-icon" />
                                    ) : (
                                        <FaPlus className="accordian-icon" />
                                    )}
                                </h3>
                                {activeSection === 'exclusiveTours' && (
                                    <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                        {exclusiveTourPackageLinks.map((link) => (
                                            <Link
                                                href={link.path}
                                                className="footer-link"
                                                key={link.path}
                                            >
                                                {link.text}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                                <hr className="my-4" />
                            </div>
                            <div className="col-12 col-lg-9 col-sm-12">
                                <h3
                                    className="text-capitalize web-title d-flex justify-content-between px-2 align-items-center"
                                    onClick={() => toggleSection('tourByTheme')}
                                >
                                    Tour Packages By Theme{' '}
                                    {activeSection === 'tourByTheme' ? (
                                        <FaMinus className="accordian-icon" />
                                    ) : (
                                        <FaPlus className="accordian-icon" />
                                    )}
                                </h3>
                                {activeSection === 'tourByTheme' && (
                                    <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                        {themeTourPackageLinks.map((link) => (
                                            <Link
                                                href={link.path}
                                                className="footer-link"
                                                key={link.path}
                                            >
                                                {link.text}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                                <hr className="my-4" />
                            </div>
                            <div className="col-12 col-lg-9 col-sm-12">
                                <h3
                                    className="text-capitalize web-title d-flex justify-content-between px-2 align-items-center"
                                    onClick={() => toggleSection('usefulLinks')}
                                >
                                    useful links{' '}
                                    {activeSection === 'usefulLinks' ? (
                                        <FaMinus className="accordian-icon" />
                                    ) : (
                                        <FaPlus className="accordian-icon" />
                                    )}
                                </h3>
                                {activeSection === 'usefulLinks' && (
                                    <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                        {usefulLinks.map((link) => (
                                            <Link
                                                href={link.path}
                                                className="footer-link text-white"
                                                key={link.path}
                                            >
                                                <span></span> {link.text}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                                <hr className="my-4" />
                            </div>
                            <div className="col-12 col-lg-9 col-sm-12">
                                <h3
                                    className="text-capitalize web-title d-flex justify-content-between px-2 align-items-center"
                                    onClick={() => toggleSection('company')}
                                >
                                    Company{' '}
                                    {activeSection === 'company' ? (
                                        <FaMinus className="accordian-icon" />
                                    ) : (
                                        <FaPlus className="accordian-icon" />
                                    )}
                                </h3>
                                {activeSection === 'company' && (
                                    <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap">
                                        {companyLinks.map((link) => (
                                            <Link
                                                href={link.path}
                                                className="footer-link text-white"
                                                key={link.path}
                                            >
                                                <span></span> {link.text}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                                <hr className="my-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-0">
                <div className="footer-container text-white">
                    <div className="container-fluid footer-bottom py-5 pt-2">
                        <div className="row py-5 justify-content-center align-items-center certified">
                            <h3 className="text-center text-capitalize">approved by</h3>
                            <div className="row my-3 w-100 d-flex jusify-content-center align-items-center">
                                <div className="col-12 d-flex justify-content-center align-items-center gap-4 flex-wrap certifications">
                                    <a
                                        href="https://www.tourism.rajasthan.gov.in/"
                                        className="d-flex justify-content-center align-items-center image-link"
                                        target="_blank"
                                        aria-label='go to certification'
                                    >
                                        <Image width={600} height={300}
                                            src={certified01}
                                            alt="Rajasthan Tourism Certification"
                                            title='Rajasthan Tourism Certification for Travel Services'
                                            className="pb-2 border-bottom border-white"

                                        />
                                    </a>
                                    <a
                                        href="https://www.mca.gov.in/"
                                        className="d-flex justify-content-center align-items-center image-link"
                                        target="_blank"
                                        aria-label='go to certification'
                                    >
                                        <Image width={600} height={300}
                                            src={certified02}
                                            alt="Ministry of Corporate Affairs Certification"
                                            title='Ministry of Corporate Affairs Certification'
                                            className="pb-2 border-bottom border-white"

                                        />
                                    </a>
                                    <a
                                        href="https://atulyabhaarat.com/"
                                        className="d-flex justify-content-center align-items-center image-link"
                                        target="_blank"
                                        aria-label='go to certification'
                                    >
                                        <Image width={600} height={300}
                                            src={certified03}
                                            alt="Incredible India Certification"
                                            title='Incredible India Certification for Tourism'
                                            className="pb-2 border-bottom border-white"

                                        />
                                    </a>
                                    <a
                                        href="https://frto.org/"
                                        className="d-flex justify-content-center align-items-center image-link"
                                        target="_blank"
                                        aria-label='go to certification'
                                    >
                                        <Image width={600} height={300}
                                            src={certified04}
                                            alt="FRTO Certification"
                                            title='Obtaining of FRTO Certification for Travel Services'
                                            className="pb-2 border-bottom border-white"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 d-flex flex-column footer-links justify-content-center align-items-center">
                                <div className="footer-logo w-100 d-flex justify-content-center align-items-center">
                                    <a
                                        href="https://rajasthantourpackages.in/"
                                        target="_blank"
                                        className="d-flex justify-content-center align-items-center image-link"
                                        aria-label='rajasthan travel helpline'
                                    >
                                        <Image width={600} height={300} src={footerLogo} alt="Rajasthan Travel Helpline" title='Rajasthan Travel Helpline Contact Details' />
                                    </a>
                                </div>
                                <div className="social-icons w-100 d-flex justify-content-center align-items-center gap-4 my-4">
                                    <a
                                        href="https://www.instagram.com/rajasthantravelhelpline/"
                                        className="social-icon"
                                        target="_blank"
                                        aria-label='go to social'
                                    >
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/rajasthantravelhelpline/"
                                        className="social-icon"
                                        target="_blank"
                                        aria-label='go to social'
                                    >
                                        <FaFacebook />
                                    </a>
                                    <a
                                        href="mailto:mail@rajasthantravelhelpline.com"
                                        className="social-icon"
                                        target="_blank"
                                        aria-label='go to social'
                                    >
                                        <IoIosMail />
                                    </a>
                                    <a
                                        href="https://www.tripadvisor.in/Attraction_Review-g304555-d24123312-Reviews-Rajasthan_Travel_Helpline-Jaipur_Jaipur_District_Rajasthan.html"
                                        className="social-icon"
                                        target="_blank"
                                        aria-label='go to social'
                                    >
                                        <FaTripadvisor />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row footer-end">
                            <p className="copyright text-center my-4 text-capitalize">
                                Copyright © {mydate} | Rajasthan travel helpline. All Rights
                                Reserved.
                            </p>
                        </div>
                    </div>
                </div>
                <BottomSocials />
                <ChatBot />
            </div>

            {/* Modal for Contact Form */}
            <Modal
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

export default Footer;
