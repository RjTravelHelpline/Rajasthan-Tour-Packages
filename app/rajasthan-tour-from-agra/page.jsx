import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromAgra } from "@/data/CitiesData";
import { agraFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Agra } from "@/data/tourByCitiesData";

export const metadata = {
    title: 'Rajasthan Tour from Agra | Rajasthan Tour Packages',
    description: 'Rajasthan Tour from Agra to explore historic landmarks, regal palaces, and unique cultural experiences. You can go ahead and book your personalized tour package now.',
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-agra",
    },
    openGraph: {
        title: 'Rajasthan Tour from Agra | Rajasthan Tour Packages',
        description: 'Rajasthan Tour from Agra to explore historic landmarks, regal palaces, and unique cultural experiences. You can go ahead and book your personalized tour package now.',
        url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-agra",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Rajasthan Tour from Agra | Rajasthan Tour Packages',
        description: 'Rajasthan Tour from Agra to explore historic landmarks, regal palaces, and unique cultural experiences. You can go ahead and book your personalized tour package now.',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};

const RajasthanPackageTourFromAgra = () => {
    const images = [
        {
            src: allStatesImages.agra.agraBanner.src,
            alt: allStatesImages.agra.agraBanner.alt,
            title: allStatesImages.agra.agraBanner.title
        },
    ];

    const content = [
        {
            duration: '',
            title: 'Rajasthan Tour From Agra',
        },
    ];
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="rajasthanTourFromAgra" />
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
                            dangerouslySetInnerHTML={{ __html: tourFromAgra.intro }}
                        />
                        <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromAgra.showMoreContent} />
                    </div>
                </div>
            </div>
            {/* packages */}
            <div className="container-fluid section-02 py-4">
                <div className="container packages py-2">
                    <div className="row">
                        <h2
                            className="fw-normal text-capitalize"
                            dangerouslySetInnerHTML={{ __html: tourFromAgra.package }}
                        ></h2>
                    </div>
                    <div className="row py-4 d-flex align-items-stretch px-2">
                        {Agra.slice(0, 3).map((pkg, index) => (
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
                        <Faq faqs={agraFaq.questions} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RajasthanPackageTourFromAgra;
