"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import React, { useEffect, useState } from "react";

const NextArrow = ({ onClick, disabled }) => {
  return (
    <div
      className={`custom-arrow custom-next ${disabled ? "slide-arrow-disabled text-muted" : ""}`}
      onClick={!disabled ? onClick : null}>
      <SlArrowRight
        className={`${disabled ? "text-muted" : ""}`}
      />
    </div>
  );
};

const PrevArrow = ({ onClick, disabled }) => {
  return (
    <div
      className={`custom-arrow custom-prev ${disabled ? "slide-arrow-disabled text-muted" : ""}`}
      onClick={!disabled ? onClick : null}>
      <SlArrowLeft className={`${disabled ? "text-muted" : ""}`} />
    </div>
  );
};

const SlickSlider = ({ settings, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);
  const defaultSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: (
      <NextArrow
        disabled={currentSlide >= totalSlides - (settings?.slidesToShow || 3)}
      />
    ),
    prevArrow: <PrevArrow disabled={currentSlide === 0} />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
    ...settings,
  };


  if (settings && settings.dots !== undefined) {
    defaultSettings.responsive[1].settings.dots = settings.dots;
  }

  useEffect(() => {
    const clonedSlides = document.querySelectorAll('.slick-slide.slick-cloned');
    clonedSlides.forEach((slide) => {
      slide.setAttribute('aria-hidden', 'false');
    });
  }, []);

  return <Slider {...defaultSettings}>{children}</Slider>;
};

export default SlickSlider;