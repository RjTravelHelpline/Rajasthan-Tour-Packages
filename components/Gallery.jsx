"use client"
import { useState } from 'react';
import SlickSlider from './SlickSlider';
import { getSortedGalleryImages } from '@/data/imageData';
import Image from 'next/image';
import ImageModal from './ImagesModel';
import { ExploreAll } from './ExploreAll';
import { Col, Container, Row } from 'react-bootstrap';

const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const latestImages = getSortedGalleryImages();
    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <section className="container-fluid section-01 py-5 position-relative">
                <Container className="gallery d-flex  justify-content-center align-items-center flex-column mb-5">
                    <Row className="py-2 px-2 d-flex justify-content-center align-items-center w-100">
                        <div className="d-flex-justify-content-center align-items-center">
                            <h2 className="text-center text-capitalize web-title home-head fw-normal">
                                recent <span className="fw-bold">memories </span>
                            </h2>
                            <p className="text-center text-capitalize">
                                discover the recent lens of our travelers&apos; unforgettable journeys.
                            </p>
                        </div>
                    </Row>
                    <Row className="py-3 d-flex gallery-row justify-content-center align-items-center px-0 mb-4">
                        <SlickSlider settings={{ slidesToShow: 4, autoplay: false }}>
                            {latestImages.slice(0, 8).map((image, index) => (
                                <Col
                                    key={index}
                                    className="col-12 px-2 mb-4 border-2 image-item border-black d-flex justify-content-center align-items-center"
                                    onClick={() => handleImageClick(image)}
                                >
                                    <Image alt={image.alt} title={image.title} width={800} height={800} src={image.src} className="w-100" />
                                </Col>
                            ))}
                        </SlickSlider>
                    </Row>
                    <ExploreAll text="explore full gallery" href="/gallery" />
                </Container>
            </section>

            <ImageModal
                isOpen={isModalOpen}
                onClose={closeModal}
                imageSrc={selectedImage?.src}
                imageAlt={selectedImage?.alt}
            />
        </>
    );
};

export default Gallery;
