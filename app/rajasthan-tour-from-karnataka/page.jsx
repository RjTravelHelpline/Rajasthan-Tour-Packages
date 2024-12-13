import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromKarnataka } from "@/data/CitiesData";
import { karnatakaFaq } from "@/data/faqData";
import { allCitiesImages, allStatesImages } from "@/data/imageData";
import { Karnataka } from "@/data/tourByCitiesData";


const RajasthanPackageTourFromKarnataka = () => {
  const images = [
    {
      src: allStatesImages.karnataka.karnatakaBanner.src,
      alt: allStatesImages.karnataka.karnatakaBanner.alt,
      title: allStatesImages.karnataka.karnatakaBanner.title,
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From karnataka',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromKarnataka" />
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
              dangerouslySetInnerHTML={{ __html: tourFromKarnataka.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromKarnataka.showMoreContent} />
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromKarnataka.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Karnataka.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={karnatakaFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanPackageTourFromKarnataka;
