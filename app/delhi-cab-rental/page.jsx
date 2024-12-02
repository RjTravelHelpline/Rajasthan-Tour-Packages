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
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'family tour packages',
        description: '',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
}
const DelhiCabRental = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="delhiCab" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">delhi cab rental</h1>
                </div>
            </div>
        </>
    );
};

export default DelhiCabRental;
