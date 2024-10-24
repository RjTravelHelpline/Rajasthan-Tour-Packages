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
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
}

const ltcTourPackage = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="ltcTour" />
            <div className="container-fluid px-0 py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">ltc tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default ltcTourPackage;
