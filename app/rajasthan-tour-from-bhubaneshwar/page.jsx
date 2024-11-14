
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromBhubanesawar } from "@/data/CitiesData";
import { bhubaneswarFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Bhubaneswar } from "@/data/tourByCitiesData";

export const metadata = {
    title: 'Top Rajasthan Tours from Bhubaneswar | Rajasthan Tour Packages',
    description: 'Explore Rajasthan with tailored tours from Bhubaneswar. Discover Jaipur, Udaipur, and Jaisalmer with our customised Rajasthan tours. Book your adventure today.',
    keywords: [''],
    alternates: {
        canonical: "http://www.rajasthantourpackages.in/rajasthan-tour-from-bhubaneshwar",
    },
    openGraph: {
        title: 'Top Rajasthan Tours from Bhubaneswar | Rajasthan Tour Packages',
        description: 'Explore Rajasthan with tailored tours from Bhubaneswar. Discover Jaipur, Udaipur, and Jaisalmer with our customised Rajasthan tours. Book your adventure today.',
        url: "http://www.rajasthantourpackages.in/rajasthan-tour-from-bhubaneshwar",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Top Rajasthan Tours from Bhubaneswar | Rajasthan Tour Packages',
        description: 'Explore Rajasthan with tailored tours from Bhubaneswar. Discover Jaipur, Udaipur, and Jaisalmer with our customised Rajasthan tours. Book your adventure today.',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};


const RajasthanPackagetourFromBhubanesawar = () => {
    const images = [
        {
            src: allStatesImages.bhubaneshwar.bhubaneshwarBanner.src,
            alt: allStatesImages.bhubaneshwar.bhubaneshwarBanner.alt,
            title: allStatesImages.bhubaneshwar.bhubaneshwarBanner.title,
        },
    ];
    const content = [
        {
            duration: '',
            title: 'Rajasthan Tour From bhubaneshwar',
        },
    ];
    return (
        <>

            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="rajasthanTourFromBhubaneshwar" />
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
                            dangerouslySetInnerHTML={{ __html: tourFromBhubanesawar.intro }}
                        />
                        <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromBhubanesawar.showMoreContent} />
                    </div>
                </div>
            </div>

            {/* packages */}
            <div className="container-fluid section-02 py-4">
                <div className="container packages py-2">
                    <div className="row">
                        <h2
                            className="fw-normal text-capitalize"
                            dangerouslySetInnerHTML={{ __html: tourFromBhubanesawar.package }}
                        ></h2>
                    </div>
                    <div className="row py-4 d-flex align-items-stretch px-2">
                        {Bhubaneswar.slice(0, 3).map((pkg, index) => (
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
                        <Faq faqs={bhubaneswarFaq.questions} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RajasthanPackagetourFromBhubanesawar;
