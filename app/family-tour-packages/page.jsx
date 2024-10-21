"use client"

import Breadcrumb from "@/components/Breadcrumb";
import { exclusiveTourPackagesData } from "@/data/pagesData";

const FamilyTourPackage = () => {
    const { heading, description } = exclusiveTourPackagesData.familyTourPackage;
    return (
        <>
            <Breadcrumb breadcrumbKey="familyTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default FamilyTourPackage;
