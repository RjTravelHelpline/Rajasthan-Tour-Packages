import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'women friendly tour packages',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/women-friendly-tour-packages",
    },
    openGraph: {
        title: 'women friendly tour packages',
        description: "",
        url: "https://www.rajasthantourpackages.in/women-friendly-tour-packages",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'women friendly tour packages',
        description: "",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
      },
};

const WomenFriendlyTourPackage = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="womenfriendlyTour" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">women friendly tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default WomenFriendlyTourPackage;
