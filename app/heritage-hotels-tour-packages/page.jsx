import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'Heritage Hotels Tour Packages | Rajasthan Tour Packages',
    description: 'Experience Rajasthan’s Heritage Hotels with our Heritage Hotels Tour Packages. Feel the royal and historical touch of Rajasthan with Rajasthan Tour Packages now.',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/heritage-hotels-tour-packages',
    },
    openGraph: {
        title: 'Heritage Hotels Tour Packages | Rajasthan Tour Packages',
        description: 'Experience Rajasthan’s Heritage Hotels with our Heritage Hotels Tour Packages. Feel the royal and historical touch of Rajasthan with Rajasthan Tour Packages now.',
        url: 'https://www.rajasthantourpackages.in/heritage-hotels-tour-packages',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Heritage Hotels Tour Packages | Rajasthan Tour Packages',
        description: 'Experience Rajasthan’s Heritage Hotels with our Heritage Hotels Tour Packages. Feel the royal and historical touch of Rajasthan with Rajasthan Tour Packages now.',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
}

const HeritageHotelsTourPackages = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="heritageHotelTour" />
            <div className="container-fluid py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5">heritage hotels tour packages</h1>
                </div>
            </div>
        </>
    );
};

export default HeritageHotelsTourPackages;
