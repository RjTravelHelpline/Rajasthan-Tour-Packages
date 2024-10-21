"use client";
import { GoArrowRight } from 'react-icons/go';
import { IoLogoWhatsapp, IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import ContactForm from './ContactForm';
import { FaGripfire } from 'react-icons/fa';
import SlickSlider from './SlickSlider';
import { Card, Modal } from 'react-bootstrap';
import { popularTourPackagesData } from '@/data/data';
import Link from 'next/link';

const Packages = () => {
  const visiblePackages = popularTourPackagesData.slice(0, 6);

  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  const [show, setShow] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (title) => {
    setSelectedPackage(title);
    setShow(true);
  };

  return (
    <>
      <div className="container-fluid section-01 py-4">
        <div className="container packages my-5">
          <div className="row py-2 px-2 d-flex justify-content-center align-items-center">
            <h2 className="w-auto text-capitalize home-head">
              <span className="fw-normal">popular </span> tour packages
              <FaGripfire className="icon" />
            </h2>
            <p className="text-center home-para">
              Discover the essence of Rajasthan with our{' '}
              <span className="fw-bold">Popular Tour Packages </span>We offer
              carefully curated itineraries that showcase this royal {`state's`}
              vibrant culture
              {readMore && (
                <>
                  , majestic forts, and stunning landscapes. Whether {`you're`}{' '}
                  a history buff, a cultural enthusiast, or an adventure seeker,
                  our popular tour packages cater to all interests, ensuring a
                  truly memorable experience. Book your journey today and get
                  ready to immerse yourself in the timeless charm of Rajasthan
                  with our tour packages designed to create lifelong memories.
                </>
              )}
              <button className="read-more-btn" onClick={handleReadMore}>
                {readMore ? <>Show Less</> : <>..Read More</>}
              </button>
            </p>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            <SlickSlider>
              {visiblePackages.map((pkg, index) => {
                const whatsappLink = `https://wa.me/919166555888?text=I am interested in the ${pkg.title} package for ₹${pkg.price}/-. Please provide more details.`;
                return (
                  <div
                    key={index}
                    className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-start px-2"
                  >
                    <Card className="card bg-transparent">
                      <div className="card-image-container">
                        <Card.Img src={pkg.imgSrc} alt="Card Package" />
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
          <div className="row d-flex w-100 justify-content-start align-items-center mt-2">
            <button className="more-btn bg-transparent d-flex justify-content-center align-items-center gap-2">
              <Link href="/popular-tour-packages">
                view more <GoArrowRight />
              </Link>
            </button>
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

export default Packages;
