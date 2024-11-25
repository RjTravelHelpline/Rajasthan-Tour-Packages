import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
    title: '06-10 days rajasthan tours',
    description: "",
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/06-10-days-rajasthan-tours',
    },
    openGraph: {
        title: '06-10 days rajasthan tours',
        description: "",
        url: 'https://www.rajasthantourpackages.in/06-10-days-rajasthan-tours',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
}
const Six_Ten_DaysRajasthanTours = () => {
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
            title: '06-10 days rajasthan tours',
            subhead: null
        },
    ];
    return (
        <>
            <Breadcrumb breadcrumbKey="_06_10Days" />
            <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
                <TourCarousel images={images} content={content} />
            </div>
        </>
    );
};

export default Six_Ten_DaysRajasthanTours;