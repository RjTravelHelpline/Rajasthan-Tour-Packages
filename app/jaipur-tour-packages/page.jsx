import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: 'jaipur tour packages',
  description: '',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/jaipur-tour-packages',
  },
  openGraph: {
    title: 'jaipur tour packages',
    description: '',
    url: 'https://www.rajasthantourpackages.in/jaipur-tour-packages',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
}
const JaipurPackageTours = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="jaipurTourPackage" />
      <div className="container-fluid py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">jaipur tour packages</h1>
        </div>
      </div>
    </>
  );
};

export default JaipurPackageTours;
