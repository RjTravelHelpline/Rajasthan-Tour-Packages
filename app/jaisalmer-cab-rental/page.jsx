
import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
  title: 'jaisalmer-cab-rental',
  description: '',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/jaisalmer-cab-rental',
  },
  openGraph: {
    title: 'jaisalmer-cab-rental',
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
    </>
  );
};

export default JaisalmerCabRental;
