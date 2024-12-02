import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _03DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
    title: 'Enjoy 03 Days Getaway in Rajasthan | Rajasthan Tour Packages',
    description: 'Discover Rajasthan heritage destinations in 3 days. Explore the most significant cities and famous historical places with Rajasthan Tour Packages quickly.',
    keywords: [],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/03-days-rajasthan-tour-packages",
    },
    openGraph: {
        title: 'Enjoy 03 Days Getaway in Rajasthan | Rajasthan Tour Packages',
        description: 'Discover Rajasthan heritage destinations in 3 days. Explore the most significant cities and famous historical places with Rajasthan Tour Packages quickly.',
        url: "https://www.rajasthantourpackages.in/03-days-rajasthan-tour-packages",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Enjoy 03 Days Getaway in Rajasthan | Rajasthan Tour Packages',
        description: 'Discover Rajasthan heritage destinations in 3 days. Explore the most significant cities and famous historical places with Rajasthan Tour Packages quickly.',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
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