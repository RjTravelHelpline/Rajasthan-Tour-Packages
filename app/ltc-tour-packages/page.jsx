"use client"

import Breadcrumb from "@/components/Breadcrumb";
import { exclusiveTourPackagesData } from "@/data/pagesData";

const ltcTourPackage = () => {
    const { heading, description } = exclusiveTourPackagesData.ltcTourPackage;
    return (
        <>
            <Breadcrumb breadcrumbKey="ltcTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default ltcTourPackage;
