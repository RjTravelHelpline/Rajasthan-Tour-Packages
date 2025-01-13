'use client';
import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";

const PopularTourPackages = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await fetch('/api/allTourPackages');
                const data = await response.json();
                setPackages(data);
            } catch (error) {
                console.error('Error fetching packages:', error);
            } finally {
                setLoading(false); // Stop loading once data is fetched
            }
        };
        fetchPackages();
    }, []);

    const popularTours = packages.filter((pkg) => pkg.category === 'popular');

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
                    {loading ? (
                        Array(6)
                            .fill()
                            .map((_, index) => (
                                <div
                                    key={index}
                                    className="col-lg-4 col-md-6 col-sm-12 mb-4"
                                >
                                    <Skeleton height={200} className="mb-2" />
                                    <Skeleton height={20} className="mb-1" width="60%" />
                                    <Skeleton height={20} className="mb-1" width="80%" />
                                    <Skeleton height={20} className="mb-1" width="40%" />
                                </div>
                            ))
                    ) : (
                        // Show tour packages after loading
                        popularTours.map((pkg, index) => (
                            <TourPackages key={index} pkg={pkg} />
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default PopularTourPackages;
