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
import { IoIosMail, IoMdClose } from 'react-icons/io';
// import BackToTop from './BackToTop';
import Image from 'next/image';
import Link from 'next/link';
import BackToTop from './BackToTop';
import ChatBot from './ChatBot';
import BottomSocials from './BottomSocials';

const Footer = () => {
    const tripAdvisorLogo = '/Images/Logos/tripadvisor-logo.webp';
    const googleStars = '/Images/Logos/google-logo.webp';
    const certified01 = '/Images/Certification/certified-img01.webp';
    const certified02 = '/Images/Certification/certified-img02.webp';
    const certified03 = '/Images/Certification/certified-img03.webp';
    const certified04 = '/Images/Certification/certified-img04.webp';
    const footerLogo = '/rajasthan-travel-helpline.png';

    const date = new Date();
    const mydate = date.getFullYear();
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
            <div className="footer-container py-4 footer-request">
                <div className="container py-4">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                            <h2 className="text-capitalize mb-2 text-black">
                                Looking to explore <span>something Specific</span>?
                            </h2>
                            <p className="text-black text-capitalize fw-normal">
                                Let our expert helps you to make your own package.
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-end">
                            <button onClick={handleShow}>Request a quote now </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container footer-review">
                <div className="row py-4 ">
                    <div className="col-12 col-md-4 col-lg-6 col-sm-12 d-flex justify-content-left py-2">
                        <h3 className="text-capitalize mb-0">our customers recommended</h3>
                    </div>
                    <div className="col-12 col-lg-6 col-sm-12 d-flex justify-content-end py-2 gap-4">
                        <a
                            href="https://www.tripadvisor.in/Attraction_Review-g304555-d24123312-Reviews-Rajasthan_Travel_Helpline-Jaipur_Jaipur_District_Rajasthan.html"
                            className="image-link"
                            target="_blank"
                        >
                            <Image width={300} height={50} src={tripAdvisorLogo} alt="Trip Advisor Logo" />
                        </a>
                        <a href="" className="image-link" target="_blank">
                            <Image width={300} height={50} src={googleStars} alt="Goggle Rewiew Image" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Packages and links */}
            <div className="packages-footer pt-5">
                <div className="container">
                    <div className="row mb-4">
                        <h2 className="text-center text-capitalize">
                            our <span>Packages </span>& Insights
                        </h2>
                        <p className="text-center fw-normal text-capitalize">
                            Explore our diverse range of tour packages designed to cater your
                            preferences.
                        </p>
                    </div>
                    <div className="row accordians d-flex justify-content-center">
                        <div className="col-12 col-lg-10 col-sm-12">
                            <hr className="my-4" />
                            <h3
                                className="text-capitalize d-flex justify-content-between px-2"
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
                                    <Link className="explore-btn" to="/rajasthan-tour-packages">
                                        Explore more →
                                    </Link>
                                </div>
                            )}
                            <hr className="my-4" />
                        </div>
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize d-flex justify-content-between px-2"
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
                                    <Link className="explore-btn" to="/rajasthan-tour-by-cities">
                                        Explore more →
                                    </Link>
                                </div>
                            )}
                            <hr className="my-4" />
                        </div>
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize d-flex justify-content-between px-2"
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
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize d-flex justify-content-between px-2"
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
                                    <Link className="explore-btn" to="/rajasthan-cab-rental">
                                        Explore more →
                                    </Link>
                                </div>
                            )}
                            <hr className="my-4" />
                        </div>
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize d-flex justify-content-between px-2"
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
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize d-flex justify-content-between px-2"
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
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize d-flex justify-content-between px-2"
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
                        <div className="col-12 col-lg-10 col-sm-12">
                            <h3
                                className="text-capitalize d-flex justify-content-between px-2"
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
            <div className="footer-container text-white">
                <div className="container-fluid footer-bottom py-5 pt-2">
                    <div className="row py-5 justify-content-center align-items-center certified">
                        <h3 className="text-center text-capitalize">approved by</h3>
                        <div className="row my-3 w-100 d-flex jusify-content-center align-items-center">
                            <div className="col-12 d-flex justify-content-center align-items-center gap-4 flex-wrap">
                                <a
                                    href="https://www.tourism.rajasthan.gov.in/"
                                    className="image-link"
                                    target="_blank"
                                >
                                    <Image width={200} height={100}
                                        src={certified01}
                                        alt="certification image"
                                        className="pb-2 border-bottom border-white"
                                        layout='responsive'
                                    />
                                </a>
                                <a
                                    href="https://www.mca.gov.in/"
                                    className="image-link"
                                    target="_blank"
                                >
                                    <Image width={200} height={100}
                                        src={certified02}
                                        alt="certification image"
                                        className="pb-2 border-bottom border-white"
                                        layout='responsive'
                                    />
                                </a>
                                <a
                                    href="https://atulyabhaarat.com/"
                                    className="image-link"
                                    target="_blank"
                                >
                                    <Image width={200} height={100}
                                        src={certified03}
                                        alt="certification image"
                                        className="pb-2 border-bottom border-white"
                                        layout='responsive'
                                    />
                                </a>
                                <a
                                    href="https://frto.org/"
                                    className="image-link"
                                    target="_blank"
                                >
                                    <Image width={200} height={100}
                                        src={certified04}
                                        alt="certification image"
                                        className="pb-2 border-bottom border-white"
                                        layout='responsive'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 d-flex flex-column footer-links justify-content-center align-items-center">
                            <div className="footer-logo w-100 d-flex justify-content-center aiign-items-center">
                                <a
                                    href="https://rajasthantourpackages.in/"
                                    target="_blank"
                                    className="d-flex justify-content-center aiign-items-center footer-link"
                                >
                                    <Image width={600} height={300} src={footerLogo} alt="rtp-logo" layout='responsive' />
                                </a>
                            </div>
                            <div className="social-icons w-100 d-flex justify-content-center align-items-center gap-4 my-4">
                                <a
                                    href="https://www.instagram.com/rajasthantravelhelpline/"
                                    className="social-icon"
                                    target="_blank"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://www.facebook.com/rajasthantravelhelpline/"
                                    className="social-icon"
                                    target="_blank"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href="mailto:mail@rajasthantravelhelpline.com"
                                    className="social-icon"
                                >
                                    <IoIosMail />
                                </a>
                                <a
                                    href="https://www.tripadvisor.in/Attraction_Review-g304555-d24123312-Reviews-Rajasthan_Travel_Helpline-Jaipur_Jaipur_District_Rajasthan.html"
                                    className="social-icon"
                                    target="_blank"
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
        </>
    );
};

export default Footer;
