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
    { label: "jaisalmer cab rental", link: null, active: true },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active state
  };
  return (
    <>
      <HeroBanner
        slides={[
          { heading: "jaisalmer Cab Rental", subheading: "Explore the Golden City with Comfort" }
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
                Jaisalmer is famous as the golden city of Rajasthan in the state, showing widespread architectural structure across the dunes and energetic folk culture. For the best of its taste, make sure to travel using the most reliable cab services for convenience and non-refusal during the trip. Our Jaisalmer Cab Rental services will ensure you see this lovely city comfortably without worrying about transport.
              </p>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              > Why Choose <strong>Jaisalmer Cab Rental</strong>?</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Diverse Fleet of Vehicles</strong>
                    Depending on your travel needs, G-Force provides different options for transport, starting with sedans, moving to SUVs, and tempo travellers.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Experienced Drivers</strong>
                    Our drivers know Jaisalmer’s attractions and offer safe, courteous, and expert guidance.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Affordable Pricing</strong>
                    Pricing for this service is transparent, with no additional charges, making our service affordable and more efficient.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">24/7 Availability</strong>
                    Book your cab anytime with our round-the-clock customer support.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              >  <strong>Comprehensive </strong>Cab Services in Jaisalmer</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Local Sightseeing</strong>
                    Find places like Jaisalmer Fort, Patwon Ki Haveli, or the Sam Sand Dunes in our expertly guided cars.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Airport Transfers</strong>
                    You can make punctual and comfortable transfers from Jaisalmer Airport.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Outstation Trips</strong>
                    Indulge nearby attractions like Bikaner, Jodhpur, and Mount Abu with your comfortable outstation cab services.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Custom Packages</strong>
                    We provide flexible packages tailored to your travel plans whether a family trip or a solo adventure.

                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              ><strong>Top Attractions</strong> Covered by Jaisalmer  Cab</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Jaisalmer Fort</strong>
                    Find out about this beautiful fort, a world heritage site famous for its architecture and scenic beauty.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Patwon Ki Haveli</strong>
                    Visit the small carved havelis and get lost in the history of this beautiful city Jaisalmer.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Sam Sand Dunes</strong>
                    Have an exciting camel ride and have the auditor realize how it feels to be in the humongous Thar Desert when the sun sets.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Gadsisar Lake</strong>
                    Stroll along this artificial lake primarily featured as the centre of the temple and gardens.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              >Explore <strong>Jaisalmer</strong> with Ease</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 py-1">
                  Travelling in Jaisalmer has never been easier with Jaisalmer Cab Rental. Our services help you get the comfort needed to tour the city practically, which goes with exploring the city’s secrets. Whether you’re visiting for cultural exploration, adventure or leisure our reliable cab service guarantees a memorable Rajasthan tour and travel experience.
                </p>
                <p className="px-2 py-1">
                  Book your trip with Jaisalmer Cab Rental now and enjoy your Jaisalmer journey to the fullest today.
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
