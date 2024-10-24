
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
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
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
