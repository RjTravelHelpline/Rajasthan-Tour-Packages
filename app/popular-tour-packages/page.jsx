import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import { popularTourPackagesData } from "@/data/data";
export const metadata = {
    title: 'Popular Tour Packages for Travel | Rajasthan Tour Packages',
    description: "Discover the most popular Rajasthan Tour Packages. Check out Rajasthan Tour Packages and enjoy a wonderful vacation to the most famous places of interest.",
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/popular-tour-packages',
    },
    openGraph: {
        title: 'Popular Tour Packages for Travel | Rajasthan Tour Packages',
        description: "Discover the most popular Rajasthan Tour Packages. Check out Rajasthan Tour Packages and enjoy a wonderful vacation to the most famous places of interest.",
        url: 'https://www.rajasthantourpackages.in/popular-tour-packages',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Popular Tour Packages for Travel | Rajasthan Tour Packages',
        description: "Discover the most popular Rajasthan Tour Packages. Check out Rajasthan Tour Packages and enjoy a wonderful vacation to the most famous places of interest.",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
}

const PopularTourPackages = () => {
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="popularTour" />
            {/* header */}
            <div className="container-fluid py-5 page-head-section">
                <div className="container">
                    <h1 className="text-capitalize">
                        popular <span className="fw-normal">tour packages</span>
                    </h1>
                </div>
            </div>
            <div className="container packages my-5">
                <div className="row py-4 d-flex align-items-stretch px-2">
                    {popularTourPackagesData.map((pkg, index) => (
                        <TourPackages key={index} pkg={pkg} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PopularTourPackages;
