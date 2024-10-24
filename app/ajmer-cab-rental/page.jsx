import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'ajmer cab rental',
    description: '',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/ajmer-cab-rental',
    },
    openGraph: {
        title: 'ajmer cab rental',
        description: '',
        url: 'https://www.rajasthantourpackages.in/ajmer-cab-rental',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
}
const AjmerCabRental = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="ajmerCab" />
            <div className="container-fluid px-0 py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">ajmer cab rental</h1>
                </div>
            </div>
        </>
    );
};

export default AjmerCabRental;
