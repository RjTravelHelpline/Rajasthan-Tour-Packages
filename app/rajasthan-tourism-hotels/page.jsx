import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'Explore Rajasthan Tourism Hotels | Rajasthan Tour Packages',
    description: "Find the best Rajasthan tourism hotels for comfortable and memorable tourist accommodations with genuine hospitality and modern comforts throughout the state.",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-tourism-hotels",
    },
    openGraph: {
        title: 'Explore Rajasthan Tourism Hotels | Rajasthan Tour Packages',
        description: "Find the best Rajasthan tourism hotels for comfortable and memorable tourist accommodations with genuine hospitality and modern comforts throughout the state.",
        url: "https://www.rajasthantourpackages.in/rajasthan-tourism-hotels",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Explore Rajasthan Tourism Hotels | Rajasthan Tour Packages',
        description: "Find the best Rajasthan tourism hotels for comfortable and memorable tourist accommodations with genuine hospitality and modern comforts throughout the state.",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};
const RajasthanTourismHotels = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="tourismHotels" />
            <div className="container py-5">
                <div className="row mb-5">
                    <h1 className="sec-subhead">Rajasthan Tourism Hotels</h1>
                </div>
            </div>
        </>
    );
};

export default RajasthanTourismHotels;
