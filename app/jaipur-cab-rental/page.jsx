"use client"
import Breadcrumb from "@/components/Breadcrumb";
import SlickSlider from "@/components/SlickSlider";
import { allCabRentals } from "@/data/cabRentalData";
import { Card } from "react-bootstrap";
import { FaArrowRight, FaFire, FaSnowflake, FaSuitcase, FaUserFriends } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const JaipurCabRental = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="jaipurCab" />
      <div className="container-fluid px-0 py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">jaipur cab rental</h1>
        </div>
      </div>
      <div className="container-fluid section-02">
        <div className="container py-5 packages rental-container">
          <div className="row py-2 px-2 d-flex justify-content-center align-items-center">
            <h2 className="w-auto text-capitalize home-head">
              <span className="fw-normal">popular </span> cabs
            </h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            <SlickSlider>
              {allCabRentals.map((rental, index) => {
                const whatsappLink = `https://wa.me/919166555888?text=I am interested in the ${rental.title} package for ₹${rental.price}/-. Please provide more details.`;
                return (
                  <div
                    key={index}
                    className="col-12 col-sm-12 col-md-6 col-lg-4 mb-5 d-flex align-items-stretch px-2 rental-container"
                  >
                    <Card className="card bg-transparent">
                      <div className="card-image-container">

                        <Card.Img src={rental.imgSrc} title={rental.alt} alt={rental.imgTitle} />
                      </div>
                      <div className="row card-content d-flex align-items-center justify-content-center gap-0">
                        <div className="w-100 card-header d-flex justify-content-center flex-column align-items-start pt-0">
                          <p className="text-capitalize w-100 package-title text-center text-black">
                            {rental.title}
                          </p>
                        </div>
                        <div className="w-100 card-header d-flex justify-content-center gap-4 align-items-start pt-0 package-category py-3">
                          <div className="d-flex flex-column justify-content-between align-items-center">
                            {' '}
                            <FaUserFriends className="icon" />
                            <p className="pt-2">4+1</p>
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            <FaSuitcase className="icon" />
                            <p className="pt-2">3</p>
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            <FaSnowflake className="icon" />
                            <p className="pt-2">AC</p>
                          </div>
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            {' '}
                            <FaFire className="icon" />
                            <p className="pt-2">Heater</p>
                          </div>
                        </div>
                        <div className="w-100 card-header d-flex justify-content-between align-items-start flex-column pt-0 pb-0 mb-2">
                          <p className="price px-2 text-capitalize mb-2 w-auto">
                            {rental.priceOne}
                          </p>
                          <p className="price px-2 text-capitalize mb-2 w-auto">
                            {rental.priceTwo}
                          </p>
                        </div>
                        <div className="w-100 package-buttons d-flex justify-content-center align-items-center px-0">
                          <div className="col-10">
                            <button
                              className="w-100 rounded-3"
                              onClick={() => handleShow(rental.title)}
                            >
                              Enquire now <FaArrowRight />
                            </button>
                          </div>
                          <div className="col-2 d-flex justify-content-end">
                            <a
                              href={whatsappLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-center whatsapp-logo"
                            >
                              <IoLogoWhatsapp />
                            </a>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </SlickSlider>
          </div>
        </div>
      </div>
    </>
  );
};

export default JaipurCabRental;
