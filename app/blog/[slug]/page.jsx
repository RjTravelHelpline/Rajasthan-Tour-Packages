import { blogs } from '@/data/Blogs';
import Image from 'next/image';

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}
const BlogPost = ({ params }) => {
    const blog = blogs.find((b) => b.slug === params.slug);
    if (!blog) {
        return <p>Blog not found</p>;
    }
    return (
        <>
            <div className="container-fluid py-4 blog-slug mt-5 pt-5">
                <div className="container px-0 d-flex justify-content-center align-items-center w-100">
                    <div className="row d-flex justify-content-center align-items-center px-0 w-100">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <div className="slug-image-container mb-4 ">
                                <Image
                                    src={blog.image}
                                    alt={blog.heading}
                                    width={1500}
                                    height={600}
                                />
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
                                <p className="w-auto blog-author mb-0 fw-bold">{blog.author}</p>
                                <p className="color-tertary w-auto px-0 blog-dot mb-0">▪</p>
                                <p className="w-auto blog-date mb-0 fw-bold">{blog.date}</p>
                            </div>
                            <h1>{blog.heading}</h1>
                            <hr style={{ borderColor: 'var(--color-black)' }} />
                            <p style={{ fontWeight: 500 }}>{blog.description}</p>
                            <p>{blog.more}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid py-4 blog-comment bg-black text-white">
                <div className="container">
                    <div className="row py-2 justify-content-center align-items-center">
                        <span className="comment-container color-tertary bg-tertary-down w-auto d-flex justify-content-center align-items-center p-3 rounded-5 mb-2">
                            <BiSolidCommentDetail />
                        </span>
                        <h3 className="text-center text-lowercase">what's on your mind?</h3>
                    </div>
                    <div className="row justify-content-center py-3">
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default BlogPost;
