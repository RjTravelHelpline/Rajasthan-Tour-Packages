"use client";
import { Accordion } from "react-bootstrap";
import { FaQuestion } from "react-icons/fa6";

const Faq = ({ faqs }) => {
  return (
    <div className="container faq py-2">
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-12 col-lg-9 col-sm-12 d-flex justify-content-center align-items-center">
          <Accordion className="w-100">
            {faqs.map((item, index) => (
              <Accordion.Item
                className="w-100 d-flex justify-content-between align-items-center flex-column mb-2"
                eventKey={index.toString()}
                key={index}
              >
                <Accordion.Header className="d-flex w-100 justify-content-between">
                  <div role="heading" aria-level="3" className="d-flex align-items-center">
                    <FaQuestion className="me-2 accordion-question-icon" />
                    <p className="mb-0 accordion-question fw-normal web-title text-black">
                      {item.question}
                    </p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p
                    className="accordion-answer fw-light text-black"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;