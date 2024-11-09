"use client"; // Mark this component as client-side

import React, { useState } from "react";

export default function ReadMoreToggle({ children, buttonText, tag = 'div', className = '' }) {
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        setReadMore(!readMore);
    };

    return (
        <>
            {/* Conditionally render the children content based on state */}
            {readMore && React.createElement(tag, { className }, children)}

            <button
                className="read-more-btn d-flex position-absolute bottom-0"
                onClick={handleReadMore}
            >
                {readMore ? <>Less</> : <>More</>}
            </button>
        </>
    );
}
