"use client"
import { getLatestBlogs } from '@/data/Blogs';
import { formatDate } from '@/Utils/util';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

const HorizontalScrollBlogs = ({ blogs }) => {
    const filteredBlogs = getLatestBlogs(blogs.slice(0, 3));
    const allBlogs = [...filteredBlogs, ...filteredBlogs, ...filteredBlogs];
    return (
        <>
            <div className="scroll-wrapper">
                <div className="scroll-container d-flex justify-content-center align-items-center w-100 my-4 gap-2">
                    {
                        allBlogs.slice(0, 10).map((blog, index) => (
                            <div
                                key={index}
                                className='rounded-3 overflow-hidden'
                            >
                                <Link href={`/blog/${blog.slug}`} className='text-white w-100 d-flex justify-content-start align-items-stretch gap-2'>
                                    <div style={{ width: '80px', overflow: 'hidden' }} className='d-flex justify-content-between'>
                                        <Image
                                            src={blog.image}
                                            alt={blog.heading}
                                            className="w-100 h-100 rounded-0"
                                            width={800}
                                            height={800}
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className='p-3'>
                                        <h4 className='web-title mb-0'>
                                            {blog.heading}
                                        </h4>
                                        <div className='color-gray d-flex align-items-center'>
                                            <BiCalendar className='me-2' />{formatDate(blog.date)}
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
