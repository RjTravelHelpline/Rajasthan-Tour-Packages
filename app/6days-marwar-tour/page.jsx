import Breadcrumb from "@/components/Breadcrumb";
import React from "react";

export const metadata = {
  title: 'Marwar Rajasthan 6 Days Tour | Rajasthan Tour Packages',
  description: "Enjoy a 6-day Marwar Tour to discover the royalties of Jodhpur, Jaisalmer, and other Marwar places. For your Marwar tour, contact Rajasthan Tour Packages.",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/6days-marwar-tour',
  },
  openGraph: {
    title: 'Marwar Rajasthan 6 Days Tour | Rajasthan Tour Packages',
    description: "Enjoy a 6-day Marwar Tour to discover the royalties of Jodhpur, Jaisalmer, and other Marwar places. For your Marwar tour, contact Rajasthan Tour Packages.",
    url: 'https://www.rajasthantourpackages.in/6days-marwar-tour',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Marwar Rajasthan 6 Days Tour | Rajasthan Tour Packages',
    description: "Enjoy a 6-day Marwar Tour to discover the royalties of Jodhpur, Jaisalmer, and other Marwar places. For your Marwar tour, contact Rajasthan Tour Packages.",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
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