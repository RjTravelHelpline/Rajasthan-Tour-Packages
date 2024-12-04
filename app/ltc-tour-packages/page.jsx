import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'ltc tour packages',
    description: "",
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/ltc-tour-packages',
    },
    openGraph: {
        title: 'ltc tour packages',
        description: "",
        url: 'https://www.rajasthantourpackages.in/ltc-tour-packages',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'ltc tour packages',
        description: "",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
}

const ltcTourPackage = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="ltcTour" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">ltc tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default ltcTourPackage;
