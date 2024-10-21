"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { exclusiveTourPackagesData } from "@/data/pagesData";

const HoneyMoonTourPackage = () => {
    const { heading, description } =
        exclusiveTourPackagesData.honeymoonTourPackage;
    return (
        <>
            <Breadcrumb breadcrumbKey="honeymoonTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default HoneyMoonTourPackage;
