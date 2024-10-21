import Breadcrumb from "@/components/Breadcrumb";
import { tourByThemeData } from "@/data/pagesData";

const VillageTourPackages = () => {
    const { heading, description } = tourByThemeData.villageTourPackages;
    return (
        <>
            <Breadcrumb breadcrumbKey="villageTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default VillageTourPackages;
