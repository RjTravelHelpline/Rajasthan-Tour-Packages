import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
    title: 'Rajasthan Tours for 2-4 Days | Rajasthan Tour Packages',
    description: "Find the best of Rajasthan in a short tour of the 02-04 Days Rajasthan Tour that offers the chance to visit the most famous forts, palaces, and cultural lures.",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/02-04-days-rajasthan-tours",
    },
    openGraph: {
        title: 'Rajasthan Tours for 2-4 Days | Rajasthan Tour Packages',
        description: 'Find the best of Rajasthan in a short tour of the 02-04 Days Rajasthan Tour that offers the chance to visit the most famous forts, palaces, and cultural lures.',
        url: "https://www.rajasthantourpackages.in/02-04-days-rajasthan-tours",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Rajasthan Tours for 2-4 Days | Rajasthan Tour Packages',
        description: 'Find the best of Rajasthan in a short tour of the 02-04 Days Rajasthan Tour that offers the chance to visit the most famous forts, palaces, and cultural lures.',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};

const Two_Four_Days_RajasthanTours = () => {
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
            title: '02-04 days rajasthan tours',
            subhead: null
        },
    ];
    return (
        <>
            <Breadcrumb breadcrumbKey="_02_04Days" />
            <div className="container-fluid home-banner days-banner-container destination-banner px-0">
                <TourCarousel images={images} content={content} />
            </div>
        </>
    );
};

export default Two_Four_Days_RajasthanTours;
