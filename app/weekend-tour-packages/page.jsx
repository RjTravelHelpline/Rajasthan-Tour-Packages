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
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
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
