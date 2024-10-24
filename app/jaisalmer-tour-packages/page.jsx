import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'jaisalmer tour packages',
    description: '',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/jaisalmer-tour-packages',
    },
    openGraph: {
        title: 'jaisalmer tour packages',
        description: '',
        url: 'https://www.rajasthantourpackages.in/jaisalmer-tour-packages',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
}
const JaisalmerTourPackage = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="bikanerTourPackage" />
            <div className="container-fluid px-0 py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">jaisalmer tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default JaisalmerTourPackage;
