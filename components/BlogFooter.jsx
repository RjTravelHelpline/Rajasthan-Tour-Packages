"use client";
import { useState } from 'react';
import BackToTop from './BackToTop';
import Image from 'next/image';
import Link from 'next/link';
import { blogCategories, blogs } from '@/data/Blogs';
import BottomSocials from './BottomSocials';
import ChatBot from './ChatBot';
import { PiMinus, PiPlus } from 'react-icons/pi';
import SearchBar from './SearchBar';

const BlogFooter = () => {

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
            { title: 'december 2024', date: 'October, 2024', path: '/december-2024' },
        ]
    }


    const [activeIndex, setActiveIndex] = useState(null); // Tracks the index of the currently open accordion

    const handleToggle = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle the state based on index
    };


    return (
        <>
            <BackToTop />
            <div className="container-fluid py-5 bg-black text-white px-0 blog-footer">
                <div className="container">
                    <div className="row justify-content-center my-3 px-2">
                        <div className="col-12 col-lg-8 col-sm-10 px-2">
                            <hr />
                        </div>
                        <div className="accordion-toggle col-12 col-lg-8 col-sm-10 px-2 py-3" onClick={() => handleToggle(1)}>
                            <h4 className="text-capitalize py-1 w-100 d-flex justify-content-between align-items-center mb-0 web-title">categories
                                <span className="bg-tertary-down color-tertary p-2 d-flex rounded-4">{activeIndex === 1 ? <PiMinus /> : <PiPlus />}</span>
                            </h4>
                            {activeIndex === 1 && (
                                <ul className={`${activeIndex === 1 ? 'active-toggle' : ''} list-unstyled d-flex justify-content-start align-items-center flex-wrap footer-links mt-3`}>
                                    {blogCategories.map((category, index) => (
                                        <li key={index} className="p-0 text-white blog-footer-link">
                                            <Link href={`/blog/categories${category.path}`} className='text-white p-2 text-uppercase '>
                                                {category.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="col-12 col-lg-8 col-sm-10 px-2">
                            <hr />
                        </div>
                        <div className="accordion-toggle col-12 col-lg-8 col-sm-10 px-2 py-3" onClick={() => handleToggle(2)}>
                            <h4 className="text-capitalize py-1 w-100 d-flex justify-content-between align-items-center mb-0 web-title">archives
                                <span className="bg-tertary-down color-tertary p-2 d-flex rounded-4">{activeIndex === 2 ? <PiMinus /> : <PiPlus />}</span>
                            </h4>
                            {activeIndex === 2 && (
                                <ul className={`${activeIndex === 2 ? 'active-toggle' : ''} list-unstyled d-flex justify-content-start align-items-center flex-wrap footer-links mt-3`}>
                                    {archives[2024].map((category, index) => (
                                        <li key={index} className="p-0 text-white blog-footer-link" >
                                            <Link href={`/blog/archives${category.path}`} className='text-white p-2 text-uppercase '>
                                                {category.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="col-12 col-lg-8 col-sm-10 px-2">
                            <hr />
                        </div>
                    </div>
                    <div className="row footer-end mb-5">
                        <p className="copyright text-center mb-0 py-2 text-capitalize color-gray">
                            © 2003-{mydate} | Rajasthan travel helpline. All Rights
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
