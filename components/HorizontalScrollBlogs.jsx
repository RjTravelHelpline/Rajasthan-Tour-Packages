"use client"
import Image from 'next/image';
import Link from 'next/link';

const HorizontalScrollBlogs = ({ blogs }) => {
    const allBlogs = [...blogs, ...blogs, ...blogs];
    return (
        <>
            <div className="scroll-wrapper py-3">
                <h3 className='text-center text-uppercase'><span className='color-tertary'>•</span>Fresh Insights<span className='color-tertary'>•</span></h3>
                <div className="scroll-container d-flex justify-content-center align-items-center w-100 py-2 my-2 gap-2">
                    {
                        allBlogs.slice(0, 10).map((blog, index) => (
                            <div
                                key={index}
                                className=''
                            >
                                <Link href={`/blog/${blog.slug}`} className='text-white w-100 d-flex justify-content-start align-items-center gap-2 p-3'>
                                    <div style={{ width: '44px', height: '44px', overflow: 'hidden' }} className='rounded-3 d-flex justify-content-center'>
                                        <Image
                                            src={blog.image}
                                            alt={blog.heading}
                                            className="img-fluid w-100 h-100"
                                            width={800}
                                            height={800}
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div>
                                        <p className='mb-0'>
                                            {blog.heading}
                                        </p>
                                        <div className='color-tertary'>
                                            {blog.date}
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
};

export default HorizontalScrollBlogs;
