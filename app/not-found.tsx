'use client';

import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="error_page">
      <div
        className="hero bg-image"
        style={{
          backgroundImage: 'url(/images/404.jpg)',
        }}
      >
        <div className="content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            404!
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            The page you are looking for could not be found.
          </p>

          <div
            className="button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Link href="/">BACK TO HOME</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;