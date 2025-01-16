"use client"
import Link from "next/link";
import PackagesSlider from "./PackagesSlider";
import { MdArrowOutward } from "react-icons/md";

export const TourPackageSection = ({ days, tourData }) => {
    return (
        <>
            <div className="container-fluid px-0 section-02 pt-4">
                <div className="container packages">
                    <div
                        className="row tour my-3 justify-content-center align-items-stretch"
                        id={`${days}-days`}
                    >
                        <div className="row w-100 py-3 d-flex flex-column px-0">
                            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                                <h3 className="text-capitalize fw-normal web-title">
                                    <span className="fw-bold">{days} days</span> tour packages
                                </h3>
                            </div>
                        </div>
                        <div className="row py-4 d-flex justify-content-center px-0">
                            <PackagesSlider exploreAll={false} packages={tourData} href='/' />
                            <div className="col-12 d-flex px-2 justify-content-center align-items-center gap-2">
                                <hr className="w-25" />
                                <Link href={`/${days}-days-rajasthan-tour-packages`} className="text-capitalize fw-normal web-title text-black d-flex align-items-center gap-1 bg-tertary-down rounded-5 p-2 px-3 fw-bold">
                                    <span>explore all</span>
                                    <MdArrowOutward className="color-tertary" />
                                </Link>
                                <hr className="w-25" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};