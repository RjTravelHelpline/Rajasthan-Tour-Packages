import Faq from "@/components/Faq";
import { homeFaq } from "@/data/faqData";
const Faqs = () => {
    return (
        <div className="container faq py-2">
            <div className="row mt-5 d-flex justify-content-center w-100">
                <h1 className="text-capitalize">
                    common asked <span className="fw-normal">questions</span>
                </h1>
                <Faq faqs={homeFaq.questions} />
            </div>
        </div>
    );
};

export default Faqs;
