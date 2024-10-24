import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'wildlife tour packages',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/wildlife-tour-packages",
    },
    openGraph: {
        title: 'wildlife tour packages',
        description: "",
        url: "https://www.rajasthantourpackages.in/wildlife-tour-packages",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};

const WildlifeTourPackages = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="wildlifeTour" />
            <div className="container-fluid px-0 py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">wildlife tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default WildlifeTourPackages;
