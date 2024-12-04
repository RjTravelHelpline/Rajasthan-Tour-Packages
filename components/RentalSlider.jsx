"use client"
import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap';
import { FaArrowRight, FaFire, FaSnowflake, FaSuitcase, FaUserFriends } from 'react-icons/fa';
import { IoLogoWhatsapp, IoMdClose } from 'react-icons/io';
import SlickSlider from './SlickSlider';
import ContactForm from './ContactForm';

const RentalSlider = ({ rentals }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (title) => {
        setSelectedPackage(title);
        setShow(true);
    }

    const [selectedPackage, setSelectedPackage] = useState(''); // To store selected package title

    return (
        <>
            <div className="row py-2 mb-5 d-flex align-items-stretch px-2 packages rental-container">
                <SlickSlider>
                    {rentals.map((rental, index) => {
                        const messageText = `I am interested in the ${rental.title} for ₹${rental.price}/-. Please provide more details.`;

                        // Encoding the message for safe URL use
                        const encodedText = encodeURIComponent(messageText);

                        // Constructing the WhatsApp link with the encoded text
                        const whatsappLink = `https://api.whatsapp.com/send/?phone=919166555888&text=${encodedText}&type=phone_number&app_absent=0`;

                        return (
                            <div
                                key={index}
                                className="col-12 col-sm-12 col-md-6 col-lg-4 mb-5 d-flex align-items-stretch px-2 rental-container"
                            >
                                <Card className="card bg-transparent">
                                    <div className="card-image-container">
                                        <Card.Img src={rental.imgSrc} alt={rental.alt} title={rental.title} />
                                    </div>
                                    <div className="row card-content d-flex align-items-center justify-content-center gap-0">
                                        <div className="w-100 card-header d-flex justify-content-center flex-column align-items-start pt-0">
                                            <p className="text-capitalize w-100 package-title text-center text-black">
                                                {rental.title}
                                            </p>
                                        </div>
                                        <div className="w-100 card-header d-flex justify-content-center gap-4 align-items-start pt-0 package-category py-3">
                                            <div className="d-flex flex-column justify-content-between align-items-center">
                                                {' '}
                                                <FaUserFriends className="icon" />
                                                <p className="pt-2">4+1</p>
                                            </div>
                                            <div className="d-flex flex-column justify-content-center align-items-center">
                                                <FaSuitcase className="icon" />
                                                <p className="pt-2">3</p>
                                            </div>
                                            <div className="d-flex flex-column justify-content-center align-items-center">
                                                <FaSnowflake className="icon" />
                                                <p className="pt-2">AC</p>
                                            </div>
                                            <div className="d-flex flex-column justify-content-center align-items-center">
                                                {' '}
                                                <FaFire className="icon" />
                                                <p className="pt-2">Heater</p>
                                            </div>
                                        </div>
                                        <div className="w-100 card-header d-flex justify-content-between align-items-start flex-column pt-0 pb-0 mb-2">
                                            <p className="price px-2 text-capitalize mb-2 w-auto">
                                                {rental.priceOne}
                                            </p>
                                            <p className="price px-2 text-capitalize mb-2 w-auto">
                                                {rental.priceTwo}
                                            </p>
                                        </div>
                                        <div className="w-100 package-buttons d-flex justify-content-center align-items-center px-0">
                                            <div className="col-10">
                                                <button
                                                    className="w-100 rounded-3"
                                                    onClick={() => handleShow(rental.title)}
                                                >
                                                    Enquire now <FaArrowRight />
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


            {/* Modal for Contact Form */}
            <Modal
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

export default RentalSlider
