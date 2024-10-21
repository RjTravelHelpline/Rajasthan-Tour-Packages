"use client"
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import { destinationCovered, packageData, tourFaq, tourHighlights, tourItinerary, tourOverview } from "@/data/Days Data/_5DaysRajasthanTourPackageData";
import { allCitiesImages } from "@/data/imageData";
import { useState } from "react";
import { Accordion, Carousel, Table } from "react-bootstrap";
import { FaStarOfLife } from "react-icons/fa";


const _5DaysRajasthanTourPackage = () => {

    return (
        <>
            <Breadcrumb breadcrumbKey="_5daysrajasthantour" />
        </>
    );
};

export default _5DaysRajasthanTourPackage;
