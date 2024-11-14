import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromOdisha } from "@/data/CitiesData";
import { odishaFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Odisha } from "@/data/tourByCitiesData";

export const metadata = {
  title: 'Rajasthan Tour from Odisha | Rajasthan Tour Packages',
  description: "Embark on a Rajasthan Tour from Odisha and yourself in its timeless beauty, historic sites, and cultural treasures. Book your tailored tour package today.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-odisha",
  },
  openGraph: {
    title: 'Rajasthan Tour from Odisha | Rajasthan Tour Packages',
    description: "Embark on a Rajasthan Tour from Odisha and yourself in its timeless beauty, historic sites, and cultural treasures. Book your tailored tour package today.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-odisha",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour from Odisha | Rajasthan Tour Packages',
    description: "Embark on a Rajasthan Tour from Odisha and yourself in its timeless beauty, historic sites, and cultural treasures. Book your tailored tour package today.",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
};


const RajasthanTourFromOdisha = () => {
  const images = [
    {
      src: allStatesImages.odisha.odishaBanner.src,
      alt: allStatesImages.odisha.odishaBanner.alt,
      title: allStatesImages.odisha.odishaBanner.title,
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From odisha',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromOdisha" />
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
              dangerouslySetInnerHTML={{ __html: tourFromOdisha.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromOdisha.showMoreContent} />
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromOdisha.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Odisha.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={odishaFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromOdisha;
