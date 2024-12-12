'use client'
import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _03DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";
import { useEffect, useState } from "react";



const ThreeDaysRajasthanTourPackages = () => {
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

    const sortedTours = packages.filter(
        (pkg) => pkg.duration === '02 Nights • 03 Days'
    );
    const images = [
        {
            src: allCitiesImages.jaipur.jaipurBanner01.src,
            alt: allCitiesImages.jaipur.jaipurBanner01.alt,
            title: allCitiesImages.jaipur.jaipurBanner01.title
        },
    ];

    const content = [
        {
            duration: '02 nights • 03 days',
            title: '03 days rajasthan tour packages',
            subhead: null
        },
    ];
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="_03Days" />
            <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
                <TourCarousel images={images} content={content} />
            </div>
            <div className="container packages py-2">
                <div className="row py-4 d-flex align-items-stretch px-2">
                    {sortedTours.map((pkg, index) => (
                        <TourPackages key={index} pkg={pkg} />
                    ))}
                </div>
            </div>
        </>
    );
};
export default ThreeDaysRajasthanTourPackages