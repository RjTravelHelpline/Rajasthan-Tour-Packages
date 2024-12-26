"use client";
import { useState } from 'react';
import BackToTop from './BackToTop';
import Image from 'next/image';
import Link from 'next/link';
import { blogCategories, blogs, getLatestBlogs } from '@/data/Blogs';
import BottomSocials from './BottomSocials';
import ChatBot from './ChatBot';
import { PiMinus, PiPlus } from 'react-icons/pi';
import SearchBar from './SearchBar';
import { BiCalendar, BiCategory, BiChevronRight } from 'react-icons/bi';
import { MdArrowForward, MdArrowForwardIos, MdStars } from 'react-icons/md';
import { FaRankingStar } from 'react-icons/fa6';
import { BsStars } from "react-icons/bs";
import { getLatestItems } from '@/Utils/util';
import BlogBackToTop from './BlogBackToTop';


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
            { title: 'december 2024', date: 'October, 2024', path: '/december-2024' },
            { title: 'November 2024', date: 'November, 2024', path: '/november-2024' },
        ]
    }
    const popularBlogs = getLatestBlogs(blogs, 6)

    const [activeIndex, setActiveIndex] = useState(null); // Tracks the index of the currently open accordion

    const handleToggle = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle the state based on index
    };


    return (
        <>
            <BlogBackToTop />
            <div className="container-fluid py-5 bg-black text-white px-0 blog-footer">
                <div className="container">
                    <div className="row justify-content-start my-3 px-2">
                        {/* <div className="col-12 col-lg-3 col-sm-12 blog-footer-logo px-4 d-flex flex-column align-items-start">
                            <Link href='/'>
                                <Image src='/rajasthan-travel-helpline.png' width={300} height={100} alt='Rajasthan Travel Helpline' />
                            </Link>
                        </div> */}
                        <div className="col-12 col-lg-4 col-sm-12 px-2 py-3 blog-footer-section">
                            <h4 className="text-capitalize pb-3 w-100 d-flex align-items-center mb-0 web-title">
                                <BsStars className='me-2 icon' />
                                popular
                            </h4>
                            <ul className={`d-flex justify-content-start align-items-start flex-column flex-wrap px-0 mt-3`}>
                                {popularBlogs.map((category, index) => (
                                    <li key={index} className="p-2 text-white text-wrap blog-footer-link">
                                        <BiChevronRight className='me-2' />
                                        <Link href={`/blog/${category.slug}`} className='text-white  w-100 text-capitalize'>
                                            {category.title.split(' ').slice(0, 6).join(' ')}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-12 col-lg-4 col-sm-12 px-2 py-3 blog-footer-section">
                            <h4 className="text-capitalize pb-3 w-100 d-flex align-items-center mb-0 web-title">
                                <BiCategory className='me-2 icon' />
                                categories
                            </h4>
                            <ul className={`d-flex justify-content-start align-items-start flex-column flex-wrap px-0 mt-3`}>
                                {blogCategories.map((category, index) => (
                                    <li key={index} className="p-2 text-white blog-footer-link">
                                        <BiChevronRight className='me-2' />
                                        <Link href={`/blog/categories${category.path}`} className='text-white w-100 text-uppercase '>
                                            {category.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3 col-sm-12  px-2 py-3 blog-footer-section">
                            <h4 className="text-capitalize pb-3 w-100 d-flex align-items-center mb-0 web-title">
                                <BiCalendar className='me-2 icon' />
                                archives
                            </h4>
                            <ul className={`d-flex justify-content-start align-items-start flex-column flex-wrap px-0 mt-3`}>
                                {archives[2024].map((category, index) => (
                                    <li key={index} className="p-2 text-white blog-footer-link">
                                        <BiChevronRight className='me-2' />
                                        <Link href={`/blog/archives${category.path}`} className='text-white w-100 text-uppercase '>
                                            {category.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="row footer-end mb-5">
                        <p className="copyright text-center mb-0 py-2 text-capitalize color-gray">
                            © 2003-{mydate} | Rajasthan travel helpline | All Rights
                            Reserved.
                        </p>
                    </div>
                </div>
            </div>
            {/* <BottomSocials /> */}
            {/* <ChatBot /> */}
        </>
    );
};

export default BlogFooter;
