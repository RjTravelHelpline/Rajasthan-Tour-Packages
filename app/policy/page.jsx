import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'Privacy Policy | Rajasthan Tour Packages',
    description: "",
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/policy',
    },
    openGraph: {
        title: 'Privacy Policy | Rajasthan Tour Packages',
        description: "",
        url: 'https://www.rajasthantourpackages.in/policy',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Privacy Policy | Rajasthan Tour Packages',
        description: "",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
}

const Policy = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="privacyPolicy" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">privacy policy</h1>
                </div>
            </div>
        </>
    );
};

export default Policy;
