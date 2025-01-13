"use client"
import { tourByCities } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { MdExpandLess, MdExpandMore, MdOutlineArrowOutward } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";

export const RajasthanTourByCities = () => {
    const [showAll, setShowAll] = useState(false);

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredTours = tourByCities.filter((pkg) =>
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const visibleTours = showAll ? filteredTours : filteredTours.slice(0, 6);

    const toggleShowAll = () => setShowAll(!showAll);

    return (
        <>
            {/* header */}
            <div className="container-fluid bg-black text-white py-5">
                <div className="row">
                    <h3 className="sec-heading mb-0 fw-normal">Rajasthan</h3>
                    <h1 className="sec-subhead">Tour by cities</h1>
                </div>
                {/* search input */}
                <div className="container mt-3 d-flex justify-content-center align-items-center">
                    <div className="row input-container d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center position-relative px-0">
                            <input
                                type="text"
                                placeholder="Search for a city or state..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="w-100 border-0 outline-0 p-4 rounded-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-4 bydayspackages">
                <div className="row py-4 d-flex align-items-stretch">
                    {visibleTours.map((pkg, index) => (
                        <div
                            key={index}
                            className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch"
                        >
                            <Link href={pkg.navigate} className="text-capitalize">
                                <Card className="card bg-transparent">
                                    <Image
                                        variant="top"
                                        src={pkg.imgSrc}
                                        alt={pkg.alt}
                                        title={pkg.imgTitle}
                                        className="w-100 card-image"
                                        width={800}
                                        height={600}
                                    />
                                    <div className="row p-3 card-content d-flex align-items-center  justfiy-content-center flex-column">
                                        <p className="text-white web-title">rajasthan tour package</p>
                                        <hr />
                                        <h4 className="w-100 text-capitalize mx-1 web-title d-flex align-items-center">
                                            <span className="mb-2 me-2 color-tertary">
                                                <TbLocationFilled />
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
        </>
    )
}