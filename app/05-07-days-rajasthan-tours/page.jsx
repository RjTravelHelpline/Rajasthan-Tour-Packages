import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import { allCitiesImages } from "@/data/imageData";
export const metadata = {
    title: 'Rajasthan 5-7 Days Tour Packages | Rajasthan Tour Packages',
    description: "Plan your perfect 5-7 Days Rajasthan Tour. Check out the Rajasthan Tour Packages to discover the best of Rajasthan’s landmarks and a remarkable journey.",
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/05-07-days-rajasthan-tours',
    },
    openGraph: {
        title: 'Rajasthan 5-7 Days Tour Packages | Rajasthan Tour Packages',
        description: "Plan your perfect 5-7 Days Rajasthan Tour. Check out the Rajasthan Tour Packages to discover the best of Rajasthan’s landmarks and a remarkable journey.",
        url: 'https://www.rajasthantourpackages.in/05-07-days-rajasthan-tours',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Plan your perfect 5-7 Days Rajasthan Tour. Check out the Rajasthan Tour Packages to discover the best of Rajasthan’s landmarks and a remarkable journey.',
        description: "",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
}

const Four_seven_DaysRajasthanTours = () => {
    const images = [
        {
            src: allCitiesImages.jaipur.jaipurBanner01.src,
            alt: allCitiesImages.jaipur.jaipurBanner01.alt,
            title: allCitiesImages.jaipur.jaipurBanner01.title
        },
    ];

    const content = [
        {
            duration: null,
            title: '05-07 days rajasthan tours',
            subhead: null
        },
    ];
    return (
        <>
            <Breadcrumb breadcrumbKey="_05_07Days" />
            <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
                <TourCarousel images={images} content={content} />
            </div>
        </>
    );
};

export default Four_seven_DaysRajasthanTours;