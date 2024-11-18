
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'heritage hotels tour packages',
    description: '',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/heritage-hotels-tour-packages',
    },
    openGraph: {
        title: 'heritage hotels tour packages',
        description: '',
        url: 'https://www.rajasthantourpackages.in/heritage-hotels-tour-packages',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
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
