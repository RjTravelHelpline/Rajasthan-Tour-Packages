import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: 'jodhpur cab rental',
  description: "",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/jodhpur-cab-rental',
  },
  openGraph: {
    title: 'jodhpur cab rental',
    description: "",
    url: 'https://www.rajasthantourpackages.in/jodhpur-cab-rental',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
}
const JodhpurCabRental = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="jodhpurCab" />
      <div className="container-fluid px-0 py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">jodhpur cab rental</h1>
        </div>
      </div>
    </>
  );
};

export default JodhpurCabRental;
