"use client";
import { useState } from 'react';
import { FaGripfire } from 'react-icons/fa';
import SlickSlider from './SlickSlider';
import { BsXLg } from 'react-icons/bs';
import { allGalleryImages, getSortedGalleryImages } from '@/data/imageData';
import { Card } from 'react-bootstrap';
import Image from 'next/image';

// Utility function to chunk images into groups of 4
const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);


    // Get sorted gallery images and limit to the latest 8
    const sortedGalleryImages = getSortedGalleryImages(allGalleryImages);
    const latestImages = Object.values(sortedGalleryImages).slice(0, 8); // Get only the latest 8 images
    const chunkedImages = chunkArray(latestImages, 4); // Chunk into groups of 4

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <div className="container- mb-2fluid section-03 py-5">
                <div className="container mb-2gallery">
                    <div className="row py-4 px-2 d-flex justify-content-center align-items-center">
                        <h2 className="w-auto text-capitalize home-head">
                            <span className="fw-normal">recent </span> memories
                            <FaGripfire className="icon" />
                        </h2>
                    </div>
                    <div className="row py-4 d-flex align-items-stretch">
                        <SlickSlider settings={{ slidesToShow: 2, autoplay: false }}>
                            {chunkedImages.map((imageGroup, index) => (
                                <div key={index} className="col-12 px-2 mb-3">
                                    <div className="row image-grid px-1">
                                        {/* First Image in col-4 */}
                                        <div className="col-4 px-1 mb-2">
                                            <div className="image-item" onClick={() => openModal(imageGroup[0])}>
                                                <Card>

                                                    <Card.Img
                                                        src={imageGroup[0]?.src}
                                                        alt={imageGroup[0]?.alt}
                                                        title={imageGroup[0]?.title}
                                                        className="gallery-image"
                                                    />
                                                </Card>
                                            </div>
                                        </div>
                                        {/* Second Image in col-8 */}
                                        <div className="col-8 px-1 mb-2">
                                            <div className="image-item" onClick={() => openModal(imageGroup[1])}>
                                                <Card>

                                                    <Card.Img
                                                        src={imageGroup[1]?.src}
                                                        alt={imageGroup[1]?.alt}
                                                        title={imageGroup[1]?.title}
                                                        className="gallery-image"
                                                    />
                                                </Card>
                                            </div>
                                        </div>
                                        {/* Third Image in col-8 */}
                                        <div className="col-8 px-1 mb-2">
                                            <div className="image-item" onClick={() => openModal(imageGroup[2])}>
                                                <Card>

                                                    <Card.Img
                                                        src={imageGroup[2]?.src}
                                                        alt={imageGroup[2]?.alt}
                                                        title={imageGroup[2]?.title}
                                                        className="gallery-image"
                                                    />
                                                </Card>
                                            </div>
                                        </div>
                                        {/* Fourth Image in col-4 */}
                                        <div className="col-4 px-1 mb-2">
                                            <div className="image-item" onClick={() => openModal(imageGroup[3])}>
                                                <Card>

                                                    <Card.Img
                                                        src={imageGroup[3]?.src}
                                                        alt={imageGroup[3]?.alt}
                                                        title={imageGroup[3]?.title}
                                                        className="gallery-image"
                                                    />
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </SlickSlider>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <Card>
                            <Card.Img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                title={selectedImage.title}
                                className="modal-image"
                            />
                        </Card>

                    </div>
                    <button className="close-button fw-bold" onClick={closeModal}>
                        <BsXLg className='icon fw-bold' />
                    </button>
                </div>
            )}
        </>
    );
};

export default Gallery;