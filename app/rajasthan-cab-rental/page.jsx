import Breadcrumb from "@/components/Breadcrumb";
import { RajasthanCabRentals } from "@/components/RajasthanCabRentals";


export const metadata = {
    title: 'Explore Rajasthan with Cab Rental | Rajasthan Tour Packages',
    description: 'Hire affordable cab services in Rajasthan for your local half-day, full-day, or outstation trips from Rajasthan with experienced drivers and clean cars.',
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-cab-rental",
    },
    openGraph: {
        title: 'Explore Rajasthan with Cab Rental | Rajasthan Tour Packages',
        description: 'Hire affordable cab services in Rajasthan for your local half-day, full-day, or outstation trips from Rajasthan with experienced drivers and clean cars.',
        url: "https://www.rajasthantourpackages.in/rajasthan-cab-rental",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Explore Rajasthan with Cab Rental | Rajasthan Tour Packages',
        description: 'Hire affordable cab services in Rajasthan for your local half-day, full-day, or outstation trips from Rajasthan with experienced drivers and clean cars.',
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
