"use client"
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import { useEffect, useState } from "react";
const About = () => {
    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);
    return (
        <>
            <div id="about" className="py-4 container-fluid">
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
            <div className="container-fluid bg-black about-nav">
                <div className="container ">
                    <hr className="m-0 p-0" />
                    <div className="row w-100 d-flex justify-content-center flex-nowrap bg-black">
                        <a href="#why-us" className={activeLink === "why-us" ? "active" : ""}>
                            Why Us
                        </a>
                        <a
                            href="#services"
                            className={activeLink === "services" ? "active" : ""}
                        >
                            Services
                        </a>
                        <a
                            href="#testimonials"
                            className={activeLink === "testimonials" ? "active" : ""}
                        >
                            Testimonials
                        </a>
                        <a
                            href="#gallery"
                            className={activeLink === "gallery" ? "active" : ""}
                        >
                            Gallery
                        </a>
                    </div>
                </div>
            </div>
            <section id="why-us">
                <WhyUs />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="testimonials">
                <Reviews />
            </section>
            <section id="gallery">
                <Gallery />
            </section>
        </>
    );
};

export default About;
