"use client"
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const TourCarousel = ({ images, content }) => {
    return (
        <Carousel fade pause={false} controls={false}>
            {images.map((image, index) => (
                <Carousel.Item key={index} >
                    <div className="container">
                    <Image src={image.src} alt={image.alt} title={image.title} width={3000} height={2000} />
                        <Carousel.Caption>
                            <div className="days-banner-content">
                                <h3 className="text-center text-white opacity-25 px-0 w-auto text-capitalize">
                                    {content[index].duration}
                                </h3>
                                <h1 className="mb-4 text-capitalize w-100 fw-bold text-center text-white web-title">
                                    {content[index].title} <hr className='w-50 m-auto my-2' /> <span className='text-white opacity-50 web-title d-block text-capitalize fw-normal'>{content[index].subhead}</span>
                                </h1>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default TourCarousel;
