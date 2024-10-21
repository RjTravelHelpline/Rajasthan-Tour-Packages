"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { tourByThemeData } from "@/data/pagesData";

const HeritageHotelsTourPackages = () => {
    const { heading, description } = tourByThemeData.heritageHotelsTourPackages;
    return (
        <>
            <Breadcrumb breadcrumbKey="heritageHotelTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default HeritageHotelsTourPackages;
