import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import { jaisalmerTourPackagesData } from "@/data/data";

export const metadata = {
  title: 'jaisalmer',
  description: '',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/jaisalmer',
  },
  openGraph: {
    title: 'jaisalmer',
    description: '',
    url: 'https://www.rajasthantourpackages.in/jaisalmer',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
}

const Jaisalmer = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="jaisalmer" />
      <div className="container-fluid px-0 py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">jaisalmer</h1>
        </div>
      </div>
      {/* packages */}
      <div className="container packages">
        <div className="row d-flex justify-content-center align-items-stretch my-5">
          <h2 className="text-capitalize">
            jaisalmer <span className="fw-normal">tour packages</span>
          </h2>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {jaisalmerTourPackagesData.map((pkg, index) => (
              <TourPackages key={index} pkg={pkg} />
            ))}
          </div>
          {/* <div className="row d-flex w-100 justify-content-center align-items-center">
            <button
              onClick={toggleShowAll}
              className="more-btn bg-transparent d-flex justify-content-center align-items-center gap-2"
            >
              {showAll ? (
                <>
                  Show less <MdExpandLess />
                </>
              ) : (
                <>
                  View all <MdExpandMore />
                </>
              )}
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Jaisalmer;
