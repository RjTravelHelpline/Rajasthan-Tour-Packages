"use client";
import { IoLogoWhatsapp, IoMdClose } from 'react-icons/io';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import SlickSlider from './SlickSlider';
import { Card, Container, Modal, Row } from 'react-bootstrap';
import Link from 'next/link';
import { ExploreAll } from './ExploreAll';
import Image from 'next/image';
import { FaCalendarDays, FaClock } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import Skeleton from "react-loading-skeleton";
import SkeletonTourPackage from './SkeletonTourPackage';

const Packages = () => {
  const link = (text, url) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="anchor color-tertary"
      >
        {text}
      </a>
    );
  };
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(`/api/allTourPackages?timestamp=${Date.now()}`);
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };
    fetchPackages();
  }, []);

  const popularTours = packages.filter(
    (pkg) => pkg.category === 'popular'
  );
  const visiblePackages = popularTours.slice(0, 6);

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
      <section className="container-fluid section-01 py-5 position-relative">
        <Container className="packages mb-5">
          <Row className="py-2 px-2 d-flex justify-content-center align-items-center">
            <div className="d-flex-justify-content-center align-items-center">
              <h2 className="text-center text-capitalize home-head web-title">
                <span className="fw-normal">popular </span> tour packages
              </h2>
            </div>
            <p className="text-center home-para">
              Discover the essence of Rajasthan with our{' '}
              <span className="fw-bold">Popular Tour Packages </span>We offer
              carefully curated itineraries that showcase this royal {`state's`}
              vibrant culture, majestic forts, and stunning landscapes. Whether {`you're`}{' '}
              a history buff, a cultural enthusiast, or an adventure seeker, {readMore && (
                <>
                  Whether {`you're`}{' '}
                  a history buff, a cultural enthusiast, or an adventure seeker,
                  our {link('popular tour packages', 'https://www.rajasthantourpackages.in/popular-tour-packages')} cater to all interests, ensuring a
                  truly memorable experience. Book your journey today and get
                  ready to immerse yourself in the timeless charm of Rajasthan
                  with our tour packages designed to create lifelong memories.
                </>)}
              <button className="read-more-btn p-0 bg-transparent" onClick={handleReadMore}>
                {readMore ? <></> : <>...</>}
              </button>
            </p>
          </Row>
          <Row className="row py-4 d-flex align-items-stretch px-0">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                <SkeletonTourPackage key={index} />
              )
              ) : (
                <SlickSlider>
                  {visiblePackages.map((pkg, index) => {
                    const messageText = `I am interested in the ${pkg.title} package for ₹${pkg.price}/-. Please provide more details.`;
                    const encodedText = encodeURIComponent(messageText);
                    const whatsappLink = `https://api.whatsapp.com/send/?phone=919166555888&text=${encodedText}&type=phone_number&app_absent=0`;
                    return (
                      <div
                        key={index}
                        className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-start px-2"
                      >
                        <Card className="card bg-transparent">
                          <div className="card-image-container">
                            <Image src={pkg.imgSrc} alt={pkg.alt} title={pkg.imgTitle} width={600}
                              height={800} placeholder='empty' />
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
                                <Link href={pkg.navigate} className="w-100 rounded-0 text-center d-block">
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
                    );
                  })}
                </SlickSlider>
              )}

          </Row>
          <ExploreAll text="explore all" href="/popular-tour-packages" />
        </Container>
      </section>

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
