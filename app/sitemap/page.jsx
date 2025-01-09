'use client'
import Bread from '@/components/Bread'
import { _02_days_tours, _03_days_tours, _04_days_tours, _05_days_tours, _06_days_tours, _07_days_tours, _08_days_tours, _09_days_tours, _10_days_tours, _11_15_days_tours, blog_archives, blog_categories, company_insights, exclusive_tours, rajasthan_cab_rentals, rajasthan_destinations, range_days, tour_by_cities, tour_by_days, tour_by_themes, useful_tours } from '@/data/Globals'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const Page = () => {
    const [activeSection, setActiveSection] = useState(null);

    // Function to toggle visibility of sections
    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "sitemap", link: null, active: true },
    ];
    return (
        <>
            <div className="container-fluid bg-black text-white">
                <div className="container py-5">
                    <div className="row px-0">
                        <div className="col-12 px-0">
                            <Bread items={breadcrumbItems} style='px-0' />
                        </div>
                        <div className="col-12 py-5">
                            <h1 className='web-title fw-bold text-capitalize'>Site<span className='fw-normal'>map</span></h1>
                            <p className='text-white opacity-75 text-capitalize web-title'>Simplify your browsing experience from here</p>
                            <hr className='opacity-25' />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'> Flexible Tours</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {range_days.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'> Day-Specific Tours</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {tour_by_days.slice(0, activeSection === 'daySpecific' ? tour_by_days.length : 6).map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                                <button
                                    className='bg-gray web-title opacity-25 rounded-0 sitemap-btn d-flex justify-content-center align-items-center gap-1 p-3'
                                    onClick={() => toggleSection('daySpecific')}>
                                    {activeSection === 'daySpecific' ? 'Show Less' : 'Show More'}
                                    {activeSection === 'daySpecific' ? <BiChevronUp /> : <BiChevronDown />}
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>02 days tour packages</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {_02_days_tours.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>03 days tour packages</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {_03_days_tours.slice(0, activeSection === '03_days_tours' ? _03_days_tours.length : 6).map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                                <button
                                    className='bg-gray web-title opacity-25 rounded-0 sitemap-btn d-flex justify-content-center align-items-center gap-1 p-3'
                                    onClick={() => toggleSection('03_days_tours')}>
                                    {activeSection === '03_days_tours' ? 'Show Less' : 'Show More'}
                                    {activeSection === '03_days_tours' ? <BiChevronUp /> : <BiChevronDown />}
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>04 days tour packages</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {_04_days_tours.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>05 days tour packages</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {_05_days_tours.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>06 days tour packages</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {_06_days_tours.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>07 days tour packages</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {_07_days_tours.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>08 days tour packages</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {_08_days_tours.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>09 days tour packages</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {_09_days_tours.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>10 days tour packages</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {_10_days_tours.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>11-15 days tour packages</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {_11_15_days_tours.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>rajasthan cab rentals</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {rajasthan_cab_rentals.slice(0, activeSection === 'cab_rentals' ? rajasthan_cab_rentals.length : 6).map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                                <button
                                    className='bg-gray web-title opacity-25 rounded-0 sitemap-btn d-flex justify-content-center align-items-center gap-1 p-3'
                                    onClick={() => toggleSection('cab_rentals')}>
                                    {activeSection === 'cab_rentals' ? 'Show Less' : 'Show More'}
                                    {activeSection === 'cab_rentals' ? <BiChevronUp /> : <BiChevronDown />}
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>rajasthan destinations</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {rajasthan_destinations.slice(0, activeSection === 'rajasthan_destinations' ? rajasthan_destinations.length : 6).map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                                <button
                                    className='bg-gray web-title opacity-25 rounded-0 sitemap-btn d-flex justify-content-center align-items-center gap-1 p-3'
                                    onClick={() => toggleSection('rajasthan_destinations')}>
                                    {activeSection === 'rajasthan_destinations' ? 'Show Less' : 'Show More'}
                                    {activeSection === 'rajasthan_destinations' ? <BiChevronUp /> : <BiChevronDown />}
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>tour by cities</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {tour_by_cities.slice(0, activeSection === 'tour_by_cities' ? tour_by_cities.length : 6).map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                                <button
                                    className='bg-gray web-title opacity-25 rounded-0 sitemap-btn d-flex justify-content-center align-items-center gap-1 p-3'
                                    onClick={() => toggleSection('tour_by_cities')}>
                                    {activeSection === 'tour_by_cities' ? 'Show Less' : 'Show More'}
                                    {activeSection === 'tour_by_cities' ? <BiChevronUp /> : <BiChevronDown />}
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>tour by themes</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {tour_by_themes.slice(0, activeSection === 'tour_by_themes' ? tour_by_themes.length : 6).map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                                <button
                                    className='bg-gray web-title opacity-25 rounded-0 sitemap-btn d-flex justify-content-center align-items-center gap-1 p-3'
                                    onClick={() => toggleSection('tour_by_themes')}>
                                    {activeSection === 'tour_by_themes' ? 'Show Less' : 'Show More'}
                                    {activeSection === 'tour_by_themes' ? <BiChevronUp /> : <BiChevronDown />}
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>exclusive tours</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {exclusive_tours.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'> useful directs</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {useful_tours.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>company insights</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {company_insights.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>blog categories</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {blog_categories.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 px-2">
                            <h4 className='web-title fw-light text-capitalize mb-3'>blog archives</h4>
                            <div className='d-flex flex-column gap-1 rounded-3 overflow-hidden'>
                                {blog_archives.map((item, index) => {
                                    return (
                                        <Link key={index} href={`${item.path}`} className='sitemap-link text-white bg-gray p-3 opacity-50 web-title'>{item.text}</Link>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Page