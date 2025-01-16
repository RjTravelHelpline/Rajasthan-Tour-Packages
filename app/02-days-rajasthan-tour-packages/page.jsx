'use client'
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _02DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";
import { useEffect, useState } from "react";
import { tourOverview } from "./data";

const TwoDaysRajasthanTourPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('/api/allTourPackages');
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, []);

  const _02Days = packages.filter(
    (pkg) => pkg.nights === 1 && pkg.days === 2
  );

  const images = [
    {
      src: allCitiesImages.jaipur.jaipurBanner01.src,
      alt: allCitiesImages.jaipur.jaipurBanner01.alt,
      title: allCitiesImages.jaipur.jaipurBanner01.title
    },
  ];

  const content = [
    {
      subheading: '01 night • 02 days',
      heading: '02 days rajasthan tour packages',
    },
  ];
  return (
    <>
      <Breadcrumb breadcrumbKey="_02Days" />
      <HeroBanner backgroundImage='/Images/Banners/02days-rajasthan-tour.jpg' slides={content} />

      <div className="container-fluid px-0 mt-3">
        <div className="container days-container overview">
          <div className="row d-flex justify-content-center align-items-center days-overview px-2">
            <div className="col-12 col-lg-11 col-sm-12 insider px-0">
              <h3
                className="text-capitalize px-3 mb-3 text-center fw-normal"
              >{tourOverview.title}</h3>
              <div
                className="text-justify px-3"
              >
                {tourOverview.content}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 my-3">
        <div className="container overview">
          <div className="row px-2 d-flex justify-content-center align-items-center package-more">
            <div className="col-12 col-lg-11 col-sm-12 cost-table insider px-0 packages">
              <h3 className="text-capitalize px-3 text-center fw-normal mb-2">
                <span className="fw-bold">packages</span>
              </h3>
              <div className="py-2 d-flex align-items-stretch flex-wrap px-2">
                {_02Days.map((pkg, index) => (
                  <TourPackages key={index} pkg={pkg} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoDaysRajasthanTourPackages;
