"use client"

import Breadcrumb from "@/components/Breadcrumb";
import { tourByThemeData } from "@/data/pagesData";

const GroupTours = () => {
    const { heading, description } = tourByThemeData.groupTours;
    return (
        <>
            {/* bread crumb */}

            <Breadcrumb breadcrumbKey="groupTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default GroupTours;
