import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import breadcrumbData from "@/data/data";
import Link from "next/link";

const Breadcrumb = ({ breadcrumbKey }) => {
  const items = breadcrumbData[breadcrumbKey] || [];

  return (
    <div className="container-fluid breadCrumb-container bg-black">
      <hr className="m-0 p-0" />
      <div className="container breadCrumb bg-black text-white py-1">
        <div className="row w-auto d-flex justify-content-start align-items-center">
          <div className="col d-flex flex-wrap justify-content-start align-items-center">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {item.link ? (
                  <Link href={item.link} className="inactive-bread">
                    {item.label}
                  </Link>
                ) : (
                  <p className="active-bread mb-0">{item.label}</p>
                )}
                {index < items.length - 1 && (
                  <MdArrowForwardIos className="mx-2 bread-icon" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
