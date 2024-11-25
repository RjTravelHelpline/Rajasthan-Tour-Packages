"use client"
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const TourCarousel = ({ images, content }) => {
    return (
        <Carousel fade pause={false} controls={false}>
            {images.map((image, index) => (
                <Carousel.Item key={index} >
                    <Image src={image.src} alt={image.alt} title={image.title} width={3000} height={2000} />
                    <Carousel.Caption>
                        <div className="days-banner-content">
                            <h3 className="text-center color-tertary px-0 w-auto text-uppercase">
                                {content[index].duration}
                            </h3>
                            <h1 className="mb-4 text-capitalize w-100 fw-bold text-center text-white">
                                {content[index].title} <hr style={{ borderColor: 'white' }} /> <span className='color-tertary d-block text-capitalize fw-normal'>{content[index].subhead}</span>
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default TourCarousel;
