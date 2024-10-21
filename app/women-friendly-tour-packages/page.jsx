import Breadcrumb from "@/components/Breadcrumb";
import { exclusiveTourPackagesData } from "@/data/pagesData";

const WomenFriendlyTourPackage = () => {
    const { heading, description } =
        exclusiveTourPackagesData.womenFriendlyTourPackage;
    return (
        <>
            <Breadcrumb breadcrumbKey="womenfriendlyTour" />

            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default WomenFriendlyTourPackage;
