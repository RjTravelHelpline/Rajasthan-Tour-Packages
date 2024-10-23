import Breadcrumb from "@/components/Breadcrumb";
import { exclusiveTourPackagesData } from "@/data/pagesData";

export const metadata = {
    title: 'Rajasthan Honeymoon Packages | Rajasthan Tour Packages',
    description: 'Celebrate your love with our Rajasthan honeymoon packages. Enjoy romantic stays, stunning palaces, and unique experiences. Plan your dream getaway today.',
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-from-ahmedabad",
    },
    openGraph: {
        title: 'Rajasthan Honeymoon Packages | Rajasthan Tour Packages',
        description: 'Celebrate your love with our Rajasthan honeymoon packages. Enjoy romantic stays, stunning palaces, and unique experiences. Plan your dream getaway today.',
        url: 'https://www.rajasthantourpackages.in/honeymoon-tour-packages',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};
const HoneyMoonTourPackage = () => {
    const { heading, description } =
        exclusiveTourPackagesData.honeymoonTourPackage;
    return (
        <>
            <Breadcrumb breadcrumbKey="honeymoonTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default HoneyMoonTourPackage;
