'use client'
import Image from "next/image";
import Comment from '@/components/CommentSection';
import SearchBar from '@/components/SearchBar';
import { blogs } from '@/data/Blogs';
import { BiChevronRight } from "react-icons/bi";
import Link from 'next/link';
import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaShareAlt,
    FaTwitter,
    FaUser,
    FaWhatsapp,
} from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';
import { useState } from "react";
import { PiMinus, PiPlus } from "react-icons/pi";
import { formatDate } from "@/Utils/util";
import { blogArchives, blogCategories, dateIso, getBlogsByCategory } from "@/Utils/blog.util";
import Script from "next/script";



const BlogPost = ({ params }) => {

    const blog = blogs.find((b) => b.slug === params.slug);
    const [activeIndex, setActiveIndex] = useState(null);
    const dateIsoFormated = dateIso(blog?.date);

    const handleShow = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const filteredBlogs = getBlogsByCategory(blogs, blog.category)

    const stringDate = formatDate(blog.date)
    if (!blog) {
        return <p>Blog not found</p>;
    }
    const blogSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.rajasthantourpackages.in/blog/${blog.slug}`,
        },
        headline: blog.metaTitle,
        description: blog.metaDescription,
        image: blog.image,
        author: {
            '@type': 'Organization',
            name: 'Rajasthan Tour Packages',
            url: 'https://www.rajasthantourpackages.in/',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Rajasthan Tour Packages',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.rajasthantourpackages.in/_next/image?url=%2Frajasthan-travel-helpline.png&w=640&q=75',
            },
        },
        datePublished: dateIsoFormated,
        dateModified: dateIsoFormated,
    };
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: blog.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };



    return (
        <>
            <div className="container-fluid py-4 blog-slug mt-5 pt-5 px-0 text-black">
                <div className="container px-0 d-flex justify-content-center align-items-center w-100 ">
                    <div className="row d-flex justify-content-center align-items-start px-0 w-100">
                        <div className="col-lg-8 col-md-12 col-sm-12 px-sm-0 px-md-0 px-lg-2">

                            {/* blog */}
                            <div className="insider px-3">
                                <div className="slug-image-container mb-2">
                                    <Image
                                        src={blog.image}
                                        alt={blog.alt}
                                        className="w-100 h-100 rounded-4"
                                        title={blog.title}
                                        width={1500}
                                        height={600}
                                    />
                                </div>
                                <hr />
                                <div className="d-flex justify-content-start align-items-center gap-2 mb-2 blog-utils">
                                    <p className="w-auto blog-author mb-0 fw-bold d-flex align-items-center justify-content-center"><span className='color-tertary me-2 d-flex p-2 bg-tertary-down rounded-5 text-capitalize'><FaUser /></span>{blog.author}</p>
                                    <p className="text-black w-auto px-0 blog-dot mb-0">▪</p>
                                    <p className="w-auto blog-date mb-0 fw-bold d-flex align-items-center justify-content-center"><span className='color-tertary me-2 d-flex p-2 bg-tertary-down rounded-5'><FaCalendarDays /></span>{stringDate}</p>
                                </div>
                                <h1 className="blog-head">{blog.heading}</h1>
                                <hr style={{ borderColor: 'var(--color-black)' }} />
                                <div className='blog-content'>
                                    {blog.more}
                                </div>
                                <hr />
                                <div className="blog-conclusion">
                                    <h3 className="web-title">Conclusion</h3>
                                    <p>
                                        {blog.conclusion}
                                    </p>
                                </div>
                                {blog.faqs && blog.faqs.length > 0 && (
                                    <div className="blog-faqs mt-4">
                                        <h3 className="web-title">FAQs</h3>
                                        <ol>
                                            {blog.faqs.map((faq, index) => (
                                                <li key={index} className="faq-item fw-bold mb-3 web-title">
                                                    <p className="slug-question mb-0 fw-bold">{faq.question}</p>
                                                    <p className="slug-answer fw-normal">{faq.answer}</p>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                            </div>

                            {/* comment */}
                            <div className="insider px-3 mt-3">
                                <Comment selectedBlog={blog.heading} />
                            </div>

                            {/* blog share */}
                            <div className="insider px-3 my-3 text-black">
                                <div className="bg-tertary-down mt-3 p-2 rounded-4 d-flex flex-column justify-content-center align-items-center">
                                    <span className="color-tertary bg-tertary-down rounded-5 p-2 my-2 d-flex justify-content-center align-items-center">
                                        <FaShareAlt />
                                    </span>
                                    <h4 className='text-center text-capitalize fw-bold web-title'>share this <span className="fw-bold"> blog</span></h4>
                                    <p className="text-center text-black">
                                        Loved This Post? Share It With Others!
                                    </p>
                                </div>
                                <div className="col">
                                    <div className="rounded-4 py-4 social-icons d-flex justify-content-center gap-3 slug-share">
                                        {/* Facebook */}
                                        <a
                                            href={`https://www.facebook.com/sharer/sharer.php?u=https://rajasthantourpackages.in/blog/${blog.slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-5 text-black p-3 d-flex bg-tertary-down"
                                        >
                                            <FaFacebook />
                                        </a>

                                        {/* Instagram */}
                                        <a
                                            href={`https://www.instagram.com/?url=https://rajasthantourpackages.in/blog/${blog.slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-5 text-black p-3 d-flex bg-tertary-down"
                                        >
                                            <FaInstagram />
                                        </a>

                                        {/* Twitter */}
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=https://rajasthantourpackages.in/blog/${blog.slug}&text=Check+this+out!`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-5 text-black p-3 d-flex bg-tertary-down"
                                        >
                                            <FaTwitter />
                                        </a>

                                        {/* WhatsApp */}
                                        <a
                                            href={`https://api.whatsapp.com/send?text=Check+out+this+blog!+https://rajasthantourpackages.in/blog/${blog.slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-5 text-black p-3 d-flex bg-tertary-down"
                                        >
                                            <FaWhatsapp />
                                        </a>

                                        {/* Mail */}
                                        <a
                                            href={`mailto:?subject=Check+out+this+blog&body=https://rajasthantourpackages.in/blog/${blog.slug}`}
                                            className="rounded-5 text-black p-3 d-flex bg-tertary-down"
                                        >
                                            <FaEnvelope />
                                        </a>
                                    </div>
                                </div>

                                {/* contact redirections */}
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 slug-contacts">
                                    <Link href="https://rajasthantourpackages.in/contact-us" className=" p-3 flex-grow-1 rounded-3 border d-flex justify-content-between text-nowrap align-items-center">
                                        <span className="color-black">contact us</span>
                                        <BiChevronRight className="color-tertary fs-6" /></Link>
                                    <Link href="/" className="p-3 flex-grow-1 rounded-3 border d-flex justify-content-between text-nowrap align-items-center">
                                        <span className="color-black">Rajasthan Tour Packages </span>
                                        <BiChevronRight className="color-tertary fs-6" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* sidebar */}
                        <div className="col-lg-4 col-ms-12 col-sm-12 side-nav px-sm-0 px-md-0 px-lg-2">
                            {/* search */}
                            <div className="sidebar-menu w-100 z-9999 mb-3 search-sidebar flex-column">
                                <p className='mb-0 text-uppercase'>
                                    <span className='blog-subhead-gradient d-inline'>{blog.category}</span>
                                </p>
                                <h4 className="text-capitalize py-1 web-title">search <span className="fw-normal d-inline">here</span></h4>
                                <SearchBar blogs={filteredBlogs} styles="rounded-4 w-100 p-3" placeholder="search here" />
                            </div>

                            {/* popular posts */}
                            <div className="sidebar-menu sidebar-menu-toggle mb-3 w-100 z-9999 flex-column" onClick={() => handleShow(2)}>
                                <h4 className="text-capitalize py-1 w-100 d-flex justify-content-between align-items-center mb-0 web-title">popular insights
                                    <span className="bg-tertary-down color-tertary p-2 d-flex rounded-4">{activeIndex === 2 ? <PiMinus /> : <PiPlus />}</span>
                                </h4>
                                {activeIndex === 2 && (
                                    <ul className={`${activeIndex === 2 ? 'active-toggle' : ''} list-group list-group-flush w-100 mt-3`}>
                                        {filteredBlogs.slice(0, 3).map((item, index) => (
                                            <li key={index} className="list-group-item hovered-link">
                                                <Link className='w-100 px-0 d-flex border-0 text-black' href={`${item.slug}`}>{item.heading}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* categories */}
                            <div className="sidebar-menu sidebar-menu-toggle mb-3 w-100 z-9999 flex-column text-black blog-category-sidebar" onClick={() => handleShow(3)}>
                                <h4 className="text-capitalize py-1 w-100 d-flex justify-content-between align-items-center mb-0 web-title">categories
                                    <span className="bg-tertary-down color-tertary p-2 d-flex rounded-4">{activeIndex === 3 ? <PiMinus /> : <PiPlus />}</span>
                                </h4>
                                {activeIndex === 3 && (
                                    <ul className={`${activeIndex === 3 ? 'active-toggle' : ''} p-0 w-100 d-flex justify-content-start flex-column align-items-start gap-2 mt-3`}>
                                        {blogCategories.map((item, index) => (
                                            <>
                                                <li key={index} className="list-group-item w-100">
                                                    <Link className='w-100 d-flex border-0 text-black' href={`/blog/categories${item.path}`}>{item.text}</Link>
                                                </li>
                                            </>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* categories */}
                            <div className="sidebar-menu sidebar-menu-toggle mb-3 w-100 z-9999 flex-column text-black blog-category-sidebar" onClick={() => handleShow(4)}>
                                <h4 className="text-capitalize py-1 w-100 d-flex justify-content-between align-items-center mb-0 web-title">archives
                                    <span className="bg-tertary-down color-tertary p-2 d-flex rounded-4">{activeIndex === 4 ? <PiMinus /> : <PiPlus />}</span>
                                </h4>
                                {activeIndex === 4 && (
                                    <ul className={`${activeIndex === 4 ? 'active-toggle' : ''} p-0 w-100 d-flex justify-content-start flex-column align-items-start gap-2 mt-3`}>
                                        {blogArchives.map((item, index) => (
                                            <>
                                                <li key={index} className="list-group-item w-100">
                                                    <Link className='w-100 d-flex border-0 text-black' href={`/blog/archives${item.path}`}>{item.text}</Link>
                                                </li>
                                            </>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            {/* comments */}
                            <div className="sidebar-menu sidebar-menu-toggle mb-3 w-100 z-9999 flex-column" onClick={() => handleShow(5)}>
                                <h4 className="text-capitalize py-1 w-100 d-flex justify-content-between align-items-center mb-0 web-title">comments
                                    <span className="bg-tertary-down color-tertary p-2 d-flex rounded-4">{activeIndex === 5 ? <PiMinus /> : <PiPlus />}</span>
                                </h4>
                                {activeIndex === 5 && (
                                    <ul className={`${activeIndex === 5 ? 'active-toggle' : ''} p-0 w-100 d-flex justify-content-start flex-column align-items-start gap-2 mt-3`}>
                                        <p className='mb-0 text-capitalize'>no comments to show</p>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* schema scripts */}
            <Script
                id="blog-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(blogSchema),
                }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
        </>
    );
};

export default BlogPost;