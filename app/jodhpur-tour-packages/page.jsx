import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'jodhpur tour packages',
    description: "",
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/jodhpur-tour-packages',
    },
    openGraph: {
        title: 'jodhpur tour packages',
        description: "",
        url: 'https://www.rajasthantourpackages.in/jodhpur-tour-packages',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
}
const JodhpurTourPackages = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="jodhpurTourPackage" />
            <div className="container-fluid px-0 py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">jodhpur tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default JodhpurTourPackages;
