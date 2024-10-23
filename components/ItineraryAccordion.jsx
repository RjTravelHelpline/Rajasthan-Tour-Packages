"use client"

import { Accordion } from "react-bootstrap";

const ItineraryAccordion = ({ tourItinerary }) => {
    return (
        <Accordion className="w-100">
            {tourItinerary.content.map((item, index) => (
                <Accordion.Item
                    className="w-100 d-flex justify-content-between align-items-center flex-column accord-item"
                    eventKey={index.toString()}
                    key={index}
                >
                    <Accordion.Header className="d-flex w-100 justify-content-between accord-head bg-white">
                        <div className="d-flex flex-column">
                            <h3 className="mb-0 accordion-question fw-normal fw-bold text-uppercase w-100 itinerary-title">
                                {item.day}
                            </h3>
                            <p className="d-block w-100 fw-normal text-capitalize mb-0">
                                {item.title}
                            </p>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p
                            className="w-100 d-flex flex-column justify-content-start align-items-start mb-0 px-2 py-0"
                            dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

export default ItineraryAccordion;
