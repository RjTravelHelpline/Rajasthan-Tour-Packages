import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'luxury tour packages',
    description: "",
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/luxury-tour-packages',
    },
    openGraph: {
        title: 'luxury tour packages',
        description: "",
        url: 'https://www.rajasthantourpackages.in/luxury-tour-packages',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'luxury tour packages',
        description: "",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
}

const LuxuryTourPackages = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="luxuryTour" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">luxury tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default LuxuryTourPackages;
