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
        { label: "kota cab rental", link: null, active: true },
    ];
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active state
    };
    return (
        <>
            <HeroBanner
                slides={[
                    { heading: "kota Cab Rental", subheading: "Experience the Lively city of Kota" }
                ]}
                backgroundImage="/Images/Banners/kota-banner02.webp" />
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
                                Kota located on the banks of the {Link('Chambal River', 'https://www.rajasthantourpackages.in/blog/celebrate-kota-mahotsav-2024-7-day-festivities-chambal-river')} is a city of historical forts, beautiful palaces and scenic landscapes. For this reason, you need to find a good cab service provider to make your tour around Kota smooth. <strong>Kota Cab Rental</strong> offers convenient travel options allowing you to experience this vibrant city&apos;s best.


                            </p>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            > Why Choose <strong>kota Cab Rental</strong>?</h2>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Experienced Drivers</strong>
                                        Our local drivers know Kota&apos;s rich history and provide guided travel experiences.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Affordable Pricing</strong>
                                        Choose from sedans, SUVs and tempo travellers to suit your travel group.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">24/7 Availability</strong>
                                        We are open 24/7 to meet your transportation requirements.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            >  <strong>Comprehensive </strong>Cab Services in kota</h2>
                            <p className="px-3">
                                kota Cab Rental offers a range of travel solutions, including:
                            </p>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Local Sightseeing</strong>
                                        Find out popular attractions like the Kota Garh Palace, Jag Mandir and Chambal Garden.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Airport Transfers</strong>
                                        Get service of our airport cab services for travelling quickly to and from Kota Airport.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Outstation Trips</strong>
                                        Visit nearby cities like Jaipur, Udaipur, and Chittorgarh and option for our cheap outstation cabs with ease.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Custom Packages</strong>
                                        Tailored travel packages for families, couples and solo travellers.

                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            ><strong>Top Attractions</strong> Covered by kota  Cab</h2>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Kota Garh Palace</strong>
                                        Yes, it is the palace of the great ages, with an aesthetic type of architecture and beautiful views.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Jagmandir</strong>
                                        A palace on the island at the Chambal River with fascinating views.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Chambal Garden</strong>
                                        It is a green park immediately touching the Chambal River, which provides a vast land area for relaxation, outings, and even picnicking.

                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Seven Wonders Park</strong>
                                        It means a park where there are models of the famous planet.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            >Explore <strong>kota</strong> with Ease</h2>
                            <p className="px-2 py-1">
                                Kota Cab Rental makes travelling in Kota smooth and easy. From visiting palaces and temples to enjoying the incredible views our <strong>Kota cab services</strong> are a secure and convenient way to travel the city. Let us take care of your travel so you can enjoy your time in Kota with {Link('Rajasthan Tour And Travel', 'https://www.rajasthantourpackages.in')}.


                            </p>
                            <p className="px-2 py-1">
                                Plan your Kota adventure today with {Link('Kota taxi Service', 'https://www.jaipurtaxiservice.com/citywise-taxi-fares/kota-taxi-service.html')}. Book your ride now.

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
