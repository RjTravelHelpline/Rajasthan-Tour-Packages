"use client"
import Bread from "@/components/Bread";
import { cabRentals } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { FaCarAlt } from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";


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

    return (
        <>
            {/* header */}
            <div className="container-fluid bg-black text-white">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-12 py-5">
                            <h1 className="web-title fw-bold">
                                Rajasthan Cab Rental
                            </h1>
                            <hr className="w-50" />
                            <h2 className="text-white opacity-50 web-title fw-light">
                                Reliable Cab Services Across Rajasthan
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 px-0">
                            <Bread items={breadItems} style='px-0' />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container py-4 bydayspackages">
                <div className="row py-4 d-flex align-items-stretch">
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
        </>
    )
}
export default Page