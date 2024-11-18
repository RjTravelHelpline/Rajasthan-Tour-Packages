import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'senior citizens tour packages',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/senior-citizens-tour-packages",
    },
    openGraph: {
        title: 'senior citizens tour packages',
        description: "",
        url: "https://www.rajasthantourpackages.in/senior-citizens-tour-packages",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
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
