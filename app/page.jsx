"use client";
import BlogsSection from "@/components/BlogsSection";
import DaysPack from "@/components/DaysPack";
import PackagesByCities from "@/components/PackagesByCities";
import Packages from "@/components/PopularPackages";
import Reviews from "@/components/Reviews";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

const HomeBanner01 = '/Images/Banners/rajasthan-banner01.webp';
const HomeBanner03 = '/Images/Banners/rajasthan-banner03.webp';
const HomeBanner04 = '/Images/Banners/rajasthan-banner04.webp';
const Home = () => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <>

      <div className="container-fluid home-banner position-relative px-0 bg-tertary-down">
        <Carousel fade pause={false} controls={false}>
          <Carousel.Item>
            <img src={HomeBanner01} alt="Home Banner" />
            <Carousel.Caption>

              <h2>
                Discover Rajasthan<span>.</span>
              </h2>
              <svg
                width="100"
                height="30"
                viewBox="0 0 120 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 10C2 60, -10 -10, 100 20"
                  stroke="#ff5555"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={HomeBanner04} alt="Home Banner" />
            <Carousel.Caption>

              <h2>
                Unforgettable Journeys<span>.</span>
              </h2>
              <svg
                width="100"
                height="30"
                viewBox="0 0 120 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 10C2 60, -10 -10, 100 20"
                  stroke="#ff5555"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={HomeBanner03} alt="Home Banner" />
            <Carousel.Caption>
              <h2>
                Book with Confidence<span>.</span>
              </h2>
              <svg
                width="100"
                height="30"
                viewBox="0 0 120 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 10C2 60, -10 -10, 100 20"
                  stroke="#ff5555"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container-fluid bg-tertary-down pt-5">
        <div className="container home px-0">
          <div className="col col-12 d-flex justify-content-start flex-column align-items-center position-relative">
            <h1 className="text-center mb-4 fw-normal home-heading">
              Experience Rajasthan with{' '}
              <span className="fw-bold"> Our Tailormade Tour Packages</span>
            </h1>
            <p className="text-justify text-black mb-4">
              Explore the diverse and culturally rich regions of Rajasthan, a
              land of vibrant traditions, majestic forts, and stunning
              landscapes. Our
              <span className="fw-bold"> Rajasthan tour packages</span> cater to
              various interests, ensuring an unforgettable journey for every
              traveler. Our Rajasthan tour packages are affordable and{' '}
              <span className="fw-bold">
                flexible, catering to families and individuals
              </span>
              . Our meticulously planned itineraries are crafted to make the
              most of your time, ensuring a smooth and hassle-free experience.
              With various options available, you can personalize your trip to
              match your preferences and interests, giving you complete control
              over your travel plans.
            </p>
            {readMore && (

              <>
                <p className="text-justify text-black mb-4">
                  Experience the royal treatment with our private{' '}
                  <span className="fw-bold">tour packages to Rajasthan</span>,
                  where personalized attention is our top priority. This allows
                  you to savor this royal state&apos;s incredible sights and sounds
                  at your own pace. Our expert guides will be by your side,
                  sharing their deep knowledge of each destination&apos;s rich
                  history, culture, and traditions, making you feel valued and
                  important. We understand your time is precious, so we aim to
                  offer maximum experiences in minimum time. Whether you want to
                  explore the iconic landmarks of Jaipur, immerse yourself in
                  the vibrant culture of Udaipur, witness the architectural
                  wonders of Jodhpur, discover the ancient history of Pushkar,
                  or experience the colorful charm of Jaisalmer, our
                  <span className="fw-bold">Rajasthan tour packages</span> cover
                  it all.
                </p>
                <p className="text-justify text-black mb-4">
                  Join us for an unforgettable journey through Rajasthan, where
                  you can create lifelong memories and discover the magic of
                  this incredible region. Let us help you experience the best of
                  Rajasthan with our tailored{' '}
                  <span className="fw-bold">
                    tour packages for families and individuals
                  </span>
                  , offering a perfect blend of adventure, culture, and
                  relaxation.
                </p>
              </>
            )}
            <button className="read-more-btn d-flex position-absolute bottom-0 home-read-more" onClick={handleReadMore}>
              {readMore ? <>Show Less</> : <>Read More</>}
            </button>
            <div className="py-2"></div>

          </div>
        </div>
      </div>
      <Packages />
      <DaysPack />
      <PackagesByCities />
      <Reviews />
      <BlogsSection />
    </>
  );
}


export default Home;