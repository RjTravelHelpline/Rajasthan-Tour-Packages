"use client"

import { Accordion } from "react-bootstrap";
import { FaCheckCircle, FaFileContract, FaTimesCircle } from "react-icons/fa";
const icons = {
    FaCheckCircle: FaCheckCircle,
    FaTimesCircle: FaTimesCircle,
    FaFileContract: FaFileContract
};

const PackageAccordion = ({ packageData }) => {
    return (
        <Accordion className="w-100 px-2">
            {packageData.map((item, index) => {
                const IconComponent = icons[item.icon]; // Get the corresponding icon component
                return (
                    <Accordion.Item
                        className="w-100 d-flex flex-column accord-item mb-2"
                        eventKey={index.toString()}
                        key={index}
                    >
                        <Accordion.Header className="d-flex w-100 justify-content-between bg-white">
                            {IconComponent && <IconComponent className="icon" />} {/* Render the icon */}
                            <div className="d-flex flex-column">
                                <h4 className="web-title text-black mb-0 accordion-question fw-normal fw-bold text-capitalize w-100 itinerary-title">
                                    {item.title}
                                </h4>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className="w-100 p-2">
                            <p
                                className="w-100 d-flex flex-column justify-content-start align-items-start mb-0 px-2 py-0 accordion-answer text-black"
                                dangerouslySetInnerHTML={{ __html: item.content }}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                );
            })}
        </Accordion>
    );
};

export default PackageAccordion;
