import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromDelhi } from "@/data/CitiesData";
import { delhiTourPackagesData } from "@/data/data";
import { delhiFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";

export const metadata = {
  title: 'Rajasthan Tour from Delhi Book Now | Rajasthan Tour Packages',
  description: "Embark on the Rajasthan Tour From Delhi. Our curated tour packages offer the perfect blend of heritage sites, colorful markets, and unforgettable experiences.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-delhi",
  },
  openGraph: {
    title: 'Rajasthan Tour from Delhi Book Now | Rajasthan Tour Packages',
    description: "Embark on the Rajasthan Tour From Delhi. Our curated tour packages offer the perfect blend of heritage sites, colorful markets, and unforgettable experiences.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-delhi",
    image: "https://www.rajasthantourpackages.in/Images/Banners/delhi-banner.webp",
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour from Delhi Book Now | Rajasthan Tour Packages',
    description: "Embark on the Rajasthan Tour From Delhi. Our curated tour packages offer the perfect blend of heritage sites, colorful markets, and unforgettable experiences.",
    image: "https://www.rajasthantourpackages.in/Images/Banners/delhi-banner.webp",
  },
};


const RajasthanPackageTourFromDelhi = () => {
  const images = [
    {
      src: allStatesImages.delhi.delhiBanner.src,
      alt: allStatesImages.delhi.delhiBanner.alt,
      title: allStatesImages.delhi.delhiBanner.title,
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From delhi',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromDelhi" />
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
              dangerouslySetInnerHTML={{ __html: tourFromDelhi.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromDelhi.showMoreContent} />
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromDelhi.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {delhiTourPackagesData.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={delhiFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanPackageTourFromDelhi;
