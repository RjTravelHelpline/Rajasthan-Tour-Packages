"use client"
import { Card, Modal } from 'react-bootstrap';
import { IoLogoWhatsapp, IoMdClose } from 'react-icons/io';
import { MdArrowOutward, MdExpandMore } from 'react-icons/md';
import { MdExpandLess } from 'react-icons/md';

import {
  _02DaysToursData,
  _03DaysToursData,
  _04DaysToursData,
  _05DaysToursData,
  _06DaysToursData,
  _07DaysToursData,
  _08DaysToursData,
  _09DaysToursData,
  _10DaysToursData,
  _11To15DaysToursData,
} from "../../data/data"
import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

// Reusable component for rendering tour packages
const TourPackageSection = ({ days, tourData }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleTours = showAll ? tourData : tourData.slice(0, 3);

  const toggleShowAll = () => setShowAll(!showAll);

  const [show, setShow] = useState(false); // Modal visibility state
  const [selectedPackage, setSelectedPackage] = useState(''); // To store selected package title

  const handleClose = () => setShow(false);
  const handleShow = (title) => {
    setSelectedPackage(title);
    setShow(true);
  };

  return (
    <>
      <div className="container-fluid px-0 section-02 pt-2">
        <div className="container packages">
          <div
            className="row tour my-3 justify-content-center align-items-stretch"
            id={`${days}-days`}
          >
            <div className="row w-100 py-3 d-flex flex-column px-0">
              <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-capitalize fw-normal">
                  <span className="fw-bold">{days} days</span> tour packages
                </h2>
              </div>
            </div>
            <div className="row py-4 d-flex align-items-stretch justify-content-center px-2">
              {visibleTours.map((pkg, index) => {
                const whatsappLink = `https://wa.me/919166555888?text=I am interested in the ${pkg.title} package for ₹${pkg.price}/-. Please provide more details.`;
                return (
                  <div
                    key={index}
                    className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-start px-2"
                  >
                    <Card className="card bg-transparent">
                      <div className="card-image-container">
                        <Card.Img
                          variant="top"
                          src={pkg.imgSrc}
                          alt="Card Package"
                        />
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
              <div className="row d-flex w-100 justify-content-between align-items-center w-100">
                <button
                  onClick={toggleShowAll}
                  className="more-btn bg-transparent d-flex justify-content-center align-items-center gap-2"
                >
                  {showAll ? (
                    <>
                      Show less <MdExpandLess />
                    </>
                  ) : (
                    <>
                      View all <MdExpandMore />
                    </>
                  )}
                </button>
                <Link
                  href={`/${days}-days-rajasthan-tour-packages`}
                  className="explore-btn card-button w-auto d-flex justify-content-between align-items-center gap-2"
                >
                  Explore now <MdArrowOutward />
                </Link>
              </div>
            </div>
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
          <ContactForm selectedPackage={selectedPackage} />
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

const RajasthanTourPackages = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.tour');
      const navLinks = document.querySelectorAll('.tour-packages-nav a');

      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - window.innerHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Add smooth scroll with 200px offset for navigation clicks
    const navLinks = document.querySelectorAll('.tour-packages-nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const offsetTop = targetSection.offsetTop - 130; // Scroll to 200px above the section

        window.scrollTo({
          top: offsetTop,
        });
      });
    });

    return () => {
      // Clean up event listeners
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach((link) => {
        link.removeEventListener('click', () => { });
      });
    };
  }, []);

  return (
    <>
      <Breadcrumb breadcrumbKey="tourByDaysHome" />

      {/* header */}
      <div className="container-fluid bg-black text-white py-5">
        <div className="row">
          <h1 className="sec-subhead">
            {' '}
            <span className="d-block fw-normal fs-5 color-tertary text-uppercase">
              Rajasthan
            </span>
            Tour packages
          </h1>
        </div>
      </div>

      <div className="container-fluid px-0">
        <div className="row tour-packages-nav">
          <a href="#02-days">
            02 <span className="fw-normal">days</span>
          </a>
          <a href="#03-days">
            03 <span className="fw-normal">days</span>
          </a>
          <a href="#04-days">
            04 <span className="fw-normal">days</span>
          </a>
          <a href="#05-days">
            05 <span className="fw-normal">days</span>
          </a>
          <a href="#06-days">
            06 <span className="fw-normal">days</span>
          </a>
          <a href="#07-days">
            07 <span className="fw-normal">days</span>
          </a>
          <a href="#08-days">
            08 <span className="fw-normal">days</span>
          </a>
          <a href="#09-days">
            09 <span className="fw-normal">days</span>
          </a>
          <a href="#10-days">
            10 <span className="fw-normal">days</span>
          </a>
          <a href="#11-15-days">
            11-15 <span className="fw-normal">days</span>
          </a>
        </div>
        <TourPackageSection days="02" tourData={_02DaysToursData} />
        <TourPackageSection days="03" tourData={_03DaysToursData} />
        <TourPackageSection days="04" tourData={_04DaysToursData} />
        <TourPackageSection days="05" tourData={_05DaysToursData} />
        <TourPackageSection days="06" tourData={_06DaysToursData} />
        <TourPackageSection days="07" tourData={_07DaysToursData} />
        <TourPackageSection days="08" tourData={_08DaysToursData} />
        <TourPackageSection days="09" tourData={_09DaysToursData} />
        <TourPackageSection days="10" tourData={_10DaysToursData} />
        <TourPackageSection days="11-15" tourData={_11To15DaysToursData} />
      </div>

      {/* bread crumb */}

    </>
  );
};

export default RajasthanTourPackages;
