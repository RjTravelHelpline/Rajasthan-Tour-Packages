import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import { allCitiesImages } from "@/data/imageData";
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