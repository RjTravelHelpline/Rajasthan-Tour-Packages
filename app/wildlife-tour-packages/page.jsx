import Breadcrumb from "@/components/Breadcrumb";
import { tourByThemeData } from "@/data/pagesData";

const WildlifeTourPackages = () => {
    const { heading, description } = tourByThemeData.wildlifeTourPackages;
    return (
        <>
            <Breadcrumb breadcrumbKey="wildlifeTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default WildlifeTourPackages;
