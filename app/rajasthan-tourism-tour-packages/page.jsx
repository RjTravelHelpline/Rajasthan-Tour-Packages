import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'Top Rajasthan Tourism Package | Rajasthan Tour Packages',
    description: 'Experience the greatness of Rajasthan tourism packages. Get to know royal palaces, vibrant culture, and luxury rentals. Book your exceptional journey now.',
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-tourism-tour-packages",
    },
    openGraph: {
        title: 'Top Rajasthan Tourism Package | Rajasthan Tour Packages',
        description: 'Experience the greatness of Rajasthan tourism packages. Get to know royal palaces, vibrant culture, and luxury rentals. Book your exceptional journey now.',
        url: 'https://www.rajasthantourpackages.in/rajasthan-tourism-tour-packages',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        type: 'website',
        siteName: 'Rajasthan Tour Packages',
    },
};
const RajasthanTourismPackages = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="tourismTour" />
            <div className="container py-5">
                <h1 className="text-capitalize">rajasthan tourism tour packages</h1>
            </div>
        </>
    );
};

export default RajasthanTourismPackages;
