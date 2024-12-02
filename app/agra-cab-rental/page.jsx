
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: 'agra cab rental',
  description: '',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/agra-cab-rental',
  },
  openGraph: {
    title: 'agra cab rental',
    description: '',
    url: 'https://www.rajasthantourpackages.in/agra-cab-rental',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'agra cab rental',
    description: '',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}
const AgraCabRental = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="agraCab" />
      <div className="container-fluid px-0 py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">agra cab rental</h1>
        </div>
      </div>
    </>
  );
};

export default AgraCabRental;
