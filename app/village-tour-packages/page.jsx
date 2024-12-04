import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'village tour packages',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/village-tour-packages",
    },
    openGraph: {
        title: 'village tour packages',
        description: "",
        url: "https://www.rajasthantourpackages.in/village-tour-packages",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'weekend tour packages',
        description: "",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};

const VillageTourPackages = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="villageTour" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">village tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default VillageTourPackages;
