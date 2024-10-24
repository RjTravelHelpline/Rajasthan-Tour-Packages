
import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
  title: 'jaisalmer cab rental',
  description: '',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/jaisalmer-cab-rental',
  },
  openGraph: {
    title: 'jaisalmer cab rental',
    description: '',
    url: 'https://www.rajasthantourpackages.in/jaisalmer-cab-rental',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
}
const JaisalmerCabRental = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="jaisalmerCab" />
      <div className="container-fluid px-0 py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">jaisalmer cab rental</h1>
        </div>
      </div>
    </>
  );
};

export default JaisalmerCabRental;
