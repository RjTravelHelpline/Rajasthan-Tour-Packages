"use client";
import { FaGripfire } from 'react-icons/fa';
import { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import SlickSlider from './SlickSlider';
import { reviewers } from '@/data/data';
import Link from 'next/link';
import Image from 'next/image';
const tripAdvisorLogo = '/Images/Logos/tripadvisor-logo.webp';
const googleStars = '/Images/Logos/google-logo.webp';

const Reviews = () => {
  return (
    <>
      <div className="container-fluid py-5 section-01">
        <div className="container reviews px-0 my-5">
          <div className="row py-2 px-2 d-flex justify-content-center align-items-center">
            <h2 className="w-auto text-capitalize home-head">
              <span className="fw-normal">customer </span>happiness
              <FaGripfire className="icon" />
            </h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            <SlickSlider settings={{ slidesToShow: 2 }}>
              {reviewers.map((reviewer, index) => {
                return <ReviewCard key={index} reviewer={reviewer} />;
              })}
            </SlickSlider>
          </div>
        </div>
      </div>
    </>
  );
};

// Individual review card with its own "Read More" state
const ReviewCard = ({ reviewer }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 px-2 d-flex review-card">
      <div className="review-card-insider">
        <div className="d-flex w-100">
          {reviewer.Images.map((img, imgIndex) => (
            <div className={`image-container px-1 ${reviewer.Images.length === 1 ? 'single-image' : ''}`} key={imgIndex}>
              <Image
                src={img.src}
                alt={img.alt}
                title={img.title}
                className="review-image"
                width={1000}
                height={800}
              />
            </div>
          ))}
        </div>
        <div className='d-flex flex-column align-items-center'>
          <div className="w-100 review-logo-container mx-2 d-flex justify-content-center align-items-center mb-2">
            <a
              href="https://www.tripadvisor.in/Attraction_Review-g304555-d24123312-Reviews-Rajasthan_Travel_Helpline-Jaipur_Jaipur_District_Rajasthan.html"
              className="image-link"
              target="_blank"
            >
              <Image width={300} height={50} src={tripAdvisorLogo} alt="Trip Advisor Logo" title='Tripadvisor logo representing trusted travel reviews' />
            </a>
            <a href="" className="image-link" target="_blank">
              <Image width={300} height={50} src={googleStars} alt="Google Review Logo" title='Google Review logo showcasing customer feedback' />
            </a>
          </div>
          <h3 className="text-capitalize review-title mx-2 text-center">
            {reviewer.title}
          </h3>
          <p
            style={{ textAlign: 'justify' }}
            className="review-description mx-2"
          >
            {isReadMore
              ? reviewer.review
              : `${reviewer.review.substring(0, 100)}...`}
            <button className="read-more-btn p-0 bg-transparent" onClick={toggleReadMore}>
              {isReadMore ? '-Less' : 'More'}
            </button>
          </p>
          <p className="text-uppercase fw-bold reviewer px-2 mx-2 text-center">
            {reviewer.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
