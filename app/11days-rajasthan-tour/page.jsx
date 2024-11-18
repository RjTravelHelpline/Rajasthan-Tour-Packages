import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: '11 days rajasthan tour',
  description: '',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/11days-rajasthan-tour',
  },
  openGraph: {
    title: '11 days rajasthan tour',
    description: '',
    url: 'https://www.rajasthantourpackages.in/11days-rajasthan-tour',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
}
const ElevenDaysRajasthanTourPackage = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="_11daysrajasthantour" />
      <div className="container-fluid py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">11 days rajasthan tour</h1>
        </div>
      </div>
    </>
  );
};

export default ElevenDaysRajasthanTourPackage