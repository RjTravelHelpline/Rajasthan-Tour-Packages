import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromChandigarh } from "@/data/CitiesData";
import { chandigarhFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Chandigarh } from "@/data/tourByCitiesData";

export const metadata = {
    title: 'Rajasthan Tour from Chandigarh | Rajasthan Tour Packages',
    description: "Explore Rajasthan with our tour packages from Chandigarh. Enjoy iconic forts, cultural experiences, and luxury accommodations. Plan your rajasthan holiday from chandigarh now.",
    keywords: [''],
    alternates: {
        canonical: "http://www.rajasthantourpackages.in/rajasthan-tour-from-chandigarh",
    },
    openGraph: {
        title: 'Rajasthan Tour from Chandigarh | Rajasthan Tour Packages',
        description: "Explore Rajasthan with our tour packages from Chandigarh. Enjoy iconic forts, cultural experiences, and luxury accommodations. Plan your rajasthan holiday from chandigarh now.",
        url: "http://www.rajasthantourpackages.in/rajasthan-tour-from-chandigarh",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};



const RajasthanTourFromChandigarh = () => {
    const images = [
        { src: allStatesImages.chandigarh.chandigarhBanner.src },
    ];

    const content = [
        {
            duration: '',
            title: 'Rajasthan Tour From chandigarh',
        },
    ];
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="rajasthanTourFromChandigarh" />
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
