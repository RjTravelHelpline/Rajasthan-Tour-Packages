"use client"
import { Accordion } from "react-bootstrap";
import { FaStarOfLife } from "react-icons/fa";

const ItineraryAccordion = ({ tourItinerary, style, stylePara, showIcon = false, more = false }) => {
    return (
        <Accordion className="w-100">
            {tourItinerary.content.map((item, index) => {
                return (

                    <Accordion.Item
                        className="w-100 d-flex justify-content-between align-items-center flex-column accord-item"
                        eventKey={index.toString()}
                        key={index}
                    >
                        <Accordion.Header className="d-flex w-100 justify-content-between align-items-center accord-head bg-white">
                            {showIcon && (
                                <span className="me-3 bg-tertary-down d-flex p-2 rounded-5 ">
                                    <FaStarOfLife className="icon color-tertary" />
                                </span>
                            )}
                            <div className="d-flex flex-column">
                                <h3 className={`mb-0 accordion-question fw-normal fw-bold text-uppercase w-100 itinerary-title  ${style}`}>
                                    {item.day}
                                </h3>
                                <p className={`d-block w-100 fw-normal text-lowercase mb-0 ${stylePara}`}>
                                    {item.title}
                                </p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p
                                className="w-100 d-flex flex-column justify-content-start align-items-start mb-1 py-0 px-3"
                                dangerouslySetInnerHTML={{ __html: item.content }}
                            />
                            {more && (
                                <div className="key-highlights w-100 mb-2 px-3">
                                    <p className="mb-0 fw-bold text-capitalize">
                                        Key Highlights:
                                    </p>
                                    <ul className="list-group list-group-flush ">
                                        {item.highlights.points.map((highlight, index) => {
                                            return (
                                                <li key={index} className="list-group-item mb-0">
                                                    {highlight}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    );
};

export default ItineraryAccordion;
