import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'Kota Cab Rental for Convenient trip | Rajasthan Tour Packages',
    description: "Hire local disk taxi services within the city or even for business travel or while planning a trip to other important places in Kota sans any difficulty.",
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/kota-cab-rental',
    },
    openGraph: {
        title: 'Kota Cab Rental for Convenient trip | Rajasthan Tour Packages',
        description: "Hire local disk taxi services within the city or even for business travel or while planning a trip to other important places in Kota sans any difficulty.",
        url: 'https://www.rajasthantourpackages.in/kota-cab-rental',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Kota Cab Rental for Convenient trip | Rajasthan Tour Packages',
        description: "Hire local disk taxi services within the city or even for business travel or while planning a trip to other important places in Kota sans any difficulty.",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
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
