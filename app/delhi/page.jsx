import Breadcrumb from "@/components/Breadcrumb";
import ItineraryAccordion from "@/components/ItineraryAccordion";
import NavigationModal from "@/components/NavigationModal";
import PackagesSlider from "@/components/PackagesSlider";
import ReadMoreToggle from "@/components/ReadMore";
import RentalSlider from "@/components/RentalSlider";
import TourCarousel from "@/components/TourCarousel";
import { allCabRentals } from "@/data/cabRentalData";
import { delhiTourPackagesData } from "@/data/data";
import { about, excursions, fairandfestivals, howToReach, museumsandart, overview, restaurantsandmore, shopping, sightseeing } from "@/data/Destination Data/delhi";
import { allCitiesImages, allStatesImages } from "@/data/imageData";
import { AiFillCustomerService } from 'react-icons/ai';
import {
    FaBookOpen,
    FaHotel,
    FaPaintBrush,
    FaPlane,
    FaShoppingCart,
    FaTaxi,
    FaTheaterMasks,
    FaUtensils,
} from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { IoLocate } from "react-icons/io5";
import { MdOutlineExplore, MdTour } from 'react-icons/md';


export const metadata = {
    title: "Delhi Sightseeing City Tour | Rajasthan Tour Packages",
    description: "Explore Delhi with a guided city tour. Discover the best tourist spots, including historical landmarks, vibrant markets, and rich cultural heritage.",
    keywords: [
        "Delhi Tour Packages",
        "Delhi Sightseeing Tour",
        "Delhi to Rajasthan Tour",
        "Delhi Tourism",
        "Historical Places in Delhi",
        "Delhi City Tour",
        "Delhi Monuments Tour",
        "Rajasthan Tour from Delhi",
        "Delhi Heritage Tour",
        "Cultural Tours in Delhi",
        "Delhi Day Trips and Excursions",
        "Local Food Tour in Delhi",
        "Best Places to Visit in Delhi"
    ],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/delhi",
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: "Delhi Sightseeing City Tour | Rajasthan Tour Packages",
        description: "Explore Delhi's famous attractions, historical sites, markets, and culture with a guided city tour.",
        images: 'https://www.rajasthantourpackages.in/Images/Banners/delhi-banner.webp',
    },
    openGraph: {
        title: "Delhi Sightseeing City Tour | Rajasthan Tour Packages",
        description: "Explore Delhi's famous attractions, historical sites, markets, and culture with a guided city tour.",
        url: "https://www.rajasthantourpackages.in/delhi",
        images: 'https://www.rajasthantourpackages.in/Images/Banners/delhi-banner.webp',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    }
};

