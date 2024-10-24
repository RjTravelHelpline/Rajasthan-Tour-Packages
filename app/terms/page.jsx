import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'terms',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/terms",
    },
    openGraph: {
        title: 'terms',
        description: "",
        url: "https://www.rajasthantourpackages.in/terms",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};

const TnC = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="tnc" />
            <div className="container-fluid px-0 py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">terms & conditions</h1>
                </div>
            </div>
        </>
    );
};

export default TnC;
