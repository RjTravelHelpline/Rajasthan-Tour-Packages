import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromChattisgarh } from "@/data/CitiesData";
import { chhattisgarhFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Chhattisgarh } from "@/data/tourByCitiesData";
export const metadata = {
  title: 'Rajasthan Tour from Chattisgarh | Rajasthan Tour Packages',
  description: "Enjoy the Rajasthan Tour from Chhattisgarh's regal charm, historic sites, and vibrant local culture. Get your expertly curated and confident tour package today.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-chhattisgarh",
  },
  openGraph: {
    title: 'Rajasthan Tour from Chattisgarh | Rajasthan Tour Packages',
    description: "Enjoy the Rajasthan Tour from Chhattisgarh's regal charm, historic sites, and vibrant local culture. Get your expertly curated and confident tour package today.",
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-chhattisgarh",
    image: "https://www.rajasthantourpackages.in/Images/Banners/chhattisgarh-banner.webp",
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Rajasthan Tour from Chattisgarh | Rajasthan Tour Packages',
    description: "Enjoy the Rajasthan Tour from Chhattisgarh's regal charm, historic sites, and vibrant local culture. Get your expertly curated and confident tour package today.",
    image: "https://www.rajasthantourpackages.in/Images/Banners/chhattisgarh-banner.webp",
  },
};


const RajasthanTourFromChattisgarh = () => {
  const images = [
    {
      src: allStatesImages.chhattisgarh.chhattisgarhBanner.src,
      alt: allStatesImages.chhattisgarh.chhattisgarhBanner.alt,
      title: allStatesImages.chhattisgarh.chhattisgarhBanner.title,
    },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From chhattisgarh',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromChhattisgarh" />
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
              dangerouslySetInnerHTML={{ __html: tourFromChattisgarh.intro }}
            />
            <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromChattisgarh.showMoreContent} />
          </div>
        </div>
      </div>
      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromChattisgarh.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Chhattisgarh.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={chhattisgarhFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromChattisgarh;
