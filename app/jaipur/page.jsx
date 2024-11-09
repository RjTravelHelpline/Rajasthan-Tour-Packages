"use client"
import Breadcrumb from "@/components/Breadcrumb";
import ItineraryAccordion from "@/components/ItineraryAccordion";
import SideNavigation from "@/components/SideNavigation";
import TourCarousel from "@/components/TourCarousel";
import { about, excursions, fairandfestivals, museumsandart, restaurantsandmore, shopping, sightseeing } from "@/data/Destination Data/jaipur";
import { allCitiesImages } from "@/data/imageData";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaBars, FaListAlt, FaMapSigns, FaSearchLocation } from "react-icons/fa";
import { FiSidebar } from "react-icons/fi";
import { GoListOrdered } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { MdOutlineViewList } from "react-icons/md";

// export const metadata = {
//   title: 'Jaipur',
//   description: '',
//   alternates: {
//     canonical: 'https://www.rajasthantourpackages.in/jaipur',
//   },
//   openGraph: {
//     title: 'Jaipur',
//     description: '',
//     url: 'https://www.rajasthantourpackages.in/jaipur',
//     image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
//     siteName: 'Rajasthan Tour Packages',
//     type: 'website',
//   },
// };

const Jaipur = () => {

  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);


  const sections = [
    { id: 'about', label: 'About Jaipur' },
    { id: 'historical-attractions', label: 'Jaipur Sightseeing' },
    { id: 'cultural-experiences', label: 'Museums & Art Galleries' },
    { id: 'modern-attractions', label: 'Fairs & Festivals' },
    { id: 'excursions', label: 'Excursions' },
    { id: 'shopping', label: 'Shopping' },
    { id: 'restaurantsandmore', label: 'restaurants &  Local Cuisine' },
  ];
  const images = [
    { src: allCitiesImages.jaipur.jaipurBanner01.src },
  ];

  const content = [
    {
      duration: '',
      title: 'jaipur',
    },
  ];

  return (
    <>
      <Breadcrumb breadcrumbKey="jaipur" />
      {/* Banner */}
      <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
        <TourCarousel images={images} content={content} />
      </div>
      {/* Main Content */}
      <div className="container py-4 days-container overview destination">
        <div className="row d-flex justify-content-center align-items-center days-overview px-2">
          <div className="col-12 col-lg-10 col-sm-12 px-3">
            {/* About Section */}
            <div className="w-100 insider section-offset mb-4" id="about">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                about
              </h2>
              <p className="text-justify home-para px-3">
                {about.content}
              </p>
            </div>
            {/* Sightseeing Section */}
            <div className="w-100 insider section-offset mb-4" id="historical-attractions">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                sightseeing
              </h2>
              <div className="col-12 px-2">
                <ItineraryAccordion tourItinerary={sightseeing} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} more={true} />
              </div>
            </div>
            {/* Museums & Art Galleries Section */}
            <div className="w-100 insider section-offset mb-4" id="cultural-experiences">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                Museums & Art Galleries
              </h2>
              <div className="col-12 px-2">
                <ItineraryAccordion tourItinerary={museumsandart} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
              </div>
            </div>
            {/* Fairs & Festivals Section */}
            <div className="w-100 insider section-offset mb-4" id="modern-attractions">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                Fairs & Festivals
              </h2>
              <div className="col-12 px-2">
                <ItineraryAccordion tourItinerary={fairandfestivals} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
              </div>
            </div>
            <div className="w-100 insider section-offset mb-4" id="excursions">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                Excursions
              </h2>
              <div className="col-12 px-2">
                <ItineraryAccordion tourItinerary={excursions} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
              </div>
            </div>
            <div className="w-100 insider section-offset mb-4" id="shopping">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                shopping
              </h2>
              <div className="col-12 px-2">
                <ItineraryAccordion tourItinerary={shopping} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
              </div>
            </div>
            <div className="w-100 insider section-offset mb-4" id="restaurantsandmore">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                restaurants &  Local Cuisine
              </h2>
              <div className="col-12 px-2">
                <ItineraryAccordion tourItinerary={restaurantsandmore} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
              </div>
            </div>
          </div>
          <Modal size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}>
            <Modal.Header >
              <Modal.Title> <h4 className="text-capitalize fw-normal">Explore <span className="fw-bold color-tertary">Jaipur
              </span> </h4></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ width: '100%' }}>
              {/* Sidebar Navigation */}
              <div className="side-nav px-0 w-100 d-flex justify-content-center align-items-center">
                <SideNavigation sections={sections} offset={80} onClose={handleClose} />
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center align-items-center w-100 border-0 model-close pt-0">
              <button
                className="bg-black d-flex justify-content-center align-items-center p-2 border-0 rounded-5"
                onClick={handleClose}
              >
                <IoMdClose />
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <button onClick={handleShow} style={{ position: "fixed", bottom: '16px', left: '50%', translate: '-50%', margin: 'auto', width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }} className="bg-tertary rounded-5 text-white border-0">
        <FaSearchLocation className="text-black me-2" /> Explore
      </button>
    </>
  );
};

export default Jaipur;
