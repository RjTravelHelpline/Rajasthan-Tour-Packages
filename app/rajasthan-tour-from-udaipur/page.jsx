import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromUdaipur } from "@/data/CitiesData";
import { udaipurTourPackagesData } from "@/data/data";
import { udaipurFaq } from "@/data/faqData";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
  title: 'Rajasthan Tour from Udaipur | Rajasthan Tour Packages',
  description: "Explore the regal splendor and cultural richness of Rajasthan with a personalized tour from Udaipur. Let us take you on an unforgettable journey across the state.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-udaipur",
  },
  openGraph: {
    title: 'Rajasthan Tour from Udaipur | Rajasthan Tour Packages',
    description: "Explore the regal splendor and cultural richness of Rajasthan with a personalized tour from Udaipur. Let us take you on an unforgettable journey across the state.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-udaipur",
    images: "https://www.rajasthantourpackages.in/Images/Banners/udaipur-banner02.webp",
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour from Udaipur | Rajasthan Tour Packages',
    description: "Explore the regal splendor and cultural richness of Rajasthan with a personalized tour from Udaipur. Let us take you on an unforgettable journey across the state.",
    images: "https://www.rajasthantourpackages.in/Images/Banners/udaipur-banner02.webp",
  },
};

const RajasthanTourFromUdaipur = () => {
  const images = [
    {
      src: allCitiesImages.udaipur.udaipurBanner02.src,
      alt: allCitiesImages.udaipur.udaipurBanner02.alt,
      title: allCitiesImages.udaipur.udaipurBanner02.title,
    },
  ];
  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From udaipur',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromUdaipur" />
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
              dangerouslySetInnerHTML={{ __html: tourFromUdaipur.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromUdaipur.showMoreContent} />
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromUdaipur.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {udaipurTourPackagesData.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={udaipurFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromUdaipur;
