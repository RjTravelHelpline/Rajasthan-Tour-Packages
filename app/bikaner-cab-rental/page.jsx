
import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
  title: 'Bikaner Cab Renting Services | Rajasthan Tour Packages',
  description: "Travel around Bikaner in a safe Bikaner Car Rental. Learn by the city's new look and rich historical background. Book Rajasthan Tour Packages for the trip.",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/bikaner-cab-rental',
  },
  openGraph: {
    title: 'Bikaner Cab Renting Services | Rajasthan Tour Packages',
    description: "Travel around Bikaner in a safe Bikaner Car Rental. Learn by the city's new look and rich historical background. Book Rajasthan Tour Packages for the trip.",
    url: 'https://www.rajasthantourpackages.in/bikaner-cab-rental',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Bikaner Cab Renting Services | Rajasthan Tour Packages',
    description: "Travel around Bikaner in a safe Bikaner Car Rental. Learn by the city's new look and rich historical background. Book Rajasthan Tour Packages for the trip.",
    images: "https://www.rajasthantourpackages.in/Images/Banners/ahmedabad-banner.webp",
  },
}
const BikanerCabRental = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="bikanerCab" />
      <div className="container-fluid px-0 py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">bikaner cab rental</h1>
        </div>
      </div>
    </>
  );
};

export default BikanerCabRental;
