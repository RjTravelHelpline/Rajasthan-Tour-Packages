
import Breadcrumb from "@/components/Breadcrumb";
import { exclusiveTourPackagesData } from "@/data/pagesData";
export const metadata = {
    title: 'family-tour-packages',
    description: '',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/family-tour-packages',
    },
    openGraph: {
        title: 'family-tour-packages',
        description: '',
        url: 'https://www.rajasthantourpackages.in/family-tour-packages',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
}

const FamilyTourPackage = () => {
    const { heading, description } = exclusiveTourPackagesData.familyTourPackage;
    return (
        <>
            <Breadcrumb breadcrumbKey="familyTour" />
            <div className="container py-5">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

export default FamilyTourPackage;
