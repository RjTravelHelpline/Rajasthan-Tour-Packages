"use client"
import ImageModal from '@/components/ImagesModel'
import { getSortedGalleryImages } from '@/data/imageData'
import Image from 'next/image'
import { useState } from 'react'

const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const sorted = getSortedGalleryImages()

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
            <div className="container-fluid bg-black py-5 ">
                <div className="container py-4 ">
                    <div className="row">
                        <p className='text-center text-uppercase color-tertary mb-0'>rajasthan tour packages</p>
                        <h1 className='text-center text-white text-capitalize'>gallery</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-4 px-0">
                <div className="container px-0 d-flex justify-content-center align-items-center ">
                    <div className="row d-flex flex-wrap w-100 justify-content-center align-items-center gap-2 overflow-hidden px-0">
                        {sorted.map((item, index) => (
                            <div key={index} className="gallery-image-container bg-black px-0 overflow-hidden" style={{ width: '400px', height: '300px', borderRadius: "24px" }} onClick={() => handleImageClick(item)}>
                                <Image width={800} height={400} alt={item.alt} title={item.title} src={item.src} style={{ objectFit: "cover", height: '100%', width: '100%' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ImageModal
                isOpen={isModalOpen}
                onClose={closeModal}
                imageSrc={selectedImage?.src}
                imageAlt={selectedImage?.alt}
            />
        </>
    )
}
export default Gallery

