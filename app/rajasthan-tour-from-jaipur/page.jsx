import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromJaipur } from "@/data/CitiesData";
import { jaipurTourPackagesData } from "@/data/data";
import { jaipurFaq } from "@/data/faqData";
import { allCitiesImages, allStatesImages } from "@/data/imageData";

export const metadata = {
  title: 'Rajasthan Tour Packages from Jaipur | Rajasthan Tour Packages',
  description: "Find the best of Rajasthan, beginning with Jaipur. Our expertly outlined visits offer a profound jump into the state's illustrious legacy and social abundance.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-jaipur",
  },
  openGraph: {
    title: 'Rajasthan Tour Packages from Jaipur | Rajasthan Tour Packages',
    description: "Find the best of Rajasthan, beginning with Jaipur. Our expertly outlined visits offer a profound jump into the state's illustrious legacy and social abundance.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-jaipur",
    image: "https://www.rajasthantourpackages.in/Images/Card/jaipur.webp",
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour Packages from Jaipur | Rajasthan Tour Packages',
    description: "Find the best of Rajasthan, beginning with Jaipur. Our expertly outlined visits offer a profound jump into the state's illustrious legacy and social abundance.",
    image: "https://www.rajasthantourpackages.in/Images/Card/jaipur.webp",
  },
};

const RajasthanTourFromJaipur = () => {
  const images = [
    {
      src: allCitiesImages.jaipur.jaipurBanner01.src,
      alt: allCitiesImages.jaipur.jaipurBanner01.alt,
      title: allCitiesImages.jaipur.jaipurBanner01.title,
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From jaipur',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromJaipur" />
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
              dangerouslySetInnerHTML={{ __html: tourFromJaipur.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromJaipur.showMoreContent} />
          </div>
        </div>
      </div>
      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromJaipur.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {jaipurTourPackagesData.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={jaipurFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromJaipur;
