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
            </div>
            <WhyUs />
            <Services />
            <Reviews />
        </>
    )
}