import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'Senior Citizens Special Trip | Rajasthan Tour Packages',
    description: "Comfortable Rajasthan tour packages created especially for seniors Enjoy Rajasthan Trip Safe, Geriatric Friendly, and Accessible, culturally significant tours.",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/senior-citizens-tour-packages",
    },
    openGraph: {
        title: 'Senior Citizens Special Trip | Rajasthan Tour Packages',
        description: "Comfortable Rajasthan tour packages created especially for seniors Enjoy Rajasthan Trip Safe, Geriatric Friendly, and Accessible, culturally significant tours.",
        url: "https://www.rajasthantourpackages.in/senior-citizens-tour-packages",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Senior Citizens Special Trip | Rajasthan Tour Packages',
        description: "Comfortable Rajasthan tour packages created especially for seniors Enjoy Rajasthan Trip Safe, Geriatric Friendly, and Accessible, culturally significant tours.",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};

const SeniorCitizenTourPackage = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="seniorcitizenTour" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">senior citizens tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default SeniorCitizenTourPackage;
