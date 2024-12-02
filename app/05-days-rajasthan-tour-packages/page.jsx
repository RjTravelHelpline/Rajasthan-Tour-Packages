import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _05DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
  title: 'Explore 05 Days Tour in Rajasthan | Rajasthan Tour Packages',
  description: "You can get to know the best places to visit in Rajasthan in 5 days. Book Rajasthan Tour Packages to tour through the great landmarks and cities of the world.",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/05-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: 'Explore 05 Days Tour in Rajasthan | Rajasthan Tour Packages',
    description: "You can get to know the best places to visit in Rajasthan in 5 days. Book Rajasthan Tour Packages to tour through the great landmarks and cities of the world.",
    url: 'https://www.rajasthantourpackages.in/05-days-rajasthan-tour-packages',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Explore 05 Days Tour in Rajasthan | Rajasthan Tour Packages',
    description: "You can get to know the best places to visit in Rajasthan in 5 days. Book Rajasthan Tour Packages to tour through the great landmarks and cities of the world.",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}

const FiveDaysRajasthanTourPackages = () => {
  const images = [
    {
      src: allCitiesImages.jaipur.jaipurBanner01.src,
      alt: allCitiesImages.jaipur.jaipurBanner01.alt,
      title: allCitiesImages.jaipur.jaipurBanner01.title
    },
  ];
  const content = [
    {
      duration: '04 nights • 05 days',
      title: 'Explore 05 Days Tour in Rajasthan | Rajasthan Tour Packages',
      subhead: null
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="_05Days" />
      {/* header */}
      <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
        <TourCarousel images={images} content={content} />
      </div>
      {/* packages */}
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_05DaysToursData.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FiveDaysRajasthanTourPackages;