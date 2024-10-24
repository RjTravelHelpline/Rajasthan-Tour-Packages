import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'bharatpur tour packages',
    description: '',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/bharatpur-tour-packages',
    },
    openGraph: {
        title: 'bharatpur tour packages',
        description: '',
        url: 'https://www.rajasthantourpackages.in/bharatpur-tour-packages',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
}
const BharatpurTourPackage = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="bharatpurTourPackage" />
            <div className="container-fluid px-0 py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">bharatpur tour packages</h1>
                </div>
            </div></>);
};

export default BharatpurTourPackage;
