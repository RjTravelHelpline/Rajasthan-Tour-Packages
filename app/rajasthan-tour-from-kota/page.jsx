
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromKota } from "@/data/CitiesData";
import { kotaFaq } from "@/data/faqData";
import { allCitiesImages, allStatesImages } from "@/data/imageData";
import { Kota } from "@/data/tourByCitiesData";

export const metadata = {
  title: 'Rajasthan Tour From Kota | Rajasthan Tour Packages',
  description: "Explore Rajasthan's royal heritage on a tour from Kota with Rajasthan Tour Packages. Discover vibrant cities, ancient palaces, and rich cultural experiences.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-kota",
  },
  openGraph: {
    title: 'Rajasthan Tour From Kota | Rajasthan Tour Packages',
    description: "Explore Rajasthan's royal heritage on a tour from Kota with Rajasthan Tour Packages. Discover vibrant cities, ancient palaces, and rich cultural experiences.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-kota",
    image: "https://www.rajasthantourpackages.in/Images/Banners/kota-banner.webp",
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour From Kota | Rajasthan Tour Packages',
    description: "Explore Rajasthan's royal heritage on a tour from Kota with Rajasthan Tour Packages. Discover vibrant cities, ancient palaces, and rich cultural experiences.",
    image: "https://www.rajasthantourpackages.in/Images/Banners/kota-banner.webp",
  },
};
const RajasthanTourFromKota = () => {
  const images = [
    {
      src: allCitiesImages.kota.kotaBanner.src,
      alt: allCitiesImages.kota.kotaBanner.alt,
      title: allCitiesImages.kota.kotaBanner.title,
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From kota',
    },
  ];

  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromKota" />
      {/* banner */}
      <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
        <TourCarousel images={images} content={content} />
      </div>
      {/* data */}
      <div className="container-fluid">
        <div className="container py-5 px-0 position-relative">
          <div className="row px-0">
            <p
              className="text-justify home-para px-3"
              dangerouslySetInnerHTML={{ __html: tourFromKota.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromKota.showMoreContent} />
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromKota.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Kota.slice(0, 3).map((pkg, index) => (
              <TourPackages key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>

      {/* faq's */}
      <div className="container-fluid px-0 section-03">
        <div className="container py-5">
          <div className="row">
            <h3 className="mb-4">
              Frequently <span className="fw-normal">Asked Questions</span>
            </h3>
            <Faq faqs={kotaFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromKota;
