"use client"
import Image from 'next/image';
import { AiOutlineClose } from "react-icons/ai";

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
    if (!isOpen) return null;

    return (
        <section className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}> <AiOutlineClose /> </button>
                <Image alt={imageAlt} width={1200} height={1500} src={imageSrc} className="modal-image" />
            </div>
        </section>
    );
};

export default ImageModal;
