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
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
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
