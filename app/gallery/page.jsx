"use client"
import Bread from '@/components/Bread'
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
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "Gallery", link: null, active: true },
    ];
    return (
        <>
            <div className="container-fluid bg-black py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 px-0">
                            <Bread items={breadcrumbItems} style='px-0' />
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-12">
                            <h1 className='text-white text-capitalize web-title fw-bold'>gallery</h1>
                            {/* <hr /> */}
                            <h2 className='fw-light text-white opacity-75 web-title'>Captured Moments, Cherished Memories</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-4" style={{ background: '#161616', borderTop: '1px solid var(--color-gray)' }}>
                <div className="container">
                    <div className="row d-flex flex-wrap justify-content-start align-items-center">
                        {sorted.map((item, index) => (
                            <div key={index} className='col-lg-3 col-sm-6 px-1 mb-2' onClick={() => handleImageClick(item)}>
                                <div className="w-100 gallery-image-container bg-black px-0 overflow-hidden" style={{ width: '400px', height: '300px', borderRadius: "24px" }}>
                                    <Image width={800} height={400} alt={item.alt} title={item.title} src={item.src} style={{ objectFit: "cover", height: '100%', width: '100%' }} />
                                </div>
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

