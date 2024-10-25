"use client"
import { useEffect, useState } from "react"
import Reviews from "./Reviews"
import Services from "./Services"
import WhyUs from "./WhyUs"

export const AboutUs = () => {
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
            <div className="container-fluid bg-black">
                {/* <div className="container ">
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
                </div> */}
            </div>
            <WhyUs />
            <Services />
            <Reviews />
        </>
    )
}