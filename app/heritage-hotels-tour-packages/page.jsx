
import Breadcrumb from "@/components/Breadcrumb";
import { tourByThemeData } from "@/data/pagesData";

export const metadata = {
    title: 'heritage-hotels-tour-packages',
    description: '',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/heritage-hotels-tour-packages',
    },
    openGraph: {
        title: 'heritage-hotels-tour-packages',
        description: '',
        url: 'https://www.rajasthantourpackages.in/heritage-hotels-tour-packages',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
}

const HeritageHotelsTourPackages = () => {
    const { heading, description } = tourByThemeData.heritageHotelsTourPackages;
    return (
        <>
            <Breadcrumb breadcrumbKey="heritageHotelTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default HeritageHotelsTourPackages;
