
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: 'agra-cab-rental',
  description: '',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/agra-cab-rental',
  },
  openGraph: {
    title: 'agra-cab-rental',
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
    </>
  );
};

export default AgraCabRental;
