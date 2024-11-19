"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { FaComment, FaCommentAlt } from "react-icons/fa";

const Comment = ({ selectedBlog }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
        selectedBlog: selectedBlog,
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const isValid = formData.name.length >= 4;
        setIsButtonDisabled(!isValid);
    }, [formData]);

    const formattedData = {
        ...formData,
        selectedBlog: selectedBlog,
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]:
                type === "checkbox"
                    ? checked
                    : name === "name"
                        ? value.charAt(0).toUpperCase() + value.slice(1)
                        : value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(
                "https://backend-rtp.onrender.com/api/send-comment",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formattedData),
                }
            );

            // response
            const res_data = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    comment: "",
                    selectedBlog: selectedBlog,
                });
            } else {
                toast.error(res_data.extraDetails || "Error submitting Form");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container contact-container px-0">
            <div className="row d-flex flex-column justify-content-center align-items-center w-100">
                <div className="col-12 w-100 contact-popup">
                    {isSubmitted ? (
                        <div className="insider mt-3 rounded-4 shadow-none form-success-insider">
                            <p className="text-center text-capitalize fw-bold p-3 rounded-4 text-black d-flex justify-content-center flex-column gap-2 align-items-center">
                                <FaCheck className="icon-success" />
                                submitted successfully
                            </p>
                            <p className="text-center text-black mb-0">
                                Contact <span className="fw-bold">Mr. Harsh</span> for further
                                assistance:{" "}
                            </p>
                            <div className="w-100 bg-white py-2 d-flex flex-column justify-content-center align-items-center">
                                <a
                                    href="tel:+91-9024337038"
                                    target="_blank"
                                    className="p-3 px-3 fw-bold social-icon w-auto"
                                >
                                    <IoMdCall className="mx-0 bg-black text-white p-2 fs-1 rounded-5 icon" />{" "}
                                    <span className="px-2"></span>+91-9024337038
                                </a>
                                <a
                                    href="https://wa.me/919166555888"
                                    target="_blank"
                                    className=" p-3 px-3 fw-bold social-icon w-auto"
                                >
                                    <IoLogoWhatsapp className="mx-0 bg-black text-white p-2 fs-1 rounded-5 icon" />{" "}
                                    <span className="px-2"></span>+91-9166555888
                                </a>
                                <p className="text-center package-form p-2 mx-3 w-100 mt-2">
                                    {" "}
                                    <span className="fw-bold text-uppercase">Thankyou!</span>
                                </p>
                            </div>
                        </div>
                    ) : (
                        // Show the form if not submitted
                        <form
                            className="d-flex flex-column gap-2 justify-content-center p-0"
                            onSubmit={handleSubmit}
                        >
                            <div className="bg-tertary-down mt-3 py-2 rounded-4 d-flex flex-column justify-content-center align-items-center">
                                <span className="color-tertary bg-tertary-down rounded-5 p-2 my-2 d-flex justify-content-center align-items-center">
                                    <FaCommentAlt />
                                </span>
                                <h3 className='text-center text-capitalize'>comments <span className="fw-normal"></span></h3>
                                <p>No comments yet. Why don’t you start the discussion?</p>
                            </div>
                            <div className="row p-4">
                                <div className="col-12 my-2 w-100">
                                    <textarea
                                        placeholder="write a comment..."
                                        name="comment"
                                        className="w-100"
                                        cols={40}
                                        rows={2}
                                        value={formData.comment}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12 col-lg-4 col-md-4 col-sm-12 my-2">
                                    <input
                                        type="text"
                                        placeholder="Name*"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-100"
                                    />
                                </div>
                                <div className="col-12 col-lg-4 col-md-4 my-2">
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-100"
                                    />
                                </div>
                                <div className="col-12 col-lg-4 col-md-4 my-2">
                                    <input
                                        type="text"
                                        placeholder="website"
                                        name="website"
                                        required
                                        value={formData.website}
                                        onChange={handleChange}
                                        className="w-100"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={isButtonDisabled || isLoading}
                                className={`btn-submit mx-3 mb-2 ${isButtonDisabled || isLoading
                                    ? "submit-disabled"
                                    : "submit-active"
                                    }`}
                            >
                                {isLoading ? <div className="loading-spinner"></div> : "Post Comment"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Comment;
