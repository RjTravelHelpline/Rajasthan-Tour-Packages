import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import { popularTourPackagesData } from "@/data/data";
export const metadata = {
    title: 'popular tour packages',
    description: "",
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/popular-tour-packages',
    },
    openGraph: {
        title: 'popular tour packages',
        description: "",
        url: 'https://www.rajasthantourpackages.in/popular-tour-packages',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
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
