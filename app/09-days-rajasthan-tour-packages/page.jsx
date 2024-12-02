
import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _09DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
  title: 'Rajasthan 9-Day Excursion Package | Rajasthan Tour Packages',
  description: 'Grand historic state of Rajasthan in 9 days with trips to forts, palaces, and other appeal. You can complete the tour within 9 days of Rajasthan tour packages.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/09-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: "Rajasthan 9-Day Excursion Package | Rajasthan Tour Packages",
    description: 'Grand historic state of Rajasthan in 9 days with trips to forts, palaces, and other appeal. You can complete the tour within 9 days of Rajasthan tour packages.',
    url: 'https://www.rajasthantourpackages.in/09-days-rajasthan-tour-packages',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: "Rajasthan 9-Day Excursion Package | Rajasthan Tour Packages",
    description: 'Grand historic state of Rajasthan in 9 days with trips to forts, palaces, and other appeal. You can complete the tour within 9 days of Rajasthan tour packages.',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}
const NineDaysRajasthanTourPackages = () => {
  const images = [
    {
      src: allCitiesImages.jaipur.jaipurBanner01.src,
      alt: allCitiesImages.jaipur.jaipurBanner01.alt,
      title: allCitiesImages.jaipur.jaipurBanner01.title
    },
  ];
  const content = [
    {
      duration: '08 nights • 09 days',
      title: '09 days rajasthan tour packages',
      subhead: null
    },
  ];
  return (
    <>
      <Breadcrumb breadcrumbKey="_09Days" />
      {/* header */}
      <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
        <TourCarousel images={images} content={content} />
      </div>

      {/* packages */}
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_09DaysToursData.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NineDaysRajasthanTourPackages;