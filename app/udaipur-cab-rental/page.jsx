'use client'
import Bread from "@/components/Bread";
import HeroBanner from "@/components/HeroBanner";
import { FaStarOfLife } from "react-icons/fa";
import { faq } from "./data";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";
import { Link } from "@/Utils/util";

const Page = () => {
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "rajasthan cab rental", link: "/rajasthan-cab-rental", active: false },
        { label: "Udaipur cab rental", link: null, active: true },
    ];
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active state
    };
    return (
        <>
            <HeroBanner
                slides={[
                    { heading: "Udaipur Cab Rental", subheading: "Explore the City of Lakes with Ease" }
                ]}
                backgroundImage="/Images/Card/udaipur-temple.webp" />
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
                                Udaipur is fondly known as the City of Lakes and is one of the most beautiful places in this desert. It is a wonderful city with numerous palaces, clear water lakes and colourful culture. To enjoy your trip to its maximum, <strong>Udaipur Cab Rental</strong> provides the <strong>best cab services in Udaipur</strong>, which help you tour this beautiful city conveniently. Whether you’re here for sightseeing, shopping or exploring the local culture, or discovering the top {Link('Places to Visit in Udaipur', 'https://www.rajasthantourpackages.in/udaipur')}, our cab rental service ensures convenience, safety and a hassle-free travel experience.


                            </p>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            > Why Choose <strong>Udaipur Cab Rental</strong>?</h2>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Vast Fleet of Vehicles</strong>
                                        This way, our list of vehicles available for rent is quite different, starting with compacts, mid-sized cars, and full-size cars, as well as SUVs.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Experienced Drivers</strong>
                                        We have correctly trained and well-experienced drivers and professional knowledge about the roads of Udaipur to provide the safest and most comfortable rides.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Affordable Pricing</strong>
                                        You can choose products from a transparent platform with no hidden fees to keep the buying process smooth.

                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">24/7 Availability</strong>
                                        Our services are offered anytime, meaning people can book a taxi at any of our convenient times.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            >  <strong>Comprehensive </strong>Cab Services in Udaipur</h2>
                            <p className="px-3">
                                Udaipur Cab Rental offers a range of travel solutions, including:
                            </p>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Local Sightseeing</strong>
                                        Know about some of the most visited destinations, like <strong>City Palace</strong>, Lake Pichola, Sajjangarh Palace, and many more, using our self-driven cars.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Airport Transfers</strong>
                                        Book our safe and dependable transfers from and to Udaipur Airport, Rajasthan.


                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Outstation Trips</strong>
                                        Kumbhalgarh, Mount Abu, and Chittorgarh are nearby tourist magnets, so you can plan your visit with our outstation taxi services.


                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Custom Packages</strong>
                                        The prices depend on the routes and programs, so we offer the most suitable package, whether the trip will be with family or with a lone traveller.

                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            ><strong>Top Attractions</strong> Covered by Udaipur  Cab</h2>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">City Palace</strong>
                                        Look at this royal estate’s architecture which garners Rajasthani and Mughal influences all while overlooking the mesmerizing Lake Pichola.

                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Lake Pichola</strong>
                                        Look at this royal estate’s architecture which garners Rajasthani and Mughal influences all while overlooking the mesmerizing Lake Pichola.


                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Sajjangarh Palace</strong>
                                        Visit this splendid monsoon palace on the hills and look at the whole city and its lakes.

                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Fateh Sagar Lake</strong>
                                        Please visit Fateh Sagar Lake located in Udaipur. It has an excellent sunset view and has more restaurants selling authentic food franchises.

                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            >Explore <strong>Udaipur</strong> with Ease</h2>
                            <p className="px-2 py-1">
                                Using our Udaipur Cab Rental services has made it easy for tourists to explore this beautiful city. Our services are designed to provide all travellers comfort, convenience and flexibility. For a holiday on a lake or just for fun our experienced drivers and clean cars ensure a smooth and enjoyable ride.
                            </p>
                            <p className="px-2 py-1">
                                Book a cab in Udaipur today and explore throughout Udaipur with Udaipur Cab Rental.
                            </p>
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
