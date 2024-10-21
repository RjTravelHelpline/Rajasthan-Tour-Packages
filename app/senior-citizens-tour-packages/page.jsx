import Breadcrumb from "@/components/Breadcrumb";
import { exclusiveTourPackagesData } from "@/data/pagesData";

const SeniorCitizenTourPackage = () => {
    const { heading, description } =
        exclusiveTourPackagesData.seniorCitizenTourPackage;
    return (
        <>
            <Breadcrumb breadcrumbKey="seniorcitizenTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default SeniorCitizenTourPackage;
