
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromMountAbu } from "@/data/CitiesData";
import { mountabuTourPackagesData } from "@/data/data";
import { mountAbuFaq } from "@/data/faqData";
import { allCitiesImages } from "@/data/imageData";


export const metadata = {
  title: 'Rajasthan Tour From Mount Abu | Rajasthan Tour Packages',
  description: "Begin your Rajasthan Tour from Mount Abu with the Rajasthan Tour Packages. Explore Rajasthan's regal charm and noteworthy points of interest. Book Now.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-mount-abu",
  },
  openGraph: {
    title: 'Rajasthan Tour From Mount Abu | Rajasthan Tour Packages',
    description: "Begin your Rajasthan Tour from Mount Abu with the Rajasthan Tour Packages. Explore Rajasthan's regal charm and noteworthy points of interest. Book Now.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-mount-abu",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
};

const RajasthanTourFromMountabu = () => {
  const images = [
    { src: allCitiesImages.mountabu.mountabuBanner.src },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From mount abu',
    },
  ];

  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromMountabu" />
      {/* banner */}
      <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
        <TourCarousel images={images} content={content} />
      </div>
      {/* data */}
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row px-2">
            <p className="home-para cities-para">
              <span
                className="home-para d-block"
                dangerouslySetInnerHTML={{ __html: tourFromMountAbu.intro }}
              ></span>
              <ReadMoreToggle>
                <>
                  {tourFromMountAbu.showMoreContent.map((content, index) => (
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
              dangerouslySetInnerHTML={{ __html: tourFromMountAbu.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {mountabuTourPackagesData.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={mountAbuFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromMountabu;
