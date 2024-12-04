import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'family tour packages',
    description: '',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/family-tour-packages',
    },
    openGraph: {
        title: 'family tour packages',
        description: '',
        url: 'https://www.rajasthantourpackages.in/family-tour-packages',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'family tour packages',
        description: '',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
}

const FamilyTourPackage = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="familyTour" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">family tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default FamilyTourPackage;
