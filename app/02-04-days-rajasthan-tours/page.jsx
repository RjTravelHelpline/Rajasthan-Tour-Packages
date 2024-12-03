import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
    title: '02-04 Days Rajasthan Tour Packages',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/02-04-days-rajasthan-tours",
    },
    openGraph: {
        title: '02-04 Days Rajasthan Tour Packages',
        description: '',
        url: "https://www.rajasthantourpackages.in/02-04-days-rajasthan-tours",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: '02-04 Days Rajasthan Tour Packages',
        description: '',
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
