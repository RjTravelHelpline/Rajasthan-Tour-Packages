import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: 'Terms and Conditions | Rajasthan Tour Packages',
    description: "",
    keywords: [''],
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/terms",
    },
    openGraph: {
        title: 'Terms and Conditions | Rajasthan Tour Packages',
        description: "",
        url: "https://www.rajasthantourpackages.in/terms",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Terms and Conditions | Rajasthan Tour Packages',
        description: "",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
};

const TnC = () => {
    const date = new Date()
    return (
        <>
            <Breadcrumb breadcrumbKey="tnc" />
            <div className="container-fluid py-lg-5 py-sm-3 text-black">
                <div className="row justify-content-center align-items-center mt-lg-5 mt-sm-3">
                    <div className="col-12 col-lg-8 col-sm-12 px-2">
                        <div className="insider rounded-3 px-3">
                        </div>
                        <div className="insider bg-white rounded-3 p-3">
                            <p className='text-tertary fw-bold text-uppercase mb-0 color-tertary'>Rajasthan Tour Packages</p>
                            <h1 className='text-capitalize web-title fw-bold text-black'>terms and conditions</h1>
                            <hr />
                            <p className='text-right'>Last Updated: {date.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</p>
                            <hr />
                            <h4 className='text-capitalize web-title'>1. overview</h4>
                            <p>Welcome to Rajasthan Tour Packages. The following terms and conditions will apply when accessing this site, and to make use of the services that we offer. You will also be bound to these terms the moment you enter our site and use any of them.  If you do not agree with any part of these terms, you should not use this site any further.
                            </p>
                            <hr />
                            <h4 className='text-capitalize web-title'>2. Acceptance of Terms
                            </h4>
                            <p>
                                <span className="d-block">
                                    Any service mentioned herein is available only on request and subject to confirmation.
                                </span>
                                <span className="d-block">
                                    It should be noted that the prices, routes, and company policy may be changed.
                                </span>
                                <span className="d-block">
                                    All bookings are governed by the laws of India.
                                </span>

                            </p>
                            <hr />
                            <h4 className=' text-capitalize web-title'>
                                3. Booking Policy
                            </h4>
                            <p>
                                <span className="d-block">
                                    Customers need to report their correct information during the time of booking.
                                </span>
                                <span className="d-block">
                                    Full or partial payment may be required to confirm bookings.
                                </span>
                                <span className="d-block">
                                    Reservations are only confirmed after receipt of a booking confirmation from us.
                                </span>
                            </p>
                            <hr />
                            <h4 className=' text-capitalize web-title'>
                                4. Payment Policy
                            </h4>
                            <p>
                                <span className="d-block">
                                    Students can make payments on the web by secure payment gateways or through other modes accepted by the organization.
                                </span>
                                <span className="d-block">
                                    Submitting assignments a few days past the set due dates may cause cancellation of the particular assignment, or incurring of other charges.
                                </span>
                                <span className="d-block">
                                    This does not include taxes, tolls or any service charges will be required and will be communicated while making the bookings.
                                </span>
                            </p>
                            <hr />
                            <h4 className=' text-capitalize web-title'>
                                5. Cancellation and Refund Policy
                            </h4>
                            <p>
                                <span className="d-block"><strong>Cancellation by Customer: </strong>
                                    Cancellations must be in writing or by email.</span>
                                Penalty in cancellation fee shall depend on the proximity of cancellation to the commencement of the particular trip.
                                <span className="d-block"><strong>Cancellation by Us: </strong>
                                    All these bookings are subject to cancellation for unforeseen events, with a refund made where appropriate.
                                    Refund consideration may take approximately 10 working days.</span></p>
                            <hr />
                            <h4 className=' text-capitalize web-title'>
                                6. Responsibilities of the Customer

                            </h4>
                            <p>
                                <span className="d-block">
                                    Keep real identity documents such white or green cards at all times and any other permits required temporarily.
                                </span>
                                <span className="d-block">
                                    Each traveler should respect local laws and cultural practices of the country of visit at any one given time.
                                </span>
                                <span className="d-block">
                                    Answer information requests promptly and as accurately as is possible
                                </span>
                            </p>
                            <hr />
                            <h4 className=' text-capitalize web-title'>
                                7. Responsibilities of Rajasthan Tour Packages
                            </h4>
                            <p>
                                <span className="d-block">We endeavor to give quality and accurate service delivery.</span>
                                <span className="d-block">
                                    Support is provided in conditions when an unexpected extraordinary circumstance occurs.
                                </span>
                                <span className="d-block">It is our practice to accompany claims for compensation, document preparations, legal documents or any form of professional service given in line with the Limitation Lease Act.</span>
                            </p>
                            <hr />
                            <h4 className=' text-capitalize web-title'>8. Limitation of Liability
                            </h4>
                            <p>
                                <span className="d-block">
                                    Rajasthan Tour Packages shall not be liable for any direct, indirect, or consequential losses, including:
                                </span>
                                <span className="d-block">
                                    Delays or complete cancellations because of acts of God or because of negligence of people such as drivers of vehicles involved in an accident.
                                </span>
                                <span className="d-block">
                                    Accident to / loss of personal effects during travel.
                                    Expenses that do not relate to a client in a way that the expenditures will be billed back to the client.
                                </span>
                            </p>
                            <hr />
                            <h4 className=' text-capitalize web-title'>9. Privacy Policy</h4>
                            <p>
                                Your privacy is important to us. We manage personal data credibly as described in our Privacy Policy.
                                By accessing our services you agree to our collection and processing of your data as stated herein.
                            </p>
                            <hr />
                            <h4 className='text-capitalize web-title'>10. Intellectual Property Rights
                            </h4>
                            <p>
                                <span className="d-block">
                                    It is expressly agreed that all the contents of this website including the text, graphics, and logos are the sole property of Rajasthan Tour Packages.
                                </span>
                                <span className="d-block">
                                    Any copying, distribution, and displaying of the content of this website without the permission of the copyright holder is prohibited.
                                </span>
                            </p>
                            <hr />
                            <h4 className='text-capitalize web-title'>11. Dispute Resolution
                            </h4>
                            <p>
                                <span className="d-block">
                                    Disputes are resolved amicably by negotiating besides, if the customers disagree with the companies’ decisions.
                                </span>
                                <span className="d-block">
                                    Disputes which cannot be resolved by mutual discussion will be governed by a court of competent jurisdiction, Jaipur, Rajasthan.
                                </span>
                            </p>
                            <hr />
                            <h4 className='text-capitalize web-title'>11. Updates to Terms and Conditions
                            </h4>
                            <p>
                                <span className="d-block">As a result, we will not post any notifications to our website regarding updates on these terms at any given time in the future.
                                </span>
                                <span className="d-block">The use of the website following the changes in the terms and conditions constitutes an agreement to such changes.
                                </span>
                            </p>
                            <hr />
                            <h4 className='text-capitalize web-title'>
                                12. Contact Us
                            </h4>
                            <p>
                                <span className="d-block">
                                    In case of any questions or problems feel free to contact The Community.
                                </span>
                                <span className="d-block">
                                    <strong>Email: </strong>
                                    <a href="mailto:mail@rajasthantravelhelpline.com" className="text-lowercase color-tertary" target="_blank">mail@rajasthantravelhelpline.com</a>
                                </span>
                                <span className="d-block">
                                    <strong>Phone: </strong>
                                    <a href="tel:+91-9024337038" className="text-lowercase color-tertary" target="_blank">
                                        +91-9024337038
                                    </a>
                                </span>
                                <span className="d-block">
                                    <strong>Whatsapp: </strong>
                                    <a href="https://wa.me/919166555888" className="text-lowercase color-tertary" target="_blank">+91-9166555888</a>
                                </span>
                                <hr />
                                <span className="d-block">
                                    <strong>Social Media: </strong>
                                </span>
                                <span className="d-block">
                                    <strong>Instagram: </strong>
                                    <a href="https://www.instagram.com/rajasthantravelhelpline/" className="text-lowercase color-tertary" target="_blank">
                                        https://www.instagram.com/rajasthantravelhelpline/</a>
                                </span>
                                <span className="d-block">
                                    <strong>Facebook: </strong>
                                    <a href="https://www.facebook.com/rajasthantravelhelpline/" className="text-lowercase color-tertary" target="_blank">https://www.facebook.com/rajasthantravelhelpline/</a>
                                </span>
                                <span className="d-block">
                                    <strong>Address: </strong>Rajasthan Tour Packages, Jaipur, Rajasthan, India
                                </span>
                                <hr />
                                Thank you for choosing Rajasthan Tour Packages. We hope you will find your traveling experience with our company worthwhile and to our expectations.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TnC;