const Delhi = () => {
    const sections = [
        { id: 'about', label: 'About delhi', icon: <FaBookOpen /> },
        {
            id: 'historical-attractions',
            label: 'delhi Sightseeing',
            icon: <GoLocation />,
        },
        {
            id: 'cultural-experiences',
            label: 'Museums & Art Galleries',
            icon: <FaPaintBrush />,
        },
        {
            id: 'modern-attractions',
            label: 'Fairs & Festivals',
            icon: <FaTheaterMasks />,
        },
        { id: 'excursions', label: 'Excursions', icon: <MdOutlineExplore /> },
        { id: 'shopping', label: 'Shopping', icon: <FaShoppingCart /> },
        {
            id: 'restaurantsandmore',
            label: 'Restaurants & Local Cuisine',
            icon: <FaUtensils />,
        },
        { id: 'tour-packages', label: 'Tour Packages', icon: <FaPlane /> },
        { id: 'cab-rentals', label: 'Cab Rentals', icon: <FaTaxi /> },
        { id: 'day-tours', label: 'day tours', icon: <MdTour /> },
        { id: 'best-hotels', label: 'best hotels', icon: <FaHotel /> },
        {
            id: 'tourist-guide-services',
            label: 'tourist guide services',
            icon: <AiFillCustomerService />,
        },
        {
            id: 'how-to-reach',
            label: 'how to reach',
            icon: <IoLocate />,
        },
    ];
    const images = [
        {
            src: allStatesImages.delhi.delhiBanner.src,
            alt: allStatesImages.delhi.delhiBanner.alt,
            title: allStatesImages.delhi.delhiBanner.title,
        },
    ];

    const content = [
        {
            duration: '',
            title: 'delhi',
            subhead: 'The Heart of India'
        },
    ];
    return (
        <>
            <Breadcrumb breadcrumbKey="delhi" />
            {/* Banner */}
            <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
                <TourCarousel images={images} content={content} />
            </div>
            {/* Main Content */}
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
                        {/* About Section */}
                        <div className="w-100 insider section-offset mb-4" id="about">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                about <span className="fw-bold"> delhi</span>
                            </h2>
                            <p
                                className="text-justify home-para px-3"
                                dangerouslySetInnerHTML={{ __html: about.content[0] }}
                            />
                            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={about.content.slice(1)} />
                        </div>
                        {/* Sightseeing Section */}
                        <div className="w-100 insider section-offset mb-4" id="historical-attractions">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                delhi
                                <span className="fw-bold"> sightseeing</span>
                            </h2>
                            <div className="col-12 px-2">
                                <p dangerouslySetInnerHTML={{ __html: sightseeing.heading }} className="px-2 text-justify" />
                                <ItineraryAccordion tourItinerary={sightseeing} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} more={true} />
                            </div>
                        </div>
                        {/* Museums & Art Galleries Section */}
                        <div className="w-100 insider section-offset mb-4" id="cultural-experiences">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                Museums &   <span className="fw-bold">Art Galleries</span>
                            </h2>
                            <div className="col-12 px-2">
                                <p dangerouslySetInnerHTML={{ __html: museumsandart.heading }} className="px-2 text-justify" />
                                <ItineraryAccordion tourItinerary={museumsandart} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
                            </div>
                        </div>
                        {/* Fairs & Festivals Section */}
                        <div className="w-100 insider section-offset mb-4" id="modern-attractions">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                Fairs &  <span className="fw-bold"> Festivals</span>
                            </h2>
                            <div className="col-12 px-2">
                                <p dangerouslySetInnerHTML={{ __html: fairandfestivals.heading }} className="px-2 text-justify" />
                                <ItineraryAccordion tourItinerary={fairandfestivals} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
                            </div>
                        </div>
                        {/* excursions */}
                        <div className="w-100 insider section-offset mb-4" id="excursions">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                Places to  <span className="fw-bold"> visit</span>
                            </h2>
                            <div className="col-12 px-2">
                                <p dangerouslySetInnerHTML={{ __html: excursions.heading }} className="px-2 text-justify" />
                                <ItineraryAccordion tourItinerary={excursions} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
                            </div>
                        </div>
                        {/* shopping */}
                        <div className="w-100 insider section-offset mb-4" id="shopping">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                <span className="fw-bold">shopping</span>
                            </h2>
                            <div className="col-12 px-2">
                                <p dangerouslySetInnerHTML={{ __html: shopping.heading }} className="px-2 text-justify" />
                                <ItineraryAccordion tourItinerary={shopping} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
                            </div>
                        </div>
                        {/* restaurants */}
                        <div className="w-100 insider section-offset mb-4" id="restaurantsandmore">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                restaurants &  <span className="fw-bold">Local Cuisine</span>
                            </h2>
                            <div className="col-12 px-2">
                                <p dangerouslySetInnerHTML={{ __html: restaurantsandmore.heading }} className="px-2 text-justify" />
                                <ItineraryAccordion tourItinerary={restaurantsandmore} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
                            </div>
                        </div>
                        {/* how to reach */}
                        <div className="w-100 insider section-offset mb-4" id="how-to-reach">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                how to <span className="fw-bold">reach</span>
                            </h2>
                            <div className="col-12 px-2">
                                <p dangerouslySetInnerHTML={{ __html: howToReach.heading }} className="px-2 text-justify" />
                                <ItineraryAccordion tourItinerary={howToReach} stylePara='destination-accordion-para' style="destination-accordion-head" showIcon={true} />
                            </div>
                        </div>
                        {/* tour packages */}
                        <div className="w-100 insider section-offset mb-4" id="tour-packages">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                tour
                                <span className="fw-bold"> packages</span>
                            </h2>
                            <PackagesSlider exploreAll={false} packages={delhiTourPackagesData} href='/delhi-tour-packages' />
                        </div>
                        {/* cab rentals */}
                        <div className="w-100 insider section-offset mb-4" id="cab-rentals">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                cab  <span className="fw-bold">rentals</span>
                            </h2>
                            <RentalSlider rentals={allCabRentals} />
                        </div>
                        {/* day trips */}
                        <div className="w-100 insider section-offset mb-4" id="day-tours">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                day <span className="fw-bold">tours</span>
                            </h2>
                        </div>
                        {/* best hotels */}
                        <div className="w-100 insider section-offset mb-4" id="best-hotels">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                best  <span className="fw-bold">hotels</span>
                            </h2>
                        </div>
                        {/* tourist guide */}
                        <div className="w-100 insider section-offset mb-4" id="tourist-guide-services">
                            <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                                tourist <span className="fw-bold">guide </span>services
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <NavigationModal sections={sections} place='delhi' />
        </>
    );
};

export default Delhi;
