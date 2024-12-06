import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'Weekend Short Getaway Tour Package | Rajasthan Tour Packages',
    description: "Choose the best weekend trips to Rajasthan weekend tour packages with a short trip to forts, palaces, and other picturesque locations for a wonderful vacation.",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/weekend-tour-packages",
    },
    openGraph: {
        title: 'Weekend Short Getaway Tour Package | Rajasthan Tour Packages',
        description: "Choose the best weekend trips to Rajasthan weekend tour packages with a short trip to forts, palaces, and other picturesque locations for a wonderful vacation.",
        url: "https://www.rajasthantourpackages.in/weekend-tour-packages",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Weekend Short Getaway Tour Package | Rajasthan Tour Packages',
        description: "Choose the best weekend trips to Rajasthan weekend tour packages with a short trip to forts, palaces, and other picturesque locations for a wonderful vacation.",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};


const WeekendTourPackages = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="weekendTour" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">weekend tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default WeekendTourPackages;
