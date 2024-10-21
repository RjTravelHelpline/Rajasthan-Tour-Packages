import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import { _06DaysToursData } from "@/data/data";
export const SixDaysRajasthanTourPackages = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="_06Days" />
      {/* header */}
      <div className="container-fluid py-5 page-head-section">
        <div className="container">
          <h1 className="text-capitalize">
            06 days{" "}
            <span className="fw-normal d-block"> rajasthan tour packages</span>
          </h1>
        </div>
      </div>

      {/* packages */}
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_06DaysToursData.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};