"use client";
import { useState, useEffect } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";


const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (typeof window !== "undefined") {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll back to the top of the page
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {isVisible && (
        <div
          className="back-to-top container d-flex justify-content-center align-items-center"
          onClick={scrollToTop}
        >
          <BsChevronDoubleUp className="back-to-top-icon" />
        </div>
      )}
    </>
  );
};

export default BackToTop;
