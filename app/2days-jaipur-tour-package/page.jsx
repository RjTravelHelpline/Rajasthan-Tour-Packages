'use client'
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import HeroBanner from "@/components/HeroBanner";
import ItineraryAccordion from "@/components/ItineraryAccordion";
import PackageAccordion from "@/components/PackageAccordion";
import { _02DaysToursData } from "@/data/data";
import { destinationCovered, packageData, tourFaq, tourHighlights, tourItinerary, tourOverview } from "./data";
import { allCitiesImages } from "@/data/imageData";
import { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import { FaStarOfLife, FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";



const TwoDaysJaipurTourPackage = () => {
    const [show, setShow] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState('');

    const handleShow = (title) => {
        setSelectedPackage(title);
        setShow(true);
    }
    const handleClose = () => setShow(false);
    const content = [
        {
            title: "02 days jaipur tour package",
            price: ""
        },
    ];
    const messageText = `I am interested in your ${content[0].title}. Please provide more details.`;

    // Encoding the message for safe URL use
    const encodedText = encodeURIComponent(messageText);

    // Constructing the WhatsApp link with the encoded text
    const whatsappLink = `https://api.whatsapp.com/send/?phone=919166555888&text=${encodedText}&type=phone_number&app_absent=0`;
    return (
        <>
            <Breadcrumb breadcrumbKey="_2daysjaipur" />
            <HeroBanner backgroundImage={allCitiesImages.jaipur.jaipurBanner02.src} slides={[
                { heading: "02 days jaipur tour package", subheading: "01 nights • 02 days" }
            ]} />
            {/* Tour overview */}
            <div className="container-fluid px-0 mt-3">
                <div className="container days-container overview">
                    <div className="row d-flex justify-content-center align-items-center days-overview px-2">
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0">
                            <h3
                                className="text-capitalize px-3 mb-3 text-center fw-normal"
                                dangerouslySetInnerHTML={{ __html: tourOverview.title }}
                            ></h3>
                            <p
                                className="home-para px-3"
                                dangerouslySetInnerHTML={{
                                    __html: tourOverview.content[0],
                                }}
                            ></p>
                            <p
                                className="home-para px-3"
                                dangerouslySetInnerHTML={{
                                    __html: tourOverview.content.slice(1),
                                }}
                            ></p>
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
                                dangerouslySetInnerHTML={{ __html: tourHighlights.title }}
                            ></h3>
                            <div className="w-100 px-2 days-highlights-pts">
                                {tourHighlights.content
                                    .map((item, index) => (
                                        <p className="home-para px-2 py-1 bg-white" key={index}>
                                            <span className="me-2">
                                                <FaStarOfLife className="icon" />
                                            </span>
                                            {item}
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
                                <p className="px-3 text-capitalize fw-bold web-title text-black">
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
                                <Table
                                    responsive
                                    className="table table-rounded my-0"
                                >
                                    <thead>
                                        <tr>
                                            <th>No. of Travelers</th>
                                            <th>Package Price</th>
                                            <th>Rooms</th>
                                            <th>Vehicle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>02 Persons</td>
                                            <td>Rs.4400 Per Person</td>
                                            <td>01 Double Room</td>
                                            <td>AC Toyota Etios or Similar</td>
                                        </tr>
                                        <tr>
                                            <td>03 Persons</td>
                                            <td>Rs.3200 Per Person</td>
                                            <td>01 Triple Room</td>
                                            <td>AC Toyota Etios or Similar</td>
                                        </tr>
                                        <tr>
                                            <td>04 Persons</td>
                                            <td>Rs.3400 Per Person</td>
                                            <td>02 Double Rooms</td>
                                            <td>AC Maruti Ertiga or Similar</td>
                                        </tr>
                                        <tr>
                                            <td>05 Persons</td>
                                            <td>Rs.3100 Per Person</td>
                                            <td>01 Double & 01 Triple Room</td>
                                            <td>AC Innova Crysta</td>
                                        </tr>
                                        <tr>
                                            <td>06 Persons</td>
                                            <td>Rs.2900 Per Person</td>
                                            <td>03 Double Rooms</td>
                                            <td>AC Innova Crysta</td>
                                        </tr>
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
            {/* faq's */}
            <div className="container-fluid px-0 section-03">
                <div className="container py-5">
                    <div className="row">
                        <h3 className="mb-4 text-center">
                            Frequently <span className="fw-normal">Asked Questions</span>
                        </h3>
                        <Faq faqs={tourFaq.questions} />
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="container-fluid py-4 bg-tertary">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-sm-12 d-flex justify-content-end align-items-center gap-2 my-1 flex-column">
                            <h4 className="web-title text-black text-capitalize mb-0 w-100">
                                book from here
                            </h4>
                        </div>
                        <div className="col-lg-6 col-sm-12 d-flex justify-content-end align-items-center gap-2 my-1">
                            <button className="rounded-5 bg-black web-title fw-bold flex-grow-1 flex-lg-grow-0 d-flex justify-content-center align-items-center gap-1" onClick={() => handleShow(content[0].title)}>
                                book now <BiChevronRight className="color-tertary" />
                            </button>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                className='rounded-5 p-0 whatsapp-logo'
                                aria-label="whatsapp"
                            >
                                <FaWhatsapp className="fixed-footer-icon" />
                            </a>
                        </div>
                    </div>
                </div>
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
export default TwoDaysJaipurTourPackage