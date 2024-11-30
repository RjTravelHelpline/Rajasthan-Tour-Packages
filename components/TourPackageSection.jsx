"use client"
import { MdArrowOutward, MdExpandLess, MdExpandMore } from "react-icons/md";
import TourPackages from "./TourPackages";
import Link from "next/link";
import { useState } from "react";

export const TourPackageSection = ({ days, tourData }) => {
    const [showAll, setShowAll] = useState(false);
    const visibleTours = showAll ? tourData : tourData.slice(0, 3);

    // Function to toggle visibility
    const toggleShowAll = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };
    return (
        <>
            <div className="container-fluid px-0 section-02 pt-2">
                <div className="container packages">
                    <div
                        className="row tour my-3 justify-content-center align-items-stretch"
                        id={`${days}-days`}
                    >
                        <div className="row w-100 py-3 d-flex flex-column px-0">
                            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                                <h2 className="text-capitalize fw-normal">
                                    <span className="fw-bold">{days} days</span> tour packages
                                </h2>
                            </div>
                        </div>
                        <div className="row py-4 d-flex align-items-stretch justify-content-center px-2">
                            {visibleTours.map((pkg, index) => (
                                <TourPackages key={index} pkg={pkg} />
                            ))}
                            <div className="row d-flex w-100 justify-content-between align-items-center w-100">
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
                                <Link
                                    href={`/${days}-days-rajasthan-tours`}
                                    className="explore-btn card-button w-auto d-flex justify-content-between align-items-center gap-2"
                                >
                                    Explore now <MdArrowOutward />
                                </Link>
                            </div >
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};