"use client";
import { useState } from 'react';
import BackToTop from './BackToTop';
import Image from 'next/image';
import Link from 'next/link';
import { blogCategories } from '@/data/Blogs';

const BlogFooter = () => {
    const footerLogo = '/rajasthan-travel-helpline.png';

    const date = new Date();
    const mydate = date.getFullYear();
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    // contact
    const [show, setShow] = useState(false); // Modal visibility state
    const [selectedPackage, setSelectedPackage] = useState(''); // To store selected package title

    const handleClose = () => setShow(false);
    const handleShow = (title) => {
        setSelectedPackage(title);
        setShow(true);
    };

    return (
        <>
            <BackToTop />
            <div className="container-fluid py-5 bg-black text-white px-0">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 d-flex flex-column footer-links justify-content-center align-items-center">
                            <div className="footer-logo w-100 d-flex justify-content-center aiign-items-center">
                                <a
                                    href="https://rajasthantourpackages.in/"
                                    target="_blank"
                                    className="d-flex justify-content-center aiign-items-center footer-link"
                                    aria-label='rajasthan travel helpline'
                                >
                                    <Image width={800} height={200} src={footerLogo} alt="rtp-logo" layout='responsive' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-end">
                        <p className="copyright text-center mb-0 py-2 text-capitalize">
                            Copyright © {mydate} | Rajasthan travel helpline. All Rights
                            Reserved.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BlogFooter;
