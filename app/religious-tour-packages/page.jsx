import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'religious tour packages',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/religious-tour-packages",
    },
    openGraph: {
        title: 'religious tour packages',
        description: "",
        url: "https://www.rajasthantourpackages.in/religious-tour-packages",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};

const ReligiousTourPackages = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="religiousTour" />
            <div className="container-fluid px-0 py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">religious tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default ReligiousTourPackages;
