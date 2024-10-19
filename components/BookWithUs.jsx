import {
  FaUserTie,
  FaBriefcase,
  FaHeadset,
  FaTag,
  FaStar,
  FaCheckCircle,
  FaGripfire,
} from 'react-icons/fa';
import dynamic from 'next/dynamic';

const SlickSlider = dynamic(() => import('./SlickSlider'), { ssr: false });

const BookWithUs = () => {
  return (
    <>
      <div className="container-fluid text-black py-5 section-01">
        <div className="container py-4">
          <div className="row py-2 px-2 d-flex justify-content-center align-items-center">
            <h2 className="w-auto text-capitalize home-head">
              <span className="fw-normal">why </span> with us
              <FaGripfire className="icon" />
            </h2>
          </div>
          <div className="row py-2">
            <SlickSlider
              settings={{
                slidesToShow: 2,
                slidesToScroll: 1,
              }}
            >
              {/* Card 1: Travel Experts */}
              <div className="col-12 col-sm-12 col-lg-6 col-md-12 d-flex justify-content-center align-items-center p-2">
                <div className="why-us-card w-100 d-flex justify-content-center my-2 align-items-center">
                  <FaUserTie className="card-icon" /> {/* card-icon */}
                  <h3 className=" mb-0">
                    {' '}
                    <span>Best</span> Travel Experts
                  </h3>
                </div>
              </div>

              {/* Card 2: Years of Experience */}
              <div className="col-12 col-sm-12 col-lg-6 col-md-12 d-flex justify-content-center align-items-center px-2">
                <div className="why-us-card w-100 d-flex justify-content-center my-2 align-items-center">
                  <FaBriefcase className="card-icon" /> {/* card-icon */}
                  <h3 className=" mb-0">
                    {' '}
                    <span>10+ Years</span> of Experience
                  </h3>
                </div>
              </div>

              {/* Card 3: 24x7 On-Trip Assistance */}
              <div className="col-12 col-sm-12 col-lg-6 col-md-12 d-flex justify-content-center align-items-center px-2">
                <div className="why-us-card w-100 d-flex justify-content-center my-2 align-items-center">
                  <FaHeadset className="card-icon" /> {/* card-icon */}
                  <h3 className=" mb-0">
                    {' '}
                    <span>24 X 7</span> On-Trip Assistance
                  </h3>
                </div>
              </div>

              {/* Card 4: Best Price Guaranteed */}
              <div className="col-12 col-sm-12 col-lg-6 col-md-12 d-flex justify-content-center align-items-center px-2">
                <div className="why-us-card w-100 d-flex justify-content-center my-2 align-items-center">
                  <FaTag className="card-icon" /> {/* card-icon */}
                  <h3 className=" mb-0">
                    {' '}
                    <span>Best</span> Price Guaranteed
                  </h3>
                </div>
              </div>

              {/* Card 5: Awesome Google Reviews */}
              <div className="col-12 col-sm-12 col-lg-6 col-md-12 d-flex justify-content-center align-items-center px-2">
                <div className="why-us-card w-100 d-flex justify-content-center my-2 align-items-center">
                  <FaStar className="card-icon" /> {/* card-icon */}
                  <h3 className=" mb-0">
                    {' '}
                    <span>Awesome</span> Google Reviews
                  </h3>
                </div>
              </div>

              {/* Card 6: Seamless Booking Experience */}
              <div className="col-12 col-sm-12 col-lg-6 col-md-12 d-flex justify-content-center align-items-center px-2">
                <div className="why-us-card w-100 d-flex justify-content-center my-2 align-items-center">
                  <FaCheckCircle className="card-icon" /> {/* card-icon */}
                  <h3 className=" mb-0">
                    {' '}
                    <span>Seamless</span> Booking Experience
                  </h3>
                </div>
              </div>
            </SlickSlider>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookWithUs;
