'use client'
import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import { useEffect, useState } from "react";


const PopularTourPackages = () => {
    const [packages, setPackages] = useState([])

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await fetch('/api/allTourPackages');
                const data = await response.json();
                setPackages(data);
            } catch (error) {
                console.error('Error fetching packages:', error);
            }
        };
        fetchPackages();
    }, []);

    const popularTours = packages.filter(
        (pkg) => pkg.category === 'popular'
    );
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="popularTour" />
            {/* header */}
            <div className="container-fluid py-5 page-head-section">
                <div className="container">
                    <h1 className="text-capitalize">
                        popular <span className="fw-normal">tour packages</span>
                    </h1>
                </div>
            </div>
            <div className="container packages my-5">
                <div className="row py-4 d-flex align-items-stretch px-2">
                    {popularTours.map((pkg, index) => (
                        <TourPackages key={index} pkg={pkg} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PopularTourPackages;
