'use client'
import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { _04DaysToursData } from "@/data/data";
import { allCitiesImages } from "@/data/imageData";
import { useEffect, useState } from "react";

const FourDaysRajasthanTourPackages = () => {
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

  const _04Days = packages.filter(
    (pkg) => pkg.nights === 3 && pkg.days === 4
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
      duration: '03 nights • 04 days',
      title: '04 days rajasthan tour packages',
      subhead: null
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="_04Days" />
      {/* header */}
      <div className="container-fluid days-banner-container home-banner destination-banner px-0 bg-tertary-down">
        <TourCarousel images={images} content={content} />
      </div>
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_04Days.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FourDaysRajasthanTourPackages;