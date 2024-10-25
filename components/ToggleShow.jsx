"use client"
import { useEffect, useState } from "react";

export const useToggle = (initialState = false) => {
    const [isToggled, setIsToggled] = useState(initialState);

    const toggle = () => setIsToggled(!isToggled);

    return [isToggled, toggle];
};

export const useScrollSpy = (sectionSelector, linkSelector, offset) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const sections = document.querySelectorAll(sectionSelector);
                const navLinks = document.querySelectorAll(linkSelector);

                let currentSection = '';
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - window.innerHeight / offset) {
                        currentSection = section.getAttribute('id');
                    }
                });

                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentSection}`) {
                        link.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [sectionSelector, linkSelector, offset]);
};

export const useSmoothScroll = (linkSelector, offset) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const navLinks = document.querySelectorAll(linkSelector);
            navLinks.forEach((link) => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);
                    const offsetTop = targetSection.offsetTop - offset;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth',
                    });
                });
            });

            return () => {
                navLinks.forEach((link) => {
                    link.removeEventListener('click', () => { });
                });
            };
        }
    }, [linkSelector, offset]);
};
