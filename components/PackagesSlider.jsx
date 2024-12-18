"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap';
import { IoLogoWhatsapp, IoMdClose } from 'react-icons/io';
import SlickSlider from './SlickSlider';
import { ExploreAll } from './ExploreAll';
import ContactForm from './ContactForm';

const PackagesSlider = ({ packages, href, exploreAll = true }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (title) => {
        setSelectedPackage(title);
        setShow(true);
    }

    const [selectedPackage, setSelectedPackage] = useState(''); // To store selected package title
    return (
        <>
            <div className="row py-2 mb-5 d-flex align-items-stretch px-2 packages">
                <SlickSlider>
                    {packages.map((pkg, index) => {
                        const messageText = `I am interested in the ${pkg.title} package for ₹${pkg.price}/-. Please provide more details.`;

                        // Encoding the message for safe URL use
                        const encodedText = encodeURIComponent(messageText);

                        // Constructing the WhatsApp link with the encoded text
                        const whatsappLink = `https://api.whatsapp.com/send/?phone=919166555888&text=${encodedText}&type=phone_number&app_absent=0`;
                        return (
                            <div
                                key={index}
                                className="col-12 col-sm-12 col-md-8 col-lg-4 mb-4 d-flex justify-content-start px-2"
                            >
                                <Card className="card bg-transparent">
                                    <div className="card-image-container">
                                        <Image src={pkg.imgSrc} alt={pkg.alt} title={pkg.imgTitle} width={600}
                                            height={800} />
                                    </div>

                                    <div className="row card-content d-flex align-items-center justify-content-center">
                                        <div className="w-100 card-header d-flex justify-content-between align-items-start pt-0 pb-0">
                                            <p className="fw-normal text-left package-duration w-auto">
                                                {`${pkg.nights} Night${pkg.nights > 1 ? 's' : ''} • ${pkg.days} Day${pkg.days > 1 ? 's' : ''}`}
                                            </p>
                                            <p className="price px-2 text-capitalize mb-1 w-auto">
                                                ₹{pkg.price}/-
                                            </p>
                                        </div>
                                        <div className="w-100 card-header d-flex justify-content-center flex-column align-items-start pt-0">
                                            <p className="text-capitalize w-100 package-title">
                                                {pkg.title}
                                            </p>
                                        </div>
                                        <div className="w-100 package-buttons d-flex justify-content-center align-items-center px-0">
                                            <div className="col-5">
                                                <Link href={pkg.navigate} className="w-100 rounded-0 text-center d-block"

                                                >
                                                    view
                                                </Link>
                                            </div>
                                            <div className="col-5">
                                                <button
                                                    className="w-100 rounded-0"
                                                    onClick={() => handleShow(pkg.title)}
                                                >
                                                    Enquire
                                                </button>
                                            </div>
                                            <div className="col-2 d-flex justify-content-end">
                                                <a
                                                    href={whatsappLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-center whatsapp-logo"
                                                >
                                                    <IoLogoWhatsapp />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        );
                    })}
                </SlickSlider>
            </div>
            {
                exploreAll && (

                    <ExploreAll text="explore all" href={href} />
                )
            }

            {/* Modal for Contact Form */}
            <Modal
                size='lg'
                show={show}
                onHide={handleClose}
                centered
                className="contact-model w-100"
            >
                <Modal.Body className="model-body">
                    <ContactForm
                        selectedPackage={selectedPackage}
                        onSuccess={handleClose}
                    />
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
    )
}

export default PackagesSlider
