import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import { _02DaysToursData } from "@/data/data";

export const metadata = {
  title: '02 Days Rajasthan Tour Packages',
  description: "",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/02-days-rajasthan-tour-packages",
  },
};
const TwoDaysRajasthanTourPackages = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="_02Days" />
      <div className="container-fluid py-5 page-head-section">
        <div className="container">
          <h1 className="text-capitalize">
            02 days{' '}
            <span className="fw-normal d-block"> rajasthan tour packages</span>
          </h1>
        </div>
      </div>
      {/* tour packages */}
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_02DaysToursData.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TwoDaysRajasthanTourPackages;
