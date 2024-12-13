import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromAndhraPradesh } from "@/data/CitiesData";
import { andhraPradeshFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { AndhraPradesh } from "@/data/tourByCitiesData";

const RajasthanPackageTourFromAndhrapradesh = () => {
    const images = [
        {
            src: allStatesImages.andhraPradesh.andhraPradeshBanner.src,
            alt: allStatesImages.andhraPradesh.andhraPradeshBanner.alt,
            title: allStatesImages.andhraPradesh.andhraPradeshBanner.title
        },
    ];

    const content = [
        {
            duration: '',
            title: 'Rajasthan Tour From Andhra Pradesh',
        },
    ];
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="rajasthanTourFromAndhraPradesh" />
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
                            dangerouslySetInnerHTML={{ __html: tourFromAndhraPradesh.intro }}
                        />
                        <ReadMoreToggle className="text-justify home-para px-3" tag="div" contentArray={tourFromAndhraPradesh.showMoreContent} />
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
