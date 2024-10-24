import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'udaipur cab rental',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/udaipur-cab-rental",
    },
    openGraph: {
        title: 'udaipur cab rental',
        description: "",
        url: "https://www.rajasthantourpackages.in/udaipur-cab-rental",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};
const UdaipurCabRental = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="udaipurCab" />
            <div className="container-fluid px-0 py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">udaipur cab rental</h1>
                </div>
            </div>
        </>
    );
};

export default UdaipurCabRental;
