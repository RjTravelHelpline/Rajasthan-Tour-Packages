import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromKerala } from "@/data/CitiesData";
import { keralaFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Kerala } from "@/data/tourByCitiesData";

export const metadata = {
  title: 'Rajasthan Tour Packages from Kerala | Rajasthan Tour Packages',
  description: "Experience the royal heritage of Rajasthan tours from Kerala. Explore historic cities, enjoy desert safari, and savor the vibrant culture with our curated packages.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-kerala",
  },
  openGraph: {
    title: 'Rajasthan Tour Packages from Kerala | Rajasthan Tour Packages',
    description: "Experience the royal heritage of Rajasthan tours from Kerala. Explore historic cities, enjoy desert safari, and savor the vibrant culture with our curated packages.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-kerala",
    image: "https://www.rajasthantourpackages.in/Images/Banners/kerala-banner.webp",
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour Packages from Kerala | Rajasthan Tour Packages',
    description: "Experience the royal heritage of Rajasthan tours from Kerala. Explore historic cities, enjoy desert safari, and savor the vibrant culture with our curated packages.",
    image: "https://www.rajasthantourpackages.in/Images/Banners/kerala-banner.webp",
  },
};

const RajasthanPackageTourFromKerala = () => {
  const images = [
    {
      src: allStatesImages.kerala.keralaBanner.src,
      alt: allStatesImages.kerala.keralaBanner.alt,
      title: allStatesImages.kerala.keralaBanner.title,
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From kerala',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromKerala" />
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
              dangerouslySetInnerHTML={{ __html: tourFromKerala.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromKerala.showMoreContent} />
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromKerala.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Kerala.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={keralaFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanPackageTourFromKerala;
