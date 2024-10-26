"use client";
import { Card } from "react-bootstrap";
import SlickSlider from "./SlickSlider";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { FaGripfire } from "react-icons/fa";
import { daysPackage } from "@/data/data";
import Link from "next/link";
import Image from "next/image";

const DaysPack = () => {
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        setReadMore(!readMore);
    };
    return (
        <div className="container-fluid section-01 py-4">
            <div className="container bydayspackages py-4">
                <div className="row py-2 px-2 d-flex justify-content-center align-items-center">
                    <h2 className="w-auto text-capitalize home-head">
                        <span className="fw-normal">tour packages </span> by days
                        <FaGripfire className="icon" />
                    </h2>
                    <p className="text-center home-para">
                        Explore the best of Rajasthan with our{" "}
                        <span className="fw-bold">Rajasthan tour by days</span>, offering
                        flexible itineraries that cater to your schedule.Whether {`you're`} looking for a quick getaway or an extended
                        adventure
                        {readMore && (
                            <>
                                , our packages are designed to suit every need. Our{" "}
                                <span className="fw-bold">
                                    Rajasthan tour package for families
                                </span>{" "}
                                ensures a memorable experience, combining cultural richness,
                                historical grandeur, and vibrant traditions. From {`Jaipur's`}
                                majestic forts to {`Udaipur's`} tranquil lakes, our{" "}
                                <span className="fw-bold">Rajasthan trip</span> covers all the
                                must-see destinations, providing a perfect blend of relaxation
                                and exploration for families and travelers seeking an authentic
                                Rajasthan experience.
                            </>
                        )}
                        <button className="read-more-btn" onClick={handleReadMore}>
                            {readMore ? <>Show Less</> : <>..Read More</>}
                        </button>
                    </p>
                </div>
                <div className="row py-4 d-flex justify-content-start align-items-stretch">
                    <SlickSlider>
                        {daysPackage.map((pkg, index) => (
                            <div
                                key={index}
                                className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch px-2"
                            >
                                <Link href={pkg.navigate} className="text-capitalize">
                                    <Card className="card bg-transparent">
                                        <Image
                                            variant="top"
                                            src={pkg.imgSrc}
                                            alt="Card Packages"
                                            className="w-100 card-image"
                                            width={600}
                                            height={800}
                                        />
                                        <div className="row p-3 card-content d-flex align-items-center  justfiy-content-center flex-column">
                                            <h3 className="w-100 text-capitalize mx-1">
                                                {pkg.title.split(" ")[0]}{" "}
                                                <span className="fw-normal">
                                                    {pkg.title.split(" ")[1]}
                                                </span>
                                            </h3>
                                            <p>rajasthan tour packages</p>
                                        </div>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </SlickSlider>
                </div>
                <div className="row d-flex w-100 justify-content-start align-items-center mt-2">
                    <button className="more-btn bg-transparent d-flex justify-content-center align-items-center gap-2">
                        <Link href="/rajasthan-tour-packages" className="text-black">
                            view more <GoArrowRight />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DaysPack;
