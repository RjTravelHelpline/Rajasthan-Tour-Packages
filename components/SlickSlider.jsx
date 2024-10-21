"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// Custom arrow components
const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <SlArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <SlArrowLeft />
    </div>
  );
};

const SlickSlider = ({ settings, children }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom previous arrow
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
    ...settings, // Allow custom settings to override default ones
  };

  // Check if settings have been provided for dots in mobile view
  if (settings && settings.dots !== undefined) {
    defaultSettings.responsive[1].settings.dots = settings.dots; // Update dots for mobile only
  }

  return <Slider {...defaultSettings}>{children}</Slider>;
};

export default SlickSlider;

// const SlickSlider = ({ settings = {}, children, showDots = false }) => {
//   const defaultSettings = {
//     dots: showDots,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           dots: showDots,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           dots: showDots,
//         },
//       },
//     ],
//     ...settings,
//   };

//   return <Slider {...defaultSettings}>{children}</Slider>;
// };

// <SlickSlider
//   settings={{
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: null,
//     prevArrow: null,
//   }}
//   showDots={true}
// >
//   <div className="rounded-4 pb-3 days-img-container">
//     <img
//       src={allCitiesImages.jaisalmer.jaisalmerDesert02.src}
//       className="w-100 rounded-4"
//     />
//   </div>
//   <div className="rounded-4 pb-3 days-img-container">
//     <img
//       src={allCitiesImages.jaisalmer.jaisalmerFort.src}
//       className="w-100 rounded-4"
//     />
//   </div>
// </SlickSlider>