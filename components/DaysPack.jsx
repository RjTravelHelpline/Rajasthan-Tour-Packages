"use client";
import { Card, Container, Row } from "react-bootstrap";
import SlickSlider from "./SlickSlider";
import { useState } from "react";
import { daysPackage } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
import { ExploreAll } from "./ExploreAll";
import { FaClock } from "react-icons/fa6";
import { MdArrowUpward, MdOutlineArrowOutward } from "react-icons/md";

const DaysPack = () => {
    const link = (text, url) => {
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
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        setReadMore(!readMore);
    };
    return (
        <section className="container-fluid section-01 py-5 position-relative">
            <Container className="bydayspackages mb-5">
                <Row className="py-2 px-2 d-flex justify-content-center align-items-center">
                    <div className="d-flex-justify-content-center align-items-center">
                        <h2 className="text-center text-capitalize home-head web-title fw-normal">
                            Rajasthan tour <span className="fw-bold">by days </span>
                        </h2>
                    </div>

                    <p className="text-center home-para">
                        Explore the best of Rajasthan with our {link('Rajasthan Tour By Days', 'https://www.rajasthantourpackages.in/rajasthan-tour-packages')}, offering
                        flexible itineraries that cater to your schedule.Whether {`you're`} looking for a quick getaway or an extended adventure, our packages are designed to suit every need. Our <strong>Rajasthan tour package for families</strong> ensures a memorable experience, combining cultural richness, historical grandeur, and vibrant traditions. {readMore && (
                            <>
                                From Jaipur&#39;s majestic forts to Udaipur&#39;s tranquil lakes, our <strong>Rajasthan Trip</strong> covers all the must-see destinations, providing a perfect blend of relaxation and exploration for families and travelers seeking an authentic Rajasthan experience.
                            </>
                        )}
                        <button className="read-more-btn p-0 bg-transparent" onClick={handleReadMore}>
                            {readMore ? <></> : <>...</>}
                        </button>
                    </p>
                </Row>
                <Row className="py-4 d-flex justify-content-start align-items-stretch px-0">
                    <SlickSlider settings={{ slidesToShow: 4 }}>
                        {daysPackage.map((pkg, index) => (
                            <div
                                key={index}
                                className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch px-2"
                            >
                                <Link href={pkg.navigate} className="text-capitalize">
                                    <Card className="card bg-transparent">
                                        <Image
                                            src={pkg.imgSrc}
                                            alt={pkg.imgAlt}
                                            title={pkg.imgTitle}
                                            className="w-100 card-image"
                                            width={600}
                                            height={800}
                                            placeholder='empty' style={{ backgroundColor: "#000" }}
                                        />
                                        <div className="row p-3 card-content d-flex align-items-center  justfiy-content-center flex-column">
                                            <p className="text-white web-title">rajasthan tour package</p>
                                            <hr />
                                            <h4 className="w-100 text-capitalize mx-1 web-title card-title">
                                                <span className="mb-2 me-2 color-tertary">
                                                    <FaClock />
                                                </span>
                                                <span>
                                                    {pkg.title.split(" ")[0]}{" "}
                                                </span>
                                                <span className="fw-normal web-title">
                                                    {pkg.title.split(" ")[1]}
                                                </span>
                                            </h4>
                                        </div>
                                        <Link href={pkg.navigate} className="text-capitalize m-auto p-3 d-flex rounded-5">
                                            <MdOutlineArrowOutward />
                                        </Link>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </SlickSlider>
                </Row>
            </Container>
            <ExploreAll href="rajasthan-tour-packages" text="explore all" />
        </section>
    );
};

export default DaysPack;
