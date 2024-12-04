
import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _08DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
  title: '8-Day Rajasthan Travel Plan | Rajasthan Tour Packages',
  description: "Discover the rich history of Rajasthan on this 8-day tour, including a city tour, palace and forts. Rajasthan Tour Packages you to plan for your Rajasthan tour.",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/08-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: '8-Day Rajasthan Travel Plan | Rajasthan Tour Packages',
    description: "Discover the rich history of Rajasthan on this 8-day tour, including a city tour, palace and forts. Rajasthan Tour Packages you to plan for your Rajasthan tour.",
    url: 'https://www.rajasthantourpackages.in/08-days-rajasthan-tour-packages',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: '8-Day Rajasthan Travel Plan | Rajasthan Tour Packages',
    description: "Discover the rich history of Rajasthan on this 8-day tour, including a city tour, palace and forts. Rajasthan Tour Packages you to plan for your Rajasthan tour.",
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}

const EightDaysRajasthanTourPackages = () => {
  const images = [
    {
      src: allCitiesImages.jaipur.jaipurBanner01.src,
      alt: allCitiesImages.jaipur.jaipurBanner01.alt,
      title: allCitiesImages.jaipur.jaipurBanner01.title
    },
  ];
  const content = [
    {
      duration: '07 nights • 08 days',
      title: '08 days rajasthan tour packages',
      subhead: null
    },
  ];
  return (
    <>
      <Breadcrumb breadcrumbKey="_08Days" />
      {/* header */}
      <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
        <TourCarousel images={images} content={content} />
      </div>
      {/* packages */}
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_08DaysToursData.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default EightDaysRajasthanTourPackages;