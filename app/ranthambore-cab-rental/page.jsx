import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
  title: 'Ranthambore cab rental',
  description: "",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/ranthambore-cab-rental",
  },
  openGraph: {
    title: 'Ranthambore cab rental',
    description: "",
    url: "https://www.rajasthantourpackages.in/ranthambore-cab-rental",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
};

const RanthamboreCabRental = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="ranthamboreCab" />
      <div className="container-fluid py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">ranthambore cab rental</h1>
        </div>
      </div>
    </>
  );
};

export default RanthamboreCabRental;
