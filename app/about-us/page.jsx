import { AboutUs } from "@/components/AboutUs";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'About Us: Your Guide to Exploring | Rajasthan Tour Packages',
    description: 'Learn more about us and how we help you explore Rajasthan’s heritage, culture, and attractions. Book your dream tour at Rajasthan Tour Packages for a memorable.',
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/about-us",
    },
    openGraph: {
        title: 'About Us: Your Guide to Exploring | Rajasthan Tour Packages',
        description: 'Learn more about us and how we help you explore Rajasthan’s heritage, culture, and attractions. Book your dream tour at Rajasthan Tour Packages for a memorable.',
        url: "https://www.rajasthantourpackages.in/about-us",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'About Us: Your Guide to Exploring | Rajasthan Tour Packages',
        description: 'Learn more about us and how we help you explore Rajasthan’s heritage, culture, and attractions. Book your dream tour at Rajasthan Tour Packages for a memorable.',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};
const About = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="aboutUs" />
            <div id="about-us" className="py-4 container-fluid">
                <div className="container about my-5">
                    <div className="row py-4">
                        <div className="col-12 about-col1 col-sm-12 col-md-12 py-4">
                            <h1 className="text-capitalize text-center">ABOUT US</h1>
                            <h2 className="py-2 text-capitalize text-center mb-3">
                                we are Leading <span>Rajasthan Tour Planners</span> in india.
                            </h2>
                            <p className="text-justify px-4">
                                We take you to the era of ancient India. We offer attractive
                                Rajasthan honeymoon packages too that make your trip memorable.
                                Rajasthan is one of {`Indias`} leading tourist places, boasting
                                magnificent forts and glorious royal palaces, which reverberate
                                the sages of victory. Mouthwatering dishes, colorful culture,
                                exquisite handicrafts, and architectural wonders are regarded as
                                a few of the reasons why people love to choose our Rajasthan
                                tour packages. This place has earned a high reputation owing to
                                the chivalry and romance it offers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs />
        </>
    );
};
export default About