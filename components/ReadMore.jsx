"use client"; // Mark this component as client-side

import { useState } from "react";

export default function ReadMoreToggle({ children, buttonText  }) {
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        setReadMore(!readMore);
    };

    return (
        <>
            {/* Conditionally render the children content based on state */}
            {readMore && <div>{children}</div>}

            <button
                className="read-more-btn d-flex position-absolute bottom-0 home-read-more"
                onClick={handleReadMore}
            >
                {readMore ? <>Show Less</> : <>Read More</>}
            </button>
        </>
    );
}
