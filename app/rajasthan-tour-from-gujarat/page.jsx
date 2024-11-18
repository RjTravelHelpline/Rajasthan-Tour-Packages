import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromGujrat } from "@/data/CitiesData";
import { gujaratFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Gujarat } from "@/data/tourByCitiesData";


export const metadata = {
  title: 'Rajasthan Tour from Gujarat | Rajasthan Tour Packages',
  description: "Explore rich history and culture on a Rajasthan tour from Gujarat. Enjoy personalized itineraries that include iconic landmarks and immersive local experiences.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-gujarat",
  },
  openGraph: {
    title: 'Rajasthan Tour from Gujarat | Rajasthan Tour Packages',
    description: "Explore rich history and culture on a Rajasthan tour from Gujarat. Enjoy personalized itineraries that include iconic landmarks and immersive local experiences.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-gujarat",
    image: "https://www.rajasthantourpackages.in/Images/Banners/gujarat-banner.webp",
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour from Gujarat | Rajasthan Tour Packages',
    description: "Explore rich history and culture on a Rajasthan tour from Gujarat. Enjoy personalized itineraries that include iconic landmarks and immersive local experiences.",
    image: "https://www.rajasthantourpackages.in/Images/Banners/gujarat-banner.webp",
  },
};



const RajasthanPackageTourFromGujrat = () => {
  const images = [
    {
      src: allStatesImages.gujrat.gujaratBanner.src,
      alt: allStatesImages.gujrat.gujaratBanner.alt,
      title: allStatesImages.gujrat.gujaratBanner.title,
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From gujrat',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromGujarat" />
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
              dangerouslySetInnerHTML={{ __html: tourFromGujrat.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromGujrat.showMoreContent} />
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromGujrat.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Gujarat.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={gujaratFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanPackageTourFromGujrat;
