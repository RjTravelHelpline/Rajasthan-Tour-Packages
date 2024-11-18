import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'privacy policy',
    description: "",
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/policy',
    },
    openGraph: {
        title: 'privacy policy',
        description: "",
        url: 'https://www.rajasthantourpackages.in/policy',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
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
