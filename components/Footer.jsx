"use client";
import { useState } from 'react';
import {
    exclusiveTourPackageLinks,
    themeTourPackageLinks,
    cabRentalLinks,
    destinationLinks,
    tourByCitiesLinks,
    tourByDaysLinks,
    usefulLinks,
    companyLinks,
} from '../data/linksData';
import { IoMdClose, } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import ContactForm from './ContactForm';
import { BiChevronRight, BiChevronDown, BiChevronR, BiChevronDownight, BiLogoTripAdvisor, BiPhoneCall, BiLinkAlt, BiSolidPhoneCall } from 'react-icons/bi';
import { PiBrandyFill, PiFacebookLogoFill, PiInstagramLogoFill, PiSkypeLogoFill } from 'react-icons/pi';
import { RiCustomerService2Line, RiLink, RiWhatsappFill } from 'react-icons/ri';
import { MdContactSupport, MdMail } from 'react-icons/md';
import { BsArrowUpRightCircleFill, BsChevronDoubleRight, BsChevronRight } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { CgInsights } from "react-icons/cg";

const Footer = () => {
    const tripAdvisorLogo = '/Images/Logos/tripadvisor-logo.webp';
    const googleStars = '/Images/Logos/google-logo.webp';
    const certified01 = '/Images/Certification/certified-img01.webp';
    const certified02 = '/Images/Certification/certified-img02.webp';
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
            <section className="py-5 container-fluid">
                <Container>
                    <Row className="d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-sm-12 px-2 my-2 text-white">
                            <div className='w-100 rounded-4' style={{ position: 'relative', height: '35vh', maxHeight: '300px' }}>
                                <Image width={800} height={400} quality={100} alt='Query banner' src='/Images/Banners/review-banner.jpg' className='w-100 h-100 rounded-4' style={{ objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
                                    <h3 className='text-capitalize web-title fs-1 fw-light mb-0' >Loved by <span className='fw-bold text-white'>Travelers</span></h3>
                                    <p className='text-white opacity-75 mb-0 fw-light'>See why travelers love our tours on TripAdvisor.</p>
                                </div>
                                <div className='d-flex flex-column gap-2' style={{ position: 'absolute', top: '24px', left: '24px' }}>
                                    <a
                                        href="https://www.tripadvisor.in/Attraction_Review-g304555-d24123312-Reviews-Rajasthan_Travel_Helpline-Jaipur_Jaipur_District_Rajasthan.html"
                                        className=""
                                        target="_blank"
                                        aria-label='trip advisor'

                                    >
                                        <Image width={300} height={50} src='/Images/Logos/tripadvisor-logo-02.png' style={{ width: '10em', height: 'auto' }} alt="Trip Advisor Logo" title='Tripadvisor logo representing trusted travel reviews' />
                                    </a>
                                    {/* <a
                                        href="https://www.tripadvisor.in/Attraction_Review-g304555-d24123312-Reviews-Rajasthan_Travel_Helpline-Jaipur_Jaipur_District_Rajasthan.html"
                                        className=""
                                        target="_blank"
                                        aria-label='trip advisor'

                                    >
                                        <Image width={300} height={50} src='/Images/Logos/google-logo-02.png' style={{ width: '10em', height: 'auto' }} alt="Trip Advisor Logo" title='google logo representing trusted travel reviews' />
                                    </a> */}
                                </div>
                                <a href="https://www.tripadvisor.in/Attraction_Review-g304555-d24123312-Reviews-Rajasthan_Travel_Helpline-Jaipur_Jaipur_District_Rajasthan.html"
                                    className="rounded-5"
                                    target="_blank"
                                    aria-label='trip advisor' style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgb(0, 168, 107)' }} onClick={handleShow}>
                                    <button className='bg-transparent d-flex align-items-center shadow-none text-white' >
                                        <span className='me-2 text-white'>visit now</span>
                                        <BsArrowUpRightCircleFill />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 px-2 my-2 text-white">
                            <div className='w-100 rounded-4' style={{ position: 'relative', height: '35vh', maxHeight: '300px' }}>
                                <Image width={800} height={400} quality={100} alt='Query banner' src='/Images/Banners/footer-banner.jpg' className='w-100 h-100 rounded-4' style={{ objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
                                    <h3 className='text-capitalize web-title fs-1 fw-light mb-0' >plan your <span className='fw-bold text-white'>perfect trip!</span></h3>
                                    <p className='text-white opacity-75 mb-0 fw-light'>Let us plan your perfect journey.</p>
                                </div>
                                <button className='bg-tertary rounded-5 d-flex align-items-center' style={{ position: 'absolute', top: '12px', right: '12px' }} onClick={handleShow}>
                                    <span className='me-2'>Request us</span>
                                    <MdContactSupport />
                                </button>
                            </div>
                        </div>

                    </Row>
                </Container>
            </section>
            {/* Packages and links */}
            <section className="container-fluid px-0">
                <div className="packages-footer py-5">
                    <Container>
                        <Row className="mb-4">
                            <h3 className="text-center text-capitalize fw-bold web-title">
                                our <span className='color-tertary fw-bold'>Packages </span>& Insights
                            </h3>
                        </Row>
                        <Row className="accordians d-flex justify-content-center">
                            <Col className="col-12 col-lg-6 col-sm-12 py-4" style={{ borderTop: '1px solid var(--color-gray)' }}>
                                {/*  */}
                                <h4
                                    className="mb-0 fw-normal text-capitalize web-title d-flex justify-content-between align-items-center"
                                    onClick={() => toggleSection('tourByDays')}
                                >
                                    rajasthan Tour by Days
                                    {activeSection === 'tourByDays' ? (
                                        <BiChevronDown className="accordian-icon" />
                                    ) : (
                                        <BiChevronRight className="accordian-icon" />
                                    )}
                                </h4>
                                {activeSection === 'tourByDays' && (
                                    <>
                                        <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap my-2">
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
                                        </div>
                                        <Link className="font-min anchor-link-u p-1 rounded-3 px-2 mt-3" style={{ border: '1px solid var(--color-gray)' }} href="/rajasthan-tour-packages">
                                            Explore more <BiChevronRight />
                                        </Link>
                                    </>
                                )}
                                {/*  */}
                            </Col>
                            <Col className="col-12 col-lg-6 col-sm-12 py-4" style={{ borderTop: '1px solid var(--color-gray)' }}>
                                <h4
                                    className="mb-0 fw-normal text-capitalize web-title d-flex justify-content-between align-items-center"
                                    onClick={() => toggleSection('tourByCities')}
                                >
                                    rajasthan Tour by Cities
                                    {activeSection === 'tourByCities' ? (
                                        <BiChevronDown className="accordian-icon" />
                                    ) : (
                                        <BiChevronRight className="accordian-icon" />
                                    )}
                                </h4>
                                {activeSection === 'tourByCities' && (
                                    <>
                                        <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap my-2">
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
                                        </div>
                                        <Link className="font-min anchor-link-u p-1 rounded-3 px-2 mt-3" style={{ border: '1px solid var(--color-gray)' }} href="/rajasthan-tour-by-cities">
                                            Explore more <BiChevronRight />
                                        </Link>
                                    </>
                                )}

                            </Col>
                            <Col className="col-12 col-lg-6 col-sm-12 py-4" style={{ borderTop: '1px solid var(--color-gray)' }}>
                                <h4
                                    className="mb-0 fw-normal text-capitalize web-title d-flex justify-content-between align-items-center"
                                    onClick={() => toggleSection('destination')}
                                >
                                    rajasthan Destination
                                    {activeSection === 'destination' ? (
                                        <BiChevronDown className="accordian-icon" />
                                    ) : (
                                        <BiChevronRight className="accordian-icon" />
                                    )}
                                </h4>
                                {activeSection === 'destination' && (
                                    <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap my-2">
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

                            </Col>
                            <Col className="col-12 col-lg-6 col-sm-12 py-4" style={{ borderTop: '1px solid var(--color-gray)' }}>
                                <h4
                                    className="mb-0 fw-normal text-capitalize web-title d-flex justify-content-between align-items-center"
                                    onClick={() => toggleSection('cabRental')}
                                >
                                    rajasthan Cab Rental
                                    {activeSection === 'cabRental' ? (
                                        <BiChevronDown className="accordian-icon" />
                                    ) : (
                                        <BiChevronRight className="accordian-icon" />
                                    )}
                                </h4>
                                {activeSection === 'cabRental' && (
                                    <>
                                        <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap my-2">
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
                                        </div>
                                        <Link className="font-min anchor-link-u p-1 rounded-3 px-2 mt-3" style={{ border: '1px solid var(--color-gray)' }} href="/rajasthan-cab-rental">
                                            Explore more <BiChevronRight />
                                        </Link>
                                    </>
                                )}

                            </Col>
                            <Col className="col-12 col-lg-6 col-sm-12 py-4" style={{ borderTop: '1px solid var(--color-gray)' }}>
                                <h4
                                    className="mb-0 fw-normal text-capitalize web-title d-flex justify-content-between align-items-center"
                                    onClick={() => toggleSection('exclusiveTours')}
                                >
                                    Exclusive Tour Packages{' '}
                                    {activeSection === 'exclusiveTours' ? (
                                        <BiChevronDown className="accordian-icon" />
                                    ) : (
                                        <BiChevronRight className="accordian-icon" />
                                    )}
                                </h4>
                                {activeSection === 'exclusiveTours' && (
                                    <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap my-2">
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

                            </Col>
                            <Col className="col-12 col-lg-6 col-sm-12 py-4" style={{ borderTop: '1px solid var(--color-gray)' }}>
                                <h4
                                    className="mb-0 fw-normal text-capitalize web-title d-flex justify-content-between align-items-center"
                                    onClick={() => toggleSection('tourByTheme')}
                                >
                                    Tour Packages By Theme{' '}
                                    {activeSection === 'tourByTheme' ? (
                                        <BiChevronDown className="accordian-icon" />
                                    ) : (
                                        <BiChevronRight className="accordian-icon" />
                                    )}
                                </h4>
                                {activeSection === 'tourByTheme' && (
                                    <div className="footer-links d-flex w-100 justify-content-start align-items-center flex-wrap my-2">
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

                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            {/* <section className="container-fluid px-0">
                <div className="footer-container text-white">
                    <div className="container-fluid footer-bottom py-5 pt-2">
                        <Row className="py-5 justify-content-center align-items-center certified">
                            <p className="text-center text-capitalize">approved by</p>
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
                                            className="pb-2"
                                            placeholder='empty' style={{ backgroundColor: "#000" }}

                                        />
                                    </a>
                                    <a
                                        href="https://www.mca.gov.in/content/mca/global/en/home.html"
                                        className="d-flex justify-content-center align-items-center image-link"
                                        target="_blank"
                                        aria-label='go to certification'
                                    >
                                        <Image width={600} height={300}
                                            src={certified02}
                                            alt="Ministry of Corporate Affairs Certification"
                                            title='Ministry of Corporate Affairs Certification'
                                            className="pb-2"
                                            placeholder='empty' style={{ backgroundColor: "#000" }}

                                        />
                                    </a>
                                    <a
                                        href="https://frto.org/"
                                        className="d-flex justify-content-center align-items-center image-link"
                                        target="_blank"
                                        aria-label='go to certification'
                                        placeholder='empty' style={{ backgroundColor: "#000" }}
                                    >
                                        <Image width={600} height={300}
                                            src={certified04}
                                            alt="FRTO Certification"
                                            title='Obtaining of FRTO Certification for Travel Services'
                                            className="pb-2"
                                        />
                                    </a>
                                </div>
                            </div>
                        </Row>  
                    </div>
                </div>
            </section> */}
            <div className="container-fluid bg-black py-5" style={{ borderTop: '1px solid var(--color-gray)' }}>
                <div className="container">
                    <div className="row d-flex justify-content-start aiign-items-center footer-links ">
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex flex-lg-column flex-sm-row justify-content-between align-items-start gap-2">
                            <div className="footer-logo d-flex flex-column justify-content-start align-items-start gap-2">
                                <a
                                    href="https://rajasthantourpackages.in/"
                                    target="_blank"
                                    className="d-flex justify-content-center aiign-items-center p-2 rounded-5 overflow-hidden" style={{ border: '1px solid var(--color-gray)' }}
                                    aria-label='rajasthan travel helpline'
                                >
                                    <Image width={600} height={300} src={footerLogo} alt="Rajasthan Travel Helpline" title='Rajasthan Travel Helpline Contact Details' />
                                </a>
                                <div className='d-flex justify-content-center flex-column align-items-start'>
                                    <p className='text-capitalize text-white opacity-50 fw-normal mb-0'>powered by</p>
                                    <p className='text-capitalize text-white web-title fw-bold mb-0'>Rajasthan Travel Helpline</p>
                                </div>
                            </div>
                            <div className="footer-icon d-flex justify-content-start align-items-center gap-3">
                                <a href="https://www.facebook.com/rajasthantravelhelpline/" className='fs-3 rounded-5 d-flex justify-content-center align-items-center text-white opacity-50 anchor-link-i'>
                                    <PiFacebookLogoFill />
                                </a>
                                <a href="https://www.instagram.com/rajasthantravelhelpline/" className='fs-3 rounded-5 text-hr d-flex justify-content-center align-center text-white opacity-50 anchor-link-i'>
                                    <PiInstagramLogoFill />
                                </a>
                                <a href="skype:rajasthantravel?chat" className='fs-3 rounded-5 d-flex justify-content-center align-items-center text-white opacity-50 anchor-link-i'>
                                    <PiSkypeLogoFill />
                                </a>
                                <a href="https://www.tripadvisor.in/Attraction_Review-g304555-d24123312-Reviews-Rajasthan_Travel_Helpline-Jaipur_Jaipur_District_Rajasthan.html" className='fs-3 rounded-5 d-flex justify-content-center align-items-center text-white opacity-50 anchor-link-i'>
                                    <BiLogoTripAdvisor />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <BiLinkAlt className='color-tertary opacity-75 fs-4 mb-1' />
                            <hr className='w-25' />
                            <p className='text-capitalize text-white web-title fw-bold d-flex align-items-center'>
                                useful links
                            </p>
                            {/* <hr /> */}
                            <div className='d-flex justify-content-center flex-column align-items-start gap-2'>
                                {usefulLinks.map((link) => (
                                    <Link
                                        href={link.path}
                                        className="text-hr w-auto text-white opacity-50 anchor-link-u"
                                        key={link.path}
                                    >
                                        {' '}
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <CgInsights className='color-tertary opacity-75 fs-4 mb-1' />
                            <hr className='w-25' />
                            <p className='text-capitalize text-white web-title fw-bold d-flex align-items-center'>
                                company insights
                            </p>
                            {/* <hr /> */}
                            <div className='d-flex justify-content-center flex-column align-items-start gap-2'>
                                {companyLinks.map((link) => (
                                    <Link
                                        href={link.path}
                                        className="text-hr w-auto text-white opacity-50 anchor-link-u"
                                        key={link.path}
                                    >
                                        {' '}
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <AiFillSafetyCertificate className='color-tertary opacity-75 fs-4 mb-1' />
                            <hr className='w-25' />
                            <p className='text-capitalize text-white web-title fw-bold d-flex align-items-center'>
                                approved by
                            </p>
                            {/* <hr /> */}
                            <div className='mt-2 d-flex gap-2 flex-wrap align-items-start'>
                                <a
                                    href="https://www.tourism.rajasthan.gov.in/"
                                    className="overflow-hidden"
                                    target="_blank"
                                    aria-label='go to certification' style={{ backgroundColor: "#000", width: '6em' }}
                                >
                                    <Image width={600} height={300}
                                        src={certified01}
                                        alt="Rajasthan Tourism Certification"
                                        title='Rajasthan Tourism Certification for Travel Services'
                                        className="w-100 h-auto"
                                        placeholder='empty'

                                    />
                                </a>
                                <a
                                    href="https://www.mca.gov.in/content/mca/global/en/home.html"
                                    className="overflow-hidden"
                                    target="_blank"
                                    aria-label='go to certification' style={{ backgroundColor: "#000", width: '6em' }}
                                >
                                    <Image width={600} height={300}
                                        src={certified02}
                                        alt="Ministry of Corporate Affairs Certification"
                                        title='Ministry of Corporate Affairs Certification'
                                        className="w-100 h-auto"
                                        placeholder='empty'

                                    />
                                </a>
                                <a
                                    href="https://frto.org/"
                                    className="overflow-hidden"
                                    target="_blank"
                                    aria-label='go to certification'
                                    placeholder='empty' style={{ backgroundColor: "#000", width: '6em' }}
                                >
                                    <Image width={600} height={300}
                                        src={certified04}
                                        alt="FRTO Certification"
                                        title='Obtaining of FRTO Certification for Travel Services'
                                        className="w-100 h-auto"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 mt-5 pt-5 d-flex gap-3 flex-wrap align-items-center">
                            <a href="tel:+91-9024337038" className='text-capitalize d-flex justify-content-center align-items-center '>
                                <BiSolidPhoneCall className='color-tertary me-2 opacity-75 fs-4' />
                                <span className='text-white opacity-75 me-2 text-capitalize web-title'>
                                    Call:
                                </span>
                                <span className='text-capitalize text-white fw-light opacity-75 anchor-link-ul'>
                                    (+91)-9024337038
                                </span>
                            </a>
                            <span className='text-white opacity-50'>
                                |
                            </span>
                            <a href="https://wa.me/9166555888" target="_blank" className='text-lowercase d-flex justify-content-center align-items-center'>
                                <RiWhatsappFill className='color-tertary me-2 opacity-75 fs-4' />
                                <span className='text-white opacity-75 me-2 text-capitalize web-title'>
                                    Whatsapp:
                                </span>
                                <span className='text-white fw-light opacity-75 anchor-link-ul'>
                                    (+91)-9166555888
                                </span>
                            </a>
                            <span className='text-white opacity-50'>
                                |
                            </span>
                            <a href="mailto:mail@rajasthantravelhelpline.com" target="_blank" className='text-lowercase d-flex justify-content-center align-items-center'>
                                <MdMail className='color-tertary me-2 opacity-75 fs-4' />
                                <span className='text-white opacity-75 me-2 text-capitalize web-title'>
                                    Mail:
                                </span>
                                <span className='text-white fw-light opacity-75 anchor-link-ul'>
                                    mail@rajasthantravelhelpline.com
                                </span>
                            </a>
                        </div>
                        <div className="col-12">
                            <hr />
                        </div>
                        <div className="col-lg-6 col-sm-12 mb-2">
                            <p className='mb-0 text-white opacity-25 fw-light font-min'>© 2003-{mydate} | Rajasthan travel helpline | All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 col-sm-12 mb-2">
                            <div className="d-flex gap-2 justify-content-lg-end justify-content-sm-start align-items-center">
                                <Link href="/privacy-policy" className='text-white opacity-50 fw-light font-min anchor-link-u-white'>
                                    privacy policy
                                </Link>
                                <span className='text-white opacity-25'>•</span>
                                <Link href="/terms-and-conditions" className='text-white opacity-50 fw-light font-min anchor-link-u-white'>
                                    terms & conditions
                                </Link>
                                <span className='text-white opacity-25'>•</span>
                                <Link href="/sitemap.xml" className='text-white opacity-50 fw-light font-min anchor-link-u-white'>
                                    sitemap
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}

            {/* Modal for Contact Form */}
            <Modal
                size='lg'
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
