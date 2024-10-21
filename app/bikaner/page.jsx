"use client"
import Breadcrumb from "@/components/Breadcrumb";
import { allCitiesImages } from "@/data/imageData";
import { Carousel } from "react-bootstrap";

const Bikaner = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="bikaner" />
      {/* banner */}
      <div className="container-fluid home-banner destination-banner position-relative px-0">
        <Carousel fade pause={false} controls={false}>
          <Carousel.Item>
            <img
              src={allCitiesImages.bikaner.bikanerBanner.src}
              alt="Home Banner"
            />
            <Carousel.Caption>
              <h1 className="text-capitalize">bikaner</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Bikaner;
