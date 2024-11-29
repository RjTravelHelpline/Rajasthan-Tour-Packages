import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'kota cab rental',
    description: "",
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/kota-cab-rental',
    },
    openGraph: {
        title: 'kota cab rental',
        description: "",
        url: 'https://www.rajasthantourpackages.in/kota-cab-rental',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
}

const KotaCabRental = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="mountabuCab" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">kota cab rental</h1>
                </div>
            </div>
        </>
    );
};

export default KotaCabRental;
