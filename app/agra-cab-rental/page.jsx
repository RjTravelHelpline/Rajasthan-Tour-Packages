'use client'
import Bread from "@/components/Bread";
import HeroBanner from "@/components/HeroBanner";
import { FaStarOfLife } from "react-icons/fa";
import { faq } from "./data";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";

const Page = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "rajasthan cab rental", link: "/rajasthan-cab-rental", active: false },
    { label: "agra cab rental", link: null, active: true },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active state
  };
  return (
    <>
      <HeroBanner
        slides={[
          { heading: "agra Cab Rental", subheading: "Visit the City of Love with Comfort" }
        ]}
        backgroundImage="/Images/Banners/jaipur-banner02.webp" />
      <Bread items={breadcrumbItems} />
      {/* bread crumb */}
      <div className="container-fluid px-0 pt-4 ">
        <div className="container days-container overview">
          <div className="row d-flex justify-content-center align-items-center days-overview px-2 days-highlights">
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-bold web-title"
              > overview</h2>
              <p
                className="home-para px-3"
              >
                Agra is the city where one of the world&apos;s most famous historical and romantic buildings, the Taj Mahal, is located and contains an incredible amount of expressive history. The most important factor that discretion and planning will help to guarantee is reasonable and comparatively safe cab service availability. Agra Cab Rental provides the best and most affordable transport services for exploring this beautiful city.

              </p>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              > Why Choose <strong>agra Cab Rental</strong>?</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Wide Range of Vehicles</strong>
                    Select from sedans, SUVs, and tempo travellers to meet your group size, as well as your choice of vehicle type.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Experienced Drivers</strong>
                    It will interest you to know that our drivers are competent in matters concerning Agra&apos;s history and tourist sites and hence give relevant and comfortable rides with our Agra Sightseeing Package.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Affordable Pricing</strong>
                    No additional costs and our charges are reasonable and easy to understand.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">24/7 Availability</strong>
                    We have standby 24/7 emergency travel assistance to guarantee you are not stressed during your trip.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              >  <strong>Comprehensive </strong>Cab Services in agra</h2>
              <p className="px-3">
                agra Cab Rental offers a range of travel solutions, including:
              </p>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Local Sightseeing</strong>
                    All tourist attractions in Agra, including the Taj Mahal, Agra Fort and Fatehpur Sikri should be visited.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Airport Transfers</strong>
                    New Kheria airport has a well-developed transfer connection and is relatively easy to reach.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Outstation Trips</strong>
                    Experience comfortable cab services while enjoying nearby sites such as Jaipur, Delhi and the religious site Mathura.


                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Custom Packages</strong>
                    Special offers for family, couple, and single travellers.


                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              ><strong>Top Attractions</strong> Covered by agra Cab</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Taj Mahal</strong>
                    A UNESCO World Heritage Site and one of the World&apos;s Seven Wonders.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Agra Fort</strong>
                    An old fortress constructed of red sandstone to depict the style of the Mughal Empire.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Fatehpur Sikri</strong>
                    A palace city that housed many wonderful palaces and courtyards.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Mehtab Bagh</strong>
                    Fascinating view of the sunset in a garden opposite the Taj Mahal.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              >Explore <strong>agra</strong> with Ease</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 py-1">
                  Agra is best explored with Agra Cab Rental.When you are watching the views such as the Taj Mahal or moving through bazaars of old cities, you will get a safe and exciting ride with our cab services. So, you sit back and leave the enormous tasks of giving your Rajasthan tours and travel services while you relish Agra&apos;s cultural tourism services.
                </p>
                <p className="px-2 py-1">
                  Plan your Agra trip today with Agra taxi service. Book your ride now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq's */}
      <div className="container-fluid px-0 mt-4 section-03">
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 col-sm-12">
              <h3 className="mb-4 text-center web-title">
                Frequently <span className="fw-normal">Asked Questions</span>
              </h3>
              <div className="faq cab-rental-accordion">
                <ol>
                  {faq.map((item, index) => (
                    <li key={index}>
                      <p
                        className="p-2 cursor-pointer web-title fw-bold d-flex align-items-center justify-content-between"
                        onClick={() => handleToggle(index)}
                      >
                        {item.question}
                        <span className="bg-tertary-down p-2 color-tertary d-flex align-items-center rounded-5">
                          {activeIndex === index ? <BiMinus /> : <BiPlus />}
                        </span>
                      </p>
                      <div
                        id={`faq-${index}`}
                        className={`${activeIndex === index ? "active" : "hidden"
                          }`}
                      ><p className="px-2">{activeIndex === index ? item.answer : ''}</p>
                      </div>
                      <hr />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
