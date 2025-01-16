"use client";
import { useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlickSlider from './SlickSlider';
import Link from 'next/link';
import { tourByCities } from '@/data/data';
import Image from 'next/image';
import { ExploreAll } from './ExploreAll';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { TbLocationFilled } from "react-icons/tb";

const PackagesByCities = () => {
  const link = (text, url) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="anchor color-tertary"
      >
        {text}
      </a>
    );
  };
  // visible cities
  const visibleCities = tourByCities.slice(0, 8);
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <section className="container-fluid section-01 py-5 position-relative">
      <Container className="bydayspackages mb-5">
        <Row className="py-2 px-2 d-flex justify-content-center align-items-center">
          <div className="d-flex-justify-content-center align-items-center">
            <h2 className="text-center text-capitalize home-head web-title fw-normal">
              tour packages <span className="fw-bold">by cities </span>
            </h2>
          </div>
          <p className="text-center home-para">
            Learn more about Rajasthan with the help of our Rajasthan tour packages, which are suitable for travelers who want a {link('Rajasthan Tour By Cities', 'https://www.rajasthantourpackages.in/rajasthan-tour-by-cities')} from other cities, states, or countries, including Delhi, Mumbai, Kolkata, Bangalore, and other parts of the world. Our specialized packages cater to various cities, offering a seamless journey to explore Rajasthan&apos;s vibrant heritage and majestic landscapes. {readMore && (
              <>
                Whether you&apos;re departing for the <strong>Rajasthan Tour from the United Kingdom</strong>, Germany, France, Australia, or the USA. Our itineraries ensure a memorable experience with personalized attention and flexible options. Book your Rajasthan Tour today and dive into the rich culture, majestic forts, and colorful markets of Rajasthan, no matter where you start your adventure.
              </>
            )}
            <button className="read-more-btn p-0 bg-transparent" onClick={handleReadMore}>
              {readMore ? <></> : <>...</>}
            </button>
          </p>
        </Row>
        <Row className="py-4 d-flex align-items-stretch px-0">
          <SlickSlider settings={{ slidesToShow: 4 }}>
            {visibleCities.map((pkg, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch px-2"
              >
                <Link href={pkg.navigate} className="text-capitalize">
                  <Card className="card bg-transparent">
                    <Image
                      src={pkg.imgSrc}
                      alt={pkg.imgAlt}
                      title={pkg.imgSrc}
                      className="w-100 card-image"
                      width={600}
                      height={800}
                      placeholder='empty' style={{ backgroundColor: "#000" }}
                    />
                    <div className="row p-3 card-content d-flex align-items-center  justfiy-content-center flex-column">
                      <p className="text-white web-title">rajasthan tour package</p>
                      <hr />
                      <h4 className="w-100 text-capitalize mx-1 web-title card-title">
                        <span className="mb-2 me-2 color-tertary">
                          <TbLocationFilled />
                        </span>
                        <span>

                          {pkg.title.split(" ")[0]}{" "}
                        </span>
                        <span className="fw-normal web-title">
                          {pkg.title.split(" ")[1]}
                        </span>
                      </h4>
                    </div>
                    <Link href={pkg.navigate} className="text-capitalize m-auto p-3 d-flex rounded-5">
                      <MdOutlineArrowOutward />
                    </Link>
                  </Card>
                </Link>
              </div>
            ))}
          </SlickSlider>
        </Row>
      </Container>
      <ExploreAll text="explore all" href="/rajasthan-tour-by-cities" />
    </section>
  );
};

export default PackagesByCities;
