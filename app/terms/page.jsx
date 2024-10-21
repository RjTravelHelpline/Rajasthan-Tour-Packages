import Breadcrumb from "@/components/Breadcrumb";
import { tncData } from "@/data/pagesData";

const TnC = () => {
    const { heading, subheading, description } = tncData;
    return (
        <>
            <Breadcrumb breadcrumbKey="tnc" />
            <div className="container py-5">
                <p className="mb-2 text-uppercase text-center sec-heading">{heading}</p>
                <h2 className="mb-4 text-center">{subheading}</h2>
                <p className="text-center">{description}</p>
            </div>
        </>
    );
};

export default TnC;
