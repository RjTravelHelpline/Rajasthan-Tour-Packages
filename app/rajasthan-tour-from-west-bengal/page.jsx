
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromWestBengal } from "@/data/CitiesData";
import { westbengalFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { WestBengal } from "@/data/tourByCitiesData";

export const metadata = {
  title: 'Rajasthan Tour from West Bengal | Rajasthan Tour Packages',
  description: "Find the best Rajasthan Tour From Jaipur. Our expertly outlined visits offer a profound jump into the state's illustrious legacy and social abundance.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-west-bengal",
  },
  openGraph: {
    title: 'Rajasthan Tour from West Bengal | Rajasthan Tour Packages',
    description: "Find the best Rajasthan Tour From Jaipur. Our expertly outlined visits offer a profound jump into the state's illustrious legacy and social abundance.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-west-bengal",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour from West Bengal | Rajasthan Tour Packages',
    description: "Find the best Rajasthan Tour From Jaipur. Our expertly outlined visits offer a profound jump into the state's illustrious legacy and social abundance.",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
};
const RajasthanTourFromWestBengal = () => {
  const images = [
    {
      src: allStatesImages.westBengal.westBengalBanner.src,
      alt: allStatesImages.westBengal.westBengalBanner.alt,
      title: allStatesImages.westBengal.westBengalBanner.title,
    },
  ];
  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From west bengal',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromWestbengal" />
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
              dangerouslySetInnerHTML={{ __html: tourFromWestBengal.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromWestBengal.showMoreContent} />
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromWestBengal.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {WestBengal.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={westbengalFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromWestBengal;
