import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromIndore } from "@/data/CitiesData";
import { indoreFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Indore } from "@/data/tourByCitiesData";

export const metadata = {
    title: 'Rajasthan Tour from Indore | Rajasthan Tour Packages',
    description: "Discover the splendor of Rajasthan with our tour from Indore. Tour majestic forts and palaces and immerse in local culture. Book your Rajasthan trip today.",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-indore",
    },
    openGraph: {
        title: 'Rajasthan Tour from Indore | Rajasthan Tour Packages',
        description: "Discover the splendor of Rajasthan with our tour from Indore. Tour majestic forts and palaces and immerse in local culture. Book your Rajasthan trip today.",
        url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-indore",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};


const RajasthanPackageTourFromIndore = () => {
    const images = [
        { src: allStatesImages.indore.indoreBanner.src },
    ];

    const content = [
        {
            duration: '',
            title: 'Rajasthan Tour From indore',
        },
    ];
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="rajasthanTourFromIndore" />
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
                                dangerouslySetInnerHTML={{ __html: tourFromIndore.intro }}
                            ></span>
                            <ReadMoreToggle>
                                <>
                                    {tourFromIndore.showMoreContent.map((content, index) => (
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
                            dangerouslySetInnerHTML={{ __html: tourFromIndore.package }}
                        ></h2>
                    </div>
                    <div className="row py-4 d-flex align-items-stretch px-2">
                        {Indore.slice(0, 3).map((pkg, index) => (
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
                        <Faq faqs={indoreFaq.questions} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RajasthanPackageTourFromIndore;
