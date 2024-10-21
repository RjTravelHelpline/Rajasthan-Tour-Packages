"use client"
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import { destinationCovered, packageData, tourFaq, tourHighlights, tourItinerary, tourOverview } from "@/data/Days Data/_10DaysVacationTourData";
import { allCitiesImages } from "@/data/imageData";
import { useState } from "react";
import { Accordion, Carousel, Table } from "react-bootstrap";
import { FaStarOfLife } from "react-icons/fa";

const TenDaysRajasthanVacationTour = () => {
    // Handling the highlights
    const [showMore, setShowMore] = useState(false);

    const handleReadMore = () => {
        setShowMore(!showMore);
    };

    // Handling the content
    const [showMoreContent, setShowMoreContent] = useState(false);

    const handleReadMoreContent = () => {
        setShowMoreContent(!showMoreContent);
    };

    const [showItinerary, showFullItinerary] = useState(false);

    const handleShowFull = () => {
        showFullItinerary(!showItinerary);
    };
    let showAll = showItinerary
        ? tourItinerary.content
        : tourItinerary.content.slice(0, 3);

    return (
        <>
            <Breadcrumb breadcrumbKey="_10daysrajasthanvacationtour" />
            {/* banner */}
            <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
                <Carousel fade pause={false} controls={false}>
                    <Carousel.Item>
                        <img
                            src={allCitiesImages.jaipur.jaipurHoneymoon.src}
                            className="w-100"
                        />
                        <Carousel.Caption>
                            <div className="days-banner-content">
                                <h3 className="text-center color-tertary px-0 w-auto text-uppercase">
                                    09 nights <span className="text-white">•</span> 10 days
                                </h3>
                                <h1 className="mb-4 text-capitalize w-100 fw-bold text-center text-white">
                                    {' '}
                                    <span className="border-0"></span>
                                    10 days rajasthan vacation tour
                                </h1>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={allCitiesImages.jaisalmer.jaisalmerBanner.src}
                            className="w-100"
                        />
                        <Carousel.Caption>
                            <div className="days-banner-content">
                                <h3 className="text-center color-tertary px-0 w-auto text-uppercase">
                                    09 nights <span className="text-white">•</span> 10 days
                                </h3>
                                <h1 className="mb-4 text-capitalize w-100 fw-bold text-center text-white">
                                    {' '}
                                    <span className="border-0"></span>
                                    10 days rajasthan vacation tour
                                </h1>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* Tour overview */}
            <div className="container-fluid px-0 pt-4">
                <div className="container days-container overview">
                    <div className="row d-flex justify-content-center align-items-center days-overview px-2">
                        <div className="col-12 col-lg-11 col-sm-12 px-0 insider">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal"
                                dangerouslySetInnerHTML={{ __html: tourOverview.title }}
                            ></h2>
                            <p
                                className="home-para px-3"
                                dangerouslySetInnerHTML={{
                                    __html: tourOverview.content.slice(0, 1),
                                }}
                            ></p>
                            {showMoreContent && (
                                <>
                                    {' '}
                                    <p
                                        className="home-para px-3"
                                        dangerouslySetInnerHTML={{
                                            __html: tourOverview.content.slice(1, 2),
                                        }}
                                    ></p>
                                    <p
                                        className="home-para px-3"
                                        dangerouslySetInnerHTML={{
                                            __html: tourOverview.content.slice(2, 3),
                                        }}
                                    ></p>
                                </>
                            )}
                            <div className="d-flex justify-content-center align-items-center py-3">
                                <button
                                    className=" mb-0 text-uppercase highlight-more-btn mb-0"
                                    onClick={handleReadMoreContent}
                                >
                                    {showMoreContent ? <>Show Less</> : <>view all</>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tour Highlights */}
            <div className="container-fluid px-0 pt-4">
                <div className="container overview">
                    <div className="row px-2 d-flex justify-content-center align-items-center days-highlights">
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal"
                                dangerouslySetInnerHTML={{ __html: tourHighlights.title }}
                            ></h2>
                            <div className="w-100 px-2 days-highlights-pts">
                                {tourHighlights.content
                                    .slice(0, showMore ? tourHighlights.content.length : 3)
                                    .map((item, index) => (
                                        <p className="home-para px-2 py-1 bg-white" key={index}>
                                            <span className="me-2">
                                                <FaStarOfLife className="icon" />
                                            </span>
                                            {item}
                                        </p>
                                    ))}
                            </div>

                            <div className="d-flex justify-content-center align-items-center py-3">
                                <button
                                    className=" mb-0 text-uppercase highlight-more-btn mb-0"
                                    onClick={handleReadMore}
                                >
                                    {showMore ? <>Show Less</> : <>view all</>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Travel Itinerary */}
            <div className="container-fluid pt-4 px-0">
                <div className="container overview">
                    <div className="row d-flex justify-content-center align-items-center days-overview days-highlights px-2">
                        <div className="col-12 col-lg-11 col-sm-12 px-0 insider">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal"
                                dangerouslySetInnerHTML={{ __html: tourItinerary.title }}
                            ></h2>
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
                                    <Accordion className="w-100">
                                        {showAll.map((item, index) => (
                                            <Accordion.Item
                                                className="w-100 d-flex justify-content-between align-items-center flex-column accord-item"
                                                eventKey={index.toString()}
                                                key={index}
                                            >
                                                <Accordion.Header className="d-flex w-100 justify-content-between accord-head bg-white">
                                                    <div className="d-flex flex-column">
                                                        <h3 className="mb-0 accordion-question fw-normal fw-bold text-uppercase w-100 itinerary-title">
                                                            {item.day}
                                                        </h3>
                                                        <p className="d-block w-100 fw-normal text-capitalize mb-0 ">
                                                            {item.title}
                                                        </p>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p
                                                        className="w-100 d-flex flex-column justify-content-start align-items-start mb-0 px-2 py-0"
                                                        dangerouslySetInnerHTML={{ __html: item.content }}
                                                    />
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center py-3">
                                <button
                                    className=" mb-0 text-uppercase highlight-more-btn mb-0"
                                    onClick={handleShowFull}
                                >
                                    {showItinerary ? <>Show Less</> : <>view full itinerary</>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* table */}
            <div className="container-fluid pt-4 px-0">
                <div className="container overview">
                    <div className="row px-2 d-flex justify-content-center align-items-center package-cost">
                        <div className="col-12 col-lg-11 col-sm-12 cost-table insider px-0">
                            <h2 className="text-capitalize px-3 text-center fw-normal mb-2">
                                package <span className="fw-bold">cost</span>
                            </h2>
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
                                        <tr>
                                            <td>02 Persons</td>
                                            <td>Rs.36600 Per Person</td>
                                            <td>01 Double Room</td>
                                            <td>Exclusive AC Toyota Etios or Similar</td>
                                        </tr>
                                        <tr>
                                            <td>03 Persons</td>
                                            <td>Rs.29200 Per Person</td>
                                            <td>01 Triple Room</td>
                                            <td>Exclusive AC Toyota Etios or Similar</td>
                                        </tr>
                                        <tr>
                                            <td>04 Persons</td>
                                            <td>Rs.29600 Per Person</td>
                                            <td>02 Double Rooms</td>
                                            <td>Exclusive AC Maruti Ertiga or Similar</td>
                                        </tr>
                                        <tr>
                                            <td>05 Persons</td>
                                            <td>Rs.27300 Per Person</td>
                                            <td>01 Double & 01 Triple Room</td>
                                            <td>Exclusive AC Innova Crysta</td>
                                        </tr>
                                        <tr>
                                            <td>06 Persons</td>
                                            <td>Rs.26300 Per Person</td>
                                            <td>03 Double Rooms</td>
                                            <td>Exclusive AC Innova Crysta</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* more on */}
            <div className="container-fluid pt-4 px-0">
                <div className="container overview">
                    <div className="row px-2 d-flex justify-content-center align-items-center package-more">
                        <div className="col-12 col-lg-11 col-sm-12 cost-table insider px-0">
                            <h2 className="text-capitalize px-3 text-center fw-normal mb-2">
                                more <span className="fw-bold">on</span>
                            </h2>
                            <Accordion className="w-100 px-2">
                                {packageData.map((item, index) => (
                                    <Accordion.Item
                                        className="w-100 d-flex flex-column accord-item mb-3"
                                        eventKey={index.toString()}
                                        key={index}
                                    >
                                        <Accordion.Header className="d-flex w-100 justify-content-between bg-white">
                                            <item.icon className="icon" />
                                            <div className="d-flex flex-column">
                                                <h3 className="mb-0 accordion-question fw-normal fw-bold text-uppercase w-100 itinerary-title">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body className="w-100 p-2">
                                            <p
                                                className="w-100 d-flex flex-column justify-content-start align-items-start mb-0 px-2 py-0 accordion-answer"
                                                dangerouslySetInnerHTML={{ __html: item.content }}
                                            />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
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
                        <Faq faqs={tourFaq.questions} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TenDaysRajasthanVacationTour;