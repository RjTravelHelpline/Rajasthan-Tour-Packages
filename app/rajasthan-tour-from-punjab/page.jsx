import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromPunjab } from "@/data/CitiesData";
import { punjabFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Punjab } from "@/data/tourByCitiesData";


const RajasthanPackageTourFromPunjab = () => {
  const images = [
    {
      src: allStatesImages.punjab.punjabBanner.src,
      alt: allStatesImages.punjab.punjabBanner.alt,
      title: allStatesImages.punjab.punjabBanner.title,
    },
  ];
  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From punjab',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromPunjab" />
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
              dangerouslySetInnerHTML={{ __html: tourFromPunjab.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromPunjab.showMoreContent} />
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromPunjab.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Punjab.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={punjabFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanPackageTourFromPunjab;
