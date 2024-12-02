import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromKolkata } from "@/data/CitiesData";
import { kolkataFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Kolkata } from "@/data/tourByCitiesData";

export const metadata = {
  title: 'Rajasthan Tour Packages from Kolkata | Rajasthan Tour Packages',
  description: "uncover Rajasthan our tour packages from Kolkata. Enjoy majestic forts, rich culture, and luxury stays. Plan your royal adventure today with customized options.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-kolkata",
  },
  openGraph: {
    title: 'Rajasthan Tour Packages from Kolkata | Rajasthan Tour Packages',
    description: "uncover Rajasthan our tour packages from Kolkata. Enjoy majestic forts, rich culture, and luxury stays. Plan your royal adventure today with customized options.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-kolkata",
    image: "https://www.rajasthantourpackages.in/Images/Banners/kolkata-banner.webp",
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour Packages from Kolkata | Rajasthan Tour Packages',
    description: "uncover Rajasthan our tour packages from Kolkata. Enjoy majestic forts, rich culture, and luxury stays. Plan your royal adventure today with customized options.",
    image: "https://www.rajasthantourpackages.in/Images/Banners/kolkata-banner.webp",
  },
};
const RajasthanTourFromKolkata = () => {
  const images = [
    {
      src: allStatesImages.kolkata.kolkataBanner.src,
      alt: allStatesImages.kolkata.kolkataBanner.alt,
      title: allStatesImages.kolkata.kolkataBanner.title,
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From kolkata',
    },
  ];

  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromKolkata" />
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
              dangerouslySetInnerHTML={{ __html: tourFromKolkata.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromKolkata.showMoreContent} />
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromKolkata.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Kolkata.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={kolkataFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromKolkata;
