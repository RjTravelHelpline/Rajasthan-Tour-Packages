import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourPackages from "@/components/TourPackages";
import { tourFromAndhraPradesh } from "@/data/CitiesData";
import { andhraPradeshFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { AndhraPradesh } from "@/data/tourByCitiesData";

export const metadata = {
    title: 'Rajasthan Tour from Andhra Pradesh | Rajasthan Tour Packages',
    description: 'Start your Rajasthan Tour from Andhra Pradesh with Rajasthan Tour Packages. Enjoy an immersive experience of the royal palaces, historic forts, and vibrant culture.',
    alternates: {
        canonical: "http://www.rajasthantourpackages.in/rajasthan-tour-from-andhra-pradesh",
    },
};


const RajasthanPackageTourFromAndhrapradesh = () => {
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="rajasthanTourFromAndhraPradesh" />

            {/* banner */}
            {/* <div className="container-fluid home-banner destination-banner position-relative px-0">
                <Carousel fade pause={false} controls={false}>
                    <Carousel.Item>
                        <img
                            src={allStatesImages.andhraPradesh.andhraPradeshBanner.src}
                            alt="Home Banner"
                        />
                        <Carousel.Caption>
                            <h1 className="text-capitalize">
                                rajasthan tour from{' '}
                                <span className="fw-bold text-capitalize">andhra pradesh</span>
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
                                dangerouslySetInnerHTML={{
                                    __html: tourFromAndhraPradesh.intro,
                                }}
                            ></span><ReadMoreToggle>
                                <>
                                    {tourFromAndhraPradesh.showMoreContent.map(
                                        (content, index) => (
                                            <span
                                                className="home-para d-block"
                                                key={index}
                                                dangerouslySetInnerHTML={{ __html: content }}
                                            ></span>
                                        )
                                    )}
                                </></ReadMoreToggle>
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
                            dangerouslySetInnerHTML={{
                                __html: tourFromAndhraPradesh.package,
                            }}
                        ></h2>
                    </div>
                    <div className="row py-4 d-flex align-items-stretch px-2">
                        {AndhraPradesh.slice(0, 3).map((pkg, index) => (
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
                        <Faq faqs={andhraPradeshFaq.questions} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RajasthanPackageTourFromAndhrapradesh;
