import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import { allDaysToursData } from "@/data/data";

export const metadata = {
    title: 'Top Rajasthan Tourism Package | Rajasthan Tour Packages',
    description: 'Experience the greatness of Rajasthan tourism packages. Get to know royal palaces, vibrant culture, and luxury rentals. Book your exceptional journey now.',
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-tourism-tour-packages",
    },
    openGraph: {
        title: 'Top Rajasthan Tourism Package | Rajasthan Tour Packages',
        description: 'Experience the greatness of Rajasthan tourism packages. Get to know royal palaces, vibrant culture, and luxury rentals. Book your exceptional journey now.',
        url: 'https://www.rajasthantourpackages.in/rajasthan-tourism-tour-packages',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Top Rajasthan Tourism Package | Rajasthan Tour Packages',
        description: 'Experience the greatness of Rajasthan tourism packages. Get to know royal palaces, vibrant culture, and luxury rentals. Book your exceptional journey now.',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};
const RajasthanTourismPackages = () => {
    const filterdPackages = allDaysToursData.filter(
        (pkg) => pkg.category === 'tourism'
    );
    return (
        <>
            <Breadcrumb breadcrumbKey="tourismTour" />
            <div className="container py-5">
                <h1 className="text-capitalize text-center">rajasthan tourism tour packages</h1>
            </div>
            <div className="container packages">
                <div className="row py-4 d-flex align-items-stretch px-2">
                    {filterdPackages.map((pkg, index) => (
                        <TourPackages key={index} pkg={pkg} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default RajasthanTourismPackages;
