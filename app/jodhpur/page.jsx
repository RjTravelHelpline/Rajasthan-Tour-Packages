import Breadcrumb from "@/components/Breadcrumb";
import ItineraryAccordion from "@/components/ItineraryAccordion";
import NavigationModal from "@/components/NavigationModal";
import PackagesSlider from "@/components/PackagesSlider";
import ReadMoreToggle from "@/components/ReadMore";
import RentalSlider from "@/components/RentalSlider";
import TourCarousel from "@/components/TourCarousel";
import { allCabRentals } from "@/data/cabRentalData";
import { jodhpurTourPackagesData } from "@/data/data";
import { about, excursions, fairandfestivals, howToReach, museumsandart, overview, restaurantsandmore, shopping, sightseeing } from "@/data/Destination Data/jodhpur";
import { allCitiesImages } from "@/data/imageData";
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
  title: "Things to Do in Jodhpur Tourism | Rajasthan Tour Packages",
  description: "Learn about Jodhpur Fort sporting and leisure activities, city markets, and more. Check out Rajasthan Tour Packages for the ideal planning of our Jodhpur tour.",
  keywords: [
    "Jodhpur Tourism",
    "Things to Do in Jodhpur",
    "Jodhpur Sightseeing",
    "Jodhpur Travel Guide",
    "Jodhpur Attractions",
    "Museums in Jodhpur",
    "Art Galleries in Jodhpur",
    "Jodhpur Fairs and Festivals",
    "Excursions from Jodhpur",
    "Shopping in Jodhpur",
    "Local Cuisine in Jodhpur",
    "Restaurants in Jodhpur",
    "Heritage Sites in Jodhpur"
  ],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/jodhpur",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: "Things to Do in Jodhpur Tourism | Rajasthan Tour Packages",
    description: "Learn about Jodhpur Fort sporting and leisure activities, city markets, and more. Check out Rajasthan Tour Packages for the ideal planning of our Jodhpur tour.",
    image: 'https://www.rajasthantourpackages.in/Images/Banners/jodhpur-banner02.webp'// Add image URL if needed
  },
  openGraph: {
    title: "Things to Do in Jodhpur Tourism | Rajasthan Tour Packages",
    description: "Learn about Jodhpur Fort sporting and leisure activities, city markets, and more. Check out Rajasthan Tour Packages for the ideal planning of our Jodhpur tour.",
    url: "https://www.rajasthantourpackages.in/jodhpur",
    images: [
      {
        url: 'https://www.rajasthantourpackages.in/Images/Banners/jodhpur-banner02.webp', // Add image URL if needed
      }
    ],
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  }
};


const Jodhpur = () => {

  const sections = [
    { id: 'about', label: 'About jodhpur', icon: <FaBookOpen /> },
    {
      id: 'historical-attractions',
      label: 'jodhpur Sightseeing',
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
      src: allCitiesImages.jodhpur.jodhpurBanner02.src,
      alt: allCitiesImages.jodhpur.jodhpurBanner02.alt,
      title: allCitiesImages.jodhpur.jodhpurBanner02.title,
    },
  ];
  const content = [
    {
      duration: null,
      title: 'Jodhpur',
      subhead: 'The Blue City of Rajasthan'
    },
  ];
  return (
    <>
      <Breadcrumb breadcrumbKey="jodhpur" />
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
                about <span className="fw-bold"> jodhpur</span>
              </h2>
              <p
                className="text-justify home-para px-3"
                dangerouslySetInnerHTML={{ __html: about.content[0] }}
              />
              <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={about.content.slice(1)} />
            </div>
            {/* Sightseeing */}
            <div className="w-100 insider section-offset mb-4" id="historical-attractions">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                jodhpur
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
              <PackagesSlider exploreAll={false} packages={jodhpurTourPackagesData} href='/jodhpur-tour-packages' />
            </div>
            {/* cab rentals */}
            <div className="w-100 insider section-offset mb-4" id="cab-rentals">
              <h2 className="text-capitalize px-3 mb-3 text-center fw-normal">
                cab  <span className="fw-bold">rentals</span>
              </h2>
              <RentalSlider rentals={allCabRentals} />
            </div>
            {/* day tours */}
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
      <NavigationModal sections={sections} place='jodhpur' />
    </>
  );
};

export default Jodhpur;
