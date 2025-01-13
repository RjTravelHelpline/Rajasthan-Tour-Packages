"use client";
import { Card, Modal } from 'react-bootstrap';
import { IoLogoWhatsapp, IoMdClose } from 'react-icons/io';
import ContactForm from './ContactForm';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';

const TourPackages = ({ pkg }) => {
  const [show, setShow] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (title) => {
    setSelectedPackage(title);
    setShow(true);
  };
  const messageText = `I am interested in the ${pkg.title} package for ₹${pkg.price}/-. Please provide more details.`;

  // Encoding the message for safe URL use
  const encodedText = encodeURIComponent(messageText);

  // Constructing the WhatsApp link with the encoded text
  const whatsappLink = `https://api.whatsapp.com/send/?phone=919166555888&text=${encodedText}&type=phone_number&app_absent=0`;

  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch px-2">
        <Card className="card bg-transparent">
          <div className="card-image-container">
            <Image src={pkg.imgSrc} alt={pkg.alt} title={pkg.imgTitle} width={600}
              height={800} />
          </div>
          <div className="row card-content d-flex align-items-center justify-content-center">
            <div className="w-100 card-header d-flex justify-content-between align-items-start pt-0 pb-0">
              <p className="price p-2 px-3 text-capitalize mb-1 w-auto web-title">
                from <span className='fw-bold'>₹{pkg.price}
                </span>
              </p>
              <p className="text-left text-black w-auto d-flex align-items-center gap-2 web-title fw-bold">
                <span className='p-2 bg-tertary-down d-flex rounded-5'>
                  <FaClock className='color-tertary' />
                </span>
                <span className='fw-bold'>
                  {`${pkg.nights} Night${pkg.nights > 1 ? 's' : ''} • ${pkg.days} Day${pkg.days > 1 ? 's' : ''}`}
                </span>
              </p>
            </div>
            <div className="w-100 card-header d-flex justify-content-center flex-column align-items-start pt-0">
              <h4 className="text-capitalize w-100 package-title web-title">
                {pkg.title}
              </h4>
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
                  className='rounded-5 p-0 whatsapp-logo'
                  onClick={() => setIsChatVisible(true)}
                  aria-label="whatsapp"
                >
                  <FaWhatsapp className="fixed-footer-icon" />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
      {/* Modal for Contact Form */}
      <Modal
        size='lg'
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
