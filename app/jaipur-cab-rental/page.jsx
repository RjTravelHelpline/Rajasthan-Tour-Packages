"use client";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import SlickSlider from "@/components/SlickSlider";
import { allCabRentals } from "@/data/cabRentalData";
import { jaipurTourPackagesData } from "@/data/data";
import Link from "next/link";
import { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { FaFire, FaSnowflake, FaSuitcase, FaUserFriends } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdClose } from "react-icons/io";


const JaipurCabRental = () => {
  const [show, setShow] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (title) => {
    setSelectedPackage(title);
    setShow(true);
  };

  return (
    <>
      <Breadcrumb breadcrumbKey="jaipurCab" />
      <div className="container-fluid bg-black ">
        <div className="container py-5 text-white">
          <div className="row">
            <h1 className="text-capitalize text-center">jaipur cab rental</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid section-02">
        <div className="container py-5 packages rental-container">
          <div className="row py-2 px-2 d-flex justify-content-center align-items-center">
            <h2 className="w-auto text-capitalize home-head">
              <span className="fw-normal">popular </span> cabs
            </h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            <SlickSlider>
              {allCabRentals.map((rental, index) => {
                const whatsappLink = `https://wa.me/919166555888?text=I am interested in the ${rental.title} package for ₹${rental.price}/-. Please provide more details.`;
                return (
                  <div
                    key={index}
                    className="col-12 col-sm-12 col-md-6 col-lg-4 mb-5 d-flex align-items-stretch px-2 rental-container"
                  >
                    <Card className="card bg-transparent">
                      <div className="card-image-container">

                        <Card.Img src={rental.imgSrc} alt="Card Package" />
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
                              Enquire now <BsArrowRight />
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
        </div>
      </div>

      <div className="container-fluid section-02 mb-5">
        <div className="container py-5 packages">
          <div className="row py-2 px-2 d-flex justify-content-center align-items-center">
            <h2 className="w-auto text-capitalize home-head">
              <span className="fw-normal">tour </span> packages
              {/* <FaGripfire className="icon" /> */}
            </h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            <SlickSlider>
              {jaipurTourPackagesData.map((pkg, index) => {
                const whatsappLink = `https://wa.me/919166555888?text=I am interested in the ${pkg.title} package for ₹${pkg.price}/-. Please provide more details.`;
                return (
                  <div
                    key={index}
                    className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch px-2"
                  >
                    <Card className="card bg-transparent">
                      <div className="card-image-container">
                        <img src={pkg.imgSrc} alt="Card Package" />
                      </div>
                      <div className="row card-content d-flex align-items-center justify-content-center">
                        <div className="w-100 card-header d-flex justify-content-between align-items-start pt-0 pb-0">
                          <p className="fw-normal text-left package-duration w-auto">
                            {pkg.duration}
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
                            <Link
                              className="w-100 rounded-0 text-center d-block"
                              href={pkg.navigate}
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
        </div>
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
  );
};

export default JaipurCabRental;
