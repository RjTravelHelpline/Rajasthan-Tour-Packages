import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _02DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
  title: 'Get 02 Days Trip in Rajasthan | Rajasthan Tour Packages',
  description: 'It is possible to capture the spirit of Rajasthan in 2 days. Book your Rajasthan Tour Packages for a short and enjoyable trip to the most visited tourist place.',
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/02-days-rajasthan-tour-packages",
  },
  openGraph: {
    title: 'Get 02 Days Trip in Rajasthan | Rajasthan Tour Packages',
    description: 'It is possible to capture the spirit of Rajasthan in 2 days. Book your Rajasthan Tour Packages for a short and enjoyable trip to the most visited tourist place.',
    url: "https://www.rajasthantourpackages.in/02-days-rajasthan-tour-packages",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Get 02 Days Trip in Rajasthan | Rajasthan Tour Packages',
    description: 'It is possible to capture the spirit of Rajasthan in 2 days. Book your Rajasthan Tour Packages for a short and enjoyable trip to the most visited tourist place.',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
};


const TwoDaysRajasthanTourPackages = () => {
  const images = [
    {
      src: allCitiesImages.jaipur.jaipurBanner01.src,
      alt: allCitiesImages.jaipur.jaipurBanner01.alt,
      title: allCitiesImages.jaipur.jaipurBanner01.title
    },
  ];

  const content = [
    {
      duration: '01 night • 02 days',
      title: '02 days rajasthan tour packages',
      subhead: null
    },
  ];
  return (
    <>
      <Breadcrumb breadcrumbKey="_02Days" />
      <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
        <TourCarousel images={images} content={content} />
      </div>
      {/* tour packages */}
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_02DaysToursData.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TwoDaysRajasthanTourPackages;
