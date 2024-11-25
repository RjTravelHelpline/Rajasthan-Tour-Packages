import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _03DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
    title: '03 Days Rajasthan Tour Packages',
    description: "",
    keywords: [],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/03-days-rajasthan-tour-packages",
    },
    openGraph: {
        title: '03 Days Rajasthan Tour Packages',
        description: "",
        url: "https://www.rajasthantourpackages.in/03-days-rajasthan-tour-packages",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};

const ThreeDaysRajasthanTourPackages = () => {
    const images = [
        {
            src: allCitiesImages.jaipur.jaipurBanner01.src,
            alt: allCitiesImages.jaipur.jaipurBanner01.alt,
            title: allCitiesImages.jaipur.jaipurBanner01.title
        },
    ];

    const content = [
        {
            duration: '02 nights • 03 days',
            title: '03 days rajasthan tour packages',
            subhead: null
        },
    ];
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="_03Days" />
            <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
                <TourCarousel images={images} content={content} />
            </div>
            <div className="container packages py-2">
                <div className="row py-4 d-flex align-items-stretch px-2">
                    {_03DaysToursData.map((pkg, index) => (
                        <TourPackages key={index} pkg={pkg} />
                    ))}
                </div>
            </div>
        </>
    );
};
export default ThreeDaysRajasthanTourPackages