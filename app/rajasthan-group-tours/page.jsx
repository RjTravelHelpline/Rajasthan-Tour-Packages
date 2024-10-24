import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'Group Tour Packages for Rajasthan | Rajasthan Tour Packages',
    description: 'Enjoy memorable group tour packages for Rajasthan. Discover royal palaces, vibrant culture, and comfortable facilities. Plan your group adventure today.',
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-group-tours",
    },
    openGraph: {
        title: 'Group Tour Packages for Rajasthan | Rajasthan Tour Packages',
        description: 'Enjoy memorable group tour packages for Rajasthan. Discover royal palaces, vibrant culture, and comfortable facilities. Plan your group adventure today.',
        url: "https://www.rajasthantourpackages.in/rajasthan-group-tours",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};
const GroupTours = () => {
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="groupTour" />
            <div className="container-fluid px-0 py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">rajasthan group tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default GroupTours;
