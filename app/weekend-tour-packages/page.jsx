import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'weekend tour packages',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/weekend-tour-packages",
    },
    openGraph: {
        title: 'weekend tour packages',
        description: "",
        url: "https://www.rajasthantourpackages.in/weekend-tour-packages",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'weekend tour packages',
        description: "",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
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
