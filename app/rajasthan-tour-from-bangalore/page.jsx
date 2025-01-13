
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromBangalore } from "@/data/CitiesData";
import { bangaloreFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Bangalore } from "@/data/tourByCitiesData";


const RajasthanTourFromBangalore = () => {
  const images = [
    {
      src: allStatesImages.bangalore.bangaloreBanner.src,
      alt: 'High-tech cityscape and green spaces in Bangalore',
      title: 'Silicon Valley of India and Garden City of Bangalore',
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From Bangalore',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromBangalore" />
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
              dangerouslySetInnerHTML={{ __html: tourFromBangalore.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromBangalore.showMoreContent} />
          </div>
        </div>
      </div>
      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromBangalore.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Bangalore.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={bangaloreFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromBangalore;
