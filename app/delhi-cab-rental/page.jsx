'use client'
import Bread from "@/components/Bread";
import HeroBanner from "@/components/HeroBanner";
import { FaStarOfLife } from "react-icons/fa";
import { faq } from "./data";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";

const Page = () => {
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "rajasthan cab rental", link: "/rajasthan-cab-rental", active: false },
        { label: "delhi cab rental", link: null, active: true },
    ];
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active state
    };
    return (
        <>
            <HeroBanner
                slides={[
                    { heading: "delhi Cab Rental", subheading: "Easy and Safe Trip in the Heart of India" }
                ]}
                backgroundImage="/Images/Banners/jaipur-banner02.webp" />
            <Bread items={breadcrumbItems} />
            {/* bread crumb */}
            <div className="container-fluid px-0 pt-4 ">
                <div className="container days-container overview">
                    <div className="row d-flex justify-content-center align-items-center days-overview px-2 days-highlights">
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-bold web-title"
                            > overview</h2>
                            <p
                                className="home-para px-3"
                            >
                                The large urban centre of India, Delhi, is blessed with history and modern traces of culture. To enjoy the range of activities that Maldives offers it is necessary to arrange a proper cab service in advance. Delhi Cab Rental is one of the best transport services, and it is a convenient mode of transport to travel in and around Delhi City Tour and neighbouring areas.
                            </p>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            > Why Choose <strong>delhi Cab Rental</strong>?</h2>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Wide Range of Vehicles</strong>
                                        Whether you are traveling in a sedan or an SUV, you will surely get the right vehicle for your trip from us.

                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Experienced Drivers</strong>
                                        Our local drivers will always know Delhi&apos;s routes and places of interest to guarantee a safe adventure.

                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Affordable Pricing</strong>
                                        Negotiable price We do not add extra cost to our previously agreed price.


                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">24/7 Availability</strong>
                                        Enjoy reliable cab services anytime, anywhere in Delhi.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            >  <strong>Comprehensive </strong>Cab Services in delhi</h2>
                            <p className="px-3">
                                delhi Cab Rental offers a range of travel solutions, including:
                            </p>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Local Sightseeing</strong>
                                        Fittingly, the citys most famous landmarks, India Gate, Qutub Minar and Red Fort, Humayuns tomb, and many others are also conveniently located.



                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Airport Transfers</strong>
                                        With transfers to and from Indira Gandhi International Airport, avoid the common inconveniences associated with travel.

                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Outstation Trips</strong>
                                        Option for outstation cab services for nearby cities of Jaipur, Agra, and Haridwar or other locations based on comfortable travelling.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Custom Packages</strong>
                                        Packaged travel products that suit families, professionals, and travellers.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            ><strong>Top Attractions</strong> Covered by delhi Cab</h2>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">India Gate</strong>
                                        A pride of India and a place of interest for every traveller.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Qutub Minar:</strong>
                                        UNESCO site famous for its excellent examples of Indo-Islamic architecture.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Red Fort</strong>
                                        A fort of red sandstone, symbolizing the pre-Independence Indian city of Delhi and its rulers known as Mughals.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Lotus Temple</strong>
                                        A complex of religious architecture with various structures built in a lotus flower form.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            >Explore <strong>delhi</strong> with Ease</h2>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 py-1">
                                    Navigating Delhi is made simple with Delhi Cab Rental. Whether it is an aesthetic tour of historical monuments or a business tour of potential markets, our cab services are physically and mentally comfortable. Allow us to take the burden of organizing transport so that you can enjoy the live taste of Delhi.
                                </p>
                                <p className="px-2 py-1">
                                    Plan your Delhi adventure today with Delhi taxi Service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq's */}
            <div className="container-fluid px-0 mt-4 section-03">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 col-sm-12">
                            <h3 className="mb-4 text-center web-title">
                                Frequently <span className="fw-normal">Asked Questions</span>
                            </h3>
                            <div className="faq cab-rental-accordion">
                                <ol>
                                    {faq.map((item, index) => (
                                        <li key={index}>
                                            <p
                                                className="p-2 cursor-pointer web-title fw-bold d-flex align-items-center justify-content-between"
                                                onClick={() => handleToggle(index)}
                                            >
                                                {item.question}
                                                <span className="bg-tertary-down p-2 color-tertary d-flex align-items-center rounded-5">
                                                    {activeIndex === index ? <BiMinus /> : <BiPlus />}
                                                </span>
                                            </p>
                                            <div
                                                id={`faq-${index}`}
                                                className={`${activeIndex === index ? "active" : "hidden"
                                                    }`}
                                            ><p className="px-2">{activeIndex === index ? item.answer : ''}</p>
                                            </div>
                                            <hr />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
