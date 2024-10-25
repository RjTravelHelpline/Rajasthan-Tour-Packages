import Breadcrumb from "@/components/Breadcrumb";
import { RajasthanCabRentals } from "@/components/RajasthanCabRentals";


export const metadata = {
    title: 'Rajasthan Cab Rental',
    description: '',
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/about-us",
    },
    openGraph: {
        title: 'Rajasthan Cab Rental',
        description: '',
        url: "https://www.rajasthantourpackages.in/about-us",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
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
