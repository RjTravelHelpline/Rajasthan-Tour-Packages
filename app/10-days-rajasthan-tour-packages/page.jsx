
import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _10DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";
export const metadata = {
  title: 'Rajasthan 10-Day Travel Itinerary | Rajasthan Tour Packages',
  description: 'Discover Rajasthan’s destinations and landmarks, and visit the state’s main cities in 10 days. Visit the Rajasthan Tour for your 10-Da Rajasthan Tour Package.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/10-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: 'Rajasthan 10-Day Travel Itinerary | Rajasthan Tour Packages',
    description: 'Discover Rajasthan’s destinations and landmarks, and visit the state’s main cities in 10 days. Visit the Rajasthan Tour for your 10-Da Rajasthan Tour Package.',
    url: 'https://www.rajasthantourpackages.in/10-days-rajasthan-tour-packages',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan 10-Day Travel Itinerary | Rajasthan Tour Packages',
    description: 'Discover Rajasthan’s destinations and landmarks, and visit the state’s main cities in 10 days. Visit the Rajasthan Tour for your 10-Da Rajasthan Tour Package.',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}
const TenDaysRajasthanTourPackages = () => {
  const images = [
    {
      src: allCitiesImages.jaipur.jaipurBanner01.src,
      alt: allCitiesImages.jaipur.jaipurBanner01.alt,
      title: allCitiesImages.jaipur.jaipurBanner01.title
    },
  ];
  const content = [
    {
      duration: '09 nights • 10 days',
      title: '10 days rajasthan tour packages',
      subhead: null
    },
  ];
  return (
    <>
      <Breadcrumb breadcrumbKey="_10Days" />
      {/* header */}
      <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
        <TourCarousel images={images} content={content} />
      </div>
      {/* packages */}
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_10DaysToursData.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TenDaysRajasthanTourPackages