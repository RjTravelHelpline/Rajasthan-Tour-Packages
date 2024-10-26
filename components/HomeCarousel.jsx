"use client"
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
const HomeBanner01 = '/Images/Banners/rajasthan-banner01.webp';
const HomeBanner02 = '/Images/Banners/agra-banner.webp';
const HomeBanner03 = '/Images/Banners/jaipur-banner.webp';
const HomeCarousel = () => {
    const headings = [
        "Regal Rajasthan Heritage",
        "Adventurous Escapades Await",
        "Rajasthani Cultural Immersion",
    ];

    const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [headings.length]);

    return (
        <div className="container-fluid home-banner position-relative px-0 bg-tertary-down">
            <Carousel pause={false} controls={false} interval={4000}>
                <Carousel.Item style={{ minHeight: '500px' }}>
                    <Image src={HomeBanner01} alt="Home Banner" width={1500} height={1000} priority={true} />
                    <Carousel.Caption>
                        <h2>Regal Rajasthan Heritage</h2>
                        <svg width="100" height="30" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 10C2 60, -10 -10, 100 20" stroke="#ff5555" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ minHeight: '500px' }}>
                    <Image src={HomeBanner02} alt="Home Banner" width={1500} height={1000} priority={true} />
                    <Carousel.Caption>
                        <h2>Adventurous Escapades Await</h2>
                        <svg width="100" height="30" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 10C2 60, -10 -10, 100 20" stroke="#ff5555" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ minHeight: '500px' }}>
                    <Image src={HomeBanner03} alt="Home Banner" width={1500} height={1000} priority={true} />
                    <Carousel.Caption>
                        <h2>Rajasthani Cultural Immersion</h2>
                        <svg width="100" height="30" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 10C2 60, -10 -10, 100 20" stroke="#ff5555" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
