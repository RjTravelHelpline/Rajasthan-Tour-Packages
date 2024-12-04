
import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
  title: 'bikaner cab rental',
  description: '',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/bikaner-cab-rental',
  },
  openGraph: {
    title: 'bikaner cab rental',
    description: '',
    url: 'https://www.rajasthantourpackages.in/bikaner-cab-rental',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'bikaner cab rental',
    description: '',
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
