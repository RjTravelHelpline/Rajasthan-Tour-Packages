
import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
    title: 'ajmer-cab-rental',
    description: '',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/ajmer-cab-rental',
    },
    openGraph: {
        title: 'ajmer-cab-rental',
        description: '',
        url: 'https://www.rajasthantourpackages.in/ajmer-cab-rental',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
}
const AjmerCabRental = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="ajmerCab" />
        </>
    );
};

export default AjmerCabRental;
