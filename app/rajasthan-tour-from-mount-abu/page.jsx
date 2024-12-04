
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
    images: "https://www.rajasthantourpackages.in/Images/Banners/mount-abu-banner.webp",
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour From Mount Abu | Rajasthan Tour Packages',
    description: "Begin your Rajasthan Tour from Mount Abu with the Rajasthan Tour Packages. Explore Rajasthan's regal charm and noteworthy points of interest. Book Now.",
    images: "https://www.rajasthantourpackages.in/Images/Banners/mount-abu-banner.webp",
  },
};

const RajasthanTourFromMountabu = () => {
  const images = [
    {
      src: allCitiesImages.mountabu.mountabuBanner.src,
      alt: allCitiesImages.mountabu.mountabuBanner.alt,
      title: allCitiesImages.mountabu.mountabuBanner.title,
    },
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
        <div className="container py-5 px-0 position-relative">
          <div className="row px-0">
            <p
              className="text-justify home-para px-3"
              dangerouslySetInnerHTML={{ __html: tourFromMountAbu.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromMountAbu.showMoreContent} />
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
