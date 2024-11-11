import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'delhi cab rental',
    description: '',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/delhi-cab-rental',
    },
    openGraph: {
        title: 'delhi cab rental',
        description: '',
        url: 'https://www.rajasthantourpackages.in/delhi-cab-rental',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
}
const DelhiCabRental = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="delhiCab" />
            <div className="container-fluid px-0 py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">delhi cab rental</h1>
                </div>
            </div>
        </>
    );
};

export default DelhiCabRental;
