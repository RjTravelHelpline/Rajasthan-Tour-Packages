
import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import { jodhpurTourPackagesData } from "@/data/data";

export const metadata = {
  title: 'jodhpur',
  description: "",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/jodhpur',
  },
  openGraph: {
    title: 'jodhpur',
    description: "",
    url: 'https://www.rajasthantourpackages.in/jodhpur',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
}


const Jodhpur = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="jodhpur" />
      <div className="container-fluid px-0 py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">jodhpur</h1>
        </div>
      </div>
      {/* banner */}
      {/* <div className="container-fluid home-banner destination-banner position-relative px-0">
        <Carousel fade pause={false} controls={false}>
          <Carousel.Item>
            <img
              src={allCitiesImages.jodhpur.jodhpurBanner.src}
              alt="Home Banner"
            />
            <Carousel.Caption>
              <h1 className="text-capitalize">jodhpur</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div> */}
      {/* packages */}
      <div className="container packages">
        <div className="row d-flex justify-content-center align-items-stretch my-5">
          <h2 className="text-capitalize">
            jodhpur <span className="fw-normal">tour packages</span>
          </h2>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {jodhpurTourPackagesData.map((pkg, index) => (
              <TourPackages key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jodhpur;
