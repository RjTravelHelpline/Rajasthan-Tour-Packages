
import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _11To15DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";
export const metadata = {
  title: '11-15 days rajasthan tour packages',
  description: '',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/11-15-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: "11-15 days rajasthan tour packages",
    description: '',
    url: 'https://www.rajasthantourpackages.in/11-15-days-rajasthan-tour-packages',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: "11-15 days rajasthan tour packages",
    description: '',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}

const Eleven_FifteenDaysRajasthanTours = () => {
  const images = [
    {
      src: allCitiesImages.jaipur.jaipurBanner01.src,
      alt: allCitiesImages.jaipur.jaipurBanner01.alt,
      title: allCitiesImages.jaipur.jaipurBanner01.title
    },
  ];
  const content = [
    {
      duration: null,
      title: '11-15 days rajasthan tours',
      subhead: null
    },
  ];
  return (
    <>
      <Breadcrumb breadcrumbKey="_11_15Days" />
      {/* header */}
      <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
        <TourCarousel images={images} content={content} />
      </div>
      {/* packages */}
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_11To15DaysToursData.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Eleven_FifteenDaysRajasthanTours;