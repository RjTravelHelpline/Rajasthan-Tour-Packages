"use client"
import { useState } from 'react';
import SlickSlider from './SlickSlider';
import { getSortedGalleryImages } from '@/data/imageData';
import Image from 'next/image';
import ImageModal from './ImagesModel';
import { ExploreAll } from './ExploreAll';

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
            <div className="container-fluid section-01 py-2 position-relative">
                <div className="container gallery d-flex  justify-content-center align-items-center flex-column mb-5">
                    <div className="row py-2 px-2 d-flex justify-content-center align-items-center w-100">
                        <div className="d-flex-justify-content-center align-items-center">
                            <hr style={{ borderColor: 'var(--color-tertary)' }} />
                            <h2 className="text-center text-capitalize home-head fw-normal">
                                recent <span className="fw-bold">memories </span>
                            </h2>
                            <hr style={{ borderColor: 'var(--color-tertary)' }} />
                        </div>
                    </div>
                    <div className="row py-3 d-flex gallery-row justify-content-center align-items-center px-0 mb-4">
                        <SlickSlider settings={{ slidesToShow: 4, autoplay: false }}>
                            {latestImages.slice(0, 8).map((image, index) => (
                                <div
                                    key={index}
                                    className="col-12 px-2 mb-4 border-2 image-item border-black d-flex justify-content-center align-items-center"
                                    onClick={() => handleImageClick(image)}
                                >
                                    <Image alt={image.alt} width={800} height={800} src={image.src} className="w-100" />
                                </div>
                            ))}
                        </SlickSlider>
                    </div>
                    <ExploreAll text="explore full gallery" href="/gallery" />
                </div>
            </div>

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
