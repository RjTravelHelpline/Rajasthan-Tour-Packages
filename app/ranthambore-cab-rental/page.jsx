'use client'
import Bread from "@/components/Bread";
import HeroBanner from "@/components/HeroBanner";
import { FaStarOfLife } from "react-icons/fa";
import { faq } from "./data";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";
import { Link } from "@/Utils/util";

const Page = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "rajasthan cab rental", link: "/rajasthan-cab-rental", active: false },
    { label: "Ranthambore cab rental", link: null, active: true },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active state
  };
  return (
    <>
      <HeroBanner
        slides={[
          { heading: "Ranthambore Cab Rental", subheading: "Discover the Wild Beauty of Ranthambore National Park" }
        ]}
        backgroundImage="/Images/Card/ranthambore01.webp" />
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
                {Link('Ranthambore National Park', 'https://www.rajasthantourpackages.in/ranthambore')} is a prestigious wildlife reserve in Rajasthan that is flooded with tourists, wildlife lovers and adventurers. For the best experience thus affordable and efficient cab services are crucial in such a large and diverse area. Likewise, regarding safety and convenience rides, we provide a memorable and safe wildlife trip to our valuable customers through Ranthambore Cab Rental.
              </p>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              > Why Choose <strong>Ranthambore Cab Rental</strong>?</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Comfortable Fleet</strong>
                    We provide all types of vehicles, from SUVs to tempo travelers depending on the number of passengers and their requirements.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Experienced Wildlife Guides</strong>
                    Self-driven by our local drivers who fully understand the park, get the best of your safari with expert advice.


                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Affordable and Transparent Pricing</strong>
                    Travel easily while responding to the free-of-charge, clear price listing with no hidden costs.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">24/7 Availability</strong>
                    Book your cab anytime with our reliable, round-the-clock customer support.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              >  <strong>Comprehensive </strong>Cab Services in Ranthambore</h2>
              <p className="px-3">
                Ranthambore Cab Rental offers a range of travel solutions, including:
              </p>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Safari Transfers</strong>
                    We make it easy to visit <strong>Ranthambore Tiger Reserve</strong> with professional assistance during drop-off and pick-up.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Local Sightseeing</strong>
                    It provides easy access to Ranthambore Fort, Padam Lake and Kachida Valley.



                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Airport Transfers</strong>
                    Our cab services will help you plan a comfortable journey to sites like Jaipur, Bundi, and Kota.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Outstation Trips</strong>
                    Special packages for those interested in enjoying nature, especially wildlife photographers, to have the best safari adventure.


                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Custom Packages</strong>
                    Special packages for those interested in enjoying nature, especially wildlife photographers, to have the best safari adventure.


                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              ><strong>Top Attractions</strong> Covered by Ranthambore  Cab</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Ranthambore National Park</strong>
                    See the royal Bengal tiger and see a variety of colourful flowers and animals in their natural environment.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Ranthambore Fort</strong>
                    Spend some time around the great Ranthambore Fort and get an excellent view of the park and the other regions.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Padam Lake</strong>
                    Check out this lovely, calm lake for wildlife viewing and appealing scenery.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Kachida Valley</strong>
                    It is a perfect leopard country with breathtaking views of the desert.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              >Explore <strong>Ranthambore</strong> with Ease</h2>
                <p className="px-2 py-1">
                  Travelling in and around Ranthambore has never been more comfortable with {Link('Ranthambore Cab Rental', 'https://www.jaipurtaxiservice.com/citywise-taxi-fares/ranthambhore-taxi-service.html')}. Our dedicated services ensure a seamless and safe wildlife adventure making your Ranthambore experience memorable. Whether you are coming for that challenging safari or if you have other destinations nearby, our cab service will ensure that you get the best ride.
                </p>
                <p className="px-2 py-1">
                  Plan your {Link('Wildlife Sanctuary Tours', 'https://www.rajasthantourpackages.in/blog/wildlife-trails-rajasthan-nature-adventures')} in Rajasthan today and explore Ranthambore with <strong>Ranthambore Cab Rental</strong>.
                </p>
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
