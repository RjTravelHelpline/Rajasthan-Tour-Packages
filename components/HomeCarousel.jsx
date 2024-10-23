"use client"; // Ensures this component runs on the client-side only

import { Carousel } from "react-bootstrap";
const HomeBanner01 = '/Images/Banners/rajasthan-banner01.webp';
const HomeBanner03 = '/Images/Banners/rajasthan-banner03.webp';
const HomeBanner04 = '/Images/Banners/rajasthan-banner04.webp';

export default function HomeCarousel() {
    return (
        <div className="container-fluid home-banner position-relative px-0 bg-tertary-down">
            <Carousel fade pause={false} controls={false}>
                <Carousel.Item>
                    <img src={HomeBanner01} alt="Home Banner" />
                    <Carousel.Caption>
                        <h2>Discover Rajasthan<span>.</span></h2>
                        <svg width="100" height="30" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 10C2 60, -10 -10, 100 20" stroke="#ff5555" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={HomeBanner04} alt="Home Banner" />
                    <Carousel.Caption>
                        <h2>Unforgettable Journeys<span>.</span></h2>
                        <svg width="100" height="30" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 10C2 60, -10 -10, 100 20" stroke="#ff5555" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={HomeBanner03} alt="Home Banner" />
                    <Carousel.Caption>
                        <h2>Book with Confidence<span>.</span></h2>
                        <svg width="100" height="30" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 10C2 60, -10 -10, 100 20" stroke="#ff5555" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
