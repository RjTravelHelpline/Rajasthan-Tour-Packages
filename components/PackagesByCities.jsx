"use client"
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GoArrowRight } from 'react-icons/go';
import { FaGripfire } from 'react-icons/fa';
import SlickSlider from './SlickSlider';
import Link from 'next/link';
import { tourByCities } from '@/data/data';

const PackagesByCities = () => {
  // visible cities
  const visibleCities = tourByCities.slice(0, 7);
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="container-fluid section-01 py-4">
      <div className="container bydayspackages py-4">
        <div className="row py-2 px-2 d-flex justify-content-center align-items-center">
          <h2 className="w-auto text-capitalize home-head">
            <span className="fw-normal">tour packages </span> by cities
            <FaGripfire className="icon" />
          </h2>
          <p className="text-center home-para">
            Discover the allure of Rajasthan with our tailored tour packages,
            perfect for travelers seeking a{' '}
            <span className="fw-bold text-capitalize">
              Rajasthan tour package
            </span>{' '}
            from different cities, states, and countries, whether it's from
            Delhi, Mumbai,
            {readMore && (
              <>
                Kolkata, Bangalore, or anywhere in the world. Our specialized
                packages cater to various cities, offering a seamless journey to
                explore Rajasthan’s vibrant heritage and majestic landscapes.
                Whether you're departing for the{' '}
                <span className="fw-bold">
                  Rajasthan Tour from the United Kingdom
                </span>
                , Germany, France, Australia, or the USA. Our itineraries ensure
                a memorable experience with personalized attention and flexible
                options. Book your Rajasthan Tour today and dive into the rich
                culture, majestic forts, and colorful markets of Rajasthan, no
                matter where you start your adventure.
              </>
            )}
            <button className="read-more-btn" onClick={handleReadMore}>
              {readMore ? <>Show Less</> : <>..Read More</>}
            </button>
          </p>
        </div>
        <div className="row py-4 d-flex align-items-stretch">
          <SlickSlider>
            {visibleCities.map((pkg, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch px-2"
              >
                <Link href={pkg.navigate} className="text-capitalize">
                  <Card className="card bg-transparent">
                    <Card.Img
                      variant="top"
                      src={pkg.imgSrc}
                      alt="Card Packages"
                      className="w-100 card-image"
                    />
                    <div className="row p-3 card-content d-flex align-items-center  justfiy-content-center flex-column">
                      <p className="mb-0">rajasthan tour from</p>
                      <h3 className="w-100 text-capitalize mx-1">
                        {pkg.title}
                      </h3>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </SlickSlider>
        </div>
        <div className="row d-flex w-100 justify-content-start align-items-center mt-2">
          <button className="more-btn bg-transparent d-flex justify-content-center align-items-center gap-2">
            <Link href="/rajasthan-tour-by-cities" className="text-black">
              view more <GoArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackagesByCities;
