import Breadcrumb from "@/components/Breadcrumb";
import { policyData } from "@/data/pagesData";
const Policy = () => {
    const { heading, subheading, description } = policyData;
    return (
        <>
            <Breadcrumb breadcrumbKey="privacyPolicy" />
            <div className="container py-5">
                <p className="mb-2 text-uppercase text-center sec-heading">{heading}</p>
                <h2 className="mb-4 text-center">{subheading}</h2>
                <p className="text-center">{description}</p>
            </div>
        </>
    );
};

export default Policy;
