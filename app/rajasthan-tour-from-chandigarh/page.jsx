import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourPackages from "@/components/TourPackages";
import { tourFromChandigarh } from "@/data/CitiesData";
import { chandigarhFaq } from "@/data/faqData";
import { Chandigarh } from "@/data/tourByCitiesData";

export const metadata = {
    title: 'Rajasthan Tour from Chandigarh | Rajasthan Tour Packages',
    description: "Explore Rajasthan with our tour packages from Chandigarh. Enjoy iconic forts, cultural experiences, and luxury accommodations. Plan your rajasthan holiday from chandigarh now.",
    keywords: [''],
    alternates: {
        canonical: "http://www.rajasthantourpackages.in/rajasthan-tour-from-chandigarh",
    },
};



const RajasthanTourFromChandigarh = () => {
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="rajasthanTourFromChandigarh" />

            {/* banner */}
            {/* <div className="container-fluid home-banner destination-banner position-relative px-0">
                <Carousel fade pause={false} controls={false}>
                    <Carousel.Item>
                        <img
                            src={allStatesImages.chandigarh.chandigarhBanner.src}
                            alt="Home Banner"
                        />
                        <Carousel.Caption>
                            <h1 className="text-capitalize">
                                rajasthan tour from{' '}
                                <span className="fw-bold text-capitalize">chandigarh</span>
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
                                dangerouslySetInnerHTML={{ __html: tourFromChandigarh.intro }}
                            ></span>
                            <ReadMoreToggle>
                                <>
                                    {tourFromChandigarh.showMoreContent.map((content, index) => (
                                        <span
                                            className="home-para d-block"
                                            key={index}
                                            dangerouslySetInnerHTML={{ __html: content }}
                                        ></span>
                                    ))}
                                </>   </ReadMoreToggle>
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
                            dangerouslySetInnerHTML={{ __html: tourFromChandigarh.package }}
                        ></h2>
                    </div>
                    <div className="row py-4 d-flex align-items-stretch px-2">
                        {Chandigarh.slice(0, 3).map((pkg, index) => (
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
                        <Faq faqs={chandigarhFaq.questions} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RajasthanTourFromChandigarh;
