import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _07DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
  title: 'Rajasthan 7-Day Travel Adventure | Rajasthan Tour Packages',
  description: "7-day guide on touring Rajasthan royalty-free with its forts, palace, and other highlights. You can book your 7-Day Rajasthan Tour Packages to make your tour.",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/07-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: 'Rajasthan 7-Day Travel Adventure | Rajasthan Tour Packages',
    description: "7-day guide on touring Rajasthan royalty-free with its forts, palace, and other highlights. You can book your 7-Day Rajasthan Tour Packages to make your tour.",
    url: 'https://www.rajasthantourpackages.in/07-days-rajasthan-tour-packages',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan 7-Day Travel Adventure | Rajasthan Tour Packages',
    description: "7-day guide on touring Rajasthan royalty-free with its forts, palace, and other highlights. You can book your 7-Day Rajasthan Tour Packages to make your tour.",
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}


const SevenDaysRajasthanTourPackages = () => {
  const images = [
    {
      src: allCitiesImages.jaipur.jaipurBanner01.src,
      alt: allCitiesImages.jaipur.jaipurBanner01.alt,
      title: allCitiesImages.jaipur.jaipurBanner01.title
    },
  ];
  const content = [
    {
      duration: '06 nights • 07 days',
      title: '07 days rajasthan tour packages',
      subhead: null
    },
  ];
  return (
    <>
      <Breadcrumb breadcrumbKey="_07Days" />
      {/* header */}
      <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
        <TourCarousel images={images} content={content} />
      </div>

      {/* packages */}
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_07DaysToursData.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SevenDaysRajasthanTourPackages;