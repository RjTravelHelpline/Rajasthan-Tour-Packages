"use client";
import { useState } from 'react';
import BackToTop from './BackToTop';
import Image from 'next/image';
import Link from 'next/link';
import { blogCategories, blogs } from '@/data/Blogs';
// import SearchBar from './SearchBar';
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

    const archives = {
        '2024': [
            { title: 'November 2024', date: 'November, 2024', path: '/november-2024' },
            { title: 'October 2024', date: 'October, 2024', path: '/october-2024' },
        ]
    }

    return (
        <>
            <BackToTop />
            <div className="container-fluid py-3 bg-black text-white px-0 blog-footer">
                <div className="container">
                    <div className="row justify-content-center my-3">
                        <div className="col-12 py-3">
                            <h3 className='text-capitalize text-center'>Categories</h3>
                            <ul className="list-unstyled d-flex justify-content-center align-items-center flex-wrap footer-links">
                                {blogCategories.map((category, index) => (
                                    <li key={index} className="p-0 text-white blog-footer-link">
                                        <Link href={`/blog/categories/${category.path}`} className='text-white p-2 text-uppercase '>
                                            {category.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-12 col-lg-8 col-sm-10">
                            <hr />
                        </div>
                        <div className="col-12 py-3">
                            <h3 className='text-capitalize text-center'>Archives</h3>
                            <ul className="list-unstyled  d-flex justify-content-center align-items-center flex-wrap footer-links">
                                {archives[2024].map((category, index) => (
                                    <li key={index} className="p-0 text-white blog-footer-link" >
                                        <Link href={`/blog/archives/${category.path}`} className='text-white p-2 text-uppercase '>
                                            {category.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="row footer-end mb-5">
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
