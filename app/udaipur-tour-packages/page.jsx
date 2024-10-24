import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: 'udaipur tour packages',
  description: "",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/udaipur-tour-packages",
  },
  openGraph: {
    title: 'udaipur tour packages',
    description: "",
    url: "https://www.rajasthantourpackages.in/udaipur-tour-packages",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
};
const UdaipurTourPackage = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="udaipurTourPackage" />
      <div className="container-fluid px-0 py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">udaipur tour packages</h1>
        </div>
      </div>
    </>
  );
};

export default UdaipurTourPackage;
