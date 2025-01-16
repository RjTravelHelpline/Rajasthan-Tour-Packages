import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ItineraryAccordion from "@/components/ItineraryAccordion";
import PackageAccordion from "@/components/PackageAccordion";
import { destinationCovered, packageData, tourFaq, tourHighlights, tourItinerary, tourOverview } from "./data";
import { Table } from "react-bootstrap";
import { FaStarOfLife } from "react-icons/fa";
import HeroBanner from "@/components/HeroBanner";

const ThreeDaysJaipurPushkarPackageTour = () => {
    const content = [
        {
            subheading: '02 nights • 03 days',
            heading: '03 Days Jaipur Ajmer Pushkar Tour',
        },
    ];

    return (
        <>
            <Breadcrumb breadcrumbKey="_3daysjaipurajmerpushkartour" />
            {/* banner */}
            <HeroBanner backgroundImage='/Images/Banners/jaipur-ajmer-pushkar-tour.jpg' slides={content} />
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
                            >{tourOverview.content}</p>
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
                                        <p className="px-2 py-1 bg-white" key={index}>
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
            <div className="container-fluid px-0 mt-3 section-03">
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
export default ThreeDaysJaipurPushkarPackageTour