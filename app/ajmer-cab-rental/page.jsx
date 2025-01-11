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
        { label: "ajmer cab rental", link: null, active: true },
    ];
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active state
    };
    return (
        <>
            <HeroBanner
                slides={[
                    { heading: "ajmer Cab Rental", subheading: "Travel Agencies Services For All Your Travel Arrangement" }
                ]}
                backgroundImage="/Images/Card/ajmer.webp" />
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
                                Ajmer city of spiritual charm and historical significance, is best explored with reliable cab service. The fast city is famous for the Ajmer Sharif Dargah, Ana Sagar Lake and the Taragarh Fort. It also provides a simple and pious tract and has a historical bend. Hiring <strong>Ajmer Cab Rental</strong> shall deliver the passengers with such facilities and let the Christmas tourist unravel the citys beauty, or even the locals go about their routine journey much more effortlessly.

                            </p>
                            <p className="px-3 home-para">
                                Our service delivery is safe, timely, and satisfactory, so all our trips are anxiety-free. From helping people get to and from airports and other places to providing about-town sightseeing services, we offer various travel services with neat, well-maintained vehicles and competent drivers. Trust us for your journeys in Ajmer and make every ride memorable.

                            </p>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            > Why Choose <strong>ajmer Cab Rental</strong>?</h2>
                            <p className="px-3">
                                At Ajmer Cab Rental, hiring a cab and driver comes with accentuated professional services and various good working cabs to meet the client’s needs. To provide little travellers with a comfortable journey, whether within their city of history or an outstation trip, our time-read and transparent billing system makes it easy for them. Experience comfortable choices such as packages that are now available 24/7 with top-notch customer service support to match.

                            </p>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Wide Range of Vehicles</strong>
                                        Clients can hire various car types from compact and mid-size sedans to large-body spacious Suburban cars.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Experienced Drivers</strong>
                                        We have well-trained and friendly drivers who make the trip safe and help avoid the usual inconveniences.


                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Affordable Pricing</strong>
                                        Company services are also developed and put somewhat in price factors to access high-value offers while not compromising the quality.



                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">24/7 Availability</strong>
                                        24-hour taxis are always ready to take you wherever it is, either in the morning, afternoon, evening or at night.

                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            >  <strong>Comprehensive </strong>Cab Services in ajmer</h2>
                            <p className="px-3">
                                ajmer Cab Rental offers a range of travel solutions, including:
                            </p>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Local Sightseeing</strong>
                                        Find out iconic attractions like {Link('Ajmer Sharif Dargah', 'https://www.rajasthantourpackages.in/ajmer')}, Ana Sagar Lake and Taragarh Fort with our well-planned local tours.




                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Airport Transfers</strong>
                                        Hire timely airport transfers to and from Jaipur International Airport for a comfortable transportation service.

                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Outstation Trips</strong>
                                        Explore nearby sites like Pushkar, Jaipur, or Udaipur easily and safely in our car.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Custom Packages</strong>
                                        Choose the right rental solution according to your exposures with our choices and options.

                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            ><strong>Top Attractions</strong> Covered by ajmer Cab</h2>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Ajmer Sharif Dargah</strong>
                                        Toom the Sufi shrine, which millions of people visit.


                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Ana Sagar Lake</strong>
                                        Rest near this lovely short lake and have a boat ride.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Taragarh Fort</strong>
                                        Trek to this hilltop fort and get a good look at most of Ajmers sites.

                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Pushkar</strong>
                                        The town that has the eternally churning sacred Pushkar Lake and the lone temple of Lord Brahma is located about a 10-minute drive from Aquas.

                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            >Explore <strong>ajmer</strong> with Ease</h2>
                            <p className="px-2 py-1">
                                Ajmer Cab Rental preempts all your travel-related stress so that you can give full attention to Ajmer&lsquo;s cultural and religious charisma. Our dependable service will help you discover the existing treasures of Ajmer and surrounding areas on your own.
                            </p>
                            <p className="px-2 py-1">
                                Plan your <strong>Ajmer</strong> adventure today with {Link('Ajmer taxi Service', 'https://www.jaipurtaxiservice.com/citywise-taxi-fares/ajmer-taxi-service.html')}.

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
