import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'Rajasthan Tourism Hotels',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/rajasthan-tourism-hotels",
    },
    openGraph: {
        title: 'Rajasthan Tourism Hotels',
        description: "",
        url: "https://www.rajasthantourpackages.in/rajasthan-tourism-hotels",
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
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
