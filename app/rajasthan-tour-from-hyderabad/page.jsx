import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromHyderabad } from "@/data/CitiesData";
import { hyderabadFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Hyderabad } from "@/data/tourByCitiesData";



const RajasthanTourFromHyderabad = () => {
  const images = [
    {
      src: allStatesImages.hyderabad.hyderabadBanner.src,
      alt: allStatesImages.hyderabad.hyderabadBanner.alt,
      title: allStatesImages.hyderabad.hyderabadBanner.title,
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From hyderabad',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromHyderabad" />
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
              dangerouslySetInnerHTML={{ __html: tourFromHyderabad.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromHyderabad.showMoreContent} />
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromHyderabad.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Hyderabad.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={hyderabadFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromHyderabad;
