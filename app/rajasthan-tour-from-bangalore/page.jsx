
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourPackages from "@/components/TourPackages";
import { tourFromBangalore } from "@/data/CitiesData";
import { bangaloreFaq } from "@/data/faqData";
import { Bangalore } from "@/data/tourByCitiesData";

export const metadata = {
  title: 'Rajasthan Tour Package from Bangalore | Rajasthan Tour Packages',
  description: 'Learn the beauty of the Rajasthan tour package from Bangalore. Enjoy royal experiences, cultural sights, and luxury stays. Book your Rajasthan tour today.',
  keywords: ['Rajasthan Tour Package From Bangalore', 'Rajasthan Tour From Bangalore', 'Rajasthan Honeymoon Packages', 'honeymoon tour packages'],
  alternates: {
    canonical: "http://www.rajasthantourpackages.in/rajasthan-tour-from-banglore",
  },
};


const RajasthanTourFromBangalore = () => {
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromBangalore" />

      {/* banner */}
      {/* <div className="container-fluid home-banner destination-banner position-relative px-0">
        <Carousel fade pause={false} controls={false}>
          <Carousel.Item>
            <img
              src={allStatesImages.bangalore.bangaloreBanner.src}
              alt="Home Banner"
            />
            <Carousel.Caption>
              <h1 className="text-capitalize">
                rajasthan tour from{' '}
                <span className="fw-bold text-capitalize">bangalore</span>
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
                dangerouslySetInnerHTML={{ __html: tourFromBangalore.intro }}
              ></span>
              <ReadMoreToggle>
                <>
                  {tourFromBangalore.showMoreContent.map((content, index) => (
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
