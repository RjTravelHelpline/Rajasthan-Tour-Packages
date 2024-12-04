import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'Terms and Conditions | Rajasthan Tour Packages',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/terms",
    },
    openGraph: {
        title: 'Terms and Conditions | Rajasthan Tour Packages',
        description: "",
        url: "https://www.rajasthantourpackages.in/terms",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Terms and Conditions | Rajasthan Tour Packages',
        description: "",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};

const TnC = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="tnc" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">terms & conditions</h1>
                </div>
            </div>
        </>
    );
};

export default TnC;
