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
    { label: "jodhpur cab rental", link: null, active: true },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active state
  };
  return (
    <>
      <HeroBanner
        slides={[
          { heading: "jodhpur Cab Rental", subheading: "Discover the Blue City with Comfort and Ease" }
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
                Jodhpur is famous in taxis as the Blue City of India. It has history, forts, and has the unique flavour of royalty. Jodhpur Taxis services that are efficient and easily accessible are crucial to make these beautiful destinations and this city in particular available. Jodhpur Cab Rental provides the most convenient, comfortable, safe, overall, and easy way for visitors to travel in Jodhpur.

              </p>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              > Why Choose <strong>jodhpur Cab Rental</strong>?</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Vast Fleet of Vehicles</strong>
                    Wide-ranging services are offered to meet everyone&apos;s needs from executive sedans to luxury SUVs and sedans.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Experienced Drivers</strong>
                    Hire our drivers today and be a guaranteed safe and knowledgeable driver across Jodhpur.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Affordable Pricing</strong>
                    Get to travel without more hurdles because the charges have been enumerated without other extras.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">24/7 Availability</strong>
                    Book a cab anytime with our reliable, round-the-clock customer service.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              >  <strong>Comprehensive </strong>Cab Services in jodhpur</h2>
              <p className="px-3">
                Jodhpur Cab Rental offers a range of travel solutions, including:
              </p>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Local Sightseeing</strong>
                    Find out about famous landmarks such as Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace and more with our guided cab tours for Jodhpur Sightseeing.


                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Airport Transfers</strong>
                    Residents and visitors can enjoy our door-to-door pick-up and drop-off Driver  services to and from the Jodhpur Airport.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Outstation Trips</strong>
                    Ensure nearby cities like Osian, Mandore, and Kumbhalgarh with our comfortable outstation cab services.


                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Custom Packages</strong>
                    Customizable packages for solo travellers families and groups to meet your specific travel preferences.

                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              ><strong>Top Attractions</strong> Covered by jodhpur  Cab</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Mehrangarh Fort</strong>
                    It helps you walk through one of the prominent forts of India, which has some lovely architecture and a breathtaking view of the town.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Jaswant Thada</strong>
                    This large marble structure is a cenotaph beside the beautifully landscaped gardens and water fountains.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Umaid Bhawan Palace</strong>
                    Also you can see this attractive palace, which has now been transformed into an incredible hotel.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Clock Tower and Sardar Market</strong>
                    Realise the local culture of Jodhpur by exploring genuine bazaars and Local Markets.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              >Explore <strong>jodhpur</strong> with Ease</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 py-1">
                  Travelling in Jodhpur has never been more convenient with Jodhpur Cab Rental. This guide aims to help you safely navigate the impressive cultural and architectural landmarks and breathtaking views of this dynamic city. Whether it’s your first visit or your twelve, our reliable cab service will ensure your seamless experience.

                </p>
                <p className="px-2 py-1">
                  Plan your adventure today and Find Jodhpur hassle-free with Jodhpur Cab Rental.
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
