"use client"
import Bread from "@/components/Bread";
import { cabRentals } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaCarAlt, FaStarOfLife } from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { faq } from "./data";
import HeroBanner from "@/components/HeroBanner";

export const ILink = (text, url) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="anchor color-tertary"
        >
            {text}
        </a>
    );
};
const Page = () => {
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => setShowAll(!showAll);

    // input query
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredTours = cabRentals.filter((pkg) =>
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const visibleTours = showAll ? filteredTours : filteredTours.slice(0, 6);
    const breadItems = [
        { label: "Home", link: "/", active: false },
        { label: "rajasthan cab rental", link: null, active: true },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active state
    };
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "rajasthan cab rental", link: null, active: true },
    ];
    return (
        <>
            <HeroBanner
                slides={[
                    { heading: "Rajasthan Cab Rental", subheading: "Reliable Cab Services Across Rajasthan" }
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
                                Rajasthan is among the most popular tourist destinations in the world famous for its royal forts, palaces and insightful culture. Today, travelling to such a beautiful destination becomes exciting and comfortable if one hires a good <strong>Rajasthan Cab Rental</strong> service. To get through this site, you must be looking for a reliable cab service while visiting Jaipur, Udaipur, Jodhpur, Bikaner, Jaisalmer or any other city in Rajasthan.
                            </p>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            > Why Choose <strong>Rajasthan Cab Rental</strong>?</h2>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Vast Fleet of Vehicles</strong>
                                        Our service provides a wide choice of transport for any kind of journey and client from small sedans for one person to large SUVs for families.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Experienced Drivers</strong>
                                        All our drivers are professionally familiar with Rajasthan&lsquo;s road networks and committed to providing good customer service to ensure a safe trip.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Customized Packages</strong>
                                        We have packages for all its destinations throughout Rajasthan that are pre-planned according to your itinerary and the nature of the tour, whether it&lsquo;s leisure touring, cultural touring, heritage touring, or My Way self-exploration touring.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">24/7 Customer Support</strong>
                                        We have a team of customer support personnel who can be reached anytime to help book for you or with any other queries about routes.
                                    </span>
                                </p>
                                <p className="px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Transparent Pricing</strong>
                                        All our Rajasthan Cab Rental are available at clear and affordable rent and come with an assurance of no hidden charges.

                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h2
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            ><strong>
                                    Safe
                                </strong>, <strong>
                                    Comfortable
                                </strong>, <strong>
                                    Efficient </strong>& <strong>Affordable
                                </strong> Cab Services</h2>
                            <p className="px-3">
                                Our Rajasthan Cab Rental service allows you to travel to any destination within the state on a one-time basis, round trip, or local tour. You can book your cab in advance based on the planned time you want to be picked up, or you can book the cab at the last minute.
                            </p>
                            <p className="px-3">
                                When you book a cab with us, you get value for your money. You will be safe, comfortable, and flexible. All of our cars are clean, sanitized, and with comfortable extras to maximize your ride.
                            </p>
                            <p className="px-3">
                                Explore Rajasthan with ease. Rely on <strong>Rajasthan Cab Rental</strong> for a comfortable trip, and do not waste your energy trying to find the best way to enjoy your trip. Don&apos;t wait. Book your cab today, stay, and tour the land of Royals. Come back home with a smile. For more details, visit: {ILink('Rajasthan tour Packages', 'https://www.rajasthantourpackages.in/')}.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4 bydayspackages overview">
                <div className="row d-flex justify-content-center align-items-center px-2">
                    <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                        <h2
                            className="text-capitalize px-3 text-center fw-normal web-title"
                        >Cab Rental Services in All <strong>Cities of Rajasthan</strong></h2>
                        <p className="px-3 mb-0">
                            Rajasthan Cab Rental also makes it easier for everyone who hires its services to travel across major cities such as Jaipur, Udaipur, Jodhpur, Bikaner and Jaisalmer. Experience Rajasthan at its best by availing yourself of our economical, efficient, and safest {ILink('cabs for sightseeing', 'https://www.jaipurtaxiservice.com/jaipur-sightseeing-tours.html')}.
                        </p>
                        <div className="row py-4 d-flex align-items-stretch px-3">
                            {visibleTours.map((pkg, index) => (
                                <div
                                    key={index}
                                    className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3 d-flex align-items-stretch px-2"
                                >
                                    <Link href={pkg.navigate} className="text-capitalize">
                                        <Card className="card bg-transparent rounded-4">
                                            <Image
                                                variant="top"
                                                src={pkg.imgSrc}
                                                alt={pkg.alt}
                                                title={pkg.title}
                                                className="w-100 card-image"
                                                width={800}
                                                height={600}
                                            />
                                            <div className="row p-3 card-content d-flex align-items-center  justfiy-content-center flex-column">
                                                <p className="web-title bg-black rounded-3 p-1 px-3"> <FaCarAlt className="me-1 color-tertary opacity-45" /> cab rental</p>
                                                <hr className="w-75" />
                                                <h3 className="w-100 web-title text-capitalize mx-1 fw-normal">
                                                    {pkg.title}
                                                </h3>
                                            </div>
                                        </Card>
                                    </Link>
                                </div>
                            ))}
                            <div className="row d-flex w-100 justify-content-center align-items-center">
                                <button
                                    onClick={toggleShowAll}
                                    className="more-btn bg-transparent d-flex justify-content-center align-items-center gap-2"
                                >
                                    {showAll ? (
                                        <>
                                            Show less <MdExpandLess />
                                        </>
                                    ) : (
                                        <>
                                            View all <MdExpandMore />
                                        </>
                                    )}
                                </button>
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
    )
}
export default Page