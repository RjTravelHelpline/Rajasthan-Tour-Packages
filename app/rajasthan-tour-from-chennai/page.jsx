import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromChennai } from "@/data/CitiesData";
import { chennaiFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Chennai } from "@/data/tourByCitiesData";

export const metadata = {
    title: 'Book Rajasthan Tour from Chennai | Rajasthan Tour Packages',
    description: "Make your Rajasthan tour from Chennai to experience the lively heritage and rich culture. Find magnificent castles, desert landscapes, and traditional art forms.",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-chennai",
    },
    openGraph: {
        title: 'Book Rajasthan Tour from Chennai | Rajasthan Tour Packages',
        description: "Make your Rajasthan tour from Chennai to experience the lively heritage and rich culture. Find magnificent castles, desert landscapes, and traditional art forms.",
        url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-chennai",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};


const RajasthanPackageTourFromChennai = () => {
    const images = [
        { src: allStatesImages.chennai.chennaiBanner.src },
    ];

    const content = [
        {
            duration: '',
            title: 'Rajasthan Tour From chennai',
        },
    ];
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="rajasthanTourFromChennai" />
            {/* banner */}
            <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
                <TourCarousel images={images} content={content} />
            </div>
            {/* data */}
            <div className="container-fluid">
                <div className="container py-5">
                    <div className="row px-2">
                        <p className="home-para cities-para">
                            <span
                                className="home-para d-block"
                                dangerouslySetInnerHTML={{ __html: tourFromChennai.intro }}
                            ></span><ReadMoreToggle>
                                <>
                                    {tourFromChennai.showMoreContent.map((content, index) => (
                                        <span
                                            className="home-para d-block"
                                            key={index}
                                            dangerouslySetInnerHTML={{ __html: content }}
                                        ></span>
                                    ))}
                                </>
                            </ReadMoreToggle>
                            <span className="py-4 d-block"></span>
                        </p>
                    </div>
                </div>
            </div>

            {/* packages */}
            <div className="container-fluid section-02 py-4">
                <div className="container packages py-2">
                    <div className="row">
                        <h2
                            className="fw-normal text-capitalize"
                            dangerouslySetInnerHTML={{ __html: tourFromChennai.package }}
                        ></h2>
                    </div>
                    <div className="row py-4 d-flex align-items-stretch px-2">
                        {Chennai.slice(0, 3).map((pkg, index) => (
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
                        <Faq faqs={chennaiFaq.questions} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RajasthanPackageTourFromChennai;
