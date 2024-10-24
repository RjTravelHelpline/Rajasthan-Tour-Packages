import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import { _06DaysToursData } from "@/data/data";
export const metadata = {
  title: '06 days rajasthan tour packages',
  description: "",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/06-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: '06 days rajasthan tour packages',
    description: "",
    url: 'https://www.rajasthantourpackages.in/06-days-rajasthan-tour-packages',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
}
const SixDaysRajasthanTourPackages = () => {
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

export default SixDaysRajasthanTourPackages;