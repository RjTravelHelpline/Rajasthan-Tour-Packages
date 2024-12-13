'use client'
import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import { useEffect, useState } from "react";


const RajasthanTourismPackages = () => {
    const [packages, setPackages] = useState([]);

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

    const tourism_tour_packages = packages.filter(
        (pkg) => pkg.category === 'tourism'
    );

    return (
        <>
            <Breadcrumb breadcrumbKey="tourismTour" />
            <div className="container py-5">
                <h1 className="text-capitalize text-center">rajasthan tourism tour packages</h1>
            </div>
            <div className="container packages">
                <div className="row py-4 d-flex align-items-stretch px-2">
                    {tourism_tour_packages.map((pkg, index) => (
                        <TourPackages key={index} pkg={pkg} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default RajasthanTourismPackages;
