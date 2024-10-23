
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ItineraryAccordion from "@/components/ItineraryAccordion";
import PackageAccordion from "@/components/PackageAccordion";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import { destinationCovered, packageData, tourFaq, tourHighlights, tourItinerary, tourOverview } from "@/data/Days Data/_5DaysGoldenTriangleTourData";
import { allCitiesImages } from "@/data/imageData";
import { Table } from "react-bootstrap";
import { FaStarOfLife } from "react-icons/fa";


export const metadata = {
    title: 'Golden Triangle Tour 5 Days Package | Rajasthan Tour Packages',
    description: "Get on a trip to India's iconic destinations at your 5-Day Golden Triangle Tour, featuring Delhi, Agra, and Jaipur. Plan our trip now at Rajasthan Tour Packages.",
    alternates: {

        canonical: 'https://www.rajasthantourpackages.in/5days-golden-triangle-tour',
    }
}

const FiveDaysGoldenTriangleTour = () => {

    const images = [
        { src: allCitiesImages.jaisalmer.jaisalmerHaweli.src },
        { src: allCitiesImages.jaisalmer.jaisalmerLeisure.src },
    ];

    const content = [
        {
            duration: '04 nights • 05 days',
            title: '05 Days Golden Triangle Tour',
        },
        {
            duration: '04 nights • 05 days',
            title: '05 Days Golden Triangle Tour',
        },
    ];


    return (
        <>

            <Breadcrumb breadcrumbKey="_5daysgoldentriangletour" />
            {/* banner */}
            <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
                <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
                    <TourCarousel images={images} content={content} />
                </div>
            </div>
            {/* Tour overview */}
            <div className="container-fluid px-0 pt-4">
                <div className="container days-container overview">
                    <div className="row d-flex justify-content-center align-items-center days-overview px-2">
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal"
                                dangerouslySetInnerHTML={{ __html: tourOverview.title }}
                            ></h2>

                            <p
                                className="home-para px-3"
                                dangerouslySetInnerHTML={{
                                    __html: tourOverview.content.slice(0, 1),
                                }}
                            ></p>   <ReadMoreToggle>
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
                                </>   </ReadMoreToggle>
                            <span className="py-3 d-block"></span>
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
                                    .slice(0, 3)
                                    .map((item, index) => (
                                        <p className="home-para px-2 py-1 bg-white" key={index}>
                                            <span className="me-2">
                                                <FaStarOfLife className="icon" />
                                            </span>
                                            {item}
                                        </p>
                                    ))}
                                <ReadMoreToggle buttonText="Read More">
                                    {tourHighlights.content
                                        .slice(3)
                                        .map((item, index) => (
                                            <p className="home-para px-2 py-1 bg-white" key={index}>
                                                <span className="me-2">
                                                    <FaStarOfLife className="icon" />
                                                </span>
                                                {item}
                                            </p>
                                        ))}
                                </ReadMoreToggle>
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
                                    <ItineraryAccordion tourItinerary={tourItinerary} />
                                </div>
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
                                            <td>Rs.19299 Per Person</td>
                                            <td>01 Double Room</td>
                                            <td>Exclusive AC Toyota Etios or Similar</td>
                                        </tr>
                                        <tr>
                                            <td>03 Persons</td>
                                            <td>Rs.14799 Per Person</td>
                                            <td>01 Triple Room</td>
                                            <td>Exclusive AC Toyota Etios or Similar</td>
                                        </tr>
                                        <tr>
                                            <td>04 Persons</td>
                                            <td>Rs.14899 Per Person</td>
                                            <td>02 Double Rooms</td>
                                            <td>Exclusive AC Maruti Ertiga or Similar</td>
                                        </tr>
                                        <tr>
                                            <td>05 Persons</td>
                                            <td>Rs.13499 Per Person</td>
                                            <td>01 Double & 01 Triple Room</td>
                                            <td>Exclusive AC Innova Crysta</td>
                                        </tr>
                                        <tr>
                                            <td>06 Persons</td>
                                            <td>Rs.12899 Per Person</td>
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
                            <PackageAccordion packageData={packageData} />
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

export default FiveDaysGoldenTriangleTour;