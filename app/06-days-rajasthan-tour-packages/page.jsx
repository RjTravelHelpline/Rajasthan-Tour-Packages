'use client'
import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _06DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";
import { useEffect, useState } from "react";

const SixDaysRajasthanTourPackages = () => {
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

  const _06Days = packages.filter(
    (pkg) => pkg.nights === 5 && pkg.days === 6
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
      duration: '05 nights • 06 days',
      title: '06 days rajasthan tour packages',
      subhead: null
    },
  ];
  return (
    <>
      <Breadcrumb breadcrumbKey="_06Days" />
      {/* header */}
      <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
        <TourCarousel images={images} content={content} />
      </div>

      {/* packages */}
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_06Days.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SixDaysRajasthanTourPackages;