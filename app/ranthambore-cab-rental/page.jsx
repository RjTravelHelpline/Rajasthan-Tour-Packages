import Breadcrumb from "@/components/Breadcrumb";
export const metadata = {
  title: 'Ranthambore Cab Renting Services | Rajasthan Tour Packages',
  description: "Hire a cab for the most exciting Ranthambore trip. Go for the Rajasthan Tour Packages to visit the wildlife sanctuary and get a comfortable safari tour.",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/ranthambore-cab-rental",
  },
  openGraph: {
    title: 'Ranthambore Cab Renting Services | Rajasthan Tour Packages',
    description: "Hire a cab for the most exciting Ranthambore trip. Go for the Rajasthan Tour Packages to visit the wildlife sanctuary and get a comfortable safari tour.",
    url: "https://www.rajasthantourpackages.in/ranthambore-cab-rental",
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Ranthambore Cab Renting Services | Rajasthan Tour Packages',
    description: "Hire a cab for the most exciting Ranthambore trip. Go for the Rajasthan Tour Packages to visit the wildlife sanctuary and get a comfortable safari tour.",
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
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
