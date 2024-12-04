import Breadcrumb from "@/components/Breadcrumb";
import { RajasthanCabRentals } from "@/components/RajasthanCabRentals";


export const metadata = {
    title: 'Rajasthan Cab Rental',
    description: '',
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-cab-rental",
    },
    openGraph: {
        title: 'Rajasthan Cab Rental',
        description: '',
        url: "https://www.rajasthantourpackages.in/rajasthan-cab-rental",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Rajasthan Cab Rental',
        description: '',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};

const CabRental = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="homeCabRental" />
            <RajasthanCabRentals />
        </>
    );
};

export default CabRental;
