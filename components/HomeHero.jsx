import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ReadMoreToggle from './ReadMore'

const homeData = {
    heading: ``,
    content: [
        `Explore the diverse and culturally rich regions of Rajasthan, a land of vibrant traditions, majestic forts, and stunning landscapes. Our <strong>Rajasthan Tour Packages Explore Rajasthan with Us</strong> cater to various interests, ensuring an unforgettable journey for every traveler. Our 
      <a
        href='https://www.rajasthantourpackages.in/'
        target="_blank"
        rel="noopener noreferrer"
        class="anchor text-web fw-bold me-1"
      >
        Rajasthan Tour Packages 
      </a> 
      are affordable and <strong>Flexible, Catering To Families And Individuals</strong>. Our meticulously planned itineraries are crafted to make the most of your time, ensuring a smooth and hassle-free experience. With various options available, you can personalize your trip to match your preferences and interests, giving you complete control over your travel plans.`,
        `Experience the royal treatment with our private <strong>Tour Packages To Rajasthan</strong>, where personalized attention is our top priority. This allows you to savor this royal state's incredible sights and sounds at your own pace. Our expert guides will be by your side, sharing their deep knowledge of each destination's rich history, culture, and traditions, making you feel valued and important. We understand your time is precious, so we aim to offer maximum experiences in minimum time. Whether you want to explore the iconic landmarks of Jaipur, immerse yourself in the vibrant culture of Udaipur, witness the architectural wonders of Jodhpur, discover the ancient history of Pushkar, or experience the colorful charm of Jaisalmer, our 
      <a
        href='https://www.rajasthantourpackages.in/'
        target="_blank"
        rel="noopener noreferrer"
        class="anchor text-web fw-bold me-1"
      >
        Rajasthan Tours and Travels 
      </a> Packages cover it all.`,
        `Join us for an unforgettable journey through Rajasthan, where you can create lifelong memories and discover the magic of this incredible region. Let us help you experience the best of Rajasthan with our tailored <strong>Tour Packages For Families </strong> And Individuals , offering a perfect blend of adventure, culture, and relaxation.`,

    ],
};
const HomeHero = () => {
    return (
        <section className="container-fluid bg-tertary-down pt-5">
            <Container className=" home px-0">
                <Col className="col-12 d-flex justify-content-start flex-column align-items-center position-relative">
                    <h1 className="text-center mb-4 fw-normal home-heading web-title text-black">
                        <span className="me-2">Rajasthan Tour Packages</span>
                        <span className="fw-bold">Explore Rajasthan with Us</span>
                    </h1>
                    <p
                        className="text-justify home-para px-2 text-black"
                        dangerouslySetInnerHTML={{ __html: homeData.content[0] }}
                    />
                    <ReadMoreToggle className="text-justify home-para px-2 text-black" tag="div" contentArray={homeData.content.slice(1)} />
                    <div className="py-2"></div>
                </Col>
            </Container>
        </section>
    )
}

export default HomeHero