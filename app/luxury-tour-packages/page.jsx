import Breadcrumb from "@/components/Breadcrumb";
import { tourByThemeData } from "@/data/pagesData";
export const metadata = {
    title: 'Book Rajasthan Tour From Ahmedabad | Rajasthan Tour Packages',
    description: 'Discover exclusive Rajasthan tour packages from Ahmedabad. Explore historic forts, vibrant markets, and rich cultural treasures on this memorable journey.',
    alternates: {
        canonical: "http://www.rajasthantourpackages.in/rajasthan-tour-from-ahmedabad",
    },
};

const LuxuryTourPackages = () => {
    const { heading, description } = tourByThemeData.luxuryTourPackages;
    return (
        <>
            <Breadcrumb breadcrumbKey="luxuryTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default LuxuryTourPackages;
