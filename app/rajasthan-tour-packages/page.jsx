'use client'
import {
  _02DaysToursData,
  _03DaysToursData,
  _04DaysToursData,
  _05DaysToursData,
  _06DaysToursData,
  _07DaysToursData,
  _08DaysToursData,
  _09DaysToursData,
  _10DaysToursData,
  _11To15DaysToursData,
} from "@/data/data"
import Breadcrumb from '@/components/Breadcrumb';
import RTPNav from '@/components/RTPNav';
import { TourPackageSection } from '@/components/TourPackageSection';
import { useEffect, useState } from "react";


const RajasthanTourPackages = () => {
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

  const _02Days = packages.filter(
    (pkg) => pkg.nights === 1 && pkg.days === 2
  );
  const _03Days = packages.filter(
    (pkg) => pkg.nights === 2 && pkg.days === 3
  );
  const _04Days = packages.filter(
    (pkg) => pkg.nights === 3 && pkg.days === 4
  );
  const _05Days = packages.filter(
    (pkg) => pkg.nights === 4 && pkg.days === 5
  );
  const _06Days = packages.filter(
    (pkg) => pkg.nights === 5 && pkg.days === 6
  );
  const _07Days = packages.filter(
    (pkg) => pkg.nights === 6 && pkg.days === 7
  );
  const _08Days = packages.filter(
    (pkg) => pkg.nights === 7 && pkg.days === 8
  );
  const _09Days = packages.filter(
    (pkg) => pkg.nights === 8 && pkg.days === 9
  );
  const _10Days = packages.filter(
    (pkg) => pkg.nights === 9 && pkg.days === 10
  );

  const _11_15Days = packages.filter(
    (pkg) => pkg.nights >= 11 && pkg.days >= 12
  );

  return (
    <>
      <Breadcrumb breadcrumbKey="tourByDaysHome" />

      {/* header */}
      <div className="container-fluid bg-black text-white py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <h1 className="sec-subhead web-title">
            {' '}
            <span className="d-block fw-normal fs-5 color-tertary text-uppercase">

            </span>
            Rajasthan Tour packages
          </h1>
          <div className="col-12 col-lg-6 col-sm-10">
            <hr />
          </div>
          <p className="color-tertary text-center fw-normal text-capitalize">Discover Rajasthan&apos;s charm with our tour packages</p>
        </div>
      </div>

      {/* Navigation */}
      <RTPNav />

      {/* Navigation Links */}
      <div className="container-fluid px-0">
        <div className="row tour-packages-nav">
          {["02", "03", "04", "05", "06", "07", "08", "09", "10", "11-15"].map((day, index) => (
            <a href={`#${day}-days`} key={index} className="text-capitalize">
              {day} <span className="web-title">days</span>
            </a>
          ))}
        </div>
        <TourPackageSection days="02" tourData={_02Days} />
        <TourPackageSection days="03" tourData={_03Days} />
        <TourPackageSection days="04" tourData={_04Days} />
        <TourPackageSection days="05" tourData={_05Days} />
        <TourPackageSection days="06" tourData={_06Days} />
        <TourPackageSection days="07" tourData={_07Days} />
        <TourPackageSection days="08" tourData={_08Days} />
        <TourPackageSection days="09" tourData={_09Days} />
        <TourPackageSection days="10" tourData={_10Days} />
        <TourPackageSection days="11-15" tourData={_11_15Days} />
      </div>

      {/* bread crumb */}

    </>
  );
};

export default RajasthanTourPackages;
