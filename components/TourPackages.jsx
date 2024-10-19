"use client"
import { Card, Modal } from 'react-bootstrap';
import { IoLogoWhatsapp, IoMdClose } from 'react-icons/io';
import ContactForm from './ContactForm';
import { useState } from 'react';
import Link from 'next/link';

const TourPackages = ({ pkg }) => {
  const [show, setShow] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (title) => {
    setSelectedPackage(title);
    setShow(true);
  };
  const whatsappLink = `https://wa.me/?text=I am interested in the ${pkg.title} package for ₹${pkg.price}/-. Please provide more details.`;

  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch px-2">
        <Card className="card bg-transparent">
          <div className="card-image-container">
            <Card.Img src={pkg.imgSrc} alt="Card Package" />
          </div>
          <div className="row card-content d-flex align-items-center justify-content-center">
            <div className="w-100 card-header d-flex justify-content-between align-items-start pt-0 pb-0">
              <p className="fw-bold text-left package-duration w-auto">
                {pkg.duration}
              </p>
              <p className="price px-2 text-capitalize mb-1 w-auto">
                ₹{pkg.price}
              </p>
            </div>
            <div className="w-100 card-header d-flex justify-content-center flex-column align-items-start pt-0">
              <p className="text-capitalize w-100 package-title">{pkg.title}</p>
            </div>
            <div className="w-100 package-buttons d-flex justify-content-center align-items-center px-0">
              <div className="col-5">
                <Link
                  href={pkg.navigate ? pkg.navigate : "/"}
                  className="w-100 rounded-0 text-center d-block"
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

      {/* Modal for Contact Form */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="contact-model w-100"
      >
        <Modal.Body className="model-body">
          <ContactForm selectedPackage={selectedPackage} />{' '}
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

export default TourPackages;
