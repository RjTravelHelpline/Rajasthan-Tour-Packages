import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromCochin } from "@/data/CitiesData";
import { cochinFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Cochin } from "@/data/tourByCitiesData";

export const metadata = {
  title: 'Rajasthan Tour from Cochin | Rajasthan Tour Packages',
  description: "Uncover the wonders of the Rajasthan Tour from Cochin with a meticulously planned tour highlighting the state's rich history and stunning landscapes. Book now.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-cochin",
  },
  openGraph: {
    title: 'Rajasthan Tour from Cochin | Rajasthan Tour Packages',
    description: "Uncover the wonders of the Rajasthan Tour from Cochin with a meticulously planned tour highlighting the state's rich history and stunning landscapes. Book now.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-cochin",
    images: "https://www.rajasthantourpackages.in/Images/Banners/cochin-banner.webp",
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour from Cochin | Rajasthan Tour Packages',
    description: "Uncover the wonders of the Rajasthan Tour from Cochin with a meticulously planned tour highlighting the state's rich history and stunning landscapes. Book now.",
    images: "https://www.rajasthantourpackages.in/Images/Banners/cochin-banner.webp",
  },
};
const RajasthanPackageTourFromCochin = () => {

  const images = [
    {
      src: allStatesImages.cochin.cochinBanner.src,
      alt: allStatesImages.cochin.cochinBanner.alt,
      title: allStatesImages.cochin.cochinBanner.title,
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From cochin',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromCochin" />
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
              dangerouslySetInnerHTML={{ __html: tourFromCochin.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromCochin.showMoreContent} />
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromCochin.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Cochin.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={cochinFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanPackageTourFromCochin;
