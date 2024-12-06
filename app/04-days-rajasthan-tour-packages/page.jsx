import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _04DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
  title: 'Rajasthan Tour Packages for 4 Days | Rajasthan Tour Packages',
  description: "Experience the top of the line Rajasthan Tour Packages in 4 days with a tour of Rajasthan’s forts, palaces, and bazaars for an incredible cultural tour.",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/04-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: 'Rajasthan Tour Packages for 4 Days | Rajasthan Tour Packages',
    description: "Experience the top of the line Rajasthan Tour Packages in 4 days with a tour of Rajasthan’s forts, palaces, and bazaars for an incredible cultural tour.",
    url: 'https://www.rajasthantourpackages.in/04-days-rajasthan-tour-packages',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour Packages for 4 Days | Rajasthan Tour Packages',
    description: "Experience the top of the line Rajasthan Tour Packages in 4 days with a tour of Rajasthan’s forts, palaces, and bazaars for an incredible cultural tour.",
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}
const FourDaysRajasthanTourPackages = () => {
  const images = [
    {
      src: allCitiesImages.jaipur.jaipurBanner01.src,
      alt: allCitiesImages.jaipur.jaipurBanner01.alt,
      title: allCitiesImages.jaipur.jaipurBanner01.title
    },
  ];

  const content = [
    {
      duration: '03 nights • 04 days',
      title: '04 days rajasthan tour packages',
      subhead: null
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="_04Days" />
      {/* header */}
      <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
        <TourCarousel images={images} content={content} />
      </div>
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_04DaysToursData.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FourDaysRajasthanTourPackages;