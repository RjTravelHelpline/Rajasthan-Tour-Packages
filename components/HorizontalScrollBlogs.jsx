"use client"
import { formatDate } from '@/Utils/util';
import Image from 'next/image';
import Link from 'next/link';
import { MdWidthNormal } from 'react-icons/md';

const HorizontalScrollBlogs = ({ blogs }) => {
    const allBlogs = [...blogs, ...blogs, ...blogs];
    return (
        <>
            <div className="scroll-wrapper pt-3 bg-tertary-down">
                <h3 className='text-center text-uppercase'>Fresh <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>Insights</span></h3>
                <div className="scroll-container d-flex justify-content-center align-items-center w-100  my-4 gap-2">
                    {
                        allBlogs.slice(0, 10).map((blog, index) => (
                            <div
                                key={index}
                                className=''
                            >
                                <Link href={`/blog/${blog.slug}`} className='text-white w-100 d-flex justify-content-start align-items-start gap-2 p-3'>
                                    <div style={{ width: '70px', height: '70px', overflow: 'hidden' }} className='rounded-3 d-flex justify-content-center'>
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
                                        <h4 className='mb-0'>
                                            {blog.heading}
                                        </h4>
                                        <div className='color-gray'>
                                            {formatDate(blog.date)}
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
