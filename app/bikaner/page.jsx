
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: 'bikaner',
  description: '',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/bikaner',
  },
  openGraph: {
    title: 'bikaner',
    description: '',
    url: 'https://www.rajasthantourpackages.in/bikaner',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
}

const Bikaner = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="bikaner" />
      <div className="container-fluid px-0 py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">bikaner</h1>
        </div>
      </div>
    </>
  );
};

export default Bikaner;
