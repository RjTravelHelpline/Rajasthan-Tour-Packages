import Breadcrumb from "@/components/Breadcrumb";
import ItineraryAccordion from "@/components/ItineraryAccordion";
import TourCarousel from "@/components/TourCarousel";
import { bestTimeToVisit, chooseTheBest, conclusion, howToTravel, overview, whyGroupTours } from "@/data/Destination Data/rajasthanGroupTours";
import { allCitiesImages } from "@/data/imageData";
export const metadata = {
    title: 'Group Tour Packages for Rajasthan | Rajasthan Tour Packages',
    description: 'Enjoy memorable group tour packages for Rajasthan. Discover royal palaces, vibrant culture, and comfortable facilities. Plan your group adventure today.',
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-group-tours",
    },
    openGraph: {
        title: 'Group Tour Packages for Rajasthan | Rajasthan Tour Packages',
        description: 'Enjoy memorable group tour packages for Rajasthan. Discover royal palaces, vibrant culture, and comfortable facilities. Plan your group adventure today.',
        url: "https://www.rajasthantourpackages.in/rajasthan-group-tours",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Group Tour Packages for Rajasthan | Rajasthan Tour Packages',
        description: 'Enjoy memorable group tour packages for Rajasthan. Discover royal palaces, vibrant culture, and comfortable facilities. Plan your group adventure today.',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};
const GroupTours = () => {
    const images = [
        {
            src: allCitiesImages.jaisalmer.jaisalmerHaweli.src,
            alt: allCitiesImages.jaisalmer.jaisalmerHaweli.alt,
            title: allCitiesImages.jaisalmer.jaisalmerHaweli.title
        },
    ];
    const content = [
        {
            duration: null,
            title: 'Rajasthan Group Tours',
            subhead: 'An Unforgettable Journey'
        },
    ];
    return (
        <>
            <Breadcrumb breadcrumbKey="jaipur" />
            {/* Banner */}
            <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
                <TourCarousel images={images} content={content} />
            </div>
            {/* content */}
            <div className="container py-4 days-container overview destination">
                <div className="row d-flex justify-content-center align-items-center days-overview px-2">
                    <div className="col-12 col-lg-12 col-sm-12 px-3">
                        {/* overview */}
                        {overview && (
                            <div className="w-100 insider section-offset mb-4" id="about">
                                <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                    <span className="fw-bold"> overview</span>
                                </h2>
                                <p
                                    className="text-justify home-para px-3"
                                    dangerouslySetInnerHTML={{ __html: overview.content }}
                                />
                            </div>
                        )}
                        <div className="w-100 insider section-offset mb-4" id="historical-attractions">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                Why Rajasthan <strong>Group Tours</strong>?
                            </h2>
                            <div className="col-12 px-2">
                                <p dangerouslySetInnerHTML={{ __html: whyGroupTours.heading }} className="px-2 text-justify" />
                                <ItineraryAccordion tourItinerary={whyGroupTours} stylePara='destination-accordion-para' style="destination-accordion-head" />
                            </div>
                        </div>
                        <div className="w-100 insider section-offset mb-4" id="historical-attractions">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                choose <strong>travel in group</strong>
                            </h2>
                            <div className="col-12 px-2">
                                <p dangerouslySetInnerHTML={{ __html: howToTravel.heading }} className="px-2 text-justify" />
                                <ItineraryAccordion tourItinerary={howToTravel} stylePara='destination-accordion-para' style="destination-accordion-head" />
                            </div>
                        </div>
                        <div className="w-100 insider section-offset mb-4" id="historical-attractions">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                best time <strong>to visit</strong>
                            </h2>
                            <div className="col-12 px-2">
                                <p dangerouslySetInnerHTML={{ __html: bestTimeToVisit.heading }} className="px-2 text-justify" />
                                <ItineraryAccordion tourItinerary={bestTimeToVisit} stylePara='destination-accordion-para' style="destination-accordion-head" />
                            </div>
                        </div>
                        <div className="w-100 insider section-offset mb-4" id="historical-attractions">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                how to <strong>travel in group</strong>
                            </h2>
                            <div className="col-12 px-2">
                                <p dangerouslySetInnerHTML={{ __html: howToTravel.heading }} className="px-2 text-justify" />
                                <ItineraryAccordion tourItinerary={howToTravel} stylePara='destination-accordion-para' style="destination-accordion-head" />
                            </div>
                        </div>
                        <div className="w-100 insider section-offset mb-4" id="historical-attractions">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                choose the <strong>best</strong>
                            </h2>
                            <div className="col-12 px-2">
                                <p dangerouslySetInnerHTML={{ __html: chooseTheBest.heading }} className="px-2 text-justify" />
                                <ItineraryAccordion tourItinerary={chooseTheBest} stylePara='destination-accordion-para' style="destination-accordion-head" />
                            </div>
                        </div>
                        <div className="w-100 insider section-offset mb-4" id="historical-attractions">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                <strong>conclusion</strong>
                            </h2>
                            <div className="col-12 px-2">
                                <p dangerouslySetInnerHTML={{ __html: conclusion.heading }} className="px-2 text-justify" />
                                <ItineraryAccordion tourItinerary={conclusion} stylePara='destination-accordion-para' style="destination-accordion-head" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default GroupTours;
