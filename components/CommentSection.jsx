"use client"

const CommentSection = () => {
    return (
        <>
            <form
                className="col-lg-5 col-md-10 col-sm-12 d-flex justify-content-center align-items-center"
            >
                <div className="blog-comment-form d-flex w-100 flex-column gap-2">
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="p-3 text-white border-0 bg-transparent rounded-0"
                    />
                    <textarea
                        name="content"
                        required
                        placeholder="Your Comment"
                        className="p-3 text-white border-0 bg-transparent rounded-0"
                        rows="4"
                    ></textarea>
                    <button type="submit" className="bg-tertary my-2">
                        post
                    </button>
                </div>
            </form>
        </>
    )
}

export default CommentSection
