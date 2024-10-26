"use client";
import SlickSlider from './SlickSlider';
import { GoArrowRight } from 'react-icons/go';
import { FaGripfire } from 'react-icons/fa';
import { blogs, getLatestBlogs } from '@/data/Blogs';
import Link from 'next/link';

const BlogsSection = () => {
  const latestBlogs = getLatestBlogs(blogs);
  const visibleBlogs = latestBlogs.slice(0, 4);

  return (
    <>
      <div className="container-fluid py-5 mb-4">
        <div className="container blogs px-0 py-4">
          <div className="row py-2 px-2 d-flex justify-content-center align-items-center">
            <h2 className="w-auto text-capitalize home-head">
              <span className="fw-normal">latest </span> blogs
              <FaGripfire className="icon" />
            </h2>
          </div>
          <div className="row d-flex justify-content-center py-2">
            <SlickSlider settings={{ slidesToShow: 3, autoplay: false }}>
              {visibleBlogs.map((blog) => {
                const visibleDescription =
                  blog.description.split(' ').slice(0, 5).join(' ') + '...';
                return (
                  <div
                    className={`col-lg-6 col-md-6 col-sm-12 px-2  overflow-auto py-2 d-flex align-items-stretch`}
                    key={blog.date}
                  >
                    <div className="blog-card d-flex flex-column align-items-stretch justify-content-between rounded-4 w-100">
                      <Link href="/" className="view-blog-btn">view now</Link>
                      <div className="blog-image-container w-100 mb-3">
                        <img
                          src={blog.image}
                          alt={blog.heading}
                          className="img-fluid "
                        />
                      </div>
                      <p className="blog-category mb-0">{blog.category}</p>
                      <h3 className="blog-heading">{blog.heading}</h3>
                      <p className="mb-2">{visibleDescription}</p>
                      <div className="row d-flex justify-content-start w-100 align-items-center">
                        <p className="text-muted w-auto blog-author mb-0">
                          {blog.author}
                        </p>
                        <p className="text-muted w-auto px-0 blog-dot mb-0">
                          ▪
                        </p>
                        <p className="text-muted w-auto blog-date mb-0">
                          {blog.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </SlickSlider>
          </div>
          <div className="row d-flex w-100 justify-content-start align-items-center mt-2">
            <button className="more-btn bg-transparent d-flex justify-content-center align-items-center gap-2">
              <Link href="/" to="/blog">
                view more <GoArrowRight />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsSection;
