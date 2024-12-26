"use client";
import { useState, useEffect } from "react";
import { IoArrowUp } from "react-icons/io5";
import { MdArrowUpward } from "react-icons/md";
import { PiArrowUp } from "react-icons/pi";


const BlogBackToTop = () => {
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
          className="blog-back-to-top back-to-top container d-flex justify-content-center align-items-center"
          onClick={scrollToTop}
        >
          <PiArrowUp className="back-to-top-icon p-2 fs-1"/>
        </div>
      )}
    </>
  );
};

export default BlogBackToTop;
