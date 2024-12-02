import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'Udaipur Cab Hire Services | Rajasthan Tour Packages',
    description: "Book Udaipur Cab Rental for Safe city tours. Minimise the stress in travelling when you book for Rajasthan Tour Packages for the best Udaipur experience.",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/udaipur-cab-rental",
    },
    openGraph: {
        title: 'Udaipur Cab Hire Services | Rajasthan Tour Packages',
        description: "Book Udaipur Cab Rental for Safe city tours. Minimise the stress in travelling when you book for Rajasthan Tour Packages for the best Udaipur experience.",
        url: "https://www.rajasthantourpackages.in/udaipur-cab-rental",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Udaipur Cab Hire Services | Rajasthan Tour Packages',
        description: "Book Udaipur Cab Rental for Safe city tours. Minimise the stress in travelling when you book for Rajasthan Tour Packages for the best Udaipur experience.",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};
const UdaipurCabRental = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="udaipurCab" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">udaipur cab rental</h1>
                </div>
            </div>
        </>
    );
};

export default UdaipurCabRental;
