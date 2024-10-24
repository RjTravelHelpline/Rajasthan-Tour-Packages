
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromMysore } from "@/data/CitiesData";
import { mysoreFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Mysore } from "@/data/tourByCitiesData";

export const metadata = {
    title: 'Rajasthan Tour From Mysore | Rajasthan Tour Packages',
    description: "Embark on a mesmerizing journey from Mysore to Rajasthan. With Rajasthan Tour Packages, discover royal heritage, vibrant culture, and unforgettable experiences.",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-mysore",
    },
    openGraph: {
        title: 'Rajasthan Tour From Mysore | Rajasthan Tour Packages',
        description: "Embark on a mesmerizing journey from Mysore to Rajasthan. With Rajasthan Tour Packages, discover royal heritage, vibrant culture, and unforgettable experiences.",
        url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-mysore",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};


const RajasthanPackageTourFromMysore = () => {
    const images = [
        { src: allStatesImages.mysore.mysoreBanner.src },
    ];

    const content = [
        {
            duration: '',
            title: 'Rajasthan Tour From mysore',
        },
    ];
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="rajasthanTourFromMysore" />
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
                                dangerouslySetInnerHTML={{ __html: tourFromMysore.intro }}
                            ></span>
                            <ReadMoreToggle>
                                <>
                                    {tourFromMysore.showMoreContent.map((content, index) => (
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
                            dangerouslySetInnerHTML={{ __html: tourFromMysore.package }}
                        ></h2>
                    </div>
                    <div className="row py-4 d-flex align-items-stretch px-2">
                        {Mysore.slice(0, 3).map((pkg, index) => (
                            <TourPackages key={index} pkg={pkg} />
                        ))}
                    </div>
                </div>
            </div>

            {/* faq's */}
            <div className="container py-5">
                <div className="row">
                    <h3 className="mb-4">
                        Frequently <span className="fw-normal">Asked Questions</span>
                    </h3>
                    <Faq faqs={mysoreFaq.questions} />
                </div>
            </div>
        </>
    );
};

export default RajasthanPackageTourFromMysore;
