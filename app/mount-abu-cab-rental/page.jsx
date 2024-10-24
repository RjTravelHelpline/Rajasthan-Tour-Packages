import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
  title: 'mount abu cab rental',
  description: "",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/mountabu-cab-rental',
  },
  openGraph: {
    title: 'mount abu cab rental',
    description: "",
    url: 'https://www.rajasthantourpackages.in/mountabu-cab-rental',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
}

const MountAbuCabRental = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="mountabuCab" />
      <div className="container-fluid px-0 py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">mount abu cab rental</h1>
        </div>
      </div>
    </>
  );
};

export default MountAbuCabRental;
