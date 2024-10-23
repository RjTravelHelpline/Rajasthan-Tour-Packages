import Breadcrumb from "@/components/Breadcrumb";
import { tourByThemeData } from "@/data/pagesData";

export const metadata = {
    title: 'Group Tour Packages for Rajasthan | Rajasthan Tour Packages',
    description: 'Enjoy memorable group tour packages for Rajasthan. Discover royal palaces, vibrant culture, and comfortable facilities. Plan your group adventure today.',
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-group-tours",
    },
    openGraph: {
        title: 'Group Tour Packages for Rajasthan | Rajasthan Tour Packages',
        description: 'Enjoy memorable group tour packages for Rajasthan. Discover royal palaces, vibrant culture, and comfortable facilities. Plan your group adventure today.',
        url: "https://www.rajasthantourpackages.in/rajasthan-group-tours",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};
const GroupTours = () => {
    const { heading, description } = tourByThemeData.groupTours;
    return (
        <>
            {/* bread crumb */}

            <Breadcrumb breadcrumbKey="groupTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default GroupTours;
