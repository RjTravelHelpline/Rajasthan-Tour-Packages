"use client"
import Breadcrumb from "@/components/Breadcrumb";
import { popularTourPackagesData } from "@/data/data";
import Link from "next/link";
import { Card } from "react-bootstrap";
import { IoLogoWhatsapp } from "react-icons/io";


const PopularTourPackages = () => {
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="popularTour" />
            {/* header */}
            <div className="container-fluid py-5 page-head-section">
                <div className="container">
                    <h1 className="text-capitalize">
                        popular <span className="fw-normal">tour packages</span>
                    </h1>
                </div>
            </div>
            <div className="container packages my-5">
                <div className="row py-4 d-flex align-items-stretch px-2">
                    {popularTourPackagesData.map((pkg, index) => {
                        const whatsappLink = `https://wa.me/919166555888?text=I am interested in the ${pkg.title} package for ₹${pkg.price}/-. Please provide more details.`;
                        return (
                            <div
                                key={index}
                                className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch px-2"
                            >
                                <Card className="card bg-transparent">
                                    <div className="card-image-container">
                                        <Card.Img src={pkg.imgSrc} alt="Card Package" />
                                    </div>
                                    <div className="row card-content d-flex align-items-center justify-content-center">
                                        <div className="w-100 card-header d-flex justify-content-between align-items-start pt-0 pb-0">
                                            <p className="fw-bold text-left package-duration w-auto">
                                                {pkg.duration}
                                            </p>
                                            <p className="price px-2 text-capitalize mb-1 w-auto">
                                                ₹{pkg.price}/-
                                            </p>
                                        </div>
                                        <div className="w-100 card-header d-flex justify-content-center flex-column align-items-start pt-0">
                                            <p className="text-capitalize w-100 package-title">
                                                {pkg.title}
                                            </p>
                                        </div>
                                        <div className="w-100 package-buttons d-flex justify-content-center align-items-center px-0">
                                            <div className="col-5">
                                                <Link
                                                    className="w-100 rounded-0 text-center d-block"
                                                    href={pkg.navigate}
                                                >
                                                    view
                                                </Link>
                                            </div>
                                            <div className="col-5">
                                                <button className="w-100 rounded-0">Enquire</button>
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
                </div>
            </div>
        </>
    );
};

export default PopularTourPackages;
