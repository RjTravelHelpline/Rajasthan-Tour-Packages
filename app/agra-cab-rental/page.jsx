
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
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
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
