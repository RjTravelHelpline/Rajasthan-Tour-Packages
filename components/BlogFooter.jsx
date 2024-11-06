"use client";
import { useState } from 'react';
import BackToTop from './BackToTop';
import Image from 'next/image';
import Link from 'next/link';
import { blogCategories, blogs } from '@/data/Blogs';
import SearchBar from './SearchBar';
import BottomSocials from './BottomSocials';
import ChatBot from './ChatBot';

const BlogFooter = () => {
    const footerLogo = '/rajasthan-travel-helpline.png';

    const date = new Date();
    const mydate = date.getFullYear();
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    // contact
    const [show, setShow] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState('');

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
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 col-sm-12 col-md-12">
                            <SearchBar blogs={blogs} styles="rounded-4"/>
                        </div>
                    </div>
                    <div className="row justify-content-center my-5">
                        <div className="col-12 py-3">
                            <h3 className='text-capitalize text-center'>Categories</h3>
                            <ul className="list-unstyled d-flex justify-content-center align-items-center flex-wrap">
                                {blogCategories.map((category, index) => (
                                    <li key={index} className="p-0 text-white">
                                        <Link href={`/blog${category.path}`} className='text-white p-2 text-uppercase blog-footer-links'>
                                            {category.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-12 py-3">
                            <h3 className='text-capitalize text-center'>Archives</h3>
                            <ul className="list-unstyled footer-links d-flex justify-content-center align-items-center flex-wrap">
                                {blogCategories.map((category, index) => (
                                    <li key={index} className="p-0 text-white">
                                        <Link href={`/blog${category.path}`} className='text-white p-2 text-uppercase blog-footer-links'>
                                            {category.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="row footer-end">
                        <hr />
                        <p className="copyright text-center mb-0 py-2 text-lowercase">
                            Copyright © {mydate} | Rajasthan travel helpline. All Rights
                            Reserved.
                        </p>
                    </div>
                </div>
            </div>
            <BottomSocials />
            <ChatBot />
        </>
    );
};

export default BlogFooter;
