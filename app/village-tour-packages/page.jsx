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
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};

const VillageTourPackages = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="villageTour" />
            <div className="container-fluid px-0 py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">village tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default VillageTourPackages;
