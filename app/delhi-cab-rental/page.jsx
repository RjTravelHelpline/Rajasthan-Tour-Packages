import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'Delhi Cab Rental for Your Travel | Rajasthan Tour Packages',
    description: 'Car rent in Delhi covering beautiful city Tours, airport transfer services in Delhi, or Out station travel as per comfort in cabs with professional drivers.',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/delhi-cab-rental',
    },
    openGraph: {
        title: 'Delhi Cab Rental for Your Travel | Rajasthan Tour Packages',
        description: 'Car rent in Delhi covering beautiful city Tours, airport transfer services in Delhi, or Out station travel as per comfort in cabs with professional drivers.',
        url: 'https://www.rajasthantourpackages.in/delhi-cab-rental',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Delhi Cab Rental for Your Travel | Rajasthan Tour Packages',
        description: 'Car rent in Delhi covering beautiful city Tours, airport transfer services in Delhi, or Out station travel as per comfort in cabs with professional drivers.',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
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
