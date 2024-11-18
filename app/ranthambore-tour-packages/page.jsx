import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'Ranthambore tour packages',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/ranthambore-tour-packages",
    },
    openGraph: {
        title: 'Ranthambore tour packages',
        description: "",
        url: "https://www.rajasthantourpackages.in/ranthambore-tour-packages",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};
const RanthamborePackageTours = () => {
    return (
        <>
         <Breadcrumb breadcrumbKey="ranthamboreTourPackage" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">Ranthambore tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default RanthamborePackageTours;
