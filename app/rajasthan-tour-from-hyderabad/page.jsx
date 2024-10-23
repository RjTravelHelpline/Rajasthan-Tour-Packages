import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourPackages from "@/components/TourPackages";
import { tourFromHyderabad } from "@/data/CitiesData";
import { hyderabadFaq } from "@/data/faqData";
import { Hyderabad } from "@/data/tourByCitiesData";

export const metadata = {
  title: 'Rajasthan Tour from Hyderabad | Rajasthan Tour Packages',
  description: "Immerse yourself in Rajasthan's majestic charm, iconic landmarks, and vibrant traditions. Book your Rajasthan Tour from Hyderabad with our exclusive packages..",
  keywords: [''],
  alternates: {
    canonical: "http://www.rajasthantourpackages.in/rajasthan-tour-from-hyderabad",
  },
};



const RajasthanTourFromHyderabad = () => {
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromHyderabad" />

      {/* banner */}
      {/* <div className="container-fluid home-banner destination-banner position-relative px-0">
        <Carousel fade pause={false} controls={false}>
          <Carousel.Item>
            <img
              src={allStatesImages.hyderabad.hyderabadBanner.src}
              alt="Home Banner"
            />
            <Carousel.Caption>
              <h1 className="text-capitalize">
                rajasthan tour from{' '}
                <span className="fw-bold text-capitalize">hyderabad</span>
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div> */}

      {/* data */}
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row px-2">
            <p className="home-para cities-para">
              <span
                className="home-para d-block"
                dangerouslySetInnerHTML={{ __html: tourFromHyderabad.intro }}
              ></span>
              <ReadMoreToggle>
                <>
                  {tourFromHyderabad.showMoreContent.map((content, index) => (
                    <span
                      className="home-para d-block"
                      key={index}
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></span>
                  ))}
                </>   </ReadMoreToggle>
              <span className="py-4 d-block"></span>
            </p>
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
