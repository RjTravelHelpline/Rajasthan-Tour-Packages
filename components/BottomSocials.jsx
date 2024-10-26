import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const BottomSocials = () => {
  return (
    <>
      {/* bottom contact options */}
      <div className="container-fluid">
        <div className="bottom-contact-container row overflow-hidden d-flex  align-items-center p-2">
          <div className="w-auto d-flex justify-content-start align-items-center gap-2">
            <a href="https://wa.me/919166555888" target="_blank" aria-label="go to phone">
              <IoCall className="fixed-footer-icon" />
            </a>
            <a
              href="mailto:mail@rajasthantravelhelpline.com"
              target="_blank"
              className="my-1"
              aria-label="go to mail"
            >
              <MdEmail className="fixed-footer-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomSocials;
