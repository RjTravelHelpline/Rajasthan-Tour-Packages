
import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import { _11To15DaysToursData } from "@/data/data";
export const metadata = {
  title: '11-15 days rajasthan tour packages',
  description: '',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/11-15-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: "11-15 days rajasthan tour packages",
    description: '',
    url: 'https://www.rajasthantourpackages.in/11-15-days-rajasthan-tour-packages',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
}

const Eleven_FifteenDaysRajasthanTours = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="_11_15Days" />
      {/* header */}
      <div className="container-fluid py-5 page-head-section">
        <div className="container">
          <h1 className="text-capitalize">
            11-15 days{" "}
            <span className="fw-normal d-block"> rajasthan tours Packages</span>
          </h1>
        </div>
      </div>

      {/* packages */}
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_11To15DaysToursData.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Eleven_FifteenDaysRajasthanTours;