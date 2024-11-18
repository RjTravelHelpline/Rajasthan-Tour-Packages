import Breadcrumb from "@/components/Breadcrumb";
import React from "react";

export const metadata = {
  title: '06 days marwar tour',
  description: "",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/6days-marwar-tour',
  },
  openGraph: {
    title: '06 days marwar tour',
    description: "",
    url: 'https://www.rajasthantourpackages.in/6days-marwar-tour',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
}

const SixDaysMarwarTourPackage = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="_6daysmarwartour" />
      <div className="container-fluid py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">06 days marwar tour</h1>
        </div>
      </div>
    </>
  );
};

export default SixDaysMarwarTourPackage;