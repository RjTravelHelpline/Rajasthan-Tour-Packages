"use client"

import Breadcrumb from "@/components/Breadcrumb";
import { tourByThemeData } from "@/data/pagesData";

const LuxuryTourPackages = () => {
    const { heading, description } = tourByThemeData.luxuryTourPackages;
    return (
        <>
            <Breadcrumb breadcrumbKey="luxuryTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default LuxuryTourPackages;
