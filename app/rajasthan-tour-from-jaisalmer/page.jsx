import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromJaisalmer } from "@/data/CitiesData";
import { jaisalmerTourPackagesData } from "@/data/data";
import { jaisalmerFaq } from "@/data/faqData";
import { allCitiesImages } from "@/data/imageData";


export const metadata = {
  title: 'Rajasthan Tour From Jaisalmer | Rajasthan Tour Packages',
  description: "Explore the vast beauty of Rajasthan from Jaisalmer with Rajasthan Tour Packages. Enjoy desert adventures, historical forts, and rich cultural experiences.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-jaisalmer",
  },
  openGraph: {
    title: 'Rajasthan Tour From Jaisalmer | Rajasthan Tour Packages',
    description: "Explore the vast beauty of Rajasthan from Jaisalmer with Rajasthan Tour Packages. Enjoy desert adventures, historical forts, and rich cultural experiences.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-jaisalmer",
    image: "https://www.rajasthantourpackages.in/Images/Banners/jaisalmer-banner.webp",
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour From Jaisalmer | Rajasthan Tour Packages',
    description: "Explore the vast beauty of Rajasthan from Jaisalmer with Rajasthan Tour Packages. Enjoy desert adventures, historical forts, and rich cultural experiences.",
    image: "https://www.rajasthantourpackages.in/Images/Banners/jaisalmer-banner.webp",
  },
};

const RajasthanTourFromJaisalmer = () => {
  const images = [
    {
      src: allCitiesImages.jaisalmer.jaisalmerBanner.src,
      alt: allCitiesImages.jaisalmer.jaisalmerBanner.alt,
      title: allCitiesImages.jaisalmer.jaisalmerBanner.title,
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From jaisalmer',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromJaisalmer" />
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
              dangerouslySetInnerHTML={{ __html: tourFromJaisalmer.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromJaisalmer.showMoreContent} />
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromJaisalmer.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {jaisalmerTourPackagesData.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={jaisalmerFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromJaisalmer;
