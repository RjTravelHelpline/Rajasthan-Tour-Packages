"use client"
import PackagesSlider from "./PackagesSlider";

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
                        <div className="row py-4 d-flex justify-content-center px-2">
                            <PackagesSlider exploreAll={false} packages={tourData} href='/' />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};