import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromRanthambore } from "@/data/CitiesData";
import { ranthamboreTourPackagesData } from "@/data/data";
import { ranthamboreFaq } from "@/data/faqData";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
    title: 'Rajasthan Tour From ranthamore | Rajasthan Tour Packages',
    description: "Arrange your Rajasthan enterprise from ranthamore with Rajasthan Visit Bundles. Encounter illustrious royal residences, posts, and dynamic cities when rulers arrive.",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-ranthamore",
    },
    openGraph: {
        title: 'Rajasthan Tour From ranthamore | Rajasthan Tour Packages',
        description: "Arrange your Rajasthan enterprise from ranthamore with Rajasthan Visit Bundles. Encounter illustrious royal residences, posts, and dynamic cities when rulers arrive.",
        url: "https://www.rajasthantourpackages.in/rajasthan-tour-from-ranthamore",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};

const RajasthanPackageTourFromRanthambore = () => {
    const images = [
        {
            src: allCitiesImages.ranthambore.ranthamboreBanner.src,
            alt: allCitiesImages.ranthambore.ranthamboreBanner.alt,
            title: allCitiesImages.ranthambore.ranthamboreBanner.title,
        },
    ];
    const content = [
        {
            duration: '',
            title: 'Rajasthan Tour From ranthambore',
        },
    ];
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="rajasthantourFromRanthambore" />
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
                                dangerouslySetInnerHTML={{ __html: tourFromRanthambore.intro }}
                            ></span>
                            <ReadMoreToggle>
                                <>
                                    {tourFromRanthambore.showMoreContent.map((content, index) => (
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
                            dangerouslySetInnerHTML={{ __html: tourFromRanthambore.package }}
                        ></h2>
                    </div>
                    <div className="row py-4 d-flex align-items-stretch px-2">
                        {ranthamboreTourPackagesData.slice(0, 3).map((pkg, index) => (
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
                        <Faq faqs={ranthamboreFaq.questions} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RajasthanPackageTourFromRanthambore;
