import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _06DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";
export const metadata = {
  title: 'Memorable 06 Days Rajasthan Trip | Rajasthan Tour Packages',
  description: "Take a 6-day Rajasthan tour that includes visits to forts, palaces and colourful cities. Explore and Book with Rajasthan Tour Packages to enjoy a cultural trip.",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/06-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: 'Memorable 06 Days Rajasthan Trip | Rajasthan Tour Packages',
    description: "Take a 6-day Rajasthan tour that includes visits to forts, palaces and colourful cities. Explore and Book with Rajasthan Tour Packages to enjoy a cultural trip.",
    url: 'https://www.rajasthantourpackages.in/06-days-rajasthan-tour-packages',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Memorable 06 Days Rajasthan Trip | Rajasthan Tour Packages',
    description: "Take a 6-day Rajasthan tour that includes visits to forts, palaces and colourful cities. Explore and Book with Rajasthan Tour Packages to enjoy a cultural trip.",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}
const SixDaysRajasthanTourPackages = () => {
  const images = [
    {
      src: allCitiesImages.jaipur.jaipurBanner01.src,
      alt: allCitiesImages.jaipur.jaipurBanner01.alt,
      title: allCitiesImages.jaipur.jaipurBanner01.title
    },
  ];
  const content = [
    {
      duration: '05 nights • 06 days',
      title: '06 days rajasthan tour packages',
      subhead: null
    },
  ];
  return (
    <>
      <Breadcrumb breadcrumbKey="_06Days" />
      {/* header */}
      <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
        <TourCarousel images={images} content={content} />
      </div>

      {/* packages */}
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_06DaysToursData.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SixDaysRajasthanTourPackages;