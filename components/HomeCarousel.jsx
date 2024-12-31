"use client"
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

const HomeCarousel = () => {
    return (
        <div className="container-fluid home-banner px-0 bg-tertary-down">
            <Carousel fade pause={false} controls={false} interval={4000}>
                <Carousel.Item>
                    <Image src='/Images/Banners/home-banner-01.png' alt="Rajasthan Shotmen also Camel during sunset in desert" title='India is a country of Temples, Tradition and Scenic beauty' width={1500} height={500} layout='fill' placeholder="empty"
                        priority
                        sizes="(max-width: 768px) 100vw, 1500px"
                        style={{ backgroundColor: "#000" }} />
                    <Carousel.Caption>
                        <h3 className='home-banner-caption web-title'>Majestic Rajasthan</h3>
                        <div className="d-flex justify-content-center align-items-center">
                            <hr style={{ borderColor: 'var(--color-primary)' }} />
                            <span className='color-tertary px-2 mx-2 w-auto d-flex justify-content-center align-items-center'>◆</span>
                            <hr style={{ borderColor: 'var(--color-primary)' }} />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src='/Images/Banners/home-banner-02.png' alt="Agra Taj Mahal" title='Ultrawide shot of Agra Taj Mahal' width={1500} height={500} placeholder="empty"
                        priority
                        sizes="(max-width: 768px) 100vw, 1500px"
                        style={{ backgroundColor: "#000" }} />
                    <Carousel.Caption>
                        <h3 className='home-banner-caption web-title'>Thrilling Adventures</h3>
                        <div className="d-flex justify-content-center align-items-center">
                            <hr style={{ borderColor: 'var(--color-primary)' }} />
                            <span className='color-tertary px-2 mx-2 w-auto d-flex justify-content-center align-items-center'>◆</span>
                            <hr style={{ borderColor: 'var(--color-primary)' }} />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src='/Images/Banners/home-banner-03.png' alt="Jaipur Hawa Mahal" title='Front view of Jaipur Hawa Mahal' width={1500} height={500} placeholder="empty"
                        priority
                        sizes="(max-width: 768px) 100vw, 1500px"
                        style={{ backgroundColor: "#000" }} />
                    <Carousel.Caption>
                        <h3 className='home-banner-caption web-title'>Cultural Splendor</h3>
                        <div className="d-flex justify-content-center align-items-center">
                            <hr style={{ borderColor: 'var(--color-primary)' }} />
                            <span className='color-tertary px-2 mx-2 w-auto d-flex justify-content-center align-items-center'>◆</span>
                            <hr style={{ borderColor: 'var(--color-primary)' }} />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
