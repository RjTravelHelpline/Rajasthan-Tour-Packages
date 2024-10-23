import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourPackages from "@/components/TourPackages";
import { tourFromPunjab } from "@/data/CitiesData";
import { punjabFaq } from "@/data/faqData";
import { Punjab } from "@/data/tourByCitiesData";

export const metadata = {
  title: 'Rajasthan Tour from Punjab | Rajasthan Tour Packages',
  description: "Leave on a Rajasthan Tour from Punjab with our comprehensive bundles. Find memorable, energetic culture and imperial royal residences. Book yours today.",
  keywords: [''],
  alternates: {
    canonical: "http://www.rajasthantourpackages.in/rajasthan-tour-from-punjab",
  },
};

const RajasthanPackageTourFromPunjab = () => {
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromPunjab" />

      {/* banner */}
      {/* <div className="container-fluid home-banner destination-banner position-relative px-0">
        <Carousel fade pause={false} controls={false}>
          <Carousel.Item>
            <img
              src={allStatesImages.punjab.punjabBanner.src}
              alt="Home Banner"
            />
            <Carousel.Caption>
              <h1 className="text-capitalize">
                rajasthan tour from{' '}
                <span className="fw-bold text-capitalize">Punjab</span>
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
                dangerouslySetInnerHTML={{ __html: tourFromPunjab.intro }}
              ></span>
              <ReadMoreToggle>
                <>
                  {tourFromPunjab.showMoreContent.map((content, index) => (
                    <span
                      className="home-para d-block"
                      key={index}
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></span>
                  ))}
                </>
              </ReadMoreToggle>
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
