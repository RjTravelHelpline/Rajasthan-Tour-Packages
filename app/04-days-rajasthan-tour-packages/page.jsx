'use client'
import Breadcrumb from "@/components/Breadcrumb";
import ItineraryFaqs from "@/components/ItineraryFaqs";
import TourPackages from "@/components/TourPackages";
import { _04DaysToursData } from "@/data/data";
import { useEffect, useState } from "react";
import { page_titles, tour_faqs, tour_overview } from "./data";
import HeroBanner from "@/components/HeroBanner";

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
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="_04Days" />

      {/* banner */}
      <HeroBanner backgroundImage='/Images/Banners/02days-rajasthan-tour.jpg' slides={page_titles} />

      {/* overview */}
      <div className="container-fluid px-0 mt-3">
        <div className="container days-container overview">
          <div className="row d-flex justify-content-center align-items-center days-overview px-2">
            <div className="col-12 col-lg-11 col-sm-12 insider px-0">
              <h3
                className="text-capitalize px-3 mb-3 text-center fw-normal"
              >{tour_overview.title}</h3>
              <p
                className="text-justify px-3"
              >
                {tour_overview.content}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid px-0 my-3">
        <div className="container overview">
          <div className="row px-2 d-flex justify-content-center align-items-center package-more">
            <div className="col-12 col-lg-11 col-sm-12 cost-table insider px-0 packages">
              <h3 className="text-capitalize px-3 text-center fw-normal mb-2">
                <span className="fw-bold">packages</span>
              </h3>
              <div className="py-2 d-flex align-items-stretch flex-wrap px-2">
                {_04Days.map((pkg, index) => (
                  <TourPackages key={index} pkg={pkg} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* faq's */}
      <div className="container-fluid px-0 section-03">
        <div className="container py-5">
          <div className="row">
            {tour_faqs && tour_faqs.length > 0 && (
              <>
                <h3 className="mb-4 text-center">
                  Frequently <span className="fw-normal">Asked Questions</span>
                </h3>
                <ItineraryFaqs faqs={tour_faqs} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FourDaysRajasthanTourPackages;