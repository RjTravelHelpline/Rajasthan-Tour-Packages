"use client";
import { useState } from 'react';
import BackToTop from './BackToTop';

const BlogFooter = () => {

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
            <div className="container-fluid py-2 bg-black text-white px-0">
                <div className="container">
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
