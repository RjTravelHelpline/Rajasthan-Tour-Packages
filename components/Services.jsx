import Image from "next/image";
import { FaGripfire } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <div className="section-04 py-4">
        <div className="container services">
        <div className="row py-2 px-2 d-flex justify-content-center align-items-center">
            <h2 className="w-auto text-capitalize home-head">
              services <span className="fw-normal"> we provide</span>
              <FaGripfire className="icon" />
            </h2>
          </div>
          <div className="row service-cards my-4">
            <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-between align-items-stretch">
              <div className="service-card service-card01 w-100 d-flex flex-column align-items-center text-center p-0 border rounded-4">
                <Image alt="service card" src="/Images/Other/domestic-tour.jpg" width={500} height={150} layout="responsive" objectFit="cover" />
                <p className="text-capitalize">Domestic Tour Packages</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-between align-items-stretch">
              <div className="service-card service-card02 w-100 d-flex flex-column align-items-center text-center p-0 border rounded-4">
                <Image alt="service card" src="/Images/Other/international-tour.jpg" width={500} height={150} layout="responsive" objectFit="cover" />
                <p className="text-capitalize">International Tour Packages</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-between align-items-stretch">
              <div className="service-card service-card03 w-100 d-flex flex-column align-items-center text-center p-0 border rounded-4">
                <Image alt="service card" src="/Images/Other/guide.jpg" width={500} height={150} layout="responsive" objectFit="cover" />
                <p className="text-capitalize">Guide and Services</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-between align-items-stretch">
              <div className="service-card service-card04 w-100 d-flex flex-column align-items-center text-center p-0 border rounded-4">
                <Image alt="service card" src="/Images/Other/car-rental.jpg" width={500} height={150} layout="responsive" objectFit="cover" />
                <p className="text-capitalize">Car and Rental Services</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-between align-items-stretch">
              <div className="service-card service-card05 w-100 d-flex flex-column align-items-center text-center p-0 border rounded-4">
                <Image alt="service card" src="/Images/Other/farmhouse.jpg" width={500} height={150} layout="responsive" objectFit="cover" />
                <p className="text-capitalize">Hotel and Farmhouse Booking</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-between align-items-stretch">
              <div className="service-card service-card06 w-100 d-flex flex-column align-items-center text-center p-0 border rounded-4">
                <Image alt="service card" src="/Images/Other/camel-safari.jpg" width={500} height={150} layout="responsive" objectFit="cover" />
                <p className="text-capitalize">Desert and Wildlife Safari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
