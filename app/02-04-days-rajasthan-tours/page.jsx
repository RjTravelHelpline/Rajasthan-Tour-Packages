import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import { allCitiesImages } from "@/data/imageData";


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
