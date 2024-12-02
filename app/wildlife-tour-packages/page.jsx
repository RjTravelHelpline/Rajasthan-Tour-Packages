import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'Wildlife Tour Adventures | Rajasthan Tour Packages',
    description: "Discover Rajasthan’s Wildlife at our Wildlife Tour Packages. Rajasthan Tour Packages offers to explore wildlife and nature tours at the best wildlife destinations.",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/wildlife-tour-packages",
    },
    openGraph: {
        title: 'Wildlife Tour Adventures | Rajasthan Tour Packages',
        description: "Discover Rajasthan’s Wildlife at our Wildlife Tour Packages. Rajasthan Tour Packages offers to explore wildlife and nature tours at the best wildlife destinations.",
        url: "https://www.rajasthantourpackages.in/wildlife-tour-packages",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Wildlife Tour Adventures | Rajasthan Tour Packages',
        description: "Discover Rajasthan’s Wildlife at our Wildlife Tour Packages. Rajasthan Tour Packages offers to explore wildlife and nature tours at the best wildlife destinations.",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};

const WildlifeTourPackages = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="wildlifeTour" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">wildlife tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default WildlifeTourPackages;
