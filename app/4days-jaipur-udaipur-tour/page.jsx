'use client'
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import ItineraryFaqs from "@/components/ItineraryFaqs";
import { Modal, Table } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import { FaStarOfLife, FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { destinationCovered, packageData, page_titles, tour_faqs, tour_highlights, tour_overview, tourItinerary, whatsapp_link } from "./data";
import TourPackages from "@/components/TourPackages";
import PackageAccordion from "@/components/PackageAccordion";
import ItineraryAccordion from "@/components/ItineraryAccordion";
import HeroBanner from "@/components/HeroBanner";
import { useEffect, useState } from "react";
const Page = () => {
  const [show, setShow] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [packages, setPackages] = useState([]);
  const [tourCost, setTourCost] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('/api/packageCost');
        const data = await response.json();
        setTourCost(data);
      } catch (error) {
        console.error('Error fetching package cost:', error);
      }
    };

    fetchPackages();
  }, []);

  const TourCost = tourCost.filter(
    (cost) => cost.duration === 4 && cost.package_name == '04 Days Jaipur Udaipur Tour Package'
  );

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('/api/allTourPackages');
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, []);

  const _04Days = packages.filter(
    (pkg) =>
      pkg.nights === 3 &&
      pkg.days === 4 &&
      pkg.title !== 'Jaipur - Udaipur Package Tour'
  );


  const handleShow = (title) => {
    setSelectedPackage(title);
    setShow(true);
  }
  const handleClose = () => setShow(false);
  return (
    <>
      <Breadcrumb breadcrumbKey="_4daysjaipurudaipurtour" />
      {/* banner */}
      <HeroBanner backgroundImage='/Images/Banners/jaipur-udaipur-tour.jpg' slides={page_titles} />
      {/* Tour overview */}
      <div className="container-fluid px-0 mt-3">
        <div className="container days-container overview">
          <div className="row d-flex justify-content-center align-items-center days-overview px-2">
            <div className="col-12 col-lg-11 col-sm-12 insider px-0">
              <h3
                className="text-capitalize px-3 mb-3 text-center fw-normal"
              >
                {
                  tour_overview.title
                }
              </h3>
              <p
                className="home-para px-3"
              >{tour_overview.content}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Tour Highlights */}
      <div className="container-fluid px-0 mt-3">
        <div className="container overview">
          <div className="row px-2 d-flex justify-content-center align-items-center days-highlights">
            <div className="col-12 col-lg-11 col-sm-12 insider px-0">
              <h3
                className="text-capitalize px-3 mb-3 text-center fw-normal"
              >
                {
                  tour_highlights.title
                }
              </h3>
              <div className="w-100 px-2 days-highlights-pts">
                {tour_highlights.content
                  .map((item, index) => (
                    <p className="home-para px-2 py-1 bg-white" key={index}>
                      <span className="me-2">
                        <FaStarOfLife className="icon" />
                      </span>
                      {item.point}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Travel Itinerary */}
      <div className="container-fluid px-0 mt-3">
        <div className="container overview">
          <div className="row d-flex justify-content-center align-items-center days-overview days-highlights px-2">
            <div className="col-12 col-lg-11 col-sm-12 px-0 insider">
              <h3
                className="text-capitalize px-3 mb-3 text-center fw-normal"
                dangerouslySetInnerHTML={{ __html: tourItinerary.title }}
              ></h3>
              <div className="w-100">
                <p className="px-3 text-capitalize fw-bold">
                  {destinationCovered.title}
                </p>
              </div>
              <div className="destination-covered d-flex align-items-center gap-1 section-03 overflow-auto px-3">
                {destinationCovered.destinations.map((item, index) => (
                  <p className="d-inline mb-0" key={index}>
                    {item}
                  </p>
                ))}
              </div>
              <div className="row mt-3 d-flex justify-content-center align-items-center accordion">
                <div className="col-12 col-sm-12 d-flex justify-content-center align-items-center px-4">
                  <ItineraryAccordion tourItinerary={tourItinerary} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="container-fluid px-0 mt-3">
        <div className="container overview">
          <div className="row px-2 d-flex justify-content-center align-items-center package-cost">
            <div className="col-12 col-lg-11 col-sm-12 cost-table insider px-0">
              <h3 className="text-capitalize px-3 text-center fw-normal mb-2">
                package <span className="fw-bold">cost</span>
              </h3>
              <div className="table-responsive rounded-table mx-2 my-0">
                <Table responsive className="table table-rounded my-0">
                  <thead>
                    <tr>
                      <th>No. of Travelers</th>
                      <th>Package Price</th>
                      <th>Rooms</th>
                      <th>Vehicle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TourCost.map((cost, index) => (
                      <tr key={index}>
                        <td>{cost.travelers}</td>
                        <td>{cost.cost}</td>
                        <td>{cost.rooms}</td>
                        <td>{cost.vehicle}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* more on */}
      <div className="container-fluid px-0 mt-3">
        <div className="container overview">
          <div className="row px-2 d-flex justify-content-center align-items-center package-more">
            <div className="col-12 col-lg-11 col-sm-12 cost-table insider px-0">
              <h3 className="text-capitalize px-3 text-center fw-normal mb-2">
                more <span className="fw-bold">on</span>
              </h3>
              <PackageAccordion packageData={packageData} />
            </div>
          </div>
        </div>
      </div>
      {/* packages */}
      <div className="container-fluid px-0 mt-3">
        <div className="container overview">
          <div className="row px-2 d-flex justify-content-center align-items-center package-more">
            <div className="col-12 col-lg-11 col-sm-12 cost-table insider px-0 packages">
              <h3 className="text-capitalize px-3 text-center fw-normal mb-2">
                similiar <span className="fw-bold">packages</span>
              </h3>
              <div className="py-2 d-flex align-items-stretch flex-wrap px-2">
                {_04Days.map((pkg, index) => (
                  <TourPackages key={index} pkg={pkg} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq's */}
      <div className="container-fluid px-0 mt-4 section-03">
        <div className="container py-5">
          <div className="row">
            <h3 className="mb-4 text-center">
              Frequently <span className="fw-normal">Asked Questions</span>
            </h3>
            <ItineraryFaqs faqs={tour_faqs} />
          </div>
        </div>
      </div>
      {/* Book Form */}
      <div className="d-flex justify-content-center align-items-center gap-1 my-1 package-book p-1 rounded-5">
        <button className="rounded-5 bg-tertary web-title fw-bold d-flex justify-content-center align-items-center gap-1" onClick={() => handleShow(page_titles[0].heading)}>
          book now <BiChevronRight className="text-black" />
        </button>
        <a
          href={whatsapp_link}
          target="_blank"
          className='rounded-5 whatsapp-logo'
          aria-label="whatsapp"
        >
          <FaWhatsapp />
        </a>
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

export default Page;



