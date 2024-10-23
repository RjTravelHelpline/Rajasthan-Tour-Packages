
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourPackages from "@/components/TourPackages";
import { tourFromBikaner } from "@/data/CitiesData";
import { bikanerTourPackagesData } from "@/data/data";
import { bikanerFaq } from "@/data/faqData";
import { allCitiesImages } from "@/data/imageData";
export const metadata = {
    title: 'Rajasthan Tour From Bikaner | Rajasthan Tour Packages',
    description: "Uncover Rajasthans rich heritage from Bikaner with Rajasthan Tour Packages. Explore ancient forts, vibrant markets, and royal legacies across the state.",
    keywords: [''],
    alternates: {
        canonical: "http://www.rajasthantourpackages.in/rajasthan-tour-from-bikaner",
    },
};


const RajasthanTourFromBikaner = () => {
    return (
        <>

            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="rajasthanTourFromBikaner" />

            {/* banner */}
            {/* <div className="container-fluid home-banner destination-banner position-relative px-0">
                <Carousel fade pause={false} controls={false}>
                    <Carousel.Item>
                        <img
                            src={allCitiesImages.bikaner.bikanerBanner02.src}
                            alt="Home Banner"
                        />
                        <Carousel.Caption>
                            <h1 className="text-capitalize">
                                rajasthan tour from{' '}
                                <span className="fw-bold text-capitalize">bikaner</span>
                            </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div> */}
            {/* data */}
            <div className="container-fluid">
                <div className="container py-5">
                    <div className="row px-2">
                        <p className="home-para cities-para">
                            <span
                                className="home-para d-block"
                                dangerouslySetInnerHTML={{ __html: tourFromBikaner.intro }}
                            ></span>
                            <ReadMoreToggle>
                                <>
                                    {tourFromBikaner.showMoreContent.map((content, index) => (
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
                            dangerouslySetInnerHTML={{ __html: tourFromBikaner.package }}
                        ></h2>
                    </div>
                    <div className="row py-4 d-flex align-items-stretch px-2">
                        {bikanerTourPackagesData.slice(0, 3).map((pkg, index) => (
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
                        <Faq faqs={bikanerFaq.questions} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RajasthanTourFromBikaner;
