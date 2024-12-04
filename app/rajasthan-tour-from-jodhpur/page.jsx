import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromJodhpur } from "@/data/CitiesData";
import { jodhpurTourPackagesData } from "@/data/data";
import { jodhpurFaq } from "@/data/faqData";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
  title: 'Rajasthan Tour From Jodhpur | Rajasthan Tour Packages',
  description: "Connect Rajasthan Visit Bundles for a surprising visit from Jodhpur. Reveal Rajasthan's illustrious legacy, grand fortifications, and immortal conventions.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-jodhpur",
  },
  openGraph: {
    title: 'Rajasthan Tour From Jodhpur | Rajasthan Tour Packages',
    description: "Connect Rajasthan Visit Bundles for a surprising visit from Jodhpur. Reveal Rajasthan's illustrious legacy, grand fortifications, and immortal conventions.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-jodhpur",
    images: "https://www.rajasthantourpackages.in/Images/Banners/jodhpur-banner.webp",
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour From Jodhpur | Rajasthan Tour Packages',
    description: "Connect Rajasthan Visit Bundles for a surprising visit from Jodhpur. Reveal Rajasthan's illustrious legacy, grand fortifications, and immortal conventions.",
    images: "https://www.rajasthantourpackages.in/Images/Banners/jodhpur-banner.webp",
  },
};

const RajasthanTourFromJodhpur = () => {
  const images = [
    {
      src: allCitiesImages.jodhpur.jodhpurBanner.src,
      alt: allCitiesImages.jodhpur.jodhpurBanner.alt,
      title: allCitiesImages.jodhpur.jodhpurBanner.title,
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From jodhpur',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromJodhpur" />
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
              dangerouslySetInnerHTML={{ __html: tourFromJodhpur.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromJodhpur.showMoreContent} />
          </div>
        </div>
      </div>
      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromJodhpur.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {jodhpurTourPackagesData.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={jodhpurFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromJodhpur;
