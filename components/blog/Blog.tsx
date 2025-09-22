'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import { usePortfolio } from '../../lib/context/PortfolioContext';

interface BlogPost {
  id: number;
  img: string;
  title: string;
  commentor: string;
  date: string;
  tag: string;
  description1: string;
  description2: string;
  description3: string;
  link?: string;
}

const Blog: React.FC = () => {
  const { blogsData } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);
  const [singleData, setSingleData] = useState<BlogPost | null>(null);
  const [modalAppElement, setModalAppElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const appElement = document.getElementById('__next');
      if (appElement) {
        setModalAppElement(appElement);
        Modal.setAppElement(appElement);
      }
    }
  }, []);

  const handleBlogModal = (id: number) => {
    const selectedBlog = blogsData.find(blog => blog.id === id);
    if (selectedBlog) {
      setSingleData(selectedBlog);
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="row">
        {blogsData.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
          >
            <article
              className="post-container"
              onClick={() => handleBlogModal(item.id)}
            >
              <div className="post-thumb">
                <div className="d-block position-relative overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="img-fluid"
                  />
                </div>
              </div>
              {/* End .thumb */}
              <div className="post-content">
                <div className="entry-header">
                  <h3>{item.title}</h3>
                </div>
                <div className="entry-content open-sans-font">
                  <p>{item.description1.slice(0, 100)}...</p>
                </div>
              </div>
              {/* End .post-content */}
            </article>
          </div>
        ))}
      </div>

      {/* Blog Post Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Blog Post Details"
        className="custom-modal dark"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <div>
          <button
            className="close-modal"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/images/cancel.svg"
              alt="close icon"
              width={20}
              height={20}
            />
          </button>
          {/* End close icon */}

          {singleData && (
            <div className="box_inner blog-post">
              {/* Article Starts */}
              <article>
                <div className="title-section text-left text-sm-center">
                  <h1>
                    Post <span>Details</span>
                  </h1>
                  <span className="title-bg">posts</span>
                </div>
                {/* Meta Starts */}
                <div className="meta open-sans-font">
                  <span>
                    <i className="fa fa-user"></i> {singleData.commentor}
                  </span>
                  <span className="date">
                    <i className="fa fa-calendar"></i> {singleData.date}
                  </span>
                  <span>
                    <i className="fa fa-tags"></i> {singleData.tag}
                  </span>
                </div>
                {/* Meta Ends */}

                {/* Article Content Starts */}
                <h1>{singleData.title}</h1>
                <Image
                  src={singleData.img}
                  alt="Blog"
                  width={800}
                  height={400}
                  className="img-fluid"
                />
                <div className="blog-excerpt open-sans-font pb-5">
                  <p>{singleData.description1}</p>
                  <div className="quotebox">
                    <div className="icon">
                      <Image
                        src="/images/blog/quote.svg"
                        alt="blog quote"
                        width={40}
                        height={40}
                      />
                    </div>
                    <p>{singleData.description2}</p>
                  </div>
                  <p>{singleData.description3}</p>

                  {singleData.link && (
                    <div className="mt-4">
                      <a
                        href={singleData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Read Full Article
                      </a>
                    </div>
                  )}
                </div>
                {/* Article Content Ends */}
              </article>
              {/* Article Ends */}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Blog;