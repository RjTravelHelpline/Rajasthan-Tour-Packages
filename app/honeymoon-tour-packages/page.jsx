import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'Rajasthan Honeymoon Packages | Rajasthan Tour Packages',
    description: 'Celebrate your love with our Rajasthan honeymoon packages. Enjoy romantic stays, stunning palaces, and unique experiences. Plan your dream getaway today.',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/honeymoon-tour-packages',
    },
    openGraph: {
        title: 'Rajasthan Honeymoon Packages | Rajasthan Tour Packages',
        description: 'Celebrate your love with our Rajasthan honeymoon packages. Enjoy romantic stays, stunning palaces, and unique experiences. Plan your dream getaway today.',
        url: 'https://www.rajasthantourpackages.in/honeymoon-tour-packages',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};
const HoneyMoonTourPackage = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="honeymoonTour" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">Rajasthan Honeymoon Tour Packages </h1>
                </div>
            </div>
        </>
    );
};

export default HoneyMoonTourPackage;
