
import Breadcrumb from "@/components/Breadcrumb";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
export const metadata = {
    title: 'contact-us',
    description: '',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/contact-us',
    },
    openGraph: {
        title: 'contact-us',
        description: '',
        url: 'https://www.rajasthantourpackages.in/contact-us',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
}
const ContactUs = () => {
    return (
        <>
            <Breadcrumb breadcrumbKey="contactUs" />
            <div className="container-fluid py-5 bg-black text-white">
                <div className="row">
                    <h3 className="sec-heading mb-0 fw-normal">Contact Us</h3>
                    <h1 className="sec-subhead">Get in Touch with Us</h1>
                </div>
            </div>
            <div className="container py-5">
                <div className="row d-flex justify-content-between align-items-start">
                    {/* Give Us a Call Section */}
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 p-3 contact-item">
                        <h3 className="d-flex justify-content-start align-items-center gap-3 text-capitalize mb-3">
                            <FaPhoneAlt className="contact-icon" /> Give Us a Call
                        </h3>
                        <p className="w-100">Get expert travel help now!</p>
                        <a
                            href="tel:8107191919"
                            className="text-lowercase d-block contact-link"
                        >
                            +91-8107191919
                        </a>
                        <a
                            href="tel:9024337038"
                            className="text-lowercase d-block contact-link"
                        >
                            +91-9024337038
                        </a>
                    </div>

                    {/* Email Us Section */}
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 p-3 contact-item">
                        <h3 className="d-flex justify-content-start align-items-center gap-3 text-capitalize mb-3">
                            <FaEnvelope className="contact-icon" /> Drop a mail
                        </h3>
                        <p>Get travel help by sending an email!</p>
                        <a
                            href="mailto:mail@rajasthantravelhelpline.com"
                            className="text-lowercase contact-link"
                        >
                            mail@rajasthantravelhelpline.com
                        </a>
                    </div>

                    {/* Address Section */}
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 p-3 contact-item">
                        <h3 className="d-flex justify-content-start align-items-center gap-3 text-capitalize mb-3">
                            <FaMapMarkerAlt className="contact-icon" /> Address
                        </h3>
                        <p>Visit our office location.</p>
                        <a href="#" className="contact-link">
                            G-18, City Plaza, Jhotwara Road, Bani Park, Jaipur-16 Rajasthan
                            (India)
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
