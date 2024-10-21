"use client"

import Breadcrumb from "@/components/Breadcrumb";
import { tourByThemeData } from "@/data/pagesData";

const ReligiousTourPackages = () => {
    const { heading, description } = tourByThemeData.religiousTourPackages;
    return (
        <>
            <Breadcrumb breadcrumbKey="religiousTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default ReligiousTourPackages;
