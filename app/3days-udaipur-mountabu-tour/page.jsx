import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'Udaipur & Mount Abu 3 Days Tour | Rajasthan Tour Packages',
    description: "Experience the Udaipur Mount Abu Tour and find the charm of Rajasthan hill stations in 03 days. Book your tour at Rajasthan Tour Packages for a relaxing trip.",
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/3days-udaipur-mountabu-tour',
    },
    openGraph: {
        title: 'Udaipur & Mount Abu 3 Days Tour | Rajasthan Tour Packages',
        description: "Experience the Udaipur Mount Abu Tour and find the charm of Rajasthan hill stations in 03 days. Book your tour at Rajasthan Tour Packages for a relaxing trip.",
        url: 'https://www.rajasthantourpackages.in/3days-udaipur-mountabu-tour',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Udaipur & Mount Abu 3 Days Tour | Rajasthan Tour Packages',
        description: "Experience the Udaipur Mount Abu Tour and find the charm of Rajasthan hill stations in 03 days. Book your tour at Rajasthan Tour Packages for a relaxing trip.",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
}
const ThreeDaysUdaipurMountabuTourPackage = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="_3daysudaipurmountabutour" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">03 Days Udaipur Mountabu Tour</h1>
                </div>
            </div>
        </>
    );
};
export default ThreeDaysUdaipurMountabuTourPackage