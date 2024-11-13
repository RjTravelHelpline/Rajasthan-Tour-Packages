"use client"; // Mark this component as client-side

import React, { useState } from "react";

export default function ReadMoreToggle({ contentArray, tag = 'div', className = '' }) {
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        setReadMore(!readMore);
    };

    return (
        <>
            {/* Conditionally render each item in the content array based on state */}
            {readMore &&
                React.createElement(
                    tag,
                    { className },
                    contentArray.map((item, index) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))
                )
            }
            <button
                className="read-more-btn d-flex position-absolute bottom-0"
                onClick={handleReadMore}
            >
                {readMore ? <>Less</> : <>More</>}
            </button>
        </>
    );
}
