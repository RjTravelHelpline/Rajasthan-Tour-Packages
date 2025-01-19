'use client'
import Breadcrumb from "@/components/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import ItineraryFaqs from "@/components/ItineraryFaqs";
import TourPackages from "@/components/TourPackages";
import { how_to_reach, page_titles, tour_faqs, tour_overview } from "./data";
import { useEffect, useState } from "react";

const Page = () => {
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
  const filteredTitles = [
    'Udaipur Mewar Tour',
    'Golden Triangle Tour',
    'Jaipur Ranthambore Weekend Tour',
    'Jaipur - Jaisalmer Package Tour',
    'Rajasthan Budget Tour',
    'Rajasthan Honeymoon Tour'
  ];
  const altered_packages = packages.filter((pkg) => filteredTitles.includes(pkg.title));
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromMumbai" />

      {/* banner */}
      <HeroBanner backgroundImage='/Images/Banners/mumbai-banner.jpg' slides={page_titles} />

      {/* overview */}
      <div className="container-fluid px-0 mt-3">
        <div className="container days-container overview">
          <div className="row d-flex justify-content-center align-items-center days-overview px-2">
            <div className="col-12 col-lg-11 col-sm-12 insider px-0">
              <h3
                className="text-capitalize px-3 mb-3 text-center fw-normal"
              >{tour_overview.title}</h3>
              <p
                className="text-justify px-3 text-black"
              >
                {tour_overview.content}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* overview */}
      <div className="container-fluid px-0 mt-3">
        <div className="container days-container overview">
          <div className="row d-flex justify-content-center align-items-center days-overview px-2">
            <div className="col-12 col-lg-11 col-sm-12 insider px-0">
              <h3
                className="text-capitalize px-3 mb-3 text-center fw-normal text-black"
              >{how_to_reach.title}</h3>
              <p
                className="text-justify px-3 text-black"
              >
                {how_to_reach.content}
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
                {altered_packages.map((pkg, index) => (
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
            <h3 className="mb-4 text-center">
              Frequently <span className="fw-normal">Asked Questions</span>
            </h3>
            <ItineraryFaqs faqs={tour_faqs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
